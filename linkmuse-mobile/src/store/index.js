import Vue from 'vue'
import Vuex from 'vuex'

import gtm from './gtm'
import auth from './auth'
import user from './user'
import page from './page'
import board from './board'
import folder from './folder'
import partner from './partner'
import article from './article'
import message from './message'
import referral from './referral'
import interview from './interview'
import { isBrowser } from '../utils'
import cinemarket from './cinemarket'
import certifying from './certifying'
import unsubscribe from './unsubscribe'
import notification from './notification'
import { mobileApp } from '../plugins/store/mobileApp'

Vue.use(Vuex)

let plugins = []

if (isBrowser) {
  plugins.push(mobileApp)
}

export function createStore () {
  return new Vuex.Store({
    modules: {
      gtm,
      auth,
      user,
      page,
      board,
      folder,
      partner,
      article,
      message,
      referral,
      interview,
      cinemarket,
      certifying,
      unsubscribe,
      notification
    },
    plugins
  })
}
