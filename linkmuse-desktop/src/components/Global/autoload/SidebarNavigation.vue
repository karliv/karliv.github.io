<template>
  <div class="d-card d-card_outline">
    <div class="d-nav d-nav_inline-bullet">
<!--      <router-link class="d-nav__item" :to="{ name: 'certifying.index' }">Верификация</router-link>-->
      <router-link class="d-nav__item" :to="{ name: 'board.castings.index' }">Кастинги</router-link>
      <router-link class="d-nav__item" :to="{ name: 'board.locations.index' }">Локации</router-link>
      <router-link class="d-nav__item" :to="{ name: 'users.index' }">Профессионалы</router-link>
      <router-link class="d-nav__item" :to="{ name: 'articles.index' }"> Блог</router-link>
      <a class="d-nav__item" target="_blank" href="https://itunes.apple.com/ru/app/linkmuse/id1309529188?mt=8">App Store</a>
      <a class="d-nav__item" target="_blank" href="https://play.google.com/store/apps/details?id=com.linkmuse&amp;hl=ru">Google play</a>

      <template v-if="isAuthorized === false">
        <a class="d-nav__item" href="/register">Регистрация</a>
        <a class="d-nav__item" href="/login">Вход</a>
      </template>

      <a class="d-nav__item" href="https://www.facebook.com/linkmuseofficial" target="_blank">Фейсбук</a>
      <a class="d-nav__item" href="https://vk.com/link_muse" target="_blank">Вконтакте</a>
      <a class="d-nav__item" href="https://www.instagram.com/linkmuse" target="_blank">Инстаграм</a>
      <a class="d-nav__item" href="mailto:help@linkmuse.com">Написать на почту</a>
      <a class="d-nav__item" href="https://hr.linkmuse.com" target="_blank">О нас</a>
    </div>
    <div class="d-copyright mt_3">© {{ $moment() | moment('Y') }} Linkmuse</div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'SidebarNavigation',
    computed: {
      ...mapGetters({
        isAuthorized: 'auth/isAuthorized',
      })
    }
  }
</script>

<style scoped>

</style>
