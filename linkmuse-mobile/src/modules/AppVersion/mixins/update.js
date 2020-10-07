import { has } from '@utils'
import { Toast } from 'mint-ui'

const isBrowser = process.browser

export default {
  mounted () {
    if (isBrowser) {
      const updated = this.$localStorage.get('app.update')

      if (updated === 'true') {
        Toast({ message: 'Обновление прошло успешно', iconClass: 'mintui mintui-success' })
        this.$localStorage.remove('app.update')
        this.$localStorage.remove('app.update.force')
      }
    }
  },
  onIdle () {
    // console.log('onIdle')
  },
  onActive () {
    // console.log('active')
    this.$appVersion.isUpdate().then(status => status ? this.forceReload() : null).catch(e => console.log(e))
  },
  methods: {
    forceReload () {
      if (has(this.$route.meta, 'update') && !this.$route.meta.update) {
        this.$localStorage.set('app.update.force', 'true')
      } else {
        Toast({ message: 'Пора обновиться, подождите пожалуйста', duration: 10000 })
        this.$localStorage.set('app.update', 'true')
        setTimeout(() => {
          window.location.reload()
        }, 500)
      }
    }
  }
}
