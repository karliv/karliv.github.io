export const fetchCategories = ({ commit, rootState: { $api } }) => {
  commit('SET_INTERVIEWS_CATEGORIES_LOADING', true)

  return $api.get(`/api/v1/interviews/categories`).then((response) => {
    let { data: { data } } = response

    commit('SET_INTERVIEWS_CATEGORIES_DATA', { data })
    commit('SET_INTERVIEWS_CATEGORIES_LOADING', false)
    commit('SET_INTERVIEWS_CATEGORIES_ERROR', false)
  }, (response) => {
    commit('SET_INTERVIEWS_CATEGORIES_LOADING', false)
    commit('SET_INTERVIEWS_CATEGORIES_ERROR', true)
  })
}

export function setInterviewOnCatalogFiledById ({ commit }, { id, key, value }) {
  return new Promise((resolve, reject) => {
    commit('SET_INTERVIEW_ON_CATALOG_FIELD_BY_ID', { id, key, value })
    resolve()
  })
}

export const setActiveInterviewsCategory = ({ commit }, category) => {
  commit('SET_ACTIVE_INTERVIEW_CATEGORY', category)
}

export const fetchInterviewsByCategory = ({ state, commit, rootState: { $api } }, { category = null, limit, rewrite = false }) => {
  if (state.lists.loading) return
  commit('SET_INTERVIEWS_LOADING', true)

  let params = {
    limit,
    category,
    offset: (rewrite) ? 0 : state.lists.offset
  }

  return $api.get(`/api/v1/interviews`, params).then((response) => {
    let { data: { data, meta: { count, new_offset } } } = response

    commit('SET_INTERVIEWS_DATA', { data, count, offset: new_offset, rewrite })
    commit('SET_INTERVIEWS_LOADING', false)
    commit('SET_INTERVIEWS_ERROR', false)
    commit('SET_INTERVIEWS_INFINITE_DISABLED', (new_offset >= count))
  }, (response) => {
    commit('SET_INTERVIEWS_LOADING', false)
    commit('SET_INTERVIEWS_ERROR', true)
    commit('SET_INTERVIEWS_INFINITE_DISABLED', (true))
  })
}

export const getInterviewByCategoryAndSlug = ({ commit, rootState: { $api } }, { category, slug }) => {
  commit('SET_SINGLE_INTERVIEW_LOADING', true)

  return $api.get(`api/v1/interviews/${category}/${slug}`).then(response => {
    let { data: { data } } = response

    commit('SET_SINGLE_INTERVIEW_DATA', data)
    commit('SET_SINGLE_INTERVIEW_LOADING', false)
    commit('SET_SINGLE_INTERVIEW_ERROR', false)
  }).catch(() => {
    commit('SET_SINGLE_INTERVIEW_LOADING', false)
    commit('SET_SINGLE_INTERVIEW_ERROR', true)
  })
}

export const setSingleInterviewDataFields = ({ commit }, { key, value }) => {
  return new Promise((resolve, reject) => {
    commit('SET_SINGLE_INTERVIEW_DATA_FIELD', { key, value })
    resolve()
  })
}

export default {
  fetchCategories,
  setActiveInterviewsCategory,
  fetchInterviewsByCategory,
  getInterviewByCategoryAndSlug,
  setSingleInterviewDataFields,
  setInterviewOnCatalogFiledById
}
