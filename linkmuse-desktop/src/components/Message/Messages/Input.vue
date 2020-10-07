<template>
  <div class="history__content--edit">
    <div>
      <div style="position: relative">
        <emoji-input-area name="message"
          id="emoji-area-dialog" ref="emoji-area-dialog"
          :placeholder="$t('dialogs.history-of-messages.start')"
          :readonly="false"
          @input="_handleInputMessage"
          @paste:image="_handlePasteImage"
          @key:enter="_handleClickSendButton"
          @key:tab="_handleShowEmojiPicker"
          v-model="fields.text">
        </emoji-input-area>

        <div class="message-form-action">
          <label for="lm-upload-files-messages" :class="{ 'action-button' : true, disabled: (canUploadAttachments === false) }"></label>
          <input type="file" id="lm-upload-files-messages" ref="attachedInputFile" :disabled="(canUploadAttachments === false)" class="input-upload-files-messages"
                 @change="_handleChangeAttachments" :multiple="true" :accept="acceptedFiles">

          <div class="emoji" @click="_handleShowEmojiPicker" id="emoji-button-dialog">
            <emoji-input-picker v-show="emoji.picker"
              ref="emoji"
              area="emoji-area-dialog"
              btn="emoji-button-dialog"
              @hide="_handleHideEmojiPicker"
              @insert:emoji="_handleInsertEmoji"
              class="link-muse-emoji-picker">
            </emoji-input-picker>
          </div>
          <div :class="['send', { active: (fields.text) }]" @click="_handleClickSendButton"></div>
        </div>
      </div>
      <div class="files-message flex-wrap-bettwen-start">
        <template v-for="item in attachments.items">
          <template v-if="!item.remove">
            <div :class="['files', 'flex-start-center', 'attachments--item-wrap', {
              'loading': item.loading, 'show-item': item.show,
              'hide-item': item.hide, 'error': item.error }]">

              <template v-if="item.loading || item.error">
                <a href="javascript:void(0)" class="attachments--item-media">
                  <template v-if="item.type === 'photo' || item.type === 'video'">
                    <img :src="item.thumbnail" :alt="item.description" :ref="item.uid">
                  </template>

                  <template v-if="item.type === 'document'">
                    <file-type :label="item.extension.toUpperCase()"></file-type>
                  </template>

                  <template v-if="item.loading && item.uploading && !item.error" >
                    <lm-progress-loader class="attachments--item--loader"
                      :color="'ffffff'" :width="16" :height="16"
                      :percent="item.progress"></lm-progress-loader>
                  </template>

                  <template v-if="item.error">
                    <tooltip effect="scale" placement="top" :content="item.errorText || 'Ошибка загрузки'">
                      <i class="attachments--item--alert"></i>
                    </tooltip>
                  </template>
                </a>
              </template>

              <template v-if="!item.loading && !item.error">
                <template v-if="item.type === 'photo'">
                  <media :media="item" type="photo" :src="item.path" class="attachments--item-media"
                         :album="`messageDialogForm-${recipient_id}`">
                    <img :src="item.thumbnail" :alt="item.description" :ref="item.uid">
                  </media>
                </template>
                <template v-if="item.type === 'video'">
                  <media :media="item" type="video" class="attachments--item-media"
                         :player="item.player" :album="`messageDialogForm-${recipient_id}`">
                    <img :src="item.thumbnail" :alt="item.description" :ref="item.uid">
                  </media>
                </template>
                <template v-if="item.type === 'document'">
                  <a :href="item.path" download class="attachments--item-media">
                    <file-type :label="item.extension.toUpperCase()"></file-type>
                  </a>
                </template>
              </template>

              <div style="text-align: left;">
                <div class="files--name">{{ item.description | placeholder('Файл') }} </div>
                <div class="files--size">{{ (item.size) ? humanFileSize(item.size) : 'Неизвестно' }}</div>
              </div>

              <i class="icon-close2" @click.stop.prevent="_handleClickRemoveAttachmentItem(item.uid)"></i>
            </div>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Loader from '@components/UI/ProgressBar/Loader.vue'
  import { has, generateUUID, humanFileSize, resizeImage, isBrowser } from '@utils'

  export const ACCEPT_PHOTO = 'image/*'
  export const ACCEPT_VIDEO = 'video/*'
  export const ACCEPT_DOCUMENT = '.doc,.docx,.pdf,.zip,.rar,.txt,.xls,.xlsx,.ods,.ppt,.pptx'

  let queue = []
  const VIDEO_THUMBNAIL = '/dist/img/default_video.jpg'
  const BASE_URL_UPLOAD = process.env.BASE_URL_UPLOAD
  const PHOTO_THUMBNAIL = 'data:image/svg+xml;utf8,<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect width="200" height="200" fill="%23fff"/></svg>'

  export default {
    components: { 'lm-progress-loader': Loader },
    props: {
      dialog_id: {
        type: String,
        required: true
      },
      recipient_id: {
        type: Number,
        required: true
      }
    },
    data () {
      return {
        fields: {
          text: null,
          recipient_id: this.recipient_id
        },
        emoji: {
          picker: false
        },
        attachments: {
          maxItems: 10,
          loading: false,
          maxFileSize: 109000,
          queueInterval: null,
          items: []
        }
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser'
      }),
      attachmentsData () {
        return this.attachments.items.filter(item => !item.remove)
      },
      attachmentsCount () {
        return this.attachmentsData.length
      },
      uploadedAttachmentsItems () {
        return this.attachmentsData.filter(item => !item.error && item.id)
      },
      canUploadAttachments () {
        return (this.attachments.maxItems && this.attachments.maxItems > this.attachmentsCount)
      },
      uploadingAttachmentsCount () {
        return this.attachmentsData.filter(item => !item.error && !item.id && item.loading && item.uploading).length
      },
      acceptedFiles () {
        return [ ACCEPT_PHOTO, ACCEPT_VIDEO, ACCEPT_DOCUMENT ]
      }
    },
    watch: {
      'fields.text' () {
        let channel = this.$echo.private(`dialog.${this.dialog_id}`)
        setTimeout(() => {
          channel.whisper('typing', {
            dialog_id: this.dialog_id,
            typing: true
          })
        }, 300)
      }
    },
    created () {
      const { uid } = this.$route.params

      if (isBrowser) {
        let messages = this.$localStorage.get('messages', {}, Object)
        if (messages.hasOwnProperty(String(uid)) && messages[String(uid)]) {
          this.fields['text'] = messages[String(uid)]
        }
      }
    },
    mounted () {
      this.$parent.$on('retry', (message) => {
        let { uuid } = message

        this.$api.post(`/api/v1/dialogs/messages`, { ...message, }).then(response => {
          let { data: { data } } = response
          this.$emit('send', data, uuid)
        }).catch((err) => {
          this.$emit('error', uuid)
          throw new Error(`Error send message`)
        })
      })
    },
    methods: {
      _handleInputMessage (value) {
        let messages = this.$localStorage.get('messages', {}, Object)
        messages[String(this.dialog_id)] = value
        this.$localStorage.set('messages', JSON.stringify(messages))
      },
      _handlePasteImage () {},
      _handleShowEmojiPicker () {
        this.emoji.picker = true
      },
      _handleHideEmojiPicker () {
        this.emoji.picker = false
      },
      _handleInsertEmoji (text) {
        this.$emit('parse:emoji', text)
      },
      _handleClickSendButton () {
        let { text, recipient_id } = this.fields
        let attachments = JSON.parse(JSON.stringify(this.uploadedAttachmentsItems))

        if ((!text || text.length === 0 || /^\s*$/.test(text)) && !attachments.length) return

        let uuid = generateUUID()
        this.generatePreSendMessage(uuid).then((message) => {
          this.$emit('presend', message)
          this._handleInputMessage()
          this._clearInput()
        })

        this.$api.post(`/api/v1/dialogs/messages`, { text, recipient_id, attachments }).then(response => {
          let { data: { data } } = response
          this.$emit('send', data, uuid)
        }).catch((err) => {
          this.$emit('error', uuid)
          throw new Error(`Error send message`)
        })
      },
      generatePreSendMessage (uuid) {
        return new Promise((resolve, reject) => {

          let { text, recipient_id } = this.fields
          let attachments = JSON.parse(JSON.stringify(this.uploadedAttachmentsItems))

          let message = {
            uuid,
            text,
            attachments,
            read: false,
            error: false,
            recipient_id,
            from_id: this.user.id,
            me_avatar: this.user.avatar,
            date: this.$moment().format('DD-MM-YYYY'),
            sent: this.$moment().format('DD-MM-YYYY HH:mm:ss'),
            sent_time: this.$moment().format('HH:mm:ss'),
            from: {
              data: {
                name: this.user.fullname,
                avatar: this.user.avatar,
                href: this.user.href
              }
            }
          }
          resolve(message)
        })
      },
      _clearInput () {
        this.fields.text = null
        this.$emit('clear-emoji-area')
        this.attachments['items'] = this.attachmentsData.filter(item => !item.error && !item.id && item.loading && item.uploading)
      },
      _handleChangeAttachments (el) {
        let files = el.target.files || el.dataTransfer.files
        if (!files.length) { return }

        const maxItems = this.attachments.maxItems
        let count = this.attachmentsCount

        this.attachments.loading = true
        this._clearInputFileAttach()

        this._.forEach(files, (file, i) => {
          if (maxItems && count === maxItems) return false
          setTimeout(() => {
            if (file.type.includes('image/')) {
              this._createImage(file)
            } else if (file.type.includes('video/')) {
              this._createVideo(file)
            } else this._createDocument(file)
          }, ((i < 2 ? 100 : 1000) + i * 200))
          count++
        })
      },
      _createImage (file) {
        let reader = new FileReader()
        let item = {
          id: null,
          path: null,
          show: false,
          hide: false,
          error: false,
          loading: true,
          remove: false,
          type: 'photo',
          size: file.size,
          errorText: null,
          uploading: false,
          description: null,
          uid: generateUUID(),
          thumbnail: PHOTO_THUMBNAIL,
          source: this.$api.getSource()
        }

        reader.onload = (el) => {
          item.path = el.target.result

          const defaultRender = () => this.$nextTick(() => {
            item.path = el.target.result
            item.thumbnail = el.target.result

            this.$refs[item.uid][0].onload = () => {
              item.show = true
            }
          })

          resizeImage(el.target.result, 60).then(({ src }) => {
            item.thumbnail = src
            item.show = true
          }).catch(err => defaultRender())

          reader.onerror = error => console.log(error);
        }

        this.attachments.items.push(item)

        if (file.size > this.fileSize) {
          console.log(`Максимальный размер ${humanFileSize(this.fileSize)}`)
        } else this._handleUploadAttachment(file, item, 'api/v1/dialogs/messages/upload-photo')

        reader.readAsDataURL(file)
      },
      _createVideo (file) {
        let item = {
          id: null,
          path: null,
          show: true,
          hide: false,
          error: false,
          loading: true,
          remove: false,
          type: 'video',
          size: file.size,
          errorText: null,
          uploading: false,
          description: null,
          uid: generateUUID(),
          thumbnail: VIDEO_THUMBNAIL,
          source: this.$api.getSource()
        }

        this.attachments.items.push(item)

        if (file.size > this.fileSize) {
          console.log(`Максимальный размер ${humanFileSize(this.fileSize)}`)
        } else this._handleUploadAttachment(file, item, 'api/v1/dialogs/messages/upload-video')
      },
      _createDocument (file) {
        const { name: filename } = file
        let item = {
          id: null,
          path: null,
          show: true,
          hide: false,
          error: false,
          loading: true,
          remove: false,
          errorText: null,
          type: 'document',
          extension: (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : 'file',
          size: file.size,
          uploading: false,
          uid: generateUUID(),
          description: filename,
          source: this.$api.getSource()
        }

        this.attachments.items.push(item)

        if (file.size > this.fileSize) {
          console.log(`Максимальный размер ${humanFileSize(this.fileSize)}`)
        } else this._handleUploadAttachment(file, item, 'api/v1/dialogs/messages/upload-document')
      },
      _handleUploadAttachment (file, item, api) {
        if (!file) return

        queue.push({ file, item, api })

        this._handleQueueAttachments(api)
      },
      _handleQueueAttachments () {
        if (this.attachments.queueInterval) return

        this.attachments.queueInterval = setInterval(() => {

          if (!queue.length) {
            clearInterval(this.attachments.queueInterval)
            this.attachments.queueInterval = null
            return false
          }

          if (this.uploadingAttachmentsCount < 2) {
            let { item, file, api } = queue.shift()

            item.uploading = true

            this._handleQueueAttachments()
            this._handleUploadToServer(item, file, api).then(({ uid, data }) => {
              this._handleUploadAttachmentSuccess(uid, data)
            }).catch(({ uid, text }) => {
              this._handleUploadAttachmentError(uid, text)
            })
          }
        }, 1000)
      },
      _handleUploadToServer (item, file, api) {
        return new Promise((resolve, reject) => {

          const vm = this
          let data = new FormData()
          data.append('file', file)

          this.$api.post(api, data, {
            timeout: 120000,
            baseURL: BASE_URL_UPLOAD,
            cancelToken: item.source.token,
            onUploadProgress (progressEvent) {
              vm._handleUploadAttachmentProgress(item.uid, progressEvent)
            }
          }).then((response) => {
            const { data } = response
            resolve && resolve({ uid: item.uid, data })

          }, (error) => {
            let text = null
            const { response } = error

            if (response) {
              const { data, status } = response
              if (status === 422 && has(data, 'errors')) {
                const { errors } = data
                text = JSON.stringify(errors['file'][0])
              }
            }

            reject && reject({ uid: item.uid, text })
            if (!response) throw new Error('Error upload attach')
          })
        })
      },
      _handleUploadAttachmentProgress (uid, event) {
        this.$nextTick(() => {
          let index = this.attachments.items.findIndex(item => item.uid === uid)

          if (index < 0) return

          let progress = Math.floor((event.loaded * 100) / event.total)

          this.$set(this.attachments.items[index], 'progress', progress )
        })
      },
      _handleUploadAttachmentSuccess (uid, data) {
        this.attachments.loading = false

        this.$nextTick(() => {
          let index = this.attachments.items.findIndex(item => item.uid === uid)

          if (index < 0) return

          let item = this.attachments.items[index]
          item.loading = false
          item.progress = 100
          item.id = data.id

          if (has(data,'player'))
            this.$set(item, 'player', data.player)

          if (has(data, 'path'))
            this.$set(item, 'path', data.path)

          this.attachments.items[index] = item
        })
      },
      _handleUploadAttachmentError (uid, text) {
        this.attachments.loading = false

        this.$nextTick(() => {
          let index = this.attachments.items.findIndex(item => item.uid === uid)

          if (index < 0) return

          let item = this.attachments.items[index]

          if (!item.show) return

          item.error = true

          if (text) item.errorText = text
          setTimeout(() => this._handleUploadRemoveAttachment(uid), 10000)
        })
      },
      _handleUploadRemoveAttachment (uid, status) {
        this.attachments.loading = false

        this.$nextTick(() => {
          let index = this.attachments.items.findIndex(item => item.uid === uid)

          if (index < 0) return

          if (typeof status !== 'undefined' && status === false){
            this.attachments.items[index].loading = false

            return
          }

          let item = this.attachments.items[index]

          item.show = false
          item.hide = true
          setTimeout(() => {
            item.remove = true
          }, 500)
        })
      },
      _handleClickRemoveAttachmentItem (uid) {
        let index = this.attachments.items.findIndex(item => item.uid === uid)

        if (index < 0) return

        let item = this.attachments.items[index]

        return this._removeAttachmentItem(item)
      },
      _removeAttachmentItem (item) {
        if (item.loading && has(item, 'source'))
          item.source.cancel()

        if (item.id) {
          item.loading = true
          item.progress = 50
          item.error = false
          this._handleUploadRemoveAttachment(item.uid)
        } else {
          let index = this.attachments.items.findIndex(e => e.uid === item.uid)

          this.$nextTick(() => {
            let item = this.attachments.items[index]

            item.show = false
            item.hide = true

            setTimeout(() => {
              item.remove = true
            }, 500)
          })
        }
      },
      _clearInputFileAttach () {
        const input = this.$refs.attachedInputFile
        input.type = 'text'
        input.type = 'file'
      },
      humanFileSize (size) {
        return humanFileSize(size)
      }
    }
  }
