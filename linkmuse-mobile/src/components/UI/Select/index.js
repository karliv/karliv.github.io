import LmSelect from './Select.vue'
import { generateUUID } from '@utils'

import LmPopupMultiple from './Popup/PopupMultiple.vue'

export default {
  install (Vue, options = {}) {
    Vue.component('lm-select', LmSelect)

    let instancePopupMultiple = null
    const ConstructorPopupMultiple = Vue.extend(LmPopupMultiple)

    Vue.prototype.$selectMultiple = (config) => {
      return new Promise((resolve, reject) => {
        if (instancePopupMultiple) return

        instancePopupMultiple = new ConstructorPopupMultiple({
          el: document.createElement('div'),
          data () {
            return {
              value: config.value || [],
              modal: false,
              name: generateUUID(),
              title: config.title || 'Выберите',
              options: config.options || []
            }
          },
          mounted () {
            if (this.options.length === 0) {
              this.$nextTick(() => {
                this._processingClose()
                throw new Error('Empty options')
              })
            } else this.modal = true
          },
          methods: {
            _processingClose () {
              this.value = []
              this.modal = false
              if (instancePopupMultiple) {
                instancePopupMultiple.$el.remove()
                instancePopupMultiple = null
              }
            },
            _handleInputMtPopup (value) {
              if (value === false) {
                this._handleClickCancel()
              }
            },
            _handleClickDone () {
              resolve(this.value)
              this._processingClose()
            },
            _handleClickCancel () {
              reject && reject()
              this._processingClose()
            }
          }
        })

        document.body.appendChild(instancePopupMultiple.$el)
      })
    }
  }
}
