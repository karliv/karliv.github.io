<template>
  <custom-template-modal class="modal-center modal_declaration" v-model="modal.value" @hide="_handleCloseModal" :header="false" :footer="false">
    <div class="modal__content modal__content_declaration modal__content_declaration_casting max-w_654px">
      <object data="/dist/docs/check_list_portfolio.pdf" type="application/pdf" height="700" width="582">
        <embed src="/dist/docs/check_list_portfolio.pdf" type="application/pdf" />
      </object>
    </div>
  </custom-template-modal>
</template>

<script>

  import { redirect } from '@utils'

  export default {
    data () {
      return {
        modal: {
          value: false,
          loading: false
        }
      }
    },
    mounted () {
      this.$root.$on('open-modal-check-list-portfolio', () => {
        this.modal.value = true
      })
    },
    methods: {
      _handleCloseModal ()  {
        this._handleClearModal()
      },
      _handleClearModal () {
        this.modal = {
          value: false,
          loading: false
        }
      }
    }
  }
</script>
