import { has } from '@utils'

export const getCompanyById = ({ commit, state, rootState: { $api } }, { id, include, params }) => {
  commit('SET_COMPANY_LOADING', true)

  return $api.get(`api/v2/users/companies/${id}`, { include, ...params }).then((response) => {
    let { data: { data } } = response

    commit('SET_COMPANY_DATA', { data })
    commit('SET_COMPANY_LOADING', false)
    commit('SET_COMPANY_ERROR', false)
  }, (response) => {
    commit('SET_COMPANY_LOADING', false)
    commit('SET_COMPANY_ERROR', true)
    throw new Error('Error show company')
  })
}

export function getSources ({ commit, state, rootState: { $api } }) {
  return $api.get('api/v2/users/companies/helpers/sources').then((response) => {
    const { data: { data } } = response
    commit('SET_SOURCES', { ...data, initialized: true })
  }, (response) => {
    throw new Error('Error loading companies sources')
  })
}

export function setFieldCompanyData ({ commit }, { key, value }) {
  return new Promise((resolve, reject) => {
    commit('SET_FIELD_COMPANY_DATA', { key, value })
    resolve && resolve()
  })
}

export const fetchCompanies = ({ commit, state, rootState: { $api } }, { fields, offset, limit = 48 }) => {
  commit('SET_COMPANIES_LOADING', true)
  commit('SET_COMPANIES_INFINITE_DISABLED', true)

  return $api.get(`/api/v2/companies`, { ...fields, offset: offset, limit }).then((response) => {
    let { data: { data, meta: { total, next } } } = response

    commit('SET_COMPANIES_DATA', { data, total, offset: next, replace: (offset === 0) })
    commit('SET_COMPANIES_LOADING', false)
    commit('SET_COMPANIES_ERROR', false)
    commit('SET_COMPANIES_INFINITE_DISABLED', (!next))
  }, (response) => {
    commit('SET_COMPANIES_LOADING', false)
    commit('SET_COMPANIES_ERROR', true)
    commit('SET_COMPANIES_INFINITE_DISABLED', true)
  })
}

export const fetchUserCompanies = ({ commit, state, rootState: { $api } }, { username, fields, offset, limit = 24 }) => {
  commit('SET_COMPANIES_LOADING', true)
  commit('SET_COMPANIES_INFINITE_DISABLED', true)

  return $api.get(`api/v2/users/${username}/companies`, { ...fields, offset: offset, limit }).then((response) => {
    let { data: { data, meta: { total, next } } } = response

    commit('SET_COMPANIES_DATA', { data, total, offset: next, replace: (offset === 0) })
    commit('SET_COMPANIES_LOADING', false)
    commit('SET_COMPANIES_ERROR', false)
    commit('SET_COMPANIES_INFINITE_DISABLED', (!next))
  }, (response) => {
    commit('SET_COMPANIES_LOADING', false)
    commit('SET_COMPANIES_ERROR', true)
    commit('SET_COMPANIES_INFINITE_DISABLED', true)
  })
}

export const clearCompanies = ({ commit }) => {
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

export const setFieldCompaniesData = ({ commit }, { id, key, value }) => {
  return new Promise((resolve, reject) => {
    commit('SET_FIELD_COMPANIES_DATA', { id, key, value })
    resolve()
  })
}

export default {
  getSources,
  fetchCompanies,
  clearCompanies,
  getCompanyById,
  fetchUserCompanies,
  setFieldCompanyData,
  setFieldCompaniesData
}
