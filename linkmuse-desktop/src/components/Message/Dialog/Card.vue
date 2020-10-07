<template>
    <router-link :to="{ name: 'messages.show', params: { uid: dialog.id } }" activeClass="selected" :class="['dialogs__list--item']">
      <div class="image-user">
        <img :src="interlocutor.avatar" :alt="interlocutor.name">
        <template v-if="(countNew && countNew > 0)">
          <div class="count-no-read">{{ countNew }}</div>
        </template>
      </div>
      <div class="from-user">
        <div class="name-user">{{ interlocutor.name | truncate(12) }}</div>
        <no-ssr>
          <div :class="[ 'text-user', { 'no-read': (isLastMessageMe === true && isRead === false) }]">
            <template v-if="(isLastMessageMe === true)">
              <img class="me" :src="avatar" alt="Me">
            </template>
            <template v-if="(typing === false)">
              <template v-if="(isAttachment === false)">
                <span class="lm-user-block-info-type" v-html="text"></span>
              </template>
              <template v-else-if="(isAttachment === true)">
                <span class="lm-user-block-info-type">Вложение</span>
              </template>
            </template>
            <template v-if="(typing === true)">
              <div class="typing-dialog">
                <span>Печатает</span>
                <div class="typing-message">
                  <div class="bt"></div>
                  <div class="bt"></div>
                  <div class="bt"></div>
                </div>
              </div>
            </template>
          </div>
        </no-ssr>
      </div>
      <div class="time-message">{{ (isToday) ? $moment(time, 'HH:mm:ss').format('HH:mm') : (isYesterday) ? 'Вчера' : $moment(date, 'DD-MM-YYYY').format('D MMM') }}</div>
      <div title="Удалить" class="close icon-Add" @click.stop.prevent="_handleClickRemoveDialog"></div>
    </router-link>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { has, AVATAR } from '@utils'

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
          text = this.$emoji(text) // :emoji: to <img>
          text = this.$truncate(text, 25, { keepImageTag: true }) // truncate text
        }

        return text || 'Сообщение'
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
      },
      countNew () {
        return this.dialog['count_new']
      },
      avatar () {
        if (this.user && has(this.user, 'avatar.84x84')) {
          const { avatar: { '84x84': image } } = this.user
          return image || AVATAR
        } else return AVATAR
      },
    },
    beforeDestroy () {
      this.$echo.private(`dialog.${this.dialog.id}`).stopListening('typing')
    },
    mounted () {
      let typing = null;
      this.$echo.private(`dialog.${this.dialog.id}`).listenForWhisper('typing', (e) => {
        if (e.dialog_id === this.dialog.id) {
          this.typing = e.typing;

          clearTimeout(typing)
          typing = setTimeout(() => {
            this.typing = false
          }, 900)
        }
      })
    },
    methods: {
      _handleClickRemoveDialog () {
        let { id } = this.dialog
        this.$confirm({
          title: 'Удаление диалога',
          message: 'Вы уверены, что хотите удалить выбранный диалог?'
        }).then((args) => {
          this.$emit('remove', id)
        }).catch((args) => {})
      }
    }
  }
</script>

<style lang="sass">
</style>
