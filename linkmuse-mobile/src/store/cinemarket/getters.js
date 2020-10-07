export function getMenu (state) {
  return state.menu
}

export function getProgramLoading (state) {
  return state.program.loading
}

export function getProgramData (state) {
  return state.program.data
}

export function getProgramError (state) {
  return state.program.error
}

export function getGuestsLoading (state) {
  return state.guests.loading
}

export function getGuestsData (state) {
  return state.guests.data
}

export function getGuestsError (state) {
  return state.guests.error
}

export function getOrganizationLoading (state) {
  return state.organization.loading
}

export function getOrganizationData (state) {
  return state.organization.data
}

export function getOrganizationError (state) {
  return state.organization.error
}

export function getPartnersLoading (state) {
  return state.partners.loading
}

export function getPartnersData (state) {
  return state.partners.data
}

export function getPartnersError (state) {
  return state.partners.error
}

export function getPitchesLoading (state) {
  return state.pitches.loading
}

export function getPitchesData (state) {
  return state.pitches.data.sort((a, b) => (a.count > b.count) ? -1 : ((b.count > a.count) ? 1 : 0))
}

export function getPitchesError (state) {
  return state.pitches.error
}

export function getPitchesCategoriesLoading (state) {
  return state.pitches.categories.loading
}

export function getPitchesCategoriesActive (state) {
  return state.pitches.categories.active
}

export function getPitchesCategoriesData (state) {
  return state.pitches.categories.data
}

export function getPitchesCategoriesError (state) {
  return state.pitches.categories.error
}

export function getTeamLoading (state) {
  return state.team.loading
}

export function getTeamData (state) {
  return state.team.data
}

export function getDataError (state) {
  return state.team.error
}

export default {
  getMenu,
  getProgramData,
  getProgramError,
  getProgramLoading,
  getGuestsData,
  getGuestsError,
  getGuestsLoading,
  getOrganizationData,
  getOrganizationError,
  getOrganizationLoading,
  getPartnersData,
  getPartnersError,
  getPartnersLoading,
  getPitchesData,
  getPitchesError,
  getPitchesLoading,
  getPitchesCategoriesData,
  getPitchesCategoriesError,
  getPitchesCategoriesActive,
  getPitchesCategoriesLoading,
  getTeamData,
  getDataError,
  getTeamLoading
}
