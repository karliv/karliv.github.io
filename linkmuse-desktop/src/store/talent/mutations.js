import Vue from 'vue'
import _ from 'lodash'

export function SET_CATALOG_TALENTS_LOADING (state, value) {
  state.catalog.loading = value
}

export function SET_CATALOG_TALENTS_ERROR (state, value) {
  state.catalog.error = value
}

export function SET_CATALOG_TALENTS_DATA (state, { data, count, offset, rewrite }) {
  if (rewrite) {
    Vue.set(state.catalog, 'data', data)
  } else state.catalog.data.push(...data)
  Object.assign(state.catalog, {
    count,
    offset
  })
}

export function CLEAR_CATALOG_TALENTS (state) {
  Object.assign(state.catalog, {
    data: [],
    count: 0,
    offset: 0,
    error: false,
    loading: false,
    infiniteDisabled: true
  })
}

export function SET_CATALOG_TALENTS_INFINITE_DISABLED (state, value) {
  state.catalog.infiniteDisabled = value
}

export function SET_FIELDS_FILTER_CATALOG (state, fields) {
  Object.assign(state.catalog.filter, {
    ...fields
  })
}

export function SET_TALENT_ON_CATALOG_FIELD_BY_ID (state, { id, key, value }) {
  let talent = _.find(state.catalog.data, (t) => t.data['user_id'] === id)
  if (talent) _.set(talent, key, value)
}

export function SET_SOURCES (state, data) {
  Object.assign(state.sources, data)
}

export default {
  SET_SOURCES,
  SET_CATALOG_TALENTS_DATA,
  SET_CATALOG_TALENTS_ERROR,
  SET_CATALOG_TALENTS_LOADING,
  SET_CATALOG_TALENTS_INFINITE_DISABLED,
  SET_FIELDS_FILTER_CATALOG,
  SET_TALENT_ON_CATALOG_FIELD_BY_ID,
  CLEAR_CATALOG_TALENTS
}
