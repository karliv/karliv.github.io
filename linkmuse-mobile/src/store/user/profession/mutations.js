import _ from 'lodash'
import { vueSet } from 'vue-deepset'

export function SET_SOURCES (state, data) {
  Object.assign(state.helpers.sources.data, data)
}

export function SET_SOURCES_INITIALIZED (state, value) {
  state.helpers.sources.initialized = value
}

export function SET_SOURCES_LOADING (state, value) {
  state.helpers.sources.loading = value
}

/** START SINGLE PROFESSION */
export function SET_PROFESSION_DATA (state, { data }) {
  state.profession.data = data
}

export function SET_PROFESSION_ERROR (state, value) {
  state.profession.error = value
}

export function SET_PROFESSION_LOADING (state, value) {
  state.profession.loading = value
}

export function SET_FIELD_PROFESSION_DATA (state, { key, value }) {
  vueSet(state.profession.data, key, value)
}
/** END SINGLE PROFESSION */

/** START PROFESSIONS */
export function SET_PROFESSIONS_LOADING (state, value) {
  state.professions.loading = value
}

export function SET_PROFESSIONS_ERROR (state, value) {
  state.professions.error = value
}

export function SET_PROFESSIONS_INFINITE_DISABLED (state, value) {
  state.professions.infiniteDisabled = value
}

export function SET_PROFESSIONS_DATA (state, { data, total, offset, replace }) {
  Object.assign(state.professions, {
    total,
    offset,
    data: (replace) ? (data) : _.uniqBy([...state.professions.data, ...data], 'id')
  })
}

export function SET_FIELDS_FILTER_CATALOG (state, fields) {
  Object.assign(state.professions.filter, {
    ...fields
  })
}

export function CLEAR_PROFESSIONS (state) {
  Object.assign(state.professions, {
    data: [],
    total: 0,
    offset: 0,
    error: false,
    loading: false,
    infiniteDisabled: true
  })
}

export function SET_FIELD_PROFESSIONS_DATA (state, { id, key, value }) {
  let indexOf = state.professions.data.map(item => item.id).indexOf(id)
  if (indexOf > -1) vueSet(state.professions.data[indexOf], key, value)
}
/** END PROFESSIONS */

export default {
  SET_SOURCES,
  CLEAR_PROFESSIONS,
  SET_PROFESSION_DATA,
  SET_SOURCES_LOADING,
  SET_PROFESSION_ERROR,
  SET_PROFESSIONS_DATA,
  SET_PROFESSIONS_ERROR,
  SET_PROFESSION_LOADING,
  SET_PROFESSIONS_LOADING,
  SET_SOURCES_INITIALIZED,
  SET_FIELD_PROFESSION_DATA,
  SET_FIELDS_FILTER_CATALOG,
  SET_FIELD_PROFESSIONS_DATA,
  SET_PROFESSIONS_INFINITE_DISABLED
}
