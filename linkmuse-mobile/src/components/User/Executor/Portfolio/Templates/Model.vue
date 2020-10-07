<template>
  <div>
    <div class="portfolio-wrap" v-if="portfolio">
      <div :class="[{ 'uploaded': (has(cells['data'][0], 'data.path') && has(cells['data'][0], 'data.id')), 'error': errors.indexOf(0) > -1 , 'loaded': loaders.indexOf(0) > -1 }, 'lm-m-post-register-portfolio--item', 'first']">
        <template v-if="!has(cells['data'][0], 'data.id') ">
          <div class="item-upload-wrap" @click="_handleClickUploadPhoto(0)">
            <i class="lm-icon-square-upload"></i>
            <span class="desc">Портретное фото</span>
          </div>
        </template>
        <template v-else-if="has(cells['data'][0], 'data.path') && has(cells['data'][0], 'data.id')">
          <div class="item-wrap" @click="_handleClickOpenPhoto(0)">
            <img :src="cells['data'][0]['thumbnail']" :alt="cells['data'][0]['data']['description']" :style="{ height: 'auto' }">
            <i class="remove" @click.stop.prevent="_handleClickClearCell(0)"></i>
          </div>
        </template>
      </div>
      <div :class="[{ 'uploaded': (has(cells['data'][2], 'data.path') && has(cells['data'][2], 'data.id')), 'error': errors.indexOf(2) > -1 , 'loaded': loaders.indexOf(2) > -1 }, 'lm-m-post-register-portfolio--item', 'second']">
        <template v-if="!has(cells['data'][2], 'data.id') ">
          <div class="item-upload-wrap" @click="_handleClickUploadPhoto(2)">
            <i class="lm-icon-square-upload"></i>
            <span class="desc">Фото в полный рост</span>
          </div>
        </template>
        <template v-else-if="has(cells['data'][2], 'data.path') && has(cells['data'][2], 'data.id')">
          <div class="item-wrap" @click="_handleClickOpenPhoto(2)">
            <img :src="cells['data'][2]['thumbnail']" :alt="cells['data'][2]['data']['description']" :style="{ height: 'auto' }">
            <i class="remove" @click.stop.prevent="_handleClickClearCell(2)"></i>
          </div>
        </template>
      </div>
      <div :class="[{ 'uploaded': (has(cells['data'][3], 'data.path') && has(cells['data'][3], 'data.id')), 'error': errors.indexOf(3) > -1 , 'loaded': loaders.indexOf(3) > -1 }, 'lm-m-post-register-portfolio--item', 'second']">
        <template v-if="!has(cells['data'][3], 'data.id') ">
          <div class="item-upload-wrap" @click="_handleClickUploadPhoto(3)">
            <i class="lm-icon-square-upload"></i>
            <span class="desc">Фото в полный рост</span>
          </div>
        </template>
        <template v-else-if="has(cells['data'][3], 'data.path') && has(cells['data'][3], 'data.id')">
          <div class="item-wrap" @click="_handleClickOpenPhoto(3)">
            <img :src="cells['data'][3]['thumbnail']" :alt="cells['data'][3]['data']['description']" :style="{ height: 'auto' }">
            <i class="remove" @click.stop.prevent="_handleClickClearCell(3)"></i>
          </div>
        </template>
      </div>
      <div :class="[{ 'uploaded': (has(cells['data'][1], 'data.id')), 'error': errors.indexOf(1) > -1 , 'loaded': loaders.indexOf(1) > -1 }, 'lm-m-post-register-portfolio--item', 'three']">
        <template v-if="!has(cells['data'][1], 'data.id') ">
          <div class="item-upload-wrap" @click="_handleClickUploadVideo(1)">
            <i class="lm-icon-square-upload"></i>
            <span class="desc">Видео</span>
          </div>
        </template>
        <template v-else-if="has(cells['data'][1], 'data.id')">
          <div class="item-wrap" @click="_handleClickOpenVideo(1)">
            <img :src="cells['data'][1]['data']['cover_image_orig']" :alt="cells['data'][1]['data']['description']" :style="{ height: 'auto' }">
            <i class="remove" @click.stop.prevent="_handleClickClearCell(1)"></i>
          </div>
        </template>
      </div>

      <input type="file" accept="image/*" @change="_handleChangeInputPhoto" ref="fileInputPhotoPortfolio" style="display: none">
      <input type="file" accept="video/*" @change="_handleChangeInputVideo" ref="fileInputVideoPortfolio" style="display: none">
    </div>

    <div class="lm-input-wrap" v-if="(!has(cells['data'][1], 'data.id'))">
      <input type="text" class="lm-input" placeholder="Добавьте ссылку" @blur="_handleBlurInputVideoUrl">
      <span class="desc">Вместо загрузки видео вы можете указать ссылку на Youtube, Rutube, Vimeo и другие</span>
    </div>

    <mt-popup class="lm-m-post-register-page-wrapper lm-m-post-register-select-role lm-m-crop-avatar-image" v-model="cropper.modal" position="bottom" :modal="false">
      <h1 style="margin-bottom: 12px;">Обрежьте фото</h1>

      <div class="lm-m-post-register-crop-wrap">
        <div class="lm-m-cropper">
          <div class="lm-m-cropper-editor">
            <vue-cropper v-if="(activeCell !== null && cropper.src && cropper.modal)"
              class="lm-m-cropper-canvas"
              ref="cropper_portfolio_photo"
              :guides="false"
              :checkCrossOrigin="true"

              :background="false"

              :view-mode="1"
              :drag-mode="'move'"
              :aspect-ratio="(this.cells.data[activeCell]['size']['width']/this.cells.data[activeCell]['size']['height'])"
              :auto-crop-area="0.5"

              :cropBoxMovable="false"
              :cropBoxResizable="false"

              :src="cropper.src"
              alt="Photo">
            </vue-cropper>
          </div>
        </div>
      </div>

      <div class="lm-m-post-register-fixed-bottom">
        <a @click="_handleClickCloseCropperPhoto" href="javascript:void(0)" class="lm-link-button">отмена</a>
        <button @click="_handleClickCropPhoto" class="lm-primary-button middle">Обрезать</button>
      </div>
    </mt-popup>
  </div>
