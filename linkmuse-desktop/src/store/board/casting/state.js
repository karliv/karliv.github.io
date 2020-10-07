import { CASTING } from '@modules/Board/Enums/BoardType'

const state = () => ({
  castings: {
    data: [],
    total: 0,
    offset: 0,
    limit: 24,
    error: false,
    loading: false,
    infiniteDisabled: false,
    filter: {
      name: '',
      ageTo: '',
      ageFrom: '',
      cityId: null,
      genderIds: [],
      isOnline: '',
      countryId: null,
      categoryIds: [],
      professionNames: []
    },
    userFilter: {
      state: [],
      name: null,
      type: CASTING
    },
    defaultFilter: {
      name: '',
      ageTo: '',
      ageFrom: '',
      cityId: null,
      genderIds: [],
      isOnline: '',
      countryId: null,
      categoryIds: [],
      professionNames: []
    },
    defaultUserFilter: {
      state: [],
      name: null,
      type: CASTING
    }
  },
  casting: {
    data: null,
    error: false,
    loading: false
  },
  edit: {
    data: null,
    error: false,
    loading: false
  },
  form: {
    fields: {
      fee: 0,
      name: null,
      genders: [],
      ageTo: null,
      phone: null,
      email: null,
      other: null,
      isOnline: 0,
      cityId: null,
      forTrusted: 0,
      address: null,
      ageFrom: null,
      dateEnd: null,
      references: [],
      professions: [],
      countryId: null,
      feeAmount: null,
      transition: null,
      dateStart: null,
      categoryId: null,
      feeTypeId: null,
      description: '',
      dateWorkEnd: null,
      characterType: null,
      dateWorkStart: null,
      feeCurrencyId: null,
      categoryBoard: CASTING
    },
    defaultFields: {
      fee: 0,
      name: null,
      genders: [],
      ageTo: null,
      phone: null,
      email: null,
      other: null,
      isOnline: 0,
      cityId: null,
      forTrusted: 0,
      address: null,
      ageFrom: null,
      dateEnd: null,
      references: [],
      professions: [],
      countryId: null,
      feeAmount: null,
      transition: null,
      dateStart: null,
      categoryId: null,
      feeTypeId: null,
      description: '',
      dateWorkEnd: null,
      characterType: null,
      dateWorkStart: null,
      feeCurrencyId: null,
      categoryBoard: CASTING
    }
  },
  helpers: {
    sources: {
      fee: [],
      rates: [],
      cities: [],
      countries: [],
      currencies: [],
      categories: [],
      professions: [],
      initialized: false
    }
  }
})

export default state
