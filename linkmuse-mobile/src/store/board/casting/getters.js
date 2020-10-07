
export function getSources (state) {
  return state.helpers.sources.data
}

export function getInitializedSources (state) {
  return state.helpers.sources['initialized']
}

export function getLoadingSources (state) {
  return state.helpers.sources['loading']
}

/** START SINGLE CASTING */

export function getCastingLoading (state) {
  return state.casting.loading
}

export function getCastingData (state) {
  return state.casting.data
}

export function getCastingError (state) {
  return state.casting.error
}
/** END SINGLE CASTING */

/** START CASTINGS */
export function getCastingsData (state) {
  return state.castings.data
}

export function getInitializedData (state) {
  return state.castings['initialized']
}

export function getCastingsTotal (state) {
  return Number(state.castings.total)
}

export function getCastingsLoading (state) {
  return state.castings.loading
}

export function getCastingsOffset (state) {
  return state.castings.offset
}

export function getCastingsInfiniteDisabled (state) {
  return state.castings.infiniteDisabled
}

export function getCastingsHasNew (state) {
  return state.castings.hasNew
}

export function getCastingsError (state) {
  return state.castings.error
}

export function getCatalogFieldsFilter (state) {
  return state.castings.filter
}

export function getCatalogDefaultFieldsFilter (state) {
  return state.castings.defaultFilter
}
/** END CASTINGS */

export default {
  getSources,
  getCastingData,
  getCastingError,
  getCastingsData,
  getCastingsTotal,
  getCastingsError,
  getCastingsHasNew,
  getLoadingSources,
  getCastingLoading,
  getCastingsOffset,
  getCastingsLoading,
  getInitializedData,
  getInitializedSources,
  getCatalogFieldsFilter,
  getCastingsInfiniteDisabled,
  getCatalogDefaultFieldsFilter
}
