<template>
  <modal class="modal-center modal_write-all" v-model="modal.value" @hide="_handleCloseModal()" :header="false" :footer="false">
    <template v-if="(modal.success === false)">
      <div class="d-row justify_between align_center">
        <div class="heading heading_h4 mb_0">Написать всем</div>
        {{ addressees }}
      </div>
      <div class="d-row mt_6">
        <div class="d-column">
          <div class="d-textarea">
            <textarea
              placeholder="Начните писать сообщение"
              id="emoji-area-dialog"
              v-model="fields.message"
              :class="['d-textarea__field']"></textarea>
          </div>
          <div class="d-upload-zone mt_3">
            <lm-dropzone :label="'Прикрепить файлы'" :mediaModal="false" :max-items="10" class="d-upload-zone__field"
                         :multiple="true" :accept="acceptedFiles"
                         @onUpload="_handleAttach"
                         @onRemove="_handleAttachRemove"
                         @update="handleUpdateAttachItems">
            </lm-dropzone>
          </div>
        </div>
      </div>

      <div class="d-row justify_end mt_6">
        <lm-loader v-if="(modal.loading === true)"></lm-loader>
        <template v-if="(modal.loading === false)">
          <button class="d-btn d-btn_primary" @click="_handleClickSendButton">Отправить</button>
        </template>
      </div>
    </template>
    <template v-if="(modal.success === true)">
      <div class="headgin heading_h5">Сообщения отправлены</div>
      <div>Мы успешно отправили ваши сообщения адресатам</div>
    </template>
  </modal>
</template>

<script>
  import DropZone from '@components/UI/Dropzone/Custom/Index.vue'
  import { VIDEO, PHOTO } from '@components/UI/Dropzone/Custom/Enums/Types'
  import { RECEIVED, SELECTED } from '@modules/Board/Casting/Response/Enums/ResponseState'

  const BASE_URL_UPLOAD = process.env.BASE_URL_UPLOAD

  export const ACCEPT_PHOTO = 'image/*'
  export const ACCEPT_VIDEO = 'video/*'
  export const ACCEPT_DOCUMENT = '.doc,.docx,.pdf,.zip,.rar,.txt,.xls,.xlsx,.ods,.ppt,.pptx'

  export default {
    components: { 'lm-dropzone': DropZone },
    data () {
      return {
        modal: {
          value: false,
          countUser: 0,
          success: false,
          loading: false,
          folderId: null,
          fields: {
            message: '',
            attachments: []
          }
        }
      }
    },
    computed: {
      fields () {
        return this.modal.fields
      },
      countUser () {
        return this.modal.countUser
      },
      addressees () {
        let titles = ['адресат', 'адресата', 'адресатов']
        return this.$pluralize(this.countUser, titles, false)
      },
      acceptedFiles () {
        return [ ACCEPT_PHOTO, ACCEPT_VIDEO ]
      }
    },
    mounted () {
      this.$parent.$on('open-modal-send-folder-message', (folderId, countUser) => {

        this.modal.folderId = folderId
        this.modal.countUser = countUser

        this.modal.value = true
      })
    },
    methods: {
      _handleCloseModal () {
        this.modal.value = false
        this._handleClearModal()
      },
      _handleClearModal () {
        this.modal = {
          value: false,
          countUser: 0,
          success: false,
          loading: false,
          folderId: null,
          fields: {
            message: '',
            attachments: []
          }
        }
      },
      _handlePasteImage () {},
      _handleShowEmojiPicker () {},
      _handleClickSendButton () {
        let { fields: { message, attachments }, folderId } = this.modal

        if ((!message || message.length === 0 || /^\s*$/.test(message)) && !attachments.length) return

        this.modal.loading = true

        this.$api.post(`api/v1/folders/${folderId}/newsletter`, { message, attachments }).then(response => {
          let { data } = response
          this.modal.success = true

          this.modal.loading = false

          setTimeout(() => {
            this.$nextTick(() => {
              this._handleCloseModal()
            })
          }, 2000)
        }).catch((err) => {

          this.modal.loading = false
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

          throw new Error(`Error send message`)
        })
      },
      clearInput () {
        this.fields.message = null
        this.$emit('clear-emoji-area')
      },
      _handleAttach (...args) {
        if (args[0].type === PHOTO)
          this.handleUploadPhoto(...args)
        else if (args[0].type === VIDEO)
          this.handleUploadVideo(...args)
      },
      _handleAttachRemove (item, remove) {
        remove(item.uid)
      },
      handleUploadPhoto (item, file, progress, success, error) {
        let data = new FormData()

        data.append('file',file)

        this.$api.post('api/v1/dialogs/messages/upload-photo', data, {
          baseURL: BASE_URL_UPLOAD,
          cancelToken: item.source.token,
          timeout: 120000,
          onUploadProgress (progressEvent) {
            progress(item.uid, progressEvent)
          }
        }).then(response => {
          const { data: { id, path } } = response

          success(item.uid, { id, path })
        }).catch((err) => {
          error(item.uid, err, 'file')
          console.error('Error upload photo')
        })
      },
      handleUploadVideo (item, file, progress, success, error) {
        let data = new FormData()

        data.append('file',file)

        this.$api.post('api/v1/dialogs/messages/upload-video', data, {
          baseURL: BASE_URL_UPLOAD,
          cancelToken: item.source.token,
          timeout: 120000,
          onUploadProgress (progressEvent) {
            progress(item.uid, progressEvent)
          }
        }).then(response => {
          const { data: { id, path, player } } = response

          success(item.uid, { id, url: path, video: player })
        }).catch((err) => {
          error(item.uid, err, 'file')
          console.error('Error upload video')
        })
      },
      handleUpdateAttachItems (items) {
        this.modal.fields.attachments = items
      }
    }
  }
</script>

<style lang="scss" scoped>
  .im_editable {
    text-align: left;
    word-break: break-all;

    width: 100%;
    height: 40px;
    color: #515562;
    font-size: 14px;
    border-radius: 8px;
    background-color: #FFFFFF;
    padding-left: 15px;
    line-height: 40px;
  }

  textarea.d-textarea__field {
    &:hover, &:focus {
      color: #515562;
    }
  }
</style>
