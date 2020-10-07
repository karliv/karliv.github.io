<template>
  <mt-popup :class="['lm-m-modal-wrap', 'lm-modal-attach-phone']" v-model="value" :lockScroll="true" position="center" :modal="true" @input="_handleInputPopup">
    <button class="btn btn_back_login" @click="_handleClickCloseModal">
      <svg class="icon icon_size_16">
        <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_close"/>
      </svg>
    </button>

    <div class="modal-attach-phone-content column ta_center">
      <div class="heading heading_h4 mb_2">Изменение данных</div>
      <div class="color_gray-2 mb_6">Для внесения изменений в настройки безопасности, введите смс-код</div>

      <div class="form__group form__group_declaration">
        <input type="number" pattern="[0-9]*" min="0" inputmode="numeric" v-mask-static="'9{4}'"
               id="detached__code" name="detached__code" data-vv-name="code" key="detached__code" ref="code"
               :data-vv-as="'Код'" :placeholder="'00 00'"
               v-validate="'digits:4|required'"
               v-model="fields['code']"
               :class="[{ 'error': (verrors.has('code')) }, 'input', 'form__input', 'form__input_declaration']">

        <template v-if="verrors.has('code')">
          <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('code') }}</div>
        </template>
      </div>

      <div class="row mb_6">
        <template v-if="(loading === false)">
          <a href="javascript:void(0)" :class="['btn', 'btn_primary', 'w_100', { 'disabled' : (!fields.code) }]" @click="_handleDrawPhoneCode()">Подтвердить</a>
        </template>
        <lm-m-loader v-if="loading" :style="{ marginTop: '14px' }"></lm-m-loader>
      </div>

      <template>
        <template v-if="counting">
          <countdown :time="60000" @countdownend="_handleCountdownEnd">
            <template slot-scope="props">
              <div class="m-text_bold mb_1">Отправить код ещё раз</div>
              <div class="color_gray-2">через {{ props.seconds }} сек</div>
            </template>
          </countdown>
        </template>

        <template v-else-if="counting === false">
          <a href="javascript:void(0)" class="m-text_bold color_main" @click="_detachPhone">Отправить код ещё раз</a>
        </template>
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
    props: {
      phone: {
        type: String,
        required: true
      }
    },
    components: { 'mt-popup': Popup, 'countdown': VueCountdown },
    mixins: [PopupMix],
    data () {
      return {
        state: null,
        value: false,
        loading: false,
        counting: true,
        fields: {
          code: null,
          phone: null
        }
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
      this._.merge(this.fields, { phone: this.phone })
    },
    mounted () {
      this.$nextTick(() => this.$refs['code'].focus())
    },
    methods: {
      _handleDrawPhoneCode () {
        this._handleValidateFields().then(() => {
          this.loading = true

          let { code } = this.fields

          this.$api.post('api/v2/users/phone/detach/verify', { code }).then((response) => {
            const { data : { data: { token } } } = response

            this._handleClearModal()

            this.loading = false
            this.$root.$emit('detach-phone', token)

          }, (error) => {
            const { response: { data, status } } = error

            this.loading = false
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            if (status === 422 || status === 429) {
              this.$setLaravelValidationErrorsFromResponse(data)
            } else if (status === 404 || status === 500) {
              this.$validator.errors.add({ field: 'code', msg: 'Неверный код подтверждения.' })
            } else throw new Error("Error verify detach phone user")
          })
        }).catch(() => {  })
      },
      _detachPhone () {
        return new Promise((resolve, reject) => {
          this.loading = true

          this.$api.post('api/v2/users/phone/detach').then((response) => {
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
            }  else throw new Error('Error detach phone')
          })
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
      _handleClickCloseModal () {
        this.value = false
      },
      _handleInputPopup (value) {
        if (value === false) {
          this._handleClearModal().then(() => {
            console.log('clear fcm')
          }).catch(() => {})
        }
      },
      _handleClearModal () {
        return new Promise((resolve, reject) => {
          try {
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
