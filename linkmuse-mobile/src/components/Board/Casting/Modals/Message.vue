<template>
  <mt-popup class="lm-m-modal-wrap modal_write-all modal__content" v-model="modal.value" position="center" :modal="true" :lockScroll="true" @input="_handleInputPopup">
    <template v-if="(modal.success === false)">
      <div class="row">
        <div class="column ta_center">
          <div class="heading heading_h5">Массовая рассылка</div>
          <div>{{ totalResponses }} {{ addressees }}</div>
        </div>
      </div>
      <div class="row mt_1">
        <div class="column">
          <div class="textarea">
            <textarea
              placeholder="Начните писать сообщение"
              name="message"
              class="textarea__field"
              v-model="fields.message"></textarea>
          </div>
          <div class="upload-zone mt_3">
            <lm-dropzone :label="''" :mediaModal="false" :max-items="10" class="upload-zone__field"
                         :multiple="true" :accept="acceptedFiles"
                         @onUpload="_handleAttach"
                         @onRemove="_handleAttachRemove"
                         @update="handleUpdateAttachItems">
            </lm-dropzone>
          </div>
        </div>
      </div>

      <div class="row justify_end mt_3">
        <button class="btn btn_primary w_100" @click="_handleClickSendButton">Отправить</button>
      </div>
    </template>

    <template v-if="(modal.success === true)">
      <div class="headgin heading_h5">Сообщения отправлены</div>
      <div>Мы успешно отправили ваши сообщения адресатам</div>
    </template>
  </mt-popup>
</template>

<script>
  import PopupMix from '@components/Mixins/Popup'
  import { Popup, Toast, Indicator } from 'mint-ui'
  import Dropzone from '@components/UI/Dropzone/Index.vue'
  import { VIDEO, PHOTO } from '@components/UI/Dropzone/Enums/Types'
  import { RECEIVED, SELECTED } from '@modules/Board/Casting/Response/Enums/ResponseState'

  const BASE_URL_UPLOAD = process.env.BASE_URL_UPLOAD

  export const ACCEPT_PHOTO = 'image/*'
  export const ACCEPT_VIDEO = 'video/*'
  export const ACCEPT_DOCUMENT = '.doc,.docx,.pdf,.zip,.rar,.txt,.xls,.xlsx,.ods,.ppt,.pptx'

  export default {
    components: { 'mt-popup': Popup, 'lm-dropzone': Dropzone },
    mixins: [PopupMix],
    data () {
      return {
        modal: {
          value: false,
          success: false,
          loading: false,
          castingId: null,
          totalResponses: 0,
          fields: {
            state: null,
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
      totalResponses () {
        return this.modal.totalResponses
      },
      addressees () {
        let titles = ['адресат', 'адресата', 'адресатов']
        return this.$pluralize(this.totalResponses, titles, false)
      },
      acceptedFiles () {
        return [ ACCEPT_PHOTO, ACCEPT_VIDEO ]
      }
    },
    mounted () {
      this.$parent.$on('open-modal-send-selected-responses-messages', (casting, totalResponses, state) => {
        const { id, slug } = casting

        this.modal.fields.state = state
        this.modal.castingId = id
        this.modal.totalResponses = totalResponses

        if (state === RECEIVED)
          this.modal.fields.message = `Здравствуйте!

Спасибо за отклик на кастинг (https://linkmuse.com/boards/castings/${slug}-${id}).
К сожалению, на этот на проект Ваш типаж не подошел.
Будем рады сотрудничеству в дальнейшем.

Хорошего дня!`

        this.modal.value = true
      })
    },
    methods: {
      _handleInputPopup (value) {
        if (value === false) {
          this._handleClearModal()
        }
      },
      _handleClearModal () {
        this.modal = {
          value: false,
          success: false,
          loading: false,
          castingId: null,
          totalResponses: 0,
          fields: {
            state: null,
            message: '',
            attachments: []
          }
        }
      },
      _handlePasteImage () {},
      _handleShowEmojiPicker () {},
      _handleClickSendButton () {
        let { fields: { state, message, attachments }, castingId } = this.modal

        if ((!message || message.length === 0 || /^\s*$/.test(message)) && !attachments.length) return

        Indicator.open()
        this.modal.loading = true

        this.$api.post(`api/v2/boards/castings/${castingId}/responses/messages`, { state, message, attachments }).then(response => {
          let { data } = response
          this.modal.success = true

          Indicator.close()
          this.modal.loading = false

          setTimeout(() => {
            this.modal.value = false

            this.$nextTick(() => {
              this._handleClearModal()
            })
          }, 2000)
        }).catch((err) => {
          Indicator.close()
          this.modal.loading = false

          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

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
  }
  textarea.textarea__field {
    overflow: scroll;
  }
</style>
