export const setBanner = ({ commit }, { mobile }) => {
  return new Promise((resolve, reject) => {
    commit('SET_BANNER', mobile)
    commit('SHOW_BANNER')
    resolve()
  })
}

export const showBanner = ({ commit }, status) => {
  status ? commit('SHOW_BANNER') : commit('HIDE_BANNER')
}

export default {
  setBanner,
  showBanner
}
