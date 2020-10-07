<template>
  <div class="modal-register modal-authentication">
    <div class="close-modal" @click="_handleClickClosePage"></div>
    <div class="lm-main-wrapper">
      <h2 class="heading heading_h2 mb_12">Регистрация</h2>
      <div class="social-register mb_12">
        <a href="javascript:void(0)" class="vk" @click="_handleClickOAuthVk"></a>
        <a href="javascript:void(0)" class="fb" @click="_handleClickOAuthFb"></a>
        <a href="javascript:void(0)" class="google google-icon" @click="_handleClickOAuthGoogle"></a>
      </div>

      <form @submit.prevent="_handleSubmitFormRegister" method="POST">
        <div class="form-user">
          <div :class="['lm-input-wrap', { 'error': (verrors.has('email')) }]">
            <div class="lm-relative">
              <input type="email"
                     tabindex="1"
                     name="email"
                     autocapitalize=off
                     placeholder="Email" data-vv-as="Email"
                     id="login_register"
                     v-validate="'required|email'"
                     v-model="fields.email"
                     :class="[{ 'error': (verrors.has('email')), 'ok': isValidEmail }, 'lm-input']">
              <i class="input-ok-icon"></i>
              <span class="lm-input-error mt_2" v-if="verrors.has('email')">{{ verrors.first('email') }}</span>
            </div>
          </div>

          <div :class="['lm-input-wrap', { 'error': (verrors.has('password')) }]">
            <div class="lm-relative">
              <input :type="passwordFieldType"
                     name="password"
                     tabindex="2"
                     placeholder="Пароль" data-vv-as="Пароль"
                     id="password"
                     v-validate="'required|min:6'"
                     v-model="fields.password"
                     :class="[{ 'error': (verrors.has('password')), 'ok': isValidPassword }, 'lm-input']">
              <i class="input-ok-icon"></i>
              <template v-if="(fields.password && fields.password.length > 0)">
                <div @click="_handleClickSwitchVisibilityPassword" :class="[ passwordFieldType === 'password' ? 'eye-show' : 'eye-hide' ]"></div>
              </template>
            </div>
            <span class="lm-input-error mt_2" v-if="verrors.has('password')">{{ verrors.first('password') }}</span>
          </div>

          <button class="lm-primary-button w_100 mb_6">
            Продолжить
          </button>

          <div class="bottom-form-text">Регистрируясь, вы соглашаетесь на обработку <a target="_blank" href="/pages/agreements">Персональных данных</a></div>

          <div class="bottom-sign-up">
            <div class="heading heading_h5">Уже есть аккаунт?</div>
            <div class="lm-sign-up-content mb_2">Войдите, используя логин и пароль, указанный при регистрации</div>
            <router-link :to="{ name: 'login' }" class="d-link_back">Войти</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { on, off, has, isBrowser } from '@utils'

  export default {
    metaInfo: {
      title: 'Регистрация',
    },
    data () {
      return {
        fields: {
          email: null,
          password: null
        },
        loading: false,
        passwordFieldType: 'password'
      }
    },
    computed: {
      isValidEmail () {
        return (this.vfields && this.vfields.hasOwnProperty('email') && this.vfields.email.valid)
      },
      isValidPassword () {
        return (this.vfields && this.vfields.hasOwnProperty('password') && this.vfields.password.valid)
      }
    },
    mounted () {
      this.$gtm.trackEvent({ event: 'startreg' })

      if (isBrowser && has(this.$route.params,'social') && has(this.$route.query, 'code')) this._handleOAuth()

      on(window, 'keyup', this._handleBodyKeyUp)
    },
    beforeDestroy () {
      off(window, 'keyup', this._handleBodyKeyUp)
    },
    methods: {
      _handleBodyKeyUp (e) {
        if (e.keyCode === 27) {
          this._handleClickClosePage()
        }
      },
      _handleClickSwitchVisibilityPassword() {
        this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
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
            this.register();
            resolve()
          }).catch(() => {})
        })
      },
      async register () {
        const { email, password } = this.fields
        let referral = this.$cookies.get('referral')

        this.attemptSign(this.$api.post('api/v1/auth/register', { email, password, referral })).then((r) => {}, (error) => {
          const { response: { data, status }} = error

          if (status === 422) {
            this.$setLaravelValidationErrorsFromResponse(data)
          } else throw new Error('Error register profile')
        })
      },
      attemptSign (apiPromise) {
        return new Promise((resolve, reject) => {
          this.loading = true
          const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

          apiPromise.then(response => {
            loader.hide()
            this.loading = false

            this.$notify({ type: 'success', title: 'Успешно', text: 'Идет переадресация.' })

            const { data: { token, role, has_email, locale } } = response

            this.$auth.storeSession({ token, role, has_email })

            this.$gtm.trackEvent({ event: 'authorization' })
            this.$store.dispatch('auth/setLocale', locale || 'ru')

            this.$store.dispatch('auth/setToken', { accessToken: token, refreshToken: token }).then(result => {
              this.$store.dispatch('auth/getUserByAPI').then( user => {
                let { isRegistered } = user
                if (isRegistered) {
                  this._handleRedirectAfterAuth()
                } else this.$router.replace({ name: 'user.register' })
              });
            });

            resolve && resolve(response)
          }).catch(e => {
            loader.hide()
            this.loading = false

            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка при регистрации' })

            reject && reject(e)
          })
        })
      },
      _handleRedirectAfterAuth () {
        if (this.$localStorage.get('redirect.register', null, String)) {
          let location = this.$localStorage.get('redirect.register', '/', String)
          this.$localStorage.remove('redirect.register')
          this.$router.push(location)
        } else this.$router.push({ name: 'board.castings.index' })
      },
      _handleClickOAuthVk () {
        this.$oauth.vkAuth().then((data) => {
          let { social, code } = data
          this.attemptSign(this.$api.get(`oauth/${social}/callback?code=${code}`)).then((r) => {}, (e) => {})
        }).catch((e) => {
          throw new Error(e)
        })
      },
      _handleClickOAuthFb () {
        this.$oauth.fbAuth().then((data) => {
          let { social, code } = data
          this.attemptSign(this.$api.get(`oauth/${social}/callback?code=${code}`)).then((r) => {}, (e) => {})
        }).catch((e) => {
          throw new Error(e)
        })
      },
      _handleClickOAuthGoogle () {
        this.$oauth.googleAuth().then((data) => {
          let { social, code } = data
          this.attemptSign(this.$api.get(`oauth/${social}/callback?code=${code}`)).then((r) => {}, (e) => {})
        }).catch((e) => {
          throw new Error(e)
        })
      },
      _handleClickClosePage () {
        this.$router.push({ name: 'index' })
      }
    }
  }
</script>

<style scoped>

</style>
