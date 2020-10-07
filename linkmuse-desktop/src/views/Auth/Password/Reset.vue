<template>
  <div class="modal-restore-password modal-authentication">
    <div class="close-modal" @click="_handleClickClosePage"></div>

    <div class="lm-main-wrapper modal-restore-wrap">
      <h2 class="heading heading_h2 mb_2">Восстановление</h2>

      <form @submit.prevent="_handleSubmitFormReset" method="POST" action="/password/rest">
        <div class="form-user">
          <div class="lm-sign-up-content mb_12">Придумайте новый пароль, состоящий минимум из 6 символов</div>

          <div :class="['lm-input-wrap', { 'error': (verrors.has('password')) }]">
            <div class="lm-relative">
              <input :type="passwordFieldType"
                     name="password" data-vv-name="password" ref="password"
                     tabindex="1"
                     placeholder="Введите пароль" data-vv-as="Пароль"
                     id="password"
                     v-validate="'required|min:6'"
                     v-model="fields.password"
                     :class="[{ 'error': (verrors.has('password')), 'ok': isValidPassword }, 'lm-input', 'lm-input--password']">
              <div :class="[ passwordFieldType === 'password' ? 'eye-hide' : 'eye-show' ]" @click="_handleClickSwitchVisibilityPassword"></div>
            </div>

            <span class="lm-input-error mt_2" v-if="verrors.has('password')">{{ verrors.first('password') }}</span>
          </div>

          <div :class="['lm-input-wrap', { 'error': (verrors.has('password_confirmation')) }]">
            <div class="lm-relative">
              <input :type="passwordConfirmationFieldType"
                     name="password_confirmation" data-vv-name="password_confirmation"
                     tabindex="2"
                     placeholder="Повторите пароль" data-vv-as="Повторите пароль"
                     id="password_confirmation"
                     v-validate="'required|min:6|confirmed:password'"
                     v-model="fields.password_confirmation"
                     :class="[{ 'error': (verrors.has('password_confirmation')), 'ok': isValidPasswordConfirmation }, 'lm-input', 'lm-input--password']">

              <div :class="[ passwordConfirmationFieldType === 'password' ? 'eye-hide' : 'eye-show' ]" @click="_handleClickSwitchVisibilityPasswordConfirmation"></div>
            </div>
            <span class="lm-input-error mt_2" v-if="verrors.has('password_confirmation')">{{ verrors.first('password_confirmation')}}</span>
          </div>

          <button class="lm-primary-button w_100">Изменить пароль</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import {on, off} from '@utils'

  export default {
    metaInfo: {
      title: 'Восстановление пароля',
    },
    data() {
      return {
        fields: {
          email: null,
          password: null,
          password_confirmation: null
        },
        loading: false,
        passwordFieldType: 'password',
        passwordConfirmationFieldType: 'password'
      }
    },
    computed: {
      token() {
        return this.$route.params.token
      },
      isValidEmail() {
        return (this.fields.email && this.vfields && this.vfields.hasOwnProperty('email') && this.vfields.email.valid)
      },
      isValidPassword() {
        return (this.fields.password && this.vfields && this.vfields.hasOwnProperty('password') && this.vfields.password.valid)
      },
      isValidPasswordConfirmation() {
        return (this.fields.password_confirmation && this.vfields && this.vfields.hasOwnProperty('password_confirmation') && this.vfields.password_confirmation.valid)
      }
    },
    mounted() {
      on(window, 'keyup', this._handleBodyKeyUp)
    },
    created() {
      let {email} = this.$route.query
      if (email) this.fields.email = email
    },
    beforeDestroy() {
      off(window, 'keyup', this._handleBodyKeyUp)
    },
    methods: {
      _handleClickSwitchVisibilityPassword() {
        this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
      },
      _handleClickSwitchVisibilityPasswordConfirmation() {
        this.passwordConfirmationFieldType = this.passwordConfirmationFieldType === 'password' ? 'text' : 'password'
      },
      _handleBodyKeyUp(e) {
        if (e.keyCode === 27) {
          this._handleClickClosePage()
        }
      },
      _handleValidateFields() {
        return new Promise((resolve, reject) => {
          this.$validator.validateAll().then(result => {
            if (result) {
              resolve(result)
            } else reject()
          })
        })
      },
      _handleSubmitFormReset(e) {
        e.preventDefault();
        return new Promise((resolve, reject) => {
          this._handleValidateFields().then(() => {
            this.reset();
            resolve()
          }).catch(() => {
          })
        })
      },
      async reset() {
        this.loading = true
        const loader = this.$loading.show({loader: 'dots', color: '#0063da'})

        const {email, password, password_confirmation} = this.fields;

        this.$api.post('api/v1/auth/reset', {
          email,
          password,
          password_confirmation,
          token: this.token
        }).then((response) => {
          loader.hide()
          this.loading = false

          this.$notify({type: 'success', title: 'Успешно', text: 'Идет переадресация.'})

          const {data: {token}} = response
          this.$auth.storeSession({token})

          this.$store.dispatch('auth/setToken', {accessToken: token, refreshToken: token}).then(result => {
            this.$store.dispatch('auth/getUserByAPI').then(result => {
              this._handleRedirectAfterAuth()
            });
          });
        }, (error) => {
          loader.hide()
          this.loading = false

          this.$notify({type: 'error', title: 'Ошибка', text: 'Произошла ошибка при сбросе пароля.'})

          const {response: {data, status}} = error

          if (status === 422) {
            this.$setLaravelValidationErrorsFromResponse(data)
          } else throw new Error('Error reset password')
        })
      },
      _handleRedirectAfterAuth() {
        if (this.$localStorage.get('redirect.register', null, String)) {
          let location = this.$localStorage.get('redirect.register', '/', String)
          this.$localStorage.remove('redirect.register')
          this.$router.push(location)
        } else this.$router.push({name: 'board.castings.index'})
      },
      _handleClickClosePage() {
        this.$router.push({name: 'login'})
      },
    }
  }
</script>
