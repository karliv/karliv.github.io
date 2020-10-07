<template lang="html">
  <div class="cm-m-container">
    <div class="cm-m-page">

      <div class="cm-m-page-content">
        <div :class="['cm-m-wrapper-all-content', { 'menu_hide': menu.hide || menu.active }]">

          <div :class="['cm-m-wrap-menu', menu ]">
            <div class="cm-m-wrap-icon">
              <div class="cm-m-logo-menu">
                <img class="cm-m-logo-menu-img" src="/dist/img/icons/svg/logo_cinemarket.svg" alt="">
              </div>
              <a :class="['cm-m-icon-menu', menu ]" @click="_handleToggleMenu">
                <img v-if="!menu.active" class="cm-m-icon-img" src="/dist/img/icons/svg/icon_menu_cinemarket.svg"
                     alt="">
                <img v-if="menu.active" class="cm-m-icon-cross-img" src="/dist/img/icons/svg/cross_menu.svg" alt="">
              </a>
            </div>
            <transition name="fade"
                        v-on:after-leave="afterLeave"
                        v-on:before-leave="beforeLeave">
              <div class="cm-m-menu-cite" v-if="menu.active">
                <div class="cm-m-wrapper-content mb_32 ml_20">
                  <div class="cm-m-text-h1 mb_24 cm-m-white">
                    Программа
                  </div>
                  <div class="cm-m-text-h1 mb_24 cm-m-white">
                    Питчинги
                  </div>
                  <div class="cm-m-text-h1 mb_24 cm-m-white">
                    Гости
                  </div>
                  <div class="cm-m-text-h1 mb_24 cm-m-white">
                    Организатор
                  </div>
                  <div class="cm-m-text-h1 mb_24 cm-m-white">
                    Партнеры
                  </div>
                  <div class="cm-m-text-h1 mb_24 cm-m-white">
                    Новости
                  </div>
                  <div class="cm-m-text-h1 cm-m-white">
                    Контакты
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <div class="cm-m-wrapper-content mb_32">
            <div class="cm-m-text-h1 mb_16">
              Программа
            </div>

            <div class="cm-m-row">
              <nav class="cm-m-nav-date">
                <div class="cm-m-nav-list-date">
                  <a href="#" class="cm-m-nav-item-date active">25 октября</a>
                  <a href="#" class="cm-m-nav-item-date">26 октября</a>
                  <a href="#" class="cm-m-nav-item-date">27 октября</a>
                  <a href="#" class="cm-m-nav-item-date">28 октября</a>
                </div>
              </nav>
            </div>
          </div>

          <div class="cm-m-wrapper-content mb_32">
            <div class="cm-m-text-h2 mb_16">
              1-й день «Короткий метр»
            </div>

            <div class="cm-m-wrap-program mb_20">
              <div class="cm-m-container-time-program mr_20">
                <div class="cm-m-text-h3">
                  14:00
                </div>
                <div class="cm-m-text-h3">
                  –
                </div>
                <div class="cm-m-text-h3">
                  15:00
                </div>
              </div>
              <div class="cm-m-container-text-program">
                <div class="cm-m-text-h3 mb_4">
                  Пресс-открытие
                </div>
                <div class="cm-m-text-h4">
                  Отель
                </div>
              </div>
            </div>

            <div class="cm-m-wrap-program mb_20">
              <div class="cm-m-container-time-program mr_20">
                <div class="cm-m-text-h3">
                  15:00
                </div>
                <div class="cm-m-text-h3">
                  –
                </div>
                <div class="cm-m-text-h3">
                  16:00
                </div>
              </div>
              <div class="cm-m-container-text-program">
                <div class="cm-m-text-h3 mb_4">
                  Пресс-открытие
                </div>
                <div class="cm-m-text-h4">
                  Отель
                </div>
              </div>
            </div>

            <div class="cm-m-wrap-program mb_20">
              <div class="cm-m-container-time-program mr_20">
                <div class="cm-m-text-h3">
                  16:00
                </div>
                <div class="cm-m-text-h3">
                  –
                </div>
                <div class="cm-m-text-h3">
                  17:00
                </div>
              </div>
              <div class="cm-m-container-text-program">
                <div class="cm-m-text-h3 mb_4">
                  Public talk: Короткий метр в кино, рекламе и digital
                </div>
                <div class="cm-m-text-h4">
                  Отель
                </div>
              </div>
            </div>

            <div class="cm-m-wrap-program">
              <div class="cm-m-container-time-program mr_20">
                <div class="cm-m-text-h3">
                  18:00
                </div>
                <div class="cm-m-text-h3">
                  –
                </div>
                <div class="cm-m-text-h3">
                  19:00
                </div>
              </div>
              <div class="cm-m-container-text-program">
                <div class="cm-m-text-h3 mb_4">
                  Пресс-открытие
                </div>
                <div class="cm-m-text-h4">
                  Отель
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        menu: {
          active: false,
          hide: false
        }
      }
    },
    methods: {
      beforeLeave () {
        this.menu.hide = true
      },
      afterLeave () {
        this.menu.hide = false
      },
      _handleToggleMenu () {
        this.menu.active = !this.menu.active
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
