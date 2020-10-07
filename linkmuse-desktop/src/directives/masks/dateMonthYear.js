import Vue from 'vue'
import Inputmask from 'inputmask'

const directive = {
  bind (el, binding) {
    new Inputmask({
      mask: '1.y',
      separator: '.',
      alias: 'yyyy/mm/dd',
      placeholder: 'мм.гггг'
    }).mask(el)
  },

  unbind (el) {
    // el.inputmask.remove()
  }
}

Vue.directive('mask-date-month-year', directive)

export { directive as default }
