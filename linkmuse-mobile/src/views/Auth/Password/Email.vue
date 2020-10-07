<template>
  <div class="lm-m-register-page">
    <div class="wrapper lm-m-register-page-wrapper" v-if="state.is.email">
      <div class="lm-m-register-wrap-form">
        <h2 class="heading heading_h2 mb_9">Восстановление</h2>
        <div class="lm-input-wrap">
          <input type="email"
                 tabindex="1"
                 name="email"
                 autocapitalize=off
                 placeholder="pochta@gmaill.com"
                 :class="[{ 'error': (verrors.has('email')), 'ok': isValidEmail }, 'lm-input']"
                 v-validate="'required|email'"
                 v-model="fields.email">
          <span class="lm-input-error mt_2" v-if="verrors.has('email') && fields.email.length">{{ verrors.first('email')}}</span>
        </div>

        <button @click="_handleClickNext" href="javascript:void(0)"  class="btn btn_primary w_100 mb_9">Продолжить</button>
        <router-link :to="{ name: 'login' }" class="m-text_bold color_main">Назад</router-link>
      </div>
      <div></div>
    </div>

    <div class="wrapper lm-m-register-page-wrapper" v-if="state.is.finish">
      <div class="lm-m-register-wrap-form">
        <h2 class="heading heading_h2 mb_3">Проверьте почту</h2>
        <div class="m-text_normal-2 color_gray-2 mb_3">
          Мы выслали вам письмо для изменения пароля
        </div>
<!--        <div class="mb_6">-->
<!--          <a href="javascript:void(0)" target="_blank" class="lm-primary-button" @click="_handleClickGoToMail">Перейти на почту</a>-->
<!--        </div>-->

        <router-link :to="{ name: 'login' }" class="m-text_bold color_main">Войти в аккаунт</router-link>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
  import { redirect } from '@utils'
  import { Toast, Indicator } from 'mint-ui'
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
    methods: {
      _handleDrawEmail (event, fsm) {
        fsm.pause()

        this._handleValidateFields().then(() => {
          this.recovery()
            .then(() => fsm.resume())
            .catch(() => fsm.cancel())
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
          Indicator.open()

          this.loading = true

          const { email } = this.fields;

          this.$api.post('api/v1/auth/recovery', { email }).then((response) => {
            Indicator.close()
            this.loading = false

            Toast({
              message: 'Успешно',
              iconClass: 'mintui mintui-success'
            });

            const { data } = response

            resolve(data)

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
            } else throw new Error('Error recovery password')

            reject(data)
          })
        })
      },
      _handleClickGoToMail () {
        let domain = this.fields.email.split('@');
        (typeof domain[1] !== 'undefined') ? redirect('http://' + domain[1]) : redirect('/');
      }
    }
  }
</script>
