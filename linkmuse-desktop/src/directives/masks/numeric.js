import Vue from 'vue'
import Inputmask from 'inputmask/dist/inputmask/inputmask.numeric.extensions'

const directive = {
  bind (el, binding) {
    new Inputmask({
      alias: 'numeric'
    }).mask(el)
  },

  unbind (el) {
    // el.inputmask.remove()
  }
}

Vue.directive('mask-numeric', directive)

export { directive as default }
