<template>
  <div class="lm-m-register-page">
    <div class="wrapper lm-m-register-page-wrapper">
      <div class="lm-m-register-wrap-form">
        <h2 class="heading heading_h2 mb_9">Необходимо ввести email</h2>
        <div class="lm-input-wrap">
          <input type="email"
                 tabindex="1"
                 name="email"
                 autocapitalize=off
                 placeholder="E-mail"
                 :class="[{ 'error': (verrors.has('email')), 'ok': isValidEmail }, 'lm-input']"
                 v-validate="'required|email'"
                 v-model="fields.email">
          <span class="lm-input-error" v-if="verrors.has('email')">{{ verrors.first('email')}}</span>
        </div>

        <div>
          <button @click="saveEmail" href="javascript:void(0)"
                  :class="['lm-primary-button', { 'disabled': (this.verrors.any() || !fields.email) }]">Продолжить
          </button>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { Toast, Indicator } from 'mint-ui'

  export default {
    metaInfo: {
      title: 'Подтверждение email',
    },
    data () {
      return {
        loading: false,
        error: false,
        success: false,
        fields: {
          email: null
        }
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser',
      }),
      isValidEmail () {
        return (this.vfields && this.vfields.hasOwnProperty('email') && this.vfields.email.valid)
      },
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
      saveEmail () {
        this._handleValidateFields().then(result => {
          if (result) {
            if (this.loading) return

            Indicator.open()
            this.loading = true

            this.$api.post('/api/v1/users/email', this.fields).then((response) => {
              Indicator.close()
              this.loading = false

              Toast({
                message: 'Успешно',
                iconClass: 'mintui mintui-success'
              })

              this.$store.dispatch('auth/setHasEmail', true)

              let { username } = this.user

              this.$router.push({ name: 'user.show', params: { username } })
            }, (error) => {
              Indicator.close()

              Toast({
                message: 'Ошибка',
                iconClass: 'mintui mintui-field-error'
              })

              this.loading = false

              const { response: { data }, response: { status } } = error

              if (status === 422) {
                this.$setLaravelValidationErrorsFromResponse(data)
              } else throw new Error('Error attach email')
            })
          }
        })
      },
      recovery () {
        return new Promise((resolve, reject) => {
          Indicator.open()

          this.loading = true

          const { email } = this.fields

          this.$api.post('api/v1/auth/recovery', { email }).then((response) => {
            Indicator.close()
            this.loading = false

            Toast({
              message: 'Успешно',
              iconClass: 'mintui mintui-success'
            })

            const { data } = response

            resolve(data)

          }, (error) => {
            Indicator.close()

            Toast({
              message: 'Ошибка',
              iconClass: 'mintui mintui-field-error'
            })

            this.loading = false

            const { response: { data }, response: { status } } = error

            if (status === 422) {
              this.$setLaravelValidationErrorsFromResponse(data)
            } else throw new Error('Error recovery password')

            reject(data)
          })
        })

      }
    }
  }
</script>
