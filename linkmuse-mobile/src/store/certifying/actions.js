/* eslint-disable camelcase */

export const fetchAllServices = ({ commit, rootState: { $api } }) => {
  commit('SET_ALL_SERVICES_LOADING', true)

  return $api.get('api/v2/certifying-specialists/services').then(response => {
    let { data: { data } } = response

    commit('SET_ALL_SERVICES_DATA', data)
    commit('SET_ALL_SERVICES_LOADING', false)
    commit('SET_ALL_SERVICES_ERROR', false)
  }).catch(() => {
    commit('SET_ALL_SERVICES_LOADING', false)
    commit('SET_ALL_SERVICES_ERROR', true)
  })
}

export const fetchRandomSpecialists = ({ commit, rootState: { $api } }, { limit }) => {
  commit('SET_RANDOM_SPECIALISTS_LOADING', true)

  return $api.get('api/v2/certifying-specialists/helpers/specialists/random', { limit }).then(response => {
    const { data: { count, specialists: { data } } } = response

    commit('SET_RANDOM_SPECIALISTS_DATA', { data, count })
    commit('SET_RANDOM_SPECIALISTS_LOADING', false)
    commit('SET_RANDOM_SPECIALISTS_ERROR', false)
  }).catch(() => {
    commit('SET_RANDOM_SPECIALISTS_LOADING', false)
    commit('SET_RANDOM_SPECIALISTS_ERROR', true)
  })
}

export const getOrderById = ({ commit, rootState: { $api } }, { id, include }) => {
  commit('SET_SINGLE_ORDER_LOADING', true)

  return $api.get(`/api/v2/certifying-specialists/orders/${id}`, { include }).then((response) => {
    let { data: { data } } = response

    commit('SET_SINGLE_ORDER_DATA', data)
    commit('SET_SINGLE_ORDER_LOADING', false)
    commit('SET_SINGLE_ORDER_ERROR', false)
  }, (response) => {
    commit('SET_SINGLE_ORDER_LOADING', false)
    commit('SET_SINGLE_ORDER_ERROR', true)
  })
}

/**
 * Добавить работу у заказа ( Measurement, Photo, Video )
 *
 * @param commit
 * @param type
 * @param data
 */
export const setSingleOrderWorkByType = ({ commit }, { type, data }) => {
  commit('SET_SINGLE_ORDER_WORK_BY_TYPE', { type, data })
}

/**
 * Изменить статус заказа
 *
 * @param commit
 * @param status
 */
export const setSingleOrderStatus = ({ commit }, status) => {
  commit('SET_SINGLE_ORDER_STATUS', status)
}

/**
 * Добавить поле к заказу
 *
 * @param commit
 * @param key
 * @param data
 */
export const setSingleOrderFieldByKey = ({ commit }, { key, data }) => {
  commit('SET_SINGLE_ORDER_FIELD_BY_KEY', { key, data })
}

/**
 * Добавить поле к заказу
 *
 * @param commit
 * @param key
 * @param data
 */
export const setFieldSingleOrderData = ({ commit }, { key, value }) => {
  commit('SET_FIELD_SINGLE_ORDER_DATA', { key, value })
}

export const getOrdersByStatus = ({ commit, rootState: { $api } }, status) => {
  commit('SET_ORDERS_STATUS_LOADING', { status, loading: true })

  return $api.get(`/api/v2/certifying-specialists/orders`, { status }).then((response) => {
    let { data: { data, meta: { count, new_offset } } } = response

    commit('SET_ORDERS_STATUS', {
      status,
      data,
      count,
      offset: new_offset,
      loading: false
    })
  }, (response) => {
    commit('SET_ORDERS_STATUS_LOADING', { status, loading: false })
  })
}

export const getOrdersByCustomer = ({ commit, rootState: { $api } }, { include }) => {
  commit('SET_ORDERS_CUSTOMER_LOADING', true)

  return $api.get(`/api/v2/certifying-specialists/specialists/orders`, { include }).then((response) => {
    let { data: { paid, meeting, in_work } } = response

    commit('SET_ORDERS_CUSTOMER_DATA', { paid, meeting, in_work })
    commit('SET_ORDERS_CUSTOMER_LOADING', false)
    commit('SET_ORDERS_CUSTOMER_ERROR', false)
  }, (response) => {
    commit('SET_ORDERS_CUSTOMER_LOADING', false)
    commit('SET_ORDERS_CUSTOMER_ERROR', true)
  })
}

export const clearOrdersByCustomer = ({ commit }) => {
  return new Promise((resolve, reject) => {
    commit('CLEAR_ORDERS_CUSTOMER_DATA')
    commit('SET_ORDERS_CUSTOMER_LOADING', false)
    commit('SET_ORDERS_CUSTOMER_ERROR', false)
    resolve()
  })
}

