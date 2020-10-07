<template>
  <div class="page page_feed">

    <!-- page content -->
    <div class="page__content">

      <div class="page__body page__body_feed">

        <div class="d-row mb_6">
          <div class="heading heading_h2 mb_0">Кастинги</div>
          <div class="d-feed__counter">{{ total }}</div>
        </div>

        <!-- feed -->
        <div class="d-feed" id="d-feed_castings" data-v-sticky-container>


          <!-- sidebar -->
          <div class="sidebar d-feed__sidebar" v-sticky-sidebar="optionsStickySidebar">

            <!-- active sidebar__content class: sidebar__content_active -->
            <div class="sidebar__content" data-v-sticky-inner>

              <!-- filters -->
              <div :class="['filters', { loading }]">
                <div class="d-card">
                  <div class="section filters__section">
                    <div
                      :class="['d-input', 'd-input_search', 'd-input_search_feed', { 'd-input_search_feed_focused': searchFocused }]">
                      <svg class="d-icon d-icon_size_16 d-icon_search">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_search"/>
                      </svg>
                      <input type="text" name="name" ref="name" autocomplete="off"
                             v-validate="'max:25'"
                             v-model="fields.name"
                             data-lm-key="name"
                             :placeholder="'Поиск'"
                             @focus="_handleFocusFieldSearchTalent"
                             @blur="_handleBlurFieldSearchTalent"
                             @input="_handleInputFieldSearchCasting"
                             :class="['d-input__field', 'd-input__field_search', { 'error': (verrors.has('name')) }]">
                      <template v-if="(fields.name)">
                        <svg class="d-icon d-icon_size_16 d-icon_close d-icon_close_search fill_white" @click="_handleClickCloseSearching">
                          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-close-small"/>
                        </svg>
                      </template>
                    </div>
                  </div>
                  <template v-if="(isAuthorized === true)">
                    <div class="section filters__section">
                      <div class="d-switch w_100">
                        <label for="under-me" class="d-switch__label">Подобрать под меня</label>
                        <input id="under-me" type="checkbox" class="d-switch__mark" v-model="parameters"
                               @change="_handleInputPickParameters">
                        <label for="under-me" class="d-switch__btn"></label>
                      </div>
                    </div>
                  </template>
                  <div class="section filters__section">
                    <div class="list list_filters list_dropdown list_dropdown_active">

                      <div class="d-row align_center" @click="_handleClickToggleCollapse('categories')"
                           :style="{ cursor: 'pointer' }">
                        <div class="list__header list__header_filters list__header_dropdown">Категория</div>
                        <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['categories']) }]">
                          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                        </svg>
                        <template v-if="(!collapse['categories'] && fields.categoryIds.length)">
                          <div class="filters__status filters__status_changed"></div>
                        </template>
                      </div>

                      <collapse v-model="collapse['categories']">
                        <div class="list__body list__body_filters list__body_dropdown">
                          <div class="list__item" v-for="category in sources['categories'].slice(0, 3)"
                               :key="`board-category-${category.id}`">
                            <div class="d-checkbox">
                              <input :id="`board-category-${category.id}`" name="categoryIds"
                                     type="checkbox" class="d-checkbox__mark"
                                     data-vv-name="categoryIds"
                                     :data-vv-as="'Категория'"
                                     :value="category.id"
                                     @change="_handleChangeFieldSearchCasting"
                                     v-model="fields.categoryIds">
                              <label :for="`board-category-${category.id}`" class="d-checkbox__label">{{ category.text
                                }}</label>
                            </div>
                          </div>
                          <template v-if="(sources['categories'].length > 3)">
                            <template v-if="(!collapse['lists']['categories'])">
                              <a href="javascript:void(0)" class="d-link d-link_show-all"
                                 @click="_handleClickToggleCollapseLists('categories')">Показать все</a>
                            </template>

                            <template v-if="collapse['lists']['categories']">
                              <div class="list__item" v-for="category in sources['categories'].slice(3)"
                                   :key="`board-category-${category.id}`">
                                <div class="d-checkbox">
                                  <input :id="`board-category-${category.id}`" name="categoryIds"
                                         type="checkbox" class="d-checkbox__mark"
                                         data-vv-name="categoryIds"
                                         :data-vv-as="'Категория'"
                                         :value="category.id"
                                         @change="_handleChangeFieldSearchCasting"
                                         v-model="fields.categoryIds">
                                  <label :for="`board-category-${category.id}`" class="d-checkbox__label">{{
                                    category.text }}</label>
                                </div>
                              </div>
                              <a href="javascript:void(0)" class="d-link d-link_show-all"
                                 @click="_handleClickToggleCollapseLists('categories')">Скрыть</a>
                            </template>
                          </template>
                        </div>
                      </collapse>
                    </div>
                  </div>
                  <div class="section filters__section">
                    <div class="list list_filters list_dropdown list_dropdown_active">
                      <div class="d-row align_center" @click="_handleClickToggleCollapse('professions')"
                           :style="{ cursor: 'pointer' }">
                        <div class="list__header list__header_filters list__header_dropdown">Профессия</div>
                        <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['professions']) }]">
                          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                        </svg>
                        <template v-if="(!collapse['professions'] && fields.professionNames.length)">
                          <div class="filters__status filters__status_changed"></div>
                        </template>
                      </div>
                      <collapse v-model="collapse['professions']">
                        <div class="list__body list__body_filters list__body_dropdown">
                          <div class="list__item" v-for="profession in sources['professions'].slice(0, 3)"
                               :key="`board-profession-${profession.id}`">
                            <div class="d-checkbox">
                              <input :id="`board-profession-${profession.id}`" name="professionNames"
                                     type="checkbox" class="d-checkbox__mark"
                                     data-vv-name="professionNames"
                                     :data-vv-as="'Роль'"
                                     :value="profession.id"
                                     @change="_handleChangeFieldSearchCasting"
                                     v-model="fields.professionNames">
                              <label :for="`board-profession-${profession.id}`" class="d-checkbox__label">{{ profession.text }}</label>
                            </div>
                          </div>
                          <template v-if="(sources['professions'].length > 3)">
                            <template v-if="(!collapse['lists']['professions'])">
                              <a href="javascript:void(0)" class="d-link d-link_show-all"
                                 @click="_handleClickToggleCollapseLists('professions')">Показать все</a>
                            </template>
                            <template v-if="collapse['lists']['professions']">
                              <div class="list__item" v-for="profession in sources['professions'].slice(3)"
                                   :key="`board-profession-${profession.id}`">
                                <div class="d-checkbox">
                                  <input :id="`board-profession-${profession.id}`" name="professionNames"
                                         type="checkbox" class="d-checkbox__mark"
                                         data-vv-name="professionNames"
                                         :data-vv-as="'Роль'"
                                         :value="profession.id"
                                         @change="_handleChangeFieldSearchCasting"
                                         v-model="fields.professionNames">
                                  <label :for="`board-profession-${profession.id}`" class="d-checkbox__label">{{ profession.text }}</label>
                                </div>
                              </div>
                              <a href="javascript:void(0)" class="d-link d-link_show-all"
                                 @click="_handleClickToggleCollapseLists('professions')">Скрыть</a>
                            </template>
                          </template>
                        </div>
                      </collapse>
                    </div>
                  </div>
                  <div class="section filters__section">
                    <div class="list list_filters list_dropdown list_dropdown_active">
                      <div class="d-row align_center" @click="_handleClickToggleCollapse('genders')"
                           :style="{ cursor: 'pointer' }">
                        <div class="list__header list__header_filters list__header_dropdown">Пол</div>
                        <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['genders']) }]">
                          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                        </svg>
                        <template v-if="(!collapse['genders'] && fields.genderIds.length)">
                          <div class="filters__status filters__status_changed"></div>
                        </template>
                      </div>

                      <collapse v-model="collapse['genders']">
                        <div class="list__body list__body_filters list__body_dropdown">
                          <div class="list__item" v-for="gender in sources['genders']">
                            <div class="d-checkbox">
                              <input :id="`board-gender-${gender.id}`" name="genderIds"
                                     type="checkbox" class="d-checkbox__mark"
                                     data-vv-name="genderIds"
                                     :data-vv-as="'Пол'"
                                     :value="gender.id"
                                     @change="_handleChangeFieldSearchCasting"
                                     v-model="fields.genderIds">
                              <label :for="`board-gender-${gender.id}`" class="d-checkbox__label">{{ gender.text }}</label>
                            </div>
                          </div>
                        </div>
                      </collapse>
                    </div>
                  </div>
                  <div class="section filters__section">
                    <div class="d-row align_center" @click="_handleClickToggleCollapse('ages')"
                         :style="{ cursor: 'pointer' }">
                      <div class="list__header list__header_filters list__header_dropdown">Возраст</div>
                      <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['ages']) }]">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                      </svg>
                      <template v-if="(!collapse['ages'] && (fields.ageFrom || fields.ageTo))">
                        <div class="filters__status filters__status_changed"></div>
                      </template>
                    </div>
                    <no-ssr>
                      <collapse v-model="collapse['ages']">
                        <div class="d-row align_center mt_3">
                          <div class="d-input">
                            <input v-mask-numeric type="text" placeholder="От"
                                   id="ageFrom"
                                   name="ageFrom"
                                   data-vv-name="ageFrom"
                                   :data-vv-as="'От'"
                                   ref="ageFrom"
                                   v-model="fields.ageFrom"
                                   min="1" max="150"
                                   @change="_handleChangeFieldSearchCasting"
                                   v-validate="'decimal:3|min_value:1|max_value:150'"
                                   :class="[{ 'error': (verrors.has('ageFrom')), 'filled': (fields.ageTo && !verrors.has('ageFrom')) }, 'd-input__field']">
                          </div>
                          <div class="color_gray-4 ml_1 mr_1">-</div>
                          <div class="d-input">
                            <input v-mask-numeric type="text" placeholder="До"
                                   id="ageTo"
                                   name="ageTo"
                                   data-vv-name="ageTo"
                                   :data-vv-as="'До'"
                                   ref="ageTo"
                                   v-model="fields.ageTo"
                                   min="1" max="150"
                                   @change="_handleChangeFieldSearchCasting"
                                   v-validate="'decimal:3|min_value:1|max_value:150|minTarget:ageFrom'"
                                   :class="[{ 'error': (verrors.has('ageTo')), 'filled': (fields.ageTo && !verrors.has('ageTo')) }, 'd-input__field']">
                          </div>
                        </div>
                      </collapse>
                    </no-ssr>
                  </div>
                  <div class="section filters__section">
                    <div class="d-row align_center" @click="_handleClickToggleCollapse('geo')"
                         :style="{ cursor: 'pointer' }">
                      <div class="list__header list__header_filters list__header_dropdown">Местоположение</div>
                      <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['geo']) }]">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                      </svg>
                      <template v-if="(!collapse['geo'] && (fields.cityId || fields.countryId))">
                        <div class="filters__status filters__status_changed"></div>
                      </template>
                    </div>
                    <collapse v-model="collapse['geo']">
                      <div class="d-row align-center mt_3">
                        <div class="d-select w_100">
                          <vue-select :filterable="true" :options="sources['countries']" :reduce="option => String(option.id)"
                            :input-id="'declaration__country'"
                            :name="'country'"
                            :data-vv-name="'countryId'"
                            :data-vv-as="'Страна'"
                            :placeholder="'Не выбрана'"
                            v-model="fields.countryId"
                            @input="_handleChangeCountrySelect(...arguments, true, true, _handleChangeFieldSearchCasting)"
                            :class="[{ 'error': (verrors.has('countryId')) } ]">
                          </vue-select>
                        </div>
                      </div>
                      <div class="d-row align-center mt_3">
                        <div class="d-select w_100">
                          <vue-select :filterable="false" @search="_handleSearchCities" :options="sources['cities']" :reduce="option => String(option.id)"
                            :loading="loadingCities"
                            :input-id="'declaration__city'"
                            :name="'cityId'"
                            :data-vv-name="'cityId'"
                            :data-vv-as="'Город'"
                            :placeholder="citiesPlaceholder"
                            v-model="fields.cityId"
                            @input="_handleChangeFieldSearchCasting"
                            :disabled="(!fields.countryId )"
                            :class="[{ 'error': (verrors.has('cityId')) } ]">
                          </vue-select>
                        </div>
                      </div>
                    </collapse>
                  </div>
                  <div class="section filters__section">
                    <div class="d-row align_center" @click="_handleClickToggleCollapse('more')"
                         :style="{ cursor: 'pointer' }">
                      <div class="list__header list__header_filters list__header_dropdown">Дополнительно</div>
                      <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['more']) }]">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                      </svg>
                      <template v-if="(!collapse['more'] && hasMoreFields)">
                        <div class="filters__status filters__status_changed"></div>
                      </template>
                    </div>
                    <no-ssr>
                      <collapse v-model="collapse['more']">
                        <div class="list__body list__body_filters list__body_dropdown">
                          <div class="list__item">
                            <div class="d-checkbox">
                              <input :id="`board-isOnline`" name="isOnline"
                                     type="checkbox" class="d-checkbox__mark"
                                     true-value="1" false-value=""
                                     data-vv-name="isOnline"
                                     :data-vv-as="'Онлайн кастинг'"
                                     @change="_handleChangeFieldSearchCasting"
                                     v-model="fields.isOnline">
                              <label :for="`board-isOnline`" class="d-checkbox__label">Онлайн кастинг</label>
                            </div>
                          </div>
                        </div>
                      </collapse>
                    </no-ssr>
                  </div>
                  <template v-if="showReset">
                    <div class="section filters__section">
                      <button class="d-btn d-btn_outline w_100" @click="_handleClickClearFilter" :disabled="(loading)">
                        Сбросить фильтры
                      </button>
                    </div>
                  </template>
                </div>
              </div> <!-- end of filters -->


              <template v-if="typeFormPoll">
                <div class="d-card">
                  <div class="d-row justify_between">
                    <div class="heading heading_h5 mb_0">Помогите нам стать лучше</div>
                    <a href="javascript:void(0)" @click="_handleClickHideTypeForm">
                      <svg class="d-icon d-icon_size_16 fill_gray-3">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-close"/>
                      </svg>
                    </a>
                  </div>
                  <div class="d-row mt_2 color_gray-2 fsize_14">
                    Пройдите опрос и примите участие в тестировании новых разделов и функций
                  </div>
                  <a href="https://linkmuse.typeform.com/to/A3Rn4O" target="_blank" class="d-btn d-btn_outline mt_4 w_100">Пройти
                    опрос</a>
                </div>
              </template>

              <sidebar-navigation/>
            </div>
          </div> <!-- end of sidebar -->

          <!-- feed__body -->
          <div class="d-feed__body ml_4" v-infinite-scroll="_handleInfiniteScroll"
               infinite-scroll-disabled="infiniteDisabled" infinite-scroll-distance="900">

            <casting-card :casting="casting" v-for="casting in castings" :key="casting.id"
                          @changeState="_handleChangeState">
            </casting-card>

            <lm-loader v-if="loading" :style="{ marginTop: '15px' }"></lm-loader>

            <template v-if="(isEmpty === true)">
              <div class="d-card d-card_feed-plug">
                <svg class="d-icon d-icon_size_64 fill_main mb_5">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_search"/>
                </svg>
                <div class="heading heading_h5">Мы ничего не нашли</div>
                <div class="ta_center mb_4 color_gray-1">Попробуйте другой запрос<br>или сбросьте фильтры</div>
                <template>
                  <template v-if="showReset">
                    <button class="d-btn d-btn_primary" @click="_handleClickClearFilter">Сбросить</button>
                  </template>
                  <template v-else>
                    <button class="d-btn d-btn_primary" @click="_handleClickCreateCasting">Создать</button>
                  </template>
                </template>
              </div>
            </template>

          </div> <!-- end of feed__body -->
        </div> <!-- end of feed -->
      </div>
    </div> <!-- end of page content -->

    <template v-if="(isAuthorized === true && showOnBoardingModal === true && openSecondPage === true)">
      <lm-onboarding-boards-modal></lm-onboarding-boards-modal>
    </template>
  </div> <!-- end of page -->
