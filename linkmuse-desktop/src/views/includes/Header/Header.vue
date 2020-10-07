<template>
  <header class="lm-header" id="header" :class="[{ top: !isIndex && top }]"> <!-- .lm-home-page  -->
    <template v-if="!isIndex">
      <a class="lm-header-banner" :class="[{ top: !isIndex && top }]" target="_blank" href="https://trening.linkmuse.com/?utm_source=trening_linkmuse_desktop&utm_campaign=site_trening_linkmuse">
        <div class="lm-wrapper">
          <div class="lm-header-left">
            <span class="lm-header-banner--title">Актёр 2.0. В действии</span>
            <span class="delimeter">/</span>
            <span class="lm-header-banner--subtitle">Спикер Рита Ленских</span>
            <span class="delimeter">/</span>
            <span class="lm-header-banner--author">Тренинг для актёров</span>
          </div>
          <div class="lm-header-right">
            <span>Узнать подробнее</span>
          </div>
        </div>
      </a>
    </template>

    <div class="lm-wrapper">
      <div class="lm-header-left">
        <router-link :to="{ name: 'board.castings.index' }" class="lm-header-logo">
          <svg class="d-icon">
            <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-logo" />
          </svg>
        </router-link>
        <ul class="lm-header-left-menu">

          <li><router-link :to="{ name: 'board.castings.index' }" class="lm-v3-header-link">Кастинги</router-link></li>
          <li><router-link :to="{ name: 'board.locations.index' }" class="lm-v3-header-link">Локации</router-link></li>

          <li>
            <router-link :to="{ name: 'users.index' }" class="lm-v3-header-link">Профессионалы</router-link>
          </li>

          <li>
            <router-link :to="{ name: 'articles.index' }" class="lm-v3-header-link">Блог</router-link>
          </li>
        </ul>
      </div>
      <div class="lm-header-right">
        <template v-if="showCreateBoard">
          <router-link :to="{ name: 'board.create' }" class="lm-v3-header-link">
            <div class="lm-v3-header-create-btn">
              <svg class="d-icon d-icon_size_16 lm-bg-main">
                <use xlink:href="dist/web/img/icons/svg/sprite.svg#controls_lm-plus-small" />
              </svg>
              <span>Добавить объявление</span>
            </div>
          </router-link>
        </template>

        <template v-if="(isAuthorized === true && user)">
          <router-link :to="{ name: 'notifications.index' }" class="lm-home-page-menu lm-home-page-menu-icon" exact-active-class="active">
            <div :class="['lm-v3-header-notification', {'new': hasUnreadNotifications }]">
              <svg class="d-icon d-icon_size_16">
                <use xlink:href="dist/web/img/icons/svg/sprite.svg#lm-notification" />
              </svg>
            </div>
          </router-link>

          <router-link :to="{ name: 'messages.index' }" class="lm-home-page-menu lm-home-page-menu-icon" exact-active-class="active">
            <div :class="['lm-v3-header-message', { 'new': hasUnreadMessages }]">
              <svg class="d-icon d-icon_size_16">
                <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-message" />
              </svg>
            </div>
          </router-link>

          <dropdown class="lm-v3-header-user lm-home-page-menu-icon" :caret="false" :menu-top="true">
            <div class="lm-home-page-menu">
              <div class="lm-v3-header-user-link">
                <span class="lm-profile-icon-avatar"><img :src="avatar" :alt="user.name"></span>
                <span class="lm-profile-icon-arrow">
                  <svg class="d-icon d-icon_size_20">
                    <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-chevron-bottom" />
                  </svg>
                </span>
              </div>
            </div>

            <template slot="dropdown">

              <li class="lm-admin-page-link" v-if="isAdmin">
                <a href="/admin" target="_blank">
                  <span>Админ-панель</span>
                </a>
              </li>

              <li class="lm-my-page-link">
                <router-link :to="{ name: 'user.show', params: { username: user && has(user, 'username') ? user['username'] : 'id1' } }">
                  <span>Профиль</span>
                </router-link>
              </li>

              <div class="cards-base-lm-divider"></div>

              <li class="lm-page-my-castings">
                <router-link :to="{ name: 'board.castings.user', params: { username: user.username } }">
                  <span>Мои объявления</span>
                </router-link>
              </li>

              <li class="lm-page-my-castings">
                <router-link :to="{ name: 'board.castings.responses.user', params: { username: user.username } }">
                  <span>Мои отклики</span>
                </router-link>
              </li>

              <div class="cards-base-lm-divider"></div>

              <li class="lm-setting-page-link">
                <router-link :to="{ name: 'settings.index' }">
                  <span>Настройки</span>
                </router-link>
              </li>

              <div class="cards-base-lm-divider"></div>

              <li class="lm-my-page-link">
                <a href="javascript:void(0)" @click="_handleClickLogout">
                  <span>Выйти</span>
                </a>
              </li>
            </template>
          </dropdown>
        </template>
        <template v-if="(isAuthorized === false)">
          <router-link :to="{ name: 'login' }" class="lm-v3-header-link">Вход</router-link>/
          <router-link :to="{ name: 'register' }" class="lm-v3-header-link">Регистрация</router-link>
        </template>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import { has, on, off, AVATAR } from '@utils'

let lastScrollY = 0

export default {
  data () {
    return {
      has,
      top: true
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/getAuthUser',
      isAuthorized: 'auth/isAuthorized'
    }),
    isCertifyingSpecialist () {
      return (this.user && this.user['certifying_specialist_status'] === 'activated')
    },
    isAdmin () {
      return (this.user && this.user.hasOwnProperty('isAdmin') && this.user['isAdmin'] === true)
    },
    hasUnreadMessages () {
      return (this.user && this.user.hasOwnProperty('countUnreadMessages')) ? this.user['countUnreadMessages'] : 0
    },
    hasUnreadNotifications () {
      return (this.user && this.user.hasOwnProperty('countUnreadNotifications')) ? this.user['countUnreadNotifications'] : 0
    },
    showCreateBoard () {
      return (!has(this.$route, 'meta.boardForm'))
    },
    avatar () {
      if (this.user && has(this.user, 'avatar.84x84')) {
        const { avatar: { '84x84': image } } = this.user
        return image || AVATAR
      } else return AVATAR
    },
    isIndex () {
      return this.$route.name === 'index'
    }
  },
  beforeDestroy () {
    off(window, 'scroll', this._handleScrollWindow)
  },
  mounted () {
    lastScrollY = window.scrollY
    this.top = true

    on(window, 'scroll', this._handleScrollWindow)
  },
  created () {},
  methods: {
    async _handleClickLogout () {
      try {
        let logout = await this.$auth.logout();

        let redirection = '/' // Default route
        this.$store.dispatch('auth/destroyToken', { reload: false }).then(res => {
          if (this.$route.query.redirect && authentication) {
            redirection = this.$route.query.redirect
          }
          this.$router.replace(redirection)
        }, err => {
          if (err) {}
          this.$router.replace(redirection)
        });

      } catch (error) {
        // Error in Logout
        console.log(error);
        this.$store.dispatch('auth/destroyToken', { reload: true })
      }
    },
    _handleScrollWindow () {
      if (this.isIndex) return

      if (window.scrollY > 50) {
        this.top = lastScrollY > window.scrollY
        lastScrollY = window.scrollY
      } else {
        this.top = true
      }
    }
  }
}
</script>
