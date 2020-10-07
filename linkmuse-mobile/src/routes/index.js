import Qs from 'qs'
import Vue from 'vue'
import VueMeta from 'vue-meta'
import VueRouter from 'vue-router'
import { createRoutes } from './routes.js'

Vue.use(VueMeta)
Vue.use(VueRouter)

const routes = createRoutes()

export function createRouter () {
  const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'router-link-active',
    linkExactActiveClass: 'active',
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else return { x: 0, y: 0 }
    },
    parseQuery (query) {
      return Qs.parse(query, { allowDots: true, arrayFormat: 'brackets' })
    },
    stringifyQuery (query) {
      const result = Qs.stringify(query, { allowDots: true, arrayFormat: 'brackets' })
      return result ? ('?' + result) : ''
    }
  })

  return router
}
