import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import user from './user'
import page from './page'
import audio from './audio'
import board from './board'
import folder from './folder'
import message from './message'
import partner from './partner'
import article from './article'
import referral from './referral'
import certifying from './certifying'
import unsubscribe from './unsubscribe'
import notification from './notification'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    modules: {
      auth,
      user,
      page,
      audio,
      board,
      folder,
      message,
      partner,
      article,
      referral,
      certifying,
      unsubscribe,
      notification
    }
  })
}
