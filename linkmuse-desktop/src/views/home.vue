<template>
  <div>
    <div class="lm-index-fixed">
      <section class="lm-header-section">
        <div class="lm-main-wrapper">
          <div class="lm-main-slider">
            <div :class="['lm-main-slider--item', 'active']">
              <div class="lm-header-content">
                <h2>Сообщество творческого роста</h2>
                <div class="desc">Все самое лучшее для тебя в одном месте: проекты, мероприятия,
                  нетворкинг,
                  профессиональные кастинги и многое другое
                </div>
                <div>
                  <router-link :to="{ name: 'register' }" class="lm-connect-button d-btn_s">Зарегистрироваться</router-link>
                </div>
              </div>
            </div>

<!--            <div :class="['lm-main-slider&#45;&#45;item', sliderStart ? slideVS ? 'active' : 'fadeout' : '']" v-show="sliderStart" style="display: none">-->
<!--              <div class="lm-header-content lm-vs">-->
<!--                <h2>Как пройти любой кастинг?</h2>-->
<!--                <div class="desc">Закажи профессиональное портфолио с качественными фотографиями и получай новые предложения по работе каждый день-->
<!--                </div>-->
<!--                <div>-->
<!--                  <router-link :to="{ name: 'certifying.index' }" class="lm-connect-button">Подробнее</router-link>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div :class="['lm-main-slider&#45;&#45;controls', slideVS ? 'active' : '']">-->
<!--              <a @click.prevent.stop="" href="javascript:void(0)"></a>-->
<!--              <a @click="switchSlide()" href="javascript:void(0)"></a>-->
<!--            </div>-->
          </div>
        </div>
        <a href="javascript:void(0)" class="lm-down-arrow" @click="_handleClickScrollToPageOne"></a>
      </section>
    </div>
    <div class="lm-index-static">
      <section id="lm-page-1" class="lm-page-1">
        <div class="lm-main-wrapper">
          <ul>
            <li>
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="72" height="72" rx="24" fill="#0063DA"/>
                <path d="M51 26H45.444C45.788 25.409 46 24.732 46 24C46 21.794 44.206 20 42 20C38.87 20 37.004 22.386 36 24.323C34.997 22.386 33.13 20 30 20C27.794 20 26 21.794 26 24C26 24.732 26.212 25.409 26.556 26H21C20.448 26 20 26.447 20 27V31C20 31.553 20.448 32 21 32H51C51.552 32 52 31.553 52 31V27C52 26.447 51.552 26 51 26ZM42 22C43.103 22 44 22.897 44 24C44 25.103 43.103 26 42 26H37.416C38.078 24.446 39.515 22 42 22ZM28 24C28 22.897 28.897 22 30 22C32.472 22 33.914 24.446 34.58 26H30C28.897 26 28 25.103 28 24Z"
                      fill="white"/>
                <path d="M49 34H38V52H48C48.552 52 49 51.552 49 51V34Z" fill="white"/>
                <path d="M34 34H23V51C23 51.552 23.448 52 24 52H34V34Z" fill="white"/>
              </svg>
              <span>Бесплатный сервис</span>
            </li>
            <li>
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="72" height="72" rx="24" fill="#FC2E5F"/>
                <path d="M44 20H21C20.447 20 20 20.448 20 21V47C20 47.552 20.447 48 21 48H37V40.644C35.752 39.099 35 37.136 35 35C35 30.038 39.037 26 44 26C44.338 26 44.671 26.022 45 26.059V21C45 20.448 44.553 20 44 20ZM31 40H24V38H31V40ZM31 35H24V33H31V35ZM33 30H24V28H33V30Z"
                      fill="white"/>
                <path d="M44 44C42.151 44 40.431 43.438 39 42.478V51.618L44 49.118L49 51.618V42.478C47.569 43.438 45.849 44 44 44Z"
                      fill="white"/>
                <path d="M44 42C47.866 42 51 38.866 51 35C51 31.134 47.866 28 44 28C40.134 28 37 31.134 37 35C37 38.866 40.134 42 44 42Z"
                      fill="white"/>
              </svg>
              <span>Надёжные объявления</span>
            </li>
            <li>
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="72" height="72" rx="24" fill="#20DBA9"/>
                <path d="M51 33H49V42H51V33Z" fill="white"/>
                <path d="M37.269 39.7192C36.468 40.0932 35.539 40.0952 34.731 39.7192L25 35.1782V43.0002C25 46.3642 29.832 49.0002 36 49.0002C42.168 49.0002 47 46.3642 47 43.0002V35.1772L37.269 39.7192Z"
                      fill="white"/>
                <path d="M51.423 29.0942L36.423 22.0942C36.155 21.9692 35.845 21.9692 35.577 22.0942L20.577 29.0942C20.225 29.2582 20 29.6112 20 30.0002C20 30.3892 20.225 30.7422 20.577 30.9062L35.577 37.9062C35.845 38.0312 36.155 38.0312 36.423 37.9062L51.423 30.9062C51.775 30.7422 52 30.3892 52 30.0002C52 29.6112 51.775 29.2582 51.423 29.0942Z"
                      fill="white"/>
              </svg>
              <span>Развитие и обучение</span>
            </li>
            <li>
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="72" height="72" rx="24" fill="#F5A623"/>
                <g clip-path="url(#clip0)">
                  <path d="M34.2143 47.5129C34.2542 47.1184 34.2074 46.7198 34.077 46.3452C33.9467 45.9707 33.7359 45.6291 33.4596 45.3446C33.1833 45.0601 32.8481 44.8395 32.4775 44.6982C32.1069 44.557 31.7099 44.4985 31.3143 44.5269C31.3862 44.1073 31.3588 43.6767 31.2343 43.2696C31.1098 42.8625 30.8917 42.4902 30.5975 42.1825C30.3032 41.8748 29.941 41.6404 29.5398 41.4979C29.1386 41.3554 28.7097 41.3088 28.2873 41.3619C28.2969 40.9901 28.231 40.6201 28.0935 40.2744C27.956 39.9287 27.7498 39.6146 27.4873 39.3509C27.2308 39.0943 26.9262 38.8908 26.5911 38.7519C26.2559 38.613 25.8966 38.5415 25.5338 38.5415C25.1709 38.5415 24.8117 38.613 24.4765 38.7519C24.1413 38.8908 23.8368 39.0943 23.5803 39.3509L23.0223 39.9089C22.6317 40.2981 22.3668 40.7953 22.2616 41.3365C22.1564 41.8777 22.2158 42.4379 22.4322 42.945C22.6485 43.4521 23.0119 43.8827 23.4754 44.1812C23.9388 44.4798 24.4811 44.6326 25.0323 44.6199C24.9796 45.0423 25.0264 45.471 25.1691 45.872C25.3117 46.273 25.5462 46.635 25.8538 46.9292C26.1613 47.2233 26.5334 47.4414 26.9404 47.5661C27.3473 47.6907 27.7777 47.7184 28.1973 47.6469C28.1705 48.0272 28.2238 48.4088 28.3537 48.7672C28.4836 49.1256 28.6871 49.4528 28.9512 49.7277C29.2154 50.0025 29.5342 50.219 29.8871 50.363C30.24 50.5071 30.6193 50.5755 31.0003 50.5639C31.0022 51.2088 31.2597 51.8266 31.7163 52.2819C32.1759 52.7415 32.7993 52.9997 33.4493 52.9997C34.0993 52.9997 34.7226 52.7415 35.1823 52.2819L35.7823 51.6819C36.1165 51.3503 36.3476 50.929 36.4478 50.469C36.5481 50.0089 36.5131 49.5297 36.3472 49.0891C36.1812 48.6485 35.8914 48.2652 35.5126 47.9856C35.1338 47.7059 34.6822 47.5418 34.2123 47.5129H34.2143Z"
                        fill="white"/>
                  <path d="M51 23H40.9C39.1242 22.9972 37.3989 23.5901 36 24.684C34.6011 23.5901 32.8758 22.9972 31.1 23H21C20.7348 23 20.4804 23.1054 20.2929 23.2929C20.1054 23.4804 20 23.7348 20 24V37C20 37.2652 20.1054 37.5196 20.2929 37.7071C20.4804 37.8947 20.7348 38 21 38C21.2652 38 21.5196 37.8947 21.7071 37.7071C21.8946 37.5196 22 37.2652 22 37V25H31.1C32.3211 24.9982 33.5133 25.3717 34.515 26.07L29.01 31.576C28.5686 32.0142 28.3064 32.6013 28.2746 33.2224C28.2428 33.8436 28.4438 34.4543 28.8381 34.9353C29.2325 35.4163 29.792 35.733 30.4074 35.8235C31.0228 35.9141 31.6498 35.772 32.166 35.425L39.272 30.688L48.542 39.957C48.679 40.094 48.7876 40.2566 48.8618 40.4355C48.9359 40.6145 48.974 40.8063 48.974 41C48.974 41.1937 48.9359 41.3855 48.8618 41.5645C48.7876 41.7434 48.679 41.906 48.542 42.043C48.2611 42.3111 47.8878 42.4606 47.4995 42.4606C47.1112 42.4606 46.7379 42.3111 46.457 42.043L43.707 39.293C43.5184 39.1109 43.2658 39.0101 43.0036 39.0123C42.7414 39.0146 42.4906 39.1198 42.3052 39.3052C42.1198 39.4906 42.0146 39.7414 42.0123 40.0036C42.01 40.2658 42.1108 40.5184 42.293 40.707L45.318 43.732C45.5946 44.0086 45.75 44.3838 45.75 44.775C45.75 45.1662 45.5946 45.5414 45.318 45.818C45.0414 46.0946 44.6662 46.25 44.275 46.25C43.8838 46.25 43.5086 46.0946 43.232 45.818L40.207 42.793C40.0184 42.6109 39.7658 42.5101 39.5036 42.5123C39.2414 42.5146 38.9906 42.6198 38.8052 42.8052C38.6198 42.9906 38.5146 43.2414 38.5123 43.5036C38.51 43.7658 38.6108 44.0184 38.793 44.207L41.042 46.457C41.2482 46.6632 41.3887 46.926 41.4456 47.212C41.5026 47.498 41.4735 47.7945 41.3619 48.064C41.2504 48.3335 41.0615 48.5639 40.8191 48.726C40.5767 48.8882 40.2916 48.9748 40 48.975C39.7348 48.975 39.4804 49.0804 39.2929 49.2679C39.1054 49.4554 39 49.7098 39 49.975C39 50.2402 39.1054 50.4946 39.2929 50.6821C39.4804 50.8697 39.7348 50.975 40 50.975C40.8129 50.9765 41.6004 50.6919 42.2244 50.171C42.8485 49.6501 43.2693 48.9261 43.413 48.126C43.6941 48.2024 43.9837 48.2434 44.275 48.248C44.7313 48.2484 45.1832 48.1589 45.6048 47.9845C46.0265 47.8101 46.4096 47.5543 46.7324 47.2318C47.0551 46.9092 47.3111 46.5262 47.4857 46.1047C47.6603 45.6831 47.7501 45.2313 47.75 44.775C47.75 44.666 47.729 44.561 47.719 44.454C48.5627 44.4066 49.3596 44.0507 49.958 43.454C50.6086 42.8018 50.974 41.9182 50.974 40.997C50.974 40.0758 50.6086 39.1922 49.958 38.54L49.945 38.527L51.719 36.7C51.9004 36.5123 52.0013 36.2611 52 36V24C52 23.7348 51.8946 23.4804 51.7071 23.2929C51.5196 23.1054 51.2652 23 51 23Z"
                        fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="32" height="32" fill="white" transform="translate(20 22)"/>
                  </clipPath>
                </defs>
              </svg>
              <span>Полезные связи</span>
            </li>
          </ul>
        </div>
      </section>
      <section class="lm-page-2">
        <div class="lm-main-wrapper">
          <div class="lm-flex-bettwen">
            <div class="left">
              <img src="/dist/img/main/lm-page-2.svg" alt="Ты талантлив, но тебе не предлагают работу?">
            </div>
            <div class="right">
              <h2>Находите и откликайтесь на кастинги</h2>
              <ul>
                <li><span>Новые объявления каждый день</span></li>
                <li><span>Верификация от профессионалов</span></li>
                <li><span>Обратная связь от агентов</span></li>
              </ul>
              <div>
                <router-link :to="{ name: 'register' }" class="lm-get-job-button">Найти кастинги</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="lm-page-3">
        <div class="lm-main-wrapper">
          <div class="lm-flex-bettwen">
            <div class="left">
              <h2>Публикуйте и продвигайте свои объявления</h2>
              <ul>
                <li>
                  <span>Работа с откликами и заявками</span>
                </li>
                <li>
                  <span>Услуги по продвижению</span>
                </li>
                <li>
                  <span>Поиск профессионалов</span>
                </li>
              </ul>
              <div>
                <router-link :to="{ name: 'register' }" class="lm-red-button">Добавить объявление</router-link>
              </div>
            </div>
            <div class="right">
              <img src="/dist/img/main/lm-li-4.svg" alt="Воплоти свой проект в жизнь">
            </div>
          </div>
        </div>
      </section>
      <section class="lm-page-5">
        <div class="lm-main-wrapper">
          <div class="lm-flex-bettwen">
            <div class="left">
              <img src="/dist/img/main/lm-page-5.svg" alt="Удобства во всём">
            </div>
            <div class="right">
              <h2>Удобство во всём</h2>
              <div class="desc">У тебя наверняка есть телефон, а у нас есть
                мобильное приложение для него
              </div>
              <div class="lm-app-links">
                <a target="_blank" href="https://itunes.apple.com/ru/app/linkmuse/id1309529188?mt=8" class="lm-link-app">
                  <svg class="d-icon lm-bg-main">
                    <use xlink:href="dist/web/img/icons/svg/sprite.svg#app_store" />
                  </svg>
                </a>
                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.linkmuse&hl=ru" class="lm-link-app">
                  <svg class="d-icon lm-bg-main">
                    <use xlink:href="dist/web/img/icons/svg/sprite.svg#google_play" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <footer>
      <div class="lm-main-wrapper">
        <div class="lm-flex-bettwen menu">
          <nav>
            <div class="title">Разделы</div>
            <ul>
              <li><router-link :to="{ name: 'users.index' }">Профессионалы</router-link></li>
              <li><router-link :to="{ name: 'board.castings.index' }">Кастинги</router-link></li>
              <li><router-link :to="{ name: 'articles.index' }">Блог</router-link></li>
            </ul>
          </nav>
          <nav>
            <div class="title">Ссылки</div>
            <ul>
              <li><a target="_blank" href="https://play.google.com/store/apps/details?id=com.linkmuse&amp;hl=ru">Скачать для Android</a></li>
              <li><a target="_blank" href="https://itunes.apple.com/ru/app/linkmuse/id1309529188?mt=8">Скачать для IOS</a></li>
              <li><router-link :to="{ name: 'register' }">Регистрация</router-link></li>
              <li><router-link :to="{ name: 'login' }">Вход</router-link></li>
              <li><a href="https://hr.linkmuse.com" target="_blank">О нас</a></li>
            </ul>
          </nav>
          <nav style="display: none">
            <div class="title">Услуги</div>
            <ul>
