import Vue from 'vue'
import Inputmask from 'inputmask'

const directive = {
  bind (el, binding) {
    new Inputmask(binding.value).mask(el)
  },

  unbind (el) {
    // el.inputmask.remove()
  }
}

Vue.directive('mask-static', directive)

export { directive as default }
