<template>
  <mt-popup class="nav nav_sidebar" position="right" v-model="modal.value">
    <div class="nav__content nav__content_sidebar nav__content_sidebar_active">
      <div class="row">
        <div class="column">
          <router-link :to="{ name: 'board.castings.index' }" class="link mb_1" @click.native="_handleCloseModal">
            <svg class="icon icon_logo">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-logo" />
            </svg>
          </router-link>

          <ul class="nav__list nav__list_sidebar">
            <div>
              <template v-if="(isAuthorized === true && user)">
                <router-link :to="{ name: 'board.castings.user', params: { username: user.username } }" class="link" @click.native="_handleCloseModal">
                  <li class="nav__item nav__item_sidebar">{{ $t('menu.menu-page.my-ads') }}</li>
                </router-link>
                <router-link :to="{ name: 'board.castings.responses.user', params: { username: user.username } }" class="link" @click.native="_handleCloseModal">
                  <li class="nav__item nav__item_sidebar">{{ $t('menu.menu-page.my-responses') }}</li>
                </router-link>
              </template>
              <template v-if="(isAuthorized === false)">
                <a href="javascript:void(0)" class="link" @click="_handleCloseModal(); _handleClickAccessGlobal()">
                  <li class="nav__item nav__item_sidebar">{{ $t('menu.menu-page.my-ads') }}</li>
                </a>
                <a href="javascript:void(0)" class="link" @click="_handleCloseModal(); _handleClickAccessGlobal()">
                  <li class="nav__item nav__item_sidebar">{{ $t('menu.menu-page.my-responses') }}</li>
                </a>
              </template>
            </div>


            <!--
            <div>
              <template v-if="(isAuthorized === true)">
                <template v-if="isExecutor">
                  <router-link :to="{ name: 'certifying.executor.index' }" class="link" @click.native="_handleCloseModal">
                    <li class="nav__item nav__item_sidebar">{{ $t('menu.menu-page.verification') }}</li>
                  </router-link>
                  <router-link :to="{ name: 'certifying.executor.orders.index' }" class="link" @click.native="_handleCloseModal">
                    <li class="nav__item nav__item_sidebar">{{ $t('menu.talent-menu-page.my-orders') }}</li>
                  </router-link>
                </template>
                <template v-else-if="isCustomer">
                  <template v-if="(isCertifyingSpecialist === false)">
                    <router-link :to="{ name: 'certifying.customer.index' }" class="link" @click.native="_handleCloseModal">
                      <li class="nav__item nav__item_sidebar">{{ $t('menu.menu-page.verification') }}</li>
                    </router-link>
                  </template>
                  <template v-if="(isCertifyingSpecialist === true)">
                    <router-link :to="{ name: 'certifying.customer.orders.index' }" class="link" @click.native="_handleCloseModal">
                      <li class="nav__item nav__item_sidebar">{{ $t('menu.talent-menu-page.my-orders') }}</li>
                    </router-link>
                  </template>
                </template>
              </template>
              <template v-if="(isAuthorized === false)">
                <router-link :to="{ name: 'certifying.index' }" class="link" @click.native="_handleCloseModal">
                  <li class="nav__item nav__item_sidebar">{{ $t('menu.menu-page.verification') }}</li>
                </router-link>
              </template>
            </div>
            -->

            <div>
              <router-link :to="{ name: 'users.index' }" class="link" @click.native="_handleCloseModal">
                <li class="nav__item nav__item_sidebar">{{ $t('unified-profile.professionals.professionals') }}</li>
              </router-link>

              <router-link :to="{ name: 'articles.index' }" class="link" @click.native="_handleCloseModal">
                <li class="nav__item nav__item_sidebar">{{ $t('menu.menu-page.blog') }}</li>
              </router-link>

              <a href="https://hr.linkmuse.com" target="_blank" class="link" @click="_handleCloseModal">
                <li class="nav__item nav__item_sidebar">О нас</li>
              </a>
            </div>
            <div>
              <template v-if="(isAuthorized === false)">
                <router-link :to="{ name: 'login' }" class="link" @click.native="_handleCloseModal">
                  <li class="nav__item nav__item_sidebar">{{ $t('menu.menu-page.login-account') }}</li>
                </router-link>
                <router-link :to="{ name: 'register' }" class="link" @click.native="_handleCloseModal">
                  <li class="nav__item nav__item_sidebar color_main">{{ $t('menu.menu-page.create-account') }}</li>
                </router-link>
              </template>
              <template v-if="(isAuthorized === true)">
                <router-link :to="{ name: 'settings.index' }" class="link" @click.native="_handleCloseModal">
                  <li class="nav__item nav__item_sidebar">Настройки</li>
                </router-link>
                <a class="link" href="javascript:void(0)" @click="_handleClickLogout">
                  <li class="nav__item nav__item_sidebar color_gray-3">{{ $t('menu.create-customer-account.logout') }}</li>
                </a>
              </template>
            </div>
          </ul>
        </div>
      </div>
      <div class="row">
        <template v-if="($locale === 'en')">
          <button class="language-switcher" @click="_handleClickSetLang('ru')">
            <div class="language-switcher__label">English</div>
            <svg class="icon icon_size_16">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-language-eng" />
            </svg>
          </button>
        </template>
        <template v-if="($locale === 'ru')">
          <button class="language-switcher" @click="_handleClickSetLang('en')">
            <div class="language-switcher__label">{{ $t('menu.menu-page.language') }}</div>
            <svg class="icon icon_size_16">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-language-rus" />
            </svg>
          </button>
        </template>
      </div>
    </div>
  </mt-popup>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { redirect, expires } from '@utils'
