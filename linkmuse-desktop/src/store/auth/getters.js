export function getToken (state) {
  return state.accessToken
}

export function getLocale (state) {
  return state.locale
}

export function isAuthorized (state) {
  return state.isAuthorized
}

export function getAuthUser (state) {
  return state.isAuthorized && state.user
}

export function getRole (state) {
  return state.role
}

export function getProfile (state) {
  return state.user ? (state.user.hasOwnProperty('profile')) ? state.user.profile.data : null : null
}

export function isRegistered (state) {
  return (state.user && state.user.isRegistered)
}

export function hasEmail (state) {
  return (state.user && state.user.hasEmail)
}

export default {
  getRole,
  getToken,
  hasEmail,
  getLocale,
  getProfile,
  getAuthUser,
  isAuthorized,
  isRegistered
}
