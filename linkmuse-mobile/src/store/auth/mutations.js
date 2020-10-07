import moment from 'moment'
import { vueSet } from 'vue-deepset'

export function SET_TOKEN (state, { accessToken, refreshToken }) {
  state.isAuthorized = true
  state.accessToken = accessToken
  state.refreshToken = refreshToken
}

export function SET_LOCALE (state, locale) {
  state.locale = locale
}

export function SET_USER (state, user) {
  state.user = user
  state.isAuthorized = true
}

export function SET_USER_FIELD (state, { key, value }) {
  vueSet(state.user, key, value)
}

export function SET_ROLE (state, role) {
  state.role = role
}

export function SET_HAS_EMAIL (state, value) {
  state.user.hasEmail = value
}

export function DESTROY_TOKEN (state, { reload }) {
  state.role = null
  state.user = null
  state.accessToken = null
  state.refreshToken = null
  state.isAuthorized = false

  if (process.browser && window.location && reload) {
    window.location.reload('/')
  }
}

export default {
  SET_TOKEN,
  SET_LOCALE,
  SET_USER,
  SET_USER_FIELD,
  SET_ROLE,
  SET_HAS_EMAIL,
  DESTROY_TOKEN,
}