import languages from '@/i18n/languages'
import { Toast, Popup, Indicator } from 'mint-ui'

export default {
  components: { 'mt-popup': Popup },
  data () {
    return {
      modal: {
        value: false
      }
    }
  },
  computed: {
    ...mapGetters({
      locale: 'auth/getLocale',
      user: 'auth/getAuthUser',
      isAuthorized: 'auth/isAuthorized',
      isRegistered: 'auth/isRegistered'
    }),
    isCertifyingSpecialist () {
      return (this.isCustomer && this.user && this.user['certifying_specialist_status'] === 'activated')
    }
  },
  mounted () {
    this.$root.$on('open-modal-more-navigation', () => {
      this.modal.value = true
    })
  },
  methods: {
    ...mapActions({
      _destroyToken: 'auth/destroyToken'
    }),
    _handleCloseModal () {
      this.modal.value = false
    },
    _handleClickLogout () {
      Indicator.open()

      this.$auth.logout().then(() => {
        let redirection = '/'

        this._destroyToken({ reload: false }).then(res => {
          if (this.$route.query.redirect) {
            redirection = this.$route.query.redirect
          }
          this._handleCloseModal()
          this.$router.replace(redirection, () => { Indicator.close()})
        }, (err) => {
          this._handleCloseModal()
          this.$router.replace(redirection, () => { Indicator.close()})
        })
      }).catch((error) => {
        console.log(error)
        this._handleCloseModal()
        this._destroyToken({ reload: true })
      })
    },
    _handleClickSetLang (locale) {
      this.$gtm.trackEvent({ event: 'CHANGE_LANGUAGE' });

      if (this.isAuthorized) {
        this._savedUserLocale(locale).then(() => {
          this._setLangToStorage(locale).then(() => { redirect() }).catch(() => {})
        }).catch(() => {})
      } else this._setLangToStorage(locale).then(() => { redirect() }).catch(() => {})
    },
    _setLangToStorage (lang) {
      return new Promise((resolve, reject) => {
        const { locale } = languages.find(l => lang === l.alternate || lang === l.locale) || {}
        if (!locale) {
          resolve && reject('Language not found')
          throw('Language not found')
        } else {
          this.$store.dispatch('auth/setLocale', lang)
          resolve && resolve(lang)
        }
      })
    },
    _savedUserLocale (locale) {
      return new Promise((resolve, reject) => {
        Indicator.open()

        this.$api.post('api/v2/users/locale', { locale }).then((response) => {
          const { data } = response

          Indicator.close()
          resolve && resolve(locale)
        }, (error) => {
          Indicator.close()
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

          reject && reject()

          throw new Error('Error saved locale')
        })
      })
    },
    _handleClickAccessGlobal () {
      this.$router.push({ name: 'register' })
    }
  }
}
</script>

<style scoped>

</style>
