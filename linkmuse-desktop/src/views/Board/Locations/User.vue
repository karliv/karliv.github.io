<template>
  <div class="page page_feed">
    <!-- page content -->
    <div class="page__content">
      <div class="page__body page__body_feed">
        <div class="d-row align_end mb_6">
          <div class="heading heading_h2 mb_0">{{ (isCurrentUser) ? 'Мои объявления' : 'Объявления' }}</div>
        </div>

        <div class="d-feed">

          <!-- sidebar -->
          <div class="sidebar d-feed__sidebar">
            <div class="sidebar__content">

              <!-- filters -->
              <div class="filters">
                <div class="d-card">

                  <div class="section filters__section">
                    <div class="list list_filters list_dropdown list_dropdown_active">
                      <div class="d-row align_center" @click="_handleClickToggleCollapse('type')"
                           :style="{ cursor: 'pointer' }">
                        <div class="list__header list__header_filters list__header_dropdown">Тип объявления</div>
                        <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['type']) }]">
                          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                        </svg>
                      </div>
                      <collapse v-model="collapse['type']">
                        <div class="list__body list__body_filters list__body_dropdown">
                          <div class="list__item">
                            <div class="d-radio">
                              <input id="type_castings" type="radio" class="d-radio__mark" name="type" v-model="fields.type" :value="CASTING" @change="_handleChangeTypeBoard">
                              <label for="type_castings" class="d-radio__label">Кастинги</label>
                            </div>
                          </div>
                          <div class="list__item">
                            <div class="d-radio">
                              <input id="type_locations" type="radio" class="d-radio__mark" name="type" v-model="fields.type" :value="LOCATION" @change="_handleChangeTypeBoard">
                              <label for="type_locations" class="d-radio__label">Локации</label>
                            </div>
                          </div>
                          <div class="list__item">
                            <div class="d-radio">
                              <input id="type_sale" type="radio" class="d-radio__mark" name="type" disabled>
                              <label for="type_sale" class="d-radio__label">Продажа</label>
                            </div>
                          </div>
                          <div class="list__item">
                            <div class="d-radio">
                              <input id="gender_rent" type="radio" class="d-radio__mark" name="type" disabled>
                              <label for="gender_rent" class="d-radio__label">Аренда</label>
                            </div>
                          </div>
                        </div>
                      </collapse>
                    </div>
                  </div>
                  <template v-if="(isCurrentUser || isAdmin)">
                    <div class="section filters__section">
                      <div class="list list_filters list_dropdown list_dropdown_active">
                        <div class="d-row align_center" @click="_handleClickToggleCollapse('state')"
                             :style="{ cursor: 'pointer' }">
                          <div class="list__header list__header_filters list__header_dropdown">Статус объявления</div>
                          <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['state']) }]">
                            <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                          </svg>
                          <template v-if="(!collapse['state'] && fields.state.length)">
                            <div class="filters__status filters__status_changed"></div>
                          </template>
                        </div>
                        <collapse v-model="collapse['state']">
                          <div class="list__body list__body_filters list__body_dropdown">
                            <!--
                            <div class="list__item">
                              <div class="d-checkbox">
                                <input id="status_draft" type="checkbox" class="d-checkbox__mark"
                                       :value="DRAFT" name="state" v-model="fields.state"
                                       @change="_handleChangeFieldSearchLocation">
                                <label for="status_draft" class="d-checkbox__label">Черновик</label>
                              </div>
                            </div>
                            -->
                            <div class="list__item">
                              <div class="d-checkbox">
                                <input id="status_published" type="checkbox" class="d-checkbox__mark"
                                       :value="PUBLISHED" name="state" v-model="fields.state"
                                       @change="_handleChangeFieldSearchLocation">
                                <label for="status_published" class="d-checkbox__label">Опубликован</label>
                              </div>
                            </div>
                            <div class="list__item">
                              <div class="d-checkbox">
                                <input id="status_moderation" type="checkbox" class="d-checkbox__mark"
                                       :value="MODERATION" name="state" v-model="fields.state"
                                       @change="_handleChangeFieldSearchLocation">
                                <label for="status_moderation" class="d-checkbox__label">На модерации</label>
                              </div>
                            </div>
                            <div class="list__item">
                              <div class="d-checkbox">
                                <input id="status_refused" type="checkbox" class="d-checkbox__mark"
                                       :value="REJECTED" name="state" v-model="fields.state"
                                       @change="_handleChangeFieldSearchLocation">
                                <label for="status_refused" class="d-checkbox__label">Отклонён</label>
                              </div>
                            </div>
                            <div class="list__item">
                              <div class="d-checkbox">
                                <input id="status_archive" type="checkbox" class="d-checkbox__mark"
                                       :value="ARCHIVED" name="state" v-model="fields.state"
                                       @change="_handleChangeFieldSearchLocation">
                                <label for="status_archive" class="d-checkbox__label">Архив</label>
                              </div>
                            </div>
                          </div>
                        </collapse>
                      </div>
                    </div>
                  </template>
                  <template v-if="showReset">
                    <div class="section filters__section">
                      <button class="d-btn d-btn_outline w_100" @click="_handleClickClearFilter" :disabled="(loading)">
                        Сбросить фильтры
                      </button>
                    </div>
                  </template>
                </div>
              </div> <!-- end of filters -->

              <sidebar-navigation/>
            </div>
          </div> <!-- end of sidebar -->

          <!-- feed__body -->
          <div class="d-feed__body ml_4" v-infinite-scroll="_handleInfiniteScroll"
               infinite-scroll-disabled="infiniteDisabled" infinite-scroll-distance="900">

            <location-card :location="location" v-for="location in locations" :key="location.id"
                          @changeState="_handleChangeState" :isCatalogPage="false">
            </location-card>

