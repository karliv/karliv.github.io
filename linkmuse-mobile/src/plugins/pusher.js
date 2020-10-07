const isBrowser = process.browser

const Echo = require('laravel-echo')
const VueEcho = require('vue-echo')
const Pusher = require('pusher-js')
const cookies = require('js-cookie')

export default {
  install (Vue, options) {
    if (!isBrowser) return false

    window.Pusher = Pusher
    const env = process.env
    const token = cookies.get('id_token')

    const EchoInstance = new Echo({
      authEndpoint: `${env['BASE_URL']}/api/v1/broadcasting/auth`,
      broadcaster: 'pusher',
      key: env['PUSHER_KEY'],
      cluster: env['PUSHER_CLUSTER'],
      encrypted: true,
      auth: {
        headers: {
          Authorization: token ? `Bearer ${token}` : null
        }
      }
    })

    Vue.use(VueEcho.default, EchoInstance)
  }
}
