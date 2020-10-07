import Vue from 'vue'
import Auth from '~auth'
import axios from 'axios'
import moment from 'moment'

const auth = new Auth()
const BASE_URL = process.env.BASE_URL

export const api = (locale, context) => {
  const http = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
    headers: {
      'Accept-Language': locale,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })

  const getToken = () => {
    return auth.getToken()
  }

  const getAuthHeader = () => {
    return auth.getAuthHeader()
  }

  const storeSession = (token) => {
    Vue.prototype.$cookies.set('id_token', token, { path: '/' })
    Vue.prototype.$cookies.set('refresh_token', token, { path: '/' })
    Vue.prototype.$cookies.set('expires_token', token, { path: '/' })

    context.setCookies.push({ key: 'id_token', value: token, options: { path: '/' } })
    context.setCookies.push({ key: 'refresh_token', value: token, options: { path: '/' } })
    context.setCookies.push({ key: 'expires_token', value: moment().format('DD.MM.YYYY'), options: { path: '/' } })
  }

  const removeSession = () => {
    context.clearCookies.push('role')
    context.clearCookies.push('id_token')
    context.clearCookies.push('auth_user')
    context.clearCookies.push('has_email')
    context.clearCookies.push('refresh_token')
    context.clearCookies.push('expires_token')

    auth.removeSession()
  }

  const onRequest = (request) => {
    let token = getToken()
    if (typeof token !== 'undefined') {
      request.headers['Authorization'] = getAuthHeader()
    }

    return request
  }
  const onRequestError = (error) => {
    return Promise.reject(error)
  }

  const onResponse = (response) => {
    return Promise.resolve(response)
  }

  let isAlreadyFetchingAccessToken = false
  let refreshSubscribers = []

  const onRefreshed = (err, token) => {
    refreshSubscribers.map(cb => cb(err, token))
  }

  const subscribeTokenRefresh = (cb) => {
    refreshSubscribers.push(cb)
  }

  const onResponseError = (error) => {
    const { config, response: { status } } = error
    const originalRequest = config

    if (status === 401) {
      console.log(status)
      if (!isAlreadyFetchingAccessToken) {
        isAlreadyFetchingAccessToken = true
        refreshAccessToken().then(data => {
          const { token } = data
          isAlreadyFetchingAccessToken = false
          storeSession(token)
          onRefreshed(null, token)
        }).catch(err => {
          removeSession()
          onRefreshed(err, '')
        })
      }

      const retryOriginalRequest = new Promise((resolve, reject) => {
        subscribeTokenRefresh((err, token) => {
          if (err) {
            // return reject && reject({ code: 401, message: 'Token has expired', url: '/' })
            return reject && reject({ response: { status: 401, message: 'Token has expired', url: '/login' }})
          }

          originalRequest.headers['Authorization'] = 'Bearer ' + token
          resolve(axios(originalRequest))
        })
      })
      return retryOriginalRequest
    } else {
      return Promise.reject(error)
    }
  }

  const refreshAccessToken = () => {
    if (typeof getToken() === 'undefined') {
      throw new Error('Token does not exist')
    }

    let headers = { Authorization: getAuthHeader() }
    const request = axios.post('api/v1/auth/refresh', {}, { headers })

    return new Promise((resolve, reject) => {
      request.then(response => resolve(response.data)).catch(error => reject(error))
    })
  }

  http.interceptors.request.use(
    config => onRequest(config),
    error => onRequestError(error)
  )

  http.interceptors.response.use(
    response => onResponse(response),
    error => onResponseError(error)
  )

  return {
    api: http,
    async get (url, params, options) {
      return this.api({
        ...options,
        ...{
          url,
          method: 'get',
          params: { ...params, ...{ locale } }
        }
      })
    }
  }
}
