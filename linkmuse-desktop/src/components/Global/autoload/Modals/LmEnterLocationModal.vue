<template>
  <modal class="modal-center modal-locations" v-model="modal.value" @hide="_handleCloseModal()" :header="false"
         :footer="false">
    <a @click="_handleCloseModal" href="javascript:void(0)" class="close-modal"></a>
    <template v-if="modal.state">
      <template v-if="(modal.state.is.auto)">
        <div class="title">Ваш город</div>
        <template><loader style="margin-top: 10px" v-if="modal.navigator.loading"></loader></template>
        <h2 style="text-align: center" v-if="modal.navigator.loading === false">{{ modal.navigator.position }}</h2>

        <div class="actions">
          <loader style="margin-top: 10px" v-if="modal.loading"></loader>
          <template v-if="(modal.loading === false)">
            <a href="javascript:void(0)" :class="['d-btn d-btn_primary', 'middle', { 'disabled': (modal.navigator.loading) }]" @click="_handleClickAcceptDetect">Да, все верно</a>
            <a href="javascript:void(0)" :class="['d-btn d-btn_outline', 'middle', { 'disabled': (modal.navigator.loading) }]" @click="_handleClickSkipAuto">Нет, это не так</a>
          </template>
        </div>
      </template>
      <template v-if="(modal.state.is.hand)">
        <h2>Укажите ваше местоположение</h2>
        <div class="actions">
          <div class="lm-dropdown-wrap lm-dropdown-wrap--n">
            <v-select :key="KEYS['country']"
                      :name="normalizeDotsToArrow(KEYS['country'])"
                      :id="KEYS['country']"
                      v-validate="'required'"
                      v-model="fields[KEYS['country']]"
                      :options="sources.countries" :placeholder="'Страна'"
                      :filter="true"
                      @input="_handleSelectCountry" style="margin-bottom: 10px">
            </v-select>
          </div>

          <div class="lm-dropdown-wrap lm-dropdown-wrap--n">
            <v-select :key="KEYS['city']"
                      :name="normalizeDotsToArrow(KEYS['city'])"
                      :id="KEYS['city']"
                      v-validate="'required'"
                      v-model="fields[KEYS['city']]"
                      :options="sources.cities"
                      :placeholder="'Город'" :filter="true">
            </v-select>
          </div>

          <template v-if="(modal.loading === false)">
            <a href="javascript:void(0)"
               :class="['lm-primary-button', 'middle', { disabled: !(fields[KEYS['country']] && fields[KEYS['city']]) }]"
               @click="_handleClickSaveLocation" style="margin-top: 10px">Подтвердить</a>
          </template>
          <loader v-if="(modal.loading === true)"></loader>
        </div>
      </template>
    </template>
  </modal>
