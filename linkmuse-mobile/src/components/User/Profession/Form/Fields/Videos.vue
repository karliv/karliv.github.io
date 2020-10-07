<template>
  <div>
    <div class="form__group form__group_declaration">
      <label class="label input__label">
        Видео
      </label>
      <template v-if="showDropZoneVideo">
        <lm-dropzone :label="'добавить видео'" :mediaModal="false" :max-items="20" :class="['form__dropzone', { 'error': (verrors.has('videos')) }]"
                     :multiple="true" :accept="['video/*']" :defaultItems="videos" :maxFileSize="300000"
                     @update="handleUploadItems"
                     @onUpload="_handleAttach"
                     @onRemove="_handleAttachRemove">
        </lm-dropzone>
      </template>

      <template v-if="(verrors.has('videos'))">
        <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('videos') }}</div>
      </template>
    </div>

    <template v-if="(showField === true)">
      <div class="form__group form__group_declaration">
        <label for="videoUrl" class="label input__label">Ссылка на видео</label>
        <input type="text" autocomplete="off"
               id="videoUrl" :name="'videoUrl'"
               :placeholder="'Youtube, Rutube или Vimeo'" :data-vv-as="'Ссылка на видео'"
               v-validate="'required|url'"
               v-model="field.url"
               @blur="_handleBlurVideoUrl"
               :class="[{ 'error': (verrors.has('videoUrl')) }, 'input', 'form__input', 'form__input_declaration' ]">

        <template v-if="verrors.has('videoUrl')">
          <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('videoUrl') }}</div>
        </template>
      </div>
    </template>

    <div class="m-flex__justify_between">
      <template v-if="(showField === false)">
        <a href="javascript:void(0)" class="m-text_bold color_main" @click="_handleClickShowFieldVideo">
          Добавить ссылку на видео
        </a>
      </template>
      <template v-if="(showField === true)">
        <a href="javascript:void(0)" class="m-text_bold color_gray-3" @click="_handleClickHideFieldVideo">Удалить</a>
        <a href="javascript:void(0)" class="m-text_bold color_main" @click="_handleClickUploadFieldVideo">Добавить</a>
      </template>
    </div>

  </div>
</template>

<script>
  import { Indicator, Toast } from 'mint-ui'
  const BASE_URL_UPLOAD = process.env.BASE_URL_UPLOAD
  import DropZone from '@components/UI/Dropzone/Index.vue'

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
            Indicator.open()
            this._uploadVideo().then((data) => {
              Indicator.close()
              let { cover: { original } } = data
              this.videos.push(Object.assign(data, { paths: { '128x128': original } }))

              this.showDropZoneVideo = false
              this.$nextTick().then(() => {
                this.showDropZoneVideo = true
                this.$emit('input', this.videos)
                this._handleClickHideFieldVideo()
              })
            }).catch(() => {
              Indicator.close()
              Toast({ message: 'Произошла ошибка при загрузке видео', iconClass: 'mintui mintui-field-error' })
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
