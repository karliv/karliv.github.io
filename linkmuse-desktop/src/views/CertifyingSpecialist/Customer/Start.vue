<template>
  <section class="ss-main">
    <div class="ss-what-is-it ss-main-line">
      <h1 style="text-align: center;margin-top: 0"><b>Где вы будете работать</b></h1>
      <div class="ss-what-is-it-text" style="width: 100%;margin-bottom: 32px;">
        Для каждой услуги укажите адрес. Эту информацию всегда можно будет изменить в настройках <i class="lm-icon-settings-gear"></i>
        <div style="margin-top: 20px;" v-if="services.data.length">
          <ul class="lm-checkbox-buttons">
            <li>
              <input type="checkbox" id="duplication" v-model="duplicate">
              <label for="duplication">Буду проводить все верификации в одном месте</label>
            </li>
          </ul>
        </div>
      </div>
      <div class="lm-flex-bettwen">

        <template v-if="duplicate">
          <div class="lm-card" style="width: 490px;margin: 0 auto">
            <div class="lm-card--header">
              <span style="display: block;text-align: center" class="lm-card--header-title">Все верификации</span>
              <br>
              <span class="lm-card--header-count">-</span>
            </div>
            <div class="lm-card--body row inputs">
              <div :class="{ 'col-xs-12': true, 'lm-input-wrap': true, error: verrors.has('address_duplication') }">
                <label for="address_duplication">Адрес</label>
                <gmap-autocomplete id="address_duplication"
                                   key="address_duplication"
                                   v-validate="'required'"
                                   name="address_duplication"
                                   placeholder="Страна, город, улица, номер дома и офиса"
                                   v-model="duplication.fields.address"
                                   @place_changed="setPlaceDuplication"
                                   :class="{ 'lm-input': true, error: (verrors.has('address_duplication')) }">
                </gmap-autocomplete>

                <span class="lm-input-error" v-if="verrors.has('address_duplication')">{{ verrors.first('address_duplication')}}</span>
              </div>
              <div :class="{ 'col-xs-12': true, 'lm-input-wrap': true, error: verrors.has('metro_duplication') }">
                <label for="metro_duplication">Ближайшее метро</label>
                <input type="text" id="metro_duplication"
                       key="metro_duplication"
                       v-validate="'required'"
                       name="metro_duplication"
                       v-model="duplication.fields.metro"
                       placeholder="Ближайшее метро"
                       :class="{ 'lm-input': true, error: (verrors.has('metro_duplication')) }">

                <span class="lm-input-error" v-if="verrors.has('metro_duplication')">{{ verrors.first('metro_duplication')}}</span>
              </div>
              <div :class="{ 'col-xs-12': true, 'lm-input-wrap': true, error: verrors.has('location_duplication') }">
                <label for="location_duplication">Как добраться</label>
                <textarea placeholder="Подробно опишите, как добраться до места" cols="30" rows="10"
                          key="location_duplication"
                          v-validate="'required'"
                          id="location_duplication"
                          name="location_duplication"
                          v-model="duplication.fields.location"
                          :class="{ 'lm-input': true, error: (verrors.has('location_duplication')) }">
                                </textarea>
                <span class="lm-input-error" v-if="verrors.has('location_duplication')">{{ verrors.first('location_duplication')}}</span>
              </div>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="lm-card" style="width: 490px;margin: 0 auto" v-for="(service, index) in services.data" :key="service.id">
            <div class="lm-card--header">
              <span style="display: block;text-align: center" class="lm-card--header-title">{{ service.name | truncate(25) }}</span>
              <br>
              <span class="lm-card--header-count">{{ formatedWorks(service.works) }}</span>
            </div>
            <div class="lm-card--body row inputs">
              <div :class="{ 'col-xs-12': true, 'lm-input-wrap': true, error: verrors.has(`address_${index}`) }">
                <label :for="`address_${index}`">Адрес</label>
                <gmap-autocomplete :id="`address_${index}`"
                                   :index="index"
                                   :key="`address_${index}`"
                                   v-validate="'required'"
                                   :name="`address_${index}`"
                                   placeholder="Страна, город, улица, номер дома и офиса"
                                   v-model="service.address"
                                   @place_changed="setPlaceService"
                                   :class="{ 'lm-input': true, error: (verrors.has(`address_${index}`)) }">
                </gmap-autocomplete>

                <span class="lm-input-error" v-if="verrors.has(`address_${index}`)">{{ verrors.first(`address_${index}`)}}</span>
              </div>
              <div :class="{ 'col-xs-12': true, 'lm-input-wrap': true, error: verrors.has(`metro_${index}`) }">
                <label :for="`metro_${index}`">Ближайшее метро</label>
                <input type="text" :id="`metro_${index}`"
                       :key="`metro_${index}`"
                       v-validate="'required'"
                       :name="`metro_${index}`"
                       v-model="service.metro"
                       placeholder="Ближайшее метро"
                       :class="{ 'lm-input': true, error: (verrors.has(`metro_${index}`)) }">

                <span class="lm-input-error" v-if="verrors.has(`metro_${index}`)">{{ verrors.first(`metro_${index}`)}}</span>
              </div>
              <div :class="{ 'col-xs-12': true, 'lm-input-wrap': true, error: verrors.has(`location_${index}`) }">
                <label :for="`location_${index}`">Как добраться</label>
                <textarea placeholder="Подробно опишите, как добраться до места" cols="30" rows="10"
                          :key="`location_${index}`"
                          v-validate="'required'"
                          :id="`location_${index}`"
                          :name="`location_${index}`"
                          v-model="service.location"
                          :class="{ 'lm-input': true, error: (verrors.has(`location_${index}`)) }">
                            </textarea>
                <span class="lm-input-error" v-if="verrors.has(`location_${index}`)">{{ verrors.first(`location_${index}`)}}</span>
              </div>
            </div>
          </div>
        </template>

        <loader v-if="services.loading" class="col-md-12"></loader>

        <div class="pd-26 no-left" v-if="(services.data.length == 0 && !services.loading)">
          <span>К сожалению, услуг не найдено.</span>
        </div>
      </div>
      <br>
      <div style="width: 100%; text-align: center;">
        <a href="javascript:void(0)" class="lm-primary-button" @click="preSave()" v-if="!loading && !services.loading">Сохранить</a>
        <loader v-if="loading" class="col-md-12"></loader>
      </div>
    </div>
  </section>
