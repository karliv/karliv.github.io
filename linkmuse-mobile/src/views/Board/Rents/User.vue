<template>
  <div class="page page_feed">
    <template v-if="(isCurrentUser === false)">
      <div class="row">
        <router-link :to="{ name: 'user.show', params: { username } }">
          <div class="profile">
            <div class="profile__name">{{ user.fullname }}</div>
          </div>
        </router-link>
      </div>
    </template>

    <div class="page__header page__header_feed">
      <div class="row row_justify_between mb_3">
        <div class="heading_h4">{{ (isCurrentUser) ? 'Мои объявления' : 'Объявления'  }}</div>
        <template v-if="(isCurrentUser === true)">
          <router-link :to="{ name: 'board.castings.create' }" class="btn btn_round btn_primary btn_plus">
            <span>
              <svg class="icon icon_size_16 icon_fill_white">
                <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_plus" />
              </svg>
            </span>
          </router-link>
        </template>
      </div>
      <div class="row">
        <navigation-categories-user/>
      </div>
    </div>
    <div class="page__content page__content_feed">
      <div class="page__plug page__plug_feed_unavailable">
        <svg class="icon icon_size_lg icon_fill_blue mb_5">
          <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-wait" />
        </svg>
        <div class="heading heading_h5">Аренда пока недоступна</div>
        <div class="mb_3">Запишитесь на ранний доступ к разделу<br>и протестируйте его в числе первых</div>
        <a href="https://linkmuse.typeform.com/to/A3Rn4O" target="_blank" class="btn btn_primary">Записаться</a>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import NavigationCategoriesUser from '@components/Board/NavigationCategoriesUser.vue'

  export default {
    components: { NavigationCategoriesUser },
    metaInfo () {
      return {
        title: `${(this.isCurrentUser) ? 'Мои объявления: аренда' : 'Объявления: аренда'}`
      }
    },
    async asyncData ({ store, route }) {
      const { username } = route.params

      await Promise.all([
        store.dispatch('user/getUserByUsername', { username: String(route.params.username) })
      ])
    },
    computed: {
      ...mapGetters({
        role: 'auth/getRole',
        authUser: 'auth/getAuthUser',
        user: 'user/getShowUserData',
        isAuthorized: 'auth/isAuthorized'
      }),
      username () {
        const { username } = this.$route.params
        return username
      },
      isCurrentUser () {
        let { username } = this.$route.params
        return (this.authUser.username === String(username))
      }
    }
  }
</script>

<style scoped>

</style>