</script>

<style lang="sass" scoped>
  .im_editable
    padding-left: 20px
    margin-top: 10px
    margin-bottom: 10px
    padding-right: 185px
    padding-top: 0
    padding-bottom: 0
    min-height: 48px
    max-height: 100px
    border: 0
    overflow: auto
    width: 100%
    color: #000000
    font-size: 15px
    font-family: -apple-system, BlinkMacSystemFont, Roboto, Arial
    line-height: 22px
  .history__content--edit
    .message-form-action
      .action-button
        cursor: pointer
        &.disabled
          opacity: 0.5
          cursor: not-allowed
      .input-upload-files-messages
        display: none
    .files-message
      .attachments--item-wrap
        width: 20% !important
        &.loading
          .attachments--item-media
            &:after
              content: ''
              display: block
              position: absolute
              height: 100%
              width: 100%
              background: #000000
              opacity: 0.05
              top: 0
              left: 0
              border-radius: 2px
            img, .file-type
              filter: blur(1.5px)
        &.hide-item
          transform: scale(0.3)
          animation: media-out .5s
        &.show-item
          animation: media-in .5s
          opacity: 1
          transform: scale(1)
        .attachments--item-media
          margin-right: 12px
          position: relative
          img
            margin-right: 0
            object-fit: cover
          .attachments--item--loader
            height: 100%
            width: 100%
            position: absolute
            left: 0
            top: 0
            display: flex
            align-items: center
            justify-content: center
            z-index: 4
            pointer-events: none
          .attachments--item--alert
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="%23FC2E5F" fill-rule="evenodd" d="M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm2 0c0 3.3 2.7 6 6 6s6-2.7 6-6-2.7-6-6-6-6 2.7-6 6z" clip-rule="evenodd"/><path fill="%23FC2E5F" d="M7 4h2v5H7V4zM8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>')
            background-repeat: no-repeat
            background-size: contain
            width: 16px
            height: 16px
            position: absolute
            left: 0
            top: 0
            right: 0
            bottom: 0
            margin: auto
            z-index: 6
</style>
