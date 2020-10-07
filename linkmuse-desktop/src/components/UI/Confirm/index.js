
import confirmTemplate from './template.vue'

export default {
  install (Vue, options = {}) {
    let ConfirmConstructor = Vue.extend(confirmTemplate)
    let confirmInstance = null

    Vue.prototype.$confirm = (config) => {
      return new Promise((resolve, reject) => {
        if (typeof document === 'undefined') return

        if (confirmInstance) return

        confirmInstance = new ConfirmConstructor({
          el: document.createElement('div'),
          data () {
            return {
              modal: false,
              cancelTxt: config.cancelTxt || options.cancelTxt || 'Отменить',
              title: config.title || options.title || 'Подтведите ваше действие',
              confirmTxt: config.confirmTxt || options.confirmTxt || 'Подтвердить',
              message: config.message || options.message || 'Вы уверены, что хотите это сделать?'
            }
          },
          mounted () {
            this.$nextTick(() => {
              this.modal = true
            })
          },
          methods: {
            _handleClickDone () {
              this.modal = false
              resolve(this.args)
            },
            _handleClickCancel () {
              this.modal = false
              reject && reject(this.args)
            },
            _handleOnHide () {
              confirmInstance.$el.remove()
              confirmInstance = null
            }
          }
        })

        document.body.appendChild(confirmInstance.$el)
      })
    }
  }
}
