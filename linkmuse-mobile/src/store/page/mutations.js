export function SET_PAGE_DATA (state, value) {
  state.page.data = value
}

export function SET_PAGE_LOADING (state, value) {
  state.page.loading = value
}

export function SET_PAGE_ERROR (state, value) {
  state.page.error = value
}

export default {
  SET_PAGE_DATA,
  SET_PAGE_ERROR,
  SET_PAGE_LOADING
}
