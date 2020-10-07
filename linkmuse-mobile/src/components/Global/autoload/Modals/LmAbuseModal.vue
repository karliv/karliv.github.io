<template>
  <mt-popup class="lm-m-modal-wrap lm-m-abuse" v-model="modal.value" position="center" :modal="true" @input="_handleInputPopup">
    <template v-if="modal.state">
      <template v-if="modal.state.is.type">
        <div class="title">
          <strong>ВЫБЕРИТЕ ПРИЧИНУ</strong>
        </div>
        <div class="lm-radio-buttons">
          <li v-for="item in modal.type.data" :key="item.slug">
            <input name="abuse" type="radio" :id="`abuse_${item.slug}`" :value="item.slug"
                   v-validate="'required'"
                   v-model="modal.fields.abuse_type">
            <label :for="`abuse_${item.slug}`">{{ item.name }}</label>
          </li>
        </div>
        <div class="lm-m-abuse-actions">
          <a @click="_handleClickNextState" href="javascript:void(0)" :class="['lm-primary-button', 'middle', { 'disabled' : (!modal.fields.abuse_type) }]">Далее</a>
        </div>
      </template>
      <template v-if="modal.state.is.comment">
        <div class="title">
          <strong>Добавьте комментарий</strong>
          <span v-if="type">{{ type }}</span>
        </div>
        <div class="lm-input-wrap">
          <textarea placeholder="Опишите возникшую ситуацию, это поможет модератору лучше понять ваш конфликт"
                    id="comment_abuse"
                    name="comment_abuse"
                    v-validate="'required|max:256'"
                    v-model="modal.fields.comment_abuse"
                    :class="[{ 'error': (verrors.has('comment_abuse')) }, 'lm-input']">
          </textarea>
        </div>
        <div class="lm-m-abuse--attach">
          <lm-dropzone :label="''" :multiple="false" @onUpload="_handleAttach" @onRemove="_handleAttachRemove"></lm-dropzone>
        </div>
        <div class="lm-m-abuse-actions">
          <a href="javascript:void(0)" class="lm-back-button" @click="_handleClickBackState"></a>
          <a href="javascript:void(0)" class="lm-primary-button middle" @click="_handleClickStoreAbuse()">Пожаловатся</a>
        </div>
      </template>
    </template>
  </mt-popup>
</template>

<script>
  import { Popup } from 'mint-ui'
  import { Indicator, Toast } from 'mint-ui'
  import PopupMix from '@components/Mixins/Popup'
  import { StateMachine, StateHelper } from 'state-machine'
  import Dropzone from '@components/UI/Dropzone/Index.vue'

  export default {
    components: { 'mt-popup': Popup, 'lm-dropzone': Dropzone },
    mixins: [PopupMix],
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

        this._fetchAbusesTypes().then(() => {
          this.modal.value = true
        })
      });
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
          Indicator.open()

          this.$api.get('/api/v1/abuse/types', { slug: this.modal.type.slug }).then((response) => {
            const { data: { data: { values } } } = response
            this.modal.type.data = values;

            Indicator.close()

            resolve()
          }, (response) => {
            Indicator.close()

            Toast({
              message: 'Ошибка',
              iconClass: 'mintui mintui-field-error'
            })
            reject && reject()
            throw new Error("Error get type abuses");
          });
        })

      },
      _handleClickStoreAbuse () {
        this._handleValidateFields().then(() => {
          Indicator.open()

          let data = new FormData
          Object.keys(this.modal.fields).forEach((key) => (this.modal.fields[key] != null) && data.append(key, this.modal.fields[key]))

          this.$api.post('/api/v1/abuse', data).then((response) => {
            Indicator.close()

            Toast({
              message: 'Успешно',
              iconClass: 'mintui mintui-success'
            })

            this._handleClearModal()

          }, (response) => {
            Indicator.close()

            Toast({
              message: 'Ошибка',
              iconClass: 'mintui mintui-field-error'
            })
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
      _handleInputPopup (value) {
        if (value === false) {
          this._handleClearModal()
        }
      },
      _handleClearModal () {
        this.modal.value = false

        setTimeout(() => {
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

          this.fsm.reset()
        }, 500)
      }
    }
  }
</script>

<style scoped>

</style>
