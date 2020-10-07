const state = () => ({
  referrals: {
    data: [],
    total: 0,
    offset: 0,
    limit: 24,
    error: false,
    loading: false,
    infiniteDisabled: false,
    filter: {
      endTo: null,
      startFrom: null
    },
    defaultFilter: {
      endTo: null,
      startFrom: null
    },
    userFilter: {},
    defaultUserFilter: {}
  },
  helpers: {
    sources: {
    }
  }
})

export default state
