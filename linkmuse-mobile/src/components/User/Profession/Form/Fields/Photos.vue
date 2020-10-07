<template>
  <div class="form__group form__group_declaration">
    <label class="label input__label">
      Фото
    </label>
    <lm-dropzone :label="'добавить фото'" :mediaModal="false" :max-items="20" :class="['form__dropzone', { 'error': (verrors.has('photos')) }]"
                 :multiple="true" :accept="['image/*']" :defaultItems="photos"
                 @update="handleUploadItems"
                 @onUpload="_handleAttach"
                 @onRemove="_handleAttachRemove">
    </lm-dropzone>

    <template v-if="(verrors.has('photos'))">
      <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('photos') }}</div>
    </template>
  </div>
</template>

<script>
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
        photos: []
      }
    },
    created () {
      this.photos = this.value || []
    },
    methods: {
      /**
       * Handle updated items DropZone
       * @param items
       */
      handleUploadItems (items) {
        this.photos = items
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

        data.append('photo', file)

        let url = (this.edit && this.id)
          ? `api/v2/users/professions/${this.id}/photos`
          : 'api/v2/users/professions/photos'

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
          error(item.uid, err, 'photo')
          console.error('Error upload photo')
        })
      },
      /**
       * Removed item on DropZone
       * @param item
       * @param remove
       * @private
       */
      _handleAttachRemove (item, remove) {
        this.$api.delete(`api/v2/users/professions/photos/${item.id}`).then(response => {
          remove(item.uid)
        }).catch(() => {
          remove(item.uid, false)
          throw new Error('Error delete photo')
        })
      }
    }
  }
</script>

<style scoped>

</style>
