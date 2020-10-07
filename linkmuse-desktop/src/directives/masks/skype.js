import Vue from 'vue'
import Inputmask from 'inputmask'

const directive = {
  bind (el, binding) {
    new Inputmask({
      regex: '[a-zA-Z][a-zA-Z0-9\.,\-_]{5,31}'
    }).mask(el)
  },

  unbind (el) {
    // el.inputmask.remove()
  }
}

Vue.directive('mask-skype', directive)

export { directive as default }
