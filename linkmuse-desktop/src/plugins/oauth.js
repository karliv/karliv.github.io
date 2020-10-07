import OAuth from '@modules/oauth'

export default {
  install (Vue, options) {
    Vue.prototype.$oauth = OAuth
  }
}
