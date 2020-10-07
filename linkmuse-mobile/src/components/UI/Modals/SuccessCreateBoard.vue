<template>
  <mt-popup class="lm-m-modal-wrap modal__content modal__content_declaration modal__content_declaration_casting" v-model="value" :lockScroll="true" position="center" :modal="true" @input="_handleInputPopup">
    <div class="modal__title modal__title_declaration_casting">Ваше объявление отправлено на модерацию.</div>
    <div class="modal__description modal__description_declaration_casting">
      Возникли ли у вас проблемы?
    </div>
    <button class="btn btn_login btn_primary w_100" @click="_handleAcceptButton">Рассказать о проблеме</button>
  </mt-popup>
</template>

<script>
  import { Popup } from 'mint-ui'
  import PopupMix from '@components/Mixins/Popup'
  export default {
    components: { 'mt-popup': Popup },
    mixins: [PopupMix],
    data () {
      return {
        value: false,
        loading: false
      }
    },
    methods: {
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
            this.value = false
            this.loading = false
            resolve && resolve()
          } catch (e) {
            reject && reject(e)
          }
        })
      },
      _handleAcceptButton () {
        this.$localStorage.set('success.board.create', true)
        window.open('https://linkmuse.typeform.com/to/DEo9rd', '_blank')

        this.$nextTick(() => this._handleClickCloseModal())
      }
    }
  }
</script>

<style scoped>

</style>
