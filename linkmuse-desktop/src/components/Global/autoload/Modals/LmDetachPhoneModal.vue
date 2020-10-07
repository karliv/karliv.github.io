<template>
  <modal class="modal-center lm-modal-attach-phone" v-model="modal.value" @hide="_handleCloseModal()" :header="false" :footer="false">
    <button type="button" class="close" aria-label="Close" @click="_handleCloseModal" style="position: relative; z-index: 1060">
      <span aria-hidden="true"></span>
    </button>
    <div class="modal-attach-phone-content">
      <template v-if="modal.state">
        <template v-if="modal.state.is.detach">
          <div class="title">Изменение номера мобильного телефона</div>

          <div class="d-row ml_auto mt_6">
            <lm-loader v-if="modal.loading" :style="{ marginTop: '14px' }"></lm-loader>
          </div>
        </template>
        <template v-if="modal.state.is.code">
          <div class="title">Подтвердите номер телефона</div>

          <div class="column w_100 mt_6">
            <div class="d-input d-input_row">
              <div class="column">
                <div class="d-row">
                  <input type="number" pattern="[0-9]*" min="0" inputmode="numeric" v-mask-static="'9{4}'" autofocus
                         id="detached__code" name="detached__code" data-vv-name="code" key="detached__code"
                         :data-vv-as="'Код'" :placeholder="'Код'"
                         v-validate="'digits:4|required'"
                         v-model="fields['code']"
                         :class="[{ 'error': (verrors.has('code')) }, 'd-input__field']">
                </div>
                <template v-if="verrors.has('code')">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first('code') }}</div>
                </template>
              </div>
            </div>

            <div class="d-input_row justify_center mt_6">
              <template>
                <template v-if="modal.counting">
                  <countdown  class="lm-modal-attach-phone-countdown-wrapper" :time="60000" @countdownend="_handleCountdownEnd">
                    <template slot-scope="props">
                      <span>отправить код повторно:</span>
                      <div class="counter">{{ props.seconds }} сек</div>
                    </template>
                  </countdown>
                </template>
                <template v-else-if="modal.counting === false">
                  <a href="javascript:void(0)" class="d-input__link d-input__link_blue" @click="_detachPhone">отправить код повторно</a>
                </template>
              </template>
            </div>
          </div>

          <div class="d-row ml_auto mt_6">
            <template v-if="(modal.loading === false)">
              <a href="javascript:void(0)" class="d-btn d-btn_primary w_100" @click="_handleDrawPhoneCode">Подтвердить</a>
            </template>

            <lm-loader v-if="modal.loading" :style="{ marginTop: '14px' }"></lm-loader>
          </div>
        </template>
      </template>
    </div>
  </modal>
</template>

<script>
  import VueCountdown from '@xkeshi/vue-countdown'
  import { StateMachine, StateHelper } from 'state-machine'

  export default {
    components: { 'countdown': VueCountdown },
    data () {
      return {
        modal: {
          state: null,
          value: false,
          loading: false,
          counting: false,
          fields: {
            code: null
          }
        }
      }
    },
    computed: {
      fields () {
        return this.modal.fields
      }
    },
    watch: {
      'fields.code' (val) {
        if (val && val.length === 4) {
          this._handleDrawPhoneCode() // See to do
        }
      }
    },
    created () {
      this.fsm = StateMachine.create({
        transitions: [
          'next :  detach > code',
          'back :  detach < code',
        ],
        handlers: {
          'detach@next': this._handleDetachPhone
        }
      })

      this.modal.state = StateHelper.object(this.fsm).data
    },
    mounted () {
      this.$root.$on('open-modal-detach-phone', () => {
        this.modal.value = true

        this.$nextTick(() => {
          this._handleClickNextState()
        })
      })
    },
    methods: {
      _handleDrawPhoneCode () {
        this._handleValidateFields().then(() => {
          this.modal.loading = true

          let { code } = this.modal.fields

          this.$api.post('/api/v1/users/phone/detach/verify', { code }).then((response) => {
            this._handleCloseModal()
            this.modal.loading = false
            this.$root.$emit('detach-phone')
            this.$notify({ type: 'success', title: 'Успешно', text: 'Телефон успешно удален.' })
          }, (response) => {
            const { data, status } = response

            this.modal.loading = false
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            if (status === 422) {
              this.$setLaravelValidationErrorsFromResponse(data)
            } else if (status === 404 || status === 500) {
              this.$validator.errors.add({ field: 'code', msg: 'Неверный код подтверждения.' })
            } else throw new Error("Error verify detach phone user")
          })
        }).catch(() => {  })
      },
      _detachPhone () {
        return new Promise((resolve, reject) => {
          this.modal.loading = true

          this.$api.post('api/v1/users/phone/detach').then((response) => {
            const { data: { result } } = response

            this.modal.loading = false
            this.modal.counting = true

            if (!result) {
              this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
              reject && reject()
            } else resolve && resolve()
          }, (error) => {
            const { response: { data, status }} = error

            this.modal.loading = false
            this.modal.counting = false
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            reject && reject()
            if (status === 422 && data.errors) {
              const { errors } = data
              this.$validator.errors.add({ field: 'phone', msg: errors['phone'][0] })
            } else throw new Error('Error detach phone')
          })
        })
      },
      _handleDetachPhone (event, fsm) {
        fsm.pause()

        this._detachPhone().then(() => {
          fsm.resume()
        }).catch(() => { fsm.cancel(); this._handleCloseModal() })
      },
      _handleClickNextState () {
        this.fsm.do('next')
      },
      _handleClickBackState () {
        this.fsm.do('back')
      },
      /**
       * Validate all fields on current transition
       * @returns {Promise<any>}
       * @private
       */
      _handleValidateFields () {
        return new Promise((resolve, reject) => {
          this.$validator.validateAll().then(result => {
            if (result) {
              resolve(result)
            } else reject()
          })
        })
      },
      _handleCloseModal () {
        this.modal.value = false

        this.$nextTick(() => {
          this.fsm.reset()

          this.modal.loading = false

          this.modal.fields = {
            code: null
          }
        })
      },
      _handleCountdownEnd () {
        this.modal.counting = false
      }
    }
  }
</script>

<style lang="scss"scoped>
  .lm-back-button {

  }
</style>
