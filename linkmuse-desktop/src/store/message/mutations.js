import Vue from 'vue'
import _ from 'lodash'

/* DIALOGS */
export function SET_DIALOGS_LOADING (state, value) {
  state.dialogs.loading = value
}

export function SET_DIALOGS_ERROR (state, value) {
  state.dialogs.error = value
}

export function SET_DIALOGS_DATA (state, { data, count, offset, rewrite }) {
  if (rewrite) {
    Vue.set(state.dialogs, 'data', data)
  } else state.dialogs.data.push(...data)
  Object.assign(state.dialogs, {
    count,
    offset
  })
}

export function CLEAR_DIALOGS (state) {
  Object.assign(state.dialogs, {
    data: [],
    count: 0,
    offset: 0,
    error: false,
    loading: false,
    initialized: false,
    infiniteDisabled: true
  })
}

export function SET_DIALOGS_INITIALIZED (state, value) {
  state.dialogs.initialized = value
}

export function SET_DIALOGS_INFINITE_DISABLED (state, value) {
  state.dialogs.infiniteDisabled = value
}

export function SET_DIALOG_FIELD_BY_ID (state, { id, key, value }) {
  let dialog = _.find(state.dialogs.data, (d) => d.id === id)
  if (dialog) _.set(dialog, key, value)
}

export function CREATE_DIALOG (state, data) {
  let { count, offset } = state.dialogs

  state.dialogs.data.push(data)
  Object.assign(state.dialogs, {
    count: ++count,
    offset: ++offset
  })
}

export function DESTROY_DIALOG_BY_ID (state, id) {
  let indexOf = _.findIndex(state.dialogs.data, (d) => d.id === id)
  if (indexOf > -1) {
    Vue.delete(state.dialogs.data, indexOf)

    const count = (state.dialogs.count > 0) ? --state.dialogs.count : 0
    const offset = (state.dialogs.offset > 0) ? --state.dialogs.offset : 0

    Vue.set(state.dialogs, 'count', count)
    Vue.set(state.dialogs, 'offset', offset)
  }
/* END DIALOGS */

/* SEARCH DIALOGS */
}
export function SET_SEARCH_DIALOGS_LOADING (state, value) {
  state.search.dialogs.loading = value
}

export function SET_SEARCH_DIALOGS_INFINITE_DISABLED (state, value) {
  state.search.dialogs.infiniteDisabled = value
}

export function SET_SEARCH_DIALOGS_ERROR (state, value) {
  state.search.dialogs.error = value
}

export function SET_SEARCH_DIALOGS_INITIAL (state, value) {
  state.search.dialogs.initial = value
}

export function SET_SEARCH_DIALOGS_DATA (state, { data, count, offset, rewrite }) {
  if (rewrite) {
    Vue.set(state.search.dialogs, 'data', data)
  } else state.search.dialogs.data.push(...data)
  Object.assign(state.search.dialogs, {
    count,
    offset
  })
}

/* END SEARCH DIALOGS */

/* MESSAGES */
export function SET_MESSAGES_LOADING (state, value) {
  state.messages.loading = value
}

export function SET_MESSAGES_ERROR (state, value) {
  state.messages.error = value
}

export function SET_MESSAGES_DATA (state, { data, count, offset, rewrite }) {
  if (rewrite) {
    Vue.set(state.messages, 'data', data)
  } else state.messages.data = _.concat(data, state.messages.data)
  Object.assign(state.messages, {
    count,
    offset
  })
}

export function ADD_NEW_MESSAGE_ON_DATA (state, message) {
  state.messages.data.push(message)
  state.messages.count++
}

export function UPDATE_MESSAGE_ON_DATA_BY_UUID (state, { uuid, message }) {
  let index = _.findIndex(state.messages.data, (msg) => msg.uuid === uuid)
  if (index > -1) {
    Vue.set(state.messages.data, index, message)
  }
}

export function DESTROY_MESSAGE_ON_DATA_BY_UUID (state, { uuid }) {
  let index = _.findIndex(state.messages.data, (msg) => msg.uuid === uuid)
  if (index > -1) {
    Vue.delete(state.messages.data, index)

    const count = (state.messages.count > 0) ? --state.messages.count : 0
    const offset = (state.messages.offset > 0) ? --state.messages.offset : 0

    Vue.set(state.messages, 'count', count)
    Vue.set(state.messages, 'offset', offset)
  }
}

export function DESTROY_MESSAGE_ON_DATA_BY_ID (state, { id }) {
  let index = _.findIndex(state.messages.data, (msg) => msg.id === id)
  if (index > -1) {
    Vue.delete(state.messages.data, index)

    const count = (state.messages.count > 0) ? --state.messages.count : 0
    const offset = (state.messages.offset > 0) ? --state.messages.offset : 0

    Vue.set(state.messages, 'count', count)
    Vue.set(state.messages, 'offset', offset)
  }
}

export function UPDATE_OFFSET_MESSAGE_ON_DATA (state) {
  state.messages.offset++
}

export function UPDATE_FIELD_MESSAGE_ON_DATA_BY_UUID (state, { uuid, key, value }) {
  let index = _.findIndex(state.messages.data, (msg) => msg.uuid === uuid)
  if (index > -1) {
    _.set(state.messages.data[index], key, value)
  }
}

export function CLEAR_MESSAGES (state) {
  Object.assign(state.messages, {
    data: [],
    count: 0,
    offset: 0,
    error: false,
    loading: false,
    infiniteDisabled: true
  })
}

export function SET_MESSAGES_INFINITE_DISABLED (state, value) {
  state.messages.infiniteDisabled = value
}
/* END MESSAGES */

/* SET SHOW DIALOG */
export function SET_SHOW_DIALOG_LOADING (state, value) {
  state.show.loading = value
}

export function SET_SHOW_DIALOG_ERROR (state, value) {
  state.show.error = value
}

export function SET_SHOW_DIALOG_DATA (state, { data }) {
  state.show.data = data
}
/* END SHOW DIALOG */

export default {
  CLEAR_DIALOGS,
  CREATE_DIALOG,
  CLEAR_MESSAGES,
  SET_DIALOGS_DATA,
  SET_MESSAGES_DATA,
  SET_DIALOGS_ERROR,
  SET_MESSAGES_ERROR,
  SET_DIALOGS_LOADING,
  DESTROY_DIALOG_BY_ID,
  SET_MESSAGES_LOADING,
  SET_SHOW_DIALOG_DATA,
  SET_SHOW_DIALOG_ERROR,
  SET_DIALOG_FIELD_BY_ID,
  SET_DIALOGS_INITIALIZED,
  SET_SHOW_DIALOG_LOADING,
  SET_SEARCH_DIALOGS_DATA,
  ADD_NEW_MESSAGE_ON_DATA,
  SET_SEARCH_DIALOGS_ERROR,
  SET_SEARCH_DIALOGS_INITIAL,
  SET_SEARCH_DIALOGS_LOADING,
  UPDATE_OFFSET_MESSAGE_ON_DATA,
  DESTROY_MESSAGE_ON_DATA_BY_ID,
  SET_DIALOGS_INFINITE_DISABLED,
  UPDATE_MESSAGE_ON_DATA_BY_UUID,
  DESTROY_MESSAGE_ON_DATA_BY_UUID,
  SET_MESSAGES_INFINITE_DISABLED,
  UPDATE_FIELD_MESSAGE_ON_DATA_BY_UUID,
  SET_SEARCH_DIALOGS_INFINITE_DISABLED
}
