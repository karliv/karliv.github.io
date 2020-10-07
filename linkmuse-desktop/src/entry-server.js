import Vue from 'vue'
import { createApp } from './app'
import Cookies from './lib/cookies.js'
import { api } from '~api'

const AUTH_KEY = 'id_token'
const REFRESH_KEY = 'refresh_token'
const ROLE_KEY = 'role'
const USER_KEY = 'auth_user'

export default context => {
  return new Promise((resolve, reject) => {
    const lang = context.lang || 'ru'
    const { app, router, store } = createApp(context)
    const meta = app.$meta()

    Vue.use({
      install: (Vue) => {
        Vue.prototype.$cookies = new Cookies(context.cookies || '')
      }
    })

    Vue.use({
      install: (Vue) => {
        Vue.prototype.$locale = lang
      }
    })

    store.dispatch('auth/setLocale', lang)

    // SET AUTH DATA
    const TOKEN = context.cookies[AUTH_KEY]
    const REFRESH_TOKEN = context.cookies[REFRESH_KEY]
    const ROLE = context.cookies[ROLE_KEY]
    const USER = context.cookies[USER_KEY]

    if (ROLE) {
      store.dispatch('auth/setRole', ROLE)
    }

    if (TOKEN && REFRESH_TOKEN) {
      store.dispatch('auth/setToken', {
        accessToken: TOKEN,
        refreshToken: REFRESH_TOKEN
      }).then(res => {
        if (USER) {
          store.dispatch('auth/setUser', JSON.parse(USER)).then(res => {
            router.push(context.url)
          })
        } else router.push(context.url)
      })
    } else router.push(context.url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()

      if (!matchedComponents.length) return reject({ code: 404 })

      store.$api = store.state.$api = api(lang, context)

      Promise.all(matchedComponents.map(component => {
        return (component.asyncData && component.asyncData({
          store,
          route: router.currentRoute,
          cookies: context.cookies
        }))
      })).then(() => {
        context.state = store.state
        context.meta = meta
        resolve(app)
      }).catch((err) => {
        try {
          const { code, message, url } = err
          reject && reject({ code, message, url })
        } catch (e) {
          reject && reject({ code: 500, message: 'Internal Server Error' })
        }
      })
    }, reject)
  })
}
