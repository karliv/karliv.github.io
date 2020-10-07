export function getPartnersOnCatalog (state) {
  return state.catalog.data
}

export function getCountPartnersOnCatalog (state) {
  return state.catalog.count
}

export function getPartnersLoadingOnCatalog (state) {
  return state.catalog.loading
}

export function getPartnersInfiniteDisabledOnCatalog (state) {
  return state.catalog.infiniteDisabled
}

export function getPartnersErrorOnCatalog (state) {
  return state.catalog.error
}

export function getPartnersOnRequests (state) {
  return state.requests.data
}

export function getCountPartnersOnRequests (state) {
  return state.requests.count
}

export function getPartnersLoadingOnRequests (state) {
  return state.requests.loading
}

export function getPartnersErrorOnRequests (state) {
  return state.requests.error
}

export function getPartnersInfiniteDisabledOnRequests (state) {
  return state.requests.infiniteDisabled
}

export default {
  getPartnersOnCatalog,
  getPartnersOnRequests,
  getPartnersErrorOnCatalog,
  getCountPartnersOnCatalog,
  getCountPartnersOnRequests,
  getPartnersErrorOnRequests,
  getPartnersLoadingOnCatalog,
  getPartnersLoadingOnRequests,
  getPartnersInfiniteDisabledOnCatalog,
  getPartnersInfiniteDisabledOnRequests
}
