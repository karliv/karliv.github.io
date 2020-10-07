import Vue from 'vue'
import 'inputmask/dist/inputmask/phone-codes/phone.js'
import Inputmask from 'inputmask/dist/inputmask/inputmask.phone.extensions.js'

const directive = {
  bind (el, binding) {
    new Inputmask({
      alias: 'phone'
    }).mask(el)
  },

  unbind (el) {
    // el.inputmask('remove')
  }
}

Vue.directive('mask-phone', directive)

export { directive as default }
