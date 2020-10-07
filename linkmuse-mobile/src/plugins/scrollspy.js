let scrollspy

try {
  scrollspy = require('vue2-scrollspy').default // Client-side
} catch (err) {
  scrollspy = {} // SSR, pass empty stub
}

export default {
  install (Vue, options) {
    Vue.use(scrollspy, options)
  }
}
