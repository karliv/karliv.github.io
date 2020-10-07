<template>
  <mt-popup class="modal-cropper" v-model="modal.value" position="bottom" :modal="false" @input="_handleInputPopup">

    <div class="lm-m-cropper-header m-text_bold row justify_between">
      <a href="javascript:void(0)" class="color_white" @click="_handleHideModal">Отмена</a>
      <a href="javascript:void(0)" class="color_white" @click="_handleClickUploadAvatar">Сохранить</a>
    </div>

    <template v-if="hasPhoto">
      <div class="column align_center">
        <div class="lm-m-cropper-wrap">
          <vue-cropper ref="cropper"
                       id="cropper"
                       class="lm-m-cropper-canvas"

                       :guides="false"

                       :background="false"

                       :view-mode="1"
                       :drag-mode="'move'"
                       :aspect-ratio="1"
                       :auto-crop-area="0.5"
                       :check-orientation="true"

                       :cropBoxMovable="false"
                       :cropBoxResizable="false"

                       :src="modal.path"

                       :zoom="_handleCropZoom"
                       :crop="_handleCropCropper"
                       :ready="_handleCropReady">
          </vue-cropper>
        </div>

        <div class="lm-m-cropper-preview">
          <img :src="preview" alt="Preview 40x40" style="width: 40px; height: 40px">
        </div>

        <div class="corrector-icon">
          <svg :class="['icon', 'icon_size_16', 'fill_white', 'mr_4', { disabled: (modal.zoom >= this.modal.maxZoom) }]" @click="_handleClickZoomPlus">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-icon-zoom-in" />
          </svg>

          <svg :class="['icon', 'icon_size_16', 'fill_white', 'mr_4', { disabled: (modal.zoom <= this.modal.minZoom) }]" @click="_handleClickZoomOut">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-icon-zoom-out" />
          </svg>

          <svg class="icon icon_size_16 fill_white" @click="_handleClickRotate">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-icon-rotate" />
          </svg>
        </div>
      </div>
    </template>

    <lm-m-loader v-if="loadingPhoto"></lm-m-loader>
  </mt-popup>
</template>

<script>
  import _ from 'lodash'
  import PopupMix from '@components/Mixins/Popup'
  import { Popup, Indicator, Toast } from 'mint-ui'

  export default {
    components: { 'mt-popup': Popup },
    mixins: [PopupMix],
    data () {
      return {
        modal: {
          zoom: 0,
          minZoom: 0,
          maxZoom: 2,
          path: null,
          value: false,
          preview: null,
          success: false,
          loading: false,
          loadingPhoto: false
        },
      }
    },
    computed: {
      hasPhoto () {
        const { value, path, loadingPhoto } = this.modal
        return (!!value && !!path && !loadingPhoto)
      },
      preview () {
        return this.modal.preview
      },
      loading () {
        return this.modal.loading
      },
      loadingPhoto () {
        return this.modal.loadingPhoto
      }
    },
    mounted () {
      this.$root.$on('open-modal-cropper-avatar', (path) => {
        this.modal.path = path
        this.modal.value = true
        this.modal.loadingPhoto = true

        let image = new Image()
        image.src = this.modal.path

        image.onload = _ => {
          this.modal.loadingPhoto = false
        }
      })
    },
    methods: {
      _handleInputPopup (value) {
        if (value === false) {
          this.$refs.cropper.destroy()
          this._handleClearModal()
        }
      },
      _handleHideModal () {
        this.$refs.cropper.destroy()
        this._handleClearModal()
      },
      _handleClearModal () {
        this.modal.value = false

        this.$nextTick(() => {
          this.modal = {
            zoom: 0,
            minZoom: 0,
            maxZoom: 2,
            path: null,
            value: false,
            preview: null,
            success: false,
            loading: false,
            loadingPhoto: false
          }
        })
      },
      _handleCropReady () {
        this.$nextTick(() => {
          let context = this.$refs.cropper
          context.setCropBoxData({ width: 210, height: 210 })

          let image = context.getImageData()
          let cropBox = context.getCropBoxData()

          this.modal.zoom = (image.height > image.width) ? (image.width / image.naturalWidth) : (image.height / image.naturalHeight)
          this.modal.minZoom = (image.height > image.width) ? (cropBox.width / image.naturalWidth) : (cropBox.height / image.naturalHeight)
        })
      },
      _handleCropCropper: _.debounce(function(e) {
        let context = this.$refs.cropper
        const size = { width: 40, height: 40 }

        this.modal.preview = context.getCroppedCanvas(size).toDataURL()
      }, 100),
      _handleClickUploadAvatar () {
        Indicator.open()
        this.modal.loading = true
        let context = this.$refs.cropper
        const size = { width: 564, height: 564 }

        context.disable()
        context.getCroppedCanvas(size).toBlob((blob) => {
          let data = new FormData()
          data.append('image', blob, 'avatar.png')

          this.$api.post('api/v2/settings/avatar', data).then((response) => {
            context.enable()
            const { data: { data } } = response

            this.$root.$emit('updated-avatar', data)
            this.$store.dispatch('auth/setUserField', { field: 'avatar', value: data })

            Indicator.close()
            this._handleHideModal()
            this.modal.loading = false
          }, (error) => {
            context.enable()
            Indicator.close()
            this.modal.loading = false

            const { response: { data, status }} = error
            Toast({ message: 'Произошла ошибка', iconClass: 'mintui mintui-field-error' })

            if (status === 422 && data.errors) {
              const { errors } = data

            } else throw new Error('Error upload avatar')
          })
        }, 'image/png')
      },
      _handleClickZoomPlus () {
        this.$nextTick(() => {
          let context = this.$refs.cropper
          context.relativeZoom(0.1)
        })
      },
      _handleClickZoomOut () {
        this.$nextTick(() => {
          let context = this.$refs.cropper
          context.relativeZoom(-0.1)
        })
      },
      _handleClickRotate () {
        this.$nextTick(() => {
          let context = this.$refs.cropper
          context.rotate(90)
        })
      },
      _handleCropZoom (event) {
        if (event.detail.ratio > this.modal.maxZoom) {
          event.preventDefault()
          this.$refs.cropper.zoomTo(this.modal.maxZoom)
        }

        this.modal.zoom = event.detail.ratio
      }
    }
  }
</script>

<style scoped>

</style>
