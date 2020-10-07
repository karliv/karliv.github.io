<template>
  <mt-popup class="lm-m-modal-wrap lm-modal-folders lm-m-abuse" v-model="modal.value" position="center" :modal="true" @input="_handleInputPopup">
    <div class="modal-folders-content">
      <div class="title">
        <strong>Добавить в подборку</strong>
      </div>

      <div class="ta_center">
        <template v-if="(showCreateFolder === false)">
          <a href="javascript:void(0)" class="fw_600 color_main fsize_14" @click="_handleClickOpenCreateFolder"> + Создать новую подборку</a>
        </template>
        <template v-if="(showCreateFolder === true)">
          <div class="column w_100">
            <div class="d-input d-input_row">
              <div class="column">
                <div class="d-row">
                  <div class="form__group form__group_declaration">
                    <input type="text" autocomplete="off" autofocus
                           id="folderName" name="name" data-vv-name="name" ref="folderName"
                           :data-vv-as="'Название папки'" :placeholder="'Введите название'"
                           v-model="fields.name"
                           v-validate="'required|max:256'"
                           :class="[{ 'error': (verrors.has('name')) }, 'input', 'form__input', 'form__input_declaration']">
                    <template v-if="verrors.has('name')">
                      <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('name') }}</div>
                    </template>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </template>
      </div>

      <div id="container-carts" style="max-height:236px; overflow-y: auto;">
        <ul class="add-cart-list" @click.stop>
          <template v-if="folders.data.length">
            <li v-for="folder in folders.data" :key="`folder-${folder['folder_id']}`" @click="_handleClickAddOrRemove(userId, folder)">
              <span>{{ folder.name }}</span>
              <!--User is already in cart-->
              <i v-if="checkIfViewedUserInFolder(userId, folder.users, folder) && !added[folder.folder_id]"
                 class="icon-ok view"></i>
              <!--User is not in cart-->
              <i v-if="!checkIfViewedUserInFolder(userId, folder.users, folder) && !added[folder.folder_id] && !removed[folder.folder_id]"
                 class="icon-ok"></i>
              <!--User has just been added to a cart-->
              <div class="add-cart--saved view"
                   v-if="checkIfViewedUserInFolder(userId, folder.users, folder) && added[folder.folder_id]">Сохранено</div>
              <!--User has just been removed from a cart-->
              <div class="add-cart--removed view"
                   v-if="!checkIfViewedUserInFolder(userId, folder.users, folder) && removed[folder.folder_id]">Удалено</div>
            </li>
          </template>

          <template v-if="(folders.loading === false && folders.data.length === 0)">
            <li @click="_handleClickOpenCreateFolder"><span>У Вас еще не создано ни одной подборки</span></li>
          </template>
        </ul>

        <lm-m-loader v-if="(folders.loading === true)" class="mt_3 mb_3"></lm-m-loader>
      </div>

      <template v-if="(showCreateFolder === false)">
        <a href="javascript:void(0)" class="btn btn_primary" @click="_handleCloseModal">Сохранить</a>
      </template>
      <template v-else-if="(showCreateFolder === true)">
        <template v-if="(modal.loading === true)">
          <lm-m-loader :style="{ margin: '0 auto', marginTop: '32px', marginBottom: '32px' }"></lm-m-loader>
        </template>
        <template v-if="(modal.loading === false)">
          <a href="javascript:void(0)" class="btn btn_primary" @click="_handleClickCreateFolder">Создать</a>
        </template>
      </template>

    </div>
  </mt-popup>
</template>

