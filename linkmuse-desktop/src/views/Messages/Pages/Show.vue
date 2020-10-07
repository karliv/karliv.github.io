<template>
  <div :class="{ loading: loadingDialog }">
    <div class="messages-wrap">
      <div class="history__content">
        <div class="history__content--title">
          <template v-if="dialog && interlocutor">
            <a :href="dialog.username">
              <img class="history__content--title--avatar" :src="interlocutor.avatar" :alt="interlocutor.name">
              <div class="name">{{ interlocutor.name | truncate(25) }}
                <tooltip v-if="interlocutor['without_moderate_castings'] && interlocutor['without_moderate_projects']" placement="top" content="Проверенный заказчик">
                  <img style="width: 20px;height: 20px;box-shadow: 0 0 0" src="/dist/img/icon/verif-linkmuse.svg" :alt="$t('dialogs.messages_one.approved_customer')" class="verif-customer">
                </tooltip>
                <span>{{ interlocutor.online ? 'онлайн' : 'был в сети ' + ($options.filters.moment(interlocutor.last_activity_at, 'from')) }}</span>
              </div>
            </a>

            <template v-if="isAdmin">
              <a href="javascript:void(0)" class="lm-primary-button very-small ml_4" @click="_handleClickReportToCRM">В амо</a>
            </template>

            <div class="history__content--tools">
              <div class="search icon-search_L2" style="display: none;"></div>
              <i class="icon-more">
                <div class="actions-item">
                  <ul>
                    <li style="dispaly: none;"><a href="javascript:void(0)" @click="_handleClickClearDialog">{{ $t('dialogs.messages-page-two.clear') }}</a></li>
                    <li><a href="javascript:void(0)" @click="_handleClickCreateAbuse">{{ $t('dialogs.messages-page-two.report') }}</a></li>
                  </ul>
                </div>
              </i>
            </div>
          </template>
          <template v-if="(errorDialog && !dialog)">
            <router-link :to="{ name: 'messages.index' }">
              <img class="history__content--title--avatar" :src="emptyAvatar" alt="Del Del">
              <div class="name">Del Del</div>
            </router-link>
          </template>
        </div>
      </div>
      <div :class="['history_content_center']">
        <template v-if="dialog && interlocutor">
          <lm-loader v-if="loading" :class="['history_empty-messages', { 'history__content--messages ': (loading && count === 0) }]" :style="{ marginTop: '10px' }"></lm-loader>
          <template v-if="(isEmpty === true)">
            <div class="history__content--messages history_empty-messages">
              <div class="lm-messages--null">
                <span>{{ $t('dialogs.history-of-messages.chat-history') }}</span>
              </div>
            </div>
          </template>
          <template v-if="(isEmpty === false)">
            <div id="container-messages" v-chat-scroll @scroll-top="_handleScrollTop">
              <div class="history__content--messages">
                <div v-for="(messages, date) in dates" :key="`messages_${date}`">
                  <div class="date-message">
                    <span>{{ isToday(date) ? 'Сегодня' : (isYesterday(date)) ? 'Вчера' : ($options.filters.moment([ date, "DD-MM-YYYY" ], 'D MMM')) }}</span>
                  </div>
                  <chat-message v-for="message in messages" :key="message.id"
                                :message="message" :dialogId="dialogId"
                                @remove="_handleRemoveMessage"
                                @error="_handleRetryErrorMessage">
                  </chat-message>
                </div>
              </div>
            </div>
          </template>
        </template>
        <template v-if="(errorDialog && !dialog)">
          <div class="history__content--messages history_empty-messages">
            <div class="lm-messages--null">
              <span>Здесь будет выводиться история переписки.</span>
            </div>
          </div>
        </template>
      </div>

      <template v-if="dialog && interlocutor">
        <template v-if="typing">
          <div class="typing">
            <span>Печатает сообщение</span>
            <div class="typing-message">
              <div class="bt"></div>
              <div class="bt"></div>
              <div class="bt"></div>
            </div>
          </div>
        </template>

        <template v-if="canWriteMessages && loadingDialog === false">
          <chat-input :dialog_id="dialogId" :recipient_id="recipientId"
                      @send="_handleSendMessage"
                      @presend="_handlePreSendMessage"
                      @error="_handleErrorSendMessage">
          </chat-input>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
  import { emptyAvatar } from '@utils'
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  import ChatInput from '@components/Message/Messages/Input.vue'
  import ChatMessage from '@components/Message/Messages/Message.vue'

  export default {
    components: { ChatMessage, ChatInput },
    async asyncData ({ store, route }) {
      let { uid } = route.params
      Promise.all([
        store.dispatch('message/getDialogById', String(uid))
      ])
    },
    data () {
      return {
        emptyAvatar,
        typing: false,
        dialogId: null
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
        errorDialog: 'message/getShowDialogError',
        loadingDialog: 'message/getShowDialogLoading'
      }),
      isEmpty () {
        return ( !this.loading && this.count === 0 )
      },
      dates () {
        return this._.groupBy(this.messages, msg => msg.date)
        /*
        TODO: orderBy for dateTime -- need seconds for backend
        return this._.mapValues(this._.groupBy(this.messages, msg => msg.date), m => this._.orderBy(m, (m) => {
          console.log(m)
          const { date, sent_time: time } = m
          return new Date(`${date} ${time}`)
        }))
        */
      },
      interlocutor () {
        return this.dialog.interlocutor
      },
      recipientId () {
        return this.interlocutor.id
      },
      canWriteMessages () {
        return true
        // return this.dialog.privacy.data['write_messages']
      },
      isAdmin () {
        return (this.user && this.user.hasOwnProperty('isAdmin') && this.user['isAdmin'] === true)
      },
    },
    beforeRouteUpdate (to, from, next) {
      const { uid } = to.params

      this.$store.dispatch('message/clearMessages').then(() => {
        next()
        this.dialogId = String(uid)
        this._handleSetDialogFiledById({ id: this.dialogId, key: 'count_new', value: 0 })
        this.$store.dispatch('message/fetchMessagesByDialogId', { uid: String(uid), rewrite: true })
      }).catch(() => { throw ('Error clearing messages') })
    },
    created () {
      const { uid } = this.$route.params

      this.dialogId = String(uid)
      this._handleSetDialogFiledById({ id: this.dialogId, key: 'count_new', value: 0 })
      this.$store.dispatch('message/fetchMessagesByDialogId', { uid: String(uid), rewrite: true })
    },
    beforeDestroy () {
      this.$echo.private(`dialog.${this.dialogId}`).stopListening('typing')
      this.$echo.private('user.' + this.user.id).stopListening('Message\\MessageWasReceived')
    },
    mounted () {
      let typing = null;
      this.$echo.private(`dialog.${this.dialogId}`).listenForWhisper('typing', (e) => {
        if (e.dialog_id === this.dialogId) {
          this.typing = e.typing;

          clearTimeout(typing);
          typing = setTimeout(() => {
            this.typing = false
          }, 900);
        }
      })

      this.$echo.private('user.' + this.user.id).listen('Message\\MessageWasReceived', ({ data }) => {
        const { uid } = data
        if (this.dialogId === uid) {
          this._addMessage(data)
          this._updateOffsetMessages()
        }
      });
    },
    methods: {
      ...mapActions({
        _handleCreateDialog: 'message/createDialog',
        _handleClearMessages: 'message/clearMessages',
        _handleFetchMessages: 'message/fetchMessagesByDialogId',
        _handleSetDialogFiledById: 'message/setDialogFiledById',
      }),
      ...mapMutations({
        _setMessages: 'message/SET_MESSAGES_DATA',
        _addMessage: 'message/ADD_NEW_MESSAGE_ON_DATA',
        _destroyMessageById: 'message/DESTROY_MESSAGE_ON_DATA_BY_ID',
        _updateOffsetMessages: 'message/UPDATE_OFFSET_MESSAGE_ON_DATA',
        _updateMessageByUuid: 'message/UPDATE_MESSAGE_ON_DATA_BY_UUID',
        _destroyMessageByUuid: 'message/DESTROY_MESSAGE_ON_DATA_BY_UUID',
        _updateFieldMessageByUuid: 'message/UPDATE_FIELD_MESSAGE_ON_DATA_BY_UUID',
      }),
      _handleScrollTop () {
        if (this.loading || (this.offset >= this.count)) return
        this._handleFetchMessages({uid: String(this.dialogId), rewrite: false })
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

        const { date, text, sent_time: time, attachments } = message
        const dialog = this.$store.getters['message/getDialogById'](this.dialogId)

        if (dialog) {
          this._handleSetDialogFiledById({ id: dialog.id, key: 'message', value: {
            time, date, text,
            me: true, read: false,
            is_attachment: (!!attachments.length)
          }})
        } else {
          const { avatar, name } = this.interlocutor

          this._handleCreateDialog({
            count_new: 0,
            id: this.dialogId,
            interlocutor: { avatar, name },
            message: {
              time, date, text,
              me: true, read: false,
              is_attachment: (!!attachments.length)
            }
          })
        }
      },
      _handleErrorSendMessage (uuid) {
        this._updateFieldMessageByUuid({ uuid, key: 'error', value: true })
      },
      _handleRemoveMessage (id, uuid = false) {
        if (uuid) {
          this._destroyMessageByUuid({ uuid })
        } else {
          const message = this.$store.getters['message/getMessageById'](id)

          this._destroyMessageById({ id })
          this.$api.delete(`api/v1/dialogs/${this.dialogId}/messages/${id}`).then((response) => {
            console.log('Success destroy message')
          }, (error) => {
            this._addMessage(message)
            const { response: { data, status }} = error
            throw new Error('Error destroy message')
          })
        }
      },
      _handleRetryErrorMessage (uuid) {
        let message = this._.find(this.messages, (msg) => msg.uuid === uuid)
        if (message) {
          this.$emit('retry', message)
        }
      },
      _handleClickClearDialog () {
        this.$confirm({
          title: this.$t('dialogs.delete-dialogue.delete-dialogue'),
          message: this.$t('dialogs.delete-dialogue.sure')
        }).then((args) => {

          const backup = this._.cloneDeep({
            rewrite: false,
            count: this.count,
            offset: this.offset,
            data: this.messages,
          })

          this._handleClearMessages()
          this._removeDialog(this.dialogId).then(() => {}).catch((args) => {
            this._setMessages(backup)
          })
        }).catch((args) => {})
      },
      _removeDialog (id) {
        return new Promise((resolve, reject) => {
          this.$api.delete(`/api/v1/dialogs/${id}`).then(response => {
            let { data } = response
            resolve && resolve(id)
          }).catch(error => {
            const { response: { data, status } } = error
            reject && reject()
            throw new Error('Error delete dialog')
          })
        })
      },
      _handleClickCreateAbuse () {
        this.$root.$emit('open-modal-abuse-create', { id: this.recipientId, type: 'user' })
      },
      _handleClickReportToCRM () {
        return new Promise((resolve, reject) => {
          const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

          this.$api.post(`api/admin/v1/users/${this.recipientId}/report-messenger`).then((response) => {
            const { data } = response

            loader.hide()

            resolve()
          }, (error) => {
            const { response: { data, status } } = error

            loader.hide()
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            reject()

            throw new Error('Error report messenger user AMOCrm')
          })
        })
      }
    }
  }
</script>

<style lang="sass" scoped>
  .history__content--messages
    position: relative !important
  .history_empty-messages
    -webkit-box-flex: 1
    -webkit-flex: 1 auto
    -ms-flex: 1 auto
    flex: 1 auto
    display: -webkit-box
    display: -webkit-flex
    display: -ms-flexbox
    display: flex
    -webkit-box-align: center
    -webkit-align-items: center
    -ms-flex-align: center
    align-items: center
    -webkit-box-pack: center
    -webkit-justify-content: center
    -ms-flex-pack: center
    justify-content: center
  .lm-messages--null
    margin: auto
    display: block
    text-align: center
    span
      display: block
      color: #808792
      font-size: 14px
      line-height: 18px
      text-align: center
  .typing
    position: relative
    top: -5px
    padding-left: 25px
    color: #B5B9C0
    font-size: 12px
    span
      padding-left: 7px
</style>
