<template lang="html">
  <div class="page page_feed">

<!--     <div class="nav nav_sidebar nav_sidebar_active">
      <div class="nav__content nav__content_sidebar nav__content_sidebar_active">
        <div class="row">
          <div class="column">
            <svg class="icon icon_logo mb_1">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-logo" />
            </svg>
            <ul class="nav__list nav__list_sidebar">
              <div>
                <a class="link" href="#"><li class="nav__item nav__item_sidebar">Мои объявления</li></a>
                <a class="link" href="#"><li class="nav__item nav__item_sidebar">Мои отклики</li></a>
              </div>

              <div>
               <a class="link" href="#"><li class="nav__item nav__item_sidebar">Верификация</li></a>
               <a class="link" href="#"><li class="nav__item nav__item_sidebar">Мои заказы</li></a>
             </div>

             <div>
              <a class="link" href="#"><li class="nav__item nav__item_sidebar">Таланты</li></a>
              <a class="link" href="#"><li class="nav__item nav__item_sidebar">Блог</li></a>
            </div>

            <div>
             <a class="link" href="#"><li class="nav__item nav__item_sidebar">Войти в аккаунт</li></a>
             <a class="link" href="#"><li class="nav__item nav__item_sidebar color_main">Создать аккаунт</li></a>
             <a class="link" href="#"><li class="nav__item nav__item_sidebar color_gray-3">Выйти</li></a>
           </div>
         </ul>
       </div>
     </div>
     <div class="row">
      <div class="language-switcher">
        <div class="language-switcher__label">Русский</div>
        <svg class="icon icon_size_sm">
          <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-language-rus" />
        </svg>
      </div>
    </div>
  </div>
</div> -->


<div class="page__header page__header_feed">
  <div class="row row_justify_between">
    <div class="heading_h4">Объявления</div>
    <a href="#" class="btn btn_round btn_primary btn_plus">
      <span>
        <svg class="icon icon_size_sm icon_fill_white">
          <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_plus" />
        </svg>
      </span>
    </a>
  </div>
  <div class="input input_search input_search_feed">
    <svg class="icon icon_size_sm icon_search icon_fill_lm-gray-3">
      <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_search" />
    </svg>
    <input class="input__field input__field_search" placeholder="Поиск">
    <button class="btn btn_close"></button>
  </div>
  <div class="row">
    <nav class="nav nav_categories nav_categories_feed">
      <div class="nav__list nav__list_categories">
        <a href="#" class="nav__item nav__item_categories nav__item_categories_active">Кастинги</a>
        <a href="#" class="nav__item nav__item_categories">Локации</a>
        <a href="#" class="nav__item nav__item_categories">Продажа</a>
        <a href="#" class="nav__item nav__item_categories">Аренда</a>
      </div>
    </nav>
  </div>
</div>

<div class="page__content page__content_feed">

  <div class="card declaration__card card_premium">
    <div class="row row_justify_between row_align_center">
      <div class="declaration__type">Полнометражный фильм</div>
      <button class="btn btn_options">
        <svg class="icon icon_size_sm">
          <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_options" />
        </svg>
      </button>
    </div>
    <a href="#" class="section declaration__section">
      <div class="heading_h5 declaration__heading">Требуется актер на роль самца в новом фильме</div>
      <div class="declaration__list declaration__list_parameters">
        <div>Актер, Модель, ...</div>
        <div>Мужчина, Женщина, ...</div>
        <div>20 - 24</div>
      </div>
    </a>
    <div class="section declaration__section">
      <div class="row">
        <div class="declaration__date"><span>Дата кастинга:</span> 20.06.19 - 30.06.19</div>
      </div>
      <div class="row">
        <div class="declaration__date"><span>Дата работы:</span> 12.07.19 - 24.09.19</div>
      </div>
      <div class="declaration__fee">1 400 000<span>₽</span></div>
    </div>
    <div class="section declaration__section">
      <div class="row row_justify_center">
        <button class="btn">откликнуться</button>
      </div>
    </div>
  </div>

  <div class="card declaration__card">
    <div class="row row_justify_between row_align_center">
      <div class="declaration__type">Полнометражный фильм</div>
      <button class="btn btn_options">
        <svg class="icon icon_size_sm">
          <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_options" />
        </svg>
      </button>
    </div>
    <a href="#" class="section declaration__section">
      <div class="heading_h5 declaration__heading">Требуется актер на роль самца в новом фильме</div>
      <div class="declaration__list declaration__list_parameters">
        <div>Актер, Модель, ...</div>
        <div>Мужчина, Женщина, ...</div>
        <div>20 - 24</div>
      </div>
    </a>
    <div class="section declaration__section">
      <div class="row">
        <div class="declaration__date"><span>Дата кастинга:</span> 20.06.19 - 30.06.19</div>
      </div>
      <div class="row">
        <div class="declaration__date"><span>Дата работы:</span> 12.07.19 - 24.09.19</div>
      </div>
      <div class="declaration__fee">1 400 000<span>₽</span></div>
    </div>
    <div class="section declaration__section">
      <div class="row row_justify_center">
        <button class="btn">откликнуться</button>
      </div>
    </div>
  </div>

  <div class="card declaration__card declaration__card_personal">
    <div class="row row_justify_between row_align_center">
      <div class="declaration__type">Ваше объявление</div>
      <button class="btn btn_options">
        <svg class="icon icon_size_sm">
          <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_options" />
        </svg>
      </button>
    </div>
    <a href="#" class="section declaration__section">
      <div class="heading_h5 declaration__heading">Нужны артисты на новое шоу</div>
      <div class="declaration__list declaration__list_parameters">
        <div>Актер</div>
        <div>Мужской</div>
        <div>до 26</div>
      </div>
    </a>
    <div class="section declaration__section">
      <div class="row">
       <div class="declaration__date"><span>Дата кастинга:</span> до 30.06.19</div>
     </div>
     <div class="row">
      <div class="declaration__date"><span>Дата работы:</span> с 22.07.19</div>
    </div>
    <div class="declaration__fee">1 400 000<span>₽</span></div>
  </div>
  <div class="section declaration__section">
    <div class="row row_justify_center">
      <a href="#" class="btn">отклики <div class="response__number">250</div> <div class="response__number_new">(+13)</div></a>
    </div>
  </div>
