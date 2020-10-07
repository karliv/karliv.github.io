export const fetchDialogs = ({ commit, state, rootState: { $api } }, { rewrite = false }) => {
  return new Promise((resolve, reject) => {
    let offset = (rewrite) ? 0 : state.dialogs.offset

    commit('SET_DIALOGS_LOADING', true)
    commit('SET_DIALOGS_INFINITE_DISABLED', true)

    return $api.get(`api/v1/dialogs`, { offset }).then((response) => {
      let { data: { data, meta: { count, new_offset } } } = response

      commit('SET_DIALOGS_DATA', { data, count, offset: new_offset, rewrite })
      commit('SET_DIALOGS_LOADING', false)
      commit('SET_DIALOGS_ERROR', false)
      commit('SET_DIALOGS_INFINITE_DISABLED', (new_offset >= count))
      resolve && resolve()
    }, (response) => {
      commit('SET_DIALOGS_LOADING', false)
      commit('SET_DIALOGS_ERROR', true)
      commit('SET_DIALOGS_INFINITE_DISABLED', true)
      reject && reject()
    })
  })
}

export function setDialogFiledById ({ commit }, { id, key, value }) {
  return new Promise((resolve, reject) => {
    commit('SET_DIALOG_FIELD_BY_ID', { id, key, value })
    resolve()
  })
}

export const clearDialogs = ({ commit }) => {
  return new Promise((resolve, reject) => {
    try {
      commit('CLEAR_DIALOGS')
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}

export const fetchSearchDialogs = ({ commit, state, rootState: { $api } }, { q, rewrite = false }) => {
  let offset = (rewrite) ? 0 : state.search.dialogs.offset

  commit('SET_SEARCH_DIALOGS_LOADING', true)
  commit('SET_SEARCH_DIALOGS_INFINITE_DISABLED', true)

  return $api.get(`api/v1/dialogs/search`, { q, offset }).then((response) => {
    let { data: { data, meta: { count, new_offset } } } = response

    commit('SET_SEARCH_DIALOGS_DATA', { data, count, offset: new_offset, rewrite })
    commit('SET_SEARCH_DIALOGS_LOADING', false)
    commit('SET_SEARCH_DIALOGS_ERROR', false)
    commit('SET_SEARCH_DIALOGS_INFINITE_DISABLED', (new_offset >= count))
    commit('SET_SEARCH_DIALOGS_INITIAL', true)
  }, (response) => {
    commit('SET_SEARCH_DIALOGS_LOADING', false)
    commit('SET_SEARCH_DIALOGS_ERROR', true)
    commit('SET_SEARCH_DIALOGS_INFINITE_DISABLED', true)
  })
}

export const setFirstPositionDialog = ({ commit, state, rootState: { $api } }, id) => {
  return new Promise((resolve, reject) => {
    try {
      commit('SET_FIRST_POSITION_DIALOG', id)
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}

export const fetchMessagesByDialogId = ({ commit, state, rootState: { $api } }, { uid, rewrite = false }) => {
  return new Promise((resolve, reject) => {
    let offset = (rewrite) ? 0 : state.messages.offset

    commit('SET_MESSAGES_LOADING', true)
    commit('SET_MESSAGES_INFINITE_DISABLED', true)

    return $api.get(`api/v1/dialogs/${uid}/messages`, {offset}).then((response) => {
      let {data: {data, meta: {count, new_offset}}} = response
      commit('SET_MESSAGES_DATA', {data, count, offset: new_offset, rewrite})
      commit('SET_MESSAGES_LOADING', false)
      commit('SET_MESSAGES_ERROR', false)
      commit('SET_MESSAGES_INFINITE_DISABLED', (new_offset >= count))
      resolve && resolve()
    }, (response) => {
      commit('SET_MESSAGES_LOADING', false)
      commit('SET_MESSAGES_ERROR', true)
      commit('SET_MESSAGES_INFINITE_DISABLED', true)
      reject && reject()
    })
  })
}

export const clearMessages = ({ commit }) => {
  return new Promise((resolve, reject) => {
    try {
      commit('CLEAR_MESSAGES')
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}

export const getDialogById = ({ commit, state, rootState: { $api } }, id) => {
  commit('SET_SHOW_DIALOG_LOADING', true)

  return $api.get(`api/v1/dialogs/${id}`).then((response) => {
    let { data: { data } } = response

    commit('SET_SHOW_DIALOG_DATA', { data })
    commit('SET_SHOW_DIALOG_LOADING', false)
    commit('SET_SHOW_DIALOG_ERROR', false)
  }, (response) => {
    commit('SET_SHOW_DIALOG_LOADING', false)
    commit('SET_SHOW_DIALOG_ERROR', true)
  })
}

export default {
  clearDialogs,
  fetchDialogs,
  clearMessages,
  getDialogById,
  setDialogFiledById,
  fetchSearchDialogs,
  setFirstPositionDialog,
  fetchMessagesByDialogId
}
