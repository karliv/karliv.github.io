<template>
  <div :class="[ { 'drag' : drag, 'empty' : empty, 'disabled': disabled, 'lm-dropzone' : isDropZone  } ]" :style="{ 'margin-bottom': errorsHeight }">
    <label :for="inputId" class="lm-dropzone--uploader">
      <template v-if="empty">
        <template v-if="!dictDefaultMessage">
          <i class="icon-upload"></i>
          <span v-if="label">{{ label }}<template v-if="multiple && maxItems"><br>(Max {{ maxItems }})</template></span>
        </template>
        <template v-else>
          <div class="lm-dropzone--label" v-html="dictDefaultMessage"></div>
        </template>
      </template>
      <input
        :multiple="multiple"
        @dragenter="_handleOnDrag" @dragleave="_handleOffDrag"
        @dragend="_handleOffDrag" @dragexit="_handleOffDrag"
        :disabled="disabled"
        v-if="!loading && can_upload" :id="inputId" class="input-uploaded-photo" type="file" @change="_handleChange"
        :accept="acceptInput">
      <template v-for="(item) in items.data">
        <div v-if="!item.remove" :class="[ { 'loading': item.loading, 'show-item': item.show, 'hide-item': item.hide, 'error': item.error }, 'lm-dropzone--item' ]">
          <div class="lm-dropzone--item--wrap">
            <i @click.stop.prevent="_handleRemoveItem(item.uid)" class="lm-dropzone--item--remove"></i>
            <template v-if="mediaModal">
              <template v-if="item.type === PHOTO">
                <media :key="item.id" :media="item" type="photo" :src="item.paths.original" :ref="`media-${item.id}`">
                  <img :src="item.paths['128x128']" :ref="item.uid" alt="">
                </media>
              </template>
              <template v-else-if="item.type === VIDEO && has(item,'video')">
                <media :media="item.video" type="video" :player="item.video.player">
                  <img :src="item.paths['128x128']" :ref="item.uid" alt="">
                </media>
              </template>
              <template v-else>
                <img :src="item.paths['128x128']" :ref="item.uid" alt="">
              </template>
            </template>
            <template v-else>
              <img :src="item.paths['128x128']" :ref="item.uid" alt="">
            </template>
            <span v-if="showNumbers" class="number-ss-sertificate-photo">{{ item.number }}</span>
            <span v-if="item.duration" class="lm-dropzone--item--duration">
              <template v-if="item.duration < 3600">{{item.duration | moment('mm:ss')}}</template>
              <template v-else>{{item.duration | moment('HH:mm:ss')}}</template>
            </span>
            <lm-progress-loader v-if="item.loading && item.uploading && !item.error" :color="'ffffff'" :width="16" :height="16"
                       :percent="item.progress"></lm-progress-loader>
            <button v-if="!item.loading && item.uploading && !item.error && item.type === PHOTO && rotate" @click="_handleRotate(item)" class="rotate"><i></i></button>
            <i v-if="item.error" class="lm-dropzone--item--alert"></i>
          </div>
          <div v-if="item.error" class="lm-dropzone--error">
            <span v-if="item.error_text">{{ item.error_text }}</span>
            <span v-else>ошибка загрузки</span>
          </div>
        </div>
      </template>
    </label>
    <div class="lm-dropzone--errors" v-if="hasErrors" :ref="'errors'">
      <template v-for="(item) in errors">
        <span class="lm-dropzone--errors--item">{{ item.text }}</span>
      </template>
    </div>
  </div>
</template>

