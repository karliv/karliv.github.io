import Vue from 'vue'
import Inputmask from 'inputmask'

const directive = {
  bind (el, binding) {
    new Inputmask({
      mask: '1',
      alias: 'mm.dd.yyyy',
      placeholder: ''
    }).mask(el)
  },

  unbind (el) {
    // el.inputmask.remove()
  }
}

Vue.directive('mask-date-month', directive)

export { directive as default }
