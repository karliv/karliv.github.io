<template>
  <div>
    <button class="btn btn_back_login" @click="_handleClickPreviousPage">
      <svg class="icon icon_size_16">
        <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_close"/>
      </svg>
    </button>
    <div class="wrapper lm-m-register-page-wrapper">
      <template v-if="true === false">
        <a href="https://m.linkmuse.com/certifying/executor" class="banner">
          <img src="/dist/img/register/__banners/banner_mobile.png" alt="mobile banner">
        </a>
      </template>

      <div class="lm-m-register-wrap-form">
        <h2 class="heading heading_h2 mb_9">Регистрация</h2>

        <form @submit.prevent="_handleSubmitFormRegister" methods="POST" action="/register">

          <div class="form__group form__group_declaration">
            <div class="column justify_center align_flex-end position_relative">
              <template v-if="state.is.code">
                <a href="javascript:void(0)" class="form__input_change-link" @click="_handleClickEditLogin">
                  <svg class="icon icon_size_16 icon_fill_lm-gray-3">
                    <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_edit" />
                  </svg>
                </a>
              </template>
              <input type="tel" autocomplete="off" autofocus v-mask-phone
                     name="phone" id="phone" ref="phone"
                     placeholder="+7 900 000 00 00"
                     :data-vv-as="'Телефон'"
                     v-model="fields.phone"
                     :disabled="(loading || state.is.code)"
                     v-validate="{ rules: { required: true, phone: true } }"
                     :class="[{ 'error': (verrors.has('phone')) }, 'input', 'form__input', 'form__input_declaration']">
            </div>

            <template v-if="(verrors.has('phone'))">
              <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('phone') }}</div>
            </template>
          </div>

          <template v-if="state.is.code">
            <div class="form__group form__group_declaration">
              <input type="number" pattern="[0-9]*" min="0" inputmode="numeric" v-mask-static="'9{4}'" tabindex="2"
                     name="code" id="code" ref="code"
                     placeholder="Смс код"
                     data-vv-as="Код"
                     v-validate="'digits:4|required'"
                     v-model="fields.code"
                     :disabled="(loading)"
                     :class="[{ 'error': (verrors.has('code')) }, 'input', 'form__input', 'form__input_declaration']">

              <template v-if="(verrors.has('code'))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('code') }}</div>
              </template>
            </div>
          </template>

          <div>
            <button class="btn btn_primary w_100" :disabled="(hasPhoneFiled === false)" @click.stop.prevent="_handleClickValidateLogin">Продолжить</button>

            <template v-if="state.is.phone">
              <div class="m-text_normal color_gray-3 mt_6">
                Указывая номер телефона, вы соглашаетесь на обработку <a target="_blank" href="/pages/agreements" class="color_main">Персональных данных</a>
              </div>
            </template>
          </div>
        </form>

        <template v-if="state.is.phone">
          <div class="lm-m-sign-up">
            <div class="heading heading_h5">Уже есть аккаунт?</div>
            <div class="m-text_normal-2 color_gray-2 mb_2">Войдите, используя номер телефона или почту, указанную при регистрации</div>
            <router-link :to="{ name: 'login' }" class="m-text_bold color_main">Войти в аккаунт</router-link>
          </div>
        </template>

        <template v-if="state.is.code">
          <div class="mt_9">
            <template v-if="counting">
              <countdown :time="60000" @countdownend="_handleCountdownEnd">
                <template slot-scope="props">
                  <div class="heading heading_h5 mb_1">Отправить код ещё раз</div>
                  <div class="m-text_normal-2 color_gray-2">через {{ props.seconds }} секунд</div>
                </template>
              </countdown>
            </template>
            <template v-else-if="counting === false">
              <a href="javascript:void(0)" class="m-text_bold color_main" @click="_getCodeAuthByPhone">Отправить код ещё раз</a>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import OAuth from '@modules/oauth'
  import { Toast, Indicator } from 'mint-ui'
  import VueCountdown from '@xkeshi/vue-countdown'
  import { isNative, isBrowser, has } from '@utils'
  import { StateMachine, StateHelper } from 'state-machine'
  import { VK, FB, INST, GOOGLE } from "@modules/oauth/native"

  export default {
    components: { 'countdown': VueCountdown },
    metaInfo: {
      title: 'Регистрация',
    },
    data () {
      return {
        fields: {
          code: null,
          phone: null
        },
        state: null,
        loading: false,
        counting: false
      }
    },
    computed: {
      hasPhoneFiled () {
        return (!!this.fields['phone'])
      }
    },
    created () {
      this.fsm = StateMachine.create({
        transitions: [
          'next : phone > code',
          'back : phone < code',
        ],

        handlers: {
          'phone@next': this._handleNextPhone
        }
      })

      this.state = StateHelper.object(this.fsm).data
    },
    watch: {
      'fields.code' (val) {
        if (val && val.length === 4) {
          this._authByPhone()
        }
      }
    },
    mounted () {
      // this.$gtm.trackEvent({ event: 'START_REGISTRATION' })
      this.$gtm.trackEvent({ event: 'startreg' })

      if (isBrowser) {
        if (has(this.$route.query, 'from') && this.$route.query.from === 'svobodnoekino') {
          this.$localStorage.set('redirect.freekino', 'true')
        }
      }
    },
    methods: {
      _handleClickPreviousPage () {
        this.$router.push({ name: 'index' })
      },
      _handleValidateFields () {
        return new Promise((resolve, reject) => {
          this.$validator.validateAll().then(result => {
            if (result) {
              resolve(result)
            } else reject()
          })
        })
      },
      _handleSubmitFormRegister (e) {
        e.preventDefault();
        return new Promise((resolve, reject) => {
          this._handleValidateFields().then(() => {
            this._authByPhone().then(() => {
              resolve && resolve()
            }).catch(() => { reject && reject() })
          }).catch(() => {})
        })
      },
      _handleClickValidateLogin () {
        this.fsm.do('next')
      },
      _handleNextPhone (event, fsm) {
        fsm.pause()

        this._handleValidateFields().then(() => {
          this._getCodeAuthByPhone().then(() => {
            fsm.resume()

            this.$nextTick(() => this.$refs['code'].focus())
          }).catch((e) => { fsm.cancel() })
        }).catch(() => { fsm.cancel() })
      },
      _handleClickEditLogin () {
        this.fields['code'] = null
        this.fsm.go('phone', true)
      },
      _getCodeAuthByPhone () {
        return new Promise((resolve, reject) => {

          this.loading = true
          const { phone } = this.fields
          Indicator.open()

          this.$api.post('api/v2/auth/login/phone', { phone }).then(response => {
            Indicator.close()
            this.loading = false
            this.counting = true

            resolve && resolve(response)
          }).catch(error => {
            Indicator.close()
            this.loading = false

            reject && reject(error)
            const { response: { data, status } } = error

            if (status === 422) {
              const { errors } = data
              Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: key, msg: errors[key].join(', ') }))
            } else if (status === 403) {
              this.$validator.errors.add({ field: 'phone', msg: 'Слишком много попыток подтверждения. Пожалуйста, повторите позже.' })
            } else throw new Error('Error authenticate profile')
          })
        })
      },
      _handleCountdownEnd () {
        this.counting = false
      },
      _authByPhone () {
        const { phone, code } = this.fields
        const referral = this.$cookies.get('referral')

        this._attemptSign(this.$api.post('api/v2/auth/login/phone/verify', { phone, code, referral })).then((response) => {}, (error) => {
          const { response: { data, status } } = error

          this.$nextTick(() => this.$refs['code'].focus())

          if (status === 422 || status === 429) {
            const { errors } = data
            Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: 'code', msg: errors[key].join(', ') }))
          } else if (status === 404 || status === 500) {
            this.$validator.errors.add({ field: 'code', msg: 'Неверный код подтверждения.' })
          } else throw new Error('Error authenticate profile')
        })
      },
      _attemptSign (apiPromise) {
        return new Promise((resolve, reject) => {
          Indicator.open()
          this.loading = true

          apiPromise.then(response => {
            this.loading = false

            Toast({
              message: 'Успешно',
              iconClass: 'mintui mintui-success'
            });

            const { data: { token, role, hasEmail, locale } } = response

            this.$auth.storeSession({ token, role, hasEmail })

            this.$gtm.trackEvent({ event: 'authorization' })
            this.$store.dispatch('auth/setLocale', locale || 'ru')

            this.$store.dispatch('auth/setToken', { accessToken: token, refreshToken: token }).then(result => {
              this.$store.dispatch('auth/getUserByAPI').then(user => {
                let { isRegistered } = user
                this.$store.dispatch('board/casting/setHasNewCastingsData', true)
                if (isRegistered) {
                  this._handleRedirectAfterAuth().then(() => { Indicator.close() }).catch(() => { Indicator.close() } )
                } else this.$router.replace({ name: 'user.register' }, () => { Indicator.close() }, () => { Indicator.close() })
              })
            })

            resolve(response)
          }).catch(e => {
            this._handleError()

            reject(e)
          })
        })
      },
      _handleError () {
        Indicator.close()

        Toast({
          message: 'Ошибка',
          iconClass: 'mintui mintui-field-error'
        })

        this.loading = false
      },
      _handleRedirectAfterAuth () {
        return new Promise((resolve, reject) => {
          if (this.$localStorage.get('redirect.register', null, String)) {
            let location = this.$localStorage.get('redirect.register', '/', String)
            this.$localStorage.remove('redirect.register')
            this.$router.push(location, () => { resolve && resolve() }, () => { reject && reject() })
          } else if (this.$localStorage.get('redirect.freekino', null, String)) {
            this.$localStorage.remove('redirect.freekino')
            window.location.href = `${process.env.FREEKINO_URL}/?ak=${this.$cookies.get('id_token')}`
            resolve && resolve()
          } else this.$router.push({ name: 'board.castings.index' }, () => { resolve && resolve() }, () => { reject && reject() })
        })
      },
      _savedUserLocale (locale) {
        return new Promise((resolve, reject) => {
          Indicator.open()

          this.$api.post('api/v2/users/locale', { locale }).then((response) => {
            const { data } = response

            Indicator.close()
            resolve && resolve(locale)
          }, (error) => {
            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            reject && reject()

            throw new Error('Error saved locale')
          })
        })
      }
    }
  }
</script>

