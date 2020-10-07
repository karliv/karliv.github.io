import { AVATAR } from '@utils'

const state = () => ({
  user: null,
  role: null,
  locale: null,
  hasEmail: false,
  accessToken: null,
  refreshToken: null,
  isAuthorized: false,
  register: {
    data: {
      fields: {
        'avatar': AVATAR,
        'genderId': null,
        'lastName': null,
        'birthday': null,
        'guardian': null,
        'firstName': null
      },
      error: false,
      loading: false
    }
  }
})

export default state
