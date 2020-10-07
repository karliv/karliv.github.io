const state = () => ({
  dialogs: {
    data: [],
    count: 0,
    offset: 0,
    limit: 24,
    error: false,
    loading: false,
    initialized: false,
    infiniteDisabled: false
  },
  show: {
    data: null,
    loading: false,
    error: false
  },
  messages: {
    data: [],
    count: 0,
    offset: 0,
    limit: 24,
    error: false,
    loading: false,
    infiniteDisabled: false
  },
  search: {
    dialogs: {
      data: [],
      count: 0,
      offset: 0,
      limit: 24,
      error: false,
      loading: false,
      initial: false,
      infiniteDisabled: false
    }
  }
})

export default state
