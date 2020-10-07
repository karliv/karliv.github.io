import _ from 'lodash'

export default {
  data () {
    return {
      loadingCities: false
    }
  },
  methods: {
    /**
     * Handle change country select. Loaded cities.
     *
     * @param countryId
     * @param clear
     * @param loading
     * @param callback
     * @private
     */
    _handleChangeCountrySelect (countryId, clear = true, loading = true, callback) {
      if (!countryId) this.fields.cityId = null
      if (clear) this.fields.cityId = null

      return new Promise((resolve, reject) => {
        if (!countryId) {
          reject && reject()
          return false
        }

        if (callback && typeof callback === 'function') callback()

        this.sources.cities = []
        if (loading) this.loadingCities = true

        this._fetchCities(countryId).then((data) => {
          this.loadingCities = false
          this.$set(this.sources, 'cities', data)

          resolve && resolve()
        }).catch(() => {
          this.loadingCities = false
          reject && reject()
        })
      })
    },
    _handleSearchCities: _.debounce(function (search, loading, options) {
      if (search) {
        loading(true)

        this._fetchCities(this.fields.countryId, search).then((data) => {
          options(data)

          this.$set(this.sources, 'cities', data)

          let indexOf = data.map(c => c.id).indexOf(this.fields.cityId)
          if (indexOf < 0) this.fields.cityId = null

          loading(false)
        }).catch(() => { loading(false) })
      }
    }, 500),
    _fetchCities (country_id, q = '') {
      return new Promise((resolve, reject) => {
        this.$api.get('api/v1/geo/cities', { q, country_id }).then((response) => {
          const { data } = response
          resolve && resolve(data)
        }, (error) => {
          const { response: { data, status } } = error
          reject && reject()
          throw new Error('Error loading castings cities')
        })
      })
    },
  }
}
