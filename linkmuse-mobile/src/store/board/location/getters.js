
export function getSources (state) {
  return state.helpers.sources.data
}

export function getInitializedSources (state) {
  return state.helpers.sources['initialized']
}

export function getLoadingSources (state) {
  return state.helpers.sources['loading']
}

/** START SINGLE LOCATION */

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

export function getInitializedData (state) {
  return state.locations['initialized']
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

export function getLocationsHasNew (state) {
  return state.locations.hasNew
}

export function getLocationsError (state) {
  return state.locations.error
}

export function getCatalogFieldsFilter (state) {
  return state.locations.filter
}

export function getCatalogDefaultFieldsFilter (state) {
  return state.locations.defaultFilter
}

/** END LOCATION */

export default {
  getSources,
  getLocationData,
  getLocationError,
  getLocationsData,
  getLocationsTotal,
  getLocationsError,
  getLoadingSources,
  getInitializedData,
  getLocationsHasNew,
  getLocationLoading,
  getLocationsOffset,
  getLocationsLoading,
  getInitializedSources,
  getCatalogFieldsFilter,
  getLocationsInfiniteDisabled,
  getCatalogDefaultFieldsFilter
}
