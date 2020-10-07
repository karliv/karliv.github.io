import Vue from 'vue'

export function SET_CATALOG_PARTNERS_LOADING (state, value) {
  state.catalog.loading = value
}

export function SET_CATALOG_PARTNERS_ERROR (state, value) {
  state.catalog.error = value
}

export function SET_CATALOG_PARTNERS_DATA (state, { data, count, offset, rewrite }) {
  if (rewrite) {
    Vue.set(state.catalog, 'data', data)
  } else state.catalog.data.push(...data)
  Object.assign(state.catalog, {
    count,
    offset
  })
}

export function CLEAR_CATALOG_PARTNERS (state) {
  Object.assign(state.catalog, {
    data: [],
    count: 0,
    offset: 0,
    error: false,
    loading: false,
    infiniteDisabled: true
  })
}

export function SET_REQUESTS_PARTNERS_LOADING (state, value) {
  state.requests.loading = value
}

export function SET_REQUESTS_PARTNERS_ERROR (state, value) {
  state.requests.error = value
}

export function SET_REQUESTS_PARTNERS_DATA (state, { data, count, offset, rewrite }) {
  if (rewrite) {
    Vue.set(state.requests, 'data', data)
  } else state.requests.data.push(...data)
  Object.assign(state.requests, {
    count,
    offset
  })
}

export function CLEAR_REQUESTS_PARTNERS (state) {
  Object.assign(state.requests, {
    data: [],
    count: 0,
    offset: 0,
    error: false,
    loading: false
  })
}

export function SET_CATALOG_PARTNERS_INFINITE_DISABLED (state, value) {
  state.catalog.infiniteDisabled = value
}

export function SET_REQUESTS_PARTNERS_INFINITE_DISABLED (state, value) {
  state.requests.infiniteDisabled = value
}

export default {
  CLEAR_CATALOG_PARTNERS,
  CLEAR_REQUESTS_PARTNERS,
  SET_CATALOG_PARTNERS_DATA,
  SET_CATALOG_PARTNERS_ERROR,
  SET_REQUESTS_PARTNERS_DATA,
  SET_REQUESTS_PARTNERS_ERROR,
  SET_CATALOG_PARTNERS_LOADING,
  SET_REQUESTS_PARTNERS_LOADING,
  SET_CATALOG_PARTNERS_INFINITE_DISABLED,
  SET_REQUESTS_PARTNERS_INFINITE_DISABLED
}
