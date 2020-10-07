
const state = () => ({
  catalog: {
    data: [],
    count: 0,
    offset: 0,
    limit: 24,
    error: false,
    loading: false,
    infiniteDisabled: false,
    filter: {
      sex: [],
      fee: null,
      city: null,
      age_to: null,
      keyword: null,
      country: null,
      age_from: null,
      professions: [],
      with_portfolio: '1',
      with_certified: '0',
      'body-parameters': {
        'tattoo': null,
        'body-type': [],
        'ethnicity': [],
        'eye-color': [],
        'hipsLess': null,
        'hipsMore': null,
        'waistLess': null,
        'hair-color': [],
        'hair-length': [],
        'waistMore': null,
        'heightLess': null,
        'heightMore': null,
        'clothing-size': [],
        'shoeSizeMore': null,
        'shoeSizeLess': null,
        'body-piercing': null,
        'volumeOfBreastMore': null,
        'volumeOfBreastLess': null
      }
    }
  },
  sources: {
    cities: [],
    skills: [],
    languages: [],
    countries: [],
    professions: [],
    initialized: false,
    sort: [
      { id: 'popular', text: 'Популярные' }
    ]
  }
})

export default state
