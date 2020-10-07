<template lang="html">
  <div>
    <div class="mb_48 cm-m-wrapper-content mt_5">
      <div class="cm-wrap-content ta_center cm-m-white">
        <div class="cm-m-text-h1 mb_2">
          25 - 27 <br> Октября
        </div>

        <div class="cm-m-text-h2 mb_0_5">
          Ежегодный кинорынок
        </div>

        <div class="cm-m-text-h3 cm-m-white">
          Место, где рождается кино
        </div>
      </div>
    </div>

    <div class="cm-m-wrapper-content">
      <div class="cm-wrap-content cm-m-index-content">
        <router-link tag="div" class="cm-m-link mb_9" :to="{ name: 'cinemarket.pitches' }">
          <div class="cm-m-link-icon cm-m-pitches-icon"></div>
          <div class="cm-m-link-item">
            <div class="cm-m-text-h3">Питчинги</div>
          </div>
        </router-link>
        <router-link tag="div" class="cm-m-link mb_9" :to="{ name: 'cinemarket.program' }">
          <div class="cm-m-link-icon cm-m-program-icon"></div>
          <div class="cm-m-link-item">
            <div class="cm-m-text-h3">Программа</div>
          </div>
        </router-link>
        <router-link tag="div" class="cm-m-link mb_9" :to="{ name: 'cinemarket.guest' }">
          <div class="cm-m-link-icon cm-m-guests-icon"></div>
          <div class="cm-m-link-item">
            <div class="cm-m-text-h3">Гости</div>
          </div>
        </router-link>
        <router-link tag="div" class="cm-m-link mb_9" :to="{ name: 'cinemarket.partners' }">
          <div class="cm-m-link-icon cm-m-partners-icon"></div>
          <div class="cm-m-link-item">
            <div class="cm-m-text-h3">Партнеры</div>
          </div>
        </router-link>
        <router-link tag="div" class="cm-m-link mb_9" :to="{ name: 'cinemarket.organizer' }">
          <div class="cm-m-link-icon cm-m-organization-icon"></div>
          <div class="cm-m-link-item">
            <div class="cm-m-text-h3">Организатор</div>
          </div>
        </router-link>
        <router-link tag="div" class="cm-m-link mb_9" :to="{ name: 'cinemarket.news' }">
          <div class="cm-m-link-icon cm-m-news-icon"></div>
          <div class="cm-m-link-item">
            <div class="cm-m-text-h3">Новости</div>
          </div>
        </router-link>
        <router-link tag="div" class="cm-m-link mb_9" :to="{ name: 'cinemarket.contacts' }">
          <div class="cm-m-link-icon cm-m-contacts-icon"></div>
          <div class="cm-m-link-item">
            <div class="cm-m-text-h3">Контакты</div>
          </div>
        </router-link>
        <router-link tag="div" class="cm-m-link mb_9" :to="{ name: 'index' }">
          <div class="cm-m-link-icon cm-m-logout-icon"></div>
          <div class="cm-m-link-item">
            <div class="cm-m-text-h3">Выйти</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: 'CineMarket'
    }
  }
</script>

<style lang="css" scoped>
</style>
