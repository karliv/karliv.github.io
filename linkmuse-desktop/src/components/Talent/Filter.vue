<template>
  <div class="well well-no-padding talents-list-v2-filter" v-click-outside="_handleClickOutsideFilter">
    <div class="talents-list-v2-filter-left">
      <div class="filter-keywords">
        <input type="text" name="keyword" ref="keyword"
               v-validate="'max:25'"
               v-model="filter.keyword"
               data-lm-key="keyword"
               :disabled="(!!activeFilter)"
               placeholder="Поиск"
               @input="_handleInputFieldSearchTalent"
               :class="['lm-input', 'input-search', { 'error': (verrors.has('keyword')) } ]">
      </div>
      <div :class="[ 'filter-portfolio', { 'selected': selectedPortfolio }]">
        <span class="filter-portfolio-text" @click.stop.prevent="_handleClickSelectPortfolio">
          <font class="title">С портфолио</font>
        </span>
      </div>
      <div :class="['filter-portfolio', { 'selected': selectedCertified }]">
        <span class="filter-portfolio-text" @click.stop.prevent="_handleClickSelectCertified">
          <font class="title">С верификацией</font>
        </span>
      </div>
    </div>
    <div class="talents-list-v2-filter-right">
      <div :class="[ 'all-filters', { 'active': (activeFilter === 'other') }]">
        <a href="javascript:void(0)" class="filters-link" @click.stop.prevent="_handleClickOpenFilter('other')">
          <svg class="d-icon d-icon_size_16 lm-bg-main">
            <use xlink:href="dist/web/img/icons/svg/sprite.svg#icon_filter" />
          </svg>
          Фильтры
        </a>
        <div class="all-filters-wrap" v-if="(activeFilter === 'other')">
          <div class="scroll-height">
            <div class="all-filters-wrap-line">
              <div class="title">{{ $t('talents_list.talents_list_filters_open_one.talents_list_filters_sex') }}</div>
              <div class="radio-buttons">
                <div v-for="sex in sources.sex" :key="`filter-sex-${sex.id}`">
                  <input :id="`sex-${sex.id}`" type="radio" name="sex" :value="sex.id" v-model="filter.sex">
                  <label :for="`sex-${sex.id}`">{{ sex.text }}</label>
                </div>
                <div>
                  <input id="sex-all" type="radio" name="sex" :value="null" v-model="filter.sex">
                  <label for="sex-all">{{ $t('talents_list.talents_list_filters_open_one.talents_list_filters_open_sex_any_radiobutton') }}</label>
                </div>
              </div>
            </div>
            <div class="all-filters-wrap-line">
              <div class="columns-2 start">
              <div style="max-width: 250px">
                <div class="title">{{ $t('talents_list.talents_list_filters_open_one.talents_list_filters_age_label') }}</div>
                <div class="all-filters-wrap-line-wight">
                  <input v-mask-numeric type="number"
                     inputmode="numeric" pattern="[0-9]*"
                     ref="age_from"
                     id="age_from"
                     name="age_from"
                     v-model="filter.age_from"
                     min="1" max="150"
                     v-validate="'decimal:3|min_value:1|max_value:150'"
                     :placeholder="$t('talents_list.talents_list_filters_open_one.talents_list_filters_height_from_placeholder')"
                     :class="[{ 'error': (verrors.has('age_from')) }]">
                  <div class="separator-wight"></div>
                  <input v-mask-numeric type="number"
                     inputmode="numeric" pattern="[0-9]*"
                     ref="age_to"
                     id="age_to"
                     name="age_to"
                     v-model="filter.age_to"
                     min="1" max="150"
                     v-validate="'decimal:3|min_value:1|max_value:150|minTarget:age_from'"
                     :placeholder="$t('talents_list.talents_list_filters_open_one.talents_list_filters_height_to_placeholder')"
                     :class="[{ 'error': (verrors.has('age_to')) }]">
                </div>
              </div>
              <div style="max-width: 250px">
                <div class="title">{{ $t('talents_list.talents_list_filters_open_one.talents_list_filters_height_label') }}</div>
                <div class="all-filters-wrap-line-wight">
                  <input v-mask-numeric type="number"
                         inputmode="numeric" pattern="[0-9]*"
                         id="heightMore"
                         key="heightMore"
                         name="heightMore"
                         ref="heightMore"
                         v-model="filter['body-parameters']['heightMore']"
                         min="1" max="300"
                         v-validate="'decimal:3|min_value:1|max_value:300'"
                         :placeholder="$t('talents_list.talents_list_filters_open_one.talents_list_filters_height_from_placeholder')"
                         :class="[{ 'error': (verrors.has('heightMore')) }]">
                  <div class="separator-wight"></div>
                  <input v-mask-numeric type="number"
                         inputmode="numeric" pattern="[0-9]*"
                         id="heightLess"
                         key="heightLess"
                         name="heightLess"
                         ref="heightLess"
                         v-model="filter['body-parameters']['heightLess']"
                         min="1" max="300"
                         v-validate="'decimal:3|min_value:1|max_value:300|minTarget:heightMore'"
                         :placeholder="$t('talents_list.talents_list_filters_open_one.talents_list_filters_height_to_placeholder')"
                         :class="[{ 'error': (verrors.has('heightLess')) }]">
                </div>
              </div>
              </div>
            </div>
            <div class="all-filters-wrap-line">
              <div class="title">{{ $t('talents_list.talents_list_filters_open_two.talents_list_body_type_label') }}</div>
              <div class="checkbox-wrap">
                <div v-for="body in sources['body-type']" :key="`filter-body-type-${body.id}`">
                  <input type="checkbox" :id="`body-type-${body.id}`" :value="body.id" name="body" v-model="filter['body-parameters']['body-type']">
                  <label :for="`body-type-${body.id}`">{{ body.text }}</label>
                </div>
              </div>
            </div>
            <div class="all-filters-wrap-line">
              <div class="title">{{ $t('talents_list.talents_list_filters_open_two.talents_list_ethnicity_label') }}</div>
              <div class="checkbox-wrap">
                <div v-for="ethnicity in sources['ethnicity']" :key="`filter-ethnicity-${ethnicity.id}`">
                  <input type="checkbox" :id="`ethnicity-${ethnicity.id}`" :value="ethnicity.id" name="ethnicity" v-model="filter['body-parameters']['ethnicity']">
                  <label :for="`ethnicity-${ethnicity.id}`">{{ ethnicity.text }}</label>
                </div>
              </div>
            </div>
            <div class="all-filters-wrap-line">
              <div class="title">{{ $t('talents_list.talents_list_filters_open_two.talents_list_eye_color_label') }}</div>
              <div class="checkbox-wrap">
                <div v-for="eye in sources['eye-color']" :key="`filter-eye-color-${eye.id}`">
                  <input type="checkbox" :id="`eye-color-${eye.id}`" :value="eye.id" name="eye" v-model="filter['body-parameters']['eye-color']">
                  <label :for="`eye-color-${eye.id}`">{{ eye.text }}</label>
                </div>
              </div>
            </div>
            <div class="all-filters-wrap-line">
              <div class="columns-2">
                <div>
                  <div class="title">{{ $t('talents_list.talents_list_filters_open_three.talents_list_hair_color_label') }}</div>
                  <div class="checkbox-wrap">
                    <div v-for="hair in sources['hair-color']" :key="`filter-hair-color-${hair.id}`">
                      <input type="checkbox" :id="`hair-color-${hair.id}`" :value="hair.id" name="hair" v-model="filter['body-parameters']['hair-color']">
                      <label :for="`hair-color-${hair.id}`">{{ hair.text }}</label>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="title">{{ $t('talents_list.talents_list_filters_open_three.talents_list_hair_length') }}</div>
                  <div class="checkbox-wrap">
                    <div v-for="hair in sources['hair-length']" :key="`filter-hair-length-${hair.id}`">
                      <input type="checkbox" :id="`hair-length-${hair.id}`" :value="hair.id" name="hair" v-model="filter['body-parameters']['hair-length']">
                      <label :for="`hair-length-${hair.id}`">{{ hair.text }}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="all-filters-wrap-line parameters">
              <div class="title">{{ $t('talents_list.talents_list_filters_open_three.talents_list_parameters_label') }}</div>
              <div class="row">
                <div class="form-group col-xs-2">
                  <label>{{ $t('talents_list.talents_list_filters_open_three.talents_list_parameters_breast_label') }}</label>
                  <div class="all-filters-wrap-line-wight">
                    <input v-mask-numeric type="number"
                       inputmode="numeric" pattern="[0-9]*"
                       id="volumeOfBreastMore"
                       key="volumeOfBreastMore"
                       name="volumeOfBreastMore"
                       ref="volumeOfBreastMore"
                       v-model="filter['body-parameters']['volumeOfBreastMore']"
                       min="1" max="150"
                       v-validate="'decimal:3|min_value:25|max_value:150'"
                       :placeholder="$t('talents_list.talents_list_filters_open_three.talents_list_parameters_breast_from_placeholder')"
                       :class="[{ 'error': (verrors.has('volumeOfBreastMore')) }]">
                    <div class="separator-wight"></div>
                    <input v-mask-numeric type="number"
                       inputmode="numeric" pattern="[0-9]*"
                       id="volumeOfBreastLess"
                       key="volumeOfBreastLess"
                       name="volumeOfBreastLess"
                       ref="volumeOfBreastLess"
                       v-model="filter['body-parameters']['volumeOfBreastLess']"
                       min="1" max="150"
                       v-validate="'decimal:3|min_value:25|max_value:150|minTarget:volumeOfBreastMore'"
                       :placeholder="$t('talents_list.talents_list_filters_open_three.talents_list_parameters_breast_to_placeholder')"
                       :class="[{ 'error': (verrors.has('volumeOfBreastLess')) }, 'lm-input']">
                  </div>
                </div>
                <div class="form-group col-xs-2">
                  <label>{{ $t('talents_list.talents_list_filters_open_three.talents_list_parameters_waist_label') }}</label>
                  <div class="all-filters-wrap-line-wight">
                    <input v-mask-numeric type="number"
                       inputmode="numeric" pattern="[0-9]*"
                       id="waistMore"
                       key="waistMore"
                       name="waistMore"
                       ref="waistMore"
                       v-model="filter['body-parameters']['waistMore']"
                       min="1" max="150"
                       v-validate="'decimal:3|min_value:25|max_value:150'"
                       :placeholder="$t('talents_list.talents_list_filters_open_three.talents_list_parameters_waist_from_placeholder')"
                       :class="[{ 'error': (verrors.has('waistMore')) }]">
                    <div class="separator-wight"></div>
                    <input v-mask-numeric type="number"
                       inputmode="numeric" pattern="[0-9]*"
                       id="waistLess"
                       key="waistLess"
                       name="waistLess"
                       ref="waistLess"
                       v-model="filter['body-parameters']['waistLess']"
                       min="1" max="150"
                       v-validate="'decimal:3|min_value:25|max_value:150|minTarget:waistMore'"
                       :placeholder="$t('talents_list.talents_list_filters_open_three.talents_list_parameters_waist_to_placeholder')"
                       :class="[{ 'error': (verrors.has('waistLess')) }]">
                  </div>
                </div>
                <div class="form-group col-xs-2">
                  <label>{{ $t('talents_list.talents_list_filters_open_three.talents_list_parameters_hips_label') }}</label>
                  <div class="all-filters-wrap-line-wight">
                    <input v-mask-numeric type="number"
                       inputmode="numeric" pattern="[0-9]*"
                       id="hipsMore"
                       key="hipsMore"
                       name="hipsMore"
                       ref="hipsMore"
                       v-model="filter['body-parameters']['hipsMore']"
                       min="1" max="150"
                       v-validate="'decimal:3|min_value:25|max_value:150'"
                       :placeholder="$t('talents_list.talents_list_filters_open_three.talents_list_parameters_hips_from_placeholder')"
                       :class="[{ 'error': (verrors.has('hipsMore')) }]">
                    <div class="separator-wight"></div>
                    <input v-mask-numeric type="number"
                       inputmode="numeric" pattern="[0-9]*"
                       id="hipsLess"
                       key="hipsLess"
                       name="hipsLess"
                       ref="hipsLess"
                       v-model="filter['body-parameters']['hipsLess']"
                       min="1" max="150"
                       v-validate="'decimal:3|min_value:25|max_value:150|minTarget:hipsMore'"
                           :placeholder="$t('talents_list.talents_list_filters_open_three.talents_list_parameters_hips_to_placeholder')"
                       :class="[{ 'error': (verrors.has('hipsLess')) }]">
                  </div>
                </div>
                <div class="form-group col-xs-2">
                  <label>{{ $t('talents_list.talents_list_filters_open_three.talents_list_parameters_shoes_label') }}</label>
                  <div class="all-filters-wrap-line-wight">
                    <input v-mask-numeric type="number"
                       inputmode="numeric" pattern="[0-9]*"
                       id="shoeSizeMore"
                       key="shoeSizeMore"
                       name="shoeSizeMore"
                       ref="shoeSizeMore"
                       v-model="filter['body-parameters']['shoeSizeMore']"
                       min="1" max="150"
                       v-validate="'decimal:3|min_value:25|max_value:150'"
                       :placeholder="$t('talents_list.talents_list_filters_open_three.talents_list_parameters_shoes_from_placeholder')"
                       :class="[{ 'error': (verrors.has('shoeSizeMore')) }]">
                    <div class="separator-wight"></div>
                    <input v-mask-numeric type="number"
                       inputmode="numeric" pattern="[0-9]*"
                       id="shoeSizeLess"
                       key="shoeSizeLess"
                       name="shoeSizeLess"
                       ref="shoeSizeLess"
                       v-model="filter['body-parameters']['shoeSizeLess']"
                       min="1" max="150"
                       v-validate="'decimal:3|min_value:25|max_value:150|minTarget:shoeSizeMore'"
                       :placeholder="$t('talents_list.talents_list_filters_open_three.talents_list_parameters_to_placeholder')"
                       :class="[{ 'error': (verrors.has('shoeSizeLess')) }]">
                  </div>
                </div>
                <div class="form-group col-xs-2">
                  <label for="vat">{{ $t('talents_list.talents_list_filters_open_three.talents_list_parameters_clothes_label') }}</label>
                  <div class="lm-dropdown-wrap">
                    <v-select :options="sources['clothing-size']"
                      v-model="filter['body-parameters']['clothing-size']"
                      :placeholder="$t('talents_list.talents_list_filters_open_three.talents_list_parameters_clothes_placeholder')">
                    </v-select>
                  </div>
                </div>
              </div>
            </div>
            <div class="all-filters-wrap-line column-1">
              <div class="title">{{ $t('talents_list.talents_list_filters_open_three.talents_list_additional_info_label') }}</div>
              <div class="checkbox-wrap ">
                <div class="column-1">
                  <div>
                    <input type="checkbox" id="tattoo" v-model="filter['body-parameters']['tattoo']">
                    <label for="tattoo">{{ $t('talents_list.talents_list_filters_open_three.talents_list_tattoo_checkbox') }}</label>
                  </div>
                  <div>
                    <input type="checkbox" id="bodyPiercing" v-model="filter['body-parameters']['body-piercing']">
                    <label for="bodyPiercing">{{ $t('talents_list.talents_list_filters_open_three.talents_list_piercing') }}</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="all-filters-wrap-line">
              <div class="title">{{ $t('talents_list.talents_list_filters_open_four.talents_list_country_label') }}</div>
              <div class="row">
                <div class="form-group col-xs-3">
                  <div class="lm-dropdown-wrap lm-dropdown-wrap--n">
                    <v-select v-model="filter['country']" position="top"
                      input-id="country"
                      input-name="country"
                      :options="sources['countries']" :placeholder="'Страна'"
                      :filter="true"
                      @input="_handleInputCountrySelect">
                    </v-select>
                  </div>
                </div>
                <div class="form-group col-xs-3">
                  <div class="lm-dropdown-wrap lm-dropdown-wrap--n">
                    <v-select v-model="filter['city']" position="top"
                      input-id="city"
                      input-name="city"
                      :disabled="(sources['cities'].length === 0)"
                      :options="sources['cities']"
                      :placeholder="(sources['cities'].length === 0) ? 'Сначала выберите страну' : 'Все города'"
                      :filter="true">
                    </v-select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="all-filters-actions">
            <a href="javascript:void(0)" class="reset" @click="_handleClickResetFilter">Сбросить все фильтры</a>
            <a href="javascript:void(0)" class="button blue approve" @click="_handleClickApplyFilter">Найти талантов</a>
          </div>
        </div>
      </div>
      <span class="border-section">|</span>
      <div :class="[ 'filter-role', { 'active': (activeFilter === 'professions'), 'selected': selectedProfessions }]">
        <span class="filter-role-text filters-link" @click="_handleClickOpenFilter('professions')">
          <svg class="d-icon d-icon_size_16 lm-bg-main">
            <use xlink:href="dist/web/img/icons/svg/sprite.svg#navigation_lm-chevron-left" />
          </svg>
          Сортировать
        </span>
        <template v-if="activeFilter === 'professions'">
          <div class="filter-role-popup">
            <div class="title">Тип профессии</div>
            <div class="checkbox-buttons">
              <div v-for="profession in sources['type']">
                <input type="checkbox" name="profession" :id="`filter-profession-${profession.id}`" :value="profession.id" v-model="filter.professions">
                <label :for="`filter-profession-${profession.id}`">{{ profession['text'] }}</label>
              </div>
            </div>
            <div class="filter-role-popup-action">
              <a href="javascript:void(0)" :class="['reset', { disabled: (!selectedProfessions) }]" @click.stop.prevent="_handleClickResetFilterFiled('professions')">Сбросить</a>
              <a href="javascript:void(0)" class="approve" @click.stop.prevent="_handleClickSetFilterFiled">Применить</a>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { getDataAttribute } from '@utils'
  import { mapGetters, mapActions } from 'vuex'
  import { createHelpers } from 'vuex-map-fields'

  const { mapFields } = createHelpers({
    getterType: 'talent/getField',
    mutationType: 'talent/updateField',
  })

  export default {
    data () {
      return {
        activeFilter: null
      }
    },
    computed: {
      ...mapFields(['catalog.filter']),
      ...mapFields(['catalog.sources']),
      ...mapGetters({
        role: 'auth/getRole',
        user: 'auth/getAuthUser',
        sources: 'talent/getSources'
      }),
      selectedProfessions () {
        return (this.filter.professions && this.filter.professions.length)
      },
      selectedPortfolio () {
        return (this.filter['with_portfolio'] && Number(this.filter['with_portfolio']) === 1)
      },
      selectedCertified () {
        return (this.filter['with_certified'] && Number(this.filter['with_certified']) === 1)
      }
    },
    methods: {
      _handleInputFieldSearchTalent: _.debounce(function(e) {
        const el = e.target
        let key = getDataAttribute(el, 'key')

        this.$validator.validate(key).then((result) => {
          if (result) {
            // Hotfix by Alina Kuzmina
            if (this.filter['keyword']) this.filter['with_portfolio'] = 0
            this.$emit('apply')
          }
        })
      }, 900),
      _handleClickOutsideFilter () {
        this._handleHideFilter()
      },
      _handleHideFilter () {
        return new Promise((resolve, reject) => {
          try {
            this.activeFilter = null
            this.$emit('hide')
            resolve && resolve()
          } catch (e) {
            reject && reject(e)
          }
        })
      },
      _handleClickOpenFilter (value) {
        if (this.activeFilter === value) {
          this._handleHideFilter()
        } else {
          this.$emit('show')
          this.activeFilter = value
        }
      },
      _handleClickApplyFilter () {
        this._handleValidateFields().then(() => {
          this.$emit('apply')
          this._handleHideFilter()
        }).catch(() => {})
      },
      _handleValidateFields () {
        return new Promise((resolve, reject) => {
          this.$validator.validateAll().then(result => {
            if (result) {
              resolve(result)
            } else reject()
          })
        })
      },
      _handleClickSetFilterFiled () {
        this._handleClickApplyFilter()
      },
      _handleClickSelectPortfolio () {
        this.filter['with_portfolio'] = (Number(this.filter['with_portfolio']) ? 0 : 1)
        this._handleClickApplyFilter()
      },
      _handleClickSelectCertified () {
        this.filter['with_certified'] = (Number(this.filter['with_certified']) ? 0 : 1)
        this._handleClickApplyFilter()
      },
      _handleClickResetFilterFiled (fieldKey) {
        let field = this._.clone(this._.get(this.filter, fieldKey), true)
        if (Array.isArray(field)) {
          this._.set(this.filter, fieldKey, [])
        } else if (typeof field === 'object') {
          this._.set(this.filter, fieldKey, {})
        } else this._.set(this.filter, fieldKey, null)

        this._handleClickApplyFilter()
      },
      _handleClickResetFilter () {
        this._clearFilter(this.filter)
        this._handleClickApplyFilter()
      },
      _clearFilter (filter) {
        if (!filter) return
        Object.keys(filter).forEach(k => {
          if (Array.isArray(filter[k])) {
            filter[k] = []
          } else if (typeof filter[k] === 'object') {
            this._clearFilter(filter[k])
          } else filter[k] = null
        })
      },
      _handleInputCountrySelect (country_id) {
        this.$api.get('api/v1/geo/cities', { country_id }).then((response) => {
          this.filter.city = null

          const { data } = response
          this.sources.cities = data
        }, (error) => {

          const { response: { data }, response: { status }} = error
          throw new Error('Error loading talents cities')
        })
      },
      _handleInputSortingSelect () {
        this._handleClickApplyFilter()
      }
    }
  }
</script>

<style scoped>

</style>
