import { isNative, generateUUID } from '@utils'

const event = 'OAuth'

class NativeOAuth {
  appOAuth (type) {
    return new Promise((resolve, reject) => {
      if (!isNative()) reject(Error('expected native app'))

      const _uuid = generateUUID()

      window.nsWebViewInterface.emit(event, { type, uuid: _uuid })
      window.nsWebViewInterface.off(event)
      window.nsWebViewInterface.off('app_resume')
      window.nsWebViewInterface.on(event, ({ uuid, data, error }) => {
        window.nsWebViewInterface.on('app_resume', () => {
          window.nsWebViewInterface.emit('callback', { uuid, data, error })
        })
        if (error) return reject(error)
        if (uuid === _uuid) resolve(data)
      })
    })
  }
}

export const VK = 'vk'
export const FB = 'fb'
export const INST = 'inst'
export const APPLE = 'apple'
export const GOOGLE = 'google'

export default new NativeOAuth()
