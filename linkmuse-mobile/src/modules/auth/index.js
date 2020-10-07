import Vue from 'vue'
import moment from 'moment'
import Cookies from 'js-cookie'
import { expires, expiresRefresh } from '@utils'
import AuthService from './service.js'

class Auth {
  getToken () {
    return Vue.prototype.$cookies.get('id_token')
  }

  getRole () {
    return Vue.prototype.$cookies.get('role')
  }

  getAuthUser () {
    return Vue.prototype.$cookies.get('auth_user')
  }

  getHasEmail () {
    return Vue.prototype.$cookies.get('hasEmail')
  }

  getFcmToken () {
    return Cookies.get('fcm_token')
  }

  storeSession (data) {
    Vue.prototype.$cookies.set('id_token', data.token, { expires, path: '/' })
    Vue.prototype.$cookies.set('refresh_token', data.token, { expires: expiresRefresh, path: '/' })
    Vue.prototype.$cookies.set('expires_token', moment().format('DD.MM.YYYY'))

    if (data.hasOwnProperty('role')) {
      Vue.prototype.$cookies.set('role', data.role, { expires, path: '/' })
    }

    if (data.hasOwnProperty('hasEmail')) {
      Vue.prototype.$cookies.set('hasEmail', data.hasEmail, { expires, path: '/' })
    }
  }

  storeSessionClient (data) {
    Cookies.set('id_token', data.token, { expires, path: '/' })
    Cookies.set('refresh_token', data.token, { expires, path: '/' })
    Cookies.set('expires_token', moment().format('DD.MM.YYYY'))

    if (data.hasOwnProperty('role')) {
      Cookies.set('role', data.role, { expires, path: '/' })
    }

    if (data.hasOwnProperty('hasEmail')) {
      Cookies.set('hasEmail', data.hasEmail, { expires, path: '/' })
    }
  }

  removeSession () {
    Vue.prototype.$cookies.remove('role')
    Vue.prototype.$cookies.remove('id_token')
    Vue.prototype.$cookies.remove('auth_user')
    Vue.prototype.$cookies.remove('hasEmail')
    Vue.prototype.$cookies.remove('refresh_token')
    Vue.prototype.$cookies.remove('expires_token')
  }

  guest () {
    if (typeof this.getToken() === 'undefined') {
      return true
    }

    return false
  }

  getAuthHeader () {
    let token = this.getToken()
    if (typeof token !== 'undefined') {
      return 'Bearer ' + token
    }

    return null
  }

  isAuthenticated () {
    if (typeof this.getToken() === 'undefined') {
      return false
    }

    return true
  }

  login (email, password) {
    let data = {
      email,
      password
    }

    // We merge grant type and client secret stored in configuration
    return new Promise((resolve, reject) => {
      AuthService.attemptLogin(data).then(response => {
        this.storeSession(response.data)
        resolve(response)
      }).catch(error => {
        console.log('Authentication error: ', error)
        window.location.replace('/')
        reject(error)
      })
    })
  }

  logout () {
    let data = {
      token: this.getToken()
    }

    return new Promise((resolve, reject) => {
      this.deleteFcmToken().then(() => {
        AuthService.attemptLogout(data).then(response => {
          this.removeSession()
          resolve(response)
        }).catch(error => {
          console.log('Authentication error: ', error)
          this.removeSession()
          reject(error)
        })
      })
    })
  }

  getTokenPromise () {
    let token = this.getToken()

    if (typeof token !== 'undefined') {
      return new Promise((resolve, reject) => {
        resolve(token)
      })
    }

    return new Promise(resolve => resolve(null))
  }

  getRolePromise () {
    let role = this.getRole()

    if (typeof role !== 'undefined') {
      return new Promise((resolve, reject) => {
        resolve(role)
      })
    }

    return new Promise(resolve => resolve(null))
  }

  getHasEmailPromise () {
    let hasEmail = this.getHasEmail()

    if (typeof hasEmail !== 'undefined') {
      return new Promise((resolve, reject) => {
        resolve(hasEmail)
      })
    }

    return new Promise(resolve => resolve(null))
  }

  getAuthUserPromise () {
    let token = this.getToken()
    let user = this.getAuthUser()

    if (typeof token !== 'undefined' && typeof user !== 'undefined') {
      return new Promise((resolve, reject) => {
        resolve(user)
      })
    }

    return new Promise(resolve => resolve(null))
  }

  getRegisteredPromise () {
    let token = this.getToken()
    let user = this.getAuthUser()

    if (typeof token !== 'undefined' && typeof user !== 'undefined' && (user.isRegistered || user.registered)) {
      return new Promise((resolve, reject) => {
        resolve(user)
      })
    }

    return new Promise(resolve => resolve(null))
  }

  deleteFcmToken () {
    return new Promise(resolve => {
      try {
        const token = this.getFcmToken()

        if (!token) resolve()

        Vue.prototype.$api.delete('/api/v1/fcm', { tokens: [token] })
          .then(res => resolve())
          .catch(e => {
            console.error(e)
            resolve()
          })
      } catch (e) {
        console.error(e)
        resolve(e)
      }
    })
  }
}

export default Auth
