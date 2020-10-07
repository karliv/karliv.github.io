import Vue from 'vue'
import { mapGetters } from 'vuex'

import filters from './filters'
import directives from './directives'
import '@components/Global/_autoload.js'

import gtm from '@plugins/gtm.js'
import seo from '@plugins/seo.js'
import auth from '@plugins/auth.js'
import oauth from '@plugins/oauth.js'
import axios from '@plugins/axios.js'
import lodash from '@plugins/lodash.js'
import pusher from '@plugins/pusher.js'
import bugsnag from '@plugins/bugsnag.js'
// import intercom from '@plugins/intercom.js'
import validate from '@plugins/validate.js'
import GeoCoder from '@plugins/geocoder.js'
import scrollspy from '@plugins/scrollspy.js'
import appVersion from '@plugins/appVersion.js'
import nativeScript from '@plugins/nativeScript.js'

import moment from 'moment'
import IdleVue from 'idle-vue'
import VueMoment from 'vue-moment'
import VueCarousel from 'vue-carousel'
import VueTouch from 'vue-touch-hotfix' // Hotfix for vue-touch to work in SSR until Hammer.js PR is merged
import { sync } from 'vuex-router-sync'
import * as VueDeepSet from 'vue-deepset'
import VueClipboard from 'vue-clipboard2'
import AsyncComputed from 'vue-async-computed'
import VueLocalStorage from 'vue-localstorage'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

import VueMedia from '@components/UI/Mediabox/index.js'
import VueSelect from '@components/UI/Select/index.js'
import VueConfirm from '@components/UI/Confirm/index.js'
import VueIntersect from '@components/UI/Intersect/index.js'
import VueConfirmResponse from '@components/UI/ConfirmResponse/index.js'

import { InfiniteScroll, Spinner, Toast } from 'mint-ui'
import 'mint-ui/lib/style.css' // Mint UI use base style
import LikeElement from '@components/Global/Like/Element.vue'
import EmojiInputArea from '@components/UI/Emoji/Area/Index.vue'
import LikeCustomElement from '@components/Global/Like/CustomElement.vue'

/** ----- */
import App from './App.vue'

import { has } from '@utils'
import { createI18n } from './i18n'
import { createStore } from './store'
import { createRouter } from './routes'
import { createModalRouter } from './routes/modals'
import { createMetrika } from '@plugins/metrika.js'
import { createAnalytic } from '@plugins/analytics.js'
import updateMix from '@modules/AppVersion/mixins/update.js'

const isBrowser = process.browser
const VueScrollTo = require('vue-scrollto')
const SocialSharing = require('vue-social-sharing')

require('moment/locale/ru')
require('pusher-js')

Vue.use(gtm)
Vue.use(seo)
Vue.use(auth)
Vue.use(oauth)
Vue.use(axios)
Vue.use(lodash)
Vue.use(pusher)
Vue.use(bugsnag)
Vue.use(filters)
// Vue.use(intercom)
Vue.use(validate)
Vue.use(scrollspy)
Vue.use(directives)
Vue.use(VueDeepSet)
Vue.use(appVersion)
Vue.use(VueCarousel)
Vue.use(VueScrollTo)
Vue.use(VueClipboard)
Vue.use(nativeScript)
Vue.use(AsyncComputed)
Vue.use(InfiniteScroll)
Vue.use(VueLocalStorage)
Vue.use(VueMoment, { moment })
Vue.use(VueTouch, { name: 'v-touch' })
Vue.component('emoji-input-area', EmojiInputArea)
Vue.use(GeoCoder, { googleMapsApiKey: 'AIzaSyCF42BNUUy-gOBKT5jCa9nZvjMDjm0I5Ss' })

Vue.use(VueGoogleMaps, {
  installComponents: false,
  load: {
    key: process.env.GOOGLE_MAPS_KEY,
    libraries: 'places'
  }
})

/** ---- */

if (isBrowser) {
  require('./directives/masks')

  Vue.use(IdleVue, {
    eventEmitter: new Vue(),
    idleTime: 30000
  })
}

Vue.directive('media', (el, binding) => {
  let { item, key, fallback } = binding.value

  el.onerror = () => {
    if (has(item, key)) {
      let value = item['key']

      if (value !== fallback) {
        return Vue.set(item, key, fallback)
      }
    }

    el.onerror = null
  }
})

Vue.use(VueMedia)
Vue.use(VueSelect)
Vue.use(VueConfirm)
Vue.use(SocialSharing)
Vue.use(VueConfirmResponse)
Vue.component(Spinner.name, Spinner)
Vue.component('like-el', LikeElement)
Vue.component('intersect', VueIntersect)
Vue.component('no-ssr', require('vue-no-ssr'))
Vue.component('like-custom-el', LikeCustomElement)

export function createApp (context) {
  const store = createStore()
  const router = createRouter()
  const modalRouter = createModalRouter()
  const i18n = createI18n(context, router)

  const metrika = createMetrika(router)
  const analytic = createAnalytic(router)

  sync(store, router)

  const app = new Vue({
    router,
    store,
    i18n,
    context,
    modalRouter,
    render: h => h(App),
    mixins: [updateMix],
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser',
        isAuthorized: 'auth/isAuthorized'
      })
    },
    beforeMount () {
      this.$moment.locale(this.$locale)
      this.$validator.localize(this.$locale)
    },
    mounted () {
      if (this.isAuthorized) {
        let { id, name } = this.user
        this._setIdentifyUser({ id, name })

        this.$store.dispatch('auth/getUserByAPI').then((user) => {
          let { id, name } = this.user
          this._setIdentifyUser({ id, name })
        })
      }
    },
    methods: {
      _setIdentifyUser ({ id, name }) {
        this.$ga.set({ userId: id })
        this.$bugsnag.user = { id, name }
      },
      reachGoalGtm (eventObject) {
        if (typeof dataLayer !== 'undefined') {
          dataLayer.push(eventObject)
          console.log('Цель GTM достигнута.', eventObject)
        }
      }

    }
  })

  global.application = app

  return { app, router, store }
}
