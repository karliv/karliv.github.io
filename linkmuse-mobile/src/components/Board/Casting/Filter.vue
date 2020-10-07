<template>
  <div class="modal modal_filters modal_active" v-show="value">
    <div class="modal__content modal__content_filters">
      <div class="form form_filters">
        <div class="row row_justify_between">
          <div class="heading_h4">{{ $t('boardbox.filters.options') }}</div>
          <template v-if="showReset">
            <button class="btn btn_reset" @click.stop.prevent="_handleClickClearFilter">{{ $t('boardbox.filters.reset') }}</button>
          </template>
        </div>
        <div class="form__section form__section_filters">
          <template v-if="(isAuthorized === true)">
            <div class="form__group form__group_declaration">
              <div class="row">
                <div class="switch w_100">
                  <label for="parameters" class="switch__label">{{ $t('casting-page.filters-choose-my-preferences.choose-my-preferences') }}</label>
                  <input id="parameters" type="checkbox" class="switch__mark" v-model="parameters" @change="_handleInputPickParameters">
                  <label for="parameters" class="switch__btn"></label>
                </div>
              </div>
            </div>
          </template>
          <div class="form__group form__group_declaration">
            <label for="form__select_declaration_category" class="label input__label">
              {{ $t('boardbox.filters.category') }}
            </label>
            <lm-select :class="['lm-m-filter-line', { 'filled': (fields.categoryIds.length) }]"
                       v-model="fields.categoryIds"
                       :input-required="false"
                       input-id="form__select_declaration_category"
                       input-name="categoryIds"
                       data-vv-name="categoryIds"
                       :data-vv-as="$t('boardbox.filters.category')"
                       :placeholder="$t('boardbox.filters.all-categories')"
                       label=""
                       :multiple="true"
                       :options="sources['categories']">
            </lm-select>
          </div>
          <div class="form__group form__group_declaration">
            <label for="form__select_declaration_role" class="label select__label select__label_declaration">
              {{ $t('boardbox.filters.role') }}
            </label>
            <lm-select :class="['lm-m-filter-line', { 'filled': (fields.professionNames.length) }]"
                       v-model="fields.professionNames"
                       :input-required="false"
                       input-id="form__select_declaration_role"
                       input-name="professionNames"
                       data-vv-name="professionNames"
                       :data-vv-as="$t('boardbox.filters.role')"
                       :placeholder="$t('boardbox.filters.all-roles')"
                       label=""
                       :multiple="true"
                       :options="sources['professions']">
            </lm-select>
          </div>
        </div>
        <div class="form__section form__section_filters">
          <div class="form__group form__group_declaration">
            <label class="label input__label">{{ $t('boardbox.filters.gender') }}</label>
            <div class="form__row form__row_declaration">

              <div class="form__column form__column_declaration" v-for="gender in sources['genders']">
                <input :id="`form__checkbox_declaration_gender_${gender.id}`" type="checkbox"
                       name="gender" :value="gender.id" v-model="fields['genderIds']"
                       :data-vv-as="$t('boardbox.filters.gender')"
                       class="form__checkbox form__checkbox_declaration form__checkbox_declaration_gender">
                <label class="checkbox__label_declaration checkbox__label_declaration_gender" :for="`form__checkbox_declaration_gender_${gender.id}`">{{ gender.text }}</label>
              </div>

            </div>
          </div>
          <div class="row row_justify_between">
            <div class="column mr_4">
              <div class="input">
                <label for="ageFrom" class="input__label">{{ $t('boardbox.filters.age-from') }}</label>
                <input v-mask-numeric type="number"
                       inputmode="numeric" pattern="[0-9]*"
                       id="ageFrom"
                       name="ageFrom"
                       data-vv-name="ageFrom"
                       :data-vv-as="$t('boardbox.filters.age-from')"
                       ref="ageFrom"
                       v-model="fields.ageFrom"
                       min="1" max="150"
                       v-validate="'decimal:3|min_value:1|max_value:150'"
                       :class="[{ 'error': (verrors.has('ageFrom')), 'filled': (fields.ageTo && !verrors.has('ageFrom')) }, 'input__field', 'input__field_filters']">
              </div>
            </div>
            <div class="column">
              <div class="input">
                <label for="ageTo" class="input__label">{{ $t('boardbox.filters.age-to') }}</label>
                <input v-mask-numeric type="number"
                       inputmode="numeric" pattern="[0-9]*"
                       id="ageTo"
                       name="ageTo"
                       data-vv-name="ageTo"
                       :data-vv-as="$t('boardbox.filters.age-to')"
                       ref="ageTo"
                       v-model="fields.ageTo"
                       min="1" max="150"
                       v-validate="'decimal:3|min_value:1|max_value:150|minTarget:ageFrom'"
                       :class="[{ 'error': (verrors.has('ageTo')), 'filled': (fields.ageTo && !verrors.has('ageTo')) }, 'input__field', 'input__field_filters']">
              </div>
            </div>
          </div>
        </div>
        <div class="form__section form__section_filters">
          <div class="form__group form__group_declaration">
            <label for="form__select_declaration_country" class="label input__label">
              {{ $t('boardbox.filters.country') }}
            </label>
            <lm-select :class="['lm-m-filter-line', { 'filled': (fields.countryId) }]"
                       :searchable="true" :filterable="true" :title="'Выбор страны'"
                       v-model="fields.countryId"
                       :input-required="false"
                       input-id="form__select_declaration_country"
                       input-name="countryId"
                       data-vv-name="countryId"
                       :data-vv-as="$t('boardbox.filters.country')"
                       :placeholder="$t('boardbox.filters.all-countries')"
                       label=""
                       :multiple="false"
                       @input="_handleChangeCountrySelect(...arguments, true, true)"
                       :options="sources['countries']">
            </lm-select>
          </div>
          <div class="form__group form__group_declaration">
            <label for="form__select_declaration_city" class="label input__label">
              {{ $t('boardbox.filters.city') }}
            </label>
            <lm-select :class="['lm-m-filter-line', { 'filled': (fields.cityId) }]"
                       @search="_handleSearchCities" :searchable="true" :filterable="false" :loading="loadingCities" :title="'Выбор города'"
                       v-model="fields.cityId"
                       :input-required="false"
                       input-id="form__select_declaration_city"
                       input-name="cityId"
                       data-vv-name="cityId"
                       :data-vv-as="$t('boardbox.filters.city')"
                       :placeholder="$t('boardbox.filters.all-cities')"
                       label=""
                       :multiple="false"
                       :disabled="(!fields.countryId )"
                       :options="sources['cities']">
            </lm-select>
          </div>
        </div>
        <div class="form__section form__section_filters">
          <div class="form__group form__group_declaration">
            <div class="row">
              <div class="switch w_100">
                <label for="isOnline" class="switch__label">Кастинг онлайн</label>
                <input id="isOnline" type="checkbox" class="switch__mark" true-value="1" false-value="" v-model="fields.isOnline">
                <label for="isOnline" class="switch__btn"></label>
              </div>
            </div>
          </div>
        </div>

        <div class="form__controls form__controls_filters">
          <div class="row row_justify_between">
            <button class="btn btn_secondary" @click.stop.prevent="_handleClickHideFilter">{{ $t('boardbox.filters.back') }}</button>
            <button class="btn btn_primary" @click.stop.prevent="_handleClickApplyFilter">{{ $t('boardbox.filters.search') }}</button>
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

  import AjaxSelectCity from '@modules/Geo/mixins/AjaxSelectCity'

  const { mapFields } = createHelpers({
    getterType: 'board/casting/getField',
    mutationType: 'board/casting/updateField',
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
        parameters: false
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
        fields: 'castings.filter',
        defaultFields: 'castings.defaultFilter'
      }),
      ...mapGetters({
        user: 'auth/getAuthUser',
        isAuthorized: 'auth/isAuthorized',
        sources: 'board/casting/getSources'
      }),
      showReset () {
        const fields = this._.omit(this.fields, ['name'])
        const defaultFields = this._.omit(this.defaultFields, ['name'])

        return (this._.isEqual(fields, defaultFields) === false)
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
            this.fields.isOnline = String('')
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
            let { gender: { id: genderId }, age } = this.user
            Object.assign(this.fields, {
              ageTo: age ? (age + 1) : '',
              ageFrom: age ? (age - 1) : '',
              genderIds: genderId ? [genderId] : []
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
