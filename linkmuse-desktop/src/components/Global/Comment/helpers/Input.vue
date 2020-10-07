<template>
  <div class="history__content--edit">
    <template>
      <emoji-input-area name="message" class="comment-textarea"
        id="emoji-area-comment"
        placeholder="Начните писать сообщение"
        :readonly="false"
        @paste:image="_handlePasteImage"
        @key:enter="_handleClickSendButton"
        @key:tab="_handleShowEmojiPicker"
        v-model="fields.text">
      </emoji-input-area>
      <div class="emoji" @click="_handleShowEmojiPicker" id="emoji-button-comment">
        <emoji-input-picker v-if="emoji.picker"
          ref="emoji"
          area="emoji-area-comment"
          btn="emoji-button-comment"
          @hide="_handleHideEmojiPicker"
          @insert:emoji="_handleInsertEmoji"
          class="link-muse-emoji-picker">
        </emoji-input-picker>
      </div>
      <template>
        <div class="send icon-Send" @click="_handleClickSendButton" v-if="!loading"></div>
        <loader class="send" v-else-if="loading"></loader>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    id: {
      required: true
    },
    privacy_write_comments: {
      required: true
    }
  },
  data() {
    return {
      fields: {
        text: null
      },
      emoji: {
        picker: false
      },
      loading: false,
    }
  },
  methods: {
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
      let { fields: { text }, type, id } = this;
      if (this.loading || !text || !type || !id) return false;

      this.loading = true

      this.$api.post('/api/v1/comments', { type, id, text }).then(response => {
        let { data: { data } } = response
        this.$emit('comment:create', data);
        this.clearInput()
        this.loading = false
      }).catch(() => {
        this.loading = false
        throw new Error(`Error create comments ${type}/${id}`)
      })
    },
    clearInput () {
      return new Promise((resolve, reject) => {
        this.fields.text = null
        this.$emit('clear-emoji-area')

        resolve()
      })
    }
  }
}
</script>

<style scoped>

</style>
