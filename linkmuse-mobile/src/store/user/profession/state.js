const state = () => ({
  professions: {
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
    }
  },
  profession: {
    data: null,
    error: false,
    loading: false
  },
  helpers: {
    sources: {
      data: {
        lists: {
          'sport': [],
          'valyuty': [],
          'vozhdenie': [],
          'cvet-glaz': [],
          'cvet-volos': [],
          'dlina-volos': [],
          'teloslozhenie': [],
          'vybor-perioda': [],
          'tip-vneshnosti': [],
          'razmer-odezhdy': [],
          'tancevalnye-stili': [],
          'muzykalnye-instrumenty': []
        },
        cities: [],
        genders: [],
        countries: [],
        professions: []
      },
      loading: false,
      initialized: false
    }
  }
})

export default state