<!--              <li><router-link :to="{ name: 'certifying.index' }">Верификация</router-link></li>-->
            </ul>
          </nav>
          <nav>
            <div class="title">Контакты</div>
            <ul>
              <li><a href="mailto:help@linkmuse.com">Написать на почту</a></li>
            </ul>
          </nav>
        </div>
        <div class="lm-flex-bettwen">
          <div class="desc"><span>Сообщество творческих профессионалов</span><span>Linkmuse © 2019</span></div>
          <div class="social">
            <ul>
              <li class="vk"><a href="https://vk.com/link_muse" target="_blank"></a></li>
              <li class="fb"><a href="https://www.facebook.com/linkmuseofficial/" target="_blank"></a></li>
              <li class="instagram"><a href="https://www.instagram.com/linkmuse/" target="_blank"></a></li>
              <li class="youtube" style="display: none;"><a href="javascript:void(0)"></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Главная'
  },
  data () {
    return {
      slideVS: false,
      sliderTimer: false,
      sliderStart: false
    }
  },
  mounted () {
    this.initSlider()
  },
  beforeDestroy () {
    clearInterval(this.sliderTimer)
  },
  methods: {
    initSlider () {
      clearInterval(this.sliderTimer)
      this.sliderTimer = setInterval(this.switchSlide, 5000)
    },
    switchSlide () {
      this.initSlider()
      this.sliderStart = true
      this.slideVS = !this.slideVS
    },
    _handleClickScrollToPageOne () {
      this.$scrollTo('#lm-page-1');
    }
  }
}
</script>
