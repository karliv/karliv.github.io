import appVersion from '@modules/AppVersion'

export default {
  install (Vue, options) {
    Vue.prototype.$appVersion = appVersion
  }
}
