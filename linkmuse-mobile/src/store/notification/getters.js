export function getNotificationsOnCatalog (state) {
  return state.catalog.data
}

export function getCountNotificationsOnCatalog (state) {
  return state.catalog.count
}

export function getNotificationsLoadingOnCatalog (state) {
  return state.catalog.loading
}

export function getNotificationsInfiniteDisabledOnCatalog (state) {
  return state.catalog.infiniteDisabled
}

export function getNotificationsErrorOnCatalog (state) {
  return state.catalog.error
}

export default {
  getNotificationsOnCatalog,
  getCountNotificationsOnCatalog,
  getNotificationsLoadingOnCatalog,
  getNotificationsInfiniteDisabledOnCatalog,
  getNotificationsErrorOnCatalog
}
