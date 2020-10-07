const isBrowser = process.browser

export default {
  install (Vue, options) {
    if (!isBrowser) return false

    const firebase = require('firebase/app')
    window.firebase = firebase.initializeApp({
      apiKey: 'AIzaSyB59gAB8H0Qsqju8LFCCQWG3LSahXhXM_w',
      authDomain: 'linkmuse-com.firebaseapp.com',
      databaseURL: 'https://linkmuse-com.firebaseio.com',
      projectId: 'linkmuse-com',
      storageBucket: 'linkmuse-com.appspot.com',
      messagingSenderId: '607778199931'
    })
  }
}
