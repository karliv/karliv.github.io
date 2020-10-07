import { has } from '@utils'

const qs = require('qs')
const APP_URL = process.env.APP_URL

class OAuth {
  constructor () {
    this.vk = {
      v: '5.92',
      scope: 'email',
      display: 'popup',
      client_id: process.env.VKONTAKTE_KEY,
      redirect_uri: `${APP_URL}/auth/vkontakte/callback`
    }

    this.fb = {
      client_id: process.env.FACEBOOK_KEY,
      display: 'popup',
      response_type: 'code',
      redirect_uri: `${APP_URL}/auth/facebook/callback`,
      scope: 'email, user_birthday, user_location, user_hometown'
    }

    this.google = {
      client_id: process.env.GOOGLE_KEY,
      response_type: 'code',
      scope: 'email profile',
      redirect_uri: `${APP_URL}/auth/google/callback`
    }

    this.instagram = {
      client_id: process.env.INSTAGRAM_KEY,
      response_type: 'code',
      scope: 'basic',
      redirect_uri: `${APP_URL}/auth/instagram/callback`,
      hl: 'en'
    }
  }

  vkAuth () {
    return OAuth.openAuthWindow(
      'https://oauth.vk.com/authorize?' + qs.stringify(this.vk),
      'ВКонтакте'
    )
  }

  fbAuth () {
    return OAuth.openAuthWindow(
      'https://www.facebook.com/dialog/oauth?' + qs.stringify(this.fb),
      'Facebook'
    )
  }

  googleAuth () {
    return OAuth.openAuthWindow(
      'https://accounts.google.com/o/oauth2/auth?' + qs.stringify(this.google),
      'Google'
    )
  }

  instagramAuth () {
    return OAuth.openAuthWindow(
      'https://api.instagram.com/oauth/authorize/?' + qs.stringify(this.instagram),
      'Instagram'
    )
  }

  static openAuthWindow (url, name) {
    const windowArea = {
      width: Math.floor(window.outerWidth * 0.8),
      height: Math.floor(window.outerHeight * 0.5)
    }

    if (windowArea.width < 1000) { windowArea.width = 1000 }
    if (windowArea.height < 630) { windowArea.height = 630 }
    windowArea.left = Math.floor(window.screenX + ((window.outerWidth - windowArea.width) / 2))
    windowArea.top = Math.floor(window.screenY + ((window.outerHeight - windowArea.height) / 8))

    const windowParams = `toolbar=0,scrollbars=1,status=1,resizable=1,location=1,menuBar=0,
      width=${windowArea.width},height=${windowArea.height},
      left=${windowArea.left},top=${windowArea.top}`

    const oAuthWindow = window.open(url, name, windowParams)

    // Create IE + others compatible event handler
    const eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent'
    const eventer = window[eventMethod]
    const messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message'

    // Listen to message from child window
    return new Promise((resolve, reject) => {
      eventer(messageEvent, (e) => {
        if (e.origin !== APP_URL) {
          oAuthWindow.close()
          reject && reject('Not allowed')
        }

        if (has(e.data, 'auth.code') && has(e.data, 'auth.social')) {
          resolve && resolve(e.data.auth)
          oAuthWindow.close()
        } else {
          oAuthWindow.close()
          reject && reject('Unauthorised')
        }
      }, false)
    })
  }
}

export default new OAuth()
