<template>
  <mt-popup :class="['lm-m-modal-wrap', 'lm-m-modal-tree-professions']" v-model="value" :lockScroll="true" position="center" :modal="true" @input="_handleInputPopup">
    <div class="modal-confirm">
      <template v-if="state">
        <div class="modal-confirm__header">
          <svg class="d-icon">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-icon-pass" />
          </svg>
        </div>

        <div class="modal-confirm__body">
          <div class="heading heading_h4 mb_2">Подумайте о безопасности</div>
          <div class="modal__description modal__description_declaration_casting mb_6">
            Добавьте номер телефона, для восстановления доступа к своей странице, при утрате почты
          </div>

          <div class="lm-input-wrap">
            <input type="tel" autocomplete="off" v-mask-phone
                   id="attached__phone" name="attached__phone" data-vv-name="phone" key="attached__phone" ref="attached__phone"
                   :data-vv-as="'Телефон'" :placeholder="'+7 900 000 00 00'"
                   v-validate="'required|phone'"
                   v-model="fields.phone"
                   @keyup.enter="_handleClickNextState"
                   :class="[{ 'error': (verrors.has('phone')) }, 'lm-input']">

            <span class="lm-input-error mt_2" v-if="verrors.has('phone')">{{ verrors.first('phone') }}</span>
          </div>

          <template v-if="state.is.phone">
            <template v-if="(loading === false)">
              <button class="lm-primary-button middle mb_6" :disabled="(hasPhoneField === false)" @click="_handleClickNextState">добавить</button>
            </template>

            <lm-m-loader v-if="loading" :style="{ marginTop: '14px' }"></lm-m-loader>
          </template>

          <template v-if="state.is.code">
            <div class="lm-input-wrap">
              <input type="number" pattern="[0-9]*" min="0" inputmode="numeric" v-mask-static="'9{4}'"
                     id="attached__code" name="attached__code" data-vv-name="code" key="attached__code" ref="code"
                     :data-vv-as="'Код'" :placeholder="'0000'"
                     v-validate="'digits:4|required'"
                     v-model="fields['code']"
                     :class="[{ 'error': (verrors.has('code')) }, 'd-input__field']">

              <span class="lm-input-error mt_2" v-if="verrors.has('code')">{{ verrors.first('code') }}</span>
            </div>

            <lm-loader v-if="loading" :style="{ marginTop: '14px' }"></lm-loader>

            <template v-if="(loading === false)">
              <button class="lm-primary-button middle mb_6" :disabled="(hasCodeField === false)">добавить</button>
            </template>
          </template>

          <template v-if="(state.is.phone && loading === false)">
            <a href="javascript:void(0)" class="m-text_bold color_gray-3" @click="_handleClickCloseModal">Напомнить позже</a>
          </template>

          <template v-if="state.is.code">
            <template v-if="counting">
              <countdown :time="60000" @countdownend="_handleCountdownEnd">
                <template slot-scope="props">
                  <div class="m-text_bold">Отправить код ещё раз</div>
                  <div class="color_gray-2">через {{ props.seconds }} секунд</div>
                </template>
              </countdown>
            </template>

            <template v-else-if="modal.counting === false">
              <a href="javascript:void(0)" class="m-text_bold color_main" @click="_handleDrawPhoneCode">Отправить код ещё раз</a>
            </template>
          </template>
        </div>
      </template>
    </div>
  </mt-popup>
</template>

<script>
  import { Popup, Toast } from 'mint-ui'
  import PopupMix from '@components/Mixins/Popup'
  import VueCountdown from '@xkeshi/vue-countdown'
  import { StateMachine, StateHelper } from 'state-machine'

  export default {
    components: { 'mt-popup': Popup, 'countdown': VueCountdown },
    mixins: [PopupMix],
    data () {
      return {
        state: null,
        value: false,
        loading: false,
        counting: false,
        fields: {
          code: null,
          phone: null
        }
      }
    },
    computed: {
      hasPhoneField () {
        return (!!this.fields.phone)
      },
      hasCodeField () {
        return (!!this.fields.code)
      }
    },
    watch: {
      'fields.code' (val) {
        if (val && val.length === 4) {
          this._handleDrawPhoneCode() // See to do
        }
      }
    },
    created () {
      this.fsm = StateMachine.create({
        transitions: [
          'next :  phone > code',
          'back :  phone < code',
        ],
        handlers: {
          'phone@next': this._handleDrawPhone
        }
      })

      this.state = StateHelper.object(this.fsm).data
    },
    methods: {
      _handleDrawPhoneCode () {
        this._handleValidateFields().then(() => {
          this.loading = true

          let { code, phone } = this.fields

          let data = { code }

          let roistatVisit = this.$cookies.get('roistat_visit')
          if (roistatVisit) data['roistat_visit'] = roistatVisit

          this.$api.post('api/v2/users/phone/attach/verify', data).then((response) => {
            this.loading = false
            this._handleClickCloseModal()

            this.$store.dispatch('auth/getUserByAPI')
            this.$gtm.trackEvent({ event: 'confirmphone' })
            this.$store.dispatch('auth/setUserField', { key: 'hasPhone', value: true })
            Toast({ message: 'Телефон добавлен и доступен как новый способ авторизации.', iconClass: 'mintui mintui-success' })
          }, (response) => {
            const { data, status } = response

            this.loading = false
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            if (status === 422 || status === 429) {
              this.$setLaravelValidationErrorsFromResponse(data)
            } else if (status === 403) {
              this.$validator.errors.add({ field: 'code', msg: 'Данный телефон уже используется.' })
            } else if (status === 404 || status === 500) {
              this.$validator.errors.add({ field: 'code', msg: 'Неверный код подтверждения.' })
            } else throw new Error("Error verify phone user")
          })
        }).catch(() => {  })
      },
      _attachPhone () {
        return new Promise((resolve, reject) => {
          this.loading = true

          let { phone } = this.fields

          this.$api.post('api/v2/users/phone/attach', { phone }).then((response) => {
            const { data: { result } } = response

            this.loading = false
            this.counting = true

            resolve && resolve()
          }, (error) => {
            const { response: { data, status }} = error

            reject && reject()

            this.loading = false
            this.counting = false
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            if (status === 422) {
              const { errors } = data
              Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: key, msg: errors[key].join(', ') }))
            } else if (status === 403) {
              this.$validator.errors.add({ field: 'phone', msg: 'Слишком много попыток подтверждения. Пожалуйста, повторите позже.' })
            } else throw new Error('Error attach phone')
          })
        })
      },
      _handleDrawPhone (event, fsm) {
        fsm.pause()

        this._handleValidateFields().then(() => {
          this._attachPhone().then(() => {
            fsm.resume()
            this.$nextTick(() => this.$refs['code'].focus())
          }).catch(() => fsm.cancel())
        }).catch(() => fsm.cancel())
      },
      _handleClickNextState () {
        this.fsm.do('next')
      },
      _handleClickBackState () {
        this.fsm.do('back')
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
      _handleClickCloseModal () {
        this.value = false
      },
      _handleInputPopup (value) {
        if (value === false) {
          this._handleClearModal().then(() => {
            this.fsm.reset()
          }).catch(() => {})
        }
      },
      _handleClearModal () {
        return new Promise((resolve, reject) => {
          try {
            this.state = null
            this.value = false
            this.loading = false
            this.counting = false
            this.fields = {
              code: null,
              phone: null
            }
            resolve && resolve()
          } catch (e) {
            reject && reject(e)
          }
        })
      },
      _handleCountdownEnd () {
        this.counting = false
      }
    }
  }
</script>

<style scoped>

</style>
