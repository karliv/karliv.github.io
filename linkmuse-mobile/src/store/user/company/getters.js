
/** START SINGLE COMPANY */
export function getSources (state) {
  return state.helpers.sources
}

export function getInitializedSources (state) {
  return state.helpers.sources['initialized']
}

export function getCompanyLoading (state) {
  return state.company.loading
}

export function getCompanyData (state) {
  return state.company.data
}

export function getCompanyError (state) {
  return state.company.error
}
/** END SINGLE COMPANY */

/** START COMPANIES */
export function getCompaniesData (state) {
  return state.companies.data
}

export function getCompaniesTotal (state) {
  return Number(state.companies.total)
}

export function getCompaniesLoading (state) {
  return state.companies.loading
}
export function getCompaniesOffset (state) {
  return state.companies.offset
}

export function getCompaniesInfiniteDisabled (state) {
  return state.companies.infiniteDisabled
}

export function getCompaniesError (state) {
  return state.companies.error
}

export function getCatalogFieldsFilter (state) {
  return state.companies.filter
}

export function getCatalogDefaultFieldsFilter (state) {
  return state.companies.defaultFields
}

/** END COMPANIES */

export default {
  getSources,
  getCompanyData,
  getCompanyError,
  getCompaniesData,
  getCompaniesError,
  getCompaniesTotal,
  getCompaniesOffset,
  getCompanyLoading,
  getCompaniesLoading,
  getInitializedSources,
  getCatalogFieldsFilter,
  getCatalogDefaultFieldsFilter,
  getCompaniesInfiniteDisabled
}
