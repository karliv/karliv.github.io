<template>
  <div class="lm-m-messages--item">
    <router-link :to="{ name: 'messages.show', params: { uid: dialog.id } }">
      <div class="lm-user-block">
      <div class="lm-user-block-avatar-wrap">
        <object>
          <router-link :to="{ name: 'user.show', params: { username: interlocutor.username } }">
            <img :src="interlocutor.avatar" class="lm-user-block-avatar" :alt="interlocutor.name">
            <div :class="['lm-user-block-avatar-status', { 'online': (interlocutor.online === true), 'offline': (interlocutor.online === false) }]"></div>
          </router-link>
        </object>
      </div>
      <div class="lm-user-block-info">
        <div class="lm-m-messages--item-name">
          <div class="lm-user-block-info-name">
            <span>{{ interlocutor.name | truncate(30) }}</span>
          </div>
          <div class="lm-m-messages--item-date">{{ (isToday) ? time : (isYesterday) ? 'Вчера' : $moment(date, 'DD-MM-YYYY').format('D MMM') }}</div>
        </div>
        <div :class="['lm-m-messages--item-text', { 'no-read': (isLastMessageMe === true && isRead === false) }]">
          <template v-if="(typing === false)">
            <template v-if="(isLastMessageMe === true && user)">
              <img class="lm-my-avatar" :src="user.avatar['84x84']" :alt="user.name">
            </template>
            <template v-if="(isAttachment === false)">
              <div class="lm-user-block-info-type" v-html="text"></div>
            </template>
            <template v-else-if="(isAttachment === true)">
              <div class="lm-user-block-info-type">Вложение</div>
            </template>
            <template v-if="(isLastMessageMe === false && isRead === false)">
              <div class="lm-m-messages--item-read">
                <div class="no-read"></div>
              </div>
            </template>
          </template>
          <template v-if="(typing === true)">
            <div class="typing">
              <span>Печатает сообщение</span>
              <div class="typing-message">
                <div class="bt"></div>
                <div class="bt"></div>
                <div class="bt"></div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    </router-link>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: {
      dialog: {
        required: true
      }
    },
    data () {
      return {
        typing: false
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser'
      }),
      text() {
        let text = this.dialog['message']['text']

        if (text) {
          text = this.$striptags(text) // Removed all tags
          text = this.$nl2br(text) // nl2br to <br>
          // text = this.$emoji(text) // :emoji: to <img>
          text = this.$truncate(text, 25, { keepImageTag: true }) // truncate text
        }

        return text;
      },
      date () {
        return this.dialog['message']['date']
      },
      time () {
        return this.dialog['message']['time']
      },
      isToday () {
        let context = this.$moment(this.date, 'DD-MM-YYYY')
        return this.$moment().isSame(context, 'd')
      },
      isYesterday () {
        let context = this.$moment(this.date, 'DD-MM-YYYY')
        return this.$moment().subtract(1, 'day').isSame(context, 'd')
      },
      isAttachment () {
        return this.dialog['message']['is_attachment']
      },
      isRead () {
        return this.dialog['message']['read']
      },
      isLastMessageMe () {
        return this.dialog['message']['me']
      },
      interlocutor () {
        return this.dialog['interlocutor']
      }
    },
    beforeDestroy () {
      this.$echo.private(`dialog.${this.dialog.id}`).stopListening('typing')
    },
    mounted () {
      let typing = null;
      this.$echo.private(`dialog.${this.dialog.id}`).listenForWhisper('typing', (e) => {
        if (e.dialog_id === this.dialog.id) {
          this.typing = e.typing;

          clearTimeout(typing);
          typing = setTimeout(() => {
            this.typing = false
          }, 900);
        }
      })
    }
  }
</script>

<style scoped>
</style>
