import Vue from 'vue'
import Inputmask from 'inputmask/dist/inputmask/inputmask.numeric.extensions'

const directive = {
  bind (el, binding) {
    new Inputmask({
      alias: 'decimal',
      ...binding.value
    }).mask(el)
  },

  unbind (el) {
    // el.inputmask.remove()
  }
}

Vue.directive('mask-decimal', directive)

export { directive as default }
