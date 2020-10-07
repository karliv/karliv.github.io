import casting from './casting'
import location from './location'

export default {
  namespaced: true,
  modules: {
    casting,
    location
  },
  state: {
    counters: {
      castings: 0,
      locations: 0
    },
    promotions: {
      sources: {
        types: [],
        states: [],
        promotedTypes: []
      }
    }
  },
  getters: {
    getCastingsCount (state) {
      return state.counters.castings
    },
    getLocationsCount (state) {
      return state.counters.locations
    }
  },
  actions: {
    getPromotionSources ({ commit, state, rootState: { $api } }) {
      return new Promise((resolve, reject) => {
        $api.get(`api/v2/boards/promotions/sources`).then((response) => {
          let { data: { data: { types, states, promotedTypes } } } = response
          commit('SET_PROMOTION_SOURCES', { types, states, promotedTypes })
          resolve && resolve({ types, states, promotedTypes })
        }, (response) => {
          reject && reject()
          throw new Error('Error boards promotions sources')
        })
      })
    },
    getCountersBoard ({ commit, state, rootState: { $api } }, { username }) {
      return new Promise((resolve, reject) => {
        return $api.get(`api/v2/users/${username}/boards/counters`).then((response) => {
          let { data: { castingsCount, locationsCount } } = response
          commit('SET_BOARDS_COUNT', { castingsCount, locationsCount })
          resolve && resolve()
        }, (error) => {
          reject && reject(error)
          throw new Error('Error boards counters')
        })
      })
    }
  },
  mutations: {
    SET_PROMOTION_SOURCES (state, { types, states, promotedTypes }) {
      Object.assign(state.promotions.sources, { types, states, promotedTypes })
    },
    SET_BOARDS_COUNT (state, { castingsCount: castings, locationsCount: locations }) {
      Object.assign(state.counters, { castings, locations })
    }
  }
}
