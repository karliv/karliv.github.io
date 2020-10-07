<template>
  <footer class="d-footer">
    <div class="d-footer__content">
      <div class="section d-footer__section">
        <div class="section__header section__header_d-footer">LINKMUSE</div>
        <div class="d-column">
          <div class="mt_2">Все самое лучшее для тебя в одном <br> месте: мероприятия, нетворкинг, <br>профессиональные кастинги и <br> многое другое</div>
          <div class="mt_2">© 2019 Linkmuse</div>
        </div>
      </div>
      <div class="section d-footer__section">
        <div class="section__header section__header_d-footer">Разделы</div>
        <div class="list d-footer__list">
          <div class="list__item">
            <router-link :to="{ name: 'users.index' }" class="d-link d-link_d-footer">Профессионалы</router-link>
          </div>
          <div class="list__item">
            <router-link :to="{ name: 'board.castings.index' }" class="d-link d-link_d-footer">Кастинги</router-link>
          </div>
          <div class="list__item">
            <router-link :to="{ name: 'board.locations.index' }" class="d-link d-link_d-footer">Локации</router-link>
          </div>
        </div>
      </div>
      <div class="section d-footer__section">
        <div class="section__header section__header_d-footer">Ссылки</div>
        <div class="list d-footer__list">
          <div class="list__item">
            <a href="https://itunes.apple.com/ru/app/linkmuse/id1309529188?mt=8" class="d-link d-link_d-footer" target="_blank">App Store</a>
          </div>
          <div class="list__item">
            <a href="https://play.google.com/store/apps/details?id=com.linkmuse&hl=ru" class="d-link d-link_d-footer" target="_blank">Google Play</a>
          </div>
          <div class="list__item">
            <a href="https://hr.linkmuse.com" class="d-link d-link_d-footer" target="_blank">О нас</a>
          </div>
          <template v-if="isAuthorized === false">
          <div class="list__item">
            <router-link :to="{ name: 'register' }" class="d-link d-link_d-footer">Регистрация</router-link>
          </div>
          <div class="list__item">
            <router-link :to="{ name: 'login' }" class="d-link d-link_d-footer">Вход</router-link>
          </div>
          </template>
        </div>
      </div>
      <div class="section d-footer__section">
        <div class="section__header section__header_d-footer">Контакты</div>
        <div class="list d-footer__list">
          <div class="list__item">
            <a href="https://www.facebook.com/linkmuseofficial" class="d-link d-link_d-footer" target="_blank">Фейсбук</a>
          </div>
          <div class="list__item">
            <a href="https://vk.com/link_muse" class="d-link d-link_d-footer" target="_blank">Вконтакте</a>
          </div>
          <div class="list__item">
            <a href="https://www.instagram.com/linkmuse" class="d-link d-link_d-footer"  target="_blank">Инстаграм</a>
          </div>
          <div class="list__item">
            <a href="mailto:help@linkmuse.com" class="d-link d-link_d-footer"  target="_blank">Написать на почту</a>
          </div>
        </div>
      </div>
      <div class="section d-footer__section" style="display: none;">
        <div class="section__header section__header_d-footer">Услуги</div>
        <div class="list d-footer__list">
          <div class="list__item">
<!--            <router-link :to="{ name: 'certifying.index' }" class="d-link d-link_d-footer">Верификация</router-link>-->
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'LinkMuseFooter',
    computed: {
      ...mapGetters({
        isAuthorized: 'auth/isAuthorized',
      })
    }
  }
</script>

<style scoped>

</style>
