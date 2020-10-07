<template>
  <div class="modal-authentication page-container post-register">
    <div class="wrapper" id="page_register" ref="page_register">
      <div class="flex-aling-center-column">
        <h2 :class="['heading', 'heading_h2']">Необходимо ввести email</h2>

        <div class="form-user">
          <div :class="['lm-input-wrap', { 'error': (verrors.has('email')) }]">
            <div class="lm-relative">
              <input type="text"
                     :key="'email'"
                     :name="'email'"
                     :id="'email'"
                     :data-vv-as="'E-mail'"
                     :placeholder="'E-mail'"
                     v-validate="'required|email'"
                     v-model="fields['email']"
                     :class="[{ 'error': (verrors.has('email')) }, 'lm-input']">

              <span class="lm-input-error mt_2" v-if="verrors.has('email')">
                {{ verrors.first('email') }}
              </span>
            </div>
          </div>
        </div>

        <button class="d-btn d-btn_primary mt_8" @click="_handleOnComplete">
          Продолжить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    metaInfo: {
      title: 'Подтверждение email'
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
        user: 'auth/getAuthUser'
      })
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
      _handleOnComplete () {
        this._handleValidateFields().then(result => {
          if (result) {
            if (this.loading) return

            this.loading = true
            const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

            this.$api.post('/api/v1/users/email', this.fields).then((response) => {
              loader.hide()
              this.loading = false

              this.$store.dispatch('auth/setHasEmail', true)
              this.$notify({ type: 'success', title: 'Успешно', text: 'Идет переадресация.' })

              let { username } = this.user
              this.$router.push({ name: 'user.show', params: { username } })
            }, (error) => {
              loader.hide()
              this.loading = false

              this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка' })

              const { response: { data, status } } = error

              if (status === 422) {
                this.$setLaravelValidationErrorsFromResponse(data)
              } else throw new Error('Error attach email')
            })
          }
        }).catch(() => {  })
      },
    }
  }
</script>
