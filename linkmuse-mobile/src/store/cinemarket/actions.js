import { has } from '@utils'
import { ERROR } from '@modules/cinemarket/Enums/error'

const BASE_URL_CINEMARKET = process.env.BASE_URL_CINEMARKET
let VOTE_PITCH_LOAD = false

export const clearProgram = ({ commit }) => {
  commit('SET_PROGRAM_DATA', { data: [] })
  commit('SET_PROGRAM_LOADING', false)
  commit('SET_PROGRAM_ERROR', false)
}

export const getProgram = ({ commit, state, rootState: { $api } }) => {
  if (state.program.data.length) return

  commit('SET_PROGRAM_LOADING', true)

  return $api.get(`${BASE_URL_CINEMARKET}/api/program`).then((response) => {
    let { data: { data } } = response

    commit('SET_PROGRAM_DATA', { data })
    commit('SET_PROGRAM_LOADING', false)
    commit('SET_PROGRAM_ERROR', false)
  }, (response) => {
    commit('SET_PROGRAM_LOADING', false)
    commit('SET_PROGRAM_ERROR', true)
    throw new Error('Error show program')
  })
}

export const clearGuests = ({ commit }) => {
  commit('SET_GUESTS_DATA', { data: [] })
  commit('SET_GUESTS_LOADING', false)
  commit('SET_GUESTS_ERROR', false)
}

export const getGuests = ({ commit, state, rootState: { $api } }) => {
  if (state.guests.data.length) return

  commit('SET_GUESTS_LOADING', true)

  return $api.get(`${BASE_URL_CINEMARKET}/api/guests`).then((response) => {
    let { data: { data } } = response

    commit('SET_GUESTS_DATA', { data })
    commit('SET_GUESTS_LOADING', false)
    commit('SET_GUESTS_ERROR', false)
  }, (response) => {
    commit('SET_GUESTS_LOADING', false)
    commit('SET_GUESTS_ERROR', true)
    throw new Error('Error show guests')
  })
}

export const clearOrganization = ({ commit }) => {
  commit('SET_ORGANIZATION_DATA', { data: null })
  commit('SET_ORGANIZATION_LOADING', false)
  commit('SET_ORGANIZATION_ERROR', false)
}

export const getOrganization = ({ commit, state, rootState: { $api } }) => {
  if (state.organization.data) return

  commit('SET_ORGANIZATION_LOADING', true)

  return $api.get(`${BASE_URL_CINEMARKET}/api/organization`).then((response) => {
    let { data: { data } } = response

    commit('SET_ORGANIZATION_DATA', { data })
    commit('SET_ORGANIZATION_LOADING', false)
    commit('SET_ORGANIZATION_ERROR', false)
  }, (response) => {
    commit('SET_ORGANIZATION_LOADING', false)
    commit('SET_ORGANIZATION_ERROR', true)
    throw new Error('Error show organization')
  })
}

export const clearPartners = ({ commit }) => {
  commit('SET_PARTNERS_DATA', { data: null })
  commit('SET_PARTNERS_LOADING', false)
  commit('SET_PARTNERS_ERROR', false)
}

export const getPartners = ({ commit, state, rootState: { $api } }) => {
  if (state.partners.data) return

  commit('SET_PARTNERS_LOADING', true)

  return $api.get(`${BASE_URL_CINEMARKET}/api/partners`).then((response) => {
    let { data: { data } } = response

    commit('SET_PARTNERS_DATA', { data })
    commit('SET_PARTNERS_LOADING', false)
    commit('SET_PARTNERS_ERROR', false)
  }, (response) => {
    commit('SET_PARTNERS_LOADING', false)
    commit('SET_PARTNERS_ERROR', true)
    throw new Error('Error show partners')
  })
}

export const clearPitches = ({ commit }) => {
  commit('SET_PITCHES_DATA', { data: [] })
  commit('SET_PITCHES_LOADING', false)
  commit('SET_PITCHES_ERROR', false)
}

