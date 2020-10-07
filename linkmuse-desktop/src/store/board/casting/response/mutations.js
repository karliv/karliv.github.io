import Vue from 'vue'
import _ from 'lodash'
import { vueSet } from 'vue-deepset'

/** START RESPONSES */
export function SET_RESPONSES_LOADING (state, value) {
  state.responses.loading = value
}

export function SET_RESPONSES_ERROR (state, value) {
  state.responses.error = value
}

export function SET_RESPONSES_INFINITE_DISABLED (state, value) {
  state.responses.infiniteDisabled = value
}

export function SET_RESPONSES_DATA (state, { data, total, offset, notRead, replace }) {
  Object.assign(state.responses, {
    total,
    offset,
    notRead,
    data: (replace) ? (data) : _.uniqBy([...state.responses.data, ...data], 'id')
  })
}

export function SET_NOT_READ_RESPONSES_DATA (state, value) {
  state.responses.notRead = value
}

export function CLEAR_RESPONSES (state) {
  Object.assign(state.responses, {
    data: [],
    total: 0,
    offset: 0,
    error: false,
    loading: false,
    infiniteDisabled: true
  })
}

export function SET_FIELD_RESPONSES_DATA (state, { id, key, value }) {
  let indexOf = state.responses.data.map(item => item.id).indexOf(id)
  if (indexOf > -1) vueSet(state.responses.data[indexOf], key, value)
}

export function DELETE_ROW_RESPONSES_DATA (state, id) {
  let indexOf = state.responses.data.map(item => item.id).indexOf(id)
  if (indexOf > -1) {
    const notRead = state.responses.data[indexOf]['read'] === false

    state.responses.total--
    state.responses.offset--
    notRead && state.responses.notRead--
    Vue.delete(state.responses.data, indexOf)
  }
}
/** END RESPONSES */

export default {
  CLEAR_RESPONSES,
  SET_RESPONSES_DATA,
  SET_RESPONSES_ERROR,
  SET_RESPONSES_LOADING,
  SET_FIELD_RESPONSES_DATA,
  DELETE_ROW_RESPONSES_DATA,
  SET_NOT_READ_RESPONSES_DATA,
  SET_RESPONSES_INFINITE_DISABLED
}
