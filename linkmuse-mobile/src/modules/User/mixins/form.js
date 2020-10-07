import { Toast, Indicator } from 'mint-ui'
import { has, getDataAttribute, normalizeDotsToArrow, normalizeArrowsToDot, flatten, unflatten } from '@utils'

export default {
  props: {
    isCurrentUser: {
      type: Boolean,
      default: false
    },
    isCustomer: {
      type: Boolean,
      default: false
    },
    isExecutor: {
      type: Boolean,
      default: false
    },
    anketa: {
      type: Object
    },
    rawAnketa: {
      type: Object
    }
  },
  data () {
    return {
      has,
      normalizeDotsToArrow
    }
  },
  methods: {
    _handlePushFields () {
      const _ = this._
      return new Promise((resolve, reject) => {
        try {
          Object.keys(this['KEYS']).forEach((key) => this.$set(this.fields, this['KEYS'][key], _.get(this.rawAnketa, this['KEYS'][key])))
          resolve()
        } catch (e) {
          reject(e)
        }
      })
    },
    _handleBlurUpdateField (e) {
      const el = e.target

      let value = e.target.value
      let key = getDataAttribute(el, 'key')

      this.$validator.validate(normalizeDotsToArrow(key)).then((result) => {
        if (result) {
          this.$api.patch(this.apiUrl, { 'anketa': { [key]: value } }).then((response) => {
            let { data } = response
            this.$store.dispatch('user/setFieldShowUserData', { key: `profile.data.anketa.${key}`, value })
            this.$store.dispatch('user/setFieldShowUserData', { key: `profile.data.raw_anketa.${key}`, value })
          }, (error) => {
            const { response: { data }, response: { status } } = error

            if (status === 422 && data.errors) {
              const { errors } = data
              Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: key.replace('anketa.', ''), msg: errors[key].join(', ') }))
            } else throw new Error('Error profile update')
          })
        }
      })
    },
    _handleValidateFields () {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll().then(result => {
          if (result) {
            resolve(result)
          } else reject && reject()
        })
      })
    },
    _handleSaveFields () {
      return new Promise((resolve, reject) => {
        Indicator.open()
        this.$api.patch(this.apiUrl, { 'anketa': { ...flatten(this.fields) } }).then((response) => {
          Indicator.close()

          let { data: { anketa, raw_anketa } } = response

          this.$store.dispatch('user/setFieldShowUserData', { key: `profile.data.anketa`, value: unflatten(anketa) })
          this.$store.dispatch('user/setFieldShowUserData', { key: `profile.data.raw_anketa`, value: unflatten(raw_anketa) })

          resolve(response)
        }, (error) => {
          Indicator.close()
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

          const { response: { data }, response: { status } } = error
          if (status === 422 && data.errors) {
            const { errors } = data
            Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: key.replace('anketa.', ''), msg: errors[key].join(', ') }))
          } else throw new Error('Error profile update')
          reject && reject(error)
        })
      })
    }
  }
}
