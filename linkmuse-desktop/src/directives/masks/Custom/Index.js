import Vue from 'vue'
import { maskPhone, maskPhoneEmail } from './directive'

Vue.directive('mask-phone', { bind: maskPhone })
Vue.directive('mask-phone-email', { bind: maskPhoneEmail })

export { maskPhone, maskPhoneEmail }
