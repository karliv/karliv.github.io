<template>
  <mt-popup class="lm-m-modal-wrap modal modal_talent-phone" v-model="modal.value" position="center" :modal="true" @input="_handleInputPopup">
    <div class="modal__content">
      <a :href="`tel:${modal.phone}`" class="modal__phone">{{ modal.phone }}</a>
      <div class="mt_1">Сообщите таланту, что вы нашли его на Линкмьюс</div>
    </div>
  </mt-popup>
</template>

<script>
  export default {
    data () {
      return {
        modal: {
          phone: null,
          value: false,
          success: false,
          loading: false
        }
      }
    },
    mounted () {
      this.$root.$on('open-modal-show-contact-phone', (phone) => {
        this.modal.phone = phone
        this.modal.value = true
      })
    },
    methods: {
      _handleInputPopup (value) {
        if (value === false) {
          this.modal.value = false
          this._handleClearModal()
        }
      },
      _handleClearModal () {
        this.modal = {
          phone: null,
          value: false,
          success: false,
          loading: false
        }
      },
    }
  }
</script>

<style scoped>

</style>
