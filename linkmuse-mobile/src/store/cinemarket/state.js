const state = () => ({
  menu: {
    active: false,
    hide: false
  },
  program: {
    data: [],
    error: false,
    loading: false
  },
  guests: {
    data: [],
    error: false,
    loading: false
  },
  organization: {
    data: null,
    error: false,
    loading: false
  },
  partners: {
    data: null,
    error: false,
    loading: false
  },
  team: {
    data: [],
    error: false,
    loading: false
  },
  pitches: {
    data: [],
    error: false,
    loading: false,
    categories: {
      active: null,
      data: [],
      error: false,
      loading: false
    }
  }
})

export default state
