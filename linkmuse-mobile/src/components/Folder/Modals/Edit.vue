<template>
  <mt-popup class="lm-m-modal-wrap modal_write-all modal__content" v-model="modal.value" position="center" :modal="true" :lockScroll="true" @input="_handleInputPopup">
    <div class="row">
      <div class="column ta_center">
        <div class="heading heading_h5">Редактирование подборки</div>
      </div>
    </div>
    <div class="row mt_1">
      <div class="column">
        <div class="input">
          <input type="text" id="name" name="name" placeholder="Введите название подборки" autocomplete="off" autofocus
                 v-model="fields.name"
                 v-validate="'required'"
                 data-vv-as="Название подборки"
                 @keyup.enter="_handleClickSaveButton"
                 :style="{ boxSizing: 'border-box' }"
                 :class="[{ 'error': (verrors.has('name')) }, 'd-input__field']">
        </div>
      </div>
    </div>

    <div class="row justify_end mt_3">
      <button class="btn btn_primary w_100" @click="_handleClickSaveButton">Сохранить</button>
    </div>
  </mt-popup>
</template>

<script>
  import PopupMix from '@components/Mixins/Popup'
  import { Popup, Toast, Indicator } from 'mint-ui'

  export default {
    components: { 'mt-popup': Popup },
    mixins: [PopupMix],
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
      this.$parent.$on('open-modal-edit-folder', (folderId, { name }) => {
        this.modal.folderId = folderId

        Object.assign(this.modal.fields, { name })

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
        this.modal = {
          value: false,
          success: false,
          loading: false,
          folderId: null,
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
      _handleClickSaveButton () {
        this._handleValidateFields().then(() => {
          Indicator.open()
          this.modal.loading = true
          const { folderId, fields } = this.modal

          this.$api.put(`/api/v1/folders/${folderId}`, fields).then((response) => {
            const { data: { data } } = response
            Indicator.close()
            this.modal.loading = false
            this._handleClearModal()
            this.$root.$emit('updated-folder', folderId, fields)
            Toast({ message: 'Успешно', iconClass: 'mintui mintui-success' })
          }, (error) => {
            const { response: { data, status }} = error

            Indicator.close()
            this.modal.loading = false
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            if (status === 422) {
              this.$setLaravelValidationErrorsFromResponse(data)
            } else throw new Error("Error create folder")
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>
