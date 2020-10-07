<template lang="html">
  <div class="page_declaration_creating">
    <div class="page__body page__body_declaration_creating">
      <div class="heading heading_h2 mb_0">Создание объявления</div>

      <div class="section_declaration_creating section_declaration_creating_big bt_none">
        <div class="d-row mb_6">
          <div class="d-select d-select_row w_100 justify_between">
            <label for="declaration__category" class="d-select__label d-select__label_required">Категория объявления</label>
            <div id="declaration__category" class="d-select__field w_100"></div>
          </div>
        </div>

        <div class="d-row mb_6">
          <div class="d-select d-select_row w_100 justify_between">
            <label for="casting__category" class="d-select__label d-select__label_required">Категория кастинга</label>
            <div class="column">
              <div id="casting__category" class="d-select__field d-select__field_required w_100"></div>
              <div class="d-select__notification d-select__notification_required">Выберите категорию</div>
            </div>
          </div>
        </div>

        <div class="d-row">
          <div class="d-input d-input_row w_100 justify_between">
            <label for="declaration__input" class="d-input__label">Заголовок</label>
            <div class="column">
              <input id="declaration__input" type="text" class="d-input__field d-input__field_required w_100" placeholder="Кастинг на телешоу ...">
              <div class="d-input__notification d-input__notification_required">Введите заголовок кастинга</div>
            </div>
          </div>
        </div>
      </div>

      <div class="section_declaration_creating section_declaration_creating_big">
        <div class="section_declaration_creating section_declaration_creating_small">
          <div class="d-select mb_6">
            <label for="select_country" class="d-select__label d-select__label_required mb_2">Страна</label>
            <div id="select_country" class="d-select__field"></div>
          </div>
          <div class="d-select mb_6">
            <label for="select_city" class="d-select__label d-select__label_required mb_2">Город</label>
            <div id="select_city" class="d-select__field"></div>
          </div>
          <div class="d-input d-input_multiple mb_6">
            <label for="casting__date" class="d-input__label mb_2">Укажите дату кастинга (с – по)</label>
            <div class="d-row">
              <input id="casting__date" type="text" class="d-input__field mr_2" placeholder="дд.мм.гг">
              <input type="text" class="d-input__field ml_2" placeholder="дд.мм.гг">
            </div>
            <div class="d-input__notification d-input__notification_required">Кастинг проходит раньше работы</div>
          </div>
          <div class="d-input d-input_multiple">
            <label for="work__date" class="d-input__label mb_2">Укажите дату работы (с – по)</label>
            <div class="d-row">
              <input id="work__date" type="text" class="d-input__field mr_2" placeholder="дд.мм.гг">
              <input type="text" class="d-input__field ml_2" placeholder="дд.мм.гг">
            </div>
            <div class="d-input__notification d-input__notification_required">Работа проходит раньше кастинга</div>
          </div>
        </div>
        <div class="section_declaration_creating section_declaration_creating_small">
          <div class="d-select mb_6">
            <label for="select__role" class="d-select__label mb_2">Роль</label>
            <div for="select__role" class="d-select__field"></div>
          </div>
          <div class="column mb_6">
            <label class="d-select__label mb_2">Пол</label>
            <div class="d-row">
              <div class="d-checkbox d-checkbox_button mr_2 w_100">
                <input id="chebox_gender_male" type="checkbox" class="d-checkbox__mark">
                <label for="chebox_gender_male" class="d-checkbox__label w_100">Мужской</label>
              </div>
              <div class="d-checkbox d-checkbox_button ml_2 w_100">
                <input id="chebox_gender_female" type="checkbox" class="d-checkbox__mark">
                <label for="chebox_gender_female" class="d-checkbox__label w_100">Женский</label>
              </div>
            </div>
          </div>
          <div class="d-input d-input_multiple">
            <label for="input_age" class="d-input__label mb_2">Возраст</label>
            <div class="d-row">
              <input id="input_age" type="text" class="d-input__field mr_2" placeholder="18">
              <input type="text" class="d-input__field ml_2" placeholder="26">
            </div>
          </div>
        </div>
        <div class="section_declaration_creating section_declaration_creating_small">
          <button class="d-btn d-btn_primary mb_3 w_100" disabled>Опубликовать</button>
          <button class="d-btn d-btn_outline w_100">Сохранить в черновик</button>
        </div>
      </div>

      <div class="section_declaration_creating section_declaration_creating_big">
        <div class="d-switch w_100 mb_6">
          <label for="work_payment" class="d-switch__label">Работа оплачивается</label>
          <input id="work_payment" type="checkbox" class="d-switch__mark">
          <label for="work_payment" class="d-switch__btn"></label>
        </div>
        <div class="d-row mb_6">
          <div class="d-input d-input_row justify_between w_100 mr_4">
            <label for="input_payment" class="d-input__label">Гонорар</label>
            <input id="input_payment" type="text" class="d-input__field max-w_654px" disabled placeholder="100 000">
          </div>
          <div class="d-select">
            <div class="d-select__field d-select__field_currency"></div>
          </div>
        </div>
        <div class="d-select d-select_row w_100 justify_between">
          <label for="casting__category" class="d-select__label">Период</label>
          <div id="casting__category" class="d-select__field"></div>
        </div>
      </div>

      <div class="section_declaration_creating section_declaration_creating_big">
        <div class="column w_100">
          <div class="d-input mb_6">
            <label for="casting__address" class="d-input__label mb_2">Адрес кастинга</label>
            <input id="casting__address" type="text" class="d-input__field" placeholder="ул. Большая садовая, д. 1">
          </div>
          <div class="d-textarea d-textarea_markdown mb_6">
            <label for="full-description" class="d-textarea__label mb_2">Подробное описание</label>
            <div id="full-description" class="d-textarea__field">

            </div>
          </div>
          <div class="d-input mb_6">
            <label for="casting__character" class="d-input__label mb_2">Типаж</label>
            <input id="casting__character" type="text" class="d-input__field" placeholder="Например: Егор Крид">
          </div>
          <div class="d-upload-zone">
            <label for="reference" class="d-upload-zone__label mb_2">Референс</label>
            <div id="reference" class="d-upload-zone__field d-upload-zone__field_required"></div>
            <div class="d-upload-zone__notification d-upload-zone__notification_required">максимальный размер файла – 5мб</div>
          </div>
          <button class="d-btn d-btn_secondary d-btn_small mt_6">
            <svg class="d-icon d-icon_size_xs mr_3">
              <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_upload" />
            </svg>
            <span class="d-btn__text">Добавить фото</span>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="css">
</style>
