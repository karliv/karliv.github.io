<template>
  <div>
    <div class="d-upload-zone d-input_row mb_6">
      <label class="d-input__label">Видео</label>
      <div class="column" v-if="showDropZoneVideo">
        <lm-dropzone :label="'добавить видео'" :mediaModal="false" :max-items="20" :class="['form__dropzone', 'd-upload-zone__field', { 'error': (verrors.has('videos')) }]"
                     :multiple="true" :accept="['video/*']" :defaultItems="videos" :maxFileSize="300000"
                     @update="handleUploadItems"
                     @onUpload="_handleAttach"
                     @onRemove="_handleAttachRemove">
        </lm-dropzone>

        <template v-if="verrors.has('videos')">
          <div class="d-input__notification d-input__notification_required">{{ verrors.first('videos') }}</div>
        </template>
      </div>
    </div>

    <template v-if="(showField === true)">
      <div class="column">
        <div class="d-input d-input_row mb_6">
          <label for="videoUrl" class="d-input__label d-input__label_required">Ссылка на видео</label>
          <div class="column">
            <input type="text" id="videoUrl"
                   :placeholder="'Youtube, Rutube или Vimeo'"
                   v-validate="'required|url'"
                   :data-vv-as="'Ссылка на видео'"
                   :data-vv-name="'videoUrl'"
                   v-model="field.url"
                   @blur="_handleBlurVideoUrl"
                   :class="[{ 'error': (verrors.has('videoUrl')) }, 'd-input__field']">

            <template v-if="(verrors.has('videoUrl'))">
              <div class="d-input__notification d-input__notification_required">{{ verrors.first('videoUrl') }}</div>
            </template>
          </div>
        </div>
      </div>
    </template>

    <div class="d-input_row w_100 justify_between">
      <span class="d-input__label"></span>

      <template v-if="(showField === true)">
        <div class="d-row justify_flex-end">
          <a href="javascript:void(0)" class="d-input__link d-input__link_disabled" @click="_handleClickHideFieldVideo">Удалить</a>
        </div>
      </template>
      <template v-if="(showField === false)">
        <div class="d-row justify_flex-end">
          <a href="javascript:void(0)" class="d-input__link d-input__link_blue" @click="_handleClickShowFieldVideo">Добавить ссылку на видео</a>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  const BASE_URL_UPLOAD = process.env.BASE_URL_UPLOAD
  import DropZone from '@components/UI/Dropzone/Custom/Index.vue'

  export default {
    components: { 'lm-dropzone': DropZone },
    inject: ['$validator'],
    props: {
      value: {
        default: null
      },
      id: {
        default: null
      },
      edit: {
        type: Boolean
      }
    },
    data () {
      return {
        videos: [],
        showDropZoneVideo: true,
        field: { show: false, url: null, loading: false }
      }
    },
    computed: {
      showField () {
        return this.field.show
      }
    },
    created () {
      this.videos = this.value || []
    },
    methods: {
      /**
       * Handle updated items DropZone
       * @param items
       */
      handleUploadItems (items) {
        this.videos = items
        this.$emit('input', items)
      },
      /**
       * Add item on DropZone
       *
       * @param item
       * @param file
       * @param progress
       * @param success
       * @param error
       * @private
       */
      _handleAttach (item, file, progress, success, error) {
        let data = new FormData()

        data.append('uploadable', file)

        let url = (this.edit && this.id)
          ? `api/v2/users/professions/${this.id}/videos`
          : 'api/v2/users/professions/videos'

        this.$api.post(url, data, {
          baseURL: BASE_URL_UPLOAD,
          cancelToken: item.source.token,
          timeout: 120000,
          onUploadProgress (progressEvent) {
            progress(item.uid, progressEvent)
          }
        }).then(response => {
          const { data: { data: { id, path } } } = response

          success(item.uid, { id, path })
        }).catch((err) => {
          error(item.uid, err, 'uploadable')
          console.error('Error upload video')
        })
      },
      /**
       * Removed item on DropZone
       * @param item
       * @param remove
       * @private
       */
      _handleAttachRemove (item, remove) {
        this.$api.delete(`api/v2/users/professions/videos/${item.id}`).then(response => {
          remove(item.uid)
        }).catch(() => {
          remove(item.uid, false)
          throw new Error('Error delete video')
        })
      },
      _handleClickShowFieldVideo () {
        this.field['show'] = true
      },
      _handleClickUploadFieldVideo () {
        this._uploadVideoByUrl()
      },
      _handleBlurVideoUrl () {
        this._uploadVideoByUrl()
      },
      _uploadVideoByUrl () {
        this.$validator.validate('videoUrl').then((result) => {
          if (result) {
            const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })
            this._uploadVideo().then((data) => {
              loader.hide()
              let { cover: { original } } = data
              this.videos.push(Object.assign(data, { paths: { '128x128': original } }))

              this.showDropZoneVideo = false
              this.$nextTick().then(() => {
                this.showDropZoneVideo = true
                this.$emit('input', this.videos)
                this._handleClickHideFieldVideo()
              })
            }).catch(() => {
              loader.hide()
              this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка при загрузке видео.' })
            })
          }
        })
      },
      _uploadVideo () {
        return new Promise((resolve, reject) => {
          let url = (this.edit && this.id)
            ? `api/v2/users/professions/${this.id}/videos`
            : 'api/v2/users/professions/videos'

          this.$api.post(url, { uploadable: this.field.url }, {
            timeout: 120000,
            baseURL: BASE_URL_UPLOAD
          }).then(response => {
            const { data: { data } } = response
            resolve && resolve(data)
          }).catch((error) => {
            const { response: { data, status } } = error

            reject && reject()
            if (status === 422) {
              const { errors } = data
              this.$validator.errors.add({ field: 'videoUrl', msg: errors['uploadable'].join(', ') })
            } else throw new Error('Error upload video.')
          })
        })
      },
      _handleClickHideFieldVideo () {
        this.field = { show: false, url: null, loading: false }
      }
    }
  }
</script>

<style scoped>

</style>
