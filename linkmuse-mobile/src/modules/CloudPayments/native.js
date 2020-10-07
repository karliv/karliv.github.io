import Vue from 'vue'
import { Indicator } from 'mint-ui'
import { isNativeIOS, generateUUID, versionCompare } from '@utils'

const event = 'CloudPayments'

class NativeCP {
  pay (price) {
    Indicator.close()

    let amount = price

    return new Promise((resolve, reject) => {
      if (!amount) return reject && reject(Error('Need price'))
      if (!isNativeIOS()) return reject(Error('expected native app'))
      if (versionCompare(window.nsWebViewInterface._iosAppInfo.version, '4.2.2') < 0) return reject(Error('Application has old version'))

      const _uuid = generateUUID()

      window.nsWebViewInterface.off(event)
      window.nsWebViewInterface.off('app_resume')
      window.nsWebViewInterface.on(event, ({ uuid, data, error }) => {
        window.nsWebViewInterface.on('app_resume', () => {
          window.nsWebViewInterface.emit('callback', { uuid, data, error })
        })
        if (error) return reject(error)
        if (uuid === _uuid) resolve(data)
      })
      window.nsWebViewInterface.emit('callback', 'cloudpayments')
      window.nsWebViewInterface.emit(event, { amount, uuid: _uuid, accessToken: Vue.prototype.$cookies.get('id_token') })
    })
  }
}

export default new NativeCP()
