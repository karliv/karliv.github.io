<template>
  <div class="modal modal_filters modal_active" v-show="value">
    <div class="modal__content modal__content_filters">
      <div class="form form_filters">

        <div class="row row_justify_between">
          <div class="heading_h4">{{ $t('location.location-filter.filters') }}</div>
          <template v-if="showReset">
            <button class="btn btn_reset" @click.stop.prevent="_handleClickClearFilter">Сбросить</button>
          </template>
        </div>

        <div class="form__section form__section_filters bt_none">
          <div class="form__group form__group_declaration">
            <label for="form__select_declaration_types" class="label input__label">
              {{ $t('location.location-filter.location-type') }}
            </label>
            <lm-select :class="['lm-m-filter-line', { 'filled': (fields.types.length) }]"
                       v-model="fields.types"
                       :input-required="false"
                       input-id="form__select_declaration_types"
                       input-name="types"
                       data-vv-name="types"
                       :data-vv-as="$t('location.location-filter.location-type')"
                       :placeholder="$t('location.location-filter.all')"
                       label=""
                       :multiple="true"
                       :options="sources['types']">
            </lm-select>
          </div>
          <div class="form__group form__group_declaration">
            <label for="form__select_declaration_roomTypes" class="label input__label">
              {{ $t('location.location-filter.room-type') }}
            </label>
            <lm-select :class="['lm-m-filter-line', { 'filled': (fields.roomTypes.length) }]"
                       v-model="fields.roomTypes"
                       :input-required="false"
                       input-id="form__select_declaration_roomTypes"
                       input-name="roomTypes"
                       data-vv-name="roomTypes"
                       :data-vv-as="$t('location.location-filter.room-type')"
                       :placeholder="$t('location.location-filter.all-rooms')"
                       label=""
                       :multiple="true"
                       :options="sources['roomTypes']">
            </lm-select>
          </div>
          <div class="form__group form__group_declaration">
            <label for="form__select_declaration_equipmentAndFacilities" class="label input__label">
              {{ $t('location.location-filter.services-and-equipment') }}
            </label>
            <lm-select :class="['lm-m-filter-line', { 'filled': (fields.equipmentAndFacilities.length) }]"
                       v-model="fields.equipmentAndFacilities"
                       :input-required="false"
                       input-id="form__select_declaration_equipmentAndFacilities"
                       input-name="equipmentAndFacilities"
                       data-vv-name="equipmentAndFacilities"
                       :data-vv-as="$t('location.location-filter.services-and-equipment')"
                       :placeholder="$t('location.location-filter.all-services')"
                       label=""
                       :multiple="true"
                       :options="equipmentAndFacilities">
            </lm-select>
          </div>
        </div>

        <div class="form__section form__section_filters">
          <div class="form__group form__group_declaration">
            <div class="row row_justify_between">
              <div class="column mr_4">
                <div class="input">
                  <label for="roomHeightMin" class="input__label">{{ $t('location.location-filter.room-height') }}</label>
                  <input v-mask-decimal="{ digits: 2 }" type="number" :placeholder="$t('location.location-filter.from')"
                         inputmode="numeric" pattern="[0-9]*"
                         id="roomHeightMin"
                         name="roomHeightMin"
                         data-vv-name="roomHeightMin"
                         :data-vv-as="$t('location.location-filter.from')"
                         ref="roomHeightMin"
                         v-model="fields.roomHeightMin"
                         min="1" max="9999"
                         v-validate="'decimal:2|min_value:1|max_value:9999'"
                         :class="[{ 'error': (verrors.has('roomHeightMin')), 'filled': (fields.roomHeightMin && !verrors.has('roomHeightMin')) }, 'input__field', 'input__field_filters']">
                </div>
              </div>
              <div class="column">
                <div class="input">
                  <label for="roomHeightMax" class="input__label">&nbsp;</label>
                  <input v-mask-decimal="{ digits: 2 }" type="number" :placeholder="$t('location.location-filter.to')"
                         inputmode="numeric" pattern="[0-9]*"
                         id="roomHeightMax"
                         name="roomHeightMax"
                         data-vv-name="roomHeightMax"
                         :data-vv-as="$t('location.location-filter.to')"
                         ref="roomHeightMax"
                         v-model="fields.roomHeightMax"
                         min="1" max="150"
                         v-validate="'decimal:2|min_value:1|max_value:9999|minTarget:roomHeightMin'"
                         :class="[{ 'error': (verrors.has('roomHeightMax')), 'filled': (fields.roomHeightMax && !verrors.has('roomHeightMax')) }, 'input__field', 'input__field_filters']">
                </div>
              </div>
            </div>
          </div>
          <div class="form__group form__group_declaration">
            <div class="row row_justify_between">
              <div class="column mr_4">
                <div class="input">
                  <label for="dimensionMin" class="input__label">{{ $t('location.location-filter.size') }}</label>
                  <input v-mask-decimal="{ digits: 2 }" type="number" placeholder="От"
                         inputmode="numeric" pattern="[0-9]*"
                         id="dimensionMin"
                         name="dimensionMin"
                         data-vv-name="dimensionMin"
                         :data-vv-as="$t('location.location-filter.from')"
                         ref="dimensionMin"
                         v-model="fields.dimensionMin"
                         min="1" max="9999"
                         v-validate="'decimal:2|min_value:1|max_value:9999'"
                         :class="[{ 'error': (verrors.has('dimensionMin')), 'filled': (fields.dimensionMin && !verrors.has('dimensionMin')) }, 'input__field', 'input__field_filters']">
                </div>
              </div>
              <div class="column">
                <div class="input">
                  <label for="dimensionMax" class="input__label">&nbsp;</label>
                  <input v-mask-decimal="{ digits: 2 }" type="number" placeholder="До"
                         inputmode="numeric" pattern="[0-9]*"
                         id="dimensionMax"
                         name="dimensionMax"
                         data-vv-name="dimensionMax"
                         :data-vv-as="$t('location.location-filter.to')"
                         ref="dimensionMax"
                         v-model="fields.dimensionMax"
                         min="1" max="9999"
                         v-validate="'decimal:2|min_value:1|max_value:9999|minTarget:dimensionMin'"
                         :class="[{ 'error': (verrors.has('dimensionMax')), 'filled': (fields.dimensionMax && !verrors.has('dimensionMax')) }, 'input__field', 'input__field_filters']">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="form__section form__section_filters">
          <div class="form__group form__group_declaration">
            <div class="row row_justify_between">
              <div class="column mr_4">
                <div class="input">
                  <label for="price" class="input__label">{{ $t('location.location-filter.price') }}</label>
                  <input v-mask-numeric type="number" :placeholder="$t('location.location-filter.enter-amount')"
                         inputmode="numeric" pattern="[0-9]*"
                         id="price"
                         name="price"
                         data-vv-name="price"
                         :data-vv-as="$t('location.location-filter.price')"
                         ref="price"
                         v-model="fields.price"
                         min="1" max="9999999"
                         v-validate="'numeric|min_value:1|max_value:9999999'"
                         :class="[{ 'error': (verrors.has('price')), 'filled': (fields.price && !verrors.has('price')) }, 'input__field', 'input__field_filters']">
                </div>
              </div>
              <div class="column w_auto min-w_72px">
                <div>
                  <label for="form__select_declaration_currencyId" class="input__label">
                    {{ $t('location.location-filter.currency') }}
                  </label>
                  <lm-select :class="['lm-m-filter-line', { 'filled': (fields.currencyId) }]"
                             v-model="fields.currencyId"
                             :input-required="false"
                             input-id="form__select_declaration_currencyId"
                             input-name="currencyId"
                             data-vv-name="currencyId"
                             :data-vv-as="$t('location.location-filter.currency')"
                             :placeholder="$t('location.location-filter.not-cho')"
                             label=""
                             :multiple="false"
                             :options="currencies">
                  </lm-select>
                </div>
              </div>
            </div>
          </div>

          <div class="form__group form__group_declaration">
            <label for="form__select_declaration_paymentPeriod" class="label input__label">
              {{ $t('location.location-filter.payment-period') }}
            </label>
            <lm-select :class="['lm-m-filter-line', { 'filled': (fields.paymentPeriod) }]"
                       v-model="fields.paymentPeriod"
                       :input-required="false"
                       input-id="form__select_declaration_paymentPeriod"
                       input-name="paymentPeriod"
                       data-vv-name="paymentPeriod"
                       :data-vv-as="$t('location.location-filter.payment-period')"
                       :placeholder="$t('location.location-filter.not-chosen')"
                       label=""
                       :multiple="false"
                       :options="sources['paymentPeriods']">
            </lm-select>
          </div>
        </div>

        <div class="form__section form__section_filters">
          <div class="form__group form__group_declaration">
            <label for="form__select_declaration_country" class="label input__label">
              {{ $t('location.location-filter.country') }}
            </label>
            <lm-select :class="['lm-m-filter-line', { 'filled': (fields.countryId) }]"
                       :searchable="true" :filterable="true" :title="'Выбор страны'"
                       v-model="fields.countryId"
                       :input-required="false"
                       input-id="form__select_declaration_country"
                       input-name="countryId"
                       data-vv-name="countryId"
                       :data-vv-as="$t('location.location-filter.country')"
                       :placeholder="$t('location.location-filter.all-countries')"
                       label=""
                       :multiple="false"
                       @input="_handleChangeCountrySelect(...arguments, true, true)"
                       :options="sources['countries']">
            </lm-select>
          </div>
          <div class="form__group form__group_declaration">
            <label for="form__select_declaration_city" class="label input__label">
              {{ $t('location.location-filter.city') }}
            </label>
            <lm-select :class="['lm-m-filter-line', { 'filled': (fields.cityId) }]"
                       @search="_handleSearchCities" :searchable="true" :filterable="false" :loading="loadingCities" :title="'Выбор города'"
                       v-model="fields.cityId"
                       :input-required="false"
                       input-id="form__select_declaration_city"
                       input-name="cityId"
                       data-vv-name="cityId"
                       :data-vv-as="$t('location.location-filter.city')"
                       :placeholder="$t('location.location-filter.all-cities')"
                       label=""
                       :multiple="false"
                       :disabled="(!fields.countryId )"
                       :options="sources['cities']">
            </lm-select>
          </div>
        </div>

        <div class="form__controls form__controls_filters">
          <div class="row row_justify_between">
            <button class="btn btn_secondary" @click.stop.prevent="_handleClickHideFilter">{{ $t('location.location-filter.back') }}</button>
            <button class="btn btn_primary" @click.stop.prevent="_handleClickApplyFilter">{{ $t('location.location-filter.apply') }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex'
  import { Indicator, Toast } from 'mint-ui'
  import { createHelpers } from 'vuex-map-fields'
  import { EQUIPMENT_RENTAL, PARKING, INTERIOR, EXTERIOR, DRESSING_ROOM, SCENE, CHROMAKEY, CYCLORAMA, DAYLIGHT } from '@modules/Board/Location/Enums/LocationEquip'

  import AjaxSelectCity from '@modules/Geo/mixins/AjaxSelectCity'

  const { mapFields } = createHelpers({
    getterType: 'board/location/getField',
    mutationType: 'board/location/updateField',
  })

  export default {
    mixins: [AjaxSelectCity],
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {

      }
    },
    watch: {
      value(val) {
        val ? window.nsWebViewInterface.emit('swipe2Back', true) : window.nsWebViewInterface.emit('swipe2Back', false)
        this.$root.$emit('open-modal-fullscreen', val)
      }
    },
    computed: {
      ...mapFields({
        fields: 'locations.filter',
        defaultFields: 'locations.defaultFilter'
      }),
      ...mapGetters({
        profile: 'auth/getProfile',
        isAuthorized: 'auth/isAuthorized',
        sources: 'board/location/getSources'
      }),
      showReset () {
        const fields = this._.omit(this.fields, ['name'])
        const defaultFields = this._.omit(this.defaultFields, ['name'])

        return (this._.isEqual(fields, defaultFields) === false)
      },
      currencies () {
        return this.sources['currencies'].map((curr) => { return { id: curr.id, text: curr.symbol } })
      },
      equipmentAndFacilities () {
        return [
          { id: EQUIPMENT_RENTAL, text: this.$t('dictionary.equipment-services.' + EQUIPMENT_RENTAL, 'web_ru') },
          { id: PARKING, text: this.$t('dictionary.equipment-services.' + PARKING, 'web_ru') },
          { id: INTERIOR, text: this.$t('dictionary.equipment-services.' + INTERIOR, 'web_ru') },
          { id: EXTERIOR, text: this.$t('dictionary.equipment-services.' + EXTERIOR, 'web_ru') },
          { id: DRESSING_ROOM, text: this.$t('dictionary.equipment-services.' + DRESSING_ROOM, 'web_ru') },
          { id: SCENE, text: this.$t('dictionary.equipment-services.' + SCENE, 'web_ru') },
          { id: CHROMAKEY, text: this.$t('dictionary.equipment-services.' + CHROMAKEY, 'web_ru') },
          { id: CYCLORAMA, text: this.$t('dictionary.equipment-services.' + CYCLORAMA, 'web_ru') },
          { id: DAYLIGHT, text: this.$t('dictionary.equipment-services.' + DAYLIGHT, 'web_ru') }
        ]
      }
    },
    created () {
      this.$nextTick(() => {
        if (this.fields.countryId && this.sources.cities.length === 0) {
          this._handleChangeCountrySelect(this.fields.countryId, false, true)
        }
      })
    },
    methods: {
      /**
       *
       * */
      _handleClickHideFilter () {
        this.$emit('hide')
      },
      /**
       *
       */
      _handleClickApplyFilter () {
        this._handleValidateFields().then(() => {
          this.parameters = false
          this.$emit('apply')
        }).catch(() => {})
      },
      /**
       *
       */
      _handleClickClearFilter () {
        this._clearFilter().then(() => {

        }).catch(() => {})
      },
      _clearFilter(parameters) {
        return new Promise((resolve, reject) => {
          try {
            if (parameters) this.parameters = false
            const fields = this._.omit(this.fields, ['name'])

            Object.keys(fields).forEach(k => {
              if (this.fields[k] === null && typeof this.fields[k] === "object") {
                this.fields[k] = null
              } else if (typeof this.fields[k] === 'object') {
                this.fields[k] = []
              } else this.fields[k] = ''
            })
            resolve && resolve()
          } catch (e) {
            reject && reject(e)
          }
        })
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
            } else reject()
          })
        })
      },
      _handleInputPickParameters () {
        if ( this.parameters ) {
          this._clearFilter(false).then(() => {
            let { age, sex } = this.profile
            Object.assign(this.fields, {
              ageTo: age ? (age + 1) : '',
              genderIds: sex ? [sex] : [],
              ageFrom: age ? (age - 1) : ''
            })
          }).catch(() => {})
        } else {
          this._clearFilter(false).then(() => {
            Object.assign(this.fields, {
              ageTo: '',
              ageFrom: '',
              genderIds: []
            })
          }).catch(() => {})
        }
      }
    }
  }
</script>

<style scoped>

</style>
