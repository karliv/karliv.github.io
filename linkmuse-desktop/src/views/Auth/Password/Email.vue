<template>
  <div  class="modal-auth modal-authentication">
    <div class="close-modal" @click="_handleClickClosePage"></div>

    <div class="lm-main-wrapper">
      <template v-if="state.is.email">
        <h2 class="heading heading_h2 mb_12">Восстановление</h2>

        <div class="form-user">
          <div :class="['lm-input-wrap', { 'error': (verrors.has('email')) }]">
            <div class="lm-relative">
              <input type="email"
                     tabindex="1"
                     name="email"
                     autocapitalize=off
                     placeholder="Email" data-vv-as="Email"
                     id="login_recovery"
                     v-validate="'required|email'"
                     v-model="fields.email"
                     :class="[{ 'error': (verrors.has('email')), 'ok': isValidEmail }, 'lm-input']">
              <i class="input-ok-icon"></i>
              <span class="lm-input-error mt_2" v-if="verrors.has('email')">{{ verrors.first('email') }}</span>
            </div>
          </div>

          <button @click="_handleClickNext" class="lm-primary-button w_100 mb_12">
            Продолжить
          </button>

          <a href="javascript:void(0)" class="d-link_back" @click="_handleClickClosePage()">Назад</a>
        </div>
      </template>

      <template v-if="state.is.finish">
        <h2 class="heading heading_h2 mb_2">Почти готово</h2>

        <div class="form-user">
          <div class="lm-sign-up-content mb_12">Измените пароль по ссылке, отправленной вам на почту</div>
          <button class="lm-primary-button w_100 mb_6" @click="_handleClickGoToMail">Перейти на почту</button>

          <a href="javascript:void(0)" class="d-link_back" @click="_handleClickClosePage">Войти в аккаунт</a>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import { on, off, redirect } from '@utils'
  import { StateMachine, StateHelper } from 'state-machine'

  export default {
    metaInfo: {
      title: 'Восстановление пароля',
    },
    data () {
      return {
        state: null,
        loading: false,
        error: false,
        success: false,
        fields: {
          email: null
        }
      }
    },
    computed: {
      isValidEmail () {
        return (this.vfields && this.vfields.hasOwnProperty('email') && this.vfields.email.valid)
      },
    },
    created () {
      this.fsm = StateMachine.create({
        transitions: [
          'next :  email > finish'
        ],
        handlers: {
          'email@next': this._handleDrawEmail
        }
      })

      this.state = StateHelper.object(this.fsm).data
    },
    mounted () {
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
      _handleDrawEmail (event, fsm) {
        fsm.pause()

        this._handleValidateFields().then(() => {
          this.recovery().then(() => {
            fsm.resume()
          }).catch(() => fsm.cancel())
        }).catch(() => fsm.cancel())
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
      _handleClickNext () {
        this.fsm.do('next')
      },
      recovery () {
        return new Promise((resolve, reject) => {
          this.loading = true
          const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

          const { email } = this.fields;

          this.$api.post('api/v1/auth/recovery', { email }).then((response) => {
            loader.hide()
            this.loading = false

            const { data } = response

            resolve && resolve(data)

          }, (error) => {
            loader.hide()
            this.loading = false

            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка при восстановлении пароля' })

            const { response: { data, status }} = error

            if (status === 422) {
              this.$setLaravelValidationErrorsFromResponse(data)
            } else throw new Error('Error recovery password')

            reject && reject(data)
          })
        })
      },
      _handleClickClosePage () {
        this.$router.push({ name: 'login' })
      },
      _handleClickGoToMail () {
        let domain = this.fields.email.split('@');
        (typeof domain[1] !== 'undefined') ? redirect('http://' + domain[1]) : redirect('/');
      }
    }
  }
</script>
