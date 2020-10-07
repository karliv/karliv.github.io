export const getPageBySlug = ({ commit, rootState: { $api } }, { slug }) => {
  commit('SET_PAGE_LOADING', true)

  return $api.get(`api/v1/pages/${slug}`).then(response => {
    let { data: { data } } = response

    commit('SET_PAGE_DATA', data)
    commit('SET_PAGE_ERROR', false)
    commit('SET_PAGE_LOADING', false)
  }).catch(() => {
    commit('SET_PAGE_ERROR', true)
    commit('SET_PAGE_LOADING', false)
  })
}

export default {
  getPageBySlug
}
