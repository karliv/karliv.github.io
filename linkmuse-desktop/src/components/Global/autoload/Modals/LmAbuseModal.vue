<template>
  <modal class="modal-center modal-abuse" v-model="modal.value" @hide="_handleCloseModal()" :header="false" :footer="false">
    <div class="modal-abuse-content">

      <template v-if="modal.state">
        <template v-if="modal.state.is.type">
          <div class="title">Выберите причину</div>

          <lm-loader v-if="modal.type.loading" :style="{ marginTop: '20px' }"></lm-loader>

          <div class="lm-radio-buttons">
            <li v-for="item in modal.type.data" :key="item.slug">
              <input name="abuse" type="radio" :id="`abuse_${item.slug}`" :value="item.slug"
                     v-validate="'required'"
                     v-model="modal.fields.abuse_type">
              <label :for="`abuse_${item.slug}`">{{ item.name }}</label>
            </li>
          </div>

          <div class="lm-abuse-actions">
            <a @click="_handleClickNextState" href="javascript:void(0)"
               :class="['d-btn ', 'd-btn_primary', 'w_100', { 'disabled' : (!modal.fields.abuse_type) }]">Далее</a>
          </div>
        </template>
        <template v-if="modal.state.is.comment">
          <div class="title">Добавьте комментарий<span v-if="type">{{ type }}</span></div>
          <div class="lm-input-wrap">
                        <textarea placeholder="Опишите возникшую ситуацию, это поможет модератору лучше понять ваш конфликт"
                          id="comment_abuse"
                          name="comment_abuse"
                          v-validate="'required|max:256'"
                          v-model="modal.fields.comment_abuse"
                          :class="[{ 'error': (verrors.has('comment_abuse')) }, 'lm-input']"></textarea>
            <div class="lm-m-abuse--attach">
              <lm-dropzone :label="''" :multiple="false" @onUpload="_handleAttach"
                           @onRemove="_handleAttachRemove"></lm-dropzone>
            </div>
          </div>
          <div class="lm-abuse-actions">
            <template v-if="(modal.loading === false)">
              <a href="javascript:void(0)" class="lm-back-button" @click="_handleClickBackState"></a>
              <a href="javascript:void(0)" class="d-btn d-btn_primary middle" @click="_handleClickStoreAbuse">Пожаловатся</a>
            </template>

            <lm-loader v-if="modal.loading" :style="{ marginTop: '14px' }"></lm-loader>
          </div>
        </template>
      </template>
    </div>
  </modal>
</template>

<script>
  import { StateMachine, StateHelper } from 'state-machine'
  import DropZone from '@components/UI/Dropzone/Custom/Index.vue'

  export default {
    components: { 'lm-dropzone': DropZone },
    data () {
      return {
        modal: {
          state: null,
          value: false,
          loading: false,
          fields: {
            id: null,
            type: null,
            abuse_type: null,
            comment_abuse: null,
            screenshot: null
          },
          type: {
            data: null,
            slug: null,
            loading: false
          }
        }
      }
    },
    computed: {
      type () {
        let index = this.modal.type.data.map(item => item.slug).indexOf(this.modal.fields.abuse_type)
        if (index > -1) {
          return this.modal.type.data[index]['name']
        } else return false
      }
    },
    created () {
      this.fsm = StateMachine.create({
        transitions: [
          'next :  type > comment',
          'back :  type < comment',
        ],
        handlers: {
          'type@next': this._handleSelectedType,
        }
      })

      this.modal.state = StateHelper.object(this.fsm).data
    },
    mounted () {
      this.$root.$on('open-modal-abuse-create', ({ id, type = null }) => {
        if (!id) return false;

        Object.assign(this.modal.fields, { id, type })

        this.modal.type.slug = type

        this.modal.value = true
        this._fetchAbusesTypes()
      })
    },
    methods: {
      _handleAttach (item, file, progress, success) {
        this.modal.fields.screenshot = file
        success(item.uid, { id: 1, path: item.paths['original'] })
      },
      _handleAttachRemove (item, remove) {
        this.modal.fields.screenshot = null
        remove(item.uid)
      },
      _fetchAbusesTypes () {
        return new Promise((resolve, reject) => {
          this.modal.type.loading = true

          this.$api.get('/api/v1/abuse/types', { slug: this.modal.type.slug }).then((response) => {
            const { data: { data: { values } } } = response

            this.modal.type.data = values
            this.modal.type.loading = false
            resolve()
          }, (response) => {
            this.modal.type.loading = false
            reject && reject()
            throw new Error("Error get type abuses");
          })
        })
      },
      _handleClickStoreAbuse () {
        this._handleValidateFields().then(() => {
          this.modal.loading = true

          let data = new FormData
          Object.keys(this.modal.fields).forEach((key) => (this.modal.fields[key] != null) && data.append(key, this.modal.fields[key]))

          this.$api.post('/api/v1/abuse', data).then((response) => {
            this.modal.loading = false
            this._handleCloseModal()
          }, (response) => {
            this.modal.loading = false
            throw new Error("Error store abuse");
          });
        })
      },
      _handleClickNextState () {
        this.fsm.do('next')
      },
      _handleClickBackState () {
        this.fsm.do('back')
      },
      _handleSelectedType (event, fsm) {
        fsm.pause()

        this._handleValidateFields().then(() => {
          fsm.resume()
        }).catch(() => fsm.cancel())
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
      _handleCloseModal () {
        this.modal.value = false

        this.$nextTick(() => {
          this.fsm.reset()

          this.modal.loading = false

          this.modal.fields = {
            id: null,
            type: null,
            abuse_type: null,
            comment_abuse: null
          }
          this.modal.type = {
            data: null,
            slug: null,
            loading: false
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