<!--            <div class="d-card" data-v-a6bb2248="" data-v-59cd22de=""><a href="/boards/locations/room-90m2-5" class="section d-card__section" data-v-a6bb2248=""><span data-v-a6bb2248="">Локация #5</span></a></div>-->

            <lm-loader v-if="loading" :style="{ marginTop: '15px' }"></lm-loader>

            <template v-if="(isEmpty === true)">
              <div class="d-card d-card_feed-plug">
                <svg class="d-icon d-icon_size_64 fill_main mb_5">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_info"/>
                </svg>
                <div class="heading heading_h5">Тут пока пусто</div>
                <template v-if="(isCurrentUser === true && isAuthorized === true)">
                  <div class="ta_center mb_4 color_gray-1">Для начала работы создайте<br>новое объявление</div>
                  <router-link :to="{ name: 'board.locations.create' }" class="d-btn d-btn_primary">Добавить</router-link>
                </template>
              </div>
            </template>

          </div> <!-- end of feed__body -->

        </div> <!-- end of feed -->
      </div>
    </div> <!-- end of page content -->

  </div> <!-- end of page -->
</template>

<script>
  import _ from 'lodash'
  import { has } from '@utils'
  import { Collapse } from 'uiv'
  import { mapGetters, mapActions } from 'vuex'
  import { HEADER_HEIGHT, getDataAttribute } from '@utils'

  import LocationCard from '@components/Board/Location/Location.vue'

  import { createHelpers } from 'vuex-map-fields'

  const { mapFields } = createHelpers({
    getterType: 'board/location/getField',
    mutationType: 'board/location/updateField',
  })

  import { CASTING, LOCATION } from '@modules/Board/Enums/BoardType'
  import { PUBLISHED, DRAFT, ARCHIVED, MODERATION, REJECTED } from '@modules/Board/Location/Enums/LocationState'

  export default {
    components: { Collapse, LocationCard },
    metaInfo () {
      return {
        title: `${(this.isCurrentUser) ? 'Мои объявления: локации' : 'Объявления: локации'}`
      }
    },
    data () {
      return {
        collapse: {
          type: true,
          state: true
        },
        CASTING, LOCATION,
        PUBLISHED, DRAFT, ARCHIVED, MODERATION, REJECTED
      }
    },
    async asyncData ({ store, route }) {
      const { username } = route.params
      let fields = store.state.board.location.locations.userFilter

      await store.dispatch('user/getUserByUsername', { username: String(route.params.username) })
      await store.dispatch('board/location/fetchUserLocations', {
        fields,
        username,
        offset: 0
      })
    },
    computed: {
      ...mapFields({
        fields: 'locations.userFilter',
        defaultFields: 'locations.defaultUserFilter'
      }),
      ...mapGetters({
        role: 'auth/getRole',
        authUser: 'auth/getAuthUser',
        user: 'user/getShowUserData',
        isAuthorized: 'auth/isAuthorized',
        total: 'board/location/getLocationsTotal',
        error: 'board/location/getLocationsError',
        offset: 'board/location/getLocationsOffset',
        locations: 'board/location/getLocationsData',
        loading: 'board/location/getLocationsLoading',
        infiniteDisabled: 'board/location/getLocationsInfiniteDisabled'
      }),
      username () {
        const { username } = this.$route.params
        return username
      },
      isCurrentUser () {
        const { username } = this.$route.params
        return (this.authUser && has(this.authUser, 'username') && this.authUser.username === String(username))
      },
      isEmpty () {
        return ( this.loading === false && this.total === 0 )
      },
      isAdmin () {
        return (this.user && this.user.hasOwnProperty('isAdmin') && this.user['isAdmin'] === true)
      },
      showReset () {
        const fields = this._.omit(this.fields, ['type'])
        const defaultFields = this._.omit(this.defaultFields, ['type'])

        return (this._.isEqual(fields, defaultFields) === false)
      }
    },
    created () {
      this.fields.type = LOCATION
    },
    methods: {
      ...mapActions({
        clearLocations: 'board/location/clearLocations',
        fetchLocations: 'board/location/fetchUserLocations'
      }),
      _handleClickToggleCollapse (field) {
        this.collapse[field] = !this.collapse[field]
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
      _handleChangeFieldSearchLocation: _.debounce(function(e) {
        this._handleValidateFields().then(() => {
          this._handleApplyFilter()
        }).catch(() => {})
      }, 900),
      _handleApplyFilter () {
        let { fields, username } = this
        this.clearLocations().then(() => {
          this.fetchLocations({ username, fields, offset: 0 })
        }).catch(() => {})
      },
      _handleInfiniteScroll() {
        let { fields, offset, username } = this
        this.fetchLocations({ username, fields, offset })
      },
      _handleClickClearFilter () {
        this._clearFilter().then(() => {
          this._handleApplyFilter()
        }).catch(() => {})
      },
      _clearFilter () {
        return new Promise((resolve, reject) => {
          const fields = this.fields

          try {
            Object.keys(fields).forEach(k => {
              if (this.fields[k] === null && typeof this.fields[k] === "object") {
                this.fields[k] = null
              } else if (typeof this.fields[k] === 'object') {
                this.fields[k] = []
              } else this.fields[k] = ''
            })
            this.fields.type = LOCATION
            resolve && resolve()
          } catch (e) {
            reject && reject(e)
          }
        })
      },
      _handleChangeState ({ id, key, value }) {
        this.$store.dispatch('board/location/setFieldLocationsData', { id, key, value })
      },
      _handleChangeTypeBoard () {
        let type = this.fields.type

        if (type === CASTING) {
          this.$router.push({ name: 'board.castings.user', params: { username: this.username } })
        }

        if (type === LOCATION) {
          this.$router.push({ name: 'board.locations.user', params: { username: this.username } })
        }
      }
    }
  }
</script>

<style scoped>

</style>
