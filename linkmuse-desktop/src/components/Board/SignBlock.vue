<template>
  <div :class="['section_declaration_creating', 'section_declaration_creating_big', { 'section_declaration_creating_big_disabled opacity_64' : (disabled) }]">
    <template v-if="(isAuthorized === false)">
      <div class="social-register d-row max-w_484px ml_auto mb_6">
        <a href="javascript:void(0)" :class="['vk', { 'disabled': (disabled) }]" @click="_handleClickOAuthVk"></a>
        <a href="javascript:void(0)" :class="['fb', { 'disabled': (disabled) }]" @click="_handleClickOAuthFb"></a>
        <a href="javascript:void(0)" :class="['google', 'google-icon', { 'disabled': (disabled) }]" @click="_handleClickOAuthGoogle"></a>
      </div>
    </template>

    <template v-if="(isAuthorized === false || isAuthorized === true && isRegistered === false)">
      <form @submit.prevent="_handleSubmitFormSign" method="POST">
        <div class="d-input d-input_row mb_6">
          <label :for="KEYS_SIGN['email']" class="d-input__label">Email</label>

          <div class="column">
            <input type="email" autocomplete="off" autocapitalize=off
                   :name="normalizeDotsToArrow(KEYS_SIGN['email'])"
                   :id="KEYS_SIGN['email']"
                   :placeholder="'Введите email'"
                   v-validate="'required|email'"
                   data-vv-name="email"
                   :data-vv-as="'Email'"
                   data-vv-scope="sign"
                   v-model="sign.fields[KEYS_SIGN['email']]"
                   :disabled="(disabled || isAuthorized === true)"
                   :class="[{ 'error': (verrors.has('sign.' + normalizeDotsToArrow(KEYS_SIGN['email']))) }, 'd-input__field']">

            <template v-if="verrors.has('sign.' + normalizeDotsToArrow(KEYS_SIGN['email']))">
              <div class="d-input__notification d-input__notification_required">{{ verrors.first('sign.' + normalizeDotsToArrow(KEYS_SIGN['email'])) }}</div>
            </template>
          </div>
        </div>

        <div class="d-input d-input_row mb_6">
          <label :for="KEYS_SIGN['password']" class="d-input__label">Пароль</label>

          <div class="column">
            <input type="password" autocomplete="off" autocapitalize=off
                   :name="normalizeDotsToArrow(KEYS_SIGN['password'])"
                   :id="KEYS_SIGN['password']"
                   :placeholder="'Введите пароль'"
                   v-validate="'required|min:6'"
                   data-vv-name="password"
                   data-vv-scope="sign"
                   :data-vv-as="'Пароль'"
                   v-model="sign.fields[KEYS_SIGN['password']]"
                   :disabled="(disabled || isAuthorized === true)"
                   :class="[{ 'error': (verrors.has('sign.' + normalizeDotsToArrow(KEYS_SIGN['password']))) }, 'd-input__field']">

            <template v-if="verrors.has('sign.' + normalizeDotsToArrow(KEYS_SIGN['password']))">
              <div class="d-input__notification d-input__notification_required">{{ verrors.first('sign.' + normalizeDotsToArrow(KEYS_SIGN['password'])) }}</div>
            </template>
          </div>
        </div>

        <template v-if="isAuthorized === false">
          <div class="d-row max-w_484px ml_auto">
            <button class="d-btn d-btn_primary min-w_196" :disabled="(disabled)">Продолжить</button>
          </div>
        </template>
      </form>

      <template v-if="isAuthorized === true && isRegistered === false">
        <div class="d-input d-input_row mb_6" id="postRegisterWrap">
          <label :for="KEYS_REGISTER['firstName']" class="d-input__label">Имя</label>
          <div class="column">
            <input type="text" autocomplete="off"
                   :name="normalizeDotsToArrow(KEYS_REGISTER['firstName'])"
                   :id="KEYS_REGISTER['firstName']"
                   :data-vv-name="KEYS_REGISTER['firstName']"
                   :data-vv-as="'Имя'" :placeholder="'Введите имя'"
                   data-vv-scope="register"
                   v-validate="'required|min:1|max:255'"
                   v-model="register.fields[KEYS_REGISTER['firstName']]"
                   :class="[{ 'error': (verrors.has('register.' + normalizeDotsToArrow(KEYS_REGISTER['firstName']))) }, 'd-input__field', 'w_100']">
            <template v-if="verrors.has('register.' + normalizeDotsToArrow(KEYS_REGISTER['firstName']))">
              <div class="d-input__notification d-input__notification_required">{{ verrors.first('register.' + normalizeDotsToArrow(KEYS_REGISTER['firstName'])) }}</div>
            </template>
          </div>
        </div>

        <div class="d-input d-input_row mb_6">
          <label :for="KEYS_REGISTER['lastName']" class="d-input__label">Фамилия</label>
          <div class="column">
            <input type="text" autocomplete="off"
                   :name="normalizeDotsToArrow(KEYS_REGISTER['lastName'])"
                   :id="KEYS_REGISTER['lastName']"
                   :data-vv-name="KEYS_REGISTER['lastName']"
                   :data-vv-as="'Фамилия'" :placeholder="'Введите фамилию'"
                   data-vv-scope="register"
                   v-validate="'required|min:1|max:255'"
                   v-model="register.fields[KEYS_REGISTER['lastName']]"
                   :class="[{ 'error': (verrors.has('register.' + normalizeDotsToArrow(KEYS_REGISTER['lastName']))) }, 'd-input__field', 'w_100']">
            <template v-if="verrors.has('register.' + normalizeDotsToArrow(KEYS_REGISTER['lastName']))">
              <div class="d-input__notification d-input__notification_required">{{ verrors.first('register.' + normalizeDotsToArrow(KEYS_REGISTER['lastName'])) }}</div>
            </template>
          </div>
        </div>

        <div class="d-input d-input_row mb_6">
          <label :for="KEYS_REGISTER['birthday']" class="d-input__label">Дата рождения</label>
          <div class="column">
            <input type="text" autocomplete="off" v-mask-date
                   :name="normalizeDotsToArrow(KEYS_REGISTER['birthday'])"
                   :id="KEYS_REGISTER['birthday']"
                   :data-vv-name="KEYS_REGISTER['birthday']"
                   :data-vv-as="'Дата рождения'" :placeholder="'Введите дату рождения'"
                   data-vv-scope="register"
                   v-validate="`date_format:DD.MM.YYYY|required`"
                   v-model="register.fields[KEYS_REGISTER['birthday']]"
                   :class="[{ 'error': (verrors.has('register.' + normalizeDotsToArrow(KEYS_REGISTER['birthday']))) }, 'd-input__field', 'w_100']">
            <template v-if="verrors.has('register.' + normalizeDotsToArrow(KEYS_REGISTER['birthday']))">
              <div class="d-input__notification d-input__notification_required">{{ verrors.first('register.' + normalizeDotsToArrow(KEYS_REGISTER['birthday'])) }}</div>
            </template>
          </div>
        </div>

        <template v-if="(hasBirthdayRegisterUser && isChildRegisterUser === true)">
          <div class="d-input d-input_row mb_6">
            <label :for="KEYS_REGISTER['guardian']" class="d-input__label">Имя родителя</label>
            <div class="column">
              <input type="text" autocomplete="off"
                     :name="normalizeDotsToArrow(KEYS_REGISTER['guardian'])"
                     :id="KEYS_REGISTER['guardian']"
                     :data-vv-name="KEYS_REGISTER['guardian']"
                     :data-vv-as="'Введите имя и фамилию'" :placeholder="'Введите имя и фамилию'"
                     data-vv-scope="register"
                     v-validate="'required|min:1|max:255'"
                     v-model="register.fields[KEYS_REGISTER['guardian']]"
                     :class="[{ 'error': (verrors.has('register.' + normalizeDotsToArrow(KEYS_REGISTER['guardian']))) }, 'd-input__field', 'w_100']">
              <template v-if="verrors.has('register.' + normalizeDotsToArrow(KEYS_REGISTER['guardian']))">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('register.' + normalizeDotsToArrow(KEYS_REGISTER['guardian'])) }}</div>
              </template>
            </div>
          </div>
        </template>

        <div class="d-input d-input_row mb_6">
          <label class="d-input__label">Пол</label>

          <div class="column">
            <div class="d-row">
              <div :class="['d-checkbox', 'd-checkbox_button', 'w_100', 'mr_4']">
                <input :id="'form__checkbox_declaration_gender_female'" type="radio"
                       :value="2" :disabled="(disabled)"
                       :name="normalizeDotsToArrow(KEYS_REGISTER['genderId'])"
                       :data-vv-name="KEYS_REGISTER['genderId']"
                       data-vv-as="Пол"
                       data-vv-scope="register"
                       v-validate="'required'"
                       v-model="register.fields[KEYS_REGISTER['genderId']]"
                       class="d-checkbox__mark">
                <label class="d-checkbox__label w_100" :for="'form__checkbox_declaration_gender_female'">Женский</label>
              </div>

              <div :class="['d-checkbox', 'd-checkbox_button', 'w_100']">
                <input :id="'form__checkbox_declaration_gender_male'" type="radio"
                       :value="1" :disabled="(disabled)"
                       :name="normalizeDotsToArrow(KEYS_REGISTER['genderId'])"
                       :data-vv-name="KEYS_REGISTER['genderId']"
                       data-vv-as="Пол"
                       data-vv-scope="register"
                       v-validate="'required'"
                       v-model="register.fields[KEYS_REGISTER['genderId']]"
                       class="d-checkbox__mark">
                <label class="d-checkbox__label w_100" :for="'form__checkbox_declaration_gender_male'">Мужской</label>
              </div>
            </div>

            <template v-if="verrors.has('register.' + normalizeDotsToArrow(KEYS_REGISTER['genderId']))">
              <div class="d-input__notification d-input__notification_required">{{ verrors.first('register.' + normalizeDotsToArrow(KEYS_REGISTER['genderId'])) }}</div>
            </template>

            <template>
              <div class="d-text_normal color_gray-3 mt_6">Регистрируясь, вы соглашаетесь на обработку
                <a href="/pages/agreements" target="_blank" class="color_main">Персональных данных</a>
              </div>
            </template>

            <template v-if="(hasBirthdayRegisterUser && isChildRegisterUser === true)">
              <div class="d-text_normal color_gray-3 mt_6">Регистрируясь, вы соглашаетесь на обработку
                <a href="/pages/agreements_children" target="_blank" class="color_main">Персональных данных несовершеннолетнего</a>
              </div>
            </template>
          </div>
        </div>

        <div class="d-row max-w_484px ml_auto">
          <button class="d-btn d-btn_primary min-w_196" :disabled="(disabled)" @click="_handleClickRegisterUser">Зарегистрироваться</button>
        </div>
      </template>
    </template>

    <template v-if="(isAuthorized === true && isRegistered === true && hasEmail === false)">
      <div class="d-input d-input_row mb_6">
        <label :for="KEYS_ATTACH['email']" class="d-input__label">Email</label>

        <div class="column">
          <input type="email" autocomplete="off" autocapitalize=off
                 :name="normalizeDotsToArrow(KEYS_ATTACH['email'])"
                 :id="KEYS_ATTACH['email']"
                 :placeholder="'Введите email'"
                 v-validate="'required|email'"
                 data-vv-name="email"
                 :data-vv-as="'Email'"
                 data-vv-scope="attached"
                 v-model="attached.fields[KEYS_ATTACH['email']]"
                 :disabled="(disabled)"
                 :class="[{ 'error': (verrors.has('attached.' + normalizeDotsToArrow(KEYS_ATTACH['email']))) }, 'd-input__field']">

          <template v-if="verrors.has('attached.' + normalizeDotsToArrow(KEYS_ATTACH['email']))">
            <div class="d-input__notification d-input__notification_required">{{ verrors.first('attached.' + normalizeDotsToArrow(KEYS_ATTACH['email'])) }}</div>
          </template>
        </div>
      </div>

      <div class="d-row max-w_484px ml_auto">
        <button class="d-btn d-btn_primary min-w_196" :disabled="(disabled)" @click="_handleClickAttachEmailUser">Зарегистрироваться</button>
      </div>
    </template>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { has, HEADER_HEIGHT, flatten, expires, normalizeDotsToArrow, AVATAR as DEFAULT_AVATAR } from '@utils'

  const KEYS_SIGN = {
    email: 'email',
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
    email: 'email'
  }

  export default {
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
        normalizeDotsToArrow,
        sign: {
          loading: false,
          fields: {
            [KEYS_SIGN['email']]: null,
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
            [KEYS_ATTACH['email']]: null
          }
        }
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser',
        hasEmail: 'auth/hasEmail',
        isAuthorized: 'auth/isAuthorized',
        isRegistered: 'auth/isRegistered',
      }),
      isChildRegisterUser () {
        let date = this.$moment(this.register.fields[KEYS_REGISTER['birthday']], 'DD.MM.YYYY', true),
          adult = this.$moment().subtract(18, 'years')

        return (!this.verrors.has('register.birthday') && this.register.fields[KEYS_REGISTER['birthday']] && date.isValid() && date.isAfter(adult, 'day'))
      },
      hasBirthdayRegisterUser () {
        return (!!this.register.fields['birthday'])
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
        if (el && el.length) this.$scrollTo(el[0], 500, {  offset: (-40 - HEADER_HEIGHT) })
      },
      _handleSubmitFormSign (e) {
        e.preventDefault()
        this._handleValidateFields('sign').then(() => {
          this._attemptSignUser();
        }).catch(() => {})
      },
      _attemptSignUser () {
        const { email, password } = this.sign.fields
        let referral = this.$cookies.get('referral')

        this._attemptSign(this.$api.post('api/v1/auth/register', { email, password, referral })).then((user) => {
          let { isRegistered } = user
          if (isRegistered === false) {
            this.$scrollTo('#postRegisterWrap', 500, {  offset: (-40 - HEADER_HEIGHT) })
          }
        }, (error) => {})
      },
      _attemptSign (apiPromise) {
        return new Promise((resolve, reject) => {
          this.sign.loading = true
          const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

          apiPromise.then(response => {
            const { data: { token, role, has_email, locale } } = response

            this.$auth.storeSession({ token, role, has_email })

            this.$gtm.trackEvent({ event: 'authorization' })
            this.$store.dispatch('auth/setLocale', locale || 'ru')

            this.$store.dispatch('auth/setToken', { accessToken: token, refreshToken: token }).then(result => {
              this.$store.dispatch('auth/getUserByAPI').then(user => {
                loader.hide()
                resolve && resolve(user)
                this.sign.loading = false
              })
            })
          }, (error) => {
            const { response: { data, status }} = error

            loader.hide()
            this.sign.loading = false

            reject && reject(error)
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка при регистрации' })

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
        const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

        let fields = Object.keys(this.register.fields)
          .filter(key => Object.values(KEYS_REGISTER).includes(key))
          .reduce((obj, key) => ({ ...obj, [key]: this.register.fields[key] }), {})

        let data = { ...flatten(fields) }

        this.$api.post('/api/v2/auth/post-register', data).then((response) => {
          const { data: { url } } = response

          loader.hide()
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

          loader.hide()
          this.register.loading = false

          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка при регистрации' })

          if (status === 422) {
            const { errors } = data
            Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: `register.${key}`, msg: errors[key].join(', ') }))
          } else throw new Error('Error register user')
        })
      },
      _handleClickAttachEmailUser () {
        this._handleValidateFields('attached').then(() => {
          this._attachEmailUser()
        }).catch(() => this._scrollToErrorFields())
      },
      _attachEmailUser () {
        this.attached.loading = true
        const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

        const { email } = this.attached.fields

        this.$api.post('/api/v1/users/email', { email }).then((response) => {
          loader.hide()
          this.attached.loading = false

          this.$store.dispatch('auth/setHasEmail', true)
          this.$store.dispatch('auth/setUserField', { key: 'hasEmail', value: true })
        }, (error) => {
          loader.hide()
          this.attached.loading = false

          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка' })

          const { response: { data, status } } = error

          if (status === 422) {
            const { errors } = data
            Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: `attached.${key}`, msg: errors[key].join(', ') }))
          } else throw new Error('Error attach email')
        })
      },
      _handleClickOAuthVk () {
        this.$oauth.vkAuth().then((data) => {
          let { social, code } = data
          this._attemptSign(this.$api.get(`oauth/${social}/callback?code=${code}`)).then((r) => {}, (e) => {})
        }).catch((e) => {
          throw new Error(e)
        })
      },
      _handleClickOAuthFb () {
        this.$oauth.fbAuth().then((data) => {
          let { social, code } = data
          this._attemptSign(this.$api.get(`oauth/${social}/callback?code=${code}`)).then((r) => {}, (e) => {})
        }).catch((e) => {
          throw new Error(e)
        })
      },
      _handleClickOAuthGoogle () {
        this.$oauth.googleAuth().then((data) => {
          let { social, code } = data
          this._attemptSign(this.$api.get(`oauth/${social}/callback?code=${code}`)).then((r) => {}, (e) => {})
        }).catch((e) => {
          throw new Error(e)
        })
      }
    }
  }
</script>

<style scoped>

</style>
