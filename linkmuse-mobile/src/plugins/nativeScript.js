import Cookies from 'js-cookie'
import { expires, isNative } from '@utils'
import NativeOAuth from '@modules/oauth/native'
import NativeCloudPayments from '@modules/CloudPayments/native.js'

const isBrowser = process.browser
const BASE_URL = process.env.BASE_URL
const BASE_URL_UPLOAD = process.env.BASE_URL_UPLOAD

export default {
  install (Vue, options) {
    if (!isBrowser) return

    /**
     * WebViewInterface class to handle communication between webView and Android/iOS.
     */
    let NSWebViewinterface = (function () {
      function NSWebViewinterface () {
        /**
         * Mapping of native eventName and its handler in webView
         */
        this.eventListenerMap = {}

        /**
         * Mapping of JS Call responseId and result for iOS
         */
        this._iosResponseMap = {}

        /**
         * Counter of iOS JS Call responseId
         */
        this._iosCntResponseId = 0

        this._iosAppInfo = {
          version: '3.2.1'
        }

        this._androidAppInfo = {
          version: '3.2.1'
        }

        this._iosDeviseVersion = 13
        this._androidDeviseVersion = 9
      }

      /**
       * Handles events/commands emitted by android/ios. This function is called from nativescript.
       * @param   {string}    eventName - Native event/command name
       * @param   {data}      data - Payload for the event/command
       */
      NSWebViewinterface.prototype._onNativeEvent = function (eventName, data) {
        var lstEvtListeners = this.eventListenerMap[eventName] || []
        for (var _i = 0; _i < lstEvtListeners.length; _i++) {
          var listener = lstEvtListeners[_i]
          var retnVal = listener && listener(data)
          // if any handler return false, not executing any further handlers for that event.
          if (retnVal === false) {
            break
          }
        }
      }

      /**
       * Handles JS function calls by android/ios. This function is called from nativescript.
       * Result value of JS function call can be promise or any other data.
       * @param   {number}    reqId - Internal communication id
       * @param   {string}    functionName - Function to be executed in webView
       * @param   {any[]}     args
       */
      NSWebViewinterface.prototype._callJSFunction = function (reqId, functionName, args) {
        var _this = this
        var resolvedFn = _this._getResolvedFunction(functionName)
        if (resolvedFn) {
          var retnVal = resolvedFn.apply(window, args)
          if (retnVal && retnVal.then) {
            retnVal.then(function (value) {
              _this._sendJSCallResponse(reqId, value)
            }, function (error) {
              _this._sendJSCallResponse(reqId, error, true)
            })
          } else {
            this._sendJSCallResponse(reqId, retnVal)
          }
        }
      }

      /**
       * Resolves a function, if the function to be executed is in deep object chain.
       * e.g If we want to execute a function 'parent.child.child.fn' from native app,
       * this function will extract fn from the object chain.
       * We can do it by using eval also, but as there is a way, why to invite unknown security risks?
       *
       */
      NSWebViewinterface.prototype._getResolvedFunction = function (functionName) {
        if (functionName && (functionName = functionName.trim()).length) {
          functionName = functionName.indexOf('window.') === 0 ? functionName.replace('window.', '') : functionName
          var arrFnPath = functionName.split('.')
          var fn = window
          for (var i = 0; i < arrFnPath.length; i++) {
            if (!fn[arrFnPath[i]]) {
              fn = null
              break
            }
            fn = fn[arrFnPath[i]]
          }
          return fn
        }
      }

      /**
       * Returns JS Call response by emitting internal _jsCallRespone event
       */
      NSWebViewinterface.prototype._sendJSCallResponse = function (reqId, response, isError) {
        let oResponse = {
          reqId: reqId,
          response: response || null,
          isError: !!isError
        }
        this.emit('_jsCallResponse', oResponse)
      }

      /**
       * Creates temporary iFrame element to load custom url, for sending handshake message
       * to iOS which is necessary to initiate data transfer from webView to iOS
       */
      NSWebViewinterface.prototype._createIFrame = function (src) {
        let rootElm = document.documentElement
        let newFrameElm = document.createElement('IFRAME')
        newFrameElm.setAttribute('src', src)
        rootElm.appendChild(newFrameElm)
        return newFrameElm
      }

      /**
       * Sends handshaking signal to iOS using custom url, for sending event payload or JS Call response.
       * As iOS do not allow to send any data from webView. Here we are sending data in two steps.
       * 1. Send handshake signal, by loading custom url in iFrame with metadata (eventName, unique responseId)
       * 2. On intercept of this request, iOS calls _getIOSResponse with the responseId to fetch the data.
       */
      NSWebViewinterface.prototype._emitEventToIOS = function (eventName, data) {
        this._iosResponseMap[++this._iosCntResponseId] = data
        let metadata = { eventName: eventName, resId: this._iosCntResponseId }
        let url = 'js2ios:' + JSON.stringify(metadata)
        let iFrame = this._createIFrame(url)
        iFrame.parentNode.removeChild(iFrame)
      }

      /**
       * Returns data to iOS. This function is called from iOS.
       */
      NSWebViewinterface.prototype._getIOSResponse = function (resId) {
        let response = this._iosResponseMap[resId]
        delete this._iosResponseMap[resId]
        return response
      }

      /**
       * Calls native android function to emit event and payload to android
       */
      NSWebViewinterface.prototype._emitEventToAndroid = function (eventName, data) {
        window.androidWebViewInterface.handleEventFromWebView(eventName, data)
      }

      /**
       * Registers handlers for android/ios event/command
       */
      NSWebViewinterface.prototype.on = function (eventName, callback) {
        let lstListeners = this.eventListenerMap[eventName] || (this.eventListenerMap[eventName] = [])
        lstListeners.push(callback)
      }

      NSWebViewinterface.prototype.off = function (eventName) {
        delete this.eventListenerMap[eventName]
      }

      /**
       * Emits event to android/ios
       */
      NSWebViewinterface.prototype.emit = function (eventName, data) {
        try {
          let strData = typeof data === 'object' ? JSON.stringify(data) : data
          strData = typeof strData === 'number' ? String(strData) : strData

          if (window.androidWebViewInterface) {
            this._emitEventToAndroid(eventName, strData)
          } else {
            this._emitEventToIOS(eventName, strData)
          }
        } catch (e) {
          // console.error(e)
        }
      }
      return NSWebViewinterface
    })()

    window.nsWebViewInterface = new NSWebViewinterface()

    Vue.prototype.$nativeOAuth = NativeOAuth
    Vue.prototype.$nativeCloudPayments = NativeCloudPayments
    Vue.prototype.$nsWebViewInterface = window.nsWebViewInterface

    const app = window.application

    window.nsWebViewInterface.on('routerPush', (location) => {
      app.$router.push(location)
    })

    window.nsWebViewInterface.on('appInfo', (dataInfo) => {
      const { version, iosShortVersion } = dataInfo

      window.nsWebViewInterface._iosAppInfo.version = version
      window.nsWebViewInterface._iosDeviseVersion = iosShortVersion
    })

    window.nsWebViewInterface.on('androidAppInfo', (dataInfo) => {
      const { version, androidVersion } = dataInfo

      window.nsWebViewInterface._androidAppInfo.version = version
      window.nsWebViewInterface._androidDeviseVersion = androidVersion.split('.')[0]
    })

    // eslint-disable-next-line camelcase
    window.nsWebViewInterface.on('fcmRegister', ({ token, platform_id }) => {
      window.application.$api.post('api/v1/fcm', { token, platform_id }).then(res => {
        Cookies.set('fcm_token', token, { expires, path: '/' })
        window.nsWebViewInterface.emit('callback', 'set fcmtoken')
        window.nsWebViewInterface.emit('callback', JSON.stringify({ token, platform_id }))
      }).catch(e => {
        window.nsWebViewInterface.emit('callback', 'error set fcmtoken')
      })
    })

    window.nsWebViewInterface.emit('init', {
      BASE_URL,
      BASE_URL_UPLOAD
    })

    if (isNative()) {
      window.localStorage.setItem('banners.app', false)
    }
  }
}
