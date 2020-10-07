import Vue from 'vue'
import { vueSet } from 'vue-deepset'

export function SET_ALL_SERVICES_DATA (state, services) {
  state.services.data = services
}

export function SET_ALL_SERVICES_LOADING (state, value) {
  state.services.loading = value
}

export function SET_ALL_SERVICES_ERROR (state, value) {
  state.services.error = value
}

export function SET_RANDOM_SPECIALISTS_DATA (state, { data, count }) {
  state.specialists.random.data = data
  state.specialists.random.count = count
}

export function SET_RANDOM_SPECIALISTS_LOADING (state, value) {
  state.specialists.random.loading = value
}

export function SET_RANDOM_SPECIALISTS_ERROR (state, value) {
  state.specialists.random.error = value
}

export function SET_SINGLE_ORDER_DATA (state, services) {
  state.orders.single.data = services
}

export function SET_SINGLE_ORDER_LOADING (state, value) {
  state.orders.single.loading = value
}

export function SET_SINGLE_ORDER_ERROR (state, value) {
  state.orders.single.error = value
}

export function SET_ORDERS_STATUS_LOADING (state, { status, loading = false }) {
  state.orders[status] = loading
}

export function SET_ORDERS_STATUS (state, { status, data, count, offset, loading = false }) {
  state.orders[status] = {
    data: [...data],
    count: count,
    offset: offset,
    loading: loading
  }
}

export function SET_ORDERS_CUSTOMER_DATA (state, data) {
  state.orders.customer.data = data
}

export function CLEAR_ORDERS_CUSTOMER_DATA (state) {
  state.orders.customer.data = { paid: [], meeting: [], in_work: [] }
}

export function SET_ORDERS_CUSTOMER_LOADING (state, value) {
  state.orders.customer.loading = value
}

export function SET_ORDERS_CUSTOMER_ERROR (state, value) {
  state.orders.customer.error = value
}

export function SET_ORDERS_ARCHIVAL_DATA (state, data) {
  state.orders.archival.data = data
}

export function CLEAR_ORDERS_ARCHIVAL_DATA (state) {
  state.orders.archival.data = []
}

export function SET_ORDERS_ARCHIVAL_LOADING (state, value) {
  state.orders.archival.loading = value
}

export function SET_ORDERS_ARCHIVAL_ERROR (state, value) {
  state.orders.archival.error = value
}

export function SET_SINGLE_ORDER_WORK_BY_TYPE (state, { type, data }) {
  if (!state.orders.single.data) return

  if (state.orders.single.data.hasOwnProperty(type)) {
    state.orders.single.data[type] = { data }
  } else Vue.set(state.orders.single.data, type, { data })
}

export function SET_SINGLE_ORDER_STATUS (state, status) {
  if (!state.orders.single.data) return
  state.orders.single.data['status'] = status
}

export function SET_FIELD_SINGLE_ORDER_DATA (state, { key, value }) {
  vueSet(state.orders.single.data, key, value)
}

/**
 * TODO: Duplicated method for SET_SINGLE_ORDER_WORK_BY_TYPE. Need Refactoring all Setters.
 */
export function SET_SINGLE_ORDER_FIELD_BY_KEY (state, { key, data }) {
  if (!state.orders.single.data) return

  if (state.orders.single.data.hasOwnProperty(key)) {
    state.orders.single.data[key] = { data }
  } else Vue.set(state.orders.single.data, key, { data })
}

export function SET_ORDERS_EXECUTOR_COUNTERS_LOADING (state, value) {
  state.orders.executor.counters.loading = value
}

export function SET_ORDERS_EXECUTOR_COUNTERS_ERROR (state, value) {
  state.orders.executor.counters.error = value
}

export function SET_ORDERS_EXECUTOR_COUNTERS_DATA (state, data) {
  state.orders.executor.counters.data = { ...data }
}

export function SET_ORDERS_EXECUTOR_DATA (state, { data, count, offset }) {
  data.forEach(item => state.orders.executor.data.push(item))
  state.orders.executor.count = count
  state.orders.executor.offset = offset
}

export function CLEAR_ORDERS_EXECUTOR_DATA (state) {
  state.orders.executor.data = []
  state.orders.executor.count = 0
  state.orders.executor.offset = 0
}

export function SET_ORDERS_EXECUTOR_LOADING (state, value) {
  state.orders.executor.loading = value
}

export function SET_ORDERS_EXECUTOR_ERROR (state, value) {
  state.orders.executor.error = value
}

export function SET_ORDERS_EXECUTOR_INFINITE_DISABLED (state, value) {
  state.orders.executor.infiniteDisabled = value
}

export function SET_SINGLE_SPECIALIST_DATA (state, services) {
  state.specialists.single.data = services
}

export function SET_SINGLE_SPECIALIST_LOADING (state, value) {
  state.specialists.single.loading = value
}

export function SET_SINGLE_SPECIALIST_ERROR (state, value) {
  state.specialists.single.error = value
}

export default {
  SET_ORDERS_STATUS,
  SET_ORDERS_STATUS_LOADING,
  SET_SINGLE_ORDER_DATA,
  SET_SINGLE_ORDER_ERROR,
  SET_SINGLE_ORDER_LOADING,
  SET_ALL_SERVICES_DATA,
  SET_ALL_SERVICES_ERROR,
  SET_ALL_SERVICES_LOADING,
  SET_RANDOM_SPECIALISTS_DATA,
  SET_RANDOM_SPECIALISTS_ERROR,
  SET_RANDOM_SPECIALISTS_LOADING,
  SET_ORDERS_CUSTOMER_DATA,
  CLEAR_ORDERS_CUSTOMER_DATA,
  SET_ORDERS_CUSTOMER_LOADING,
  SET_ORDERS_CUSTOMER_ERROR,
  SET_ORDERS_ARCHIVAL_LOADING,
  SET_ORDERS_ARCHIVAL_DATA,
  SET_ORDERS_ARCHIVAL_ERROR,
  SET_SINGLE_ORDER_WORK_BY_TYPE,
  SET_SINGLE_ORDER_FIELD_BY_KEY,
  SET_SINGLE_ORDER_STATUS,
  SET_ORDERS_EXECUTOR_COUNTERS_LOADING,
  SET_ORDERS_EXECUTOR_COUNTERS_ERROR,
  SET_ORDERS_EXECUTOR_COUNTERS_DATA,
  SET_ORDERS_EXECUTOR_LOADING,
  SET_ORDERS_EXECUTOR_DATA,
  SET_ORDERS_EXECUTOR_ERROR,
  CLEAR_ORDERS_EXECUTOR_DATA,
  SET_ORDERS_EXECUTOR_INFINITE_DISABLED,
  SET_SINGLE_SPECIALIST_DATA,
  SET_SINGLE_SPECIALIST_LOADING,
  SET_SINGLE_SPECIALIST_ERROR,
  CLEAR_ORDERS_ARCHIVAL_DATA,
  SET_FIELD_SINGLE_ORDER_DATA
}
