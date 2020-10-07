<template>
  <mt-popup class="lm-m-modal-wrap lm-m-abuse modal-pdf modal-customer-feedback" v-model="modal.show" position="center" :modal="true" @input="_handleInputPopup">
    <div class="title"><strong>Оставьте свой отзыв <br>о нашем сервисе</strong></div>
    <div class="lm-input-wrap">
      <textarea
        placeholder="Что бы Вы хотели улучшить в работе сайта?
Какие дополнения необходимо ввести?"
        id="comment_abuse"
        name="feedback-message"
        v-model="modal.fields.message"
        :data-vv-as="'Ваш отзыв'"
        v-validate="'required'"
        :class="['lm-input']"></textarea>
      <span class="lm-input-error" v-if="verrors.has('feedback-message')">{{ verrors.first('feedback-message')}}</span>
    </div>
    <div class="lm-m-abuse-actions">
      <a href="javascript:void(0)" class="lm-primary-button middle" @click="_handleSendFeedback()">Отправить</a>
    </div>
  </mt-popup>
</template>

<script>
  import { Popup } from 'mint-ui'
  import { Indicator, Toast } from 'mint-ui'
  import PopupMix from '@components/Mixins/Popup'

  export default {
    components: { 'mt-popup': Popup },
    mixins: [PopupMix],
    props: {
      postData: {
        type: Object,
        default: () => { return {} },
      }
    },
    data () {
      return {
        modal: {
          show: false,
          confirm: false,
          loading: false,
          sent: false,
          fields: {
            message: null,
          }
        },
      }
    },
    mounted () {
      let canOpen = !localStorage.getItem('kekz.feedback')

      if (canOpen && this.postData.email) this.modal.show = true
    },
    methods: {
      _handleSendFeedback () {
        this._handleValidateFields().then(() => {
          Indicator.open()

          let data = {
            ...this.postData,
            ...this.modal.fields
          }

          this.$api.post('https://doorbell.io/api/applications/10282/submit?key=uVNN2HoTctxL0Z7nsiL7Cm9Bk1NRomabCP9TJPlJjusb6cPx6Bsj1Kukzd8nOjMt', data).then((response) => {
            Indicator.close()
            localStorage.setItem('kekz.feedback', 'true')
            this.sent = true
            this._handleClearModal()

            Toast({
              message: 'Успешно',
              iconClass: 'mintui mintui-success'
            })

          }, (response) => {
            Indicator.close()

            this.sent = true
            this._handleClearModal()

            Toast({
              message: 'Ошибка',
              iconClass: 'mintui mintui-field-error'
            })
            throw new Error("Error store abuse");
          });
        })
      },
      /**
       * Validate all fields on current transition
       * @returns {Promise<any>}
       * @private
       */
      _handleValidateFields () {
        return new Promise((resolve, reject) => {
          this.$validator.validateAll().then(result => {
            if (result) {
              resolve(result)
            } else reject()
          })
        })
      },
      _handleInputPopup (value) {
        if (value === false) {
          if (!this.modal.confirm && !this.sent) {
            this.$confirm({
              title: '',
              message: 'Больше не показывать форму для пожеланий?',
              confirmTxt: 'Да',
              cancelTxt: 'Нет'
            }).then((args) => {
              localStorage.setItem('kekz.feedback', 'true')
              this.modal.confirm = true
              this._handleClearModal()
            }).catch((args) => {
              this._handleClearModal()
            });
          } else {
            this._handleClearModal()
          }
        }
      },
      _handleClearModal () {
        this.modal.show = false
        this.modal.loading = false
      }
    }
  }
</script>

<style lang="sass">
  .modal-customer-feedback.modal-abuse.modal-pdf
    .modal-content
      width: 450px !important
    .modal-abuse-content
      .lm-pdf-success
        width: 185px
        margin: auto
        margin-bottom: 16px
      .lm-abuse-actions .lm-primary-button
        width: 100%
</style>
