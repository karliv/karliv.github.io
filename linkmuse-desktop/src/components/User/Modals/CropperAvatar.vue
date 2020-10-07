<template>
  <modal ref="modal" class="modal modal-center modal-cropper" :header="false" :footer="false" v-model="modal.value" @hide="_handleHideModal">
    <div class="modal__content">
      <div class="d-column align_center ta_center mb_6">
        <div class="heading heading_h4">Выберите миниатюру</div>
        <div class="">Обрежьте кадр и выберите область для<br> маленьких фотографий</div>
      </div>

      <div class="d-row justify_center mb_6">
        <template v-if="hasPhoto">
          <div class="d-column align_center relative mr_3">
            <template v-if="hasPhoto">
              <vue-cropper ref="cropper"
                 id="cropper_avatar"
                 :class="['vue-cropper']"

                 :responsive="false"
                 :restore="false"
                 :checkCrossOrigin="true"
                 :checkOrientation="false"

                 :background="false"
                 :rotatable="true"

                 :zoomable="true"
                 :zoomOnWheel="true"

                 :guides="true"

                 :view-mode="3"
                 :drag-mode="'move'"
                 :aspect-ratio="1"
                 :auto-crop-area="0.5"

                 :minCanvasWidth="136"
                 :minCanvasHeight="136"
                 :minContainerWidth="272"
                 :minContainerHeight="268"
                 :imgStyle="{ width: '272px', height: '268px' }"

                 :zoom="_handleCropZoom"
                 :ready="_handleCropReady"
                 :crop="_handleCropCropper"

                 :src="modal.path">
              </vue-cropper>

              <div class="corrector-icon">
                <svg :class="['d-icon', 'd-icon_size_16', 'fill_white', 'mr_2', { disabled: (modal.zoom >= this.modal.maxZoom) }]" @click="_handleClickZoomPlus">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-icon-zoom-in" />
                </svg>

                <svg :class="['d-icon', 'd-icon_size_16', 'fill_white', 'mr_2', { disabled: (modal.zoom <= this.modal.minZoom) }]" @click="_handleClickZoomOut">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-icon-zoom-out" />
                </svg>

                <svg class="d-icon d-icon_size_16 fill_white" @click="_handleClickRotate">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-icon-rotate" />
                </svg>
              </div>
            </template>
          </div>

          <div class="d-column">
            <div class="d-row mb_3">
              <img :src="preview" alt="Preview 174x174" class="cropper-image" style="width: 174px; height: 174px">
            </div>

            <div class="d-row justify_center">
              <div class="d-column mr_3">
                <img :src="preview" alt="Preview 86x86" class="cropper-image" style="width: 86px; height: 86px">
              </div>
              <div class="d-column">
                <img :src="preview" alt="Preview 40x40" class="cropper-image" style="width: 40px; height: 40px">
              </div>
            </div>
          </div>
        </template>
        <lm-loader v-if="loadingPhoto"></lm-loader>
      </div>

      <template v-if="hasPhoto">
        <div class="d-row justify_center">
          <template v-if="loading === false">
            <button class="d-btn d-btn_options mr_12" @click="_handleHideModal">отмена</button>
            <button class="d-btn d-btn_primary" @click="_handleClickUploadAvatar">Сохранить</button>
          </template>
          <lm-loader v-if="loading"></lm-loader>
        </div>
      </template>
    </div>
  </modal>
</template>

<script>
  import _ from 'lodash'

  export default {
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
        this.modal.preview = path
        this.modal.loadingPhoto = true

        let image = new Image()
        image.src = this.modal.path

        image.onload = _ => {
          this.modal.loadingPhoto = false
        }
      })
    },
    methods: {
      _handleHideModal () {
        this.$refs.cropper.destroy()
        this._handleClearModal()
      },
      _handleClearModal () {
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
      },
      _handleCropReady () {
        this.$nextTick(() => {
          let context = this.$refs.cropper
          context.setCropBoxData({ width: 136, height: 136 })

          let image = context.getImageData()

          this.modal.minZoom = (image.height > image.width) ? (image.width / image.naturalWidth) : (image.height / image.naturalHeight)
        })
      },
      _handleCropCropper: _.debounce(function(e) {
        let context = this.$refs.cropper
        const size = { width: 174, height: 174 }

        this.modal.preview = context.getCroppedCanvas(size).toDataURL()
      }, 100),
      _handleClickUploadAvatar () {
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

            this._handleHideModal()
            this.modal.loading = false
          }, (error) => {
            context.enable()
            this.modal.loading = false

            const { response: { data, status }} = error

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

<style lang="scss" scoped>
</style>
