<template>
  <mt-popup :class="['lm-m-modal-wrap', 'lm-m-modal-tree-professions', 'm-text', 'pb_0']" v-model="modal.value" position="center" :modal="true" @input="_handleInputPopup">
    <div class="modal__content_tree-professions form_tree-professions">
      <div class="modal__content_header modal__content_header_fixed column align_center">
        <div class="row align_center justify_center w_100 mb_3">
          <div class="heading_h5 mb_0">Аудитория</div>
          <router-link :to="{ name: 'user.show', params: { username } }"  class="m-text_bold color_main" style="position:absolute; right:0">Готово</router-link>
        </div>

        <div class="nav nav_categories nav_categories_feed justify_center mt_3">
          <div class="nav__list nav__list_categories">
            <router-link :to="{ name: 'partners.user', params: { username } }" activeClass="nav__item_active" :class="['nav__item', 'm-text_bold-2', 'mr_6']">Коллеги {{ counters['colleagues'] | numeral('0a') }}</router-link>
            <router-link :to="{ name: 'followers.user', params: { username } }" activeClass="nav__item_active" :class="['nav__item', 'm-text_bold-2', 'mr_6']">Подписчики {{ counters['followers'] | numeral('0a') }}</router-link>
            <router-link :to="{ name: 'following.user', params: { username } }" activeClass="nav__item_active" :class="['nav__item', 'm-text_bold-2']">Подписки {{ counters['following'] | numeral('0a') }}</router-link>
          </div>
        </div>

<!--        <template v-if="(isEmpty === false)">-->
<!--          <div class="input input_search input_search_feed">-->
<!--            <svg :class="['icon', 'icon_size_16', 'icon_search', (searchFocused) ? 'icon_fill_blue' : 'icon_fill_lm-gray-3']">-->
<!--              <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_search"></use>-->
<!--            </svg>-->
<!--            -->
<!--            <input type="text" name="query" ref="query" autocomplete="false"-->
<!--                   v-validate="'max:50'"-->
<!--                   v-model="fields.query"-->
<!--                   data-lm-key="query"-->
<!--                   :placeholder="'Поиск по имени, фамилии'"-->
<!--                   @focus="_handleFocusFieldSearchUsers"-->
<!--                   @blur="_handleBlurFieldSearchUsers"-->
<!--                   @input="_handleInputFieldSearchUsers"-->
<!--                   :class="['input__field', 'input__field_search', { 'error': (verrors.has('query')) }]">-->
<!--            <button class="btn btn_close" v-if="(fields.query)" @click="_handleClickCloseSearching"></button>-->
<!--          </div>-->
<!--        </template>-->
      </div>

      <div :class="['modal__content_body', { 'modal__content_body-empty': isEmpty }]" ref="wrapper">
        <template v-if="(isEmpty === false)">
          <div class="personal-list column">
            <mt-loadmore :top-method="_handleLoadTopUsers" @top-status-change="_handleTopStatusChangeUsers" ref="loadmore">
              <div v-infinite-scroll="_handleInfiniteScroll" infinite-scroll-disabled="infiniteDisabled" infinite-scroll-distance="200" :style="{ minHeight: height }">
                <user-card v-for="(user, key) in users" :key="`follower-user-${user.id}-${key}`" :user="user" :isCurrentUser="isCurrentUser">
                </user-card>

                <lm-m-loader v-if="loading && loadmore.topStatus !== 'loading'" :style="{ marginTop: '15px' }"></lm-m-loader>
              </div>

              <div slot="top" class="mint-loadmore-top">
                <template v-if="loadmore.topStatus === 'loading'"><lm-m-loader></lm-m-loader></template>
                <span v-if="loadmore.topStatus !== 'loading'" :class="['arrow', { 'rotate': loadmore.topStatus === 'drop' }]">↓</span>
              </div>
            </mt-loadmore>
          </div>
        </template>

        <template v-else>
          <div class="page__plug page__plug_feed_empty-list mt_1">
            <svg class="icon icon_size_lg icon_fill_blue mb_5">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_info" />
            </svg>
            <div class="heading heading_h5">Тут будут ваши коллеги</div>
            <div class="m-text_normal-2">Мы покажем их, как только на вас<br> кто-то подпишется</div>
          </div>
        </template>
      </div>
    </div>
  </mt-popup>
</template>

<script>
  import _ from 'lodash'
  import { Loadmore} from 'mint-ui'
  import { mapGetters, mapActions } from 'vuex'
  import { getDataAttribute, has } from '@utils'

  import UserCard from '@components/User/FollowersCard.vue'

  export default {
    components: { 'mt-loadmore': Loadmore, UserCard },
    metaInfo () {
      return {
        title: 'Подписчики'
      }
    },
    async asyncData ({ store, route }) {
      const { username } = route.params

      await store.dispatch('user/getUserByUsername', { username })
      await store.dispatch('user/getUserFollowersByUsername', {
        username,
        offset: 0
      })
    },
    data () {
      return {
        height: 0,
        modal: {
          value: false,
          loading: false
        },
        searchFocused: false,
        fields: { query: null },
        loadmore: { topStatus: null }
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
      username () {
        const { username } = this.$route.params
        return username
      },
      counters () {
        return this.user.counters
      },
    },
    beforeDestroy () {
      this.modal.value = false
    },
    created () {
      this.modal.value = true
    },
    mounted () {
      this.height = `${document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top - 108}px`
    },
    methods: {
      _handleInputPopup (value) {
        if (value === false) {
          this._handleClearModal()
        }
      },
      _handleClearModal () {
        this.modal = {
          value: false,
          loading: false
        }
      },
      ...mapActions({
        _clearFollowers: 'user/clearFollowers',
        _fetchFollowers: 'user/getUserFollowersByUsername'
      }),
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
          this._fetchFollowers({ username, fields, offset: 0 }).then(() => {
            this.$refs.loadmore.onTopLoaded();
          }).catch(() => console.log('Error loading'))
        }).catch(() => {})
      },
      _handleLoadTopUsers () {
        const { username, fields } = this
        this._fetchFollowers({ username, fields, offset: 0 }).then(() => {
          this.$refs.loadmore.onTopLoaded();
        }).catch(() => console.log('Error loading'))
      },
      _handleTopStatusChangeUsers (status) {
        this.loadmore.topStatus = status
      },
    }
  }
</script>

<style scoped>

</style>
