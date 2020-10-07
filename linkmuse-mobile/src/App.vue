<template>
  <div id="app" data-server-rendered="true" :class="{ 'visibility-header': header, 'iPhoneX': iPhoneX }">
    <noscript>
      Please, enable JavaScript in your browser
    </noscript>

    <template v-if="(isMobile && (isAndroidOS || isiOS) && pageHasBannerApp)">
      <mt-popup v-model="showAppBadge" position="bottom" :modal="true" class="popup_app-badge" @input="_handleInputPopup">
        <template v-if="(isiOS === true)">
          <a target="_blank" href="https://itunes.apple.com/ru/app/linkmuse/id1309529188?mt=8" class="popup__content" @click="_handleClickCloseBannerResponsesSelected">
            <img class="img popup__img" src="/dist/img/icons/badges/badge-app-store.png" alt="app-store">
          </a>
        </template>
        <template v-else-if="(isAndroidOS === true)">
          <a target="_blank" href="https://play.google.com/store/apps/details?id=com.linkmuse&hl=ru" class="popup__content" @click="_handleClickCloseBannerResponsesSelected">
            <img class="img popup__img" src="/dist/img/icons/badges/badge-google-play.png" srcset="/dist/img/icons/badges/badge-google-play@2x.png 2x" alt="google-play">
          </a>
        </template>
      </mt-popup>
    </template>

    <lm-header v-if="(header === true)"></lm-header>
    <main :style="{ paddingTop: mainPaddingTop }">
    <template v-if="!isCinemarket">
        <router-view></router-view>
      </template>
      <template v-else>
        <cinemarket-layout>
          <router-view></router-view>
        </cinemarket-layout>
      </template>
    </main>

    <lm-modals/>

  </div>
