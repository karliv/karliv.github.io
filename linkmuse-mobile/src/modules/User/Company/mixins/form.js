import { mapGetters } from 'vuex'
import { Indicator, Toast } from 'mint-ui'
import { has, normalizeDotsToArrow, flatten } from '@utils'

export default {
  data () {
    return {
      has,
      loading: false,
      normalizeDotsToArrow
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/getAuthUser',
      isAuthorized: 'auth/isAuthorized',
      isRegistered: 'auth/isRegistered',
      sources: 'user/company/getSources',
      company: 'user/company/getCompanyData'
    }),
    id () {
      const { params: { id } } = this.$route
      return id || null
    },
    title () {
      return this.edit ? 'Редактировать компанию' : 'Новая компания'
    },
    isPublished () {
      return (this.company) ? Boolean(this.company.isPublished) : false
    }
  },
  created () {
    if (this.edit) {
      const { anketa } = this.company
      Object.assign(this.fields, flatten(anketa, { safe: true }))
    }
  },
  methods: {
    _handleClickPreviousPage () {
      if (window.history.length > 2) {
        this.$router.go(-1)
      } else this.$router.push({ name: 'users.companies.index' })
    },
    /**
     * Validate all fields on current transition
     * @returns {Promise<any>}
     * @private
     */
    _handleValidateFields () {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll().then(result => {
          if (result) {
            resolve(result)
          } else reject && reject()
        })
      })
    },
    _handleClickActionCompany () {
      if (this.edit) {
        this._handleEditedCompany()
      } else this._handleCreatedCompany()
    },
    _handleCreatedCompany () {
      this._handleValidateFields().then(() => {
        this._createCompany().then((profession) => {
          const { id } = profession
          this.$router.push({ name: 'users.companies.show', params: { id } })
          Toast({ message: 'Компания успешно создана.', iconClass: 'mintui mintui-success' })
        }).catch(() => this._scrollToErrorFields())
      }).catch(() => this._scrollToErrorFields())
    },
    _createCompany () {
      return new Promise((resolve, reject) => {
        this.loading = true
        Indicator.open()

        let { companyName } = this
        let data = this._.cloneDeep(this.fields)

        this.$api.post('api/v2/users/companies', { companyName, 'anketa': { ...data } }).then((response) => {
          const { data: { data } } = response

          Indicator.close()
          this.loading = false
          this.$gtm.trackEvent({ event: 'add_company' })
          resolve && resolve(data)
        }, (error) => {
          const { response: { data, status } } = error

          Indicator.close()
          this.loading = false
          Toast({ message: 'Произошла ошибка при создании компании', iconClass: 'mintui mintui-field-error' })

          reject && reject()

          if (status === 422) {
            const { errors } = data
            Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: key.replace('anketa.', ''), msg: errors[key].join(', ') }))
          } else throw new Error('Error create company.')
        })
      })
    },
    _handleEditedCompany () {
      this._handleValidateFields().then(() => {
        this._editCompany().then((profession) => {
          const { id } = profession
          this.$router.push({ name: 'users.companies.show', params: { id } })
          Toast({ message: 'Компания успешно отредактирована.', iconClass: 'mintui mintui-success' })
        }).catch(() => this._scrollToErrorFields())
      }).catch(() => this._scrollToErrorFields())
    },
    _editCompany () {
      return new Promise((resolve, reject) => {
        this.loading = true
        Indicator.open()

        let { companyName, id } = this
        let data = this._.cloneDeep(this.fields)

        this.$api.patch(`api/v2/users/companies/${id}`, { companyName, 'anketa': { ...data } }).then((response) => {
          const { data: { data } } = response

          Indicator.close()
          this.loading = false
          resolve && resolve(data)
        }, (error) => {
          const { response: { data, status } } = error

          Indicator.close()
          this.loading = false
          Toast({ message: 'Произошла ошибка при редактировании компании', iconClass: 'mintui mintui-field-error' })

          reject && reject()

          if (status === 422) {
            const { errors } = data
            Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: key.replace('anketa.', ''), msg: errors[key].join(', ') }))
          } else throw new Error('Error create company.')
        })
      })
    },
    _scrollToErrorFields () {
      let el = document.getElementsByClassName('error')
      if (el && el.length) this.$scrollTo(el[0], 500, { offset: -40 })
      // Toast({ message: 'Проверьте правильность ввода.', iconClass: 'mintui mintui-field-error' })
    },
    _handleClickChangeCompany () {
      if (this.edit === false) {
        this.$modalRouter.push({ name: 'users.companies.create' })
      }
    }
  }
}