</template>

<script>
import CertifyingSpecialist from '@modules/CertifyingSpecialist'

export default {
  metaInfo: {
    title: 'Где вы будете работать'
  },
  computed: {
    duplicate: {
      get () {
        return this.duplication.enabled
      },
      set (value) {
        this.duplication.enabled = value
      }
    }
  },
  data () {
    return {
      duplication: {
        enabled: false,
        fields: {
          metro: null,
          address: null,
          location: null
        }
      },
      services: {
        data: [],
        error: false,
        loading: false
      },
      errors: [],
      loading: false
    }
  },
  created () {
    this.fetchServices()
  },
  methods: {
    fetchServices () {
      this.services.loading = true
      this.$api.get('api/v2/certifying-specialists/settings').then(response => {
        let {data: {data}} = response
        this.services = {
          data,
          loading: false,
          error: false
        }
      }).catch((err) => {
        this.services = {
          data: [],
          loading: false,
          error: true
        }
        throw new Error('Error fetch my services in settings')
      })
    },
    formatedWorks (works) {
      return Object.values(CertifyingSpecialist.getTransformServiceWorkType(works)).join(', ')
    },
    preSave () {
      this.$validator.validateAll().then(result => {
        if (result) {
          if (this.duplicate) {
            this.duplicated().then(result => {
              this.save()
            })
          } else this.save()
        }
      })
    },
    save () {
      this.loading = true
      let {data} = this.services

      this.$api.post('api/v2/certifying-specialists/settings', {services: data}).then(response => {
        this.loading = false
        const {data} = response
        this.$router.push({'name': 'certifying.customer.orders.index'})
      }).catch((error) => {
        this.loading = false

        const {response: {data}, response: {status}} = error
        if (status === 422 && data.errors) {
          this.errors = data.errors
        } else throw new Error('Error save settings CS')
      })
    },
    setPlaceDuplication (place) {
      let coordinates = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      }
      let address = place.formatted_address

      let {fields} = this.duplication

      this.$set(fields, 'address', address)
      this.$set(fields, 'coordinates', coordinates)
    },
    setPlaceService (place, id, index) {
      if (typeof index === 'undefined') return

      let coordinates = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      }
      let address = place.formatted_address

      this.$set(this.services.data[index], 'address', address)
      this.$set(this.services.data[index], 'coordinates', coordinates)
    },
    duplicated () {
      return new Promise((resolve, reject) => {
        let {data} = this.services
        let {fields} = this.duplication

        data.forEach((item) => {
          Object.assign(item, fields)
        })
        resolve()
      })
    }
  }
}
</script>

<style>

</style>
