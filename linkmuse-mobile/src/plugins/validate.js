import moment from 'moment'
import ru from '@strings/validator/ru'
import en from '@strings/validator/en'
import { isValidNumber } from 'libphonenumber-js'
import VeeValidate, { Validator } from 'vee-validate'
import VeeValidateLaravel from './vee-validate-laravel/index.js'

export default {
  install (Vue, options) {
    Vue.use(VeeValidate, {
      locale: 'en',
      events: 'blur',
      errorBagName: 'verrors',
      fieldsBagName: 'vfields',
      dictionary: { ru, en }
    })

    Vue.use(VeeValidateLaravel)

    Validator.extend('phone', (value) => {
      return isValidNumber(value)
    })

    Validator.extend('betweenDate', (value, { min, max }) => {
      return moment(min, 'DD.MM.YYYY').unix() <= moment(value, 'DD.MM.YYYY').unix() <= moment(max, 'DD.MM.YYYY').unix()
    })

    Validator.extend('dateBefore',  (value, max) => {
      return moment(value, 'DD.MM.YYYY').unix() <= moment(max, 'DD.MM.YYYY').unix()
    })

    Validator.extend('dateBeforeRef', (value, [otherValue]) => {
      if (!otherValue) return false
      return moment(value, 'DD.MM.YYYY').unix() <= moment(otherValue, 'DD.MM.YYYY').unix()
    }, { hasTarget: true })

    Validator.extend('dateAfter', (value, min) => {
      return moment(value, 'DD.MM.YYYY').unix() >= moment(min, 'DD.MM.YYYY').unix()
    })

    Validator.extend('dateAfterRef', (value, [otherValue]) => {
      if (!otherValue) return false
      return moment(value, 'DD.MM.YYYY').unix() >= moment(otherValue, 'DD.MM.YYYY').unix()
    }, { hasTarget: true })

    Validator.extend('minTarget', (value, [otherValue]) => {
      return Number(value) >= Number(otherValue)
    }, { hasTarget: true })
  }
}
