import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import { getField, updateField } from 'vuex-map-fields'
import company from './company'
import profession from './profession'

export default {
  namespaced: true,
  modules: {
    company,
    profession
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
