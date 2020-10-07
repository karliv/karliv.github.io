<template>
  <div class="page page_feed users-list">
    <!-- page content -->
    <div class="page__content">

      <!-- page__body -->
      <div class="page__body page__body_feed">
        <div class="d-row mb_6">
          <div class="heading heading_h2 mb_0">{{ $t('unified-profile.list-of-professionals.professionals') }}</div>
          <div class="d-feed__counter">{{ total }}</div>
        </div>

        <!-- feed -->
        <div class="d-feed" id="d-feed_professions" data-v-sticky-container>
          <!-- sidebar -->
          <div class="sidebar d-feed__sidebar" v-sticky-sidebar="optionsStickySidebar">
            <div class="sidebar__content" data-v-sticky-inner>
              <!-- filters -->
              <div :class="['filters', { loading }]">
                <div class="d-card">
                  <div class="section filters__section">
                    <div :class="['d-input', 'd-input_search', 'd-input_search_feed', { 'd-input_search_feed_focused': searchFocused }]">
                      <svg class="d-icon d-icon_size_16 d-icon_search">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_search"/>
                      </svg>
                      <input type="text" name="query" ref="query" autocomplete="off"
                             v-validate="'max:50'"
                             v-model="fields.query"
                             data-lm-key="query"
                             :placeholder="'Поиск по имени, фамилии'"
                             @focus="_handleFocusFieldSearchUser"
                             @blur="_handleBlurFieldSearchUser"
                             @input="_handleInputFieldSearchUser"
                             :class="['d-input__field', 'd-input__field_search', { 'error': (verrors.has('query')) }]">
                      <template v-if="(fields.query)">
                        <svg class="d-icon d-icon_size_16 d-icon_close d-icon_close_search fill_white" @click="_handleClickCloseSearching">
                          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-close-small"/>
                        </svg>
                      </template>
                    </div>
                  </div>
                  <div class="section filters__section">
                    <div class="list list_filters list_dropdown list_dropdown_radio list_dropdown_active">
                      <div class="d-row align_center" @click="_handleClickToggleCollapse('professions')" :style="{ cursor: 'pointer' }">
                        <div class="list__header list__header_filters list__header_dropdown">Профессия</div>
                        <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['professions']) }]">
                          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                        </svg>
                        <template v-if="(!collapse['professions'] && fields.professionName)">
                          <div class="filters__status filters__status_changed"></div>
                        </template>
                      </div>

                      <collapse v-model="collapse['professions']">
                        <div class="mt_3" v-for="group in sources['professions'].slice(0, 3)">
                          <div class="d-row align_center" @click="_handleClickToggleCollapse(`professions.${group.name}`)" :style="{ cursor: 'pointer' }">
                            <div class="mr_1">{{ group.text }}</div>
                            <svg :class="['d-icon', 'd-icon_size_16', { rotate_180: (collapse[`professions.${group.name}`]) }]">
                              <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-chevron-bottom"></use>
                            </svg>
                          </div>

                          <collapse v-model="collapse[`professions.${group.name}`]">
                            <ul class="lm-radio-buttons mt_3" v-for="profession in group.professions">
                              <li>
                                <input name="profession" type="radio"
                                       :id="`profession-${profession.data.name}`"
                                       :value="profession.data.name"
                                       :key="`profession-${profession.data.name}`"
                                       @change="_handleChangeFieldSearchProfession(profession.data.name)">
                                <label :for="`profession-${profession.data.name}`">{{ profession.text }}</label>
                              </li>
                            </ul>
                          </collapse>
                        </div>

                        <template v-if="(sources['professions'].length > 3)">
                          <template v-if="(!collapse['lists']['professions'])">
                            <a href="javascript:void(0)" class="d-row d-link d-link_show-all mt_3" @click="_handleClickToggleCollapseLists('professions')">Показать все</a>
                          </template>

                          <template v-if="collapse['lists']['professions']">
                            <div class="mt_3" v-for="group in sources['professions'].slice(3)">
                              <div class="d-row align_center" @click="_handleClickToggleCollapse(`professions.${group.name}`)" :style="{ cursor: 'pointer' }">
                                <div class="mr_1">{{ group.text }}</div>
                                <svg :class="['d-icon', 'd-icon_size_16', { rotate_180: (collapse[`professions.${group.name}`]) }]">
                                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-chevron-bottom"></use>
                                </svg>
                              </div>
                              <collapse v-model="collapse[`professions.${group.name}`]">
                                <ul class="lm-radio-buttons mt_3" v-for="profession in group.professions">
                                  <li>
                                    <input name="profession" type="radio"
                                           :id="`profession-${profession.data.name}`"
                                           :value="profession.data.name"
                                           :key="`profession-${profession.data.name}`"
                                           @change="_handleChangeFieldSearchProfession(profession.data.name)">
                                    <label :for="`profession-${profession.data.name}`">{{ profession.text }}</label>
                                  </li>
                                </ul>
                              </collapse>
                            </div>
                            <a href="javascript:void(0)" class="d-row d-link d-link_show-all mt_3" @click="_handleClickToggleCollapseLists('professions')">{{ $t('unified-profile.list-of-professionals.hide') }}</a>
                          </template>
                        </template>

                      </collapse>
                    </div>
                  </div>
                  <div class="section filters__section">
                    <div class="list list_filters list_dropdown list_dropdown_active">
                      <div class="d-row align_center" @click="_handleClickToggleCollapse('genders')" :style="{ cursor: 'pointer' }">
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
                              <input :id="`profession-gender-${gender.id}`" name="genderIds"
                                     type="checkbox" class="d-checkbox__mark"
                                     data-vv-name="genderIds"
                                     :data-vv-as="'Пол'"
                                     :value="gender.id"
                                     @change="_handleChangeFieldSearchUser"
                                     v-model="fields.genderIds">
                              <label :for="`profession-gender-${gender.id}`" class="d-checkbox__label">{{ gender.text }}</label>
                            </div>
                          </div>
                        </div>
                      </collapse>
                    </div>
                  </div>
                  <div class="section filters__section">
                    <div class="d-row align_center" @click="_handleClickToggleCollapse('ages')" :style="{ cursor: 'pointer' }">
                      <div class="list__header list__header_filters list__header_dropdown">{{ $t('unified-profile.professionals.age') }}</div>
                      <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['ages']) }]">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                      </svg>
                      <template v-if="(!collapse['ages'] && (fields.ageFrom || fields.ageTo))">
                        <div class="filters__status filters__status_changed"></div>
                      </template>
                    </div>

                    <collapse v-model="collapse['ages']">
                      <div class="d-row align_center mt_3">
                        <div class="d-input">
                          <input v-mask-numeric type="text" :placeholder="$t('unified-profile.professionals.from')"
                                 id="ageMin"
                                 name="ageMin"
                                 data-vv-name="ageMin"
                                 :data-vv-as="$t('unified-profile.professionals.from')"
                                 ref="ageMin"
                                 v-model="fields.ageMin"
                                 min="1" max="150"
                                 @input="_handleChangeFieldSearchUser"
                                 v-validate="'decimal:3|min_value:1|max_value:150'"
                                 :class="[{ 'error': (verrors.has('ageMin')), 'filled': (fields.ageTo && !verrors.has('ageMin')) }, 'd-input__field']">
                        </div>
                        <div class="color_gray-4 ml_1 mr_1">-</div>
                        <div class="d-input">
                          <input v-mask-numeric type="text" :placeholder="$t('unified-profile.professionals.to')"
                                 id="ageMax"
                                 name="ageMax"
                                 data-vv-name="ageMax"
                                 :data-vv-as="$t('unified-profile.professionals.to')"
                                 ref="ageMax"
                                 v-model="fields.ageMax"
                                 min="1" max="150"
                                 @input="_handleChangeFieldSearchUser"
                                 v-validate="'decimal:3|min_value:1|max_value:150|minTarget:ageMin'"
                                 :class="[{ 'error': (verrors.has('ageMax')), 'filled': (fields.ageMax && !verrors.has('ageMax')) }, 'd-input__field']">
                        </div>
                      </div>
                    </collapse>
                  </div>
                  <div class="section filters__section">
                    <div class="d-row align_center" @click="_handleClickToggleCollapse('geo')" :style="{ cursor: 'pointer' }">
                      <div class="list__header list__header_filters list__header_dropdown">{{ $t('unified-profile.professionals.location') }}</div>
                      <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['geo']) }]">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                      </svg>
                      <template v-if="(!collapse['geo'] && (fields.cityId || fields.countryId))">
                        <div class="filters__status filters__status_changed"></div>
                      </template>
                    </div>
                    <collapse v-model="collapse['geo']">
                      <div class="d-row align-center mt_3">
                        <vue-select :filterable="true" :options="sources['countries']" :reduce="option => String(option.id)"
                                    :input-id="'declaration__country'"
                                    :name="'country'"
                                    :data-vv-name="'countryId'"
                                    :data-vv-as="$t('unified-profile.unified-profile-settings.country')"
                                    :placeholder="$t('unified-profile.professionals.not-chosen')"
                                    v-model="fields.countryId"
                                    @input="_handleChangeCountrySelect(...arguments, true, true, _handleChangeFieldSearchProfession)"
                                    :class="[{ 'error': (verrors.has('countryId')) }, 'w_100' ]">
                        </vue-select>
                      </div>
                      <div class="d-row align-center mt_3">
                        <vue-select :filterable="false" @search="_handleSearchCities" :options="sources['cities']" :reduce="option => String(option.id)"
                                    :loading="loadingCities"
                                    :input-id="'declaration__city'"
                                    :name="'cityId'"
                                    :data-vv-name="'cityId'"
                                    :data-vv-as="$t('unified-profile.unified-profile-settings.city')"
                                    :placeholder="citiesPlaceholder"
                                    v-model="fields.cityId"
                                    @input="_handleChangeFieldSearchUser"
                                    :disabled="(!fields.countryId )"
                                    :class="[{ 'error': (verrors.has('cityId')) }, 'w_100' ]">
                        </vue-select>
                      </div>
                    </collapse>
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
                  <a href="https://linkmuse.typeform.com/to/A3Rn4O" target="_blank" class="d-btn d-btn_outline mt_4 w_100">Пройти опрос</a>
                </div>
              </template>

              <sidebar-navigation/>

              <div class="d-card d-card_outline">
                <div class="d-nav d-nav_inline-bullet" :class="[{ 'short-view': !seoTextShow }]" v-html="seoText"></div>
                <a href="javascript:void(0)" @click="seoTextShow = !seoTextShow" class="d-nav-more">
                  <template v-if="seoTextShow">Свернуть
                    <svg class="d-icon d-icon_size_16 rotate_180">
                      <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-chevron-bottom"/>
                    </svg>
                  </template>
                  <template v-else>Читать польностью
                    <svg class="d-icon d-icon_size_16">
                      <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-chevron-bottom"/>
                    </svg>
                  </template>
                </a>
              </div>
            </div>
          </div> <!-- end of sidebar -->

          <!-- feed__body -->
          <div class="d-feed__body ml_4" v-infinite-scroll="_handleInfiniteScroll" infinite-scroll-disabled="infiniteDisabled" infinite-scroll-distance="900">

            <user-card :user="user" v-for="user in users" :key="user.id"
                             @changeState="_handleChangeState">
            </user-card>

            <lm-loader v-if="loading" :style="{ marginTop: '15px' }"></lm-loader>

            <template v-if="(isEmpty === true)">
              <div class="d-card d-card_feed-plug">
                <svg class="d-icon d-icon_size_64 fill_main mb_5">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_info"/>
                </svg>
                <div class="heading heading_h5">Мы ничего не нашли</div>
                <div class="ta_center mb_4 color_gray-1">Попробуйте другой запрос<br>  <template v-if="showReset">или сбросьте фильтры</template></div>
                <template v-if="showReset">
                  <a href="javascript:void(0)" class="d-btn d-btn_primary" @click="_handleClickClearFilter">Сбросить фильтры</a>
                </template>
              </div>
            </template>
          </div> <!-- end of feed__body -->

        </div> <!-- end of feed -->

      </div> <!-- end of page__body -->

    </div> <!-- end of page content -->
  </div> <!-- end of page -->
