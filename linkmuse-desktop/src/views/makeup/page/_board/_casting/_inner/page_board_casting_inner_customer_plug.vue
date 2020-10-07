<template lang="html">
  <div class="page page_casting page_casting_inner">
    <div class="page__content">
      <div class="casting casting_inner">
        <div class="casting__status casting__status_moderation"><span>На модерации</span></div>
        <!-- <div class="casting__status casting__status_refused"><span>Отклонён</span></div> -->
        <!-- <div class="casting__status casting__status_archive"><span>Архив</span></div> -->
        <!-- <div class="casting__status casting__status_draft"><span>Черновик</span></div> -->
        <div class="d-row justify_center mt_12">
          <div class="page__body page__body_casting_inner">
            <div class="section_casting section_casting_big bt_none pt_0">
              <div class="d-row">
                <ul class="d-breadcrumbs mb_3">
                  <li class="d-breadcrumbs__item"><a href="#">Кастинги</a></li>
                  <li class="d-breadcrumbs__item"><a href="#">Название кастинга</a></li>
                </ul>
              </div>
              <div class="d-row">
                <div class="heading heading_h2">Название кастинга</div>
              </div>
              <div class="d-row">
                <div class="color_gray-2">Описание кастинга, которое остается без ограничения в высоту, предоставляя автору полную свободу действий. Продублирую текст, чтобы была понятна ширина контентной области “Описание кастинга, которое остается без ограничения в высоту, предоставляя автору полную свободу действий”</div>
              </div>
            </div>

            <div class="section_casting section_casting_big">
              <div class="d-row mb_4">
                <div class="min-w_138px mr_3">Роль</div>
                <div class="fw_600 color_gray-1">Актёр, Модель</div>
              </div>
              <div class="d-row mb_4">
                <div class="min-w_138px mr_3">Пол</div>
                <div class="fw_600 color_gray-1">Мужской, Женский</div>
              </div>
              <div class="d-row mb_4">
                <div class="min-w_138px mr_3">Возраст</div>
                <div class="fw_600 color_gray-1">от 18 – до 26 лет</div>
              </div>
              <div class="d-row">
                <div class="min-w_138px mr_3">Категория</div>
                <div class="fw_600 color_gray-1">Полнометражный фильм</div>
              </div>
            </div>

            <div class="section_casting section_casting_big">
              <div class="d-row mb_4">
                <div class="min-w_138px mr_3">Адрес кастинга</div>
                <div class="fw_600 color_gray-1">Россия, Москва, ул. Мира, д. 34, офис 2004</div>
              </div>
              <div class="d-row mb_4">
                <div class="min-w_138px mr_3">Дата кастинга</div>
                <div class="fw_600 color_gray-1">с 20.06.19 – по 30.06.19</div>
              </div>
              <div class="d-row">
                <div class="min-w_138px mr_3">Дата работы</div>
                <div class="fw_600 color_gray-1">с 12.07.19 – по 24.09.19</div>
              </div>
            </div>

            <div class="section_casting section_casting_big">
              <div class="d-row mb_4">
                <div class="min-w_138px mr_3">Типаж</div>
                <div class="fw_600 color_gray-1">Парень со скулами</div>
              </div>
              <div class="d-row">
                <div class="min-w_138px mr_3">Референс</div>
                <div class="gallery gallery_casting">
                  <div class="gallery__content gallery__content_casting">
                    <a href="#">
                      <img src="/dist/web/img/2.png" alt="" class="d-img">
                    </a>
                    <a href="#">
                      <img src="/dist/web/img/3.png" alt="" class="d-img">
                    </a>
                    <a href="#">
                      <img src="/dist/web/img/4.png" alt="" class="d-img">
                    </a>
                    <a href="#">
                      <img src="/dist/web/img/2.png" alt="" class="d-img">
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="section_casting section_casting_big pb_0">
              <div class="d-row mb_4">
                <div class="min-w_138px mr_3">Автор</div>
                <div class="d-row w_100 justify_between">
                  <div class="preview profile__preview">
                    <div class="d-row align_center">
                      <img src="/dist/web/img/2.png" alt="" class="img preview__img preview__img_profile">
                      <div class="d-column">
                        <div class="preview__title preview__title_profile">Евгений Белоусов</div>
                        <div class="preview__role preview__role_profile">Кастинг-директор</div>
                      </div>
                    </div>
                  </div>
                  <button class="d-btn d-btn_secondary_filled">Пожаловаться</button>
                </div>
              </div>
            </div>
          </div>

          <div class="sidebar page__sidebar page__sidebar_casting">
            <div class="sidebar__content align_between">
              <div class="section_casting section_casting_big bt_none pt_0">
                <div class="d-column mb_12">
                  <div class="heading heading_h2">1 400 000 ₽ / за проект</div>
                  <div class="color_gray-2">Старайтесь всегда поддерживайть актуальную информацию по гонорару</div>
                </div>
                <div class="d-column w_100">
                  <button class="d-btn d-btn_primary mb_3 w_100" disabled>Отклик отправлен</button>
                  <button class="d-btn d-btn_outline w_100">Написать сообщение</button>
                </div>
              </div>

              <div class="section_casting section_casting_big pb_0">
                <div class="d-row">
                  <button class="d-btn d-btn_secondary_filled d-btn_share d-btn_share_active mr_2 flex_1">
                    <svg class="d-icon d-icon_size_sm mr_2">
                      <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_share" />
                    </svg>
                    <div>Поделиться</div>
                    <div class="d-btn__popup d-btn__popup_share d-btn__popup_active">
                      <a href="#">Вконтакте</a>
                      <a href="#">Фейсбук</a>
                      <a href="#">Твиттер</a>
                    </div>
                  </button>
                  <button class="d-btn d-btn_secondary_filled ml_2 flex_1">
                    <svg class="d-icon d-icon_size_sm mr_2">
                      <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-wait" />
                    </svg>
                    <div>В архив</div>
                  </button>
                </div>
              </div>
            </div>
            <div class="d-row position_absolute bottom_0 left_0">
              <div class="d-widget">
                <svg class="icon d-widget__icon icon_size_sm">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_eye" />
                </svg>
                <div class="widget__count">12</div>
              </div>
              <div class="d-widget">
                <svg class="icon d-widget__icon icon_size_sm">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_like" />
                </svg>
                <div class="widget__count">3</div>
              </div>
              <div class="d-widget">
                <svg class="icon d-widget__icon icon_size_sm">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_profile" />
                </svg>
                <div class="widget__count">7</div>
              </div>
            </div>
          </div>
        </div> 
      </div>

      <div class="feed feed_responses">
        <div class="d-row justify_center align_start">
          <div class="page__body page__body_casting_inner br_none">
            <div class="section_casting section_casting_big bt_none p_0">
              <div class="d-row align_end mb_3">
                <div class="heading heading_h2 mb_0">Работа с откликами</div>
                <div class="feed__counter feed__counter_responses ml_3">0</div>
              </div>
              <div class="d-row">
                <nav class="d-nav d-nav_categories d-nav_categories_feed d-nav_categories_responses">
                  <div class="d-nav__list d-nav__list_categories">
                    <div href="#" class="d-nav__item d-nav__item_categories d-nav__item_categories_active">Полученные <span></span></div>
                    <div href="#" class="d-nav__item d-nav__item_categories">Шорт-лист</div>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div class="sidebar page__sidebar page__sidebar_casting">
            <div class="sidebar__content align_between">

            </div>

          </div>

        </div>  
      </div>
      <div class="page__plug page__plug_waiting">
        <svg class="d-icon d-icon_size_64 mb_5 fill_main">
          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-wait"/>
        </svg>
        <div class="heading heading_h5">Ожидайте</div>
        <div>Первые отклики появятся в<br>ближайшее время</div>
      </div>
      <lm-main-footer class="footer-static grey"></lm-main-footer>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="css" scoped>
</style>