</div>

<div class="card declaration__card">
  <div class="row row_justify_between row_align_center">
    <div class="declaration__type">Показ</div>
    <button class="btn btn_options">
      <svg class="icon icon_size_sm">
        <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_options" />
      </svg>
    </button>
  </div>
  <a href="#" class="section declaration__section">
    <div class="heading_h5 declaration__heading">Требуется актер на роль самца в новом фильме</div>
    <div class="declaration__list declaration__list_parameters">
      <div>Актер, Модель</div>
      <div>Мужской</div>
      <div>20-24</div>
    </div>
  </a>
  <div class="section declaration__section">
    <div class="row">
      <div class="declaration__date"><span>Дата кастинга:</span> уточняется</div>
    </div>
    <div class="row">
     <div class="declaration__date"><span>Дата работы:</span> уточняется</div>
   </div>
   <div class="declaration__fee">Гонорар уточняется</div>
 </div>
 <div class="section declaration__section">
  <div class="row row_justify_center">
    <button class="btn" disabled>Отклик отправлен</button>
  </div>
</div>
</div>

<div class="card declaration__card">
  <div class="row row_justify_between row_align_center">
    <div class="declaration__type">Показ</div>
    <button class="btn btn_options">
      <svg class="icon icon_size_sm">
        <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_options" />
      </svg>
    </button>
  </div>
  <a href="#" class="section declaration__section">
    <div class="heading_h5 declaration__heading">Требуется актер на роль самца в новом фильме</div>
    <div class="declaration__list declaration__list_parameters">
      <div>Актер, Модель, ...</div>
      <div>Мужской</div>
      <div>от 18</div>
    </div>
  </a>
  <div class="section declaration__section">
    <div class="row">
      <div class="declaration__date"><span>Дата кастинга:</span> уточняется</div>
    </div>
    <div class="row">
     <div class="declaration__date"><span>Дата работы:</span> уточняется</div>
   </div>
   <div class="declaration__fee">Без гонорара</div>
 </div>
 <div class="section declaration__section">
  <div class="row row_justify_center">
    <button class="btn" disabled>Кастинг завершен</button>
  </div>
</div>
</div>
<button class="btn btn_icon btn_primary btn_filters">
  <svg class="icon icon_size_sm btn__icon_left icon_fill_white">
    <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_filter" />
  </svg>
  Фильтры
</button>

<!-- <div class="page__plug page__plug_feed_empty">По вашему запросу ничего не найдено</div> -->
<div class="page__plug page__plug_feed_unavailable">
  <svg class="icon icon_size_lg icon_fill_blue mb_5">
    <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-wait" />
  </svg>
  <div class="heading heading_h5">Локации пока недоступны</div>
  <div class="mb_4">Запишитесь на ранний доступ к разделу<br>и протестируйте его в числе первых</div>
  <button class="btn btn_primary">Записаться</button>
</div>

</div>

<a href="https://linkmuse.typeform.com/to/A3Rn4O" class="btn btn_research">Пройти опрос</a>

</div>
</template>

<script>
  export default {
  }
</script>

<style lang="css" scoped>
</style>
