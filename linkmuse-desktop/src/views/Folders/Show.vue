<template>
  <div class="wrapper" :style="{ paddingTop: 0 }">
    <div class="content carts-page">
      <div class="profile__info">

        <div class="profile__projects well folder-page">
          <div class="profile__projects--header well--header row">
            <div class="folder-header col-xs-8" :style="{ lineHeight: '28px' }">
              <router-link :to="{ name: 'folders.index' }">Все подборки <i style="font-size: 10px;margin-left: 5px;" class="icon-right-arrow"></i></router-link>
              <span> {{ name }}
                <span style="padding-left: 10px;color: #b3b4ba;">Всего: {{ $pluralize(countUsers, ['человек', 'человека', 'человек']) }}</span>
              </span>
              <template v-if="(description)">
                <span class="desc">{{ description }}</span>
              </template>
            </div>
            <div class="projects--action col-xs-4">
              <router-link :to="{ name: 'talents.index' }" class="lm-primary-button very-small">Добавить таланта</router-link>
              <i class="icon-more" style="padding: 7px;">
                <div class="actions-item">
                  <ul>
                    <template v-if="(isArchived === false)">
                      <li><a href="javascript:void(0)" @click="_handleClickArchivedFolder">Архивировать</a></li>
                      <template v-if="(countUsers)">
                        <li><a href="javascript:void(0)" @click="_handleClickMessageFolder">Написать всем</a></li>
                      </template>
                    </template>
                    <li><a href="javascript:void(0)" @click="_handleClickEditFolder">Редактировать</a></li>
                    <template v-if="(countUsers)">
                      <li><a href="javascript:void(0)" @click="_handleClickClearFolder">Очистить</a></li>
                    </template>
                    <template v-if="(isArchived === true)">
                      <li><a href="javascript:void(0)" @click="_handleClickRestoreFolder">Восстановить</a></li>
                      <li><a href="javascript:void(0)" @click="_handleClickDestroyFolder">Удалить</a></li>
                    </template>
                  </ul>
                </div>
              </i>
            </div>
          </div>
          <div class="cart-list-people">
            <div class="friends--list row" v-infinite-scroll="_handleInfiniteScrollUsers" infinite-scroll-disabled="infiniteDisabledUsers" infinite-scroll-distance="900">
              <user-card v-for="user in users" :key="`folder-user-${user.id}`" :user="user"
                @move="_handleMoveUser"
                @remove="_handleDestroyUser">
              </user-card>

              <lm-loader v-if="loadingUsers"></lm-loader>

              <template v-if="(isEmpty === true)">
                <div class="col-xs-12 pd-26 empty-follow flex-aling-center-column">
                  В этой подборке пока что нет ни одного человека.
                  <router-link :to="{ name: 'users.index' }" class= "button searchtalents">Найти пользователей</router-link>
                </div>
              </template>
            </div>
          </div>
        </div>

      </div>
      <div class="clr"></div>
    </div>

    <edit-modal></edit-modal>
    <message-modal></message-modal>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import UserCard from '@components/Folder/UserCard.vue'
  import EditModal from '@components/Folder/Modals/Edit.vue'
  import MessageModal from '@components/Folder/Modals/Message.vue'

  export default {
    components: { UserCard, EditModal, MessageModal },
    metaInfo () {
      return {
        title: this.name,
        meta: [
          { name: 'og:type', content: 'website' },
          { name: 'og:title', content: this.name },
          { name: 'description', content: this.$truncate(this.$striptags(this.description), 200) },
          { name: 'og:description', content: this.$truncate(this.$striptags(this.description), 200) },
          { name: 'og:image', content: 'https://s3.eu-central-1.amazonaws.com/linkmuse/upload/logo/logo_without_bottom_text_682.png' }
        ]
      }
    },
    async asyncData ({ store, route }) {
      const { id } = route.params

      await store.dispatch('folder/getFolderById', { id })
      await store.dispatch('folder/fetchUsersByFolderId', { id, offset: 0 })
    },
    data () {
      return {

      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser',
        users: 'folder/getUsersFolder',
        folder: 'folder/getShowFolderData',
        error: 'folder/getShowFolderError',
        loading: 'folder/getShowFolderLoading',
        countUsers: 'folder/getCountUsersFolder',
        errorUsers: 'folder/getUsersFolderError',
        offsetUsers: 'folder/getOffsetUsersFolder',
        loadingUsers: 'folder/getUsersFolderLoading',
        infiniteDisabledUsers: 'folder/getUsersFolderInfiniteDisabled'
      }),
      isEmpty () {
        return ( !this.loadingUsers && this.countUsers === 0 )
      },
      name () {
        return this.folder.name
      },
      description () {
        return this.folder.description
      },
      isArchived () {
        return Boolean(this.folder['archived'])
      }
    },
    created () {
      this.$root.$on('updated-folder', (folderId, { name }) => {
        if (this.folder['folder_id'] === folderId) {
          this._setFieldFolderData({ key: 'name', value: name })
        }
      })
    },
    methods: {
      ...mapActions({
        _addUser: 'folder/createUserFolder',
        _clearUsers: 'folder/clearUsersFolder',
        _fetchUsers: 'folder/fetchUsersByFolderId',
        _destroyUserById: 'folder/destroyUserFolderById',
        _setFieldFolderData: 'folder/setFieldFolderData'
      }),
      _handleInfiniteScrollUsers () {
        const { id } = this.$route.params
        this._fetchUsers({ id, offset: this.offsetUsers })
      },
      _handleMoveUser (id) {
        console.log('move user')
      },
      _handleDestroyUser (userId) {
        const user = this.$store.getters['folder/getUserFolderById'](userId)
        if (user) {
          const backup = this._.cloneDeep(user)

          this._destroyUserById(userId)
          this._destroyUser(userId).then(() => {
            this.$notify({ type: 'success', title: 'Успешно', text: 'Пользователь успешно удален.' })
          }).catch(() => {
            this._addUser(backup)
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
          })
        }
      },
      _destroyUser (userId) {
        return new Promise((resolve, reject) => {
          const { folder_id: folderId } = this.folder
          this.$api.delete(`/api/v1/folders/${folderId}/users/${userId}`).then(response => {
            let { data } = response
            resolve && resolve(userId)
          }).catch(error => {
            reject && reject(error)
            throw new Error('Error destroy user.')
          })
        })
      },
      _handleClickDestroyFolder () {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'удалить',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите удалить подборку?'
        }).then(() => {
          const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })
          this._destroyFolder().then(() => {
            loader.hide()
            this.$router.push({ name: 'folders.index' })
            this.$notify({ type: 'success', title: 'Успешно', text: 'Подборка успешно удалена.' })
          }).catch(() => {
            loader.hide()
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
          })
        }).catch(() => {})
      },
      _destroyFolder () {
        const { folder_id: folderId } = this.folder
        return new Promise((resolve, reject) => {
          this.$api.delete(`/api/v1/folders/${folderId}`).then(response => {
            let { data } = response
            resolve && resolve(folderId)
          }).catch(error => {
            reject && reject(error)
            throw new Error('Error destroy folder.')
          })
        })
      },
      _handleClickRestoreFolder () {
        const { folder_id: folderId } = this.folder

        this._setFieldFolderData({ key: 'archived', value: 0 })
        const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

        this.$api.patch(`/api/v1/folders/${folderId}`, { archived: 0 }).then(response => {
          loader.hide()
          let { data } = response
          this.$notify({ type: 'success', title: 'Успешно', text: 'Подборка успешно восстановлена.' })
        }).catch(error => {
          loader.hide()
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
          this._setFieldFolderData({ key: 'archived', value: 1 })
          throw new Error('Error restore folder.')
        })
      },
      _handleClickArchivedFolder () {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'архивировать',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите архивировать подборку?'
        }).then(() => {
          const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

          this._setFieldFolderData({ key: 'archived', value: 1 })
          this._handleArchivedFolder().then(() => {
            loader.hide()
            this.$notify({ type: 'success', title: 'Успешно', text: 'Подборка успешно архивирована.' })
          }).catch(() => {
            loader.hide()
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
            this._setFieldFolderData({ key: 'archived', value: 0 })
          })
        }).catch(() => {})
      },
      _handleArchivedFolder () {
        const { folder_id: folderId } = this.folder
        return new Promise((resolve, reject) => {
          this.$api.patch(`/api/v1/folders/${folderId}`, { archived: 1 }).then(response => {
            let { data } = response
            resolve && resolve(folderId)
          }).catch(error => {
            reject && reject(error)
            throw new Error('Error archived folder.')
          })
        })
      },
      _handleClickClearFolder () {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'очистить',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите очистить подборку?'
        }).then(() => {
          const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })
          this._clearFolder().then(() => {
            loader.hide()
            this._clearUsers()
            this.$notify({ type: 'success', title: 'Успешно', text: 'Подборка успешно очищена.' })
          }).catch(() => {
            loader.hide()
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
          })
        }).catch(() => {})
      },
      _clearFolder () {
        const { folder_id: folderId } = this.folder
        return new Promise((resolve, reject) => {
          this.$api.delete(`/api/v1/folders/${folderId}/users`).then(response => {
            let { data } = response
            resolve && resolve(folderId)
          }).catch(error => {
            reject && reject(error)
            throw new Error('Error clear folder.')
          })
        })
      },
      _handleClickMessageFolder () {
        const { folder_id: folderId } = this.folder
        this.$emit('open-modal-send-folder-message', folderId, this.countUsers)
      },
      _handleClickEditFolder () {
        const { folder_id: folderId, name } = this.folder
        this.$emit('open-modal-edit-folder', folderId, { name })
      }
    }
  }
</script>

<style scoped>

</style>
