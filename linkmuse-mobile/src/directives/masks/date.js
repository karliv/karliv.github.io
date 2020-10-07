import Vue from 'vue'
import Inputmask from 'inputmask'

const directive = {
  bind (el, binding) {
    new Inputmask({
      'alias': 'dd.mm.yyyy',
      'placeholder': 'дд.мм.гггг'
    }).mask(el)
  },

  unbind (el) {
    el.inputmask.remove()
  }
}

Vue.directive('mask-date', directive)

export { directive as default }
