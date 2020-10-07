import Qs from 'qs'

export const fetchTags = ({ commit, rootState: { $api } }) => {
  commit('SET_ARTICLES_TAGS_LOADING', true)

  return $api.get(`/api/v1/articles/tags`).then((response) => {
    let { data: { data } } = response

    commit('SET_ARTICLES_TAGS_DATA', { data })
    commit('SET_ARTICLES_TAGS_LOADING', false)
    commit('SET_ARTICLES_TAGS_ERROR', false)
  }, (response) => {
    commit('SET_ARTICLES_TAGS_LOADING', false)
    commit('SET_ARTICLES_TAGS_ERROR', true)
  })
}

export const setActiveArticlesTag = ({ commit }, tag) => {
  commit('SET_ACTIVE_ARTICLE_TAG', tag)
}

export const fetchArticlesByTag = ({ state, commit, rootState: { $api } }, { tag = null, limit, rewrite = false }) => {
  if (state.articles.loading) return
  commit('SET_ARTICLES_LOADING', true)

  let params = {
    limit,
    offset: (rewrite) ? 0 : state.articles.offset
  }

  if (tag) {
    params['tags[]'] = tag
  }

  return $api.get(`/api/v1/articles`, params).then((response) => {
    let { data: { data, meta: { count, new_offset } } } = response

    commit('SET_ARTICLES_DATA', { data, count, offset: new_offset, rewrite })
    commit('SET_ARTICLES_LOADING', false)
    commit('SET_ARTICLES_ERROR', false)
    commit('SET_ARTICLES_INFINITE_DISABLED', (new_offset >= count))
  }, (response) => {
    commit('SET_ARTICLES_LOADING', false)
    commit('SET_ARTICLES_ERROR', true)
    commit('SET_ARTICLES_INFINITE_DISABLED', (true))
  })
}

export function setArticleOnCatalogFiledById ({ commit }, { id, key, value }) {
  return new Promise((resolve, reject) => {
    commit('SET_ARTICLE_ON_CATALOG_FIELD_BY_ID', { id, key, value })
    resolve()
  })
}

export const getArticleBySlug = ({ commit, rootState: { $api } }, { slug }) => {
  commit('SET_SINGLE_ARTICLE_LOADING', true)

  return $api.get(`api/v1/articles/${slug}`).then(response => {
    let { data: { data } } = response

    commit('SET_SINGLE_ARTICLE_DATA', data)
    commit('SET_SINGLE_ARTICLE_LOADING', false)
    commit('SET_SINGLE_ARTICLE_ERROR', false)
  }).catch(() => {
    commit('SET_SINGLE_ARTICLE_LOADING', false)
    commit('SET_SINGLE_ARTICLE_ERROR', true)
  })
}

export const setSingleArticleDataFields = ({ commit }, { key, value }) => {
  return new Promise((resolve, reject) => {
    commit('SET_SINGLE_ARTICLE_DATA_FIELD', { key, value })
    resolve()
  })
}

export default {
  fetchTags,
  getArticleBySlug,
  fetchArticlesByTag,
  setActiveArticlesTag,
  setArticleOnCatalogFiledById,
  setSingleArticleDataFields
}
