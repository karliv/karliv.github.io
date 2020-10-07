export function getPageData (state) {
  return state.page.data
}

export function getPageLoading (state) {
  return state.page.loading
}

export function getPageError (state) {
  return state.page.error
}

export default {
  getPageData,
  getPageError,
  getPageLoading
}
