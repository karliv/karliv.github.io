<template>
  <div :class="['lm-m-dialog-body--item', { from: (isFromMe === true), to: (isFromMe === false), 'not_read': (isNotRead), 'error': error }]">
    <div class="lm-m-dialog-body--item-wrap">
      <div class="error-icon" @click="_handleClickError" v-if="error"></div>
      <div class="lm-m-dialog-border">
        <div v-if="text" class="text" v-html="text"></div>
        <template v-if="thumbs_attachments.length">
          <template v-for="chunk in _.chunk(thumbs_attachments, 9)">
            <div :class="['lm-m-dialogs-'+ chunk.length]">
              <div :class="['lm-m-dialog-attach', attach.type]" v-for="attach in chunk">
                <template v-if="attach.type === 'photo'">
                  <media :media="attach" type="photo"
                         :src="attach.path"
                         :album="`dialog_${message.uid}`">
                    <img :src="attach.path" :alt="attach.description">
                  </media>
                </template>
                <template v-if="attach.type === 'video'">
                  <media :media="attach" type="video"
                         :player="attach.player"
                         :album="`dialog_${message.uid}`">
                    <img :src="attach['cover_image']" :alt="attach.description">
                    <i class="lm-play"></i>
                  </media>
                </template>
              </div>
            </div>
          </template>
        </template>
        <template v-if="other_attachments.length">
          <div class="lm-m-dialog-body--item-document" v-for="attach in other_attachments">
            <a :href="attach.path" target="_blank" download>
              <i class="lm-icon-square-download"></i>
              <span class="lm-m-dialog-body--item-name">{{ attach.description | truncate(15) }}</span>
            </a>
          </div>
        </template>
        <div class="date">{{ message['sent_time'] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: {
      message: {
        type: Object,
        required: true
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser'
      }),
      isFromMe () {
        return (this.message['from_id'] === this.user.id)
      },
      isNotRead () {
        return (this.message['read'] === false)
      },
      text () {
        let { text } = this.message;

        let allowed = ['span']

        if (this.message['is_html']) {
          allowed = [...allowed, 'ul', 'li', 'b', 'h3', 'ol', 'p', 'a']
        }

        if (text) {
          text = this.$striptags(text, allowed); // Removed all tags
          text = this.$nl2br(text); // nl2br to <br>
          text = this.$emoji(text); // :emoji: to <img>
          text = this.$anchorme(text); // find link and to <a>
        }

        return text;
      },
      error () {
        return this.message.error || false
      },
      thumbs_attachments () {
        return this.message.attachments.filter((item) => {
          return ((item.type === 'photo') || (item.type === 'video'));
        });
      },
      other_attachments () {
        return this.message.attachments.filter((item) => {
          return ((item.type === 'document'));
        });
      }
    },
    mounted () {
      if (this.isFromMe === false && this.isNotRead === true) {
        this.$store.dispatch('auth/subtractCountUnreadMessages')
      }
    },
    methods: {
      _handleClickError () {
        this.$emit('error', this.message.uuid)
      }
    }
  }
</script>

<style scoped>

</style>
