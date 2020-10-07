
/** START SINGLE LOCATION */
export function getSources (state) {
  return state.helpers.sources
}

export function getInitializedSources (state) {
  return state.helpers.sources['initialized']
}

export function getLocationLoading (state) {
  return state.location.loading
}

export function getLocationData (state) {
  return state.location.data
}

export function getLocationError (state) {
  return state.location.error
}
/** END SINGLE LOCATION */

/** START LOCATION */
export function getLocationsData (state) {
  return state.locations.data
}

export function getLocationsTotal (state) {
  return Number(state.locations.total)
}

export function getLocationsLoading (state) {
  return state.locations.loading
}
export function getLocationsOffset (state) {
  return state.locations.offset
}

export function getLocationsInfiniteDisabled (state) {
  return state.locations.infiniteDisabled
}

export function getLocationsError (state) {
  return state.locations.error
}

export function getCatalogFieldsFilter (state) {
  return state.locations.filter
}

export function getCatalogDefaultFieldsFilter (state) {
  return state.locations.defaultFields
}

/** END LOCATION */

export default {
  getSources,
  getLocationData,
  getLocationError,
  getLocationsData,
  getLocationsTotal,
  getLocationsError,
  getLocationLoading,
  getLocationsOffset,
  getLocationsLoading,
  getInitializedSources,
  getCatalogFieldsFilter,
  getLocationsInfiniteDisabled,
  getCatalogDefaultFieldsFilter
}
