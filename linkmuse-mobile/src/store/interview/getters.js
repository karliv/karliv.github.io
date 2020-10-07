export function getCategories (state) {
  return state.categories.data
}

export function getActiveCategory (state) {
  return state.category
}

export function getInterviews (state) {
  return state.lists.data
}

export function getInterviewsLoading (state) {
  return state.lists.loading
}

export function getInterviewsCount (state) {
  return state.lists.count
}

export function getInterviewsError (state) {
  return state.lists.error
}

export function getInterviewsInfiniteDisabled (state) {
  return state.lists.infiniteDisabled
}

export function getSingleInterviewData (state) {
  return state.interview.data
}

export function getSingleInterviewLoading (state) {
  return state.interview.loading
}

export function getSingleInterviewError (state) {
  return state.interview.error
}

export default {
  getInterviews,
  getCategories,
  getActiveCategory,
  getInterviewsError,
  getInterviewsLoading,
  getInterviewsCount,
  getInterviewsInfiniteDisabled,
  getSingleInterviewData,
  getSingleInterviewLoading,
  getSingleInterviewError
}
