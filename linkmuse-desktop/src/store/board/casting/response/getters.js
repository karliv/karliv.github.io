
/** START CASTINGS */
export function getResponsesData (state) {
  return state.responses.data
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
  getResponsesData,
  getResponsesTotal,
  getResponsesError,
  getResponsesOffset,
  getResponsesLoading,
  getNotReadResponsesTotal,
  getResponsesInfiniteDisabled
}
