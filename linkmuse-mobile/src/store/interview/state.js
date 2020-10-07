const state = () => ({
  category: null,
  categories: {
    data: [],
    error: false,
    loading: false
  },
  lists: {
    data: [],
    count: 0,
    offset: 0,
    limit: 24,
    error: false,
    loading: false,
    infiniteDisabled: false
  },
  interview: {
    data: null,
    error: false,
    loading: false
  }
})

export default state
