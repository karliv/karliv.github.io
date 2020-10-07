export const fetchNotificationsOnCatalog = ({ commit, state, rootState: { $api } }, { rewrite = false }) => {
  let offset = (rewrite) ? 0 : state.catalog.offset

  commit('SET_CATALOG_NOTIFICATIONS_LOADING', true)
  commit('SET_CATALOG_NOTIFICATIONS_INFINITE_DISABLED', true)

  return $api.get(`api/v1/notifications`, { offset }).then((response) => {
    let { data: { data, meta: { count, new_offset } } } = response

    commit('SET_CATALOG_NOTIFICATIONS_DATA', { data, count, offset: new_offset, rewrite })
    commit('SET_CATALOG_NOTIFICATIONS_LOADING', false)
    commit('SET_CATALOG_NOTIFICATIONS_ERROR', false)
    commit('SET_CATALOG_NOTIFICATIONS_INFINITE_DISABLED', (new_offset >= count))
  }, (response) => {
    commit('SET_CATALOG_NOTIFICATIONS_LOADING', false)
    commit('SET_CATALOG_NOTIFICATIONS_ERROR', true)
    commit('SET_CATALOG_NOTIFICATIONS_INFINITE_DISABLED', true)
  })
}

export function setNotificationOnCatalogFiledById ({ commit }, { id, key, value }) {
  return new Promise((resolve, reject) => {
    commit('SET_NOTIFICATION_ON_CATALOG_FIELD_BY_ID', { id, key, value })
    resolve()
  })
}

export const clearNotificationsOnCatalog = ({ commit }) => {
  return new Promise((resolve, reject) => {
    try {
      commit('CLEAR_CATALOG_NOTIFICATIONS')
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}

export default {
  fetchNotificationsOnCatalog,
  clearNotificationsOnCatalog,
  setNotificationOnCatalogFiledById
}
