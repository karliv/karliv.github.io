<template>
  <mt-popup class="lm-m-modal-wrap modal__content modal__content_declaration modal__content_declaration_casting max-w_564px" v-model="value" position="center" :modal="true" @input="_handleInputPopup">
    <div style="height: 75vh; overflow: hidden;">
      <div style="overflow-y: scroll; height: 100%;">
        <object data="/dist/docs/check_list_portfolio.pdf" type="application/pdf" width="100%">
          <embed src="/dist/docs/check_list_portfolio.pdf" type="application/pdf" width="100%">
        </object>
      </div>
    </div>
    <div class="lm-m-abuse-actions mt_2">
      <a @click="_handleClose" href="javascript:void(0)"
         :class="['lm-primary-button', 'middle']">Закрыть</a>
    </div>
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
        value: false
      }
    },
    watch: {
      'modal.value' (val) {
        this.$root.$emit('open-modal-fullscreen', val)
      }
    },
    mounted () {
      this.$root.$on('open-modal-check-list-portfolio', () => {
        this.modal.value = true
      })
    },
    methods: {
      _handleInputPopup (value) {
        if (value === false) {
          this._handleClearModal()
        }
      },
      _handleClearModal () {
        this.value = false
      },
      _handleClose () {
        this.value = false
      }
    }
  }
</script>
