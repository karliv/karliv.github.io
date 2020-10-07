import { mapGetters } from 'vuex'
import { has, getDataAttribute, normalizeDotsToArrow, normalizeArrowsToDot, flatten, unflatten, HEADER_HEIGHT } from '@utils'

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
    },
    showReset () {
      const fields = this._.omit(this.fields)
      const defaultFields = this._.omit(this.defaultFields)

      return (this._.isEqual(fields, defaultFields) === false)
    }
  },
  created () {
    if (this.edit) {
      const { anketa } = this.company
      Object.assign(this.fields, flatten(anketa, { safe: true }))
    }

    if (this.edit === false) {
      this.defaultFields = this._.clone(Object.assign({}, this.fields))
    }
  },
  methods: {
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
          // const { username } = this.user
          // this.$router.push({ name: 'user.show', params: { username } })
          this.$notify({ type: 'success', title: 'Успешно', text: 'Компания успешно создана.' })
        }).catch(() => this._scrollToErrorFields())
      }).catch(() => this._scrollToErrorFields())
    },
    _createCompany () {
      return new Promise((resolve, reject) => {
        this.loading = true
        const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

        let { companyName } = this
        let data = this._.cloneDeep(this.fields)

        this.$api.post('api/v2/users/companies', { companyName, 'anketa': { ...data } }).then((response) => {
          const { data: { data } } = response

          loader.hide()
          this.loading = false
          this.$gtm.trackEvent({ event: 'add_company' })
          resolve && resolve(data)
        }, (error) => {
          const { response: { data, status } } = error

          loader.hide()
          this.loading = false
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка при создании компании.' })

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
          // const { username } = this.user
          // this.$router.push({ name: 'user.show', params: { username } })
          this.$notify({ type: 'success', title: 'Успешно', text: 'Компания успешно отредактирована.' })
        }).catch(() => this._scrollToErrorFields())
      }).catch(() => this._scrollToErrorFields())
    },
    _editCompany () {
      return new Promise((resolve, reject) => {
        this.loading = true
        const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

        let { companyName, id } = this
        let data = this._.cloneDeep(this.fields)

        this.$api.patch(`api/v2/users/companies/${id}`, { companyName, 'anketa': { ...data } }).then((response) => {
          const { data: { data } } = response

          loader.hide()
          this.loading = false
          resolve && resolve(data)
        }, (error) => {
          const { response: { data, status } } = error

          loader.hide()
          this.loading = false
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка при редактировании компании.' })

          reject && reject()

          if (status === 422) {
            const { errors } = data
            Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: key.replace('anketa.', ''), msg: errors[key].join(', ') }))
          } else throw new Error('Error edit company.')
        })
      })
    },
    _scrollToErrorFields () {
      let el = document.getElementsByClassName('error')
      if (el && el.length) this.$scrollTo(el[0], 500, { offset: (-40 - HEADER_HEIGHT) })
      this.$notify({ type: 'error', title: 'Ошибка', text: 'Проверьте правильность ввода.' })
    },
    _handleClickChangeCompany () {
      if (this.edit === false) {
        this.$modalRouter.push({ name: 'users.companies.create' })
      }
    },
    _handleClickClearForm () {
      this._clearForm().then(() => {
        this.$notify({
          type: 'success',
          title: 'Успешно',
          text: 'Форма очищена.'
        })
      }).catch(() => {})
    },
    _clearForm () {
      return new Promise((resolve, reject) => {
        try {
          this.fields = this._.clone(this.defaultFields)
          resolve && resolve()
        } catch (e) {
          reject && reject(e)
        }
      })
    }
  }
}
