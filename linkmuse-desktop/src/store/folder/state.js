const state = () => ({
  folders: {
    data: [],
    count: 0,
    offset: 0,
    limit: 24,
    error: false,
    loading: false,
    initialized: false,
    infiniteDisabled: false,
    filter: {
      archived: 0
    }
  },
  show: {
    data: null,
    loading: false,
    error: false,
    users: {
      data: [],
      count: 0,
      offset: 0,
      limit: 24,
      error: false,
      loading: false,
      initialized: false,
      infiniteDisabled: false
    }
  }
})

export default state
