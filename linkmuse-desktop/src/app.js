import Vue from 'vue'
import { mapGetters } from 'vuex'

import filters from './filters'
import directives from './directives'
import '@components/Global/_globals.js'

import gtm from '@plugins/gtm.js'
import seo from '@plugins/seo.js'
import auth from '@plugins/auth.js'
import oauth from '@plugins/oauth.js'
import axios from '@plugins/axios.js'
import lodash from '@plugins/lodash.js'
import pusher from '@plugins/pusher.js'
import bugsnag from '@plugins/bugsnag.js'
// import intercom from '@plugins/intercom.js'
import firebase from '@plugins/firebase.js'
import validate from '@plugins/validate.js'
import GeoCoder from '@plugins/geocoder.js'
import infiniteScroll from '@plugins/infiniteScroll.js'

import moment from 'moment'
import VueMoment from 'vue-moment'
import { sync } from 'vuex-router-sync'
import kebabCase from 'lodash/kebabCase'
import * as VueDeepSet from 'vue-deepset'
import VueClipboard from 'vue-clipboard2'

// import VueCarousel from 'vue-carousel'
import Loading from 'vue-loading-overlay'
import vClickOutside from 'v-click-outside'
import AsyncComputed from 'vue-async-computed'
import VueLocalStorage from 'vue-localstorage'
import { addClass } from 'uiv/src/utils/domUtils'
import 'vue-loading-overlay/dist/vue-loading.css'
import InfiniteLoading from 'vue-infinite-loading'
import TextareaAutosize from 'vue-textarea-autosize'
import Notifications from 'vue-notification/dist/ssr.js'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

import EmojiInputArea from '@components/UI/Emoji/Area/Index.vue'
import EmojiInputPicker from '@components/UI/Emoji/Picker/Index.vue'
import LmLoader from '@components/Global/autoload/UI/Loader/LmLoader.vue'

import CommentList from '@components/Global/Comment/List.vue'
import LikeElement from '@components/Global/Like/Element.vue'
import LikeCustomElement from '@components/Global/Like/CustomElement.vue'
import LikeModalUsers from '@components/Global/Like/Modals/Users.vue'

import VueMedia from '@components/UI/Mediabox/index.js'
import VueConfirm from '@components/UI/Confirm/index.js'
import VueIntersect from '@components/UI/Intersect/index.js'
import VueConfirmResponse from '@components/UI/ConfirmResponse/index.js'

import Scrollbar from './mixins/scrollbar.js'

import { getOS, has } from '@utils'

/** ------ */

import App from './App.vue'

import { createI18n } from './i18n'
import { createStore } from './store'
import { createRouter } from './routes'
import { createModalRouter } from './routes/modals'
import { createMetrika } from '@plugins/metrika.js'
import { createAnalytic } from '@plugins/analytics.js'

// const BASE_URL = process.env.BASE_URL
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
Vue.use(Loading)
Vue.use(validate)
Vue.use(firebase)
Vue.use(directives)
Vue.use(VueDeepSet)
// Vue.use(VueCarousel)
Vue.use(VueScrollTo)
Vue.use(VueClipboard)
Vue.use(Notifications)
Vue.use(AsyncComputed)
Vue.use(vClickOutside)
Vue.use(SocialSharing)
Vue.use(infiniteScroll)
Vue.use(VueLocalStorage)
Vue.use(TextareaAutosize)
Vue.use(InfiniteLoading, { slots: { noMore: '', noResults: '', spinner: LmLoader } })
Vue.use(VueMoment, { moment })
Vue.use(GeoCoder, { googleMapsApiKey: process.env.GOOGLE_MAPS_KEY })

if (isBrowser) require('./directives/masks')

Vue.use(VueGoogleMaps, {
  installComponents: false,
  load: {
    key: process.env.GOOGLE_MAPS_KEY,
    libraries: 'places'
  }
})

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
Vue.use(VueConfirm)
Vue.use(VueConfirmResponse)
Vue.component('like-el', LikeElement)
Vue.component('intersect', VueIntersect)
Vue.component('comment-list', CommentList)
Vue.component('like-modal-users', LikeModalUsers)
Vue.component('emoji-input-area', EmojiInputArea)
Vue.component('like-custom-el', LikeCustomElement)
Vue.component('no-ssr', require('vue-no-ssr'))
Vue.component('emoji-input-picker', EmojiInputPicker)

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
    mixins: [Scrollbar],
    computed: {
      ...mapGetters({
        isAuthorized: 'auth/isAuthorized'
      })
    },
    created () {
      const os = getOS()
      if (os && typeof document !== 'undefined') {
        addClass(document.body, kebabCase(os))
      }
    },
    beforeMount () {
      this.$moment.locale(this.$locale)
      this.$validator.localize(this.$locale)
    },
    mounted () {
      if (this.isAuthorized) {
        this.$store.dispatch('auth/getUserByAPI').then((user) => {
          let { id } = user
          this.$ga.set({ userId: id })
        })
      }
    },
    methods: {
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
