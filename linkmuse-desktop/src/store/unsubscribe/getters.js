export function getStatus (state) {
  return state.status
}

export function getError (state) {
  return state.error
}

export function getLoading (state) {
  return state.loading
}

export default {
  getStatus,
  getLoading,
  getError
}
