<template>
  <div>
    <button class="btn btn_back_login" @click="_handleClickPreviousPage">
      <svg class="icon icon_size_16">
        <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_close"/>
      </svg>
    </button>
    <div class="wrapper lm-m-register-page-wrapper">
      <div class="lm-m-register-wrap-form">
        <template v-if="(isAuthorized === false)">
          <h2 class="heading heading_h2 mb_9">Вход</h2>
          <div class="lm-social">
            <template v-if="false">
              <div v-if="!oldVersionApp" class="lm-social-apple" @click="_handleClickOAuthApple()">
                <svg class="icon icon_size_18">
                  <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-icon-apple" />
                </svg>
              </div>
            </template>
            <div class="lm-social-fb" @click="_handleClickOAuthFacebook()">
              <svg class="icon icon_size_16">
                <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-icon-fb" />
              </svg>
            </div>
            <div class="lm-social-vk" @click="_handleClickOAuthVk()">
              <svg class="icon icon_size_18">
                <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-icon-vk" />
              </svg>
            </div>
            <div class="lm-social-google" @click="_handleClickOAuthGoogle()">
              <svg class="icon icon_size_16">
                <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-icon-google" />
              </svg>
            </div>
          </div>

          <form @submit.prevent="_handleSubmitFormLogin" methods="POST" action="/login">

            <div class="form__group form__group_declaration">
              <div class="column justify_center align_flex-end position_relative">
                <template v-if="state.is.phone">
                  <a href="javascript:void(0)" class="form__input_change-link" @click="_handleClickEditLogin">
                    <svg class="icon icon_size_16 icon_fill_lm-gray-3">
                      <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_edit" />
                    </svg>
                  </a>
                </template>
                <input type="text" tabindex="1"
                   name="login" id="login"
                   autocapitalize=off
                   placeholder="Телефон или Почта"
                   :data-vv-as="(state.is.login) ? 'Телефон или Почта' : loggedByPhone ? 'телефон' :  'почта'"
                   v-model="fields.login"
                   :disabled="(loading || state.is.phone)"
                   v-validate="{ rules: { required: true, phone: loggedByPhone, email: loggedByEmail } }"
                   :class="[{ 'error': (verrors.has('login')) }, 'input', 'form__input', 'form__input_declaration']">
              </div>

              <template v-if="(verrors.has('login'))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('login') }}</div>
              </template>
            </div>

            <template v-if="state.is.email">
              <div class="form__group form__group_declaration">
                <div class="column justify_center align_flex-end position_relative input__password">
                  <input :type="passwordFieldType" tabindex="2"
                     name="password" id="password" ref="password"
                     placeholder="Пароль"
                     data-vv-as="Пароль"
                     v-validate="'required|min:6'"
                     v-model="fields.password"
                     :disabled="(loading)"
                     :class="[{ 'error': (verrors.has('password')) }, 'input', 'form__input', 'form__input_declaration']">

                  <template v-if="(fields.password && fields.password.length > 0)">
                    <div @click="_handleClickSwitchVisibilityPassword" :class="[ passwordFieldType === 'password' ? 'eye-show' : 'eye-hide' ]"></div>
                  </template>
                </div>

                <template v-if="(verrors.has('password'))">
                  <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('password') }}</div>
                </template>
              </div>
            </template>

            <template v-if="state.is.phone">
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
              <template v-if="state.is.login">
                <button class="btn btn_primary w_100" :disabled="(hasLoginFiled === false)" @click.stop.prevent="_handleClickValidateLogin">Продолжить</button>
              </template>

              <template v-if="state.is.email || state.is.phone">
                <button class="btn btn_primary w_100">Войти</button>
              </template>
            </div>
          </form>

          <template>
            <template v-if="state.is.login || state.is.email">
              <div class="lm-m-sign-up">
                <div class="heading heading_h5">Не можете войти?</div>
                <div class="m-text_normal-2 color_gray-2 mb_2">Восстановите пароль, в случае смены или утраты доступа к почте</div>
                <router-link :to="{ name: 'password.email'}" href="javascript:void(0)" class="m-text_bold color_main">
                  Восстановить доступ
                </router-link>
              </div>
            </template>

            <template v-if="state.is.phone">
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
          </template>
        </template>
        <template v-if="(isAuthorized === true)">
          <h2 class="heading heading_h2 mb_9">Идет переадресация</h2>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { Validator } from 'vee-validate'
  import { Toast, Indicator } from 'mint-ui'
  import VueCountdown from '@xkeshi/vue-countdown'
  import { StateMachine, StateHelper } from 'state-machine'
  import { parsePhoneNumberFromString } from 'libphonenumber-js'
  import { VK, FB, INST, GOOGLE, APPLE } from "@modules/oauth/native"
  import { has, isBrowser, isNative, isNativeIOS, versionCompare, isNativeAndroid } from '@utils'

  export default {
    components: { 'countdown': VueCountdown },
    metaInfo: {
      title: 'Вход',
    },
    data () {
      return {
        fields: {
          code: null,
          phone: null,
          login: null,
          password: null
        },
        state: null,
        isNative: true,
        oldVersionApp: false,
        loading: false,
        counting: false,
        isEmailLogin: false,
        isPhoneLogin: false,
        passwordFieldType: 'password'
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser',
        hasPhone: 'auth/hasPhone',
        isAuthorized: 'auth/isAuthorized',
        isRegistered: 'auth/isRegistered',
      }),
      hasLoginFiled () {
        return !!this.fields.login
      },
      loggedByEmail () {
        return Boolean(this.isEmailLogin)
      },
      loggedByPhone () {
        return Boolean(this.isPhoneLogin)
      },
      hasPhoneFiled () {
        return (!!this.fields['phone'])
      }
    },
    created () {
      this.fsm = StateMachine.create({
        transitions: [
          'nextEmail : login > email',
          'nextPhone : login > phone',
        ],

        handlers: {
          'login@nextEmail': this._handleNextEmail,
          'login@nextPhone': this._handleNextPhone,
        }
      })

      this.state = StateHelper.object(this.fsm).data

      this.$root.$on('attached-phone', () => {
        Indicator.open()

        this.$store.dispatch('auth/setUserField', { key: 'hasPhone', value: true })
        this.$store.dispatch('auth/getUserByAPI').then( user => {
          const { isRegistered } = user
          this.$store.dispatch('board/casting/setHasNewCastingsData', true)
          if (isRegistered) {
            this._handleRedirectAfterAuth().then(() => { Indicator.close() }).catch(() => { Indicator.close() } )
          } else this.$router.replace({ name: 'user.register' }, () => { Indicator.close() }, () => { Indicator.close() })
        })
      })
    },
    watch: {
      'fields.login' (val) {
        if (!val) {
          this.isEmailLogin = false
          this.isPhoneLogin = false
          this.fsm.go('login', true)
        }
      },
      'fields.code' (val) {
        if (val && val.length === 4) {
          this._authByPhone()
        }
      }
    },
    mounted () {
      if (isBrowser && has(this.$route.params, 'social') && has(this.$route.query, 'code')) this._handleOAuth()
      if (isBrowser) {
        this._checkOldVersion()
        setTimeout(() => {
          this._checkOldVersion()
        }, 1000)
      }
    },
    methods: {
      _checkOldVersion () {
        this.isNative = isNative()

        if (isNativeIOS() && versionCompare('4.2.3', window.nsWebViewInterface._iosAppInfo.version)) {
          this.oldVersionApp = true
        }

        if (isNativeAndroid() && versionCompare('4.2.5', window.nsWebViewInterface._androidAppInfo.version)) {
          this.oldVersionApp = true
        }
      },
      _handleClickPreviousPage () {
        this.$router.push({ name: 'index' })
      },
      async _handleOAuth () {
        let { params: { social }, query: { code } } = this.$route

        this.attemptSign(this.$api.get(`oauth/mobile/${social}/callback?code=${code}`)).then((r) => {}, (e) => {})
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
      _handleSubmitFormLogin (e) {
        e.preventDefault()
        return new Promise((resolve, reject) => {
          this._handleValidateFields().then(() => {
            if (this.isEmailLogin) {
              this._authByEmail().then(() => {
                resolve && resolve()
              }).catch(() => { reject && reject() })
            } else if (this.isPhoneLogin) {
              this._authByPhone().then(() => {
                resolve && resolve()
              }).catch(() => { reject && reject() })
            } else reject && reject()
          }).catch(() => {})
        })
      },
      _handleClickValidateLogin () {
        let { login } = this.fields

        this._handleValidateFields().then(() => {
          const validator = new Validator()

          validator.verify(login, 'email').then(({ valid }) => {
            if (valid) {
              this.fsm.do('nextEmail')
            } else {
              if (login.length === 11 && login[0] === '7') {
                login = `+${login}`
              }

              let phone = parsePhoneNumberFromString(login, 'RU')

              // console.log(phone)

              if (phone && phone.isValid()) {
                const { number } = phone
                this.fields.login = number

                this.fsm.do('nextPhone')
              } else this.$validator.errors.add({ field: 'login', msg: 'Проверьте правильность ввода.' })
            }
          })
        })
      },
      _handleClickEditLogin () {
        this.isEmailLogin = false
        this.isPhoneLogin = false
        this.fields['code'] = null

        this.fsm.go('login', true)
      },
      _handleNextEmail (event, fsm) {
        fsm.pause()

        try {
          this.isEmailLogin = true
          this.isPhoneLogin = false

          fsm.resume()

          this.$nextTick(() => this.$refs['password'].focus())
        } catch (e) {
          fsm.cancel()
        }
      },
      _handleNextPhone (event, fsm) {
        fsm.pause()

        this._getCodeAuthByPhone().then(() => {
          this.isPhoneLogin = true
          this.isEmailLogin = false

          fsm.resume()

          this.$nextTick(() => this.$refs['code'].focus())
        }).catch((e) => { fsm.cancel() })
      },
      _getCodeAuthByPhone () {
        return new Promise((resolve, reject) => {

          Indicator.open()
          this.loading = true
          const { login: phone } = this.fields

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
              Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: 'login', msg: errors[key].join(', ') }))
            } else if (status === 403) {
              this.$validator.errors.add({ field: 'login', msg: 'Слишком много попыток подтверждения. Пожалуйста, повторите позже.' })
            } else throw new Error('Error authenticate profile')
          })
        })
      },
      _handleCountdownEnd () {
        this.counting = false
      },
      _authByEmail () {
        const { login: email, password } = this.fields

        this._attemptSign(this.$api.post('api/v2/auth/login', { email, password })).then((response) => {}, (error) => {
          console.log(error)
          const { response: { data, status } } = error

          if (status === 422) {
            const { errors } = data
            Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: 'login', msg: errors[key].join(', ') }))
          } else if (status === 403 || status === 401) {
            this.$validator.errors.add({ field: 'login', msg: 'Введен неверный логин или пароль' })
          } else throw new Error('Error authenticate profile')
        })
      },
      _authByPhone () {
        const { login: phone, code } = this.fields
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

            const { data: { token, role, hasEmail, locale } } = response

            this.$auth.storeSession({ token, role, hasEmail })

            this.$gtm.trackEvent({ event: 'authorization' })
            this.$store.dispatch('auth/setLocale', locale || 'ru')

            this.$store.dispatch('auth/setToken', { accessToken: token, refreshToken: token }).then(result => {
              this.$store.dispatch('auth/getUserByAPI').then( user => {
                const { isRegistered } = user
                if (isRegistered) {
                  this._handleRedirectAfterAuth().then(() => { Indicator.close() }).catch(() => { Indicator.close() } )
                } else this.$router.replace({ name: 'user.register' }, () => { Indicator.close() }, () => { Indicator.close() })
              })
            })

            resolve && resolve(response)
          }).catch(e => {
            this._handleError()

            reject && reject(e)
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
      _handleClickOAuthVk () {
        this.$nativeOAuth.appOAuth(VK).then(data => {
          const get = has(data, 'mobile') ? this.$api.get('/api/v1/oauth/vkontakte/callback', data) : this.$api.get(`oauth/mobile/vkontakte/callback?code=${data.code}`)
          this._attemptSign(get).then((response) => {}, (e) => {
            if (e) {
              let { response: { data } } = e
              this.$bugsnag.metaData = { data }
              throw e
            }
          })
        }).catch(e => {
          this.$oauth.vkAuth().then((data) => {
            let { social, code } = data
            this._attemptSign(this.$api.get(`oauth/mobile/${social}/callback?code=${code}`)).then((r) => {}, (e) => {})
          }).catch((e) => {
            throw new Error(e)
          })
        })
      },
      _handleClickOAuthFacebook () {
        this.$nativeOAuth.appOAuth(FB).then(data => {
          this._attemptSign(this.$api.get('/api/v1/oauth/facebook/callback', data)).then((response) => {}, (e) => {
            if (e) {
              let { response: { data } } = e
              this.$bugsnag.metaData = { data }
              throw e
            }
          })
        }).catch(e => {
          this.$oauth.fbAuth().then((data) => {
            let { social, code } = data
            this._attemptSign(this.$api.get(`oauth/mobile/${social}/callback?code=${code}`)).then((r) => {}, (e) => {})
          }).catch((e) => {
            throw new Error(e)
          })
        })
      },
      _handleClickOAuthGoogle () {
        this.$nativeOAuth.appOAuth(GOOGLE).then(data => {
          if (!has(data, 'code')) return this._handleError()

          this._attemptSign(this.$api.get(`oauth/mobile/google/callback?code=${data.code}`)).then((response) => {}, (e) => {
            if (e) {
              let { response: { data } } = e
              this.$bugsnag.metaData = { data }
              throw e
            }
          })
        }).catch(e => {
          this.$oauth.googleAuth().then((data) => {
            let { social, code } = data
            this._attemptSign(this.$api.get(`oauth/mobile/${social}/callback?code=${code}`)).then((r) => {}, (e) => {})
          }).catch((e) => {
            throw new Error(e)
          })
        })
      },
      _handleClickOAuthApple () {
        this.$nativeOAuth.appOAuth(APPLE).then(data => {
          if (!has(data, 'code')) return this._handleError()

          let { code } = data
          this._attemptSign(this.$api.post(`oauth/mobile/apple/callback?code=${code}`)).then((r) => {}, (e) => {})
        }).catch(e => {
          this.$oauth.appleAuth().then((data) => {
            let { social, code } = data
            this._attemptSign(this.$api.post(`oauth/mobile/${social}/callback?code=${code}`)).then((r) => {}, (e) => {})
          }).catch((e) => {
            throw new Error(e)
          })
        })
      },
      _handleClickAttachPhoneUser () {
        this._handleValidateFields('attached').then(() => {
          const { phone } = this.fields
          this.$modalRouter.push({ name: 'users.settings.phone.attach', props: { phone } })
        }).catch(() => {  })
      },
      _handleClickSwitchVisibilityPassword() {
        this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
      }
    }
  }
</script>

<style>

</style>
