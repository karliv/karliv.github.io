<template>
  <div class="modal-auth modal-authentication">
    <div class="close-modal" @click="_handleClickClosePage"></div>

    <div class="lm-main-wrapper">
      <h2 class="heading heading_h2 mb_12">Вход</h2>
      <div class="social-register mb_12">
        <a href="javascript:void(0)" class="vk" @click="_handleClickOAuthVk"></a>
        <a href="javascript:void(0)" class="fb" @click="_handleClickOAuthFb"></a>
        <a href="javascript:void(0)" class="google" @click="_handleClickOAuthGoogle"></a>
      </div>

      <form method="POST" @submit.prevent="_handleSubmitFormLogin">
        <div class="form-user">
          <div :class="['lm-input-wrap', { 'error': (verrors.has('email')) }]">
            <div class="lm-relative">
              <input type="email"
                     tabindex="1"
                     name="email"
                     autocapitalize=off
                     placeholder="Email" data-vv-as="Email"
                     id="login_auth"
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

          <button class="lm-primary-button w_100">Войти</button>

          <div class="bottom-sign-up">
            <div class="heading heading_h5">Не можете войти?</div>
            <div class="lm-sign-up-content mb_2">Восстановите пароль, в случае смены или утраты доступа к почте</div>
            <router-link :to="{ name: 'password.email'}" class="d-link_back">Восстановить пароль</router-link>
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
      title: 'Вход'
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
      if (isBrowser && has(this.$route.params,'social') && has(this.$route.query, 'code')) this._handleOAuth()

      on(window, 'keyup', this._handleBodyKeyUp)
    },
    beforeDestroy () {
      off(window, 'keyup', this._handleBodyKeyUp)
    },
    methods: {
      async _handleOAuth () {
        let { params: { social }, query: { code } } = this.$route

        this.attemptSign(this.$api.get(`oauth/${social}/callback?code=${code}`)).then((r) => {}, (e) => {})
      },
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
      _handleSubmitFormLogin (e) {
        e.preventDefault();
        return new Promise((resolve, reject) => {
          this._handleValidateFields().then(() => {
            this.authenticate();
            resolve()
          }).catch(() => {})
        })
      },
      async authenticate () {
        const { email, password } = this.fields;

        this.attemptSign(this.$api.post('api/v1/auth/login', { email, password })).then((response) => {}, (error) => {
          const { response: { data, status } } = error

          if (status === 422) {
            this.$setLaravelValidationErrorsFromResponse(data)
          } else if (status === 403) {
            this.$validator.errors.add({
              field: 'email',
              msg: 'Введен неверный логин или пароль'
            })
          } else throw new Error('Error authenticate profile')
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
                this._handleRedirectAfterAuth()
              });
            });

            resolve && resolve(response)
          }).catch(e => {
            loader.hide()
            this.loading = false

            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка при авторизации' })

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

<style>

</style>
