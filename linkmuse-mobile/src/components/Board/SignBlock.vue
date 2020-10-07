<template>
  <div :class="['section', 'form__section form__section_declaration', { 'form__section_declaration_disabled': (disabled) }]">
    <div class="moderate_rules mb_6">
      <div class="moderate_rules__title mb_2">Вы не авторизованны</div>
      <div class="moderate_rules__text">Для публикации объявления войдите в свой аккаунт или зарегистрируйте новый</div>
    </div>

    <template v-if="(isAuthorized === false)">
      <div class="lm-social mb_6">
        <template v-if="false">
          <div :class="['lm-social-apple', { 'disabled': (disabled) }]" @click="_handleClickOAuthApple()">
            <svg class="icon icon_size_18">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-icon-apple" />
            </svg>
          </div>
        </template>
        <div :class="['lm-social-fb', { 'disabled': (disabled) }]" @click="_handleClickOAuthFacebook()">
          <svg class="icon icon_size_16">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-icon-fb" />
          </svg>
        </div>
        <div :class="['lm-social-vk', { 'disabled': (disabled) }]" @click="_handleClickOAuthVk()">
          <svg class="icon icon_size_18">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-icon-vk" />
          </svg>
        </div>
        <div :class="['lm-social-google', { 'disabled': (disabled) }]" @click="_handleClickOAuthGoogle()">
          <svg class="icon icon_size_16">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-icon-google" />
          </svg>
        </div>
      </div>
    </template>

    <template v-if="(isAuthorized === false || isAuthorized === true && isRegistered === false)">
      <form @submit.prevent="_handleSubmitFormSign" method="POST" class="mb_6">
        <div class="form__group form__group_declaration">
          <label :for="KEYS_SIGN['login']" class="label input__label">
            Телефон или Почта
          </label>

          <div class="column justify_center align_flex-end position_relative">
            <template v-if="sign.state.is.phone">
              <a href="javascript:void(0)" class="form__input_change-link" @click="_handleClickEditLogin">
                <svg class="icon icon_size_16 icon_fill_lm-gray-3">
                  <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_edit" />
                </svg>
              </a>
            </template>

            <input type="text" tabindex="1" autocomplete="off" autocapitalize=off
                   :name="normalizeDotsToArrow(KEYS_SIGN['login'])"
                   :id="KEYS_SIGN['login']"
                   :placeholder="'Телефон или Почта'"
                   v-validate="{ rules: { required: true, phone: loggedByPhone, email: loggedByEmail } }"
                   data-vv-name="login"
                   :data-vv-as="(sign.state.is.login) ? 'Телефон или Почта' : loggedByPhone ? 'телефон' :  'почта'"
                   data-vv-scope="sign"
                   v-model="sign.fields[KEYS_SIGN['login']]"
                   :disabled="(disabled || isAuthorized === true || sign.state.is.phone || sign.loading)"
                 :class="[{ 'error': (verrors.has('sign.' + normalizeDotsToArrow(KEYS_SIGN['login']))) }, 'input', 'form__input', 'form__input_declaration']">
          </div>

          <template v-if="(verrors.has('sign.' + normalizeDotsToArrow(KEYS_SIGN['login'])))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('sign.' + normalizeDotsToArrow(KEYS_SIGN['login'])) }}</div>
          </template>
        </div>

        <template v-if="sign.state.is.email">
          <div class="form__group form__group_declaration">
            <label :for="KEYS_SIGN['password']" class="label input__label">
              Пароль
            </label>
            <input type="password"  autocomplete="off" autocapitalize=off ref="sign.password"
                   :name="normalizeDotsToArrow(KEYS_SIGN['password'])"
                   :id="KEYS_SIGN['password']"
                   :placeholder="'Введите пароль'"
                   v-validate="'required|min:6'"
                   data-vv-scope="sign"
                   :data-vv-as="'Пароль'"
                   :disabled="(disabled || isAuthorized === true)"
                   v-model="sign.fields[KEYS_SIGN['password']]"
                   :class="[{ 'error': (verrors.has('sign.' + normalizeDotsToArrow(KEYS_SIGN['password']))) }, 'input', 'form__input', 'form__input_declaration']">
            <template v-if="(verrors.has('sign.' + normalizeDotsToArrow(KEYS_SIGN['password'])))">
              <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('sign.' + normalizeDotsToArrow(KEYS_SIGN['password'])) }}</div>
            </template>
          </div>
        </template>

        <template v-if="sign.state.is.phone">
          <div class="form__group form__group_declaration">
            <label :for="KEYS_SIGN['code']" class="label input__label">
              Смс код
            </label>
            <input type="number" pattern="[0-9]*" min="0" inputmode="numeric" v-mask-static="'9{4}'" tabindex="2"
                   :name="normalizeDotsToArrow(KEYS_SIGN['code'])"
                   :id="KEYS_SIGN['code']"
                   ref="sign.code"
                   placeholder="Смс код"
                   v-validate="'digits:4|required'"
                   data-vv-as="Код"
                   data-vv-name="code"
                   data-vv-scope="sign"
                   v-model="sign.fields[KEYS_SIGN['code']]"
                   :disabled="(disabled || isAuthorized === true || sign.loading)"
                   :class="[{ 'error': (verrors.has('sign.' + normalizeDotsToArrow(KEYS_SIGN['code']))) }, 'input', 'form__input', 'form__input_declaration']">
            <template v-if="(verrors.has('sign.' + normalizeDotsToArrow(KEYS_SIGN['code'])))">
              <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('sign.' + normalizeDotsToArrow(KEYS_SIGN['code'])) }}</div>
            </template>
          </div>
        </template>

        <template v-if="isAuthorized === false">
          <div class="form__group form__group_declaration">
            <template v-if="sign.state.is.login">
              <button class="btn btn_primary" :disabled="(hasLoginFiled === false && disabled)" @click.stop.prevent="_handleClickValidateLogin">Продолжить</button>
            </template>

            <template v-if="sign.state.is.email || sign.state.is.phone">
              <button class="btn btn_primary" :disabled="(disabled)">Войти</button>
            </template>
          </div>
        </template>
      </form>

      <template v-if="isAuthorized === true && isRegistered === false">
        <div class="form__group form__group_declaration">
          <label :for="KEYS_REGISTER['firstName']" class="label input__label">
            Имя
          </label>
          <input type="text" autocomplete="off"
                 :name="normalizeDotsToArrow(KEYS_REGISTER['firstName'])"
                 :id="KEYS_REGISTER['firstName']"
                 :data-vv-name="KEYS_REGISTER['firstName']"
                 :data-vv-as="'Имя'" :placeholder="'Введите имя'"
                 data-vv-scope="register"
                 v-validate="'required|min:1|max:255'"
                 v-model="register.fields[KEYS_REGISTER['firstName']]"
                 :class="[{ 'error': (verrors.has('register.' + normalizeDotsToArrow(KEYS_REGISTER['firstName']))) }, 'input', 'form__input', 'form__input_declaration']">
          <template v-if="(verrors.has('register.' + normalizeDotsToArrow(KEYS_REGISTER['firstName'])))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('register.' + normalizeDotsToArrow(KEYS_REGISTER['firstName'])) }}</div>
          </template>
        </div>

        <div class="form__group form__group_declaration">
          <label :for="KEYS_REGISTER['lastName']" class="label input__label">
            Фамилия
          </label>
          <input type="text" autocomplete="off"
                 :name="normalizeDotsToArrow(KEYS_REGISTER['lastName'])"
                 :id="KEYS_REGISTER['lastName']"
                 :data-vv-name="KEYS_REGISTER['lastName']"
                 :data-vv-as="'Имя'" :placeholder="'Введите фамилию'"
                 data-vv-scope="register"
                 v-validate="'required|min:1|max:255'"
                 v-model="register.fields[KEYS_REGISTER['lastName']]"
                 :class="[{ 'error': (verrors.has('register.' + normalizeDotsToArrow(KEYS_REGISTER['lastName']))) }, 'input', 'form__input', 'form__input_declaration']">
          <template v-if="(verrors.has('register.' + normalizeDotsToArrow(KEYS_REGISTER['lastName'])))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('register.' + normalizeDotsToArrow(KEYS_REGISTER['lastName'])) }}</div>
          </template>
        </div>

        <div class="form__group form__group_declaration">
          <label :for="KEYS_REGISTER['birthday']" class="label input__label">
            Дата рождения
          </label>
          <input type="text" autocomplete="off" v-mask-date
                 :name="normalizeDotsToArrow(KEYS_REGISTER['birthday'])"
                 :id="KEYS_REGISTER['birthday']"
                 :data-vv-name="KEYS_REGISTER['birthday']"
                 :data-vv-as="'Дата рождения'" :placeholder="'Введите дату рождения'"
                 data-vv-scope="register"
                 v-validate="`date_format:DD.MM.YYYY|required`"
                 v-model="register.fields[KEYS_REGISTER['birthday']]"
                 :class="[{ 'error': (verrors.has('register.' + normalizeDotsToArrow(KEYS_REGISTER['birthday']))) }, 'input', 'form__input', 'form__input_declaration']">
          <template v-if="(verrors.has('register.' + normalizeDotsToArrow(KEYS_REGISTER['birthday'])))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('register.' + normalizeDotsToArrow(KEYS_REGISTER['birthday'])) }}</div>
          </template>
        </div>

        <template v-if="(hasBirthdayRegisterUser && isChildRegisterUser === true)">
          <div class="form__group form__group_declaration">
            <label :for="KEYS_REGISTER['guardian']" class="label input__label">
              Имя родителя
            </label>
            <input type="text" autocomplete="off"
                   :name="normalizeDotsToArrow(KEYS_REGISTER['guardian'])"
                   :id="KEYS_REGISTER['guardian']"
                   :data-vv-name="KEYS_REGISTER['guardian']"
                   :data-vv-as="'Введите имя и фамилию'" :placeholder="'Введите имя и фамилию'"
                   data-vv-scope="register"
                   v-validate="'required|min:1|max:255'"
                   v-model="register.fields[KEYS_REGISTER['guardian']]"
                   :class="[{ 'error': (verrors.has('register.' + normalizeDotsToArrow(KEYS_REGISTER['guardian']))) }, 'input', 'form__input', 'form__input_declaration']">
            <template v-if="(verrors.has('register.' + normalizeDotsToArrow(KEYS_REGISTER['guardian'])))">
              <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('register.' + normalizeDotsToArrow(KEYS_REGISTER['guardian'])) }}</div>
            </template>
          </div>
        </template>

        <div class="form__group form__group_declaration">
          <label class="label input__label">
            Пол
          </label>
          <div class="form__row form__row_declaration">
            <div class="form__column form__column_declaration">
              <input :id="'form__checkbox_declaration_gender_female'" type="radio"
                     :value="2" :disabled="(disabled)"
                     :name="normalizeDotsToArrow(KEYS_REGISTER['genderId'])"
                     :data-vv-name="KEYS_REGISTER['genderId']"
                     data-vv-as="Пол"
                     data-vv-scope="register"
                     v-validate="'required'"
                     v-model="register.fields[KEYS_REGISTER['genderId']]"
                     class="form__checkbox form__checkbox_declaration form__checkbox_declaration_gender">
              <label :for="'form__checkbox_declaration_gender_female'" class="checkbox__label_declaration checkbox__label_declaration_gender">Женский</label>
            </div>

            <div class="form__column form__column_declaration">
              <input :id="'form__checkbox_declaration_gender_male'" type="radio"
                     :value="1" :disabled="(disabled)"
                     :name="normalizeDotsToArrow(KEYS_REGISTER['genderId'])"
                     :data-vv-name="KEYS_REGISTER['genderId']"
                     data-vv-as="Пол"
                     data-vv-scope="register"
                     v-validate="'required'"
                     v-model="register.fields[KEYS_REGISTER['genderId']]"
                     class="form__checkbox form__checkbox_declaration form__checkbox_declaration_gender">
              <label :for="'form__checkbox_declaration_gender_male'" class="checkbox__label_declaration checkbox__label_declaration_gender">Мужской</label>
            </div>
          </div>
          <template v-if="verrors.has('register.' + normalizeDotsToArrow(KEYS_REGISTER['genderId']))">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('register.' + normalizeDotsToArrow(KEYS_REGISTER['genderId'])) }}</div>
          </template>
        </div>

        <div class="lm-input-wrap moderate_rules mb_9">
          Регистрируясь, вы соглашаетесь на обработку
          <a target="_blank" href="/pages/agreements" class="m-text_bold color_main">Персональных данных</a>
        </div>

        <template v-if="(hasBirthdayRegisterUser && isChildRegisterUser === true)">
          <div class="lm-input-wrap moderate_rules mb_9">
            Регистрируясь, вы также соглашаетесь с
            <a target="_blank" href="/pages/agreements_children" class="m-text_bold color_main">Политикой обработки персональных данных несовершеннолетнего</a>
          </div>
        </template>

        <div class="form__group form__group_declaration">
          <button class="btn btn_primary" :disabled="(disabled)" @click="_handleClickRegisterUser">Зарегистрироваться</button>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { Indicator, Toast } from 'mint-ui'
  import { Validator } from 'vee-validate'
  import VueCountdown from '@xkeshi/vue-countdown'
  import { VK, FB, GOOGLE } from '@modules/oauth/native'
  import { StateMachine, StateHelper } from 'state-machine'
  import { parsePhoneNumberFromString } from 'libphonenumber-js'
  import { isNative, isBrowser, has, flatten, expires, normalizeDotsToArrow, AVATAR as DEFAULT_AVATAR } from '@utils'

  const KEYS_SIGN = {
    code: 'code',
    login: 'login',
    password: 'password'
  }

  const KEYS_REGISTER = {
    genderId: 'genderId',
    guardian: 'guardian',
    lastName: 'lastName',
    birthday: 'birthday',
    firstName: 'firstName'
  }

  const KEYS_ATTACH = {
    phone: 'phone'
  }

  export default {
    components: { 'countdown': VueCountdown },
    props: {
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        KEYS_SIGN,
        KEYS_ATTACH,
        KEYS_REGISTER,
        isNative: true,
        normalizeDotsToArrow,
        sign: {
          state: null,
          loading: false,
          counting: false,
          isEmailLogin: false,
          isPhoneLogin: false,
          fields: {
            [KEYS_SIGN['code']]: null,
            [KEYS_SIGN['login']]: null,
            [KEYS_SIGN['password']]: null
          }
        },
        register: {
          loading: false,
          fields: {
            [KEYS_REGISTER['genderId']]: null,
            [KEYS_REGISTER['guardian']]: null,
            [KEYS_REGISTER['lastName']]: null,
            [KEYS_REGISTER['birthday']]: null,
            [KEYS_REGISTER['firstName']]: null
          }
        },
        attached: {
          loading: false,
          fields: {
            [KEYS_ATTACH['phone']]: null
          }
        }
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
        return !!this.sign.fields.login
      },
      loggedByEmail () {
        return Boolean(this.sign.isEmailLogin)
      },
      loggedByPhone () {
        return Boolean(this.sign.isPhoneLogin)
      },
      isChildRegisterUser () {
        let date = this.$moment(this.register.fields[KEYS_REGISTER['birthday']], 'DD.MM.YYYY', true),
          adult = this.$moment().subtract(18, 'years')

        return (!this.verrors.has('register.birthday') && this.register.fields[KEYS_REGISTER['birthday']] && date.isValid() && date.isAfter(adult, 'day'))
      },
      hasBirthdayRegisterUser () {
        return (!!this.register.fields['birthday'])
      }
    },
    created () {
      this.sign.fsm = StateMachine.create({
        transitions: [
          'nextEmail : login > email',
          'nextPhone : login > phone',
        ],

        handlers: {
          'login@nextEmail': this._handleNextEmail,
          'login@nextPhone': this._handleNextPhone,
        }
      })

      this.sign.state = StateHelper.object(this.sign.fsm).data
    },
    mounted () {
      this.$root.$on('attached-phone', () => {
        this.$store.dispatch('auth/getUserByAPI')
        this.$store.dispatch('auth/setUserField', { key: 'hasPhone', value: true })
      })

      if (isBrowser) {
        setTimeout(() => {
          this.isNative = isNative()
        }, 100)
      }
    },
    watch: {
      'sign.fields.code' (val) {
        if (val && val.length === 4) {
          this._authByPhone()
        }
      }
    },
    methods: {
      /**
       * Validate all fields on current transition
       * @returns {Promise<any>}
       * @private
       */
      _handleValidateFields (scope = null) {
        return new Promise((resolve, reject) => {
          this.$validator.validateAll(scope).then(result => {
            if (result) {
              resolve(result)
            } else reject()
          })
        })
      },
      _scrollToErrorFields () {
        let el = document.getElementsByClassName('error')
        if (el && el.length) this.$scrollTo(el[0], 500, { offset: -40 })
      },
      _handleSubmitFormSign (e) {
        e.preventDefault()
        return new Promise((resolve, reject) => {
          this._handleValidateFields('sign').then(() => {
            if (this.sign.isEmailLogin) {
              this._authByEmail().then(() => {
                resolve && resolve()
              }).catch(() => { reject && reject() })
            } else if (this.sign.isPhoneLogin) {
              this._authByPhone().then(() => {
                resolve && resolve()
              }).catch(() => { reject && reject() })
            } else reject && reject()
          }).catch(() => {})
        })
      },
      _handleClickValidateLogin () {
        const { login } = this.sign.fields

        this._handleValidateFields('sign').then(() => {
          const validator = new Validator()

          validator.verify(login, 'email').then(({ valid }) => {
            if (valid) {
              this.sign.fsm.do('nextEmail')
            } else {
              const phone = parsePhoneNumberFromString(login, 'RU')
              // console.log(phone)

              if (phone && phone.isValid()) {
                const { number } = phone
                this.sign.fields.login = number

                this.sign.fsm.do('nextPhone')
              } else this.$validator.errors.add({ field: 'sign.login', msg: 'Проверьте правильность ввода.' })
            }
          })
        })
      },
      _handleClickEditLogin () {
        this.sign.isEmailLogin = false
        this.sign.isPhoneLogin = false
        this.sign.fields['code'] = null

        this.sign.fsm.go('login', true)
      },
      _handleNextEmail (event, fsm) {
        fsm.pause()

        try {
          this.sign.isEmailLogin = true
          this.sign.isPhoneLogin = false

          fsm.resume()

          this.$nextTick(() => this.$refs['sign.password'].focus())
        } catch (e) {
          fsm.cancel()
        }
      },
      _handleNextPhone (event, fsm) {
        fsm.pause()

        this._getCodeAuthByPhone().then(() => {
          this.sign.isPhoneLogin = true
          this.sign.isEmailLogin = false

          fsm.resume()

          this.$nextTick(() => this.$refs['sign.code'].focus())
        }).catch((e) => { fsm.cancel() })
      },
      _getCodeAuthByPhone () {
        return new Promise((resolve, reject) => {

          Indicator.open()
          this.sign.loading = true
          const { login: phone } = this.sign.fields

          this.$api.post('api/v2/auth/login/phone', { phone }).then(response => {
            Indicator.close()
            this.sign.loading = false
            this.sign.counting = true

            resolve && resolve(response)
          }).catch(error => {
            Indicator.close()
            this.sign.loading = false

            reject && reject(error)
            const { response: { data, status } } = error

            if (status === 422) {
              const { errors } = data
              Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: 'sign.login', msg: errors[key].join(', ') }))
            } else if (status === 403) {
              this.$validator.errors.add({ field: 'sign.login', msg: 'Слишком много попыток подтверждения. Пожалуйста, повторите позже.' })
            } else throw new Error('Error authenticate profile')
          })
        })
      },
      _handleCountdownEndSign () {
        this.sign.counting = false
      },
      _authByEmail () {
        const { login: email, password } = this.sign.fields

        this._attemptSign(this.$api.post('api/v2/auth/login', { email, password })).then((response) => {
          this.sign.fsm.go('login', true)
        }, (error) => {
          console.log(error)
          const { response: { data, status } } = error

          if (status === 422) {
            const { errors } = data
            Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: 'sign.login', msg: errors[key].join(', ') }))
          } else if (status === 403 || status === 401) {
            this.$validator.errors.add({ field: 'sign.login', msg: 'Введен неверный логин или пароль' })
          } else throw new Error('Error authenticate profile')
        })
      },
      _authByPhone () {
        const { login: phone, code } = this.sign.fields
        const referral = this.$cookies.get('referral')

        this._attemptSign(this.$api.post('api/v2/auth/login/phone/verify', { phone, code, referral })).then((response) => {
          this.sign.fsm.go('login', true)
        }, (error) => {
          const { response: { data, status } } = error

          // this.$nextTick(() => this.$refs['code'].focus())

          if (status === 422 || status === 429) {
            const { errors } = data
            Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: 'sign.code', msg: errors[key].join(', ') }))
          } else if (status === 404 || status === 500) {
            this.$validator.errors.add({ field: 'sign.code', msg: 'Неверный код подтверждения.' })
          } else throw new Error('Error authenticate profile')
        })
      },
      _attemptSign (apiPromise) {
        return new Promise((resolve, reject) => {
          Indicator.open()
          this.sign.loading = true

          apiPromise.then(response => {
            const { data: { token, role, hasEmail, locale } } = response

            this.$auth.storeSession({ token, role, hasEmail })

            this.$gtm.trackEvent({ event: 'authorization' })
            this.$store.dispatch('auth/setLocale', locale || 'ru')

            this.$store.dispatch('auth/setToken', { accessToken: token, refreshToken: token }).then(result => {
              this.$store.dispatch('auth/getUserByAPI').then(user => {
                Indicator.close()
                resolve && resolve(user)
                this.sign.loading = false
              })
            })
          }, (error) => {
            const { response: { data, status }} = error

            Indicator.close()
            this.sign.loading = false

            reject && reject(error)
            Toast({ message: 'Произошла ошибка при авторизации', iconClass: 'mintui mintui-field-error' })

            if (status === 422) {
              const { errors } = data
              Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: `sign.${key}`, msg: errors[key].join(', ') }))
            } else throw new Error('Error register user')
          })
        })
      },
      _handleClickRegisterUser () {
        this._handleValidateFields('register').then(() => {
          this._registerUser()
        }).catch(() => this._scrollToErrorFields())
      },
      _registerUser () {
        this.register.loading = true
        Indicator.open()

        let fields = Object.keys(this.register.fields)
          .filter(key => Object.values(KEYS_REGISTER).includes(key))
          .reduce((obj, key) => ({ ...obj, [key]: this.register.fields[key] }), {})

        let data = { ...flatten(fields) }

        this.$api.post('/api/v2/auth/post-register', data).then((response) => {
          const { data: { url } } = response

          Indicator.close()
          this.register.loading = false

          let user = this.$cookies.get('auth_user')
          let age = this.$moment().diff(this.$moment(this.register.fields[KEYS_REGISTER['birthday']], 'DD.MM.YYYY', true), 'years')

          let fields = {
            age,
            isRegistered: true,
            gender: { id: this.register.fields[KEYS_REGISTER['genderId']] },
            avatar: { '84x84': DEFAULT_AVATAR, '183x183': DEFAULT_AVATAR  },
            name: `${this.register.fields[KEYS_REGISTER['lastName']]} ${this.register.fields[KEYS_REGISTER['firstName']]}`
          }
          Object.assign(user, fields)
          this.$cookies.set('auth_user', user, { expires })
          Object.keys(fields).forEach(key => {
            this.$store.dispatch('auth/setUserField', { key, value: fields[key] })
          })
        }, (error) => {
          const { response: { data, status }} = error

          Indicator.close()
          this.register.loading = false

          Toast({ message: 'Произошла ошибка при регистрации', iconClass: 'mintui mintui-field-error' })

          if (status === 422) {
            const { errors } = data
            Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: `register.${key}`, msg: errors[key].join(', ') }))
          } else throw new Error('Error register user')
        })
      },
      _handleClickAttachPhoneUser () {
        this._handleValidateFields('attached').then(() => {
          const { phone } = this.attached.fields
          this.$modalRouter.push({ name: 'users.settings.phone.attach', props: { phone } })
        }).catch(() => this._scrollToErrorFields())
      },
      _handleClickOAuthVk () {
        if (this.disabled) return false

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
        if (this.disabled) return false

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
        if (this.disabled) return false

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
        if (this.disabled) return false

        this.$oauth.appleAuth().then((data) => {
          let { social, code } = data
          this._attemptSign(this.$api.post(`oauth/mobile/${social}/callback?code=${code}`)).then((r) => {}, (e) => {})
        }).catch((e) => {
          throw new Error(e)
        })
      },
    }
  }
</script>

<style scoped>

</style>
