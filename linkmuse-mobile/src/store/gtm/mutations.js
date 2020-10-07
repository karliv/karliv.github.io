export function SET_BANNER (state, data) {
  state.banner = { ...state.banner, ...data }
}

export function SHOW_BANNER (state) {
  state.banner.show = true
}

export function HIDE_BANNER (state) {
  state.banner.show = false
}

export default {
  SET_BANNER,
  SHOW_BANNER,
  HIDE_BANNER
}