</template>
<script>

  import { mapGetters } from 'vuex'
  import { StateMachine, StateHelper } from 'state-machine'
  import { normalizeDotsToArrow, getDataAttribute, flatten } from '@utils'

  const KEYS = {
    city: 'city',
    country: 'country'
  }

  export default {
    data () {
      return {
        KEYS, normalizeDotsToArrow,
        modal: {
          state: null,
          value: false,
          loading: false,
          navigator: {
            loading: false,
            position: 'Москва'
          },
          sources: {
            cities: [],
            countries: [],
            loading: false
          },
          fields: {
            city: null,
            country: null
          }
        }
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser'
      }),
      fields () {
        return this.modal.fields
      },
      sources () {
        return this.modal.sources
      }
    },
    beforeDestroy () {
      this.$root.$off('open-modal-draw-geo')
    },
    mounted () {
      this.$root.$on('open-modal-draw-geo', () => {
        this._initStateMachine()
        if (navigator.geolocation) {
          this.modal.navigator.loading = true
          navigator.geolocation.getCurrentPosition(this._handleAcceptPosition, () => { this._handleClickSkipAuto() })
        } else this._handleClickSkipAuto()
        this.modal.value = true
      })
    },
    methods: {
      _initStateMachine () {
        this.fsm = StateMachine.create({
          transitions: [
            'next :  auto > hand',
            'back :  auto < hand',
          ],
          handlers: {
            'auto@next': this._handleNextStateAuto
          }
        })

        this.modal.state = StateHelper.object(this.fsm).data
      },
      _handleAcceptPosition (position) {
        this.$geocoder.setDefaultMode('lat-lng')
        let { coords: { latitude: lat , longitude: lng } } = position

        this.$geocoder.send({ lat, lng }, (response) => {
          let result = ''
          let { results, status } = response

          if (status === "OK") {
            if (results[1]) {
              let city = false
              for (let i = 0; i < results.length; i++) {
                if ((!city) && results[i].types[0] === "locality") {
                  result = results[i]['address_components'][0]['long_name']
                }
              }
              if (result) {
                this.modal.navigator.position = result
              } else this._handleClickSkipAuto()
            } else this._handleClickSkipAuto()
            this.modal.navigator.loading = false
          } else this._handleClickSkipAuto()
        })
      },
      _handleNextStateAuto () {
        this.loadingCountries()
      },
      _handleClickSkipAuto () {
        this.fsm.do('next')
      },
      _handleCloseModal () {
        this.modal = {
          state: null,
          value: false,
          loading: false,
          navigator: {
            loading: false,
            position: 'Москва'
          },
          sources: {
            cities: [],
            countries: [],
            loading: false
          },
          fields: {
            city: null,
            country: null
          }
        }
      },
      _handleClickDisabledAutodetect () {
        this.modal.state = 1
      },
      loadingCountries () {
        this.modal.sources.loading = true

        this.$api.get('/api/v1/geo/countries').then(response => {
          let { data } = response
          this.modal.sources.countries = data
          this.modal.sources.loading = false
        }).catch((response) => {
          const { data, status } = response
          this.modal.sources.loading = true

          if (status === 422) {
            let { errors } = data
            Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: key, msg: errors[key].join(', ') }))
          } else throw new Error('Error loading countries')
        });
      },
      _handleSelectCountry (country_id) {
        this.clearingCity()
        this.modal.sources.loading = true

        this.$api.get('/api/v1/geo/cities', { country_id }).then(response => {
          let { data } = response
          this.modal.sources.cities = data
          this.modal.sources.loading = false
        }).catch((response) => {
          const { data, status } = response
          this.modal.sources.loading = true

          if (status === 422) {
            let { errors } = data
            Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: key, msg: errors[key].join(', ') }))
          } else throw new Error('Error loading cities')
        });
      },
      clearingCity () {
        this.modal.sources.cities = []
        this.fields[KEYS['city']] = null
      },
      _handleClickSaveLocation () {
        if (this.modal.loading) return

        this.modal.loading = true

        this.$validator.validateAll().then((result) => {
          if (result) {

            let fields = Object.keys(this.modal.fields)
              .filter(key => Object.values(KEYS).includes(key))
              .reduce((obj, key) => ({...obj, [key]: this.modal.fields[key]}), {})

            let data = { 'anketa': { ...flatten(fields) } }

            this.$api.patch('/api/v1/profiles/artists', data).then((response) => {
              let { data } = response
              this.$root.$emit('user-change-location')

              this.modal.loading = false

              this.$store.dispatch('auth/setUserField', { key: 'profile.data.country.data.id', value: this.modal.fields[KEYS['country']] })
              this.$store.dispatch('auth/setUserField', { key: 'profile.data.city.data.id', value: this.modal.fields[KEYS['city']] })

              // this.$cookies.set('auth_user', this.user)
              this.$store.dispatch('auth/getUserByAPI')

              this._handleCloseModal()
            }, (response) => {
              const { data, status } = response

              this.modal.loading = false

              if (status === 422) {
                const {errors} = data
                Object.keys(errors).forEach((key) => this.$validator.errors.add({
                  field: key.replace('anketa.', ''),
                  msg: errors[key].join(', ')
                }))
              } else throw new Error('Error attach location')
            })
          } else this.modal.loading = false
        })
      },
      _handleClickAcceptDetect () {
        this.modal.loading = true

        this.$api.get('/api/v1/geo/cities', { q: this.modal.navigator.position }).then(response => {
          let { data } = response

          if ( data.length && data[0] ) {
            let { country_id, id: city_id } = data[0]

            this.fields[KEYS['city']] = city_id
            this.fields[KEYS['country']] = country_id

            this.modal.loading = false
            this._handleClickSaveLocation()
          } else this._handleClickSkipAuto()
        }).catch((response) => {
          const { data, status } = response

          this.modal.loading = false
          this._handleClickSkipAuto()

          throw new Error('Error loading cities')
        });
      }
    }
  }
</script>
