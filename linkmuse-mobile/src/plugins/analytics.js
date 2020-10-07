import Vue from 'vue'
import { isNative } from '@utils'
import VueAnalytics from 'vue-analytics'

const isBrowser = process.browser
const isProd = process.env.NODE_ENV === 'production'
const isStaging = process.env.NODE_ENV === 'staging'

export function createAnalytic (router) {
  if (!isBrowser) return

  const id = process.env.ANALYTICS_ID

  Vue.use(VueAnalytics, {
    id,
    router,
    batch: {
      amount: 2,
      delay: 500,
      enabled: (isProd || isStaging)
    }
  })
}
