import Qs from 'qs'

export const fetchTalentsOnCatalog = ({ commit, state, rootState: { $api } }, { fields, rewrite = false }) => {
  let offset = (rewrite) ? 0 : state.catalog.offset

  commit('SET_CATALOG_TALENTS_LOADING', true)
  commit('SET_CATALOG_TALENTS_INFINITE_DISABLED', true)

  return $api.get(`/api/v1/talents`, { ...fields, offset, include: 'certification' }, {
    paramsSerializer: (params) => Qs.stringify(params, { arrayFormat: 'brackets', encode: false, skipNulls: true })
  }).then((response) => {
    let { data: { data, meta: { count, new_offset } } } = response

    commit('SET_CATALOG_TALENTS_DATA', { data, count, offset: new_offset, rewrite })
    commit('SET_CATALOG_TALENTS_LOADING', false)
    commit('SET_CATALOG_TALENTS_ERROR', false)
    commit('SET_CATALOG_TALENTS_INFINITE_DISABLED', (new_offset >= count))
  }, (response) => {
    commit('SET_CATALOG_TALENTS_LOADING', false)
    commit('SET_CATALOG_TALENTS_ERROR', true)
    commit('SET_CATALOG_TALENTS_INFINITE_DISABLED', true)
  })
}

export const clearTalentsOnCatalog = ({ commit }) => {
  return new Promise((resolve, reject) => {
    try {
      commit('CLEAR_CATALOG_TALENTS')
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}

export function setFieldsFilterOnCatalog ({ commit }, fields) {
  return new Promise((resolve, reject) => {
    commit('SET_FIELDS_FILTER_CATALOG', fields)
    resolve()
  })
}

export function setTalentOnCatalogFiledById ({ commit }, { id, key, value }) {
  return new Promise((resolve, reject) => {
    commit('SET_TALENT_ON_CATALOG_FIELD_BY_ID', { id, key, value })
    resolve()
  })
}

export function getSources ({ commit, state, rootState: { $api } }) {
  return $api.get('api/v1/talents/lists?field=list_values').then((response) => {
    const { data } = response
    commit('SET_SOURCES', { ...data, initialized: true })
  }, (response) => {
    throw new Error('Error loading talents sources')
  })
}

export default {
  getSources,
  clearTalentsOnCatalog,
  fetchTalentsOnCatalog,
  setFieldsFilterOnCatalog,
  setTalentOnCatalogFiledById
}
