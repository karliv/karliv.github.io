<template>
  <footer>
    <div class="wrapper">
      <ul :class="['footer--menu', { 'no-auth': !isAuthorized } ]" >
        <template v-if="isAuthorized">
          <li>
            <router-link :to="{ name: 'user.show', params: { username: (user && user.hasOwnProperty('username') ? (user.username) : 'id1') } }" class="footer--menu--profile">
              <i></i>
              <span>Профиль</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'notifications.index' }" :class="['footer--menu--notificate']">
              <i :class="{ new: hasUnreadNotifications }"></i>
              <span>Уведомления</span>
            </router-link>
          </li>
        </template>
        <template v-if="(!isAuthorized)">
          <li>
            <router-link :to="{ name: 'articles.index' }" :class="['footer--menu--blog']">
              <i></i>
              <span>Блог</span>
            </router-link>
          </li>
        </template>
        <li>
          <template v-if="isAuthorized && role === 'customer' && user && user.hasOwnProperty('username')">
            <router-link class="footer--menu--casting" :to="{ name: 'user.castings', params: { username: user.username } }">
              <i></i>
              <span>Кастинги</span>
            </router-link>
          </template>
          <template v-else>
            <router-link :to="{ name: 'castings.index' }" :class="['footer--menu--casting', { 'active': isCastingsPage } ]">
              <i></i>
              <span>Кастинги</span>
            </router-link>
          </template>
        </li>
        <template v-if="isAuthorized">
          <li>
            <router-link :to="{ name: 'messages.index' }" :class="['footer--menu--message']">
              <i :class="{ new: hasUnreadMessages }"></i>
              <span>Сообщения</span>
            </router-link>
          </li>
        </template>
        <li>
          <a href="javascript:void(0)" class="footer--menu--menu" @click="_handleClickMoreNavigation">
            <i></i>
            <span>Меню</span>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { has } from '@utils'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      role: 'auth/getRole',
      user: 'auth/getAuthUser',
      isAuthorized: 'auth/isAuthorized',
      isRegistered: 'auth/isRegistered'
    }),
    hasUnreadMessages () {
      return (this.user && this.user.hasOwnProperty('countUnreadMessages')) ? this.user['countUnreadMessages'] : 0
    },
    hasUnreadNotifications () {
      return (this.user && this.user.hasOwnProperty('countUnreadNotifications')) ? this.user['countUnreadNotifications'] : 0
    }
  },
  asyncComputed: {
    isCastingsPage: {
      get () {
        return ( has(this.$route, 'meta.castings') && this.$route.meta.castings === true )
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
  },
  methods: {
    _handleClickMoreNavigation () {
      this.$root.$emit('filtersIn')
    }
  }
}
</script>
