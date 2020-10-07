export function getDialogs (state) {
  return state.dialogs.data
}

export function getCountDialogs (state) {
  return state.dialogs.count
}

export function getOffsetDialogs (state) {
  return state.dialogs.offset
}

export function getDialogsLoading (state) {
  return state.dialogs.loading
}

export function getDialogsInfiniteDisabled (state) {
  return state.dialogs.infiniteDisabled
}

export function getDialogsError (state) {
  return state.dialogs.error
}

export function getSearchDialogs (state) {
  return state.search.dialogs.data
}

export function getSearchCountDialogs (state) {
  return state.search.dialogs.count
}

export function getSearchDialogsLoading (state) {
  return state.search.dialogs.loading
}

export function getSearchDialogsInfiniteDisabled (state) {
  return state.search.dialogs.infiniteDisabled
}

export function getSearchDialogsError (state) {
  return state.search.dialogs.error
}

export function getSearchDialogsInitial (state) {
  return state.search.dialogs.initial
}

export function getMessages (state) {
  return state.messages.data
}

export function getCountMessages (state) {
  return state.messages.count
}

export function getOffsetMessages (state) {
  return state.messages.offset
}

export function getMessagesLoading (state) {
  return state.messages.loading
}

export function getMessagesInfiniteDisabled (state) {
  return state.messages.infiniteDisabled
}

export function getMessagesError (state) {
  return state.messages.error
}

export function getShowDialogLoading (state) {
  return state.show.loading
}

export function getShowDialogData (state) {
  return state.show.data
}

export function getShowDialogError (state) {
  return state.show.error
}

export default {
  getDialogs,
  getCountDialogs,
  getDialogsError,
  getOffsetDialogs,
  getDialogsLoading,
  getDialogsInfiniteDisabled,
  getSearchDialogs,
  getSearchCountDialogs,
  getSearchDialogsLoading,
  getSearchDialogsInfiniteDisabled,
  getSearchDialogsError,
  getSearchDialogsInitial,
  getMessages,
  getCountMessages,
  getOffsetMessages,
  getMessagesLoading,
  getMessagesInfiniteDisabled,
  getMessagesError,
  getShowDialogLoading,
  getShowDialogData,
  getShowDialogError
}
