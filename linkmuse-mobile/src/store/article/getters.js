export function getTags (state) {
  return state.tags.data
}

export function getActiveTag (state) {
  return state.tag
}

export function getArticles (state) {
  return state.articles.data
}

export function getArticlesLoading (state) {
  return state.articles.loading
}

export function getArticlesCount (state) {
  return state.articles.count
}

export function getArticlesError (state) {
  return state.articles.error
}

export function getArticlesInfiniteDisabled (state) {
  return state.articles.infiniteDisabled
}

export function getSingleArticleData (state) {
  return state.article.data
}

export function getSingleArticleLoading (state) {
  return state.article.loading
}

export function getSingleArticleError (state) {
  return state.article.error
}

export default {
  getArticles,
  getTags,
  getActiveTag,
  getArticlesError,
  getArticlesLoading,
  getArticlesCount,
  getArticlesInfiniteDisabled,
  getSingleArticleData,
  getSingleArticleLoading,
  getSingleArticleError
}
