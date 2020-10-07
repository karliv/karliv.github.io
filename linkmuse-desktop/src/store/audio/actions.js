export const setPlaylist = ({ commit }, tracks) => {
  commit('SET_PLAYLIST', tracks)
}

export const setCurrentAudioId = ({ commit }, audioId) => {
  commit('SET_CURRENT_AUDIO_ID', audioId)
}

export const setStatePlayingAudio = ({ commit }, playing) => {
  commit('SET_STATE_PLAYING_AUDIO', playing)
}

export default {
  setPlaylist,
  setCurrentAudioId,
  setStatePlayingAudio
}
