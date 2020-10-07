export function SET_LOADING (state, value) {
  state.loading = value
}

export function SET_ERROR (state, value) {
  state.error = value
}

export function SET_STATUS (state, value) {
  state.status = value
}

export default {
  SET_LOADING,
  SET_ERROR,
  SET_STATUS
}
