<template>
  <div class="page page_feed">

    <!-- page content -->
    <div class="page__content">

      <div class="page__body page__body_feed">

        <div class="d-row align_end mb_6">
          <div class="heading heading_h2 mb_0">Мои отклики</div>
        </div>

        <!-- feed -->
        <div class="d-feed">


          <!-- sidebar -->
          <div class="sidebar d-feed__sidebar">
            <div class="sidebar__content">

              <!-- filters -->
              <div class="filters">
                <div class="d-card">
                  <div class="section filters__section">
                    <div class="list list_filters list_dropdown list_dropdown_active">
                      <div class="d-row align_center" @click="_handleClickToggleCollapse('read')"
                           :style="{ cursor: 'pointer' }">
                        <div class="list__header list__header_filters list__header_dropdown">Статус отклика</div>
                        <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['read']) }]">
                          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                        </svg>
                        <template v-if="(!collapse['read'] && fields.read)">
                          <div class="filters__status filters__status_changed"></div>
                        </template>
                      </div>
                      <collapse v-model="collapse['read']">
                        <div class="list__body list__body_filters list__body_dropdown">
                          <div class="list__item">
                            <div class="d-radio">
                              <input id="status_all" type="radio" class="d-radio__mark"
                                     :value="null" name="read" v-model="fields.read"
                                     @change="_handleChangeFieldSearchCasting">
                              <label for="status_all" class="d-radio__label">Все</label>
                            </div>
                          </div>
                          <div class="list__item">
                            <div class="d-radio">
                              <input id="status_viewed" type="radio" class="d-radio__mark"
                                     value="1" name="read" v-model="fields.read"
                                     @change="_handleChangeFieldSearchCasting">
                              <label for="status_viewed" class="d-radio__label">Просмотрен</label>
                            </div>
                          </div>
                          <div class="list__item">
                            <div class="d-radio">
                              <input id="status_not-viewed" type="radio" class="d-radio__mark"
                                     value="0" name="read" v-model="fields.read"
                                     @change="_handleChangeFieldSearchCasting">
                              <label for="status_not-viewed" class="d-radio__label">Не просмотрен</label>
                            </div>
                          </div>
                        </div>
                      </collapse>
                    </div>
                  </div>
                </div>
              </div> <!-- end of filters -->

              <sidebar-navigation/>
            </div>
          </div> <!-- end of sidebar -->

          <!-- feed__body -->
          <div class="d-feed__body ml_4" v-infinite-scroll="_handleInfiniteScroll"
               infinite-scroll-disabled="infiniteDisabled" infinite-scroll-distance="900">

            <response-card :response="response" v-for="response in responses" :key="response.id">
            </response-card>

            <lm-loader v-if="loading" :style="{ marginTop: '15px' }"></lm-loader>

            <template v-if="(isEmpty === true)">
              <div class="d-card d-card_feed-plug">
                <svg class="d-icon d-icon_size_64 fill_main mb_5">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_info"/>
                </svg>
                <div class="heading heading_h5">Тут пока пусто</div>
                <template v-if="(isCurrentUser === true)">
                  <div class="ta_center mb_4 color_gray-1">Для отслеживания откликов<br>откликайтесь на кастинги</div>
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

  import { createHelpers } from 'vuex-map-fields'

  const { mapFields } = createHelpers({
    getterType: 'board/casting/response/getField',
    mutationType: 'board/casting/response/updateField',
  })

  import ResponseCard from '@components/Board/Casting/Response/Response.vue'

  export default {
    components: { Collapse, ResponseCard },
    metaInfo () {
      return {
        title: `${(this.isCurrentUser) ? 'Мои отклики: кастинги' : 'Отклики: кастинги'}`
      }
    },
    data () {
      return {
        collapse: {
          read: true,
          state: true,
          viewed: true
        }
      }
    },
    async asyncData ({ store, route }) {
      const { username } = route.params
      let fields = store.state.board.casting.response.responses.userFilter

      await store.dispatch('user/getUserByUsername', { username: String(route.params.username) })
      await store.dispatch('board/casting/response/fetchUserResponses', {
        fields,
        username,
        offset: 0
      })
    },
    computed: {
      ...mapFields({
        fields: 'responses.userFilter',
        defaultFields: 'responses.defaultUserFilter'
      }),
      ...mapGetters({
        role: 'auth/getRole',
        authUser: 'auth/getAuthUser',
        user: 'user/getShowUserData',
        isAuthorized: 'auth/isAuthorized',
        total: 'board/casting/response/getResponsesTotal',
        error: 'board/casting/response/getResponsesError',
        offset: 'board/casting/response/getResponsesOffset',
        responses: 'board/casting/response/getResponsesData',
        loading: 'board/casting/response/getResponsesLoading',
        infiniteDisabled: 'board/casting/response/getResponsesInfiniteDisabled'
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
      }
    },
    methods: {
      ...mapActions({
        clearResponses: 'board/casting/response/clearResponses',
        fetchResponses: 'board/casting/response/fetchUserResponses'
      }),
      _handleClickToggleCollapse (field) {
        this.collapse[field] = !this.collapse[field]
      },
      _handleInfiniteScroll() {
        let { offset, username, fields } = this
        this.fetchResponses({ username, fields, offset })
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
        this.clearResponses().then(() => {
          this.fetchResponses({ username, fields, offset: 0 })
        }).catch(() => {})
      },
    }
  }
</script>

<style scoped>

</style>
