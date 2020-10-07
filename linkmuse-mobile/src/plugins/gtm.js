import { isNative } from '@utils'

const VueGtm = require('vue-gtm')

const isBrowser = process.browser
const isProd = process.env.NODE_ENV === 'production'
const isStaging = process.env.NODE_ENV === 'staging'

export default {
  install (Vue, options) {
    if (!isBrowser) return

    const gtmId = process.env.GTM_ID

    Vue.use(VueGtm.default, {
      id: gtmId,
      debug: false,
      enabled: (isProd || isStaging),
      ignoredViews: ['auth.social.callback']
    })
  }
}
