<template>
  <mt-popup class="lm-m-modal-wrap modal_write-all modal__content" v-model="modal.value" position="center" :modal="true" :lockScroll="true" @input="_handleInputPopup">
    <template v-if="(modal.success === false)">
      <div class="row">
        <div class="column ta_center">
          <div class="heading heading_h5">Жалоба от модератора для AmoCRM</div>
        </div>
      </div>
      <div class="row mt_1">
        <div class="column">
          <div class="textarea">
            <textarea name="message" class="d-textarea__field im_editable" id="issues-area"
                      placeholder="Начните писать сообщение"
                      v-model="fields.comment">
            </textarea>
          </div>
        </div>
      </div>

      <div class="row justify_end mt_3">
        <button class="btn btn_primary w_100" @click="_handleClickSendButton">Отправить</button>
      </div>
    </template>

    <template v-if="(modal.success === true)">
      <div class="headgin heading_h5">Сообщение отправлены</div>
    </template>
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
          castingId: null,
          fields: {
            comment: null
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
      this.$parent.$on('open-modal-issues-casting', (castingId) => {
        this.modal.castingId = castingId

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
          castingId: null,
          fields: {
            comment: null
          }
        }
      },
      _handleClickSendButton () {
        let { fields: { comment }, castingId } = this.modal

        if ((!comment || comment.length === 0 || /^\s*$/.test(comment))) return

        Indicator.open()
        this.modal.loading = true

        this.$api.post(`api/admin/v1/boards/castings/${castingId}/issues`, { comment }).then(response => {
          let { data } = response
          this.modal.success = true

          Indicator.close()
          this.modal.loading = false

          setTimeout(() => {
            this.modal.value = false

            this.$nextTick(() => {
              this._handleClearModal()
            })
          }, 2000)
        }).catch((err) => {
          Indicator.close()
          this.modal.loading = false

          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

          throw new Error(`Error send message`)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .im_editable {
    text-align: left;
    word-break: break-all;
    height: 44px;
    background-color: #ffffff;
    border: solid 1px #cbd0d8 !important;
    color: #282a36;
    font-size: 14px;
    margin: 0;
    box-sizing: border-box;
    min-height: 100px;
    line-height: 18px;
    padding: 12px 16px;
  }
</style>
