<template>
  <modal class="modal-center modal-abuse" v-model="modal.value" @hide="_handleCloseModal()" :header="false" :footer="false">
    <div class="modal-abuse-content">
      <div class="title mb_8">Создание подборки</div>

      <label for="name" class="heading heading_h5">Название подборки</label>
      <input type="text" id="name" name="name" placeholder="Введите название подборки" autocomplete="off" autofocus
             v-model="fields.name"
             v-validate="'required'"
             data-vv-as="Название подборки"
             @keyup.enter="_handleClickCreateButton"
             :class="[{ 'error': (verrors.has('name')) }, 'd-input__field', 'mt_2']">

      <div class="mt_4">
        <lm-loader v-if="(modal.loading === true)"></lm-loader>
        <button :class="['d-btn', 'd-btn_primary', 'w_100', { 'disabled': (modal.loading === true) }]" @click="_handleClickCreateButton">Создать</button>
      </div>
    </div>
  </modal>
</template>

<script>
  export default {
    data () {
      return {
        modal: {
          value: false,
          success: false,
          loading: false,
          folderId: null,
          fields: {
            name: null
          }
        }
      }
    },
    computed: {
      fields () {
        return this.modal.fields
      }
    },
    mounted () {
      this.$parent.$on('open-modal-create-folder', () => {
        this.modal.value = true
      })
    },
    methods: {
      _handleCloseModal () {
        this.modal.value = false
        this._handleClearModal()
      },
      _handleClearModal () {
        this.modal = {
          value: false,
          success: false,
          loading: false,
          fields: {
            name: null
          }
        }
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
      _handleClickCreateButton () {
        this._handleValidateFields().then(() => {
          this.modal.loading = true
          const { fields } = this.modal

          this.$api.post(`/api/v1/folders`, fields).then((response) => {
            const { data: { data } } = response
            this.modal.loading = false
            this._handleCloseModal()
            this.$root.$emit('created-folder', data)
          }, (error) => {
            const { response: { data, status }} = error

            this.modal.loading = false
            if (status === 422) {
              this.$setLaravelValidationErrorsFromResponse(data)
            } else throw new Error("Error create folder")
          })
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .create-cart {
    height: 250px;

    label {
      margin-bottom: 10px;
      font-size: 15px;
      display: block;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.47;
      letter-spacing: normal;
      color: #0C111D;
    }
  }
</style>
