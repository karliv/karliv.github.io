export function getTalentsOnCatalog (state) {
  return state.catalog.data
}

export function getCountTalentsOnCatalog (state) {
  return state.catalog.count
}

export function getTalentsLoadingOnCatalog (state) {
  return state.catalog.loading
}

export function getTalentInfiniteDisabledOnCatalog (state) {
  return state.catalog.infiniteDisabled
}

export function getTalentsErrorOnCatalog (state) {
  return state.catalog.error
}

export function getSources (state) {
  return state.sources
}

export function getInitializedSources (state) {
  return state.sources['initialized']
}

export function getCatalogFieldsFilter (state) {
  return state.catalog['filter']
}

export default {
  getSources,
  getTalentsOnCatalog,
  getInitializedSources,
  getCatalogFieldsFilter,
  getTalentsErrorOnCatalog,
  getCountTalentsOnCatalog,
  getTalentsLoadingOnCatalog,
  getTalentInfiniteDisabledOnCatalog
}
