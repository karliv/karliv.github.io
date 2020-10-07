
/** START REFERRAL */
export function getReferralsData (state) {
  return state.referrals.data
}

export function getReferralsTotal (state) {
  return Number(state.referrals.total)
}

export function getReferralsLoading (state) {
  return state.referrals.loading
}
export function getReferralsOffset (state) {
  return state.referrals.offset
}

export function getReferralsInfiniteDisabled (state) {
  return state.referrals.infiniteDisabled
}

export function getReferralsError (state) {
  return state.referrals.error
}

export function getCatalogFieldsFilter (state) {
  return state.referrals.filter
}

export function getCatalogDefaultFieldsFilter (state) {
  return state.referrals.defaultFields
}

/** END REFERRAL */

export default {
  getReferralsData,
  getReferralsError,
  getReferralsTotal,
  getReferralsOffset,
  getReferralsLoading,
  getCatalogFieldsFilter,
  getCatalogDefaultFieldsFilter,
  getReferralsInfiniteDisabled
}
