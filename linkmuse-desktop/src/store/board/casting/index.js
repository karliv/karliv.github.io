import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import response from './response'

import { getField, updateField } from 'vuex-map-fields'

export default {
  namespaced: true,
  modules: {
    response
  },
  state,
  getters: {
    getField,
    ...getters
  },
  mutations: {
    updateField,
    ...mutations
  },
  actions
}
