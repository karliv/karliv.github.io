import { vueSet } from 'vue-deepset'

export function SET_SOURCES (state, data) {
  Object.assign(state.helpers.sources, data)
}

/** START SINGLE COMPANY */
export function SET_COMPANY_DATA (state, { data }) {
  state.company.data = data
}

export function SET_COMPANY_ERROR (state, value) {
  state.company.error = value
}

export function SET_COMPANY_LOADING (state, value) {
  state.company.loading = value
}

export function SET_FIELD_COMPANY_DATA (state, { key, value }) {
  vueSet(state.company.data, key, value)
}
/** END SINGLE COMPANY */

/** START COMPANIES */
export function SET_COMPANIES_LOADING (state, value) {
  state.companies.loading = value
}

export function SET_COMPANIES_ERROR (state, value) {
  state.companies.error = value
}

export function SET_COMPANIES_INFINITE_DISABLED (state, value) {
  state.companies.infiniteDisabled = value
}

export function SET_COMPANIES_DATA (state, { data, total, offset, replace }) {
  Object.assign(state.companies, {
    total,
    offset,
    data: (replace) ? (data) : [...state.companies.data, ...data]
  })
}

export function SET_FIELDS_FILTER_CATALOG (state, fields) {
  Object.assign(state.companies.filter, {
    ...fields
  })
}

export function CLEAR_COMPANIES (state) {
  Object.assign(state.companies, {
    data: [],
    total: 0,
    offset: 0,
    error: false,
    loading: false,
    infiniteDisabled: true
  })
}

export function SET_FIELD_COMPANIES_DATA (state, { id, key, value }) {
  let indexOf = state.companies.data.map(item => item.id).indexOf(id)
  if (indexOf > -1) vueSet(state.companies.data[indexOf], key, value)
}
/** END COMPANIES */

export default {
  SET_SOURCES,
  CLEAR_COMPANIES,
  SET_COMPANY_DATA,
  SET_COMPANY_ERROR,
  SET_COMPANIES_DATA,
  SET_COMPANIES_ERROR,
  SET_COMPANY_LOADING,
  SET_COMPANIES_LOADING,
  SET_FIELD_COMPANY_DATA,
  SET_FIELDS_FILTER_CATALOG,
  SET_FIELD_COMPANIES_DATA,
  SET_COMPANIES_INFINITE_DISABLED
}