</template>
<script>
  import _ from 'lodash'
  import { mapGetters } from 'vuex'
  import { has, omitEmpty } from '@utils'
  import { Indicator, Popup } from 'mint-ui'
  import LMHeader from '@views/includes/Header/Header.vue'
  import LMModals from '@views/includes/Footer/Modals.vue'
  import CinemarketLayout from '@components/CineMarket/Layout.vue';

  const MobileDetect = require('mobile-detect')
  let offset = 0

  const TIMEOUT_PRELOAD = 2000

  export default {
    metaInfo: {
      title: 'All',
      titleTemplate: '%s | Linkmuse',
      meta: [
        { name: 'og:type', content: 'website' },
        { name: 'og:image', content: 'https://s3.eu-central-1.amazonaws.com/linkmuse/upload/logo/logo_without_bottom_text_682.png' },
      ]
    },
    components: { 'lm-modals': LMModals, 'lm-header': LMHeader, Popup, 'cinemarket-layout': CinemarketLayout },
    data () {
      return {
        md: null,
        showAppBadge: false,
        iPhoneX: false,
      }
    },
    mounted () {
      console.log ('%c Hello, my dear friend.', 'background: #0063da; color: #fff; font-size: 18px')

      let ratio = window.devicePixelRatio || 1;
      let screen = {
        width : window.screen.width * ratio,
        height : window.screen.height * ratio
      }

      this.showAppBadge = this.$localStorage.get('banners.app', true, Boolean)
      this.md = new MobileDetect(window.navigator.userAgent)

      if (this.isiOS && screen.width >= 1125 && screen.height >= 2436) {
        this.iPhoneX = true
      }

      this.$root.$on('open-modal-fullscreen', (val) => {
        if (val) {
          offset = offset ? offset : window.scrollY
          document.body.classList.add('modal--fullscreen')
          document.documentElement.classList.add('modal--fullscreen')
        } else {
          document.body.classList.remove('modal--fullscreen')
          document.documentElement.classList.remove('modal--fullscreen')

          if (offset !== 0) {
            window.scrollTo(0, Number(offset))
            offset = 0
          }
        }
      })

      setTimeout(() => {
        this._preloadCatalog()
      }, TIMEOUT_PRELOAD)

      this.$echo.channel(`events`).listen('.casting.new', () => {
        this.$store.dispatch('board/casting/setHasNewCastingsData', true)
      })

      this.$echo.channel(`events`).listen('.location.new', () => {
        this.$store.dispatch('board/location/setHasNewLocationsData', true)
      })
    },
    computed: {
      ...mapGetters({
        role: 'auth/getRole',
        banner: 'gtm/getBanner',
        user: 'auth/getAuthUser',
        isAuthorized: 'auth/isAuthorized',
        isRegistered: 'auth/isRegistered'
      }),
      header () {
        return (!( has(this.$route, 'meta.header') && this.$route.meta.header === false ))
      },
      isMobile () {
        return (this.md && this.md.phone())
      },
      isAndroidOS () {
        return (this.md && this.md.os() === 'AndroidOS')
      },
      isiOS () {
        return (this.md && this.md.os() === 'iOS')
      },
      pageHasBannerApp () {
        return (!(has(this.$route, 'meta.bannerApp') && this.$route.meta.bannerApp === false))
      },
      isCinemarket () {
        return has(this.$route, 'meta.cineMarket') && this.$route.meta.cineMarket
      },
      mainPaddingTop () {
        return ( this.header ? this.banner.show ? '110px' : '40px' : 0 )
      }
    },
    methods: {
      _handleInputPopup (value) {
        if (value === false) {
          this._handleClickCloseBannerResponsesSelected()
        }
      },
      _handleClickCloseBannerResponsesSelected () {
        this.showAppBadge = false
        this.$localStorage.set('banners.app', false)
      },
      async _preloadCatalog () {
        await this._loadCastingModuleSources()
        await this._loadCastingModuleData()
        await this._loadUserModuleSources()
        await this._loadUserModuleData()
        await this._loadLocationModuleSources()
        await this._loadLocationModuleData()
      },
      _loadCastingModuleSources () {
        return new Promise((resolve, reject) => {
          const loadingSources = this.$store.getters['board/casting/getLoadingSources']
          const initializedSources = this.$store.getters['board/casting/getInitializedSources']

          if (initializedSources === false && loadingSources === false) {
            this.$store.dispatch('board/casting/getSources').then(() => {
              console.log('Loaded casting sources...')
              resolve && resolve(true)
            }).catch(() => { resolve && resolve(false) })
          } else resolve && resolve(false)
        })
      },
      _loadCastingModuleData () {
        return new Promise((resolve, reject) => {
          const loadingData = this.$store.getters['board/casting/getCastingsLoading']
          const initializedData = this.$store.getters['board/casting/getInitializedData']
          const defaultFields = this.$store.getters['board/casting/getCatalogDefaultFieldsFilter']

          const fields = omitEmpty(_.clone(defaultFields), { omitZero: false })

          if (loadingData === false && initializedData === false) {
            this.$store.dispatch('board/casting/fetchCastings', { fields, offset: 0 }).then(() => {
              this.$store.dispatch('board/casting/setInitializedCastingsData', true)
              console.log('Loaded castings...')
              resolve && resolve(true)
            }).catch((error) => {
              resolve && resolve(false)
            })
          } else resolve && resolve(false)
        })
      },
      _loadUserModuleSources () {
        return new Promise((resolve, reject) => {
          const loadingSources = this.$store.getters['user/profession/getLoadingSources']
          const initializedSources = this.$store.getters['user/profession/getInitializedSources']

          if (loadingSources === false && initializedSources === false) {
            this.$store.dispatch('user/profession/getSources').then(() => {
              console.log('Loaded user sources...')
              resolve && resolve(true)
            }).catch(() => { resolve && resolve(false) })
          } else resolve && resolve(false)
        })
      },
      _loadUserModuleData () {
        return new Promise((resolve, reject) => {
          const loadingData = this.$store.getters['user/getUsersLoading']
          const initializedData = this.$store.getters['user/getInitializedData']
          const defaultFields = this.$store.getters['user/getCatalogDefaultFieldsFilter']

          const fields = omitEmpty(_.clone(defaultFields), { omitZero: false })

          if (loadingData === false && initializedData === false) {
            this.$store.dispatch('user/fetchUsers', { fields, offset: 0 }).then(() => {
              this.$store.dispatch('user/setInitializedUsersData', true)
              console.log('Loaded users...')
              resolve && resolve(true)
            }).catch((error) => {
              resolve && resolve(false)
            })
          } else resolve && resolve(false)
        })
      },
      _loadLocationModuleSources () {
        return new Promise((resolve, reject) => {
          const loadingSources = this.$store.getters['board/location/getLoadingSources']
          const initializedSources = this.$store.getters['board/location/getInitializedSources']

          if (initializedSources === false && loadingSources === false) {
            this.$store.dispatch('board/location/getSources').then(() => {
              console.log('Loaded location sources...')
              resolve && resolve(true)
            }).catch(() => { resolve && resolve(false) })
          } else resolve && resolve(false)
        })
      },
      _loadLocationModuleData () {
        return new Promise((resolve, reject) => {
          const loadingData = this.$store.getters['board/location/getLocationsLoading']
          const initializedData = this.$store.getters['board/location/getInitializedData']
          const defaultFields = this.$store.getters['board/location/getCatalogDefaultFieldsFilter']

          const fields = omitEmpty(_.clone(defaultFields), { omitZero: false })

          if (loadingData === false && initializedData === false) {
            this.$store.dispatch('board/location/fetchLocations', { fields, offset: 0 }).then(() => {
              this.$store.dispatch('board/location/setInitializedLocationsData', true)
              console.log('Loaded locations...')
              resolve && resolve(true)
            }).catch((error) => {
              resolve && resolve(false)
            })
          } else resolve && resolve(false)
        })
      },
    }
  }
</script>

