const state = () => ({
  tag: null,
  tags: {
    data: [],
    error: false,
    loading: false
  },
  articles: {
    data: [],
    count: 0,
    offset: 0,
    limit: 24,
    error: false,
    loading: false,
    infiniteDisabled: false
  },
  article: {
    data: null,
    error: false,
    loading: false
  }
})

export default state
