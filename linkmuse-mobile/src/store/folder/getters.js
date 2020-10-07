import _ from 'lodash'

/* FOLDERS */
export function getFolders (state) {
  return state.folders.data
}

export function getFolderById (state) {
  return id => _.find(state.folders.data, (d) => d['folder_id'] === id)
}

export function getCountFolders (state) {
  return state.folders.count
}

export function getOffsetFolders (state) {
  return state.folders.offset
}

export function getFoldersLoading (state) {
  return state.folders.loading
}

export function getFoldersInfiniteDisabled (state) {
  return state.folders.infiniteDisabled
}

export function getInitializedFolders (state) {
  return state.folders.initialized
}

export function getFoldersError (state) {
  return state.folders.error
}

export function getCatalogFieldsFilter (state) {
  return state.folders.filter
}
/* END FOLDERS */

/* SHOW FOLDER */
export function getShowFolderLoading (state) {
  return state.show.loading
}

export function getShowFolderData (state) {
  return state.show.data
}

export function getShowFolderError (state) {
  return state.show.error
}
/* END SHOW FOLDER */

/* SHOW FOLDER USER */
export function getUsersFolder (state) {
  return state.show.users.data
}

export function getUserFolderById (state) {
  return id => _.find(state.show.users.data, (u) => u['id'] === id)
}

export function getCountUsersFolder (state) {
  return state.show.users.count
}

export function getOffsetUsersFolder (state) {
  return state.show.users.offset
}

export function getUsersFolderLoading (state) {
  return state.show.users.loading
}

export function getUsersFolderInfiniteDisabled (state) {
  return state.show.users.infiniteDisabled
}

export function getInitializedUsersFolder (state) {
  return state.show.users.initialized
}

export function getUsersFolderError (state) {
  return state.show.users.error
}
/* END SHOW FOLDER USERS */

export default {
  getFolders,
  getFolderById,
  getUsersFolder,
  getCountFolders,
  getFoldersError,
  getOffsetFolders,
  getUserFolderById,
  getFoldersLoading,
  getShowFolderData,
  getShowFolderError,
  getCountUsersFolder,
  getUsersFolderError,
  getOffsetUsersFolder,
  getShowFolderLoading,
  getInitializedFolders,
  getUsersFolderLoading,
  getInitializedUsersFolder,
  getFoldersInfiniteDisabled,
  getUsersFolderInfiniteDisabled
}
