/* global Notification */

import Vue from 'vue'
import * as firebase from 'firebase'

export default {
  mounted () {
    if ('Notification' in window) {
      window.messaging = firebase.messaging()

      // Запрос на подписку
      this.subscribe()

      // Notification...
      window.messaging.onMessage((payload) => {
        console.log('Message received. ', payload)

        // Change in backend
        let options = {
          body: payload.notification.body,
          icon: '/dist/img/icons/favicon-96x96.png',
          sound: payload.notification.sound
        }

        let notification = new Notification(payload.notification.title, options)

        notification.onclick = (e) => {
          e.preventDefault() // prevent the browser from focusing the Notification's tab
          if (payload.data.action === 'new_message') {
            window.open(`${window.location.protocol}//${window.location.hostname}/messages?selected=${payload.data.from_id}`, '_blank')
          } else {
            return false
          }
        }
      })

      window.messaging.onTokenRefresh(() => {
        window.messaging.getToken().then(function (refreshedToken) {
          console.log('Token refreshed.')
          this.setTokenSentToServer(refreshedToken)
          this.sendTokenToServer(refreshedToken)
        }).catch(function (err) {
          console.log('Не удалось обновить токен.', err)
        })
      })
    }
  },
  methods: {
    subscribe () {
      // запрашиваем разрешение на получение уведомлений
      window.messaging.requestPermission().then(() => {
        console.log('Разрешение получено.')
        // получаем ID устройства
        window.messaging.getToken().then((currentToken) => {
          console.log(currentToken)
          if (currentToken) {
            this.sendTokenToServer(currentToken)
          } else {
            console.log('Не удалось получить токен.')
            this.setTokenSentToServer(false)
          }
        }).catch((err) => {
          console.log('При получении токена произошла ошибка.', err)
          this.setTokenSentToServer(false)
        })
      }).catch((err) => {
        console.log('Не удалось получить разрешение на показ уведомлений.', err)
      })
    },
    sendTokenToServer (currentToken) {
      if (!this.isTokenSentToServer(currentToken)) {
        console.log('Отправка токена на сервер...')

        let data = {
          token: currentToken
        }

        Vue.$api.post('/api/v1/fcm', data).then((response) => {
          console.log('Токен успешно зарегистрирован.')
        }, (response) => {
          throw new Error('Error attach token fcm')
        })

        this.setTokenSentToServer(currentToken)
      } else {
        console.log('Токен уже отправлен на сервер.')
      }
    },
    isTokenSentToServer (currentToken) {
      try {
        return window.localStorage.getItem('sentFirebaseMessagingToken') === currentToken
      } catch (e) {}
    },
    setTokenSentToServer (currentToken) {
      try {
        window.localStorage.setItem('sentFirebaseMessagingToken', currentToken || '')
      } catch (e) {}
    }
  }
}
