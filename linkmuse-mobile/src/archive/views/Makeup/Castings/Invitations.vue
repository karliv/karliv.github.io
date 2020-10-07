<template>
  <div>
    <div class="lm-m-nav-menu">
      <div class="lm-m-nav-wrapper">
        <div class="lm-m-nav-menu--left">
          <router-link class="lm-m-nav-menu--item" :to="{ name: 'castings.index' }">
            <span class="text">Кастинги</span>
          </router-link>
          <router-link class="lm-m-nav-menu--item" :to="{ name: 'castings.invitations.index' }">
            <span class="text">Приглашения</span>
          </router-link>
        </div>
        <div class="lm-m-nav-menu--right"></div>
      </div>
    </div>
    <div class="wrapper no-padding">
      <div class="lm-m-casting--list invation row">
        <div class="lm-m-casting--list--item invation">
          <div class="lm-m-casting--list--item-head">
            <div class="lm-m-casting--list--item-top">
              <div class="left">
                <div class="lm-m-casting--list--item-top--type">
                  <div class="lm-casting--status film"></div>
                  <span>Короткометражный фильм</span>
                </div>
              </div>
            </div>
            <div class="lm-m-castings-list--item-name">Кастинг девушек БЛОНДИНОК для съёмок рекламы</div>
            <div class="lm-m-castings-list--item-info">
              <span class="text">Здравствуйте! Приглашаем вас на кастинг!!!! Ждем вас!!!!!1111 Здравствуйте! Приглашаем вас на кастинг!!!! Ждем вас!!!!!1111</span>
            </div>
            <div class="lm-m-castings-list--item-brif-wrap">
              <a href="javascript:void(0)" class="lm-m-castings-list--item-brif">
                <i class="lm-icon-square-download"></i>
                <span>БРИФ очень длинное название которое не влезет в одну строку.jpg</span>
              </a>
            </div>
            <div class="lm-m-casting--list--item-footer-tablet">
              <div class="left">
                <div class="lm-m-castings-list--item-info">
                  <span class="text">Адрес:</span>
                  <span class="count">Ул. Тверская, д. 6</span>
                </div>
                <div class="lm-m-castings-list--item-info">
                  <span class="text">Время:</span>
                  <span class="count">15:00</span>
                </div>
              </div>
              <div class="lm-m-castings-list--item-footer invation">
                <a href="javascript:void(0)" style="width: 160px" class="lm-link-button">отклонить</a>
                <a href="javascript:void(0)" style="width: 160px;" class="lm-primary-button">принять</a>
              </div>
            </div>
          </div>
        </div>
        <div class="lm-m-casting--list--item invation">
          <div class="lm-m-casting--list--item-head">
            <div class="lm-m-casting--list--item-top">
              <div class="left">
                <div class="lm-m-casting--list--item-top--type">
                  <div class="lm-casting--status film"></div>
                  <span>Короткометражный фильм</span>
                </div>
              </div>
            </div>
            <div class="lm-m-castings-list--item-name">Для рекламы мобильного приложения</div>
            <div class="lm-m-casting--list--item-footer-tablet">
              <div class="left">
              <div class="lm-m-castings-list--item-info">
                <span class="text">Адрес:</span>
                <span class="count">Ул. Тверская, д. 6</span>
              </div>
              <div class="lm-m-castings-list--item-info">
                <span class="text">Время:</span>
                <span class="count">15:00</span>
              </div>
              </div>
              <div class="lm-m-castings-list--item-footer invation">
                <a href="javascript:void(0)" style="width: 160px" class="lm-link-button">отклонить</a>
                <a href="javascript:void(0)" style="width: 160px;" class="lm-primary-button">принять</a>
              </div>
            </div>
          </div>

        </div>
        <div class="lm-m-casting--list--item invation">
          <div class="lm-m-casting--list--item-head">
            <div class="lm-m-casting--list--item-top">
              <div class="left">
                <div class="lm-m-casting--list--item-top--type">
                  <div class="lm-casting--status film"></div>
                  <span>Короткометражный фильм</span>
                </div>
              </div>
            </div>
            <div class="lm-m-castings-list--item-name">Для рекламы мобильного приложения</div>
            <div class="lm-m-casting--list--item-footer-tablet">
              <div class="left">
                <div class="lm-m-castings-list--item-info">
                  <span class="text">Адрес:</span>
                  <span class="count">Ул. Тверская, д. 6</span>
                </div>
                <div class="lm-m-castings-list--item-info">
                  <span class="text">Время:</span>
                  <span class="count">15:00</span>
                </div>
              </div>
              <div class="lm-m-castings-list--item-footer invation">
                <a href="javascript:void(0)" style="width: 160px" class="lm-link-button">отклонить</a>
                <a href="javascript:void(0)" style="width: 160px;" class="lm-primary-button">принять</a>
              </div>
            </div>
          </div>
        </div>
        <div class="lm-m-casting--list--item invation">
          <div class="lm-m-casting--list--item-head">
            <div class="lm-m-casting--list--item-top">
              <div class="left">
                <div class="lm-m-casting--list--item-top--type">
                  <div class="lm-casting--status film"></div>
                  <span>Короткометражный фильм</span>
                </div>
              </div>
            </div>
            <div class="lm-m-castings-list--item-name">Кастинг девушек БЛОНДИНОК для съёмок рекламы</div>
            <div class="lm-m-castings-list--item-info">
              <span class="text">Здравствуйте! Приглашаем вас на кастинг!!!! Ждем вас!!!!!1111 Здравствуйте! Приглашаем вас на кастинг!!!! Ждем вас!!!!!1111</span>
            </div>
            <div class="lm-m-castings-list--item-brif-wrap">
              <a href="javascript:void(0)" class="lm-m-castings-list--item-brif">
                <i class="lm-icon-square-download"></i>
                <span>БРИФ очень длинное название которое не влезет в одну строку.jpg</span>
              </a>
            </div>
            <div class="lm-m-casting--list--item-footer-tablet">
              <div class="left">
                <div class="lm-m-castings-list--item-info">
                  <span class="text">Адрес:</span>
                  <span class="count">Ул. Тверская, д. 6</span>
                </div>
                <div class="lm-m-castings-list--item-info">
                  <span class="text">Время:</span>
                  <span class="count">15:00</span>
                </div>
              </div>
              <div class="lm-m-castings-list--item-footer invation">
                <a href="javascript:void(0)" style="width: 160px" class="lm-link-button">отклонить</a>
                <a href="javascript:void(0)" style="width: 160px;" class="lm-primary-button">принять</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="loading">Loading</div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    metaInfo: {
      title: 'Приглашения'
    },
    asyncData ({store}) {
      // return store.dispatch('casting/fetchCastingsOnCatalog')
    },
    computed: {
      ...mapGetters({
        castings: 'casting/getCastingsOnCatalog',
        error: 'casting/getCastingsErrorOnCatalog',
        loading: 'casting/getCastingsLoadingOnCatalog'
      }),
    }
  }
</script>
