<template>
  <nav class="nav nav_categories nav_categories_feed">
    <div class="nav__list nav__list_categories">
      <router-link :to="{ name: 'board.castings.index' }" :class="['nav__item nav__item_categories']" activeClass="nav__item_categories_active">{{ $t('boardbox.boardbox-screen.castings') }}</router-link>
      <router-link :to="{ name: 'board.locations.index' }" :class="['nav__item nav__item_categories']" activeClass="nav__item_categories_active">{{ $t('boardbox.boardbox-screen.locations') }}</router-link>
      <router-link v-if="0" :to="{ name: 'board.sales.index' }" :class="['nav__item nav__item_categories']" activeClass="nav__item_categories_active">{{ $t('boardbox.boardbox-screen.sale') }}</router-link>
      <router-link v-if="0" :to="{ name: 'board.rents.index' }" :class="['nav__item nav__item_categories']" activeClass="nav__item_categories_active">{{ $t('boardbox.boardbox-screen.rent') }}</router-link>
      <router-link :to="{ name: 'users.index' }" :class="['nav__item nav__item_categories']" activeClass="nav__item_categories_active">{{ $t('unified-profile.professionals.professionals') }}</router-link>
    </div>
  </nav>
</template>

<script>
  import { isNative } from "@utils"

  export default {
    name: 'NavigationCategories',
    data () {
      return {
        isNative
      }
    }
  }
</script>

<style scoped>

</style>
