<template lang="html">
  <div class="lm-m-div-container">
  <div class="page lm-m-page-profile">

    <div class="menu">
      <div class="nav menu__nav">
        <div class="nav__list nav__list_menu">
          <a href="#" class="nav__item">
            <svg class="icon icon_size_sm fill_gray-3">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_profile"/>
            </svg>
          </a>
          <a href="#" class="nav__item nav__item_active nav__item_status">
            <svg class="icon icon_size_sm fill_gray-3">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-notification"/>
            </svg>
          </a>
          <a href="#" class="nav__item">
            <svg class="icon icon_size_sm fill_gray-3">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-home"/>
            </svg>
          </a>
          <a href="#" class="nav__item">
            <svg class="icon icon_size_sm fill_gray-3">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_chat"/>
            </svg>
          </a>
          <button href="#" class="nav__item">
            <svg class="icon icon_size_sm fill_gray-3 ">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-menu"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="lm-m-wrap-profile mb_18">
      <div class="lm-m-wrap-photo-profile">
        <img src="/dist/img/photo.jpg" class="lm-m-photo-profile" alt="Фото профиля">
        <div class="lm-flex-end column lm-m-wrap-text-photo-profile">
          <span class="lm-m-h2-text-photo-profile">Евгений Белоусов</span>
          <span class="lm-m-h3-text-photo-profile">Санкт-Петербург, 25 лет</span>
        </div>
      </div>
      <div class="lm-m-wrap-three-buttons">
        <div class="lm-m-wrap-btn-profile">
          <button class="lm-m-btn-profile-guest">Позвонить</button>
          <button class="lm-m-btn-profile-point">
            <img src="/dist/img/icons/svg/navigation_lm-more-horizontal-white.svg" class="" alt="">
          </button>
        </div>
        <button class="lm-m-btn-profile-white">Написать сообщение</button>
      </div>
    </div>

    <div class="lm-m-wrap-profile mb_16">
      <div class="lm-m-wrap-content-profile">
        <div class="lm-m-wrap-text-profile m_b_16">
          <span class="lm-m-left-text-profile">Объявления</span>
          <span class="lm-m-number-profile">0</span>
        </div>
        <div class="lm-m-wrap-text-profile m_b_16">
          <span class="lm-m-left-text-profile">Отклики</span>
          <span class="lm-m-number-profile">0</span>
        </div>

        <div class="lm-m-profile-container p_t_16">

        <div class="lm-m-wrap-text-profile m_b_16">
          <span class="lm-m-left-text-profile">Коллеги</span>
          <span class="lm-m-number-profile">0</span>
        </div>
        <div class="lm-m-wrap-text-profile m_b_16">
          <span class="lm-m-left-text-profile">Подписчики</span>
          <span class="lm-m-number-profile">0</span>
        </div>
        <div class="lm-m-wrap-text-profile m_b_16">
          <span class="lm-m-left-text-profile">Подписки</span>
          <span class="lm-m-number-profile">0</span>
        </div>

        </div>
        <div class="lm-m-profile-container p_t_16">

        <div class="lm-m-wrap-text-profile">
          <span class="lm-m-left-text-profile color_main">Показать контакты</span>
          <div class="lm-m-icon-arrow-profile">
            <img src="/dist/img/icons/svg/controls_lm-dropdown.svg" alt="">
          </div>
        </div>
        </div>
      </div>
    </div>

    <div class="lm-m-wrap-profile">
      <div class="lm-m-wrap-content-profile">
        <div class="lm-m-wrap-alert-profile">
          <img class="lm-m-icon-alert" src="/dist/img/icons/svg/round_lm-info.svg" alt="">
          <span class="lm-m-center-h2-text-alert">Информации нет</span>
          <span class="lm-m-center-h3-text-alert pb_0">Евгений пока не заполнил профиль полностью</span>
        </div>
      </div>
    </div>

  </div>
  </div>

</template>

<script>
    export default {}
</script>

<style lang="css" scoped>
</style>
