export function getAllServicesData (state) {
  return state.services.data
}

export function getAllServicesLoading (state) {
  return state.services.loading
}

export function getAllServicesError (state) {
  return state.services.error
}

export function getRandomSpecialistsData (state) {
  return state.specialists.random.data
}

export function getRandomSpecialistsLoading (state) {
  return state.specialists.random.loading
}

export function getRandomSpecialistsError (state) {
  return state.specialists.random.error
}

export function getSingleOrderData (state) {
  return state.orders.single.data
}

export function geSingleOrderLoading (state) {
  return state.orders.single.loading
}

export function geSingleOrderError (state) {
  return state.orders.single.error
}

export function getOrdersByStatus (state) {
  return (status) => {
    return state.orders[status]
  }
}

export function getCustomerOrdersData (state) {
  return state.orders.customer.data
}

export function getArchivalOrdersData (state) {
  return state.orders.archival.data
}

export function geArchivalOrdersLoading (state) {
  return state.orders.archival.loading
}

export function getCountersExecutorOrdersData (state) {
  return state.orders.executor.counters.data
}

export function getExecutorOrdersData (state) {
  return state.orders.executor.data
}
export function getExecutorOrdersCount (state) {
  return state.orders.executor.count
}

export function getExecutorOrdersOffset (state) {
  return state.orders.executor.offset
}

export function getExecutorOrdersLoading (state) {
  return state.orders.executor.loading
}

export function getSettingsStudiosData (state) {
  return state.settings.studios.data
}

export default {
  getOrdersByStatus,
  getSingleOrderData,
  geSingleOrderError,
  geSingleOrderLoading,
  getAllServicesData,
  getAllServicesError,
  getCustomerOrdersData,
  getAllServicesLoading,
  getRandomSpecialistsData,
  getRandomSpecialistsError,
  getRandomSpecialistsLoading,
  getArchivalOrdersData,
  geArchivalOrdersLoading,
  getCountersExecutorOrdersData,
  getExecutorOrdersData,
  getExecutorOrdersLoading,
  getExecutorOrdersCount,
  getExecutorOrdersOffset,
  getSettingsStudiosData
}
