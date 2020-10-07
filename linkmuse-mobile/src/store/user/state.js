import { AVATAR } from '@utils'

const state = () => ({
  users: {
    data: [],
    total: 0,
    offset: 0,
    limit: 24,
    error: false,
    loading: false,
    initialized: false,
    infiniteDisabled: false,
    filter: {
      query: null,
      cityId: null,
      ageMin: null,
      ageMax: null,
      genderIds: [],
      countryId: null
    },
    defaultFilter: {
      query: null,
      cityId: null,
      ageMin: null,
      ageMax: null,
      genderIds: [],
      countryId: null
    }
  },
  show: {
    data: null,
    loading: false,
    error: false
  },
  sources: {
    initialized: false
  },
  settings: {
    sources: {
      cities: [],
      genders: [],
      countries: [],
      initialized: false
    },
    fields: {
      vk: null,
      site: null,
      aboutMe: '',
      email: null,
      phone: null,
      viber: null,
      cityId: null,
      youtube: null,
      birthday: null,
      telegram: null,
      whatsapp: null,
      username: null,
      facebook: null,
      lastName: null,
      genderId: null,
      password: 'password',
      countryId: null,
      instagram: null,
      firstName: null,
      representative: false,
      notifications: { service: false, news: false },
      avatar: { path: AVATAR, width: null, height: null }
    }
  },
  followings: {
    data: [],
    count: 0,
    offset: 0,
    limit: 24,
    error: false,
    loading: false,
    initialized: false,
    infiniteDisabled: false
  },
  followers: {
    data: [],
    count: 0,
    offset: 0,
    limit: 24,
    error: false,
    loading: false,
    initialized: false,
    infiniteDisabled: false
  },
  partners: {
    data: [],
    count: 0,
    offset: 0,
    limit: 24,
    error: false,
    loading: false,
    initialized: false,
    infiniteDisabled: false
  }
})

export default state
