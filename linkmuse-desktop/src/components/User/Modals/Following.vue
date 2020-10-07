<template>
  <modal class="modal-center modal-abuse modal-tree-professions" v-model="value" @hide="_handleCloseModal" :header="false" :footer="false">
    <div class="modal-abuse-content">
      <div class="d-column align_center mt_8">
        <div class="heading heading_h4 mb_6">Аудитория</div>

        <div class="nav_categories d-row justify_center">
          <a href="javascript:void(0)" v-modal-link="{ name: 'partners.user', props: { username } }" @click="_handleCloseModal" class="nav__item d-text_bold color_gray-3">Коллеги <template v-if="user && counters">{{ counters['colleagues'] | numeral('0a') }}</template></a>
          <a href="javascript:void(0)" v-modal-link="{ name: 'followers.user', props: { username } }" @click="_handleCloseModal" class="nav__item d-text_bold color_gray-3 ml_6">Подписчики <template v-if="user && counters">{{ counters['followers'] | numeral('0a') }}</template></a>
          <a href="javascript:void(0)" class="nav__item nav__item_active d-text_bold color_gray-3 ml_6">Подписки <template v-if="user && counters">{{ counters['following'] | numeral('0a') }}</template></a>
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
            <user-card v-for="(user, key) in users" :key="`following-${user.id}-${key}`" :user="user" :isCurrentUser="isCurrentUser"
                       @changeFollow="_handleChangeFollowUser"></user-card>

            <lm-loader v-if="loading" :style="{ marginTop: '15px' }"></lm-loader>
          </div>
        </template>

        <template v-else-if="(isEmpty === true)">
          <div class="d-card d-card_feed-plug ta_center">
            <svg class="d-icon d-icon_size_64 fill_main mb_5">
              <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_info"/>
            </svg>
            <template v-if="(isCurrentUser === true)">
              <div class="heading heading_h5">Тут будут ваши подписки</div>
              <div class="m-text_normal-2">Мы покажем их, как только вы на кого-то подпишитесь</div>
            </template>
            <template v-else-if="(isCurrentUser === false)">
              <div class="heading heading_h5">Пользователь еще ни на кого не подписан.</div>
            </template>
          </div>
        </template>
      </div>
    </div>
  </modal>
</template>

<script>
  import _ from 'lodash'
  import { has, getDataAttribute } from '@utils'
  import { mapGetters, mapActions } from 'vuex'
  import UserCard from '@components/User/FollowingCard.vue'

  export default {
    props: {
      username: {
        type: String,
        required: true
      }
    },
    components: { UserCard },
    metaInfo: {
      title: 'Подписки'
    },
    data () {
      return {
        value: false,
        searchFocused: false,
        fields: { query: null },
        actionSheet: {
          actions: [],
          value: false,
          user: { id: null }
        },
        modal: {
          value: false,
          loading: false
        },
      }
    },
    computed: {
      ...mapGetters({
        authUser: 'auth/getAuthUser',
        user: 'user/getShowUserData',
        users: 'user/getFollowings',
        count: 'user/getCountFollowings',
        error: 'user/getFollowingsError',
        offset: 'user/getOffsetFollowings',
        loading: 'user/getFollowingsLoading',
        infiniteDisabled: 'user/getFollowingsInfiniteDisabled'
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
      this._fetchFollowings({ username, fields, offset: 0 })
    },
    methods: {
      ...mapActions({
        _addFollowing: 'user/createFollowing',
        _setFollowingFiled: 'user/setFollowingFiledById',
        _clearFollowings: 'user/clearFollowings',
        _destroyFollowingById: 'user/destroyFollowingById',
        _fetchFollowings: 'user/getUserFollowingsByUsername'
      }),
      _handleCloseModal ()  {
        this._handleClearModal().then(() => {
          this._clearFollowings()
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
        this._fetchFollowings({ username, fields, offset })
      },
      _handleApplyFilter () {
        this._clearFollowings().then(() => {
          const { username, fields } = this
          this._fetchFollowings({ username, fields, offset: 0 })
        }).catch(() => {})
      },
      _handleChangeFollowUser (userId, result) {
        //this._setFollowingFiled({ id: userId, key: 'following', value: result })
        this._destroyFollowingById(userId)

        let following = this.counters['following']
        this.$store.dispatch('user/setFieldShowUserData', {
          key: 'counters.following',
          value: (following - 1)      //result ? following + 1 : following - 1
        })
      },
      _handleUnsubscribeUser (userId) {
        const user = this.$store.getters['user/getFollowingById'](userId)
        if (user) {
          const backup = this._.cloneDeep(user)

          this._destroyFollowingById(userId)
          this._unsubscribeFolder(userId).then(() => {
            this.$notify({ type: 'success', title: 'Успешно', text: 'Вы отписались от пользователя.' })
          }).catch(() => {
            this._addFollowing(backup)
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
          })
        }
      },
      _unsubscribeFolder (userId) {
        return new Promise((resolve, reject) => {
          this.$api.post(`api/v1/follow`, { user_id: userId }).then(response => {
            let { data } = response
            resolve && resolve(userId)
          }).catch(error => {
            reject && reject(error)
            throw new Error('Error user follow.')
          })
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
