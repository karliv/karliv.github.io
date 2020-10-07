
/** START SINGLE PROFESSION */
export function getSources (state) {
  return state.helpers.sources
}

export function getInitializedSources (state) {
  return state.helpers.sources['initialized']
}

export function getProfessionLoading (state) {
  return state.profession.loading
}

export function getProfessionData (state) {
  return state.profession.data
}

export function getProfessionError (state) {
  return state.profession.error
}
/** END SINGLE PROFESSION */

/** START PROFESSIONS */
export function getProfessionsData (state) {
  return state.professions.data
}

export function getProfessionsTotal (state) {
  return Number(state.professions.total)
}

export function getProfessionsLoading (state) {
  return state.professions.loading
}
export function getProfessionsOffset (state) {
  return state.professions.offset
}

export function getProfessionsInfiniteDisabled (state) {
  return state.professions.infiniteDisabled
}

export function getProfessionsError (state) {
  return state.professions.error
}

export function getCatalogFieldsFilter (state) {
  return state.professions.filter
}

export function getCatalogDefaultFieldsFilter (state) {
  return state.professions.defaultFields
}

/** END PROFESSIONS */

export default {
  getSources,
  getProfessionData,
  getProfessionError,
  getProfessionsData,
  getProfessionsError,
  getProfessionsTotal,
  getProfessionsOffset,
  getProfessionLoading,
  getProfessionsLoading,
  getInitializedSources,
  getCatalogFieldsFilter,
  getCatalogDefaultFieldsFilter,
  getProfessionsInfiniteDisabled
}
