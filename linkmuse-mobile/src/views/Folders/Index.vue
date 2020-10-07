<template>
  <div class="page page_feed">
    <div class="page__header page__header_feed">
      <div class="row row_justify_between">
        <div class="heading_h4">Подборки</div>
        <a href="javascript:void(0)" @click.stop.prevent="_handleClickCreateFolder" class="btn btn_round btn_primary btn_plus">
          <span>
            <svg class="icon icon_size_16 icon_fill_white">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_plus" />
            </svg>
          </span>
        </a>
      </div>
      <div class="row mt_2">
        <nav class="nav nav_categories nav_categories_feed">
          <div class="nav__list nav__list_categories">
            <a href="javascript:void(0)" :class="['nav__item nav__item_categories', { 'nav__item_categories_active': (isArchived === false) }]" @click="setFilterFolderArchived(0)">Актуальные</a>
            <a href="javascript:void(0)" :class="['nav__item nav__item_categories', { 'nav__item_categories_active' : (isArchived === true) }]" @click="setFilterFolderArchived(1)">Архивные</a>
          </div>
        </nav>
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
        <mt-loadmore :top-method="_handleLoadTopFolders" @top-status-change="_handleTopStatusChangeFolders" ref="loadmore">
          <div v-infinite-scroll="_handleInfiniteScroll" infinite-scroll-disabled="infiniteDisabled" infinite-scroll-distance="200" :style="{ minHeight: height }">
            <folder-card v-for="folder in folders" :key="`folder-${folder['folder_id']}`" :folder="folder" @actionSheet="_handleActionSheetFolder">
            </folder-card>

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
    <create-modal></create-modal>
    <message-modal></message-modal>
    <actionsheet :actions="actionSheet.actions" v-model="actionSheet.value" cancel-text="" @input="_handleInputActionSheet" :lockScroll="true"></actionsheet>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { has, omitEmpty } from '@utils'
  import { mapGetters, mapActions } from 'vuex'
  import { Loadmore, Indicator, Toast } from 'mint-ui'
  import FolderCard from '@components/Folder/Card.vue'
  import EditModal from '@components/Folder/Modals/Edit.vue'
  import MessageModal from '@components/Folder/Modals/Message.vue'
  import CreateModal from '@components/Folder/Modals/Create.vue'

  import { createHelpers } from 'vuex-map-fields'

  const { mapFields } = createHelpers({
    getterType: 'folder/getField',
    mutationType: 'folder/updateField',
  })

  export default {
    components: { 'mt-loadmore': Loadmore, FolderCard, EditModal, MessageModal, CreateModal },
    metaInfo: {
      title: 'Подборки'
    },
    async asyncData ({ store, route }) {
      const { query } = route

      const defaultFields = store.getters['folder/getCatalogFieldsFilter']
      let fields = omitEmpty(_.merge(defaultFields, query), { omitZero: false })

      await store.dispatch('folder/fetchFolders', { fields, offset: 0 })
    },
    data () {
      return {
        height: 0,
        actionSheet: {
          actions: [],
          value: false,
          folder: { id: null }
        },
        loadmore: { topStatus: null }
      }
    },
    computed: {
      ...mapFields({
        fields: 'folders.filter'
      }),
      ...mapGetters({
        user: 'auth/getAuthUser',
        folders: 'folder/getFolders',
        count: 'folder/getCountFolders',
        error: 'folder/getFoldersError',
        offset: 'folder/getOffsetFolders',
        loading: 'folder/getFoldersLoading',
        infiniteDisabled: 'folder/getFoldersInfiniteDisabled'
      }),
      isEmpty () {
        return ( !this.loading && this.count === 0 )
      },
      isArchived () {
        return Boolean(Number(this.fields.archived))
      }
    },
    created () {
      const { query } = this.$route
      this._.merge(this.fields, query)

      this.$root.$on('created-folder', (data) => {
        if (this.isArchived === false) {
          this._addFolder(data)
        }
      })

      this.$root.$on('updated-folder', (folderId, { name }) => {
        const folder = this.$store.getters['folder/getFolderById'](folderId)
        if (folder) {
          this._setFolderFiledById({ id: folderId, key: 'name', value: name })
        }
      })
    },
    mounted () {
      this.height = `${document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top}px`
    },
    methods: {
      ...mapActions({
        _addFolder: 'folder/createFolder',
        _clearFolders: 'folder/clearFolders',
        _fetchFolders: 'folder/fetchFolders',
        _destroyFolderById: 'folder/destroyFolderById',
        _setFolderFiledById: 'folder/setFolderFiledById'
      }),
      _handleInfiniteScroll () {
        this._fetchFolders({ fields: { archived: Number(this.isArchived) }, offset: this.offset })
      },
      _handleLoadTopFolders () {
        this._fetchFolders({ fields: { archived: Number(this.isArchived) }, offset: 0 }).then(() => {
          this.$refs.loadmore.onTopLoaded();
        }).catch(() => console.log('Error loading'))
      },
      _handleTopStatusChangeFolders (status) {
        this.loadmore.topStatus = status
      },
      _handleActionSheetFolder (folderId) {
        const folder = this.$store.getters['folder/getFolderById'](folderId)
        if (folder) {
          const { folder_id: id } = folder
          const countUsers = (has(folder, 'users.meta.count') && folder.users.meta.count)
          const isArchived = Boolean(folder['archived'])
          Object.assign(this.actionSheet.folder, { id })

          if (isArchived === false) {
            this.actionSheet.actions.push({
              name: 'Архивировать',
              method: this._handleClickArchivedFolder
            })

            if (countUsers) {
              this.actionSheet.actions.push({
                name: 'Написать всем',
                method: this._handleClickMessageFolder
              })
            }
          }

          this.actionSheet.actions.push({
            name: 'Редактировать',
            method: this._handleClickEditFolder
          })

          if (isArchived === true) {
            this.actionSheet.actions.push({
              name: 'Восстановить',
              method: this._handleClickRestoreFolder
            })

            this.actionSheet.actions.push({
              name: 'Удалить',
              method: this._handleClickDestroyFolder
            })
          }
        }

        this.actionSheet.value = true
      },
      _handleInputActionSheet (value) {
        if (value === false) {
          this.actionSheet = {
            actions: [],
            value: false,
            folder: { id: null }
          }
        }
      },
      _handleClickArchivedFolder () {
        let { id: folderId } = this.actionSheet.folder

        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'снять',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите архивировать подборку?'
        }).then(() => {
          const folder = this.$store.getters['folder/getFolderById'](folderId)

          if (folder) {
            const backup = this._.cloneDeep(folder)

            this._destroyFolderById(folderId)
            this._archivedFolder(folderId).then(() => {
              Toast({ message: 'Успешно', iconClass: 'mintui mintui-success' })
            }).catch(() => {
              this._addFolder(backup)
              Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
            })
          }
        }).catch(() => {})
      },
      _archivedFolder (folderId) {
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
      _handleClickMessageFolder () {
        let { id: folderId } = this.actionSheet.folder

        const folder = this.$store.getters['folder/getFolderById'](folderId)

        if (folder) {
          const count = folder.users.meta.count

          this.$emit('open-modal-send-folder-message', folderId, count)
        }
      },
      _handleClickEditFolder () {
        let { id: folderId } = this.actionSheet.folder

        const folder = this.$store.getters['folder/getFolderById'](folderId)
        if (folder) {
          const { name } = folder
          this.$emit('open-modal-edit-folder', folderId, { name })
        }
      },
      _handleClickRestoreFolder () {
        let { id: folderId } = this.actionSheet.folder

        const folder = this.$store.getters['folder/getFolderById'](folderId)

        if (folder) {
          const backup = this._.cloneDeep(folder)

          this._destroyFolderById(folderId)
          this._restoreFolder(folderId).then(() => {
            Toast({ message: 'Успешно', iconClass: 'mintui mintui-success' })
          }).catch(() => {
            this._addFolder(backup)
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
          })
        }
      },
      _restoreFolder (folderId) {
        return new Promise((resolve, reject) => {
          this.$api.patch(`/api/v1/folders/${folderId}`, { archived: 0 }).then(response => {
            let { data } = response
            resolve && resolve(folderId)
          }).catch(error => {
            reject && reject(error)
            throw new Error('Error restore folder.')
          })
        })
      },
      _handleClickDestroyFolder () {
        let { id: folderId } = this.actionSheet.folder

        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'удалить',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите удалить подборку?'
        }).then(() => {
          const folder = this.$store.getters['folder/getFolderById'](folderId)

          if (folder) {
            const backup = this._.cloneDeep(folder)

            this._destroyFolderById(folderId)
            this._destroyFolder(folderId).then(() => {
              Toast({ message: 'Успешно', iconClass: 'mintui mintui-success' })
            }).catch(() => {
              this._addFolder(backup)
              Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
            })
          }
        }).catch(() => {})
      },
      _destroyFolder (folderId) {
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
      _handleClickCreateFolder () {
        this.$emit('open-modal-create-folder')
      },
      setFilterFolderArchived (archived) {
        if (Number(this.fields.archived) !== Number(archived)) {
          this.$set(this.fields, 'archived', Number(archived))

          this._clearFolders().then(() => {
            const query = omitEmpty(this.fields, { omitZero: false })
            this.$router.push({ query })
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
