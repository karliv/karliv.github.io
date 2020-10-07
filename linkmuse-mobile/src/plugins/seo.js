import SEO from '@modules/SEO'

export default {
  install (Vue, options) {
    Vue.prototype.$seo = SEO
  }
}
