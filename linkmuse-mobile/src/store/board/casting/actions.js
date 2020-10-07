import { has } from  '@utils'

export function getSources ({ commit, state, rootState: { $api } }, id = '') {
  return new Promise((resolve, reject) => {
    commit('SET_SOURCES_LOADING', true)
    return $api.get(`api/v2/boards/castings/helpers/sources/${id}`).then((response) => {
      const { data: { data } } = response
      commit('SET_SOURCES', data)
      commit('SET_SOURCES_LOADING', false)
      commit('SET_SOURCES_INITIALIZED', true)
      resolve && resolve()
    }, (error) => {
      reject && reject(error)
      commit('SET_SOURCES_LOADING', false)
      commit('SET_SOURCES_INITIALIZED', false)
      throw new Error('Error loading castings sources')
    })
  })
}

export const clearCasting = ({ commit }) => {
  commit('SET_CASTING_DATA', { data: null })
  commit('SET_CASTING_LOADING', false)
  commit('SET_CASTING_ERROR', false)
}

export const clearCastingFields = ({ commit }) => {
  commit('CLEAR_CASTING_FORM_FIELDS')
}

export const setFieldCastingData = ({ commit }, { key, value }) => {
  return new Promise((resolve, reject) => {
    commit('SET_FIELD_CASTING_DATA', { key, value })
    resolve()
  })
}

export const getCastingById = ({ commit, state, rootState: { $api } }, { id, include, editable }) => {
  return new Promise((resolve, reject) => {
    commit('SET_CASTING_LOADING', true)

    return $api.get(`api/v2/boards/castings/${id}`, { include, editable }).then((response) => {
      let { data: { data } } = response

      let edit = has(data, 'abilities.edit') ? data['abilities']['edit'] : false

      if (editable && edit === false) {
        throw new Error('Error edit board/casting.')
      }

      commit('SET_CASTING_DATA', { data })
      commit('SET_CASTING_LOADING', false)
      commit('SET_CASTING_ERROR', false)
      resolve && resolve()
    }, (error) => {
      commit('SET_CASTING_LOADING', false)
      commit('SET_CASTING_ERROR', true)
      reject && reject(error)
    })
  })
}

export const fetchCastings = ({ commit, state, rootState: { $api } }, { fields, offset, limit = 24 }) => {
  return new Promise((resolve, reject) => {
    commit('SET_CASTINGS_LOADING', true)
    commit('SET_CASTINGS_INFINITE_DISABLED', true)

    return $api.get(`/api/v2/boards/castings`, { ...fields, offset: offset, limit }).then((response) => {
      let { data: { data, meta: { total, next } } } = response

      commit('SET_CASTINGS_DATA', { data, total, offset: next, replace: (offset === 0) })
      commit('SET_CASTINGS_LOADING', false)
      commit('SET_CASTINGS_ERROR', false)
      commit('SET_CASTINGS_INFINITE_DISABLED', (!next))

      resolve && resolve(total)
    }, (error) => {
      commit('SET_CASTINGS_LOADING', false)
      commit('SET_CASTINGS_ERROR', true)
      commit('SET_CASTINGS_INFINITE_DISABLED', true)

      reject && reject(error)
    })
  })
}

export const fetchUserCastings = ({ commit, state, rootState: { $api } }, { username, fields, offset, limit = 24 }) => {
  return new Promise((resolve, reject) => {
    commit('SET_CASTINGS_LOADING', true)
    commit('SET_CASTINGS_INFINITE_DISABLED', true)

    return $api.get(`api/v2/users/${username}/boards/castings`, { ...fields, offset: offset, limit }).then((response) => {
      let { data: { data, meta: { total, next } } } = response

      commit('SET_CASTINGS_DATA', { data, total, offset: next, replace: (offset === 0) })
      commit('SET_CASTINGS_LOADING', false)
      commit('SET_CASTINGS_ERROR', false)
      commit('SET_CASTINGS_INFINITE_DISABLED', (!next))

      resolve && resolve()
    }, (error) => {
      commit('SET_CASTINGS_LOADING', false)
      commit('SET_CASTINGS_ERROR', true)
      commit('SET_CASTINGS_INFINITE_DISABLED', true)

      reject && reject(error)
    })
  })
}

export const clearCastings = ({ commit }) => {
  return new Promise((resolve, reject) => {
    try {
      commit('CLEAR_CASTINGS')
      resolve && resolve()
    } catch (e) {
      console.log(e)
      reject && reject()
    }
  })
}

export const setFieldCastingsData = ({ commit }, { id, key, value }) => {
  return new Promise((resolve, reject) => {
    commit('SET_FIELD_CASTINGS_DATA', { id, key, value })
    resolve()
  })
}

export const setInitializedCastingsData = ({ commit }, value) => {
  return new Promise((resolve, reject) => {
    try {
      commit('SET_CASTINGS_INITIALIZED', value)
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}

export const setHasNewCastingsData = ({ commit }, value) => {
  return new Promise((resolve, reject) => {
    try {
      commit('SET_CASTINGS_HAS_NEW', value)
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}

export default {
  getSources,
  clearCasting,
  clearCastings,
  fetchCastings,
  getCastingById,
  fetchUserCastings,
  clearCastingFields,
  setFieldCastingData,
  setFieldCastingsData,
  setHasNewCastingsData,
  setInitializedCastingsData
}
