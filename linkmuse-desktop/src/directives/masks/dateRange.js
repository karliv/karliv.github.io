import Vue from 'vue'
import Inputmask from 'inputmask'

const directive = {
  bind (el, binding) {
    new Inputmask({
      mask: '1.2.y-1.2.y',
      separator: '.',
      alias: 'dd.mm.yyyy',
      placeholder: '_'
    }).mask(el)
  },

  unbind (el) {
    // el.inputmask.remove()
  }
}

Vue.directive('mask-date-range', directive)

export { directive as default }
