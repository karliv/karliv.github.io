<template>
  <div class="lm-m-attach-file-wrap lm-m-uploader">

    <input type="file" id="attach-file-invite-user" @change="_handleChangeInputAttachFile" ref="fileInputAttachFile">
    <label for="attach-file-invite-user">
      <i class="lm-icon-square-download"></i>
      <span>ЗАГРУЗИТЬ ФАЙЛ</span>
    </label>

    <template v-if="items.data.length > 0">
      <div class="lm-m-attach-file-item" v-for="(item, key) in items.data" :key="key">
        <div :class="[ {error: item.error}, 'left' ]">
          <template>
            <template
              v-if="has(item, 'id') && has(item, 'mime_type') && has(item, 'path') && !item.loading && !item.error">
              <template v-if="(isThumbsAttachment(item.mime_type) === true)">
                <media :media="item" type="photo" :src="item.path" :album="`attachments_invite_to_response`">
                  <i class="lm-icon-square-download"></i>
                </media>
              </template>
              <template v-if="(has(item, 'path') && isThumbsAttachment(item.mime_type) === false)">
                <a :href="item.path" target="_blank">
                  <i class="lm-icon-square-download"></i>
                </a>
              </template>
            </template>
            <i class="lm-close uploading" v-else-if="item.loading && !item.error">
              <lm-loader :color="'0063da'" :width="14.667" :height="14.667"
                         :percent="item.progress"></lm-loader>
            </i>
            <i v-else-if="item.error" class="lm-error-icon">

            </i>
          </template>
          <template v-if="has(item, 'name')">
            <template v-if="(has(item, 'mime_type') && isThumbsAttachment(item.mime_type) === true)">
              <media :media="item" type="photo" :src="item.path" :album="`attachments_invite_to_castings`">
                <span>{{ item.name }}</span>
              </media>
            </template>
            <span v-else>
              <template v-if="item.error">ошибка</template>
              <template v-else>{{ item.name }}</template>
            </span>
          </template>
        </div>
        <div class="right">
          <i class="lm-close" @click="_handleClickRemoveAttachment(item.uid)"></i>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import { generateUUID, has } from '@utils'
  import Loader from '@components/UI/ProgressBar/Loader.vue'

  export default {
    name: 'lm-uploader',
    components: { 'lm-loader': Loader },
    data () {
      return {
        has,
        items: {
          data: [],
        }
      }
    },
    computed: {
      uploadedItems () {
        return this.items.data.filter(item => !item.error && item.id)
      },
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
        this.$nextTick(() => {
          let index = this.items.data.findIndex(item => item.uid === uid)

          if (index < 0) return

          let item = this.items.data[index]
          let { id, path, mime_type } = data
          item.loading = false
          item.progress = 100
          item.id = id
          item.path = path
          item.mime_type = mime_type

          this.items.data[index] = item
          this.$emit('update', JSON.parse(JSON.stringify(this.uploadedItems)))
        })
      },
      _handleUploadError (uid) {
        this.$nextTick(() => {
          let index = this.items.data.findIndex(item => item.uid === uid)

          if (index < 0) return

          this.items.data[index].error = true
        })
      },
      _handleUploadRemove (uid) {
        this.$nextTick(() => {
          let index = this.items.data.findIndex(item => item.uid === uid)

          if (index < 0) return

          this.$delete(this.items.data, index)
          this.$emit('update', JSON.parse(JSON.stringify(this.uploadedItems)))
        })
      },
      isThumbsAttachment (mimeType) {
        return (mimeType.indexOf('image') !== -1)
      },
      _handleChangeInputAttachFile (el) {
        let files = el.target.files || el.dataTransfer.files
        if (!files.length)
          return

        const file = el.target.files[0]

        let { name, size, type } = file
        let uid = generateUUID()
        let source = this.$api.getSource()
        let item = { source, uid, name, size, type, loading: true, progress: 10, error: false }

        this.items.data.push(item)

        this.$emit('onUpload', item, file, this._handleUploadProgress, this._handleUploadSuccess, this._handleUploadError, this._handleUploadRemove)
      },
      _handleClickRemoveAttachment (uid) {
        let index = this.items.data.findIndex(item => item.uid === uid)
        let item = this.items.data[index]

        item.source.cancel()

        if (item.id) {
          this.$emit('onRemove', item, this._handleUploadRemove)
        } else {
          this.$nextTick(() => {
            this.$delete(this.items.data, index)
            this.$emit('update', JSON.parse(JSON.stringify(this.uploadedItems)))
          })
        }
      },
    }
  }
</script>

<style>

</style>
