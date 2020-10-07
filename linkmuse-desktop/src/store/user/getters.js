import _ from 'lodash'

export function getShowUserLoading (state) {
  return state.show.loading
}

export function getShowUserData (state) {
  return state.show.data
}

export function getShowUserError (state) {
  return state.show.error
}

export function getSources (state) {
  return state.sources
}

export function getInitializedSources (state) {
  return state.sources['initialized']
}

/** START USERS */
export function getUsersData (state) {
  return state.users.data
}

export function getUsersTotal (state) {
  return Number(state.users.total)
}

export function getUsersLoading (state) {
  return state.users.loading
}
export function getUsersOffset (state) {
  return state.users.offset
}

export function getUsersInfiniteDisabled (state) {
  return state.users.infiniteDisabled
}

export function getUsersError (state) {
  return state.users.error
}

export function getCatalogFieldsFilter (state) {
  return state.users.filter
}

export function getCatalogDefaultFieldsFilter (state) {
  return state.users.defaultFields
}

/** END USERS */

/* SETTINGS */
export function getSettingsSources (state) {
  return state.settings['sources']
}

export function getInitializedSettingsSources (state) {
  return state.settings['sources']['initialized']
}
/* END SETTINGS */

/* FOLLOWINGS */
export function getFollowings (state) {
  return state.followings.data
}

export function getFollowingById (state) {
  return id => _.find(state.followings.data, (d) => d['id'] === id)
}

export function getCountFollowings (state) {
  return state.followings.count
}

export function getOffsetFollowings (state) {
  return state.followings.offset
}

export function getFollowingsLoading (state) {
  return state.followings.loading
}

export function getFollowingsInfiniteDisabled (state) {
  return state.followings.infiniteDisabled
}

export function getInitializedFollowings (state) {
  return state.followings.initialized
}

export function getFollowingsError (state) {
  return state.followings.error
}
/* END FOLLOWINGS */

/* FOLLOWERS */
export function getFollowers (state) {
  return state.followers.data
}

export function getFollowerById (state) {
  return id => _.find(state.followers.data, (d) => d['id'] === id)
}

export function getCountFollowers (state) {
  return state.followers.count
}

export function getOffsetFollowers (state) {
  return state.followers.offset
}

export function getFollowersLoading (state) {
  return state.followers.loading
}

export function getFollowersInfiniteDisabled (state) {
  return state.followers.infiniteDisabled
}

export function getInitializedFollowers (state) {
  return state.followers.initialized
}

export function getFollowersError (state) {
  return state.followers.error
}
/* END FOLLOWERS */

/* PARTNERS */
export function getPartners (state) {
  return state.partners.data
}

export function getPartnerById (state) {
  return id => _.find(state.partners.data, (d) => d['id'] === id)
}

export function getCountPartners (state) {
  return state.partners.count
}

export function getOffsetPartners (state) {
  return state.partners.offset
}

export function getPartnersLoading (state) {
  return state.partners.loading
}

export function getPartnersInfiniteDisabled (state) {
  return state.partners.infiniteDisabled
}

export function getInitializedPartners (state) {
  return state.partners.initialized
}

export function getPartnersError (state) {
  return state.partners.error
}
/* END PARTNERS */

export default {
  getSources,
  getPartners,
  getFollowers,
  getUsersData,
  getFollowings,
  getUsersError,
  getUsersTotal,
  getPartnerById,
  getUsersOffset,
  getUsersLoading,
  getFollowerById,
  getShowUserData,
  getShowUserError,
  getFollowingById,
  getCountPartners,
  getPartnersError,
  getPartnersLoading,
  getSettingsSources,
  getCountFollowings,
  getFollowingsError,
  getCountFollowers,
  getFollowersError,
  getOffsetPartners,
  getShowUserLoading,
  getOffsetFollowers,
  getOffsetFollowings,
  getFollowersLoading,
  getFollowingsLoading,
  getInitializedSources,
  getInitializedPartners,
  getCatalogFieldsFilter,
  getInitializedFollowers,
  getUsersInfiniteDisabled,
  getInitializedFollowings,
  getPartnersInfiniteDisabled,
  getFollowersInfiniteDisabled,
  getFollowingsInfiniteDisabled,
  getCatalogDefaultFieldsFilter,
  getInitializedSettingsSources
}
