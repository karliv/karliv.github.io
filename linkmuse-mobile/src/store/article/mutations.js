import _ from 'lodash'

export function SET_ARTICLES_TAGS_LOADING (state, value) {
  state.tags.loading = value
}

export function SET_ARTICLES_TAGS_ERROR (state, value) {
  state.tags.error = value
}

export function SET_ARTICLES_TAGS_DATA (state, { data }) {
  state.tags.data = data
}

export function SET_ACTIVE_ARTICLE_CATEGORY (state, value) {
  state.category = value
}

export function SET_ARTICLES_DATA (state, { data, count, offset, rewrite }) {
  if (rewrite) {
    state.articles.data = data
  } else state.articles.data.push(...data)
  state.articles.count = count
  state.articles.offset = offset
}

export function SET_ARTICLES_INFINITE_DISABLED (state, value) {
  state.articles.infiniteDisabled = value
}

export function SET_ARTICLES_LOADING (state, value) {
  state.articles.loading = value
}

export function SET_ARTICLES_ERROR (state, value) {
  state.articles.error = value
}

export function SET_ARTICLE_ON_CATALOG_FIELD_BY_ID (state, { id, key, value }) {
  let article = _.find(state.articles.data, (a) => a.id === id)
  if (article) _.set(article, key, value)
}

export function SET_SINGLE_ARTICLE_DATA (state, value) {
  state.article.data = value
}
export function SET_SINGLE_ARTICLE_DATA_FIELD (state, { key, value }) {
  _.set(state.article.data, key, value)
}

export function SET_SINGLE_ARTICLE_LOADING (state, value) {
  state.article.loading = value
}

export function SET_SINGLE_ARTICLE_ERROR (state, value) {
  state.article.error = value
}

export default {
  SET_ARTICLES_TAGS_DATA,
  SET_ARTICLES_TAGS_ERROR,
  SET_ARTICLES_TAGS_LOADING,
  SET_ARTICLES_DATA,
  SET_ARTICLES_ERROR,
  SET_ARTICLES_LOADING,
  SET_ARTICLES_INFINITE_DISABLED,
  SET_ARTICLE_ON_CATALOG_FIELD_BY_ID,
  SET_SINGLE_ARTICLE_DATA,
  SET_SINGLE_ARTICLE_DATA_FIELD,
  SET_SINGLE_ARTICLE_LOADING,
  SET_SINGLE_ARTICLE_ERROR
}
