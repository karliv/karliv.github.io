<template>
  <mt-popup :class="['lm-m-modal-wrap', 'lm-m-modal-tree-professions']" v-model="value" :lockScroll="true" position="center" :modal="true" @input="_handleInputPopup">
    <div class="modal-confirm">
      <template v-if="state">
        <template v-if="state.is.email">
          <div class="modal-confirm__header">
            <svg class="d-icon">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-icon-pass" />
            </svg>
          </div>

          <div class="modal-confirm__body">
            <div class="heading heading_h4 mb_2">Подумайте о безопасности</div>
            <div class="modal__description modal__description_declaration_casting mb_6">
              Добавьте почту, для восстановления доступа к своей странице
            </div>

            <div class="lm-input-wrap">
              <input type="email" autocomplete="off" autocapitalize=off
                     id="attached__email" name="attached__email" data-vv-name="email" key="attached__email" ref="attached__email"
                     :data-vv-as="'E-mail'" :placeholder="'pochta@gmaill.com'"
                     v-model="fields.email"
                     v-validate="'required|email|max:255'"
                     @keyup.enter="_handleClickNextState"
                     :class="[{ 'error': (verrors.has('email')) }, 'lm-input']">
              <span class="lm-input-error mt_2" v-if="verrors.has('email')">{{ verrors.first('email') }}</span>
            </div>

            <template v-if="(loading === false)">
              <button :class="['lm-primary-button', 'middle', 'mb_6']" :disabled="(hasEmailField === false)" @click="_handleClickNextState">добавить</button>
            </template>
            <lm-m-loader v-if="loading" :style="{ marginTop: '14px' }"></lm-m-loader>

            <template v-if="(loading === false)">
              <a href="javascript:void(0)" class="m-text_bold color_gray-3" @click="_handleClickCloseModal">Продолжить работу</a>
            </template>
          </div>
        </template>

        <template v-if="state.is.complete">
          <div class="modal-confirm__body" style="height: 100vh">
            <button class="btn btn_close-modal">
              <svg class="icon icon_size_16">
                <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_close"/>
              </svg>
            </button>

            <div class="heading heading_h4 mb_2">Проверьте почту</div>
            <div class="modal__description modal__description_declaration_casting mb_3">
              Мы выслали вам письмо для подтверждения почты
            </div>

            <a href="javascript:void(0)" class="m-text_bold color_main">Продолжить работу</a>
          </div>
        </template>
      </template>
    </div>
  </mt-popup>
</template>

<script>
  import { Popup, Toast } from 'mint-ui'
  import PopupMix from '@components/Mixins/Popup'
  import { StateMachine, StateHelper } from 'state-machine'

  export default {
    components: { 'mt-popup': Popup },
    mixins: [PopupMix],
    data () {
      return {
        state: null,
        value: false,
        loading: false,
        fields: {
          email: null
        }
      }
    },
    computed: {
      hasEmailField () {
        return (!!this.fields.email)
      },
    },
    created () {
      this.fsm = StateMachine.create({
        transitions: [
          'next :  email > complete',
          'back :  email < complete',
        ],
        handlers: {
          'email@next': this._handleDrawEmail
        }
      })

      this.state = StateHelper.object(this.fsm).data
    },
    methods: {
      _attachEmail () {
        return new Promise((resolve, reject) => {
          this.loading = true

          let { email } = this.fields

          this.$api.patch('api/v2/settings/email', { email }).then((response) => {
            const { data: { result } } = response

            this.loading = false

            this.$store.dispatch('auth/getUserByAPI')
            this.$store.dispatch('auth/setUserField', { key: 'hasEmail', value: true })
            Toast({ message: 'Почта привязана к аккаунту.', iconClass: 'mintui mintui-success' })

            resolve && resolve()
          }, (error) => {
            const { response: { data, status }} = error

            reject && reject()

            this.loading = false
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            if (status === 422) {
              const { errors } = data
              Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: key, msg: errors[key].join(', ') }))
            } else throw new Error('Error attach email')
          })
        })
      },
      _handleDrawEmail (event, fsm) {
        fsm.pause()

        this._handleValidateFields().then(() => {
          this._attachEmail().then(() => {
            fsm.resume()
          }).catch(() => fsm.cancel())
        }).catch(() => fsm.cancel())
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
      _handleClickCloseModal () {
        this.value = false
      },
      _handleInputPopup (value) {
        if (value === false) {
          this._handleClearModal().then(() => {
            this.fsm.reset()
          }).catch(() => {})
        }
      },
      _handleClearModal () {
        return new Promise((resolve, reject) => {
          try {
            this.state = null
            this.value = false
            this.loading = false
            this.fields = {
              email: null
            }
            resolve && resolve()
          } catch (e) {
            reject && reject(e)
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