</template>

<script>
  import _ from 'lodash'
  import { Collapse } from 'uiv'
  import { mapGetters, mapActions } from 'vuex'
  import { omitEmpty, getDataAttribute, HEADER_HEIGHT, has } from '@utils'

  import SeoFilterCasting from '@modules/SEO/mixins/Casting'
  import CastingCard from '@components/Board/Casting/Casting.vue'
  import { getFieldsFromRoute } from '@modules/SEO/mixins/Casting'

  import AjaxSelectCity from '@modules/Geo/mixins/AjaxSelectCity'

  import { createHelpers } from 'vuex-map-fields'

  const { mapFields } = createHelpers({
    getterType: 'board/casting/getField',
    mutationType: 'board/casting/updateField',
  })

  import { PUBLISHED, DRAFT, ARCHIVED, MODERATION } from '@modules/Board/Casting/Enums/CastingState'

  export default {
    components: { Collapse, CastingCard },
    mixins: [SeoFilterCasting, AjaxSelectCity],
    metaInfo () {
      return {
        title: this.seoTitle,
        meta: [
          { name: 'description', content: this.seoDescription },
        ]
      }
    },
    data () {
      return {
        parameters: false,
        typeFormPoll: false,
        searchFocused: false,
        openSecondPage: false,
        showOnBoardingModal: false,
        collapse: {
          geo: false,
          ages: false,
          more: false,
          genders: true,
          categories: true,
          professions: true,
          lists: {
            categories: false,
            professions: false
          }
        },
        optionsStickySidebar: {
          topSpacing: 104,
          bottomSpacing: 16
        }
      }
    },
    async asyncData ({ store, route }) {
      const { query } = route
      const initialized = store.getters['board/casting/getInitializedSources']
      const defaultFields = store.getters['board/casting/getCatalogDefaultFieldsFilter']

      let promises = []
      let fields = omitEmpty(_.merge(defaultFields, query), { omitZero: false })

      if (!initialized) await store.dispatch('board/casting/getSources')

      fields = getFieldsFromRoute(route, store.getters['board/casting/getSources'], fields)

      await store.dispatch('board/casting/clearCastings')
      await store.dispatch('board/casting/fetchCastings', { fields, offset: 0 }).then((total) => {
        if (typeof window !== 'undefined' && total < 4) {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }
      })
    },
    computed: {
      ...mapFields({
        fields: 'castings.filter',
        defaultFields: 'castings.defaultFilter'
      }),
      ...mapGetters({
        user: 'auth/getAuthUser',
        isAuthorized: 'auth/isAuthorized',
        sources: 'board/casting/getSources',
        total: 'board/casting/getCastingsTotal',
        error: 'board/casting/getCastingsError',
        offset: 'board/casting/getCastingsOffset',
        castings: 'board/casting/getCastingsData',
        loading: 'board/casting/getCastingsLoading',
        infiniteDisabled: 'board/casting/getCastingsInfiniteDisabled'
      }),
      isEmpty () {
        return ( this.loading === false && this.total === 0 )
      },
      isAdmin () {
        return (this.user && this.user.hasOwnProperty('isAdmin') && this.user['isAdmin'] === true)
      },
      showReset () {
        const fields = this._.omit(this.fields)
        const defaultFields = this._.omit(this.defaultFields)

        return (this._.isEqual(fields, defaultFields) === false)
      },
      hasMoreFields () {
        return Boolean(Number(this.fields.isOnline))
      },
      citiesPlaceholder () {
        return this.fields['countryId'] ? 'Не выбран' : 'Укажите страну'
      }
    },
    created () {
      this.typeFormPoll = !(this.$cookies.get('typeform.poll') === 'false')

      const { query } = this.$route
      this._.merge(this.fields, query)

      this.$nextTick(() => {
        if (this.fields.countryId && this.sources.cities.length === 0) {
          this._handleChangeCountrySelect(this.fields.countryId, false, true)
        }
      })
    },
    beforeDestroy () {
      this._clearFilter().then(() => {
        console.log('Cleared castings...')
      }).catch(() => {})
    },
    beforeRouteUpdate (to, from, next) {
      const { query, params } = to

      if (has(params, 'filter') || Object.keys(query).length) return next()

      let clearParameters = !(Boolean(Object.keys(query).length) || has(params, 'filter'))
      this._clearFilter(clearParameters).then(() => {
        console.log('Cleared castings...')
        this.seoGenerate()
        next()
      }).catch(() => {
        this.seoGenerate()
        next()
      })
    },
    afterRouteUpdate () {

    },
    mounted () {
      this.openSecondPage = this.$localStorage.get('openSecondPage', false, Boolean)
      this.showOnBoardingModal  = this.$localStorage.get('onboarding.boards', true, Boolean)
      if (this.openSecondPage === false) {
        this.$localStorage.set('openSecondPage', true)
      }
    },
    methods: {
      ...mapActions({
        fetchCastings: 'board/casting/fetchCastings',
        clearCastings: 'board/casting/clearCastings'
      }),
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

        this.$nextTick(() => {
          this._handleValidateFields().then(() => {
            this._handleApplyFilter()
          }).catch(() => {})
        })
      },
      _handleClickToggleCollapse (field) {
        this.collapse[field] = !this.collapse[field]
      },
      _handleClickToggleCollapseLists (field) {
        this.collapse['lists'][field] = !this.collapse['lists'][field]
      },
      _handleFocusFieldSearchTalent () {
        this.searchFocused = true
      },
      _handleBlurFieldSearchTalent () {
        this.searchFocused = false
      },
      _handleInputFieldSearchCasting: _.debounce(function(e) {
        const el = e.target
        let key = getDataAttribute(el, 'key')

        this.$validator.validate(key).then((result) => {
          if (result) {
            this._handleApplyFilter()
          }
        })
      }, 900),
      _handleClickCloseSearching () {
        this.fields.name = null

        this.$nextTick(() => {
          this._handleApplyFilter()
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
      _handleChangeFieldSearchCasting: _.debounce(function(e) {
        this._handleValidateFields().then(() => {
          this.parameters = false
          this._handleApplyFilter()
        }).catch(() => {})
      }, 900),
       _handleClickClearFilter () {
        this._clearFilter().then(() => {
          this._handleApplyFilter()
        }).catch(() => {})
      },
      _clearFilter (parameters = true) {
        return new Promise((resolve, reject) => {
          if (parameters) this.parameters = false

          try {
            this.fields = this._.clone(this.defaultFields)
            resolve && resolve()
          } catch (e) {
            reject && reject(e)
          }
        })
      },
      _handleInfiniteScroll() {
        let { fields, offset } = this
        this.fetchCastings({ fields, offset })
      },
      _handleApplyFilter () {
        let { fields } = this

        this.clearCastings().then(() => {
          // this.$scrollTo('#d-feed_castings', 500, { offset: (-20 - HEADER_HEIGHT) })
          const { query, params } = this.getSeoRouterParams(omitEmpty(fields, { omitZero: false }))

          this.$router.replace({ name: 'board.castings.index', query, params }, () => {
            this.seoGenerate()
          })
        }).catch(() => {})
      },
      _handleChangeState ({ id, key, value }) {
        this.$store.dispatch('board/casting/setFieldCastingsData', { id, key, value })
      },

      _handleClickOpenCastingResponses (id, slug) {
        this.$router.push({ name: 'board.castings.show', params: { id, slug }, query: { responses: true } })
      },
      _handleClickUnpublishedCasting (id) {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'снять',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите снять объявление с публикации?'
        }).then(() => {
          this._handleDraft(id)
        }).catch(() => {})
      },
      _handleClickArchiveCasting (id) {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'в архив',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите удалить и перенести объявление в архив?'
        }).then(() => {
          this._handleArchive(id)
        }).catch(() => {})
      },
      _handleDraft (id) {
        return new Promise((resolve, reject) => {

          this.$api.post(`api/v2/boards/castings/${id}/draft`).then((response) => {
            const { data } = response
            this.$store.dispatch('board/casting/setFieldCastingsData', { id, key: 'state', value: DRAFT })

            resolve()
          }, (error) => {
            const { response: { data, status } } = error

            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            reject()

            throw new Error('Error draft casting')
          })
        })
      },
      _handleArchive (id) {
        return new Promise((resolve, reject) => {

          this.$api.post(`api/v2/boards/castings/${id}/archive`).then((response) => {
            const { data } = response
            this.$store.dispatch('board/casting/setFieldCastingsData', { id, key: 'state', value: ARCHIVED })

            resolve()
          }, (error) => {
            const { response: { data, status } } = error

            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            reject()

            throw new Error('Error draft casting')
          })
        })
      },
      _handleClickAbuseCasting () {
        let { id } = this.actionSheet.casting
        this.$root.$emit('open-modal-abuse-create', { id, type: 'board_casting' })
      },
      _handleClickApproveCasting (id) {
        this.$api.post(`/api/admin/v1/boards/castings/${id}/approve`).then((response) => {
          let { data: { data } } = response
          this.$store.dispatch('board/casting/setFieldCastingsData', { id, key: 'state', value: PUBLISHED })
        }, (err) => {
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
        })
      },
      _handleClickCreateCasting () {
        if (this.isAuthorized === false) {
          const { href } = this.$router.resolve({ name: 'board.castings.create' })
          this.$root.$emit('open-modal-access-global', href)
        } else this.$router.push({ name: 'board.castings.create' })
      },
      _handleClickHideTypeForm () {
        this.typeFormPoll = false
        this.$cookies.set('typeform.poll', 'false')
      }
    }
  }
</script>

<style scoped>

</style>
