<template>
  <modal class="modal-center modal_write-all" v-model="modal.value" @hide="_handleCloseModal()" :header="false" :footer="false">
    <template v-if="(modal.success === false)">
      <div class="d-row justify_between align_center">
        <div class="heading heading_h4 mb_0">Жалоба от модератора для AmoCRM</div>
      </div>
      <div class="d-row mt_6">
        <div class="d-column">
          <div class="d-textarea">
            <textarea name="message" class="d-textarea__field" id="issues-area"
              placeholder="Начните писать сообщение"
              v-model="fields.comment">
            </textarea>
          </div>
        </div>
      </div>

      <div class="d-row justify_end mt_6">
        <lm-loader v-if="(modal.loading === true)"></lm-loader>
        <template v-if="(modal.loading === false)">
          <button class="d-btn d-btn_primary" @click="_handleClickSendButton">Отправить</button>
        </template>
      </div>
    </template>
    <template v-if="(modal.success === true)">
      <div class="headgin heading_h5">Сообщение отправлено</div>
    </template>
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
      _handleCloseModal () {
        this.modal.value = false
        this._handleClearModal()
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

        this.modal.loading = true

        this.$api.post(`api/admin/v1/boards/castings/${castingId}/issues`, { comment }).then(response => {
          let { data } = response
          this.modal.success = true

          this.modal.loading = false

          setTimeout(() => {
            this.$nextTick(() => {
              this._handleCloseModal()
            })
          }, 2000)
        }).catch((err) => {

          this.modal.loading = false
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

          throw new Error(`Error send message`)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
