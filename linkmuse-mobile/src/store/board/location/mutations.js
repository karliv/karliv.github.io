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

/** START SINGLE LOCATION */
export function SET_LOCATION_DATA (state, { data }) {
  state.location.data = data
}

export function SET_LOCATION_ERROR (state, value) {
  state.location.error = value
}

export function SET_LOCATION_LOADING (state, value) {
  state.location.loading = value
}

export function SET_FIELD_LOCATION_DATA (state, { key, value }) {
  vueSet(state.location.data, key, value)
}
/** END SINGLE LOCATION */

/** START LOCATIONS */
export function SET_LOCATIONS_LOADING (state, value) {
  state.locations.loading = value
}

export function SET_LOCATIONS_ERROR (state, value) {
  state.locations.error = value
}

export function SET_LOCATIONS_INFINITE_DISABLED (state, value) {
  state.locations.infiniteDisabled = value
}

export function SET_LOCATIONS_HAS_NEW (state, value) {
  state.locations.hasNew = value
}

export function SET_LOCATIONS_INITIALIZED (state, value) {
  state.locations.initialized = value
}

export function SET_LOCATIONS_DATA (state, { data, total, offset, replace }) {
  Object.assign(state.locations, {
    total,
    offset,
    data: (replace) ? (data) : _.uniqBy([...state.locations.data, ...data], 'id')
  })
}

export function SET_FIELDS_FILTER_CATALOG (state, fields) {
  Object.assign(state.locations.filter, {
    ...fields
  })
}

export function CLEAR_LOCATIONS (state) {
  Object.assign(state.locations, {
    data: [],
    total: 0,
    offset: 0,
    error: false,
    loading: false,
    infiniteDisabled: true
  })
}

export function SET_FIELD_LOCATIONS_DATA (state, { id, key, value }) {
  let indexOf = state.locations.data.map(item => item.id).indexOf(id)
  if (indexOf > -1) vueSet(state.locations.data[indexOf], key, value)
}
/** END LOCATIONS */

export function CLEAR_LOCATION_FORM_FIELDS (state) {
  state.form.fields = _.cloneDeep(state.form.defaultFields)
}

export default {
  SET_SOURCES,
  CLEAR_LOCATIONS,
  SET_LOCATION_DATA,
  SET_LOCATION_ERROR,
  SET_LOCATIONS_DATA,
  SET_LOCATIONS_ERROR,
  SET_SOURCES_LOADING,
  SET_LOCATION_LOADING,
  SET_LOCATIONS_HAS_NEW,
  SET_LOCATIONS_LOADING,
  SET_SOURCES_INITIALIZED,
  SET_FIELD_LOCATION_DATA,
  SET_FIELD_LOCATIONS_DATA,
  SET_LOCATIONS_INITIALIZED,
  CLEAR_LOCATION_FORM_FIELDS,
  SET_FIELDS_FILTER_CATALOG,
  SET_LOCATIONS_INFINITE_DISABLED
}
