import Qs from 'qs'

export function getStatus ({ commit, state, rootState: { $api } }, { userId, signature }) {
  commit('SET_LOADING', true)

  return $api.get(`/api/v1/users/${userId}/unsubscribe/status`).then((response) => {
    let { data: { data: { unsubscribe_status } } } = response

    commit('SET_STATUS', unsubscribe_status)
    commit('SET_ERROR', false)
    commit('SET_LOADING', false)
  }, (response) => {
    commit('SET_LOADING', false)
    commit('SET_ERROR', true)
  })
}

export function setStatus ({ commit, state, rootState: { $api } }, { userId, signature }) {
  commit('SET_LOADING', true)

  return $api.patch(`/unsubscribe/${userId}?signature=${signature}`, Qs.stringify({
    status: state.status ? 0 : 1,
    is_mobile: 1
  }), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((response) => {
    commit('SET_STATUS', !state.status)
    commit('SET_ERROR', false)
    commit('SET_LOADING', false)
  }, (response) => {
    commit('SET_LOADING', false)
    commit('SET_ERROR', true)
  })
}

export default {
  getStatus,
  setStatus
}
