export const fetchReferrals = ({ commit, state, rootState: { $api } }, { fields, offset, limit = 48 }) => {
  return new Promise((resolve, reject) => {
    commit('SET_REFERRALS_LOADING', true)
    commit('SET_REFERRALS_INFINITE_DISABLED', true)

    return $api.get(`/api/v1/users/my/referrals`, { ...fields, offset: offset, limit }).then((response) => {
      let { data: { data, meta: { total, next } } } = response

      commit('SET_REFERRALS_DATA', { data, total, offset: next, replace: (offset === 0) })
      commit('SET_REFERRALS_LOADING', false)
      commit('SET_REFERRALS_ERROR', false)
      commit('SET_REFERRALS_INFINITE_DISABLED', (!next))

      resolve && resolve(total)
    }, (response) => {
      commit('SET_REFERRALS_LOADING', false)
      commit('SET_REFERRALS_ERROR', true)
      commit('SET_REFERRALS_INFINITE_DISABLED', true)

      reject && reject()
    })
  })
}

export const clearReferrals = ({ commit }) => {
  return new Promise((resolve, reject) => {
    try {
      commit('CLEAR_REFERRALS')
      resolve && resolve()
    } catch (e) {
      console.log(e)
      reject && reject()
    }
  })
}

export const setFieldReferralsData = ({ commit }, { id, key, value }) => {
  return new Promise((resolve, reject) => {
    commit('SET_FIELD_REFERRALS_DATA', { id, key, value })
    resolve()
  })
}

export default {
  fetchReferrals,
  clearReferrals,
  setFieldReferralsData
}
