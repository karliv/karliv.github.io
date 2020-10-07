import bugsnag from '@bugsnag/js'
import bugsnagVue from '@bugsnag/plugin-vue'

const isBrowser = process.browser

export default {
  install (Vue, options) {
    if (!isBrowser) return false

    const bugsnagClient = bugsnag({
      appType: 'client',
      apiKey: process.env.BUGSNAG_API_KEY,
      notifyReleaseStages: [ 'production', 'staging' ],
      releaseStage: process.env.NODE_ENV || 'development'
    })
    bugsnagClient.use(bugsnagVue, Vue)

    Vue.prototype.$bugsnag = bugsnagClient
  }
}
