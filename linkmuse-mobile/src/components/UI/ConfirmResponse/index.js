import LmPopup from './popup.vue'

export default {
  install (Vue, options = {}) {
    const constructor = Vue.extend(LmPopup)
    let instance = null

    Vue.prototype.$confirmResponse = ({ title, message, cancelTxt, confirmTxt }) => {
      return new Promise((resolve, reject) => {
        if (typeof document === 'undefined') return false
        if (instance) return false

        instance = new constructor({
          el: document.createElement('div'),
          data () {
            return {
              modal: false,
              cancelTxt: cancelTxt || options.cancelTxt || 'Отмена',
              title: title || options.title || 'Подтвердите действие',
              confirmTxt: confirmTxt || options.confirmTxt || 'Подтвердить',
              message: message || options.message || null
            }
          },
          mounted () {
            this.$nextTick(() => {
              this.modal = true
            })
          },
          methods: {
            _handleClickDone () {
              resolve && resolve(this.modal)
              this._processingClose()
            },
            _handleClickCancel () {
              reject && reject(this.modal)
              this._processingClose()
            },
            _processingClose () {
              this.modal = false
              instance.$el.remove()
              instance = null
            },
            _handleInput (value) {
              if (!value && instance) {
                this._handleClickCancel()
              }
            }
          }
        })

        document.body.appendChild(instance.$el)
      })
    }
  }
}
