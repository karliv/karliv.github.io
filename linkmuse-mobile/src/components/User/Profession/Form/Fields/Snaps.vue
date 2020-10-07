<template>
  <div class="form__group form__group_declaration">
    <label class="label input__label">
      Фото
    </label>

    <div class="m-text_normal color_gray-2 mb_4">
      <div class="mb_1">
        Загружено <span class="color_main">{{ snaps.length }} из {{ MAX_SNAP_COUNT }}</span> снепов
      </div>

      <span>
        Для отправки на модерацию требуется минимум {{ MIN_SNAP_COUNT }} фото
      </span>
    </div>

    <lm-dropzone :label="'добавить фото'" :mediaModal="false" :max-items="10" :class="['form__dropzone', 'upload-zone__snap', { 'error': (verrors.has('snaps')) }]"
                 :multiple="true" :accept="['image/*']" :defaultItems="snaps"
                 @update="handleUploadItems"
                 @onUpload="_handleAttach"
                 @onRemove="_handleAttachRemove">
    </lm-dropzone>

    <template v-if="(verrors.has('snaps'))">
      <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('snaps') }}</div>
    </template>
  </div>
</template>

<script>
  const BASE_URL_UPLOAD = process.env.BASE_URL_UPLOAD
  import Snap from '@modules/User/Profession/Snap'
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
        snaps: [],
        MIN_SNAP_COUNT: Snap.MIN_SNAP_COUNT,
        MAX_SNAP_COUNT: Snap.MAX_SNAP_COUNT,
      }
    },
    created () {
      this.snaps = this.value || []
    },
    methods: {
      /**
       * Handle updated items DropZone
       * @param items
       */
      handleUploadItems (items) {
        this.snaps = items
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

        data.append('image', file)

        let url = (this.edit && this.id)
          ? `api/v2/users/professions/${this.id}/snaps`
          : 'api/v2/users/professions/snaps'

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

          this.$gtm.trackEvent({ event: 'upload_snaps' })
        }).catch((err) => {
          error(item.uid, err, 'photo')
          console.error('Error upload photo snap')
        })
      },
      /**
       * Removed item on DropZone
       * @param item
       * @param remove
       * @private
       */
      _handleAttachRemove (item, remove) {
        this.$api.delete(`api/v2/users/professions/snaps/${item.id}`).then(response => {
          remove(item.uid)
        }).catch(() => {
          remove(item.uid, false)
          throw new Error('Error delete photo snap')
        })
      }
    }
  }
</script>

<style scoped>

</style>
