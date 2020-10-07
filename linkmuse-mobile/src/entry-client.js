import Vue from 'vue'
import { api } from '~api'
import { has } from '@utils'
import './registerServiceWorker'
import { createApp } from './app'
import Cookies from './lib/cookies.js'
import ProgressBar from './components/UI/ProgressBar/Index.vue'

// client-specific bootstrapping logic...
const bar = Vue.prototype.$bar = new Vue(ProgressBar).$mount()
document.body.appendChild(bar.$el)

Vue.mixin({
  beforeRouteUpdate (to, from, next) {
    const asyncData = this.$options.asyncData

    if (asyncData) {
      asyncData({ store: this.$store, route: to })
        .then(next)
        .catch(next)
    } else {
      next()
    }
  }
})

Vue.use({
  install: (Vue) => {
    Vue.prototype.$cookies = new Cookies()
  }
})

const { app, router, store } = createApp()

let lang = store.state.auth.locale || 'ru'

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)

  lang = store.state.auth.locale || 'ru'
  store.$api = store.state.$api = api(lang)

  if (store.state.auth && store.state.auth.accessToken) {
    store.dispatch('auth/setToken', {
      accessToken: store.state.auth.accessToken,
      refreshToken: store.state.auth.refreshToken
    })
  } else store.dispatch('auth/destroyToken', { reload: false })
}

Vue.use({
  install: (Vue) => {
    Vue.prototype.$locale = lang
  }
})

router.onReady(() => {
  router.beforeResolve((to, from, next) => {
    const matchedComponents = router.getMatchedComponents(to)
    const prevMatchedComponents = router.getMatchedComponents(from)

    let diffed = false

    const activated = matchedComponents.filter((component, i) => {
      return diffed || (diffed = prevMatchedComponents[i] !== component)
    })

    if (!activated.length) return next()

    bar.start()

    Promise.all(activated.map(component => {
      if (component.asyncData) {
        return component.asyncData({ store, route: to })
      }
    })).then(() => {
      bar.finish()
      next()
    }).catch(next)
  })
  router.afterEach(() => {
    const force = app.$localStorage.get('app.update.force')

    if (force === 'true') {
      app.$root.forceReload()
    }
  })
  app.$mount('#app')
})
