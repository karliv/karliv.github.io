import Vue from 'vue'
import Inputmask from 'inputmask'

const directive = {
  bind (el, binding) {
    new Inputmask({
      mask: 'y',
      alias: 'dd.mm.yyyy',
      placeholder: ''
    }).mask(el)
  },

  unbind (el) {
    // el.inputmask.remove()
  }
}

Vue.directive('mask-date-year', directive)

export { directive as default }
