import { vueSet } from 'vue-deepset'

/** START REFERRALS */
export function SET_REFERRALS_LOADING (state, value) {
  state.referrals.loading = value
}

export function SET_REFERRALS_ERROR (state, value) {
  state.referrals.error = value
}

export function SET_REFERRALS_INFINITE_DISABLED (state, value) {
  state.referrals.infiniteDisabled = value
}

export function SET_REFERRALS_DATA (state, { data, total, offset, replace }) {
  Object.assign(state.referrals, {
    total,
    offset,
    data: (replace) ? (data) : [...state.referrals.data, ...data]
  })
}

export function SET_FIELDS_FILTER_CATALOG (state, fields) {
  Object.assign(state.referrals.filter, {
    ...fields
  })
}

export function CLEAR_REFERRALS (state) {
  Object.assign(state.referrals, {
    data: [],
    total: 0,
    offset: 0,
    error: false,
    loading: false,
    infiniteDisabled: true
  })
}

export function SET_FIELD_REFERRALS_DATA (state, { id, key, value }) {
  let indexOf = state.referrals.data.map(item => item.id).indexOf(id)
  if (indexOf > -1) vueSet(state.referrals.data[indexOf], key, value)
}
/** END REFERRALS */

export default {
  CLEAR_REFERRALS,
  SET_REFERRALS_DATA,
  SET_REFERRALS_ERROR,
  SET_REFERRALS_LOADING,
  SET_FIELDS_FILTER_CATALOG,
  SET_FIELD_REFERRALS_DATA,
  SET_REFERRALS_INFINITE_DISABLED
}
