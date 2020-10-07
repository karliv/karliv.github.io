import _ from 'lodash'
import Auth from '~auth'
import cookies from 'js-cookie'
import { expires } from '@utils'
const sha256 = require('js-sha256')

const auth = new Auth()

const intercomSetAuth = (data) => {
  window.intercomSettings = {
    app_id: process.env.APP_ID_INTERCOM,
    user_hash: sha256.hmac(process.env.HASH_INTERCOM, data.user_id.toString()),
    alignment: 'right',
    hide_default_launcher: false,
    ...data
  }
  window.Intercom('reattach_activator')
  window.Intercom('update', window.intercomSettings)
}

const carrotQuestIdentify = ({ id, name, avatar }) => {
  window.carrotquest.identify([
    // { op: 'update_or_create', key: 'href', value: href },
    { op: 'update_or_create', key: 'id', value: String(id) },
    { op: 'update_or_create', key: '$name', value: name },
    { op: 'update_or_create', key: '$avatar', value: avatar },
    { op: 'update_or_create', key: '$user_id', value: String(id) }
  ])
}

export const setToken = (vuex, { accessToken, refreshToken }) => {
  return new Promise((resolve, reject) => {
    const { commit } = vuex
    commit('auth/SET_TOKEN', { accessToken, refreshToken }, {
      root: true
    })
    resolve()
  })
}

export const setLocale = (vuex, locale) => {
  return new Promise((resolve, reject) => {
    const { commit } = vuex
    commit('auth/SET_LOCALE', locale, { root: true })
    cookies.set('locale', locale, { path: '/', expires })
    resolve()
  })
}

export function refreshAccessToken ({ commit, rootState: { $api } }) {
  return new Promise((resolve, reject) => {
    $api.post(`api/v1/auth/refresh`).then(response => {
      let { data } = response
      auth.storeSession(data)
      resolve(data)
    }).catch(err => {
      auth.removeSession()
      reject && reject(err)
      throw err
    })
  })
}

export function getUserByAPI ({ commit, rootState: { $api } }) {
  return new Promise((resolve, reject) => {
    $api.get(`api/v3/users/my`).then(response => {
      let { data: { data } } = response
      let { id, name, avatar: { '183x183': avatar } } = data

      commit('SET_USER', data)

      let user = _.omit(data, [ 'aboutMe' ])
      cookies.set('auth_user', JSON.stringify(user), { path: '/', expires })

      resolve(data)
    }).catch(err => {
      commit('SET_USER', false)
      reject && reject(err)
      throw err
    })
  })
}

export function setUser (vuex, user) {
  return new Promise((resolve, reject) => {
    const { commit } = vuex
    commit('auth/SET_USER', user, {
      root: true
    })
    resolve()
  })
}

export function setUserField (vuex, { key, value }) {
  return new Promise((resolve, reject) => {
    const { commit } = vuex
    commit('auth/SET_USER_FIELD', { key, value }, {
      root: true
    })
    resolve()
  })
}

export function setRole (vuex, role) {
  return new Promise((resolve, reject) => {
    const { commit } = vuex
    commit('auth/SET_ROLE', role, {
      root: true
    })
    resolve()
  })
}

export const getUser = async ({ commit, state }, payload) => {
  if (state.currentUser) return state.currentUser
}

export function setHasEmail ({ commit }, value) {
  return new Promise((resolve, reject) => {
    cookies.set('has_email', value)

    commit('auth/SET_HAS_EMAIL', value, {
      root: true
    })
    resolve()
  })
}

export function destroyToken (vuex, { reload }) {
  return new Promise((resolve, reject) => {
    const { commit } = vuex
    commit('auth/DESTROY_TOKEN', { reload }, {
      root: true
    })
    cookies.remove('auth_user')
    resolve()
  })
}

export const subtractCountUnreadMessages = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    let count = (state.user['countUnreadMessages'] > 0 ? (state.user['countUnreadMessages'] - 1) : 0)
    commit('SET_USER_FIELD', { key: 'countUnreadMessages', value: (count || 0) })
    resolve()
  })
}

export const addCountUnreadMessages = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    let count = (state.user['countUnreadMessages'] + 1)
    commit('SET_USER_FIELD', { key: 'countUnreadMessages', value: (count || 0) })
    resolve()
  })
}

export default {
  setUser,
  setRole,
  getUser,
  setToken,
  setLocale,
  setHasEmail,
  destroyToken,
  setUserField,
  getUserByAPI,
  addCountUnreadMessages,
  subtractCountUnreadMessages
}
