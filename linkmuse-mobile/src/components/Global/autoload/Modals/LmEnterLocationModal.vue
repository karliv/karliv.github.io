<template>
  <mt-popup class="lm-m-modal-wrap lm-m-locations" v-model="modal.value" position="center" :modal="true" @input="_handleInputPopup">
    <template v-if="modal.state">
      <template v-if="(modal.state.is.auto)">
        <div class="title">
          <p>Ваш город</p>
          <template><lm-m-loader v-if="modal.navigator.loading"></lm-m-loader></template>
          <span v-if="modal.navigator.loading === false">{{ modal.navigator.position }}</span>
        </div>

        <div class="lm-m-locations-actions">
          <a href="javascript:void(0)" :class="['lm-primary-button', 'middle', { 'disabled': (modal.navigator.loading) }]" @click="_handleClickAcceptDetect">Да, все верно</a>
          <a href="javascript:void(0)" :class="['lm-outline-button', 'middle', { 'disabled': (modal.navigator.loading) }]" @click="_handleClickSkipAuto">Нет, это не так</a>
        </div>
      </template>
      <template v-if="(modal.state.is.hand)">
        <div class="title">
          <p>Укажите ваше местоположение</p>
        </div>
        <div class="lm-m-locations-content">
          <lm-select label=""
                     v-validate="'required'"
                     :data-vv-name="KEYS['country']"
                     v-model="fields[KEYS['country']]"
                     :input-id="normalizeDotsToArrow(KEYS['country'])"
                     :input-name="normalizeDotsToArrow(KEYS['country'])"
                     placeholder="Страна"
                     @change="_handleSelectCountry"
                     :options="sources['countries']"
                     :class="[{ 'filled': (fields[KEYS['country']]), 'error': (verrors.has(normalizeDotsToArrow(KEYS['country']))) }]">
          </lm-select>

          <lm-select label=""
                     v-validate="'required'"
                     v-model="fields[KEYS['city']]"
                     :data-vv-name="KEYS['city']"
                     :input-id="normalizeDotsToArrow(KEYS['city'])"
                     :input-name="normalizeDotsToArrow(KEYS['city'])"
                     :placeholder="(sources['cities'].length === 0) ? 'Сначала выберите страну' : 'Город'"
                     :options="sources['cities']"
                     :disabled="(sources['cities'].length === 0)"
                     :class="[{ 'filled': (fields[KEYS['city']]), 'error': (verrors.has(normalizeDotsToArrow(KEYS['city']))) }]">
          </lm-select>
        </div>
        <div class="lm-m-locations-actions">
          <a href="javascript:void(0)" :class="['lm-primary-button', 'middle', { disabled: !(fields[KEYS['country']] && fields[KEYS['city']]) }]" @click="_handleClickSaveLocation">Подтвердить</a>
        </div>
      </template>
    </template>
  </mt-popup>
</template>
<script>

  import { Popup } from 'mint-ui'
  import { mapGetters } from 'vuex'
  import { Indicator, Toast } from 'mint-ui'
  import PopupMix from '@components/Mixins/Popup'
  import { StateMachine, StateHelper } from 'state-machine'
  import { normalizeDotsToArrow, getDataAttribute, flatten } from '@utils'

  const KEYS = {
    city: 'city',
    country: 'country'
  }

  export default {
    components: { 'mt-popup': Popup },
    mixins: [PopupMix],
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
      _handleInputPopup (value) {
        if (value === false) {
          this._handleCloseModal()
        }
      },
      _handleNextStateAuto () {
        this.loadingCountries()
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
      loadingCountries () {
        Indicator.open()
        this.modal.sources.loading = true

        this.$api.get('/api/v1/geo/countries').then(response => {
          let { data } = response

          Indicator.close()
          this.modal.sources.countries = data
          this.modal.sources.loading = false
        }).catch((response) => {
          const { data, status } = response
          this.modal.sources.loading = true

          Indicator.close()
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

          if (status === 422) {
            let { errors } = data
            Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: key, msg: errors[key].join(', ') }))
          } else throw new Error('Error loading countries')
        });
      },
      _handleSelectCountry (country_id) {
        Indicator.open()
        this.clearingCity()
        this.modal.sources.loading = true

        this.$api.get('/api/v1/geo/cities', { country_id }).then(response => {
          let { data } = response

          Indicator.close()
          this.modal.sources.cities = data
          this.modal.sources.loading = false
        }).catch((response) => {
          const { data, status } = response
          this.modal.sources.loading = true

          Indicator.close()
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

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

            Indicator.open()

            let fields = Object.keys(this.modal.fields)
              .filter(key => Object.values(KEYS).includes(key))
              .reduce((obj, key) => ({...obj, [key]: this.modal.fields[key]}), {})

            let data = { 'anketa': { ...flatten(fields) } }

            this.$api.patch('/api/v1/profiles/artists', data).then((response) => {
              let { data } = response

              Indicator.close()
              this.$root.$emit('user-change-location')

              this.modal.loading = false

              this.$store.dispatch('auth/setUserField', { key: 'profile.data.country.data.id', value: this.modal.fields[KEYS['country']] })
              this.$store.dispatch('auth/setUserField', { key: 'profile.data.city.data.id', value: this.modal.fields[KEYS['city']] })

              // this.$cookies.set('auth_user', this.user)
              this.$store.dispatch('auth/getUserByAPI')

              this._handleCloseModal()
            }, (response) => {
              const { data, status } = response

              Indicator.close()
              Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

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
      _handleClickSkipAuto () {
        this.fsm.do('next')
      },
      _handleClickAcceptDetect () {
        Indicator.open()

        this.$api.get('/api/v1/geo/cities', { q: this.modal.navigator.position }).then(response => {
          let { data } = response
          Indicator.close()

          if ( data && (Array.isArray(data) && data.length) || (Object.keys(data).length) && data[0] ) {
            let { country_id, id: city_id } = data[0]

            this.fields[KEYS['city']] = city_id
            this.fields[KEYS['country']] = country_id

            this._handleClickSaveLocation()
          } else this._handleClickSkipAuto()
        }).catch((response) => {
          const { data, status } = response

          Indicator.close()
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

          this._handleClickSkipAuto()

          throw new Error('Error loading cities')
        });
      }
    }
  }
</script>
