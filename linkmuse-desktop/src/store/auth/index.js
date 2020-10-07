import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import { getField, updateField } from 'vuex-map-fields'

export default {
  namespaced: true,
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
