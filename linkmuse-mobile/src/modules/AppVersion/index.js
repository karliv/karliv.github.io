import axios from 'axios'

const currentVersion = require('~/server/public/version.json')

class AppVersion {
  get current () {
    return currentVersion
  }

  async isUpdate () {
    try {
      let axiosResponse = await axios.get(`${process.env.APP_URL}/version.json`)
      const { buildDate } = axiosResponse.data

      return buildDate > currentVersion.buildDate
    } catch (e) {
      return false
    }
  }
}

export default new AppVersion()
