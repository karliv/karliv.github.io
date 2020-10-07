<template>
  <div class="page page_feed">
    <div class="page__header page__header_feed">
      <div class="row row_justify_between align_center mb_3">
        <button class="btn btn_rounded btn_back" @click="_handleClickPreviousPage">
          <svg class="icon icon_back">
            <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_back" />
          </svg>
        </button>
        <button @click="_handleActionSheetFolder" class="btn btn_rounded">
          <svg class="icon icon_size_16">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_options" />
          </svg>
        </button>
      </div>
      <div class="row row_justify_between">
        <div class="heading_h4">{{ name }}</div>
      </div>
      <div class="row mt_2">
        <span class="fsize_12">Всего: {{ $pluralize(countUsers, ['человек', 'человека', 'человек']) }}</span>
      </div>
    </div>

    <div :class="['page__content', { 'empty': isEmpty }]" ref="wrapper">
      <template v-if="(isEmpty === true)">
        <div class="page__plug page__plug_feed_empty-list" style="height: auto;">
          <svg class="icon icon_size_lg icon_fill_blue mb_5">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_info" />
          </svg>
          <div class="heading heading_h5">Тут пока пусто</div>
        </div>
      </template>
      <template v-if="(isEmpty === false)">
        <mt-loadmore :top-method="_handleLoadTopUsers" @top-status-change="_handleTopStatusChangeUsers" ref="loadmore">
          <div v-infinite-scroll="_handleInfiniteScrollUsers" infinite-scroll-disabled="infiniteDisabledUsers" infinite-scroll-distance="200" :style="{ minHeight: height }">
            <user-card v-for="user in users" :key="`folder-user-${user.id}`" :user="user" @actionSheet="_handleActionSheetUser">
            </user-card>

            <lm-m-loader v-if="loading && loadmore.topStatus !== 'loading'" :style="{ marginTop: '15px' }"></lm-m-loader>
          </div>

          <div slot="top" class="mint-loadmore-top">
            <template v-if="loadmore.topStatus === 'loading'"><lm-m-loader></lm-m-loader></template>
            <span v-if="loadmore.topStatus !== 'loading'" :class="['arrow', { 'rotate': loadmore.topStatus === 'drop' }]">↓</span>
          </div>
        </mt-loadmore>
      </template>
    </div>

    <edit-modal></edit-modal>
    <message-modal></message-modal>
    <actionsheet :actions="actionSheetUser.actions" v-model="actionSheetUser.value" cancel-text="" @input="_handleInputActionSheetUser" :lockScroll="true"></actionsheet>
    <actionsheet :actions="actionSheetFolder.actions" v-model="actionSheetFolder.value" cancel-text="" @input="_handleInputActionSheetFolder" :lockScroll="true"></actionsheet>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { Loadmore, Indicator, Toast } from 'mint-ui'

  import UserCard from '@components/Folder/UserCard.vue'
  import EditModal from '@components/Folder/Modals/Edit.vue'
  import MessageModal from '@components/Folder/Modals/Message.vue'

  export default {
    components: { 'mt-loadmore': Loadmore, UserCard, EditModal, MessageModal },
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
        height: 0,
        actionSheetFolder: {
          actions: [],
          value: false,
        },
        actionSheetUser: {
          actions: [],
          value: false,
          user: { id: null }
        },
        loadmore: { topStatus: null }
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
    mounted () {
      this.height = `${document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top}px`
    },
    methods: {
      ...mapActions({
        _addUser: 'folder/createUserFolder',
        _clearUsers: 'folder/clearUsersFolder',
        _fetchUsers: 'folder/fetchUsersByFolderId',
        _destroyUserById: 'folder/destroyUserFolderById',
        _setFieldFolderData: 'folder/setFieldFolderData'
      }),
      _handleActionSheetFolder () {

        if (this.isArchived === false) {
          this.actionSheetFolder.actions.push({
            name: 'Архивировать',
            method: this._handleClickArchivedFolder
          })

          if (this.countUsers) {
            this.actionSheetFolder.actions.push({
              name: 'Написать всем',
              method: this._handleClickMessageFolder
            })
          }
        }

        this.actionSheetFolder.actions.push({
          name: 'Редактировать',
          method: this._handleClickEditFolder
        })

        if (this.countUsers) {
          this.actionSheetFolder.actions.push({
            name: 'Очистить',
            method: this._handleClickClearFolder
          })
        }

        if (this.isArchived === true) {
          this.actionSheetFolder.actions.push({
            name: 'Восстановить',
            method: this._handleClickRestoreFolder
          })

          this.actionSheetFolder.actions.push({
            name: 'Удалить',
            method: this._handleClickDestroyFolder
          })
        }

        this.actionSheetFolder.value = true
      },
      _handleInputActionSheetFolder (value) {
        if (value === false) {
          this.actionSheetFolder = {
            actions: [],
            value: false
          }
        }
      },
      _handleActionSheetUser (userId) {
        Object.assign(this.actionSheetUser.user, { id: userId })

        this.actionSheetUser.actions.push({
          name: 'Удалить',
          method: this._handleDestroyUser
        })

        this.actionSheetUser.value = true
      },
      _handleInputActionSheetUser (value) {
        if (value === false) {
          this.actionSheetUser = {
            actions: [],
            value: false,
            user: { id: null }
          }
        }
      },
      _handleLoadTopUsers () {
        const { id } = this.$route.params
        this._fetchUsers({ id, offset: 0 }).then(() => {
          this.$refs.loadmore.onTopLoaded();
        }).catch(() => console.log('Error loading'))
      },
      _handleTopStatusChangeUsers (status) {
        this.loadmore.topStatus = status
      },
      _handleInfiniteScrollUsers () {
        const { id } = this.$route.params
        this._fetchUsers({ id, offset: this.offsetUsers })
      },
      _handleDestroyUser () {
        let { id: userId } = this.actionSheetUser.user

        const user = this.$store.getters['folder/getUserFolderById'](userId)
        if (user) {
          const backup = this._.cloneDeep(user)

          this._destroyUserById(userId)
          this._destroyUser(userId).then(() => {
            Toast({ message: 'Успешно', iconClass: 'mintui mintui-success' })
          }).catch(() => {
            this._addUser(backup)
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
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
          Indicator.open()
          this._destroyFolder().then(() => {
            Indicator.close()
            this.$router.push({ name: 'folders.index' })
            Toast({ message: 'Успешно', iconClass: 'mintui mintui-success' })
          }).catch(() => {
            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
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
        Indicator.open()

        this.$api.patch(`/api/v1/folders/${folderId}`, { archived: 0 }).then(response => {
          Indicator.close()
          let { data } = response
          Toast({ message: 'Успешно', iconClass: 'mintui mintui-success' })
        }).catch(error => {
          Indicator.close()
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
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
          Indicator.open()

          this._setFieldFolderData({ key: 'archived', value: 1 })
          this._handleArchivedFolder().then(() => {
            Indicator.close()
            Toast({ message: 'Успешно', iconClass: 'mintui mintui-success' })
          }).catch(() => {
            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
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
          Indicator.open()
          this._clearFolder().then(() => {
            Indicator.close()
            this._clearUsers()
            Toast({ message: 'Успешно', iconClass: 'mintui mintui-success' })
          }).catch(() => {
            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
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
      },
      _handleClickPreviousPage () {
        if (window.history.length > 2) {
          this.$router.go(-1)
        } else this.$router.push({ name: 'folders.index' })
      }
    }
  }
</script>

<style scoped>

</style>
