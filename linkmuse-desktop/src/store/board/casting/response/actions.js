
export const fetchResponses = ({ commit, state, rootState: { $api } }, { id, fields, offset, limit = 24 }) => {
  return new Promise((resolve, reject) => {
    commit('SET_RESPONSES_LOADING', true)
    commit('SET_RESPONSES_INFINITE_DISABLED', true)

    return $api.get(`api/v2/boards/castings/${id}/responses`, { ...fields, offset: offset, limit }).then((response) => {
      let { data: { data, meta: { total, next, notRead } } } = response

      commit('SET_RESPONSES_DATA', { data, total, offset: next, notRead, replace: (offset === 0) })
      commit('SET_RESPONSES_LOADING', false)
      commit('SET_RESPONSES_ERROR', false)
      commit('SET_RESPONSES_INFINITE_DISABLED', (!next))
      resolve && resolve()
    }, (response) => {
      commit('SET_RESPONSES_LOADING', false)
      commit('SET_RESPONSES_ERROR', true)
      commit('SET_RESPONSES_INFINITE_DISABLED', true)
      reject && reject()
    })
  })
}

export const fetchUserResponses = ({ commit, state, rootState: { $api } }, { username, fields, offset, limit = 24 }) => {
  return new Promise((resolve, reject) => {
    commit('SET_RESPONSES_LOADING', true)
    commit('SET_RESPONSES_INFINITE_DISABLED', true)

    return $api.get(`api/v2/users/${username}/boards/castings/responses`, { ...fields, offset: offset, limit }).then((response) => {
      let { data: { data, meta: { total, next } } } = response

      commit('SET_RESPONSES_DATA', { data, total, offset: next, replace: (offset === 0) })
      commit('SET_RESPONSES_LOADING', false)
      commit('SET_RESPONSES_ERROR', false)
      commit('SET_RESPONSES_INFINITE_DISABLED', (!next))
      resolve && resolve()
    }, (response) => {
      commit('SET_RESPONSES_LOADING', false)
      commit('SET_RESPONSES_ERROR', true)
      commit('SET_RESPONSES_INFINITE_DISABLED', true)
      reject && reject()
    })
  })
}

export const clearResponses = ({ commit }) => {
  return new Promise((resolve, reject) => {
    try {
      commit('CLEAR_RESPONSES')
      resolve && resolve()
    } catch (e) {
      console.log(e)
      reject && reject()
    }
  })
}

export const setFieldResponsesData = ({ commit }, { id, key, value }) => {
  return new Promise((resolve, reject) => {
    commit('SET_FIELD_RESPONSES_DATA', { id, key, value })
    resolve()
  })
}

export const deleteRowResponsesData = ({ commit }, id) => {
  return new Promise((resolve, reject) => {
    commit('DELETE_ROW_RESPONSES_DATA', id)
    resolve()
  })
}

export default {
  clearResponses,
  fetchResponses,
  fetchUserResponses,
  setFieldResponsesData,
  deleteRowResponsesData
}