export const getPitches = ({ commit, state, rootState: { $api } }) => {
  commit('SET_PITCHES_LOADING', true)

  return $api.get(`${BASE_URL_CINEMARKET}/api/pitches`).then((response) => {
    let { data: { data } } = response

    if (Array.isArray(data)) {
      data.map(e => {
        e.loading = false
        e.photo = '/dist/img/cinemarket.png'
        return e
      })
    } else {
      data = []
    }

    commit('SET_PITCHES_DATA', { data })
    commit('SET_PITCHES_LOADING', false)
    commit('SET_PITCHES_ERROR', false)
  }, (response) => {
    commit('SET_PITCHES_LOADING', false)
    commit('SET_PITCHES_ERROR', true)
    throw new Error('Error show pitches')
  })
}

export const votePitch = ({ commit, state, rootState: { $api } }, name) => {
  if (VOTE_PITCH_LOAD) return

  VOTE_PITCH_LOAD = true
  commit('SET_PITCH_LOADING', { name, loading: true })
  return new Promise((resolve, reject) => {
    $api.post(`${BASE_URL_CINEMARKET}/api/pitches/vote`, { name }).then((response) => {
      let { data: { data } } = response

      if (data === true) commit('SET_PITCHES_VOTE', { name })

      commit('SET_PITCH_LOADING', { name, loading: false })
      VOTE_PITCH_LOAD = false
      resolve()
    }, (response) => {
      commit('SET_PITCH_LOADING', { name, loading: false })
      VOTE_PITCH_LOAD = false
      reject(new Error(has(response.data, 'error.message') && has(ERROR, response.data.error.message) ? ERROR[response.data.text] : ''))
    })
  })
}

export const clearPitchesCategories = ({ commit }) => {
  commit('SET_PITCHES_CATEGORIES_DATA', { data: [] })
  commit('SET_PITCHES_CATEGORIES_LOADING', false)
  commit('SET_PITCHES_CATEGORIES_ERROR', false)
}

export const getPitchesCategories = ({ commit, state, rootState: { $api } }) => {
  if (state.pitches.categories.data.length) return

  commit('SET_PITCHES_CATEGORIES_LOADING', true)

  return $api.get(`${BASE_URL_CINEMARKET}/api/pitches/categories`).then((response) => {
    let { data: { data } } = response

    commit('SET_PITCHES_CATEGORIES_DATA', { data })
    commit('SET_PITCHES_CATEGORIES_LOADING', false)
    commit('SET_PITCHES_CATEGORIES_ERROR', false)
  }, (response) => {
    commit('SET_PITCHES_CATEGORIES_LOADING', false)
    commit('SET_PITCHES_CATEGORIES_ERROR', true)
    throw new Error('Error show categories')
  })
}

export const clearTeam = ({ commit }) => {
  commit('SET_PITCHES_CATEGORIES_DATA', { data: [] })
  commit('SET_PITCHES_CATEGORIES_LOADING', false)
  commit('SET_PITCHES_CATEGORIES_ERROR', false)
}

export const getTeam = ({ commit, state, rootState: { $api } }) => {
  if (state.team.data.length) return

  commit('SET_TEAM_LOADING', true)

  return $api.get(`${BASE_URL_CINEMARKET}/api/pitches/team`).then((response) => {
    let { data: { data } } = response

    commit('SET_TEAM_DATA', { data })
    commit('SET_TEAM_LOADING', false)
    commit('SET_TEAM_ERROR', false)
  }, (response) => {
    commit('SET_TEAM_LOADING', false)
    commit('SET_TEAM_ERROR', true)
    throw new Error('Error show team')
  })
}

export default {
  getProgram,
  clearProgram,
  getGuests,
  clearGuests,
  getOrganization,
  clearOrganization,
  getPartners,
  clearPartners,
  clearPitches,
  getPitches,
  clearPitchesCategories,
  getPitchesCategories,
  votePitch,
  clearTeam,
  getTeam
}
