<template>
  <div :class="['menu', { 'no-auth': !isAuthorized, top: top && banner.show, 'with-banner': banner.show }]">
    <div class="status-bar-bg" v-if="top && banner.show"></div>
    <a v-if="banner.show" :class="['lm-header-banner', { top: top }]" target="_blank"
       :href="banner.url">
      <span class="lm-header-banner--title" v-if="banner.title">{{ banner.title }}</span>
      <span class="lm-header-banner--subtitle">
        <template v-if="banner.subtitle">
          {{ banner.subtitle }}<span class="delimeter">/</span>
        </template>
        <template v-if="banner.author">
         {{ banner.author }}
        </template>
      </span>
    </a>
    <div class="nav menu__nav">
      <div class="nav__list nav__list_menu">
        <template v-if="(isAuthorized === true)">
          <router-link
            :to="{ name: 'user.show', params: { username: user && has(user, 'username') ? user['username'] : 'id1' } }"
            :class="['nav__item']" activeClass="nav__item_active">
            <svg class="icon icon_size_16 fill_gray-3">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_profile"/>
            </svg>
          </router-link>

          <router-link :to="{ name: 'notifications.index' }"
                       :class="['nav__item', { 'nav__item_status': hasUnreadNotifications }]"
                       activeClass="nav__item_active">
            <svg class="icon icon_size_16 fill_gray-3">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-notification"/>
            </svg>
          </router-link>
        </template>

        <template v-if="(isAuthorized === false)">
          <a :class="['nav__item']" href="javascript:void(0)" @click="_handleClickAccesGlobal">
            <svg class="icon icon_size_16 fill_gray-3">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_profile"/>
            </svg>
          </a>

          <a :class="['nav__item']" href="javascript:void(0)" @click="_handleClickAccesGlobal">
            <svg class="icon icon_size_16 fill_gray-3">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-notification"/>
            </svg>
          </a>
        </template>

        <router-link :to="{ name: 'board.castings.index' }" :class="['nav__item', { 'nav__item_active': isBoardPage }]"
                     activeClass="nav__item_active">
          <svg class="icon icon_size_16 fill_gray-3">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-home"/>
          </svg>
        </router-link>

        <template v-if="(isAuthorized === true)">
          <router-link :to="{ name: 'messages.index' }"
                       :class="['nav__item', { 'nav__item_status': hasUnreadMessages }]" activeClass="nav__item_active">
            <svg class="icon icon_size_16 fill_gray-3">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_chat"/>
            </svg>
          </router-link>
        </template>

        <template v-if="(isAuthorized === false)">
          <a :class="['nav__item']" href="javascript:void(0)" @click="_handleClickAccesGlobal">
            <svg class="icon icon_size_16 fill_gray-3">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_chat"/>
            </svg>
          </a>
        </template>

        <button class="nav__item" @click="_handleClickMoreNavigation">
          <svg class="icon icon_size_16 fill_gray-3 ">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-menu"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { has, on, off } from '@utils'

  let lastScrollY = 0

  export default {
    data () {
      return { has, top: true }
    },
    computed: {
      ...mapGetters({
        role: 'auth/getRole',
        banner: 'gtm/getBanner',
        user: 'auth/getAuthUser',
        isAuthorized: 'auth/isAuthorized',
        isRegistered: 'auth/isRegistered'
      }),
      hasUnreadMessages () {
        return (this.user && has(this.user, 'counters.unreadMessages')) ? this.user['counters']['unreadMessages'] : 0
      },
      hasUnreadNotifications () {
        return (this.user && has(this.user, 'counters.unreadNotifications')) ? this.user['counters']['unreadNotifications'] : 0
      }
    },
    asyncComputed: {
      isBoardPage: {
        get () {
          return (has(this.$route, 'meta.board') && this.$route.meta.board === true)
        },
        default: false
      }
    },
    mounted () {
      if (this.user) {
        this.$echo.private('user.' + this.user.id).listen('Message\\MessageWasReceived', ({ data }) => {
          this.$store.dispatch('auth/addCountUnreadMessages')
        })
      }

      lastScrollY = window.scrollY
      this.top = true

      on(window, 'scroll', this._handleScrollWindow)
    },
    beforeDestroy () {
      off(window, 'scroll', this._handleScrollWindow)
    },
    methods: {
      _handleClickMoreNavigation () {
        this.$root.$emit('open-modal-more-navigation')
      },
      _handleClickAccesGlobal () {
        this.$router.push({ name: 'register' })
      },
      _handleScrollWindow () {
        if (window.scrollY > 50) {
          this.top = lastScrollY > window.scrollY
          lastScrollY = window.scrollY
        } else {
          this.top = true
        }
      },
      freekino () {
        if (this.isAuthorized)
          window.location.href = `${process.env.FREEKINO_URL}/?ak=${this.$cookies.get('id_token')}`
        else {
          this.$localStorage.set('redirect.freekino', 'true')
          this.$router.push({ name: 'register' })
        }
      }
    }
  }
</script>

<style scoped lang="sass">
  .status-bar-bg
    bottom: 100%
    width: 100%
    height: 200000px
    position: fixed
    z-index: 9999
    background-color: #0063da
  .lm-header-banner
    &.top
      height: 62px
      overflow: visible
    position: relative
    height: 0
    display: flex
    overflow: hidden
    align-items: center
    box-sizing: border-box
    justify-content: center
    flex-direction: column
    color: #fff
    background-color: #0063da
    transition: height 0.3s ease

    &--title
      padding-bottom: 4px
      font-size: 14px
      font-weight: 600
      font-style: normal
      font-stretch: normal
      line-height: 1.29
      letter-spacing: 0.5px

    &--subtitle
      font-size: 12px
      font-weight: normal
      font-style: normal
      font-stretch: normal
      line-height: 1.33
      letter-spacing: 0.5px

      .delimeter
        padding: 0 8px
</style>
