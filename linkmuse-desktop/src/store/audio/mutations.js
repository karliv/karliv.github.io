export function SET_PLAYLIST (state, value) {
  state.playlist = value
}

export function SET_CURRENT_AUDIO_ID (state, value) {
  state.state.currentId = value
}

export function SET_STATE_PLAYING_AUDIO (state, value) {
  state.state.playing = value
}

export default {
  SET_PLAYLIST,
  SET_CURRENT_AUDIO_ID,
  SET_STATE_PLAYING_AUDIO
}
