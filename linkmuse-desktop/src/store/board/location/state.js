import { LOCATION } from '@modules/Board/Enums/BoardType'

const state = () => ({
  locations: {
    data: [],
    total: 0,
    offset: 0,
    limit: 24,
    error: false,
    loading: false,
    infiniteDisabled: false,
    filter: {
      types: [],
      price: '',
      cityId: null,
      roomTypes: [],
      countryId: null,
      currencyId: null,
      dimensionMax: '',
      dimensionMin: '',
      roomHeightMin: '',
      roomHeightMax: '',
      paymentPeriod: null,
      equipmentAndFacilities: []
    },
    defaultFilter: {
      types: [],
      price: '',
      cityId: null,
      roomTypes: [],
      countryId: null,
      currencyId: null,
      dimensionMax: '',
      dimensionMin: '',
      roomHeightMin: '',
      roomHeightMax: '',
      paymentPeriod: null,
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
      description: '',
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
      description: '',
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
      types: [],
      cities: [],
      countries: [],
      roomTypes: [],
      currencies: [],
      paymentPeriods: [],
      initialized: false
    }
  }
})

export default state
