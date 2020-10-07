import { has } from '@utils'

export function getSources ({ commit, state, rootState: { $api } }, id = '') {
  return new Promise((resolve, reject) => {
    return $api.get(`api/v2/boards/locations/helpers/sources/${id}`).then((response) => {
      const { data: { data } } = response
      commit('SET_SOURCES', data)
      commit('SET_SOURCES_LOADING', false)
      commit('SET_SOURCES_INITIALIZED', true)
      resolve && resolve()
    }, (error) => {
      reject && reject(error)
      commit('SET_SOURCES_LOADING', false)
      commit('SET_SOURCES_INITIALIZED', false)
      throw new Error('Error loading locations sources')
    })
  })
}

export const clearLocation = ({ commit }) => {
  commit('SET_LOCATION_DATA', { data: null })
  commit('SET_LOCATION_LOADING', false)
  commit('SET_LOCATION_ERROR', false)
}

export const clearLocationFields = ({ commit }) => {
  commit('CLEAR_LOCATION_FORM_FIELDS')
}

export const setFieldLocationData = ({ commit }, { key, value }) => {
  return new Promise((resolve, reject) => {
    commit('SET_FIELD_LOCATION_DATA', { key, value })
    resolve()
  })
}

export const getLocationById = ({ commit, state, rootState: { $api } }, { id, include, editable }) => {
  return new Promise((resolve, reject) => {
    commit('SET_LOCATION_LOADING', true)

    return $api.get(`api/v2/boards/locations/${id}`, { include, editable }).then((response) => {
      let { data: { data } } = response

      let edit = has(data, 'abilities.edit') ? data['abilities']['edit'] : false

      if (editable && edit === false) {
        throw new Error('Error edit board/location.')
      }

      commit('SET_LOCATION_DATA', { data })
      commit('SET_LOCATION_LOADING', false)
      commit('SET_LOCATION_ERROR', false)
      resolve && resolve()
    }, (error) => {
      commit('SET_LOCATION_LOADING', false)
      commit('SET_LOCATION_ERROR', true)
      reject && reject(error)
    })
  })
}

export const fetchLocations = ({ commit, state, rootState: { $api } }, { fields, offset, limit = 24 }) => {
  return new Promise((resolve, reject) => {
    commit('SET_LOCATIONS_LOADING', true)
    commit('SET_LOCATIONS_INFINITE_DISABLED', true)

    return $api.get(`/api/v2/boards/locations`, { ...fields, offset: offset, limit }).then((response) => {
      let { data: { data, meta: { total, next } } } = response

      commit('SET_LOCATIONS_DATA', { data, total, offset: next, replace: (offset === 0) })
      commit('SET_LOCATIONS_LOADING', false)
      commit('SET_LOCATIONS_ERROR', false)
      commit('SET_LOCATIONS_INFINITE_DISABLED', (!next))

      resolve && resolve(total)
    }, (error) => {
      commit('SET_LOCATIONS_LOADING', false)
      commit('SET_LOCATIONS_ERROR', true)
      commit('SET_LOCATIONS_INFINITE_DISABLED', true)

      reject && reject(error)
    })
  })
}

export const fetchUserLocations = ({ commit, state, rootState: { $api } }, { username, fields, offset, limit = 24 }) => {
  return new Promise((resolve, reject) => {
    commit('SET_LOCATIONS_LOADING', true)
    commit('SET_LOCATIONS_INFINITE_DISABLED', true)

    return $api.get(`api/v2/users/${username}/boards/locations`, { ...fields, offset: offset, limit }).then((response) => {
      let { data: { data, meta: { total, next } } } = response

      commit('SET_LOCATIONS_DATA', { data, total, offset: next, replace: (offset === 0) })
      commit('SET_LOCATIONS_LOADING', false)
      commit('SET_LOCATIONS_ERROR', false)
      commit('SET_LOCATIONS_INFINITE_DISABLED', (!next))

      resolve && resolve()
    }, (error) => {
      commit('SET_LOCATIONS_LOADING', false)
      commit('SET_LOCATIONS_ERROR', true)
      commit('SET_LOCATIONS_INFINITE_DISABLED', true)

      reject && reject(error)
    })
  })
}

export const clearLocations = ({ commit }) => {
  return new Promise((resolve, reject) => {
    try {
      commit('CLEAR_LOCATIONS')
      resolve && resolve()
    } catch (e) {
      console.log(e)
      reject && reject()
    }
  })
}

export const setFieldLocationsData = ({ commit }, { id, key, value }) => {
  return new Promise((resolve, reject) => {
    commit('SET_FIELD_LOCATIONS_DATA', { id, key, value })
    resolve()
  })
}

export const setInitializedLocationsData = ({ commit }, value) => {
  return new Promise((resolve, reject) => {
    try {
      commit('SET_LOCATIONS_INITIALIZED', value)
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}

export const setHasNewLocationsData = ({ commit }, value) => {
  return new Promise((resolve, reject) => {
    try {
      commit('SET_LOCATIONS_HAS_NEW', value)
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}

export default {
  getSources,
  clearLocation,
  clearLocations,
  fetchLocations,
  getLocationById,
  fetchUserLocations,
  clearLocationFields,
  setFieldLocationData,
  setFieldLocationsData,
  setHasNewLocationsData,
  setInitializedLocationsData
}