<script>
  export default {
    data () {
      return {
        modal: {
          added: [],
          user: null,
          removed: [],
          value: false,
          loading: false,
          showCreateFolder: false,
          fields: {
            name: null
          },
          folders: {
            data: [],
            count: 0,
            offset: 0,
            limit: 24,
            error: false,
            loading: false,
            infiniteDisabled: false,
          }
        }
      }
    },
    computed: {
      showCreateFolder () {
        return this.modal['showCreateFolder']
      },
      fields () {
        return this.modal.fields
      },
      folders () {
        return this.modal.folders
      },
      userId () {
        return this.modal.user.id
      },
      added () {
        return this.modal.added
      },
      removed () {
        return this.modal.removed
      }
    },
    mounted () {
      this.$root.$on('open-modal-add-user-on-folder', ({ user }) => {
        this.modal.user = user
        this.modal.value = true

        this._fetchFolders(this.modal.user.id)
      })
    },
    methods: {
      _handleInputPopup (value) {
        if (value === false) {
          this._handleCloseModal()
        }
      },
      _handleCloseModal ()  {
        this._handleClearModal()
      },
      _handleClearModal () {
        this.modal.value = false

        setTimeout(() => {
          this.modal = {
            added: [],
            user: null,
            removed: [],
            value: false,
            loading: false,
            showCreateFolder: false,
            fields: {
              name: null
            },
            folders: {
              data: [],
              count: 0,
              offset: 0,
              limit: 24,
              error: false,
              loading: false,
              infiniteDisabled: false,
            }
          }
        }, 500)
      },
      _handleClickCreateFolder () {
        this._handleValidateFields().then(() => {
          this.modal.loading = true
          this.$api.post(`/api/v1/folders`, this.fields).then((response) => {
            const { data: { data } } = response

            this.modal.folders.data.push(data)
            this._addUserFolder(this.userId, data['folder_id'])

            this.modal.loading = false

            this._handleClickCloseCreateFolder()
          }, (error) => {
            const { response: { data, status }} = error

            this.$notify({
              type: 'error',
              title: 'Ошибка',
              text: 'Произошла ошибка при создании подборки.'
            })

            this.modal.loading = false

            if (status === 422) {
              this.$setLaravelValidationErrorsFromResponse(data)
            } else throw new Error('Error create folder')
          })
        }).catch(() => {})
      },
      _handleClickOpenCreateFolder () {
        this.modal.showCreateFolder = true
      },
      _handleClickCloseCreateFolder () {
        this.modal.showCreateFolder = false
        this.modal.fields.name = null
      },
      /**
       * Validate all fields on current transition
       * @returns {Promise<any>}
       * @private
       */
      _handleValidateFields () {
        return new Promise((resolve, reject) => {
          this.$validator.validateAll().then(result => {
            if (result) {
              resolve(result)
            } else reject()
          })
        })
      },
      _fetchFolders (userId) {
        this.modal.folders.loading = true

        this.$api.get(`api/v1/folders/users/${userId}`).then((response) => {
          let { data: { data, meta } } = response

          data.forEach(item => this.modal.folders.data.push(item))

          if (meta) {
            let { count, new_offset : offset } = meta

            this.modal.folders.infiniteDisabled = (offset >= count)
            this.modal.folders.count = count
            this.modal.folders.offset = offset
          }

          this.modal.folders.loading = false
        }, (error) => {
          const { response: { data, status }} = error

          this.$notify({
            type: 'error',
            title: 'Ошибка',
            text: 'Произошла ошибка при создании подборки.'
          })

          this.modal.folders.loading = false
          throw new Error('Error create loading folders')
        })
      },
      _handleClickAddOrRemove (userId, folder) {
        if (this.checkIfViewedUserInFolder(userId, folder.users, folder)) {
          return this._removeUserFolder(userId, folder['folder_id'])
        } else if (!this.checkIfViewedUserInFolder(userId, folder.users, folder)) {
          return this._addUserFolder(userId, folder['folder_id'])
        }
      },
      checkIfViewedUserInFolder (viewedUserId, usersInFolder, folder) {
        folder = folder || null

        if (folder) {
          return (!!folder['user_exists'])
        }

        if (usersInFolder.length === 0) {
          return usersInFolder.some(user => user.id === viewedUserId)
        }

        return false
      },
      _addUserFolder (userId, folderId) {
        let index = this.modal.folders.data.findIndex(folder => folder['folder_id'] === folderId)

        if (index > -1) {
          this.$nextTick(() => {
            this.modal.folders.data[index].users.push({ data: { id: userId } })
            this.modal.folders.data[index].user_exists = true;

            this.modal.added[folderId] = true

            setTimeout(() => this.modal.added = [], 2000)
          })

          this.$api.post(`api/v1/folders/${folderId}/users`, { user: userId }).then((response) => {
            let { data } = response
            this.$gtm.trackEvent({ event: 'add_selection' })
            this.$root.$emit('user-updated-state-folder', userId, true)
          }, (error) => {
            const { response: { data, status }} = error

            this.$notify({
              type: 'error',
              title: 'Ошибка',
              text: 'Произошла ошибка при создании подборки.'
            })

            throw new Error('Error create remove user in folders')
          })
        }
      },
      _removeUserFolder (userId, folderId) {
        let index = this.modal.folders.data.findIndex(folder => folder['folder_id'] === folderId)
        if (index > -1) {
          let userIndex = this.folders.data[index].users.findIndex(user => user.id === userId)

          this.$nextTick(() => {
            if (userIndex > -1) {
              this.modal.removed[folderId] = true
              this.folders.data[index]['user_exists'] = false
              this.folders.data[index].users.splice(userIndex, 1)
            } else {
              this.modal.removed[folderId] = true;
              this.folders.data[index]['user_exists'] = false
            }

            setTimeout(() => this.modal.removed = [], 2000)
          })

          this.$api.delete(`api/v1/folders/${folderId}/users/${userId}`).then((response) => {
            let { data: { data: { inFolder } } } = response

            this.$root.$emit('user-updated-state-folder', userId, inFolder)
          }, (error) => {
            const { response: { data, status }} = error

            this.$notify({
              type: 'error',
              title: 'Ошибка',
              text: 'Произошла ошибка при создании подборки.'
            })

            throw new Error('Error create remove user in folders')
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
