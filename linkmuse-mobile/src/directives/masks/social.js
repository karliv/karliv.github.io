import Vue from 'vue'
import Inputmask from 'inputmask'

const directive = {
  bind (el, binding) {
    new Inputmask({ regex: "[a-zA-Z0-9_.-\/]{1,50}" }).mask(el)
  },

  unbind (el) {
    // el.inputmask('remove')
  }
}

Vue.directive('mask-social', directive)

export { directive as default }
