const state = () => ({
  companies: {
    data: [],
    total: 0,
    offset: 0,
    limit: 24,
    error: false,
    loading: false,
    infiniteDisabled: false,
    filter: {
      query: null,
      cityId: null,
      ageMin: null,
      ageMax: null,
      genderIds: [],
      countryId: null,
      rateCurrency: null,
      professionName: null,
      rateCostOfWorkMin: null,
      rateCostOfWorkMax: null,
      ratePeriodSelection: null
    },
    defaultFilter: {
      query: null,
      cityId: null,
      ageMin: null,
      ageMax: null,
      genderIds: [],
      countryId: null,
      rateCurrency: null,
      professionName: null,
      rateCostOfWorkMin: null,
      rateCostOfWorkMax: null,
      ratePeriodSelection: null
    },
    userFilter: {},
    defaultUserFilter: {}
  },
  company: {
    data: null,
    error: false,
    loading: false
  },
  helpers: {
    sources: {
      cities: [],
      genders: [],
      countries: [],
      professions: [],
      initialized: false
    }
  }
})

export default state
