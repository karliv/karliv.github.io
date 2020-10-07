<template lang="html">
  <div class="page page_casting page_casting_inner">
    <div class="page__content">
      <div class="casting casting_inner">
        <div class="d-row justify_center align_start pt_12">
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
            </div>

            <div class="section_casting section_casting_big">
              <div class="d-markdown-layout">
                <div class="d-markdown-layout__title">Заголовок (текст)</div>
                <div class="d-markdown-layout__text d-markdown-layout__text_semibold">Полужирный текст</div>
                <div class="d-markdown-layout__text d-markdown-layout__text_italic">Курсивный текст</div>
                <strike class="d-markdown-layout__text d-markdown-layout__text_strike">Зачеркнутый текст</strike>
                <ul class="list d-markdown-layout__list d-markdown-layout__list_unordered">
                  <li class="list__item">Элемент списка</li>
                  <li class="list__item">Элемент списка</li>
                  <li class="list__item">Элемент списка</li>
                </ul>
                <ol class="list d-markdown-layout__list d-markdown-layout__list_ordered">
                  <li class="list__item">Элемент списка</li>
                  <li class="list__item">Элемент списка</li>
                  <li class="list__item">Элемент списка</li>
                </ol>
                <a href="#" class="d-link d-markdown-layout__link">Ссылка</a>
              </div>
            </div>
          </div>

          <div class="sidebar page__sidebar page__sidebar_casting">
            <div class="sidebar__content sidebar__content_casting_inner">
              <div class="section_casting section_casting_big bt_none pt_0">
                <div class="d-column mb_12">
                  <div class="heading heading_h2">1 400 000 ₽ / за проект</div>
                  <div class="color_gray-2">Старайтесь всегда поддерживайть актуальную информацию по гонорару</div>
                </div>
                <div class="d-column w_100">
                  <button class="d-btn d-btn_primary mb_3 w_100">Работа с откликами</button>
                  <button class="d-btn d-btn_outline w_100">Редактировать</button>
                </div>
              </div>

              <div class="section_casting section_casting_big">
                <div class="d-row">
                  <button class="d-btn d-btn_primary d-btn_share d-btn_share_active mr_2 flex_1">
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
                  <button class="d-btn d-btn_secondary_filled d-btn_favorites d-btn_favorites_active ml_2 flex_1">
                    <svg class="d-icon d-icon_size_sm mr_2">
                      <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-wait" />
                    </svg>
                    <div>В архив</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> 
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
