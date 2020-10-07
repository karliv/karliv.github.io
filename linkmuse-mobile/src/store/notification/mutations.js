import Vue from 'vue'

export function SET_CATALOG_NOTIFICATIONS_LOADING (state, value) {
  state.catalog.loading = value
}

export function SET_CATALOG_NOTIFICATIONS_ERROR (state, value) {
  state.catalog.error = value
}

export function SET_CATALOG_NOTIFICATIONS_DATA (state, { data, count, offset, rewrite }) {
  if (rewrite) {
    Vue.set(state.catalog, 'data', data)
  } else state.catalog.data.push(...data)
  Object.assign(state.catalog, {
    count,
    offset
  })
}

export function CLEAR_CATALOG_NOTIFICATIONS (state) {
  Object.assign(state.catalog, {
    data: [],
    count: 0,
    offset: 0,
    error: false,
    loading: false,
    infiniteDisabled: true
  })
}

export function SET_CATALOG_NOTIFICATIONS_INFINITE_DISABLED (state, value) {
  state.catalog.infiniteDisabled = value
}

export function SET_NOTIFICATION_ON_CATALOG_FIELD_BY_ID (state, { id, key, value }) {
  let index = state.catalog.data.map(item => item.id).indexOf(id)
  if (index > -1) {
    let casting = state.catalog.data[index]
    if (casting.hasOwnProperty(key)) {
      casting[key] = value
    } else Vue.set(casting, key, value)
  }
}

export default {
  SET_CATALOG_NOTIFICATIONS_DATA,
  SET_CATALOG_NOTIFICATIONS_ERROR,
  SET_CATALOG_NOTIFICATIONS_LOADING,
  SET_CATALOG_NOTIFICATIONS_INFINITE_DISABLED,
  SET_NOTIFICATION_ON_CATALOG_FIELD_BY_ID,
  CLEAR_CATALOG_NOTIFICATIONS
}
