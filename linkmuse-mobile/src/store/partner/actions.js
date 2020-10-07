import Qs from 'qs'

export const fetchPartnersOnCatalog = ({ commit, state, rootState: { $api } }, { rewrite = false, user_id }) => {
  let offset = (rewrite) ? 0 : state.catalog.offset

  commit('SET_CATALOG_PARTNERS_LOADING', true)
  commit('SET_CATALOG_PARTNERS_INFINITE_DISABLED', true)

  return $api.get(`api/v1/users/${user_id}/partners`, { offset, approved: 1 }, {
    paramsSerializer: (params) => Qs.stringify(params, { arrayFormat: 'brackets', encode: false, skipNulls: true })
  }).then((response) => {
    let { data: { data, meta: { count, new_offset } } } = response

    commit('SET_CATALOG_PARTNERS_DATA', { data, count, offset: new_offset, rewrite })
    commit('SET_CATALOG_PARTNERS_LOADING', false)
    commit('SET_CATALOG_PARTNERS_ERROR', false)
    commit('SET_CATALOG_PARTNERS_INFINITE_DISABLED', (new_offset >= count))
  }, (response) => {
    commit('SET_CATALOG_PARTNERS_LOADING', false)
    commit('SET_CATALOG_PARTNERS_ERROR', true)
    commit('SET_CATALOG_PARTNERS_INFINITE_DISABLED', true)
  })
}

export const clearPartnersOnCatalog = ({ commit }) => {
  return new Promise((resolve, reject) => {
    try {
      commit('CLEAR_CATALOG_PARTNERS')
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}

export const fetchPartnersOnRequests = ({ commit, state, rootState: { $api } }, { rewrite = false }) => {
  let offset = (rewrite) ? 0 : state.requests.offset

  commit('SET_REQUESTS_PARTNERS_LOADING', true)
  commit('SET_REQUESTS_PARTNERS_INFINITE_DISABLED', true)

  return $api.get(`api/v1/users/partners/requests`, { offset }, {
    paramsSerializer: (params) => Qs.stringify(params, { arrayFormat: 'brackets', encode: false, skipNulls: true })
  }).then((response) => {
    let { data: { data, meta: { count, new_offset } } } = response

    commit('SET_REQUESTS_PARTNERS_DATA', { data, count, offset: new_offset, rewrite })
    commit('SET_REQUESTS_PARTNERS_LOADING', false)
    commit('SET_REQUESTS_PARTNERS_ERROR', false)
    commit('SET_REQUESTS_PARTNERS_INFINITE_DISABLED', (new_offset >= count))
  }, (response) => {
    commit('SET_REQUESTS_PARTNERS_LOADING', false)
    commit('SET_REQUESTS_PARTNERS_ERROR', true)
    commit('SET_REQUESTS_PARTNERS_INFINITE_DISABLED', true)
  })
}

export const clearPartnersOnRequests = ({ commit }) => {
  return new Promise((resolve, reject) => {
    try {
      commit('CLEAR_REQUESTS_PARTNERS')
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}

export default {
  clearPartnersOnCatalog,
  fetchPartnersOnCatalog,
  fetchPartnersOnRequests,
  clearPartnersOnRequests
}
