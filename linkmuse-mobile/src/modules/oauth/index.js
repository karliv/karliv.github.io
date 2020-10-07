import { has } from '@utils'

const APP_URL = process.env.APP_URL

class OAuth {
  vkAuth () {
    return OAuth.openAuthWindow(
      '/auth/social-login?type=vkontakte',
      'ВКонтакте'
    )
  }

  fbAuth () {
    return OAuth.openAuthWindow(
      '/auth/social-login?type=facebook',
      'Facebook'
    )
  }

  googleAuth () {
    return OAuth.openAuthWindow(
      '/auth/social-login?type=google',
      'Google'
    )
  }
  appleAuth () {
    return OAuth.openAuthWindow(
      '/auth/social-login?type=apple',
      'Apple'
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
