
const state = () => ({
  responses: {
    data: [],
    total: 0,
    offset: 0,
    limit: 24,
    notRead: 0,
    error: false,
    loading: false,
    infiniteDisabled: false,
    filter: {
      state: null
    },
    userFilter: {
      state: [],
      viewed: [],
      read: null
    },
    defaultUserFilter: {
      state: [],
      viewed: [],
      read: null
    }
  }
})

export default state
