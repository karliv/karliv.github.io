import Vue from 'vue'
import Inputmask from 'inputmask'

const directive = {
  bind (el, binding) {
    new Inputmask({
      mask: '9999 9999 9999 9999',
      placeholder: ' '
    }).mask(el)
  },

  unbind (el) {
    // el.inputmask.remove()
  }
}

Vue.directive('mask-card-number', directive)

export { directive as default }
