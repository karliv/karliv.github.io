
export function SET_PROGRAM_DATA (state, { data }) {
  state.program.data = data
}

export function SET_PROGRAM_ERROR (state, value) {
  state.program.error = value
}

export function SET_PROGRAM_LOADING (state, value) {
  state.program.loading = value
}

export function SET_GUESTS_DATA (state, { data }) {
  state.guests.data = data
}

export function SET_GUESTS_ERROR (state, value) {
  state.guests.error = value
}

export function SET_GUESTS_LOADING (state, value) {
  state.guests.loading = value
}

export function SET_ORGANIZATION_DATA (state, { data }) {
  state.organization.data = data
}

export function SET_ORGANIZATION_ERROR (state, value) {
  state.organization.error = value
}

export function SET_ORGANIZATION_LOADING (state, value) {
  state.organization.loading = value
}

export function SET_PARTNERS_DATA (state, { data }) {
  state.partners.data = data
}

export function SET_PARTNERS_ERROR (state, value) {
  state.partners.error = value
}

export function SET_PARTNERS_LOADING (state, value) {
  state.partners.loading = value
}

export function SET_PITCHES_DATA (state, { data }) {
  state.pitches.data = data
}

export function SET_PITCHES_VOTE (state, { name }) {
  state.pitches.data = state.pitches.data.map(e => e.name === name ? (e.voted = true, e.count++, e) : e)
}

export function SET_PITCH_LOADING (state, { name, loading }) {
  state.pitches.data = state.pitches.data.map(e => e.name === name ? (e.loading = loading, e) : e)
}

export function SET_PITCHES_ERROR (state, value) {
  state.pitches.error = value
}

export function SET_PITCHES_LOADING (state, value) {
  state.pitches.loading = value
}

export function SET_PITCHES_CATEGORIES_DATA (state, { data }) {
  state.pitches.categories.data = data
}

export function SET_PITCHES_CATEGORIES_ERROR (state, value) {
  state.pitches.categories.error = value
}

export function SET_PITCHES_CATEGORIES_LOADING (state, value) {
  state.pitches.categories.loading = value
}

export function SET_TEAM_DATA (state, { data }) {
  state.team.data = data
}

export function SET_TEAM_ERROR (state, value) {
  state.team.error = value
}

export function SET_TEAM_LOADING (state, value) {
  state.team.loading = value
}

export default {
  SET_PROGRAM_DATA,
  SET_PROGRAM_ERROR,
  SET_PROGRAM_LOADING,
  SET_GUESTS_DATA,
  SET_GUESTS_ERROR,
  SET_GUESTS_LOADING,
  SET_ORGANIZATION_DATA,
  SET_ORGANIZATION_ERROR,
  SET_ORGANIZATION_LOADING,
  SET_PARTNERS_DATA,
  SET_PARTNERS_ERROR,
  SET_PARTNERS_LOADING,
  SET_PITCHES_DATA,
  SET_PITCHES_ERROR,
  SET_PITCHES_LOADING,
  SET_PITCHES_CATEGORIES_DATA,
  SET_PITCHES_CATEGORIES_ERROR,
  SET_PITCHES_CATEGORIES_LOADING,
  SET_PITCHES_VOTE,
  SET_PITCH_LOADING,
  SET_TEAM_DATA,
  SET_TEAM_ERROR,
  SET_TEAM_LOADING
}
