<template>
    <div class="history__content--edit">
        <template>
            <emoji-input-area name="message"
                id="emoji-area-dialog" ref="emoji-area-dialog"
                placeholder="Начните писать сообщение"
                :readonly="false"
                @paste:image="_handlePasteImage"
                @key:enter="_handleClickSendButton"
                @key:tab="_handleShowEmojiPicker"
                v-model="fields.text">
            </emoji-input-area>

            <div class="message-form-action">
                <div class="emoji" @click="_handleShowEmojiPicker" id="emoji-button-dialog">
                    <emoji-input-picker v-show="emoji.picker"
                        ref="emoji"
                        area="emoji-area-dialog"
                        btn="emoji-button-dialog"
                        @hide="_handleHideEmojiPicker"
                        @insert:emoji="_handleInsertEmoji"
                        class="link-muse-emoji-picker">
                    </emoji-input-picker>
                </div>
                <div :class="['send', { active: (fields.text) }]" @click="_handleClickSendButton"></div>
            </div>
        </template>
    </div>
</template>

<script>
import { generateUUID } from '@utils'
import { mapGetters } from 'vuex'

export default {
  props: {
    uid: {
      type: String,
      required: true
    },
    recipient_id: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/getAuthUser'
    })
  },
  data () {
    return {
      fields: {
        text: null,
        recipient_id: this.recipient_id
      },
      emoji: {
        picker: false
      }
    }
  },
  watch: {
    'fields.text' () {
      let channel = this.$echo.private(`dialog.${this.uid}`)
      setTimeout(() => {
        channel.whisper('typing', {
          dialog_id: this.uid,
          typing: true
        })
      }, 300)
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
      let { text, recipient_id } = this.fields

      if (!text) return

      let uuid = generateUUID()
      this.generatePreSendMessage(uuid).then((message) => {
        this.$emit('presend', message)
        this.clearInput()
      })

      this.$api.post(`/api/v1/dialogs/messages`, { text, recipient_id }).then(response => {
        let { data: { data } } = response
        this.$emit('send', data, uuid)
      }).catch((err) => {
        this.$emit('error', uuid)
        throw new Error(`Error fetch messages in order ${this.order_id}`)
      })
    },
    generatePreSendMessage (uuid) {
      return new Promise((resolve, reject) => {
        let { text, recipient_id } = this.fields

        let message = {
          attachments: [],
          uuid,
          recipient_id,
          text,
          date: this.$moment().format('DD-MM-YYYY'),
          sent: this.$moment().format('DD-MM-YYYY HH:mm'),
          sent_time: this.$moment().format('HH:mm'),
          read: false,
          from_id: this.user.id,
          me_avatar: this.user.avatar,
          error: false,
          from: {
            data: {
              name: this.user.fullname,
              avatar: this.user.avatar,
              href: this.user.href
            }
          }
        }
        resolve(message)
      })
    },
    clearInput () {
      this.fields.text = null
      this.$emit('clear-emoji-area')
    }
  }
}
</script>

<style lang="sass" scoped>
  .ss-dialog-text-write
    .send
      &.active, &:hover
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19"><path fill="%230063da" fill-rule="nonzero" d="M.05 17.655l2.1-6.297c.115-.346.41-.602.77-.668l7.98-1.204L2.92 8.28a1.004 1.004 0 0 1-.77-.668L.05 1.317A1.002 1.002 0 0 1 1.419.092L4.9 1.7l14.904 6.879a1 1 0 1 1 0 1.816L1.418 18.879a.998.998 0 0 1-1.085-.163c-.307-.304-.403-.7-.282-1.061z"/></svg>')
</style>
