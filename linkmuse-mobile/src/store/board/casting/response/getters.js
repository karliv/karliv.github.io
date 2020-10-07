import _ from 'lodash'

/** START CASTINGS */
export function getResponsesData (state) {
  return state.responses.data
}

export function getResponseById (state) {
  return id => _.find(state.responses.data, (u) => u['id'] === id)
}

export function getResponsesTotal (state) {
  return Number(state.responses.total)
}

export function getNotReadResponsesTotal (state) {
  return Number(state.responses.notRead)
}

export function getResponsesLoading (state) {
  return state.responses.loading
}
export function getResponsesOffset (state) {
  return state.responses.offset
}

export function getResponsesInfiniteDisabled (state) {
  return state.responses.infiniteDisabled
}

export function getResponsesError (state) {
  return state.responses.error
}
/** END CASTINGS */

export default {
  getResponseById,
  getResponsesData,
  getResponsesTotal,
  getResponsesError,
  getResponsesOffset,
  getResponsesLoading,
  getNotReadResponsesTotal,
  getResponsesInfiniteDisabled
}
