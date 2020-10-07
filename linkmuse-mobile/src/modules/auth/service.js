import axios from 'axios'

axios.defaults.baseURL = process.env.BASE_URL

export default {
  async attemptLogin (credentials) {
    try {
      let response = await axios.post('api/v2/auth/login', credentials)
      return new Promise(resolve => resolve(response))
    } catch (error) {
      return new Promise((resolve, reject) => reject(error))
    }
  },

  async attemptLogout (credentials) {
    try {
      let response = await axios.post('api/v2/auth/logout', credentials)
      return new Promise(resolve => resolve(response))
    } catch (error) {
      return new Promise((resolve, reject) => reject(error))
    }
  }

}
