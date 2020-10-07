import Auth from '@modules/auth'

export default {
  install (Vue, options) {
    const auth = new Auth()
    Vue.prototype.$auth = auth
  }
}
