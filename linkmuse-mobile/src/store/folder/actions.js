export const fetchFolders = ({ commit, state, rootState: { $api } }, { fields, offset, limit = 24 }) => {
  return new Promise((resolve, reject) => {
    commit('SET_FOLDERS_LOADING', true)
    commit('SET_FOLDERS_INITIALIZED', true)
    commit('SET_FOLDERS_INFINITE_DISABLED', true)

    return $api.get(`api/v1/folders`, { ...fields, offset, limit }).then((response) => {
      let { data: { data, meta: { count, new_offset } } } = response

      commit('SET_FOLDERS_DATA', { data, count, offset: new_offset, replace: (offset === 0) })
      commit('SET_FOLDERS_LOADING', false)
      commit('SET_FOLDERS_ERROR', false)
      commit('SET_FOLDERS_INFINITE_DISABLED', (new_offset >= count))
      resolve && resolve((new_offset >= count))
    }, (response) => {
      commit('SET_FOLDERS_LOADING', false)
      commit('SET_FOLDERS_ERROR', true)
      commit('SET_FOLDERS_INFINITE_DISABLED', true)
      reject && reject()
    })
  })
}

export function setFolderFiledById ({ commit }, { id, key, value }) {
  return new Promise((resolve, reject) => {
    commit('SET_FOLDER_FIELD_BY_ID', { id, key, value })
    resolve()
  })
}

export function createFolder ({ commit }, data) {
  return new Promise((resolve, reject) => {
    try {
      commit('CREATE_FOLDER', data)
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}

export function destroyFolderById ({ commit }, id) {
  return new Promise((resolve, reject) => {
    try {
      commit('DESTROY_FOLDER_BY_ID', id)
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}

export const clearFolders = ({ commit }) => {
  return new Promise((resolve, reject) => {
    try {
      commit('CLEAR_FOLDERS')
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}

export const getFolderById = ({ commit, state, rootState: { $api } }, { id }) => {
  commit('SET_SHOW_FOLDER_LOADING', true)

  return $api.get(`api/v1/folders/${id}`).then((response) => {
    let { data: { data } } = response

    commit('SET_SHOW_FOLDER_DATA', { data })
    commit('SET_SHOW_FOLDER_LOADING', false)
    commit('SET_SHOW_FOLDER_ERROR', false)
  }, (response) => {
    commit('SET_SHOW_FOLDER_LOADING', false)
    commit('SET_SHOW_FOLDER_ERROR', true)
  })
}

export const setFieldFolderData = ({ commit }, { key, value }) => {
  return new Promise((resolve, reject) => {
    commit('SET_FIELD_FOLDER_DATA', { key, value })
    resolve()
  })
}

export const fetchUsersByFolderId = ({ commit, state, rootState: { $api } }, { id, offset, limit = 24 }) => {
  return new Promise((resolve, reject) => {
    commit('SET_USERS_FOLDER_LOADING', true)
    commit('SET_USERS_FOLDER_INITIALIZED', true)
    commit('SET_USERS_FOLDER_INFINITE_DISABLED', true)

    return $api.get(`api/v1/folders/${id}/users`, { offset, limit }).then((response) => {
      let { data: { data, meta: { total, next } } } = response

      commit('SET_USERS_FOLDER_DATA', { data, count: total, offset: next, replace: (offset === 0) })
      commit('SET_USERS_FOLDER_LOADING', false)
      commit('SET_USERS_FOLDER_ERROR', false)
      commit('SET_USERS_FOLDER_INFINITE_DISABLED', (!next))
      resolve && resolve((!next))
    }, (response) => {
      commit('SET_USERS_FOLDER_LOADING', false)
      commit('SET_USERS_FOLDER_ERROR', true)
      commit('SET_USERS_FOLDER_INFINITE_DISABLED', true)
      reject && reject()
    })
  })
}

export function createUserFolder ({ commit }, data) {
  return new Promise((resolve, reject) => {
    try {
      commit('CREATE_USER_FOLDER', data)
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}

export function destroyUserFolderById ({ commit }, id) {
  return new Promise((resolve, reject) => {
    try {
      commit('DESTROY_USER_FOLDER_BY_ID', id)
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}

export const clearUsersFolder = ({ commit }) => {
  return new Promise((resolve, reject) => {
    try {
      commit('CLEAR_USERS_FOLDER')
      resolve && resolve()
    } catch (e) {
      reject && reject()
    }
  })
}

export default {
  createFolder,
  clearFolders,
  fetchFolders,
  getFolderById,
  clearUsersFolder,
  createUserFolder,
  destroyFolderById,
  setFolderFiledById,
  setFieldFolderData,
  fetchUsersByFolderId,
  destroyUserFolderById
}
