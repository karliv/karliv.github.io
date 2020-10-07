import _ from 'lodash'

/* DIALOGS */
export function getDialogs (state) {
  return _.orderBy(state.dialogs.data, (dialog) => {
    const { message: { date, time } } = dialog
    return new Date(`${date} ${time}`)
  }, 'desc')
}

export function getDialogById (state) {
  return id => _.find(state.dialogs.data, (d) => d.id === id)
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

export function getInitializedDialogs (state) {
  return state.dialogs.initialized
}

export function getDialogsError (state) {
  return state.dialogs.error
}
/* END DIALOGS */

/* SEARCH DIALOGS */
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
/* END SEARCH DIALOGS */

/* MESSAGES */
export function getMessages (state) {
  return state.messages.data
}

export function getMessageById (state) {
  return id => _.find(state.messages.data, (d) => d.id === id)
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
/* END MESSAGES */

/* SHOW DIALOG */
export function getShowDialogLoading (state) {
  return state.show.loading
}

export function getShowDialogData (state) {
  return state.show.data
}

export function getShowDialogError (state) {
  return state.show.error
}
/* END SHOW DIALOG */

export default {
  getDialogs,
  getMessages,
  getDialogById,
  getMessageById,
  getCountDialogs,
  getDialogsError,
  getSearchDialogs,
  getMessagesError,
  getCountMessages,
  getOffsetDialogs,
  getDialogsLoading,
  getShowDialogData,
  getOffsetMessages,
  getMessagesLoading,
  getShowDialogError,
  getShowDialogLoading,
  getInitializedDialogs,
  getSearchDialogsError,
  getSearchCountDialogs,
  getSearchDialogsLoading,
  getSearchDialogsInitial,
  getDialogsInfiniteDisabled,
  getMessagesInfiniteDisabled,
  getSearchDialogsInfiniteDisabled
}