</template>

<script>
  import { has, checkLoadImage, resizeImage } from '@utils'
  import { Popup, Indicator, Toast } from 'mint-ui'

  const BASE_URL_UPLOAD = process.env.BASE_URL_UPLOAD

  const resizeCropImage = (next, src) => {
    return new Promise((resolve) => {
      resizeImage(src, 2560).then(({ src }) => {
        next(src)
        resolve(src)
      }, err => {
        next(src)
        resolve(src)
        console.error(err);
      })
    })
  }

  export default {
    components: { 'mt-popup': Popup },
    props: {
      portfolio: {
        required: true
      }
    },
    data () {
      return {
        has,
        activeCell: null,
        cells: this.portfolio.cells,
        loaders: [],
        errors: [],
        cropper: {
          loading: false,
          modal: false,
          src: null
        }
      }
    },
    methods: {
      _handleClickUploadPhoto (cell) {
        this.activeCell = cell
        this.$refs.fileInputPhotoPortfolio.click()
      },
      _handleClickOpenPhoto (cell) {
        this.activeCell = cell

        let { data: { path }, points, resized } = this.cells['data'][cell]

        Indicator.open()

        checkLoadImage(resized || path).then(({ path, status }) => {
          const next = (path) => {
            Indicator.close()
            this.cropper.src = path
            this.cropper.modal = true

            this.$nextTick(() => {
              let context = this.$refs.cropper_portfolio_photo
              // context.setCanvasData(points)
              context.replace(path)
            })
          }

          if (resized) {
            next(resized)
          } else {
            resizeCropImage(next, path).then(src => {
              this.$set(this.cells['data'][cell], 'resized', src)
            })
          }
        }).catch(() => {
          Indicator.close()

          Toast({
            message: 'Ошибка',
            iconClass: 'mintui mintui-field-error'
          })
        })
      },
      _handleClickUploadVideo (cell) {
        this.activeCell = cell
        this.$refs.fileInputVideoPortfolio.click()
      },
      _handleClickOpenVideo (cell) {},
      _handleChangeInputPhoto (el) {
        let files = el.target.files || el.dataTransfer.files;
        if (!files.length)
          return;

        const file = el.target.files[0]
        const cell = this.activeCell

        if (!file.type.includes('image/')) {
          console.log('Please select an image file')
          return
        }

        if (typeof FileReader === 'function') {
          const reader = new FileReader()

          reader.onload = (event) => {
            const next = (src) => {
              this.cropper.src = src

              this._handleUploadPhoto(file).then(({ photo_id, path }) => {
                this.$set(this.cells['data'][cell], 'data', {
                  path,
                  id: photo_id,
                  thumbnail: path,
                  uploaded: false
                })
                this.$set(this.cells['data'][cell], 'resized', src)

                this.cropper.modal = true
                this.$refs.cropper_portfolio_photo.replace(src)
              }).catch((data, status) => {})
            }

            resizeCropImage(next, event.target.result)
          };
          reader.readAsDataURL(file);
        } else console.log('Sorry, FileReader API not supported');
      },
      _handleChangeInputVideo (el) {
        let files = el.target.files || el.dataTransfer.files;
        if (!files.length)
          return;

        const file = el.target.files[0]
        const cell = this.activeCell

        if (!file.type.includes('video/')) {
          console.log('Please select an video file')
          return
        }

        this._handleUploadVideo(file).then((data) => {
          this.$set(this.cells['data'][cell], 'data', data)
          let { video_id } = data

          Indicator.open()

          this.$api.post(`api/v1/profiles/portfolio/${this.portfolio.id}/positions/${cell}`, { content_id: video_id }).then((response) => {
            const { data } = response

            this.$emit('updated', cell, this.cells['data'][cell])
            this.activeCell = null

            Indicator.close()

            Toast({
              message: 'Успешно',
              iconClass: 'mintui mintui-success'
            })

          }, (error) => {
            const { response: { data }, response: { status }} = error

            this.activeCell = null

            Indicator.close()
            if (status === 422 && data.errors) {
              const { errors } = data
            } else throw new Error('Error attach video')
          })
        }).catch((data, status) => {})
      },
      _handleUploadPhoto (file) {
        return new Promise((resolve, reject) => {
          Indicator.open()

          const cell = this.activeCell

          if (this.loaders.indexOf(cell) < 0) {
            this.loaders.push(cell)
          }

          let data = new FormData();
          data.append('file', file, 'photo.png')

          this.$api.post('api/v1/profiles/portfolio/positions/photos', data, { baseURL: BASE_URL_UPLOAD, timeout: 120000 }).then((response) => {
            const { data: { photo_id, path } } = response

            this.$refs.fileInputPhotoPortfolio.value = ''

            Indicator.close()
            Toast({
              message: 'Успешно',
              iconClass: 'mintui mintui-success'
            });

            this.loaders.splice(this.loaders.indexOf(cell), 1)
            this.errors.splice(this.errors.indexOf(cell), 1)
            resolve({ photo_id, path })

          }, (error) => {
            Indicator.close()

            this.loaders.splice(this.loaders.indexOf(cell), 1)
            this.errors.push(cell)

            Toast({
              message: 'Ошибка',
              iconClass: 'mintui mintui-field-error'
            });

            const { response: { data }, response: { status }} = error

            if (status === 422 && data.errors) {
              const { errors } = data
            } else throw new Error('Error upload photo')

            reject(data, status)
          })
        })
      },
      _handleBlurInputVideoUrl (el) {
        let value = el.target.value

        if (!value) return

        const cell = 1
        this.activeCell = 1

        this._handleUploadVideo(value).then((data) => {
          this.$set(this.cells['data'][cell], 'data', data)
          let { video_id } = data

          Indicator.open()

          this.$api.post(`api/v1/profiles/portfolio/${this.portfolio.id}/positions/${cell}`, { content_id: video_id }).then((response) => {
            const { data } = response

            this.$emit('updated', cell, this.cells['data'][cell])

            this.activeCell = null

            Indicator.close()

            Toast({
              message: 'Успешно',
              iconClass: 'mintui mintui-success'
            })

          }, (error) => {
            const { response: { data }, response: { status }} = error

            this.activeCell = null

            Indicator.close()
            if (status === 422 && data.errors) {
              const { errors } = data
            } else throw new Error('Error attach video')
          })
        }).catch((data, status) => {})
      },
      _handleUploadVideo (file) {
        return new Promise((resolve, reject) => {
          Indicator.open()

          const cell = this.activeCell

          if (this.loaders.indexOf(cell) < 0) {
            this.loaders.push(cell)
          }

          let data = new FormData();
          data.append('file', file)

          this.$api.post('api/v1/users/videos', data, { baseURL: BASE_URL_UPLOAD, timeout: 120000 }).then((response) => {
            const { data: { data } } = response

            this.$refs.fileInputVideoPortfolio.value = ''

            Indicator.close()

            this.loaders.splice(this.loaders.indexOf(cell), 1)
            this.errors.splice(this.errors.indexOf(cell), 1)
            resolve(data)

          }, (error) => {
            Indicator.close()

            this.loaders.splice(this.loaders.indexOf(cell), 1)
            this.errors.push(cell)

            Toast({
              message: 'Ошибка',
              iconClass: 'mintui mintui-field-error'
            });

            const { response: { data }, response: { status }} = error

            if (status === 422 && data.errors) {
              const { errors } = data
            } else throw new Error('Error upload video')

            reject(data, status)
          })
        })
      },
      _handleClickCloseCropperPhoto () {
        let cell = this.activeCell

        if (has(this.cells['data'][cell], 'data.uploaded') && this.cells['data'][cell]['data']['uploaded'] === false) {
          let el = JSON.parse(JSON.stringify(this.cells.data[cell]))
          this.$set(this.cells.data, cell, {
            type: el.type,
            position: el.position,
            size: el.size || null
          })
        }

        this.activeCell = null
        this.cropper.modal = false
        this.cropper.src = null
      },
      _handleClickCropPhoto () {
        Indicator.open()

        let cell = this.cells['data'][this.activeCell]
        let context = this.$refs.cropper_portfolio_photo
        let size = { "width": this.cells.data[this.activeCell]['size']['width'], "height": this.cells.data[this.activeCell]['size']['height'] }

        let canvasData = context.getCanvasData()
        this.$set(this.cells['data'][this.activeCell]['data'], 'uploaded', true)
        this.$set(this.cells['data'][this.activeCell], 'thumbnail', context.getCroppedCanvas(size).toDataURL())

        context.getCroppedCanvas(size).toBlob((blob) => {
          let data = new FormData()

          data.append('content_id', cell['data']['id'])
          data.append('thumbnail', blob, 'thumbnail.jpg')

          this.$set(this.cells['data'][this.activeCell], 'points', canvasData)
          Object.keys(canvasData).forEach(( key ) => data.append(`points[${key}]`, canvasData[key].toFixed(3)))

          this.$api.post(`api/v1/profiles/portfolio/${this.portfolio.id}/positions/${cell['position']}`, data).then((response) => {
            const { data } = response

            cell['attach'] = true

            this.$emit('updated', this.activeCell, this.cells['data'][this.activeCell])

            this.cropper.modal = false
            this.cropper.src = null
            this.activeCell = null

            Indicator.close()

          }, (error) => {
            const { response: { data }, response: { status }} = error

            this.cropper.modal = false
            this.cropper.src = null
            this.activeCell = null

            Indicator.close()
            if (status === 422 && data.errors) {
              const { errors } = data
            } else throw new Error('Error attach avatar')
          })
        })
      },
      _handleClickClearCell (cell) {
        return new Promise((resolve, reject) => {
          Indicator.open()

          let el = JSON.parse(JSON.stringify(this.cells.data[cell]))

          this.$set(this.cells.data, cell, {
            type: el.type,
            position: el.position,
            size: el.size || null
          })

          this.$api.delete(`api/v1/profiles/portfolio/${this.portfolio.id}/positions/${cell}`).then((response) => {
            Indicator.close()
            this.$emit('updated', cell, this.cells.data[cell])
            this.$emit('unpublished')
            resolve()
          }, (error) => {
            const { response: { data }, response: { status }} = error

            this.$set(this.cells.data, cell, el)
            this.$emit('updated', cell, this.cells.data[cell])

            Indicator.close()

            if (status === 422 && data.errors) {
              const { errors } = data
            } else throw new Error('Error attach avatar')

            reject(error)
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>
