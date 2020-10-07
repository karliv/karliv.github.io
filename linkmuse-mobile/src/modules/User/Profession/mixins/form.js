import { mapGetters } from 'vuex'
import { Indicator, Toast } from 'mint-ui'
import { has, normalizeDotsToArrow, flatten } from '@utils'

export default {
  data () {
    return {
      has,
      snaps: [],
      photos: [],
      videos: [],
      loading: false,
      defaultFields: {},
      showFieldForm: true,
      normalizeDotsToArrow
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/getAuthUser',
      isAuthorized: 'auth/isAuthorized',
      isRegistered: 'auth/isRegistered',
      sources: 'user/profession/getSources',
      profession: 'user/profession/getProfessionData'
    }),
    id () {
      const { params: { id } } = this.$route
      return id || null
    },
    title () {
      return this.edit ? 'Редактировать профессию' : 'Новая профессия'
    },
    isPublished () {
      return (this.profession) ? Boolean(this.profession.isPublished) : false
    },
    showReset () {
      const fields = this._.omit(this.fields)
      const defaultFields = this._.omit(this.defaultFields)

      return (this._.isEqual(fields, defaultFields) === false)
    }
  },
  created () {
    if (this.edit) {
      const { anketa, videos, photos, snaps } = this.profession

      videos.forEach((video) => { return Object.assign(video,{ paths: { '128x128': video['cover']['original'] }}) })

      this.snaps = snaps || []
      this.photos = photos || []
      this.videos = videos || []

      Object.assign(this.fields, flatten(anketa, { safe: true }))
    }

    if (this.edit === false) {
      this.defaultFields = this._.cloneDeep(this.fields)

      if (this.sources && has(this.sources, 'body-parameters')) {
        let bodyParameters = this._.mapKeys(Object.assign({}, this.sources['body-parameters']), (value, key) => `body-parameters.${key}`)
        Object.assign(this.fields, bodyParameters)
      }
    }
  },
  methods: {
    _handleClickPreviousPage () {
      if (window.history.length > 2) {
        this.$router.go(-1)
      } else this.$router.push({ name: 'users.index' })
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
    _handleClickActionProfession () {
      if (this.edit) {
        this._handleEditedProfession()
      } else this._handleCreatedProfession()
    },
    _handleCreatedProfession () {
      this._handleValidateFields().then(() => {
        this._createProfession().then((profession) => {
          const { id } = profession

          if (this.$localStorage.get('redirect.create.profession', null, String)) {
            let location = this.$localStorage.get('redirect.create.profession', '/', String)
            this.$localStorage.remove('redirect.create.profession')
            this.$router.push(location)
          } else this.$router.push({ name: 'users.professions.show', params: { id } })

          Toast({ message: 'Профессия успешно создана.', iconClass: 'mintui mintui-success' })

          let professions = this.user['counters']['professions']
          this.$store.dispatch('auth/setUserField', {
            key: 'counters.professions',
            value: (professions + 1)
          })
        }).catch(() => this._scrollToErrorFields())
      }).catch(() => this._scrollToErrorFields())
    },
    _createProfession () {
      return new Promise((resolve, reject) => {
        this.loading = true
        Indicator.open()

        let { professionName } = this
        let data = this._.cloneDeep(this.fields)
        let snaps = this.snaps.map(item => item.id)
        let videos = this.videos.map(item => item.id)
        let photos = this.photos.map(item => item.id)

        this.$api.post('api/v2/users/professions', { professionName, 'anketa': { ...data }, videos, photos, snaps }).then((response) => {
          const { data: { data } } = response

          Indicator.close()
          this.loading = false
          this.$gtm.trackEvent({ event: 'add_new_profession' })
          resolve && resolve(data)
        }, (error) => {
          const { response: { data, status } } = error

          Indicator.close()
          this.loading = false
          Toast({ message: 'Произошла ошибка при создании профессии', iconClass: 'mintui mintui-field-error' })

          reject && reject()

          if (status === 422) {
            const { errors } = data
            Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: key.replace('anketa.', ''), msg: errors[key].join(', ') }))
          } else throw new Error('Error create profession.')
        })
      })
    },
    _handleEditedProfession () {
      this._handleValidateFields().then(() => {
        this._editProfession().then((profession) => {
          const { id } = profession
          this.$router.push({ name: 'users.professions.show', params: { id } })
          Toast({ message: 'Профессия успешно отредактирована.', iconClass: 'mintui mintui-success' })
        }).catch(() => this._scrollToErrorFields())
      }).catch(() => this._scrollToErrorFields())
    },
    _editProfession () {
      return new Promise((resolve, reject) => {
        this.loading = true
        Indicator.open()

        let { professionName, id } = this
        let data = this._.cloneDeep(this.fields)

        this.$api.patch(`api/v2/users/professions/${id}`, { professionName, 'anketa': { ...data } }).then((response) => {
          const { data: { data } } = response

          Indicator.close()
          this.loading = false
          resolve && resolve(data)
        }, (error) => {
          const { response: { data, status } } = error

          Indicator.close()
          this.loading = false
          Toast({ message: 'Произошла ошибка при редактировании профессии', iconClass: 'mintui mintui-field-error' })

          reject && reject()

          if (status === 422) {
            const { errors } = data
            Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: key.replace('anketa.', ''), msg: errors[key].join(', ') }))
          } else throw new Error('Error create profession.')
        })
      })
    },
    _scrollToErrorFields () {
      let el = document.getElementsByClassName('error')
      if (el && el.length) this.$scrollTo(el[0], 500, { offset: -40 })
      // Toast({ message: 'Проверьте правильность ввода.', iconClass: 'mintui mintui-field-error' })
    },
    _handleClickChangeProfession () {
      if (this.edit === false) {
        this.$modalRouter.push({ name: 'users.professions.create' })
      }
    },
    _handleClickOpenModalCheckList () {
      this.$modalRouter.push({ name: 'users.checklists.portfolio' })
    },
    _handleClickOpenModalSnapsCheckList () {
      this.$modalRouter.push({ name: 'users.checklists.snaps' })
    },
    _handleClickClearForm () {
      this._clearForm().then(() => {
        this.$gtm.trackEvent({ event: 'clear_form' })
        Toast({ message: 'Форма очищена', iconClass: 'mintui mintui-success' })
      }).catch(() => {})
    },
    _clearForm () {
      return new Promise((resolve, reject) => {
        try {
          this.photos = []
          this.videos = []
          this.showFieldForm = false
          // eslint-disable-next-line no-return-assign
          this.$nextTick(() => this.showFieldForm = true)
          this.fields = this._.cloneDeep(this.defaultFields)
          resolve && resolve()
        } catch (e) {
          reject && reject(e)
        }
      })
    }
  }
}
