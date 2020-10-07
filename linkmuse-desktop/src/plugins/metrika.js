import Vue from 'vue'
import VueYandexMetrika from 'vue-yandex-metrika'

const isBrowser = process.browser
const isProd = process.env.NODE_ENV === 'production'
const isStaging = process.env.NODE_ENV === 'staging'

export function createMetrika (router) {
  if (!isBrowser) return

  const id = process.env.YANDEX_METRIKA_ID

  Vue.use(VueYandexMetrika, {
    id,
    router,
    debug: false,
    env: (process.env.NODE_ENV),
    options: {
      clickmap: true,
      webvisor: true,
      trackHash: true,
      trackLinks: true,
      accurateTrackBounce: true
    }
  })
}
