import { LOCATION } from '@modules/Board/Enums/BoardType'
import { PUBLISHED, DRAFT, ARCHIVED, MODERATION, REJECTED } from '@modules/Board/Location/Enums/LocationState'

const state = () => ({
  locations: {
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
      types: [],
      price: '',
      cityId: '',
      roomTypes: [],
      countryId: '',
      currencyId: '',
      dimensionMax: '',
      dimensionMin: '',
      roomHeightMin: '',
      roomHeightMax: '',
      paymentPeriod: '',
      equipmentAndFacilities: []
    },
    defaultFilter: {
      types: [],
      price: '',
      cityId: '',
      roomTypes: [],
      countryId: '',
      currencyId: '',
      dimensionMax: '',
      dimensionMin: '',
      roomHeightMin: '',
      roomHeightMax: '',
      paymentPeriod: '',
      equipmentAndFacilities: []
    },
    userFilter: {
      state: [],
      type: LOCATION
    },
    defaultUserFilter: {
      state: [],
      type: LOCATION
    }
  },
  location: {
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
      scene: 0,
      parking: 0,
      type: null,
      photos: [],
      site: null,
      phone: null,
      email: null,
      other: null,
      price: null,
      exterior: 0,
      daylight: 0,
      interior: 0,
      cyclorama: 0,
      chromakey: 0,
      cityId: null,
      roomType: null,
      countryId: null,
      equipment: null,
      dimension: null,
      dressingRoom: 0,
      transition: null,
      passSystem: null,
      currencyId: null,
      roomHeight: null,
      facilities: null,
      description: null,
      address: {
        lng: null,
        lat: null,
        address: null
      },
      equipmentRental: 0,
      paymentPeriod: null,
      categoryBoard: LOCATION
    },
    defaultFields: {
      scene: 0,
      parking: 0,
      type: null,
      photos: [],
      site: null,
      phone: null,
      email: null,
      other: null,
      price: null,
      exterior: 0,
      daylight: 0,
      interior: 0,
      cyclorama: 0,
      chromakey: 0,
      cityId: null,
      roomType: null,
      countryId: null,
      equipment: null,
      dimension: null,
      dressingRoom: 0,
      transition: null,
      passSystem: null,
      currencyId: null,
      roomHeight: null,
      facilities: null,
      description: null,
      address: {
        lng: null,
        lat: null,
        address: null
      },
      equipmentRental: 0,
      paymentPeriod: null,
      categoryBoard: LOCATION
    }
  },
  helpers: {
    sources: {
      data: {
        types: [],
        cities: [],
        countries: [],
        roomTypes: [],
        currencies: [],
        paymentPeriods: [],
        stateLocation: [
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
