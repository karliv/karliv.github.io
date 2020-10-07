import Vue from 'vue'
import Inputmask from 'inputmask'

Inputmask.extendDefinitions({
  Y: {
    validator: '\\d{2}',
    cardinality: 2,
    placeholder: ''
  }
})

const directive = {
  bind (el, binding) {
    new Inputmask({
      mask: 'Y'
    }).mask(el)
  },

  unbind (el) {
    // el.inputmask.remove()
  }
}

Vue.directive('mask-card-year', directive)

export { directive as default }
