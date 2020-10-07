import { mapGetters } from 'vuex'
import { has, getDataAttribute, normalizeDotsToArrow, normalizeArrowsToDot, flatten, unflatten, HEADER_HEIGHT } from '@utils'

export default {
  data () {
    return {
      has,
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
      return this.edit ? 'Редактирование профессии' : 'Новая профессия'
    },
    isPublished () {
      return (this.profession) ? Boolean(this.profession.isPublished) : false
    },
    showReset () {
      const fields = this._.omit(this.fields)
      const defaultFields = this._.omit(this.defaultFields)

      return (this._.isEqual(fields, defaultFields) === false)
    },
    hasPhotos () {
      return this.photos && Boolean(this.photos.length)
    },
    hasVideos () {
      return this.videos && Boolean(this.videos.length)
    }
  },
  created () {
    if (this.edit) {
      const { anketa, videos, photos } = this.profession

      videos.forEach((video) => { return Object.assign(video,{ paths: { '128x128': video['cover']['original'] }}) })

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

          this.$notify({ type: 'success', title: 'Успешно', text: 'Профессия успешно создана.' })

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
        const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

        let { professionName } = this
        let data = this._.cloneDeep(this.fields)
        let videos = this.videos.map(item => item.id)
        let photos = this.photos.map(item => item.id)

        this.$api.post('api/v2/users/professions', { professionName, 'anketa': { ...data }, videos, photos }).then((response) => {
          const { data: { data } } = response

          loader.hide()
          this.loading = false
          this.$gtm.trackEvent({ event: 'add_new_profession' })
          resolve && resolve(data)
        }, (error) => {
          const { response: { data, status } } = error

          loader.hide()
          this.loading = false
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка при создании профессии.' })

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
          // const { username } = this.user
          // this.$router.push({ name: 'user.show', params: { username } })
          this.$notify({ type: 'success', title: 'Успешно', text: 'Профессия успешно отредактирована.' })
        }).catch(() => this._scrollToErrorFields())
      }).catch(() => this._scrollToErrorFields())
    },
    _editProfession () {
      return new Promise((resolve, reject) => {
        this.loading = true
        const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

        let { professionName, id } = this
        let data = this._.cloneDeep(this.fields)

        this.$api.patch(`api/v2/users/professions/${id}`, { professionName, 'anketa': { ...data } }).then((response) => {
          const { data: { data } } = response

          loader.hide()
          this.loading = false
          resolve && resolve(data)
        }, (error) => {
          const { response: { data, status } } = error

          loader.hide()
          this.loading = false
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка при редактировании профессии.' })

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
      if (el && el.length) this.$scrollTo(el[0], 500, { offset: (-40 - HEADER_HEIGHT) })
      this.$notify({ type: 'error', title: 'Ошибка', text: 'Проверьте правильность ввода.' })
    },
    _handleClickChangeProfession () {
      if (this.edit === false) {
        this.$modalRouter.push({ name: 'users.professions.create' })
      }
    },
    _handleClickOpenModalCheckList () {
      this.$root.$emit('open-modal-check-list-portfolio')
    },
    _handleClickClearForm () {
      this._clearForm().then(() => {
        this.$notify({
          type: 'success',
          title: 'Успешно',
          text: 'Форма очищена.'
        })
        this.$gtm.trackEvent({ event: 'clear_form' })
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
