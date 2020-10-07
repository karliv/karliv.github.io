import _ from 'lodash'
import { vueSet } from 'vue-deepset'

export function SET_SOURCES (state, data) {
  Object.assign(state.helpers.sources, data)
}

/** START SINGLE CASTING */
export function SET_CASTING_DATA (state, { data }) {
  state.casting.data = data
}

export function SET_CASTING_ERROR (state, value) {
  state.casting.error = value
}

export function SET_CASTING_LOADING (state, value) {
  state.casting.loading = value
}

export function SET_FIELD_CASTING_DATA (state, { key, value }) {
  vueSet(state.casting.data, key, value)
}
/** END SINGLE CASTING */

/** START CASTINGS */
export function SET_CASTINGS_LOADING (state, value) {
  state.castings.loading = value
}

export function SET_CASTINGS_ERROR (state, value) {
  state.castings.error = value
}

export function SET_CASTINGS_INFINITE_DISABLED (state, value) {
  state.castings.infiniteDisabled = value
}

export function SET_CASTINGS_DATA (state, { data, total, offset, replace }) {
  Object.assign(state.castings, {
    total,
    offset,
    data: (replace) ? (data) : _.uniqBy([...state.castings.data, ...data], 'id')
  })
}

export function SET_FIELDS_FILTER_CATALOG (state, fields) {
  Object.assign(state.castings.filter, {
    ...fields
  })
}

export function CLEAR_CASTINGS (state) {
  Object.assign(state.castings, {
    data: [],
    total: 0,
    offset: 0,
    error: false,
    loading: false,
    infiniteDisabled: true
  })
}

export function SET_FIELD_CASTINGS_DATA (state, { id, key, value }) {
  let indexOf = state.castings.data.map(item => item.id).indexOf(id)
  if (indexOf > -1) vueSet(state.castings.data[indexOf], key, value)
}
/** END CASTINGS */

export function CLEAR_CASTING_FORM_FIELDS (state) {
  state.form.fields = _.cloneDeep(state.form.defaultFields)
}

export default {
  SET_SOURCES,
  CLEAR_CASTINGS,
  SET_CASTING_DATA,
  SET_CASTING_ERROR,
  SET_CASTINGS_DATA,
  SET_CASTINGS_ERROR,
  SET_CASTING_LOADING,
  SET_CASTINGS_LOADING,
  SET_FIELD_CASTING_DATA,
  SET_FIELD_CASTINGS_DATA,
  CLEAR_CASTING_FORM_FIELDS,
  SET_FIELDS_FILTER_CATALOG,
  SET_CASTINGS_INFINITE_DISABLED
}
