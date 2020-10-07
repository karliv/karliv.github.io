<template>
  <nav class="nav nav_categories nav_categories_feed">
    <div class="nav__list nav__list_categories">
      <router-link :to="routeCastings" :class="['nav__item nav__item_categories']" activeClass="nav__item_categories_active">{{ $t('boardbox.boardbox-screen.castings') }} {{ castings || '' }}</router-link>
      <router-link :to="routeLocations" :class="['nav__item nav__item_categories']" activeClass="nav__item_categories_active">{{ $t('boardbox.boardbox-screen.locations') }} {{ locations || '' }}</router-link>
      <router-link v-if="0" :to="routeSales" :class="['nav__item nav__item_categories']" activeClass="nav__item_categories_active">{{ $t('boardbox.boardbox-screen.sale') }}</router-link>
      <router-link v-if="0" :to="routeRents" :class="['nav__item nav__item_categories']" activeClass="nav__item_categories_active">{{ $t('boardbox.boardbox-screen.rent') }}</router-link>
    </div>
  </nav>
</template>

<script>
  import { has, isNative } from '@utils'
  import { mapGetters } from 'vuex'

  export default {
    name: 'NavigationCategories',
    data () {
      return {
        isNative
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/getAuthUser',
        isAuthorized: 'auth/isAuthorized',
        isRegistered: 'auth/isRegistered',
        castings: 'board/getCastingsCount',
        locations: 'board/getLocationsCount',
      }),
      username () {
        let { username } = this.$route.params
        return username || ((this.isAuthorized && has(this.user, 'username')) ? this.user.username : null)
      },
      routeCastings () {
        const username = this.username
        return username ? { name: 'board.castings.user', params: { username } } : { name: 'board.castings.index' }
      },
      routeLocations () {
        const username = this.username
        return username ? { name: 'board.locations.user', params: { username } } : { name: 'board.locations.index' }
      },
      routeSales () {
        const username = this.username
        return username ? { name: 'board.sales.user', params: { username } } : { name: 'board.sales.index' }
      },
      routeRents () {
        const username = this.username
        return username ? { name: 'board.rents.user', params: { username } } : { name: 'board.rents.index' }
      }
    }
  }
</script>

<style scoped>

</style>
