export function getPlaylist (state) {
  return state.playlist
}

export function getCurrentAudioId (state) {
  return state.state.currentId
}

export function getStatePlayingAudio (state) {
  return Boolean(state.state.playing)
}

export default {
  getPlaylist,
  getCurrentAudioId,
  getStatePlayingAudio
}
