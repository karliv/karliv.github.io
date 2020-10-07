<template>
  <div class="page page_feed">

    <!-- page content -->
    <div class="page__content">

      <div class="page__body page__body_feed">

        <div class="d-row align_end mb_6">
          <div class="heading heading_h2 mb_0">{{ (isCurrentUser) ? 'Мои объявления' : 'Объявления' }}</div>
        </div>

        <!-- feed -->
        <div class="d-feed">


          <!-- sidebar -->
          <div class="sidebar d-feed__sidebar">
            <div class="sidebar__content">

              <!-- filters -->
              <div class="filters">
                <div class="d-card">
                  <template v-if="(true === false)">
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
                  </template>
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
                                       @change="_handleChangeFieldSearchCasting">
                                <label for="status_draft" class="d-checkbox__label">Черновик</label>
                              </div>
                            </div>
                            -->
                            <div class="list__item">
                              <div class="d-checkbox">
                                <input id="status_published" type="checkbox" class="d-checkbox__mark"
                                       :value="PUBLISHED" name="state" v-model="fields.state"
                                       @change="_handleChangeFieldSearchCasting">
                                <label for="status_published" class="d-checkbox__label">Опубликован</label>
                              </div>
                            </div>
                            <div class="list__item">
                              <div class="d-checkbox">
                                <input id="status_moderation" type="checkbox" class="d-checkbox__mark"
                                       :value="MODERATION" name="state" v-model="fields.state"
                                       @change="_handleChangeFieldSearchCasting">
                                <label for="status_moderation" class="d-checkbox__label">На модерации</label>
                              </div>
                            </div>
                            <div class="list__item">
                              <div class="d-checkbox">
                                <input id="status_refused" type="checkbox" class="d-checkbox__mark"
                                       :value="REJECTED" name="state" v-model="fields.state"
                                       @change="_handleChangeFieldSearchCasting">
                                <label for="status_refused" class="d-checkbox__label">Отклонён</label>
                              </div>
                            </div>
                            <div class="list__item">
                              <div class="d-checkbox">
                                <input id="status_archive" type="checkbox" class="d-checkbox__mark"
                                       :value="ARCHIVED" name="state" v-model="fields.state"
                                       @change="_handleChangeFieldSearchCasting">
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

            <casting-card :casting="casting" v-for="casting in castings" :key="casting.id"
                          @changeState="_handleChangeState" :isCatalogPage="false">
            </casting-card>

            <lm-loader v-if="loading" :style="{ marginTop: '15px' }"></lm-loader>

            <template v-if="(isEmpty === true)">
              <div class="d-card d-card_feed-plug">
                <svg class="d-icon d-icon_size_64 fill_main mb_5">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_info"/>
                </svg>
                <div class="heading heading_h5">Тут пока пусто</div>
                <template v-if="(isCurrentUser === true && isAuthorized === true)">
                  <div class="ta_center mb_4 color_gray-1">Для начала работы создайте<br>новое объявление</div>
                  <router-link :to="{ name: 'board.castings.create' }" class="d-btn d-btn_primary">Добавить</router-link>
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

  import CastingCard from '@components/Board/Casting/Casting.vue'

  import { createHelpers } from 'vuex-map-fields'

  const { mapFields } = createHelpers({
    getterType: 'board/casting/getField',
    mutationType: 'board/casting/updateField',
  })

  import { CASTING, LOCATION } from '@modules/Board/Enums/BoardType'
  import { PUBLISHED, DRAFT, ARCHIVED, MODERATION, REJECTED } from '@modules/Board/Casting/Enums/CastingState'

  export default {
    components: { Collapse, CastingCard },
    metaInfo () {
      return {
        /* TODO: Придумать заголовки (Мои кастинги) ? (Его кастигнги) */
        title: `${(this.isCurrentUser) ? 'Мои объявления: кастинги' : 'Объявления: кастинги'}`
      }
    },
    data () {
      return {
        searchFocused: false,
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
      let fields = store.state.board.casting.castings.userFilter

      await store.dispatch('user/getUserByUsername', { username: String(route.params.username) })
      await store.dispatch('board/casting/fetchUserCastings', {
        fields,
        username,
        offset: 0
      })
    },
    computed: {
      ...mapFields({
        fields: 'castings.userFilter',
        defaultFields: 'castings.defaultUserFilter'
      }),
      ...mapGetters({
        role: 'auth/getRole',
        authUser: 'auth/getAuthUser',
        user: 'user/getShowUserData',
        isAuthorized: 'auth/isAuthorized',
        total: 'board/casting/getCastingsTotal',
        error: 'board/casting/getCastingsError',
        offset: 'board/casting/getCastingsOffset',
        castings: 'board/casting/getCastingsData',
        loading: 'board/casting/getCastingsLoading',
        infiniteDisabled: 'board/casting/getCastingsInfiniteDisabled'
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
      this.fields.type = CASTING
    },
    methods: {
      ...mapActions({
        fetchCastings: 'board/casting/fetchUserCastings',
        clearCastings: 'board/casting/clearCastings'
      }),
      _handleClickToggleCollapse (field) {
        this.collapse[field] = !this.collapse[field]
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
          this._handleApplyFilter()
        }).catch(() => {})
      }, 900),
      _handleApplyFilter () {
        let { fields, username } = this
        this.clearCastings().then(() => {
          this.fetchCastings({ username, fields, offset: 0 })
        }).catch(() => {})
      },
      _handleInfiniteScroll() {
        let { fields, offset, username } = this
        this.fetchCastings({ username, fields, offset })
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
            this.fields.type = CASTING
            resolve && resolve()
          } catch (e) {
            reject && reject(e)
          }
        })
      },
      _handleChangeState ({ id, key, value }) {
        this.$store.dispatch('board/casting/setFieldCastingsData', { id, key, value })
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
