<template>
  <modal ref="modal" class="modal-center modal modal_talent-phone" :header="false" :footer="false" v-model="modal.value" @hide="_handleHideModal">
    <div class="modal__content">
      <a :href="`tel:${modal.phone}`" class="modal__phone">{{ modal.phone }}</a>
      <div class="mt_4">Сообщите пользователю, что вы нашли его на Линкмьюс</div>
    </div>
  </modal>
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
      _handleHideModal (value) {
        this._handleClearModal()
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

<style lang="scss" scoped>
</style>