export const getOrdersByExecutor = ({ state, commit, rootState: { $api } }, { status, dispute, include }) => {
  commit('SET_ORDERS_EXECUTOR_LOADING', true)
  commit('SET_ORDERS_EXECUTOR_INFINITE_DISABLED', true)

  let params = {
    status,
    dispute,
    include,
    offset: state.orders.executor.offset
  }

  return $api.get(`/api/v2/certifying-specialists/users/orders`, params).then((response) => {
    let { data: { data, meta: { count, new_offset } } } = response

    commit('SET_ORDERS_EXECUTOR_DATA', { data, count, offset: new_offset })
    commit('SET_ORDERS_EXECUTOR_LOADING', false)
    commit('SET_ORDERS_EXECUTOR_ERROR', false)
    commit('SET_ORDERS_EXECUTOR_INFINITE_DISABLED', (new_offset >= count))
  }, (response) => {
    commit('SET_ORDERS_EXECUTOR_LOADING', false)
    commit('SET_ORDERS_EXECUTOR_ERROR', true)
    commit('SET_ORDERS_EXECUTOR_INFINITE_DISABLED', true)
  })
}

export const clearOrdersByExecutor = ({ commit }) => {
  return new Promise((resolve, reject) => {
    commit('CLEAR_ORDERS_EXECUTOR_DATA')
    commit('SET_ORDERS_EXECUTOR_LOADING', false)
    commit('SET_ORDERS_EXECUTOR_ERROR', false)
    resolve()
  })
}

export const getCountersOrdersByExecutor = ({ commit, rootState: { $api } }) => {
  commit('SET_ORDERS_EXECUTOR_COUNTERS_LOADING', true)

  return $api.get(`/api/v2/certifying-specialists/users/orders/counters`).then((response) => {
    let { data: { all, not_paid, paid, dispute, finished } } = response

    commit('SET_ORDERS_EXECUTOR_COUNTERS_DATA', { all, not_paid, paid, dispute, finished })
    commit('SET_ORDERS_EXECUTOR_COUNTERS_LOADING', false)
    commit('SET_ORDERS_EXECUTOR_COUNTERS_ERROR', false)
  }, (response) => {
    commit('SET_ORDERS_EXECUTOR_COUNTERS_LOADING', false)
    commit('SET_ORDERS_EXECUTOR_COUNTERS_ERROR', true)
  })
}

export const getOrdersArchival = ({ commit, rootState: { $api } }, { include, status }) => {
  commit('SET_ORDERS_ARCHIVAL_LOADING', true)

  return $api.get(`/api/v2/certifying-specialists/specialists/orders/archival`, { include, status }).then((response) => {
    let { data: { data } } = response

    commit('SET_ORDERS_ARCHIVAL_DATA', data)
    commit('SET_ORDERS_ARCHIVAL_LOADING', false)
    commit('SET_ORDERS_ARCHIVAL_ERROR', false)
  }, (response) => {
    commit('SET_ORDERS_ARCHIVAL_LOADING', false)
    commit('SET_ORDERS_ARCHIVAL_ERROR', true)
  })
}

export const clearOrdersArchivalByCustomer = ({ commit }) => {
  return new Promise((resolve, reject) => {
    commit('CLEAR_ORDERS_ARCHIVAL_DATA')
    commit('SET_ORDERS_ARCHIVAL_LOADING', false)
    commit('SET_ORDERS_ARCHIVAL_LOADING', false)
    resolve()
  })
}

export const getSpecialistById = ({ commit, rootState: { $api } }, { user_id, include }) => {
  commit('SET_SINGLE_SPECIALIST_LOADING', true)

  return $api.get(`/api/v2/certifying-specialists/${user_id}`, { include }).then((response) => {
    let { data: { data } } = response

    commit('SET_SINGLE_SPECIALIST_DATA', data)
    commit('SET_SINGLE_SPECIALIST_LOADING', false)
    commit('SET_SINGLE_SPECIALIST_ERROR', false)
  }, (response) => {
    commit('SET_SINGLE_SPECIALIST_LOADING', false)
    commit('SET_SINGLE_SPECIALIST_ERROR', true)
  })
}

export default {
  getOrderById,
  fetchAllServices,
  getOrdersByStatus,
  getOrdersArchival,
  getOrdersByCustomer,
  getOrdersByExecutor,
  getCountersOrdersByExecutor,
  fetchRandomSpecialists,
  setSingleOrderWorkByType,
  setSingleOrderStatus,
  setSingleOrderFieldByKey,
  clearOrdersByExecutor,
  getSpecialistById,
  clearOrdersByCustomer,
  clearOrdersArchivalByCustomer,
  setFieldSingleOrderData
}
