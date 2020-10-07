import { CASTING } from '@modules/Board/Enums/BoardType'
import { PUBLISHED, DRAFT, ARCHIVED, MODERATION, REJECTED } from '@modules/Board/Casting/Enums/CastingState'

const state = () => ({
  castings: {
    data: [],
    total: 0,
    offset: 0,
    limit: 24,
    error: false,
    hasNew: false,
    loading: false,
    initialized: false,
    infiniteDisabled: false,
    filter: {
      ageTo: '',
      name: null,
      ageFrom: '',
      cityId: null,
      genderIds: [],
      isOnline: '',
      countryId: null,
      categoryIds: [],
      professionNames: []
    },
    defaultFilter: {
      ageTo: '',
      name: null,
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
      description: null,
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
      description: null,
      dateWorkEnd: null,
      characterType: null,
      dateWorkStart: null,
      feeCurrencyId: null,
      categoryBoard: CASTING
    }
  },
  helpers: {
    sources: {
      data: {
        fee: [],
        rates: [],
        cities: [],
        countries: [],
        currencies: [],
        categories: [],
        professions: [],
        stateCasting: [
          // { id: DRAFT, text: 'Черновик' },
          { id: PUBLISHED, text: 'Опубликован' },
          { id: MODERATION, text: 'На модерации' },
          { id: REJECTED, text: 'Отклонён' },
          { id: ARCHIVED, text: 'Архив' }
        ]
      },
      loading: false,
      initialized: false
    }
  }
})

export default state
