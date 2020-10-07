<template>
  <div class="modal modal_filters modal_active" v-show="value">
    <div class="modal__content modal__content_filters">
      <div class="form form_filters">

        <div class="row row_justify_between">
          <div class="heading_h4">{{ $t('unified-profile.filters.filters') }}</div>
          <template v-if="showReset">
            <button class="btn btn_reset" @click.stop.prevent="_handleClickClearFilter">Сбросить</button>
          </template>
        </div>

        <div class="form__section form__section_filters bt_none">
          <div class="form__group form__group_declaration">
            <label for="form__select_declaration_groups" class="input__label">
              {{ $t('unified-profile.filters.professional-area') }}
            </label>

            <lm-select :class="['lm-m-filter-line', { 'filled': (!!fields.groupId) }]"
                       v-model="groupId"
                       :input-required="false"
                       input-id="form__select_declaration_groups"
                       input-name="groups"
                       data-vv-name="groups"
                       :data-vv-as="$t('unified-profile.filters.filters')"
                       :placeholder="$t('unified-profile.filters.choose-professional-area')"
                       label=""
                       :multiple="false"
                       @change="_handleChangeGroupSelect"
                       :options="groups">
            </lm-select>
          </div>

          <div class="form__group form__group_declaration">
            <label for="form__select_declaration_professions" class="input__label">
              {{ $t('unified-profile.filters.profession') }}
            </label>

            <lm-select :class="['lm-m-filter-line', { 'filled': (!!fields.professionName) }]"
                       v-model="fields['professionName']"
                       :input-required="false"
                       input-id="form__select_declaration_professions"
                       input-name="professions"
                       data-vv-name="professions"
                       :data-vv-as="$t('unified-profile.filters.profession')"
                       :placeholder="$t('unified-profile.filters.choose-profession')"
                       label=""
                       :disabled="(!groupId )"
                       :multiple="false"
                       :options="professions">
            </lm-select>
          </div>
        </div>

        <div class="form__section form__section_filters">
          <div class="form__group form__group_declaration">
            <label class="label input__label">{{ $t('unified-profile.filters.gender') }}</label>
            <div class="form__row form__row_declaration">

              <div class="form__column form__column_declaration" v-for="gender in sources['genders']">
                <input :id="`form__checkbox_declaration_gender_${gender.id}`" type="checkbox"
                       name="gender" :value="gender.id" v-model="fields['genderIds']"
                       :data-vv-as="$t('unified-profile.filters.gender')"
                       class="form__checkbox form__checkbox_declaration form__checkbox_declaration_gender">
                <label class="checkbox__label_declaration checkbox__label_declaration_gender" :for="`form__checkbox_declaration_gender_${gender.id}`">{{ gender.text }}</label>
              </div>

            </div>
          </div>
          <div class="form__group form__group_declaration">
            <div class="row row_justify_between">
              <div class="column mr_4">
                <div class="input">
                  <label for="ageMin" class="input__label">{{ $t('unified-profile.filters.age') }}</label>
                  <input v-mask-numeric type="number"
                         inputmode="numeric" pattern="[0-9]*"
                         id="ageMin"
                         name="ageMin"
                         data-vv-name="ageMin"
                         :data-vv-as="$t('unified-profile.filters.age')"
                         :placeholder="$t('unified-profile.filters.from')"
                         ref="ageMin"
                         v-model="fields.ageMin"
                         min="1" max="150"
                         v-validate="'decimal:3|min_value:1|max_value:150'"
                         :class="[{ 'error': (verrors.has('ageMin')), 'filled': (fields.ageTo && !verrors.has('ageMin')) }, 'input__field', 'input__field_filters']">
                </div>
              </div>
              <div class="column">
                <div class="input">
                  <label for="ageMax" class="input__label">&nbsp;</label>
                  <input v-mask-numeric type="number"
                         inputmode="numeric" pattern="[0-9]*"
                         id="ageMax"
                         name="ageMax"
                         data-vv-name="ageMax"
                         :data-vv-as="$t('unified-profile.filters.to')"
                         :placeholder="$t('unified-profile.filters.to')"
                         ref="ageMax"
                         v-model="fields.ageMax"
                         min="1" max="150"
                         v-validate="'decimal:3|min_value:1|max_value:150|minTarget:ageMax'"
                         :class="[{ 'error': (verrors.has('ageMax')), 'filled': (fields.ageMax && !verrors.has('ageMax')) }, 'input__field', 'input__field_filters']">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="form__section form__section_filters">
          <div class="form__group form__group_declaration">
            <label for="form__select_declaration_country" class="input__label">
              {{ $t('unified-profile.filters.country') }}
            </label>
            <lm-select :class="['lm-m-filter-line', { 'filled': (fields.countryId) }]"
                       v-model="fields.countryId"
                       :input-required="false"
                       input-id="form__select_declaration_country"
                       input-name="countryId"
                       data-vv-name="countryId"
                       :data-vv-as="$t('unified-profile.filters.country')"
                       :placeholder="$t('unified-profile.filters.all-countries')"
                       label=""
                       :multiple="false"
                       @input="_handleChangeCountrySelect(...arguments, true, true)"
                       :options="sources['countries']">
            </lm-select>
          </div>
          <div class="form__group form__group_declaration">
            <label for="form__select_declaration_city" class="input__label">
              {{ $t('unified-profile.filters.city') }}
            </label>
            <lm-select :class="['lm-m-filter-line', { 'filled': (fields.cityId) }]"
                       v-model="fields.cityId"
                       :input-required="false"
                       input-id="form__select_declaration_city"
                       input-name="cityId"
                       data-vv-name="cityId"
                       :data-vv-as="$t('unified-profile.filters.city')"
                       :placeholder="$t('unified-profile.filters.all-cities')"
                       label=""
                       :multiple="false"
                       :disabled="(!fields.countryId )"
                       :options="sources['cities']">
            </lm-select>
          </div>
        </div>

        <div class="form__controls form__controls_filters">
          <div class="row row_justify_between">
            <button class="btn btn_secondary" @click.stop.prevent="_handleClickHideFilter">{{ $t('unified-profile.filters.back') }}</button>
            <button class="btn btn_primary" @click.stop.prevent="_handleClickApplyFilter">{{ $t('unified-profile.filters.set') }}</button>
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
    getterType: 'user/getField',
    mutationType: 'user/updateField'
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
        groupId: null
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
        fields: 'users.filter',
        defaultFields: 'users.defaultFilter'
      }),
      ...mapGetters({
        sources: 'user/profession/getSources'
      }),
      showReset () {
        const fields = this._.omit(this.fields, ['query'])
        const defaultFields = this._.omit(this.defaultFields, ['query'])

        return (this._.isEqual(fields, defaultFields) === false)
      },
      groups () {
        return this.sources.professions.map(g => { return { id: g['name'], text: g['text'] } })
      },
      professions () {
        if (this.groupId) {
          let index = this._.findIndex(this.sources.professions, (g) => g.name === this.groupId)
          if (index > -1) {
            return this.sources.professions[index]['professions'].map(g => { return { id: g['data']['name'], text: g['text'] } })
          } else return []
        } else return []
      }
    },
    mounted () {
      const { params } = this.$route
      let { profession: professionName } = params

      if (professionName) {
        const { professions } = this.sources
        let indexOfProfession = _.findIndex(professions, _.flow(
          _.property('professions'),
          _.partialRight(_.some, { data: { name: professionName }})
        ))

        if (indexOfProfession > -1) {
          this.groupId =  this.sources['professions'][indexOfProfession]['name']
        }
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
      _clearFilter() {
        return new Promise((resolve, reject) => {
          try {
            this.fields = this._.clone(this.defaultFields)

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
      _handleChangeGroupSelect () {
        this.fields.professionName = null
      }
    }
  }
</script>

<style scoped>

</style>