<script>
  import { VIDEO, PHOTO } from './Enums/Types'
  import * as RotateType from './Enums/RotateTypes'
  import Loader from '@components/UI/ProgressBar/Loader.vue'
  import { has, generateUUID, humanFileSize, isBrowser, resizeImage } from '@utils'
  import { VIDEO_THUMBNAIL, PHOTO_THUMBNAIL, ACCEPT_PHOTO, ACCEPT_VIDEO, LABEL } from './Enums/Defautls'

  const REMOVE_TIMER = 10000
  let queue = []

  export default {
    name: 'lm-dropzone',
    data () {
      return {
        has,
        VIDEO, PHOTO,
        drag: false,
        queueInterval: null,
        inputId: 'upload_files',
        loading: '',
        items: {
          data: [],
          uploadReady: false,
        },
        errors: []
      }
    },
    props: {
      isDropZone: {
          default: true,
          type: Boolean
      },
      defaultItems: {
        default: () => [],
        type: Array
      },
      multiple: {
        default: false,
        type: Boolean
      },
      mediaModal: {
        default: false,
        type: Boolean
      },
      showNumbers: {
        default: false,
        type: Boolean
      },
      accept: {
        default: () => [ACCEPT_PHOTO],
        type: Array
      },
      videoThumbnail: {
        default: VIDEO_THUMBNAIL,
        type: String
      },
      maxItems: {
        default: 100,
        type: Number
      },
      maxFileSize: {
        default: 109000,
        type: Number
      },
      label: {
        default: LABEL,
        type: String
      },
      dictDefaultMessage: {
        default: null,
        type: String
      },
      disabled: {
        default: false,
        type: Boolean
      },
      rotate: {
        default: true,
        type: Boolean
      }
    },
    watch: {
      errors () {
        let height = this.errorsHeight
      }
    },
    components: { 'lm-progress-loader': Loader },
    computed: {
      itemsData () {
        return this.items.data.filter(item => !item.remove)
      },
      count () {
        return this.itemsData.length
      },
      empty () {
        return !this.count
      },
      uploadedItems () {
        return this.itemsData.filter(item => !item.error && item.id)
      },
      acceptInput () {
        if (!this.accept)
          return [ACCEPT_PHOTO]

        return this.accept.join(',')
      },
      can_upload () {
        return (this.maxItems && this.multiple && this.maxItems > this.count) || (!this.multiple && !this.count) || (this.maxItems < 0 && this.multiple)
      },
      fileSize () {
        return this.maxFileSize * 1024
      },
      uploadingCount () {
        return this.itemsData.filter(item => !item.error && !item.id && item.loading && item.uploading).length
      },
      hasErrors () {
        return this.errors.length
      },
      errorsHeight: {
        get () {
          if (!this.hasErrors || !isBrowser || typeof this.$refs.errors === 'undefined') return null

          const marginBottom = this.$el.style.marginBottom
          const errorsHeight = this.$refs.errors.offsetHeight

          return `${errorsHeight + (marginBottom ? parseInt(marginBottom) : 0)}px`
        }
      }
    },
    created () {
      this.inputId = `upload_files-${generateUUID()}`
      if (this.defaultItems && this.defaultItems.length)
        this.items.data = this.defaultItems.map((item, index) => {
          return {
            ...item,
            uid: generateUUID(),
            loading: false,
            progress: 100,
            error: false,
            remove: false,
            show: true,
            hide: false,
            number: index + 1
          }
        })
    },
    methods: {
      _handleUploadProgress (uid, event) {
        this.$nextTick(() => {
          let index = this.items.data.findIndex(item => item.uid === uid)

          if (index < 0) return

          this.items.data[index].progress = event.loaded / event.total * 100
        })
      },
      _handleUploadSuccess (uid, data) {
        this.loading = false

        this.$nextTick(() => {
          let index = this.items.data.findIndex(item => item.uid === uid)

          if (index < 0) return

          let item = this.items.data[index]

          if (item.id && item.id !== data.id) {
            this.$emit('onRemove', {...item}, (uid, status) => {})
          }

          item.loading = false
          item.progress = 100
          item.id = data.id

          //TODO вызывает подвисания
          // item.paths['original'] = data.path

          if (has(data,'video'))
            item.video = data.video

          this.items.data[index] = item
          this.$emit('update', JSON.parse(JSON.stringify(this.uploadedItems)))
        })
      },
      _handleUploadError (uid, error, field) {
        this.loading = false

        this.$nextTick(() => {
          let index = this.items.data.findIndex(item => item.uid === uid)

          if (index < 0) return

          let item = this.items.data[index]

          if (!item.show && !item.uploading) return

          item.error = true

          if (field && has(error, `response.data.errors.${field}`)) {
            this.addError(item, error.response.data.errors[field])
          }

          setTimeout(() => this._handleUploadRemove(uid), REMOVE_TIMER)
        })
      },
      _handleUploadRemove (uid, status) {
        this.loading = false

        this.$nextTick(() => {
          let index = this.items.data.findIndex(item => item.uid === uid)

          if (index < 0) return

          if (typeof status !== 'undefined' && status === false){
            this.items.data[index].loading = false

            return
          }

          let item = this.items.data[index]

          item.show = false
          item.hide = true
          setTimeout(() => {
            item.remove = true
            this._handleUpdateNumbers()
            this.$emit('update', JSON.parse(JSON.stringify(this.uploadedItems)))
          }, 500)
        })
      },
      _handleOnDrag () {
        this.drag = true
      },
      _handleOffDrag () {
        this.drag = false
      },
      _handleChange (el) {
        this._handleOffDrag()

        let files = el.target.files || el.dataTransfer.files
        if (!files.length) { return }

        let count = this.count
        this.loading = true

        this._.forEach(files, (file, i) => {
          if (this.maxItems && this.multiple && count === this.maxItems) return false
          setTimeout(() => file.type.includes('video/') ? this.createImageOnVideo(file) : this.createImage(file), ((i < 2 ? 100 : 1000) + i * 200))
          count++
        })
      },
      _handleUpdateNumbers () {
        if (!this.showNumbers) return

        let number = 0

        this.items.data.forEach(item => {
          !item.error ? item.number = number++ : null
        })
      },
      createImage (file) {
        let reader = new FileReader()
        let item = {
          id: null,
          uid: generateUUID(),
          type: PHOTO,
          loading: true,
          uploading: false,
          paths: {
            '128x128': PHOTO_THUMBNAIL,
            'original': PHOTO_THUMBNAIL,
            'original_backup': PHOTO_THUMBNAIL
          },
          progress: 10,
          error: false,
          error_text: null,
          source: this.$api.getSource(),
          remove: false,
          show: false,
          hide: false,
          file: file,
          rotate: {
            deg: RotateType.DEG0,
            loading: false,
            status: false,
            timer: null
          },
          number: this.showNumbers ? this.itemsData.length + 1 : null
        }

        reader.onload = (el) => {

          item.paths['original'] = el.target.result
          item.paths['original_backup'] = el.target.result

          const default_render = () => this.$nextTick(() => {
            item.paths['128x128'] = el.target.result

            this.$refs[item.uid][0].onload = () => {
              item.show = true
            }
          })

          const next = () => {
            resizeImage(el.target.result).then(({ src, blob }) => {
              let file = new File([blob], item.file.name, { type: "image/jpeg" })

              if (file.size < item.file.size) {
                item.file = file
                item.paths['original'] = src
              } else {
                file = item.file
              }

              this.uploadItem(file, item)
            }).catch(err => {
              this.uploadItem(file, item)
            })
          }

          resizeImage(el.target.result, 120).then(({ src }) => {
            item.paths['128x128'] = src
            item.show = true
            next()
          }).catch(err => {
            default_render()
            next()
          })

          reader.onerror = error => console.log(error);
        }

        this.items.data.push(item)

        if (file.size > this.fileSize)
          this._handleUploadError(item.uid, `Максимальный размер ${humanFileSize(this.fileSize)}`)
        else
          reader.readAsDataURL(file)
      },
      createImageOnVideo (file) {
        let item = {
          id: null,
          uid: generateUUID(),
          type: VIDEO,
          loading: true,
          uploading: false,
          paths: {
            '128x128': this.videoThumbnail,
            'original': this.videoThumbnail
          },
          progress: 10,
          error: false,
          error_text: null,
          source: this.$api.getSource(),
          remove: false,
          show: true,
          hide: false,
          number: this.showNumbers ? this.itemsData.length + 1 : null
        }

        this.items.data.push(item)

        if (file.size > this.fileSize)
          this._handleUploadError(item.uid, `Максимальный размер ${humanFileSize(this.fileSize)}`)
        else
          this.uploadItem(file, item)
      },
      uploadItem (file, item) {
        if (!file) return

        queue.push({ file, item })

        this._handleQueue()
      },
      _handleQueue () {
        if (this.queueInterval) return

        this.queueInterval = setInterval(() => {

          if (!queue.length) {
            clearInterval(this.queueInterval)
            this.queueInterval = null
            return false
          }

          if (this.uploadingCount < 2) {
            let { item, file } = queue.shift()

            item.uploading = true

            this.$emit('onUpload', item, file, this._handleUploadProgress, this._handleUploadSuccess, this._handleUploadError, this._handleUploadRemove)
            this._handleQueue()
          }
        }, 1000)
      },
      _handleRemoveItem (uid) {
        let index = this.items.data.findIndex(item => item.uid === uid)

        if (index < 0) return

        let item = this.items.data[index]

        return this.removeItem(item)
      },
      removeItem (item) {
        if (item.loading && has(item, 'source'))
          item.source.cancel()

        if (item.id) {
          item.loading = true
          item.progress = 50
          item.error = false
          this.$emit('onRemove', item, this._handleUploadRemove)
        } else {
          let index = this.items.data.findIndex(e => e.uid === item.uid)

          this.$nextTick(() => {
            let item = this.items.data[index]

            item.show = false
            item.hide = true

            setTimeout(() => {
              item.remove = true
              this._handleUpdateNumbers()
              this.$emit('update', JSON.parse(JSON.stringify(this.uploadedItems)))
            }, 500)
          })
        }
      },
      addError (item, text) {
        let { uid, file: { name } } = item

        if (typeof text === 'string') {
          this.errors.push({ text: `${name} ${text}`, uid })
        } else {
          text.forEach(text => {
            if (typeof text === 'string')
              this.errors.push({ text: `${name} ${text}`, uid })
            else
              this.errors.push({ text: `${name} ${Object.values(text)[0]}`, uid })
          })
        }

        setTimeout(() => {
          let index = this.errors.findIndex(e => e.uid === uid)
          while (index > -1) {
            this.errors.splice(index, 1)
            index = this.errors.findIndex(e => e.uid === uid)
          }
        }, REMOVE_TIMER)
      },
      _handleRotate (item) {
        if (item.rotate.loading) return

        item.rotate.status = true
        item.rotate.loading = true
        clearTimeout(item.rotate.timer)

        try {
          if (item.loading)
            item.source.cancel()
        } catch (e) {
          console.error(e);
        }

        let deg = item.rotate.deg === RotateType.DEG270 ? 0 : item.rotate.deg + RotateType.DEG90
        resizeImage(item.paths.original_backup, 128, undefined, 'image/jpeg', deg).then((data) => {
          let { src: srcThumb } = data
          let index = this.items.data.findIndex(e => e.uid === item.uid)

          item.rotate.loading = false

          if (index < 0) return

          item.paths['128x128'] = srcThumb
          item.rotate.deg = deg
          item.rotate.timer = setTimeout(() => {
            resizeImage(item.paths.original_backup, undefined, undefined, 'image/jpeg', deg).then(({ src, blob }) => {
              let file = new File([blob], item.file.name, { type: "image/jpeg" })

              if (this.mediaModal) {
                let key = `media-${item.id}`

                this.$refs[key][0].updateSrc(src)
              }

              item.error = false
              item.progress = 50
              item.loading = true
              item.uploading = true
              item.paths.original = src
              item.source = this.$api.getSource()

              this.$emit('update', JSON.parse(JSON.stringify(this.uploadedItems)))
              this.$emit('onUpload', item, file, this._handleUploadProgress, this._handleUploadSuccess, this._handleUploadError, this._handleUploadRemove)
            }).catch(() => {
              item.rotating = false
            })
          }, 3000)
        }).catch(() => {
          item.rotating = false
        })
      }
    }
  }

