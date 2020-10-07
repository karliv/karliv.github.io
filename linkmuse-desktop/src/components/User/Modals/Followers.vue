<template>
  <modal class="modal-center modal-abuse modal-tree-professions" v-model="value" @hide="_handleCloseModal" :header="false" :footer="false">
    <div class="modal-abuse-content">
      <div class="d-column align_center mt_8">
        <div class="heading heading_h4 mb_6">Аудитория</div>

        <div class="nav_categories d-row justify_center">
          <a href="javascript:void(0)" v-modal-link="{ name: 'partners.user', props: { username } }" @click="_handleCloseModal" class="nav__item d-text_bold color_gray-3">Коллеги <template v-if="user && counters">{{ counters['colleagues'] | numeral('0a') }}</template></a>
          <a href="javascript:void(0)" class="nav__item nav__item_active d-text_bold color_gray-3 ml_6">Подписчики <template v-if="user && counters">{{ counters['followers'] | numeral('0a') }}</template></a>
          <a href="javascript:void(0)" v-modal-link="{ name: 'following.user', props: { username } }" @click="_handleCloseModal" class="nav__item d-text_bold color_gray-3 ml_6">Подписки <template v-if="user && counters">{{ counters['following'] | numeral('0a') }}</template></a>
        </div>
      </div>

      <div :class="['modal-abuse-content__wrapper', { 'modal-abuse-content_fixed': count, 'modal__content_body-empty': isEmpty }]" v-infinite-scroll="_handleInfiniteScroll" infinite-scroll-disabled="infiniteDisabled" infinite-scroll-distance="250">
        <template v-if="(isEmpty === false)">
          <div :class="['d-input', 'd-input_row', 'd-input__search', { 'd-input_search_feed_focused': searchFocused }]">
            <div class="d-row align_center justify_flex-end">
              <span class="d-input__icon d-input__icon_left">
                <svg :class="['d-icon', 'd-icon-search', 'd-icon_size_16', 'fill_gray-3']">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_search"></use>
                </svg>
              </span>

              <input type="text" name="query" ref="query" autocomplete="off"
                     v-validate="'max:50'"
                     v-model="fields.query"
                     data-lm-key="query"
                     :disabled="loading"
                     :placeholder="'Поиск по имени, фамилии'"
                     @focus="_handleFocusFieldSearchUsers"
                     @blur="_handleBlurFieldSearchUsers"
                     @input="_handleInputFieldSearchUsers"
                     :class="['d-input__field', { 'error': (verrors.has('query')) }]">

              <template v-if="(fields.query)">
                <span class="d-input__icon d-input__icon_right" @click="_handleClickCloseSearching">
                  <svg :class="['d-icon', 'd-icon-close','d-icon_size_16', 'fill_white']">
                    <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-close-small"></use>
                  </svg>
                </span>
              </template>
            </div>
          </div>

          <div class="personal-list d-column">
            <user-card v-for="(user, key) in users" :key="`follower-${user.id}-${key}`" :user="user"></user-card>

            <lm-loader v-if="loading" :style="{ marginTop: '15px' }"></lm-loader>
          </div>
        </template>

        <template v-else-if="(isEmpty === true)">
          <div class="d-card d-card_feed-plug ta_center">
            <svg class="d-icon d-icon_size_64 fill_main mb_5">
              <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_info"/>
            </svg>
            <template v-if="(isCurrentUser === true)">
              <div class="heading heading_h5">Тут будут ваши подписчики</div>
              <div class="ta_center mb_4 color_gray-1">Мы покажем их, как только на вас кто-то подпишется</div>
            </template>
            <template v-else-if="(isCurrentUser === false)">
              <div class="heading heading_h5">На пользователя пока никто не подписан.</div>
            </template>
          </div>
        </template>
      </div>
    </div>
  </modal>
</template>

<script>
  import _ from 'lodash'
  import { mapGetters, mapActions } from 'vuex'
  import { has, getDataAttribute } from '@utils'
  import UserCard from '@components/User/FollowersCard.vue'

  export default {
    props: {
      username: {
        type: String,
        required: true
      }
    },
    components: { UserCard },
    metaInfo: {
      title: 'Подписчики'
    },
    data () {
      return {
        value: false,
        searchFocused: false,
        fields: { query: null }
      }
    },
    computed: {
      ...mapGetters({
        authUser: 'auth/getAuthUser',
        user: 'user/getShowUserData',
        users: 'user/getFollowers',
        count: 'user/getCountFollowers',
        error: 'user/getFollowersError',
        offset: 'user/getOffsetFollowers',
        loading: 'user/getFollowersLoading',
        infiniteDisabled: 'user/getFollowersInfiniteDisabled'
      }),
      isEmpty () {
        return ( !this.loading && this.count === 0 )
      },
      isCurrentUser () {
        const { username } = this.$route.params
        return (this.authUser && has(this.authUser, 'username') && this.authUser.username === String(username))
      },
      counters () {
        return this.user.counters
      }
    },
    created () {
      const { username, fields } = this
      this._fetchFollowers({ username, fields, offset: 0 })
    },
    methods: {
      ...mapActions({
        _clearFollowers: 'user/clearFollowers',
        _fetchFollowers: 'user/getUserFollowersByUsername'
      }),
      _handleCloseModal ()  {
        this._handleClearModal().then(() => {
          this._clearFollowers()
        }).catch(() => {})
      },
      _handleClearModal () {
        return new Promise((resolve, reject) => {
          try {
            this.value = false
            this.searchFocused = false
            this.fields = { query: null }
            resolve && resolve()
          } catch (e) {
            reject && reject(e)
          }
        })
      },
      _handleInputFieldSearchUsers: _.debounce(function(e) {
        const el = e.target
        let key = getDataAttribute(el, 'key')

        this.$validator.validate(key).then((result) => {
          if (result) {
            this._handleApplyFilter(false)
          }
        })
      }, 900),
      _handleFocusFieldSearchUsers () {
        this.searchFocused = true
      },
      _handleBlurFieldSearchUsers () {
        this.searchFocused = false
      },
      _handleClickCloseSearching () {
        this.fields.query = null

        this.$nextTick(() => {
          this._handleApplyFilter()
        })
      },
      _handleInfiniteScroll () {
        const { username, fields, offset } = this
        this._fetchFollowers({ username, fields, offset })
      },
      _handleApplyFilter () {
        this._clearFollowers().then(() => {
          const { username, fields } = this
          this._fetchFollowers({ username, fields, offset: 0 })
        }).catch(() => {})
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
