import { has } from '@utils'

export const getProfessionById = ({ commit, state, rootState: { $api } }, { id, include, params }) => {
  return new Promise((resolve, reject) => {
    commit('SET_PROFESSION_LOADING', true)

    return $api.get(`api/v2/users/professions/${id}`, { include, ...params }).then((response) => {
      let { data: { data } } = response

      commit('SET_PROFESSION_DATA', { data })
      commit('SET_PROFESSION_LOADING', false)
      commit('SET_PROFESSION_ERROR', false)
      resolve && resolve()
    }, (error) => {
      commit('SET_PROFESSION_LOADING', false)
      commit('SET_PROFESSION_ERROR', true)
      reject && reject(error)
    })
  })
}

export function getSources ({ commit, state, rootState: { $api } }, id = '') {
  return $api.get(`api/v2/users/professions/helpers/sources/${id}`).then((response) => {
    const { data: { data } } = response
    commit('SET_SOURCES', { ...data, initialized: true })
  }, (response) => {
    throw new Error('Error loading professions sources')
  })
}

export function setFieldProfessionData ({ commit }, { key, value }) {
  return new Promise((resolve, reject) => {
    commit('SET_FIELD_PROFESSION_DATA', { key, value })
    resolve && resolve()
  })
}

export const fetchProfessions = ({ commit, state, rootState: { $api } }, { fields, offset, limit = 48 }) => {
  return new Promise((resolve, reject) => {
    commit('SET_PROFESSIONS_LOADING', true)
    commit('SET_PROFESSIONS_INFINITE_DISABLED', true)

    return $api.get(`/api/v2/professions`, { ...fields, offset: offset, limit }).then((response) => {
      let { data: { data, meta: { total, next } } } = response

      commit('SET_PROFESSIONS_DATA', { data, total, offset: next, replace: (offset === 0) })
      commit('SET_PROFESSIONS_LOADING', false)
      commit('SET_PROFESSIONS_ERROR', false)
      commit('SET_PROFESSIONS_INFINITE_DISABLED', (!next))

      resolve && resolve(total)
    }, (response) => {
      commit('SET_PROFESSIONS_LOADING', false)
      commit('SET_PROFESSIONS_ERROR', true)
      commit('SET_PROFESSIONS_INFINITE_DISABLED', true)

      reject && reject()
    })
  })
}

export const fetchUserProfessions = ({ commit, state, rootState: { $api } }, { username, fields, offset, limit = 24 }) => {
  commit('SET_PROFESSIONS_LOADING', true)
  commit('SET_PROFESSIONS_INFINITE_DISABLED', true)

  return $api.get(`api/v2/users/${username}/professions`, { ...fields, offset: offset, limit }).then((response) => {
    let { data: { data, meta: { total, next } } } = response

    commit('SET_PROFESSIONS_DATA', { data, total, offset: next, replace: (offset === 0) })
    commit('SET_PROFESSIONS_LOADING', false)
    commit('SET_PROFESSIONS_ERROR', false)
    commit('SET_PROFESSIONS_INFINITE_DISABLED', (!next))
  }, (response) => {
    commit('SET_PROFESSIONS_LOADING', false)
    commit('SET_PROFESSIONS_ERROR', true)
    commit('SET_PROFESSIONS_INFINITE_DISABLED', true)
  })
}

export const clearProfessions = ({ commit }) => {
  return new Promise((resolve, reject) => {
    try {
      commit('CLEAR_PROFESSIONS')
      resolve && resolve()
    } catch (e) {
      console.log(e)
      reject && reject()
    }
  })
}

export const setFieldProfessionsData = ({ commit }, { id, key, value }) => {
  return new Promise((resolve, reject) => {
    commit('SET_FIELD_PROFESSIONS_DATA', { id, key, value })
    resolve()
  })
}

export default {
  getSources,
  fetchProfessions,
  clearProfessions,
  getProfessionById,
  fetchUserProfessions,
  setFieldProfessionData,
  setFieldProfessionsData
}