</template>

<script>
  import _ from 'lodash'
  import { Collapse } from 'uiv'
  import { mapGetters, mapActions } from 'vuex'
  import SeoProfessions from '@modules/SEO/mixins/Professions'
  import { omitEmpty, getDataAttribute, HEADER_HEIGHT, has } from '@utils'
  import UserCard from '@components/User/User.vue'

  import AjaxSelectCity from '@modules/Geo/mixins/AjaxSelectCity'

  import { createHelpers } from 'vuex-map-fields'

  const { mapFields } = createHelpers({
    getterType: 'user/getField',
    mutationType: 'user/updateField'
  })

  export default {
    mixins: [SeoProfessions, AjaxSelectCity],
    components: { Collapse, UserCard },
    metaInfo () {
      return {
        title: this.title,
        meta: [
          { name: 'description', content: this.description },
        ]
      }
    },
    data () {
      return {
        typeFormPoll: false,
        searchFocused: false,
        collapse: {
          geo: false,
          ages: true,
          rate: false,
          genders: true,
          professions: true,
          lists: {
            professions: false
          }
        },
        optionsStickySidebar: {
          topSpacing: 108,
          bottomSpacing: 16
        },
        seoTextShow: false
      }
    },
    async asyncData ({ store, route }) {
      const { query } = route

      let promises = []
      const defaultFields = store.getters['user/getCatalogDefaultFieldsFilter']
      const initialized = store.getters['user/profession/getInitializedSources']

      let fields = omitEmpty(_.merge(defaultFields, { ...query }), { omitZero: false })

      await store.dispatch('user/clearUsers')
      await store.dispatch('user/fetchUsers', { fields, offset: 0 }).then((total) => {
        if (typeof window !== 'undefined' && total < 4) {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }
      })

      if (!initialized) {
        await store.dispatch('user/profession/getSources')
      }
    },
    computed: {
      ...mapFields({
        fields: 'users.filter',
        defaultFields: 'users.defaultFilter'
      }),
      ...mapGetters({
        user: 'auth/getAuthUser',
        users: 'user/getUsersData',
        total: 'user/getUsersTotal',
        error: 'user/getUsersError',
        offset: 'user/getUsersOffset',
        loading: 'user/getUsersLoading',
        isAuthorized: 'auth/isAuthorized',
        sources: 'user/profession/getSources',
        infiniteDisabled: 'user/getUsersInfiniteDisabled'
      }),
      isEmpty () {
        return (this.loading === false && this.total === 0)
      },
      isAdmin () {
        return (this.user && this.user.hasOwnProperty('isAdmin') && this.user['isAdmin'] === true)
      },
      showReset () {
        const fields = this._.omit(this.fields)
        const defaultFields = this._.omit(this.defaultFields)

        return (this._.isEqual(fields, defaultFields) === false)
      },
      citiesPlaceholder () {
        return this.fields['countryId'] ? 'Не выбран' : 'Укажите страну'
      },
      title () {
        return 'Работа для участников съёмочной группы: препродакшена, продакшена, постпродакшена и талантов'
      },
      description () {
        return 'Выбирайте лучших профессионалов по вашим критериям, бесплатный подбор, удобный график'
      }
    },
    created () {
      this.typeFormPoll = !(this.$cookies.get('typeform.poll') === 'false')

      const { query } = this.$route
      this._.merge(this.fields, { ...query })

      const { professions } = this.sources
      this.$set(this.collapse, `professions.${professions[0]['name']}`, true)

      this.$nextTick(() => {
        if (this.fields.countryId && this.sources.cities.length === 0) {
          this._handleChangeCountrySelect(this.fields.countryId, false, true)
        }
      })
    },
    beforeDestroy () {
      this._clearFilter().then(() => {
        console.log('Cleared users...')
      }).catch(() => {})

      this.$root.$off('user-updated-state-folder')
    },
    beforeRouteUpdate (to, from, next) {
      const { query } = to

      this._clearFilter().then(() => {
        console.log('Cleared users...')
        Object.assign(this.fields, { ...query })
        next()
      }).catch(() => { next() })
    },
    mounted () {
      this.$root.$on('user-updated-state-folder', (userId, inFolder) => {
        let users = this.users.filter(u => u['id'] === userId)
        users.forEach((p) => this.$store.dispatch('user/setFieldUsersData', { id: p['id'], key: 'inFolder', value: inFolder }))
      })
    },
    methods: {
      ...mapActions({
        fetchUsers: 'user/fetchUsers',
        clearUsers: 'user/clearUsers'
      }),
      _handleFocusFieldSearchUser () {
        this.searchFocused = true
      },
      _handleBlurFieldSearchUser () {
        this.searchFocused = false
      },
      _handleInputFieldSearchUser: _.debounce(function(e) {
        const el = e.target
        let key = getDataAttribute(el, 'key')

        this.$validator.validate(key).then((result) => {
          if (result) {
            this._handleApplyFilter()
          }
        })
      }, 900),
      _handleClickCloseSearching () {
        this.fields.query = null

        this.$nextTick(() => {
          this._handleApplyFilter()
        })
      },
      _handleClickToggleCollapse (field) {
        if (this.collapse.hasOwnProperty(field)) {
          this.$set(this.collapse, field, !this.collapse[field])
        } else this.$set(this.collapse, field, true)
      },
      _handleClickToggleCollapseLists (field) {
        if (this.collapse['lists'].hasOwnProperty(field)) {
          this.$set(this.collapse['lists'], field, !this.collapse['lists'][field])
        } else this.$set(this.collapse['lists'], field, true)
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
      _handleChangeFieldSearchUser: _.debounce(function(e) {
        this._handleValidateFields().then(() => {
          this._handleApplyFilter()
        }).catch(() => {})
      }, 900),
      _handleChangeFieldSearchProfession: _.debounce(function(profession) {
        this._handleValidateFields().then(() => {
          if (profession) {
            let { fields } = this
            const query = omitEmpty(fields, { omitZero: false })
            const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

            this.$router.push({ name: 'users.professions.index', params: { profession }, query }, () => {
              loader.hide()
            }, () => { loader.hide() })
          }
        }).catch(() => {})
      }, 200),
      /**
       *
       */
      _handleClickClearFilter () {
        this._clearFilter().then(() => {
          this._handleApplyFilter()
        }).catch(() => {})
      },
      _clearFilter () {
        return new Promise((resolve, reject) => {
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
        this.fetchUsers({ fields, offset })
      },
      _handleApplyFilter () {
        let { fields } = this
        this.$gtm.trackEvent({ event: 'filter_user' })

        this.clearUsers().then(() => {
          const query = omitEmpty(fields, { omitZero: false })

          this.$router.replace({ name: 'users.index', query })
        }).catch(() => {})
      },
      _handleChangeState ({ id, key, value }) {
        this.$store.dispatch('user/setFieldUsersData', { id, key, value })
      },
      _handleClickHideTypeForm () {
        this.typeFormPoll = false
        this.$cookies.set('typeform.poll', 'false')
      }
    }
  }
</script>

<style lang="sass" scoped>
  .short-view
    overflow: hidden
    height: 90px
    .d-nav-more
      opacity: 0.72
      font-size: 12px
      font-weight: 600
      font-stretch: normal
      font-style: normal
      line-height: 1.33
      letter-spacing: 0.5px
      color: #515562
      display: flex
      align-items: center
      height: 19px
      margin-top: 12px
</style>
