<template>
  <div class="wrapper lm-m-register-page-wrapper">
    <div class="lm-m-register-wrap-form">
      <h2 class="heading heading_h2 mb_2">Восстановление</h2>
      <div class="m-text_normal-2 color_gray-2 mb_8">
        Придумайте новый пароль, состоящий минимум из 6 символов
      </div>
      <form @submit.prevent="_handleSubmitFormReset" methods="POST" action="/password/rest">
        <div class="lm-input-wrap">
          <input id="password"
                 ref="password"
                 :type="passwordFieldType"
                 name="password"
                 tabindex="2"
                 placeholder="Введите пароль"
                 :class="[{ 'error': (verrors.has('password')), 'ok': isValidPassword }, 'lm-input', 'lm-input--password']"
                 v-validate="'required|min:6'"
                 v-model="fields.password">
          <span class="lm-input-error mt_2" v-if="verrors.has('password')">{{ verrors.first('password')}}</span>
          <div :class="[ passwordFieldType === 'password' ? 'eye-hide' : 'eye-show' ]" @click="_handleClickSwitchVisibilityPassword"></div>
        </div>
        <div class="lm-input-wrap">
          <input id="password_confirmation"
                 :type="passwordConfirmationFieldType"
                 name="password_confirmation"
                 tabindex="3"
                 placeholder="Повторите пароль"
                 :class="[{ 'error': (verrors.has('password_confirmation')), 'ok': isValidPasswordConfirmation }, 'lm-input', 'lm-input--password']"
                 v-validate="'required|min:6|confirmed:password'"
                 v-model="fields.password_confirmation">
          <span class="lm-input-error mt_2" v-if="verrors.has('password_confirmation')">{{ verrors.first('password_confirmation')}}</span>
          <div :class="[ passwordConfirmationFieldType === 'password' ? 'eye-hide' : 'eye-show' ]" @click="_handleClickSwitchVisibilityPasswordConfirmation"></div>
        </div>
        <div>
          <button  class="lm-primary-button mb_6 w_100">Изменить пароль</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { Toast, Indicator } from 'mint-ui'

  export default {
    metaInfo: {
      title: 'Восстановление пароля',
    },
    data () {
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
    created () {
      let { email } = this.$route.query
      console.log(email)
      if (email) this.fields.email = email
    },
    computed: {
      token () {
        return this.$route.params.token
      },
      isValidEmail () {
        return (this.fields.email && this.vfields && this.vfields.hasOwnProperty('email') && this.vfields.email.valid)
      },
      isValidPassword () {
        return (this.fields.password && this.vfields && this.vfields.hasOwnProperty('password') && this.vfields.password.valid)
      },
      isValidPasswordConfirmation () {
        return (this.fields.password_confirmation && this.vfields && this.vfields.hasOwnProperty('password_confirmation') && this.vfields.password_confirmation.valid)
      }
    },
    methods: {
      _handleValidateFields () {
        return new Promise((resolve, reject) => {
          this.$validator.validateAll().then(result => {
            if (result) {
              resolve(result)
            } else reject()
          })
        })
      },
      _handleClickSwitchVisibilityPassword() {
        this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
      },
      _handleClickSwitchVisibilityPasswordConfirmation() {
        this.passwordConfirmationFieldType = this.passwordConfirmationFieldType === 'password' ? 'text' : 'password'
      },
      _handleSubmitFormReset (e) {
        e.preventDefault();
        return new Promise((resolve, reject) => {
          this._handleValidateFields().then(() => {
            this.reset();
            resolve()
          }).catch(() => {})
        })
      },
      async reset () {
        Indicator.open()

        this.loading = true

        const { email, password, password_confirmation } = this.fields;

        this.$api.post('api/v1/auth/reset', { email, password, password_confirmation, token: this.token }).then((response) => {
          Indicator.close()
          this.loading = false

          Toast({
            message: 'Успешно',
            iconClass: 'mintui mintui-success'
          });

          const { data: { token } } = response
          this.$auth.storeSession({ token })

          this.$store.dispatch('auth/setToken', { accessToken: token, refreshToken: token }).then(result => {
            this.$store.dispatch('auth/getUserByAPI').then( result => {
              this.$router.replace({ name: 'index' })
            });
          });
        }, (error) => {
          Indicator.close()

          Toast({
            message: 'Ошибка',
            iconClass: 'mintui mintui-field-error'
          })

          this.loading = false

          const { response: { data }, response: { status }} = error

          if (status === 422) {
            this.$setLaravelValidationErrorsFromResponse(data)
          } else throw new Error('Error reset password')
        })
      }
    }
  }
</script>

<style scoped>

</style>
