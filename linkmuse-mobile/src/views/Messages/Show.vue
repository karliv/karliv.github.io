<template>
  <div class="lm-m-messages lm-m-page lm-m-messages-show">
    <div class="lm-m-messages-head lm-m-page--head">
      <div class="left">
        <a @click="_handleClickPreviousPage">
          <i class="lm-back-icon"></i>
        </a>
      </div>
      <div class="center">
        <template v-if="dialog && interlocutor">
          <router-link :to="{ name: 'user.show', params: { username: interlocutor.username } }">
            <span>{{ interlocutor.name | truncate(25) }}</span>
            <template v-if="(typing === false)">
              <div class="text-status">{{ interlocutor.online ? 'онлайн' : 'был в сети ' + ($options.filters.moment(interlocutor.last_activity_at, 'from')) }}</div>
            </template>
            <template v-if="(typing === true)">
              <div class="text-status typing">
                <p>Печатает сообщение</p>
                <div class="typing-message">
                  <div class="bt"></div>
                  <div class="bt"></div>
                  <div class="bt"></div>
                </div>
              </div>
            </template>
          </router-link>
        </template>
      </div>
      <div class="right" v-if="dialog">
        <i class="lm-more-icon" @click="_handleClickActionSheetDialog"></i>
      </div>
    </div>
    <div class="lm-m-dialog-wrap" ref="wrapper" :style="{ height }">
      <template v-if="(dialog && errorDialog === false)">
        <div :class="['lm-m-dialog-body', { 'null': (isEmpty === true) }]" @click="_handleClick()" v-chat-scroll @scroll-top="_handleScrollTop()">
          <lm-m-loader v-if="(loading && loadmore.bottomStatus !== 'loading')"></lm-m-loader>
          <template v-if="(isEmpty === false)">
            <mt-loadmore :bottom-method="_handleLoadBottomMessages" @bottom-status-change="_handleBottomStatusChangeMessages" ref="loadmore">
              <div class="lm-m-dialog-wrap-scroll">
                <div v-for="(messages, date) in dates" :key="`messages_${date}`">
                  <div class="lm-m-dialog-body--item date">
                    <span>{{ isToday(date) ? 'Сегодня' : (isYesterday(date)) ? 'Вчера' : ($options.filters.moment([ date, "DD-MM-YYYY" ], 'D MMM')) }}</span>
                  </div>
                  <chat-message v-for="message in messages" :key="message.id"
                                @error="_handleClickErrorMessage" :message="message">
                  </chat-message>
                </div>
              </div>

              <div slot="bottom" class="mint-loadmore-bottom">
                <template v-if="loadmore.bottomStatus === 'loading'"><lm-m-loader></lm-m-loader></template>
                <span v-if="loadmore.bottomStatus !== 'loading'" :class="['arrow', { 'rotate': loadmore.bottomStatus === 'drop' }]">↑</span>
              </div>
            </mt-loadmore>
          </template>

          <template v-else-if="(isEmpty === true && can_write_messages)">
            <div class="lm-m-dialog-body--item null">
              <span>Напишите что-нибудь :)</span>
            </div>
          </template>
          <template v-if="!can_write_messages">
            <div class="lm-m-dialog-body--item null">
              <span>Вы не можете отправить сообщение этому пользователю, поскольку он ограничивает круг лиц, которые могут присылать ему сообщения.</span>
            </div>
          </template>
        </div>
        <div class="lm-m-dialog-footer" v-if="can_write_messages">
          <chat-input :dialog_id="dialog_id" :recipient_id="recipient_id"
                      @send="_handleSendMessage"
                      @presend="_handlePreSendMessage"
                      @error="_handleErrorSendMessage">
          </chat-input>
        </div>
      </template>
      <template v-if="(!dialog || errorDialog === true)">
        <div class="lm-m-dialog-body error">
          <div class="lm-m-dialog-body--item null">
            <span>Произошла ошибка :(</span>
          </div>
        </div>
      </template>
    </div>
    <actionsheet :actions="sheets.dialog.actions" v-model="sheets.dialog.value" cancel-text=""></actionsheet>
    <actionsheet :actions="sheets.error.actions" v-model="sheets.error.value" cancel-text=""></actionsheet>
  </div>
</template>

<script>
  import { on, off } from '@utils'
  import { Loadmore, Toast, Indicator } from 'mint-ui'
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  import ChatInput from '@components/Message/Messages/Input.vue';
  import ChatMessage from '@components/Message/Messages/Message.vue';

  export default {
    components: { ChatMessage, ChatInput, 'mt-loadmore': Loadmore },
    metaInfo: {
      title: 'Сообщения'
    },
    async asyncData ({ store, route }) {
      let { uid } = route.params

      await store.dispatch('message/fetchMessagesByDialogId', { uid: String(uid), rewrite: true })
      await store.dispatch('message/getDialogById', String(uid))
    },
    data () {
      return {
        height: 0,
        typing: false,
        dialog_id: null,
        sheets: {
          dialog: {
            value: false,
            actions: [
              {
                name: this.$t('messages.open-profile-or-delete-dialogue.open-profile'),
                method: this._handleClickOpenProfile
              },
              {
                name: this.$t('messages.open-profile-or-delete-dialogue.delete'),
                method: this._handleClickDestroyDialog,
                color: '#fc2e5f'
              }
            ]
          },
          error: {
            value: false,
            uuid: null,
            actions: [
              {
                name: 'Открыть повторно',
                method: this._handleClickRetryErrorMessage
              },
              {
                name: 'Удалить',
                method: this._handleClickDestroyErrorMessage,
                color: '#fc2e5f'
              }
            ]
          }
        },
        loadmore: {
          bottomStatus: null
        },
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser',
        messages: 'message/getMessages',
        count: 'message/getCountMessages',
        offset: 'message/getOffsetMessages',
        error: 'message/getMessagesError',
        dialog: 'message/getShowDialogData',
        loading: 'message/getMessagesLoading',
        loadingDialog: 'message/getShowDialogLoading',
        errorDialog: 'message/getShowDialogError'
      }),
      isEmpty () {
        return ( !this.loading && this.count === 0 )
      },
      dates () {
        return this._.groupBy(this.messages, msg => msg.date)
      },
      interlocutor () {
        return this.dialog.interlocutor
      },
      recipient_id () {
        return this.interlocutor.id
      },
      can_write_messages () {
        return true
        // return this.dialog.privacy.data['write_messages']
      }
    },
    created () {
      this.dialog_id = String(this.$route.params.uid)
    },
    beforeDestroy () {
      // this.$chatBull.show()
      off(window, 'resize')
      this.$echo.private(`dialog.${this.dialog_id}`).stopListening('typing')
      this.$echo.private('user.' + this.user.id).stopListening('Message\\MessageWasReceived')
      this.$nsWebViewInterface.emit("hide_dialog", this.dialog_id)
    },
    mounted () {
      // this.$chatBull.hide()
      on(window, 'resize', this._handleResizeWindow)
      this.height = `${document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top - 60}px`

      let typing = null;
      this.$echo.private(`dialog.${this.dialog_id}`).listenForWhisper('typing', (e) => {
        if (e.dialog_id === this.dialog_id) {
          this.typing = e.typing;

          clearTimeout(typing);
          typing = setTimeout(() => {
            this.typing = false
          }, 900);
        }
      })

      this.$echo.private('user.' + this.user.id).listen('Message\\MessageWasReceived', ({ data }) => {
        this._addMessage(data)
        this._updateOffsetMessages()
      });

      this.$nsWebViewInterface.emit("show_dialog", this.dialog_id)
    },
    methods: {
      ...mapActions({
        _handleFetchMessages: 'message/fetchMessagesByDialogId'
      }),
      ...mapMutations({
        _addMessage: 'message/ADD_NEW_MESSAGE_ON_DATA',
        _updateMessageByUuid: 'message/UPDATE_MESSAGE_ON_DATA_BY_UUID',
        _updateFieldMessageByUuid: 'message/UPDATE_FIELD_MESSAGE_ON_DATA_BY_UUID',
        _destroyMessageByUuid: 'message/DESTROY_MESSAGE_ON_DATA_BY_UUID',
        _updateOffsetMessages: 'message/UPDATE_OFFSET_MESSAGE_ON_DATA'
      }),
      _handleResizeWindow () {
        this.height = `${document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top - 60}px`
      },
      _handleScrollTop () {
        console.log(this.offset >= this.count)
        if (this.loading || (this.offset >= this.count)) return
        this._handleFetchMessages({uid: String(this.dialog_id), rewrite: false })
      },
      isToday(date) {
        let context = this.$moment(date, 'DD-MM-YYYY');
        return this.$moment().isSame(context, 'd');
      },
      isYesterday (date) {
        let context = this.$moment(date, 'DD-MM-YYYY')
        return this.$moment().subtract(1, 'day').isSame(context, 'd')
      },
      _handleSendMessage (message, uuid) {
        this._updateMessageByUuid({ uuid, message })
        this._updateOffsetMessages()
      },
      _handlePreSendMessage (message) {
        this._addMessage(message)
      },
      _handleErrorSendMessage (uuid) {
        this._updateFieldMessageByUuid({ uuid, key: 'error', value: true })
      },
      _handleClickActionSheetDialog () {
        this.sheets.dialog.value = true
      },
      _handleClickOpenProfile () {
        this.$router.push({ name: 'user.show', params: { username: this.interlocutor.username } })
      },
      _handleClickDestroyDialog () {
        Indicator.open()

        this.$api.delete(`api/v1/dialogs/${this.dialog_id}`).then((response) => {

          Indicator.close()

          this.$router.replace({ name: 'messages.index' })

        }, (error) => {
          const { response: { data }, response: { status }} = error

          Indicator.close()

          Toast({
            message: 'Ошибка',
            iconClass: 'mintui mintui-field-error'
          })

          throw new Error('Error follow user')
        })
      },
      _handleClickErrorMessage (uuid) {
        this.sheets.error.uuid = uuid
        this.sheets.error.value = true
      },
      _handleClickRetryErrorMessage () {
        let { uuid } = this.sheets.error

        if (!uuid) return

        let message = this._.find(this.messages, (msg) => msg.uuid === uuid)
        if (message) {
          this.$emit('retry', message)
        }
      },
      _handleClickDestroyErrorMessage () {
        let { uuid } = this.sheets.error

        if (!uuid) return

        this._destroyMessageByUuid({ uuid })
      },
      _handleLoadBottomMessages () {
        this._handleFetchMessages({uid: String(this.dialog_id), rewrite: true }).then(() => {
          this.$refs.loadmore.onBottomLoaded();
        }).catch(() => console.log('Error loading'))
      },
      _handleBottomStatusChangeMessages (status) {
        this.loadmore.bottomStatus = status
      },
      _handleClickPreviousPage () {
        if (window.history.length > 2) {
          this.$router.go(-1)
        } else {
          this.$router.push({ name: 'messages.index' })
        }
      },
      _handleClick () {
        window.nsWebViewInterface.emit('dismissKeyboard')
      }
    }
  }
</script>
<style lang="sass" scoped>
  .typing
    p
      display: inline-block
    .typing-message
      display: inline-block
      margin-left: 6px
</style>
