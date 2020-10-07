import Vue from 'vue'
import _ from 'lodash'
import { vueSet } from 'vue-deepset'

/* FOLDERS */
export function SET_FOLDERS_LOADING (state, value) {
  state.folders.loading = value
}

export function SET_FOLDERS_ERROR (state, value) {
  state.folders.error = value
}

export function SET_FOLDERS_DATA (state, { data, count, offset, replace }) {
  Object.assign(state.folders, {
    count,
    offset,
    data: (replace) ? (data) : [...state.folders.data, ...data]
  })
}

export function CLEAR_FOLDERS (state) {
  Object.assign(state.folders, {
    data: [],
    count: 0,
    offset: 0,
    error: false,
    loading: false,
    initialized: false,
    infiniteDisabled: true
  })
}

export function CLEAR_FOLDERS_DATA (state) {
  Object.assign(state.folders, {
    data: [],
    count: 0,
    offset: 0,
    error: false,
    loading: true,
    initialized: true,
    infiniteDisabled: true
  })
}

export function SET_FOLDERS_INITIALIZED (state, value) {
  state.folders.initialized = value
}

export function SET_FOLDERS_INFINITE_DISABLED (state, value) {
  state.folders.infiniteDisabled = value
}

export function SET_FOLDER_FIELD_BY_ID (state, { id, key, value }) {
  let folder = _.find(state.folders.data, (d) => d['folder_id'] === id)
  if (folder) _.set(folder, key, value)
}

export function CREATE_FOLDER (state, data) {
  let { count, offset } = state.folders

  state.folders.data.unshift(data)
  Object.assign(state.folders, {
    count: ++count,
    offset: ++offset
  })
}

export function DESTROY_FOLDER_BY_ID (state, id) {
  let indexOf = _.findIndex(state.folders.data, (d) => d['folder_id'] === id)
  if (indexOf > -1) {
    Vue.delete(state.folders.data, indexOf)

    const count = (state.folders.count > 0) ? --state.folders.count : 0
    const offset = (state.folders.offset > 0) ? --state.folders.offset : 0

    Vue.set(state.folders, 'count', count)
    Vue.set(state.folders, 'offset', offset)
  }
}
/* END FOLDERS */

/* SET SHOW FOLDER */
export function SET_SHOW_FOLDER_LOADING (state, value) {
  state.show.loading = value
}

export function SET_SHOW_FOLDER_ERROR (state, value) {
  state.show.error = value
}

export function SET_SHOW_FOLDER_DATA (state, { data }) {
  state.show.data = data
}

export function SET_FIELD_FOLDER_DATA (state, { key, value }) {
  vueSet(state.show.data, key, value)
}

/* END SHOW FOLDER */

/* SHOW FOLDER USERS */
export function SET_USERS_FOLDER_LOADING (state, value) {
  state.show.users.loading = value
}

export function SET_USERS_FOLDER_ERROR (state, value) {
  state.show.users.error = value
}

export function SET_USERS_FOLDER_DATA (state, { data, count, offset, replace }) {
  Object.assign(state.show.users, {
    count,
    offset,
    data: (replace) ? (data) : [...state.show.users, ...data]
  })
}

export function CLEAR_USERS_FOLDER (state) {
  Object.assign(state.show.users, {
    data: [],
    count: 0,
    offset: 0,
    error: false,
    loading: false,
    initialized: false,
    infiniteDisabled: true
  })
}

export function SET_USERS_FOLDER_INITIALIZED (state, value) {
  state.show.users.initialized = value
}

export function SET_USERS_FOLDER_INFINITE_DISABLED (state, value) {
  state.show.users.infiniteDisabled = value
}

export function CREATE_USER_FOLDER (state, data) {
  let { count, offset } = state.show.users

  state.show.users.data.push(data)
  Object.assign(state.show.users, {
    count: ++count,
    offset: ++offset
  })
}

export function DESTROY_USER_FOLDER_BY_ID (state, id) {
  let indexOf = _.findIndex(state.show.users.data, (u) => u['id'] === id)
  if (indexOf > -1) {
    Vue.delete(state.show.users.data, indexOf)

    const count = (state.show.users.count > 0) ? --state.show.users.count : 0
    const offset = (state.show.users.offset > 0) ? --state.show.users.offset : 0

    Vue.set(state.show.users, 'count', count)
    Vue.set(state.show.users, 'offset', offset)
  }
}
/* END SHOW FOLDER USERS */

export default {
  CLEAR_FOLDERS,
  CREATE_FOLDER,
  SET_FOLDERS_DATA,
  SET_FOLDERS_ERROR,
  CLEAR_FOLDERS_DATA,
  CLEAR_USERS_FOLDER,
  CREATE_USER_FOLDER,
  SET_FOLDERS_LOADING,
  DESTROY_FOLDER_BY_ID,
  SET_SHOW_FOLDER_DATA,
  SET_SHOW_FOLDER_ERROR,
  SET_USERS_FOLDER_DATA,
  SET_FIELD_FOLDER_DATA,
  SET_FOLDER_FIELD_BY_ID,
  SET_FOLDERS_INITIALIZED,
  SET_USERS_FOLDER_ERROR,
  SET_SHOW_FOLDER_LOADING,
  SET_USERS_FOLDER_LOADING,
  DESTROY_USER_FOLDER_BY_ID,
  SET_USERS_FOLDER_INITIALIZED,
  SET_FOLDERS_INFINITE_DISABLED,
  SET_USERS_FOLDER_INFINITE_DISABLED
}
