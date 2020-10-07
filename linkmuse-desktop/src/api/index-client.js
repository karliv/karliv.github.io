import Auth from '~auth'
import axios from 'axios'

const BASE_URL = process.env.BASE_URL
const auth = new Auth()
const CancelToken = axios.CancelToken

export const api = (locale) => {
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

  const storeSession = (data) => {
    return auth.storeSession(data)
  }

  const removeSession = () => {
    return auth.removeSession()
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

  const onRefreshed = (data) => {
    refreshSubscribers.map(cb => cb(data.token))
  }

  const subscribeTokenRefresh = (cb) => {
    refreshSubscribers.push(cb)
  }

  const onResponseError = (error) => {
    const { config, response: { status } } = error
    const originalRequest = config

    if (status === 401) {
      if (!isAlreadyFetchingAccessToken) {
        isAlreadyFetchingAccessToken = true
        refreshAccessToken().then(data => {
          isAlreadyFetchingAccessToken = false
          onRefreshed(data)
          storeSession(data)
        }).catch(err => {
          if (err.response && (err.response.status === 401)) {
            console.log('You are not authorized ¯\\_(ツ)_/¯')
            removeSession()
            window.location.replace('/')
          }
          return Promise.reject(err)
        })
      }

      const retryOriginalRequest = new Promise((resolve, reject) => {
        subscribeTokenRefresh(token => {
          originalRequest.headers['Authorization'] = 'Bearer ' + token
          resolve(axios(originalRequest))
        })
      })
      return retryOriginalRequest
    }

    return Promise.reject(error)
  }

  const refreshAccessToken = () => {
    if (typeof getToken() === 'undefined') {
      throw new Error('Token does not exist')
    }

    let headers = {Authorization: getAuthHeader()}
    const request = axios.post('api/v1/auth/refresh', {}, {headers})

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
    get (url, params, options) {
      return this.api({
        ...options,
        ...{
          url,
          method: 'get',
          params: { ...params, ...{ locale } }
        }
      })
    },
    post (url, data, options) {
      return this.api({
        ...options,
        ...{
          url,
          data,
          method: 'post'
        }
      })
    },
    put (url, data, options) {
      return this.api({
        ...options,
        ...{
          method: 'put',
          url,
          data
        }
      })
    },
    patch (url, data, options) {
      return this.api({
        ...options,
        ...{
          url,
          data,
          method: 'patch'
        }
      })
    },
    delete (url, data) {
      return this.api({
        url,
        data,
        method: 'delete',
      })
    },
    getSource () {
      return CancelToken.source()
    }
  }
}
