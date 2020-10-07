<template>
  <div class="wrapper" :style="{ paddingTop: 0 }">
    <div class="content carts-page">
      <div class=".profile__info">
        <div class="profile__projects well">
          <div class="profile__projects--header well--header">
            <span>Подборки</span>
          </div>

          <div class="profile__info--content pd-26">
            <ul role="tablist" class="nav nav-tabs flex-start-center">
              <li role="presentation" :class="{ 'active': (isArchived === false) }" @click="setFilterFolderArchived(0)">
                <a href="javascript:void(0)" role="tab">Актуальные</a>
              </li>

              <li role="presentation" :class="{ 'active' : (isArchived === true) }" @click="setFilterFolderArchived(1)">
                <a href="javascript:void(0)" role="tab">Архивные</a>
              </li>

              <div class="profile__info--controls" :style="{ right: 0 }">
                <div class="d-btn d-btn_primary lm-primary-button very-small" @click="_handleClickCreateFolder">Создать подборку</div>
              </div>
            </ul>

            <div class="tab-content">
              <div class="folders-list folders-list-page row" v-infinite-scroll="_handleInfiniteScroll" infinite-scroll-disabled="infiniteDisabled" infinite-scroll-distance="900">
                <folder-card v-for="folder in folders" :key="`folder-${folder['folder_id']}`"
                             :folder="folder"
                             @edit="_handleEditFolder"
                             @restore="_handleRestoreFolder"
                             @destroy="_handleDestroyFolder"
                             @messages="_handleMessageFolder"
                             @archived="_handleArchivedFolder">
                </folder-card>

                <lm-loader v-if="loading" class="col-xs-12 fix-margin-bottom"></lm-loader>

                <template v-if="isEmpty">
                  <div class="folder-null pd-26" :style="{ fontSize: '15px', paddingLeft: 0 }">
                    <template v-if="(isArchived === false)">
                      <span>У вас еще нет подборок.</span>
                      <a href="javascript:void(0)" class="d-link" @click="_handleClickCreateFolder">Создать подборку?</a>
                    </template>
                    <template v-if="(isArchived === true)">
                      <span>Список архивных подборок пуст.</span>
                    </template>
                  </div>
                </template>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <edit-modal></edit-modal>
    <create-modal></create-modal>
    <message-modal></message-modal>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { omitEmpty } from '@utils'
  import { mapGetters, mapActions } from 'vuex'
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
    components: { FolderCard, EditModal, MessageModal, CreateModal },
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
      return {}
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
      _handleDestroyFolder (folderId) {
        const folder = this.$store.getters['folder/getFolderById'](folderId)
        if (folder) {
          const backup = this._.cloneDeep(folder)

          this._destroyFolderById(folderId)
          this._destroyFolder(folderId).then(() => {
            this.$notify({ type: 'success', title: 'Успешно', text: 'Подборка успешно удалена.' })
          }).catch(() => {
            this._addFolder(backup)
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
          })
        }
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
      _handleEditFolder (folderId) {
        const folder = this.$store.getters['folder/getFolderById'](folderId)
        if (folder) {
          const { name } = folder
          this.$emit('open-modal-edit-folder', folderId, { name })
        }
      },
      _handleRestoreFolder (folderId) {
        const folder = this.$store.getters['folder/getFolderById'](folderId)
        if (folder) {
          const backup = this._.cloneDeep(folder)

          this._destroyFolderById(folderId)
          this._restoreFolder(folderId).then(() => {
            this.$notify({ type: 'success', title: 'Успешно', text: 'Подборка успешно восстановлена.' })
          }).catch(() => {
            this._addFolder(backup)
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
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
      _handleMessageFolder (folderId) {
        const folder = this.$store.getters['folder/getFolderById'](folderId)
        if (folder) {
          const count = folder.users.meta.count
          this.$emit('open-modal-send-folder-message', folderId, count)
        }
      },
      _handleArchivedFolder (folderId) {
        const folder = this.$store.getters['folder/getFolderById'](folderId)
        if (folder) {
          const backup = this._.cloneDeep(folder)

          this._destroyFolderById(folderId)
          this._archivedFolder(folderId).then(() => {
            this.$notify({ type: 'success', title: 'Успешно', text: 'Подборка успешно архивирована.' })
          }).catch(() => {
            this._addFolder(backup)
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
          })
        }
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