</script>

<style lang="sass">
  .form_verification-step_adding_studios .lm-dropzone--item--wrap,
  .form_setup_studios .lm-dropzone--item--wrap
    width: 111px
    height: 72px
  @keyframes media-in
    0%
      opacity: 0
      transform: scale(.7)
    100%
      opacity: 1
      transform: scale(1)
  @keyframes media-out
    0%
      opacity: 1
      transform: scale(1)
    100%
      opacity: 0
      transform: scale(.3)
  .lm-dropzone
    position: relative
    margin-bottom: 25px
    &.drag
      &:before
        border-color: #0063da
        background-color: rgba(0, 99, 218, 0.05)
      .icon-upload
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16" height="16" viewBox="0 0 16 16"><g class="nc-icon-wrapper" fill="%230063da"><path fill="%230063da" d="M7,3.4V12h2V3.4l4,4L14.4,6L8.7,0.3c-0.4-0.4-1-0.4-1.4,0L1.6,6L3,7.4L7,3.4z"></path> <path data-color="color-2" fill="%230063da" d="M14,14H2v-3H0v4c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-4h-2V14z"></path></g></svg>')
      span
        color: #0063da
    &.empty
      .lm-dropzone--uploader
        justify-content: center
        flex-flow: column wrap
        align-items: center
        display: flex
        align-content: center
        .lm-dropzone--label
          position: absolute
          left: 0
          right: 0
          top: 0
          bottom: 0
          margin: auto
          justify-content: center
          flex-flow: column wrap
          align-items: center
          display: flex
          align-content: flex-start
          text-align: center
          span
            font-size: 12px
            font-weight: 600
            font-style: normal
            font-stretch: normal
            letter-spacing: 0.4px
            color: #515562
            width: 100%
            text-transform: uppercase
            display: block
            line-height: 18px
            i
              margin-right: 12px
              display: inline-block
              margin-bottom: 0
              vertical-align: middle
              background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16" height="16" viewBox="0 0 16 16"><g class="nc-icon-wrapper" fill="%230063da"><path fill="%23515562" d="M7,3.4V12h2V3.4l4,4L14.4,6L8.7,0.3c-0.4-0.4-1-0.4-1.4,0L1.6,6L3,7.4L7,3.4z"></path> <path data-color="color-2" fill="%23515562" d="M14,14H2v-3H0v4c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-4h-2V14z"></path></g></svg>')
            &.lm-dropzone--sub-label
              margin-top: 16px
              width: 100%
              display: block
              font-size: 12px
              font-weight: 600
              font-style: normal
              font-stretch: normal
              line-height: normal
              letter-spacing: 0.4px
              text-transform: none
              color: #808792
    &:before
      content: ''
      border: 2px dashed #cbd0d8
      background-color: #fbfbfb
      border-radius: 8px
      position: absolute
      left: 0px
      top: 0px
      margin: auto
      width: calc(100% - 0px)
      height: calc(100% - 0px)
      z-index: 1
    &.error
      &:before
        border: 2px dashed #FC2E5F
    &--errors
      position: absolute
      top: 100%
      &--item
        font-size: 12px
        font-weight: normal
        font-style: normal
        font-stretch: normal
        line-height: 1.33
        letter-spacing: 1px
        display: block
        color: #fc2e5f
        text-align: left
        margin-top: 8px
    &--uploader
      position: relative
      z-index: 2
      width: 100%
      height: 100%
      top: 0
      padding: 1px 1px 8px 1px
      left: 0
      cursor: pointer
      min-height: 260px
      display: block
      text-align: left
      input
        position: absolute
        opacity: 0
        z-index: 3
        width: 100%
        margin: 0
        padding: 0
        height: 100%
        top: 0
        cursor: pointer
        left: 0
      .icon-upload
        width: 16px
        height: 16px
        display: block
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16" height="16" viewBox="0 0 16 16"><g class="nc-icon-wrapper" fill="%23808792"><path fill="%23808792" d="M7,3.4V12h2V3.4l4,4L14.4,6L8.7,0.3c-0.4-0.4-1-0.4-1.4,0L1.6,6L3,7.4L7,3.4z"></path> <path data-color="color-2" fill="%23808792" d="M14,14H2v-3H0v4c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-4h-2V14z"></path></g></svg>')
        background-repeat: no-repeat
        background-size: contain
        margin-bottom: 8px
      span
        color: #808792
        text-transform: uppercase
        font-weight: 600
        font-size: 12px
        text-align: center
        display: block
        width: 160px
    &--item
      display: inline-block
      margin: 8px 0 0 8px
      position: relative
      z-index: 4
      cursor: default
      opacity: 0
      &.hide-item
        transform: scale(0.3)
        animation: media-out .5s
      &.show-item
        animation: media-in .5s
        opacity: 1
        transform: scale(1)
      button.rotate
        position: absolute
        bottom: 8px
        left: 8px
        cursor: pointer
        padding: 0
        margin: auto
        -webkit-appearance: none
        appearance: none
        border: none
        background: transparent
        i
          display: block
          border-radius: 8px
          width: 24px
          height: 24px
          background: url('data:image/svg+xml;utf-8,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13 9C12.4477 9 12.0128 9.4547 11.8761 9.9898C11.4345 11.7182 9.86407 13 8 13C5.79443 13 4 11.2056 4 9C4 6.8784 5.6604 5.13723 7.74996 5.00773C7.88777 4.99919 8 5.11193 8 5.25V6.95969C8 7.37894 8.48497 7.61203 8.81235 7.35012L12.0239 4.78087C12.5243 4.38054 12.5243 3.61946 12.0239 3.21913L8.81235 0.649878C8.48497 0.387973 8 0.621059 8 1.04031V2.75C8 2.88807 7.88774 2.99946 7.74979 3.00515C4.55678 3.13675 2 5.77522 2 9C2 12.3086 4.69141 15 8 15C10.9694 15 13.4417 12.8321 13.9174 9.99577C14.0087 9.45109 13.5523 9 13 9V9Z" fill="%23ffffff"/> </svg>') no-repeat 40% 50%, rgba(40, 42, 54, 0.64)
      &--duration
        color: #fff !important
        position: absolute
        display: inline-block !important
        width: auto !important
      .lm-circle-loader
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
        svg
          z-index: 2
        &:before
          content: ''
          position: absolute
          top: 0
          left: 0
          right: 0
          bottom: 0
          width: 20px
          height: 20px
          margin: auto
          background-color: #000
          border-radius: 50%
          opacity: 0.4
          z-index: 1
          filter: blur(10px)
      &.loading
        img
          filter: blur(5px)
      img
        height: 100%
        width: 100%
        object-fit: cover
      &--remove
        border-radius: 8px
        background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"> <path fill="%23ffffff" d="M10.467 3.766L7.995 6.238 5.59 3.834c-.424-.425-.99-.425-1.413-.001l-.283.282c-.423.424-.423.99.001 1.414L6.3 7.933l-2.472 2.472c-.423.424-.423.99.001 1.413l.354.354c.424.424.99.425 1.413 0l2.402-2.4 2.404 2.403c.424.425.99.425 1.413.001l.353-.353c.424-.424.424-.989 0-1.413L9.691 7.935l2.401-2.402c.424-.423.424-.989 0-1.413l-.284-.283c-.353-.495-.99-.424-1.342-.071z"/></svg>') no-repeat center, rgba(40, 42, 54, 0.64)
        overflow: hidden
        width: 24px
        height: 24px
        display: block
        position: absolute
        right: 8px
        top: 8px
        z-index: 4
        cursor: pointer
      &.error
        z-index: 6
        img
          filter: grayscale(100%) blur(5px)
        .lm-dropzone--item--alert
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
        .lm-dropzone--item--wrap
          position: relative
          z-index: 5
      &--wrap
        width: 128px
        height: 84px
        border-radius: 6px
        overflow: hidden
        &:hover + .lm-dropzone--error span
          display: inline-block
    .lm-dropzone--error
      position: relative
      width: 0
      height: 0
      z-index: 10
      span
        display: none
        color: #fff
        line-height: 16px
        font-size: 12px
        font-weight: normal
        padding: 12px
        position: absolute
        background-color: rgba(40, 42, 54, 0.64)
        border-radius: 100px
        text-transform: none
        top: 5px
        &:before
          width: 0
          height: 0
          border-style: solid
          border-width: 0 6px 6px 6px
          position: absolute
          top: -6px
          left: 0
          right: 0
          margin: 0 auto
          border-color: transparent transparent rgba(40, 42, 54, 0.64) transparent
          content: ''
</style>
