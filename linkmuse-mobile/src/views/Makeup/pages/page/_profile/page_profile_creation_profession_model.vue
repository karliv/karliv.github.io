<template lang="html">
  <div class="lm-m-div-container">
  <div class="page lm-m-page-profile-settings">

    <div class="lm-m-page-content-profile-settings">
      <div class="lm-m-wrapper-profile-settings">
        <div class="lm-m-name-h1-profile-settings">
          Новая профессия
        </div>
        <div class="lm-m-name-h3-profile">
          Актер
        </div>

        <div class="lm-m-profile-container mt_24 p_b_24">

        <div class="lm-m-name-h2-profile">
          Основная информация
        </div>

        <div class="form__group form__group_declaration m_0">
          <label class="label input__label input__label_declaration">
            Профессия
            <span class="label__decoration label__decoration_declaration label__decoration_declaration_required">•</span>
          </label>
          <div class="lm-dropdown-wrap">
            <div class="lm-dropdown">
              <select id="form__select_declaration_profession" name="profession" class="">
                <option value="" selected="selected" disabled="disabled" hidden="hidden">Актер</option>
                <option value="1">Модель</option>
                <option value="2">Музыкант</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form__group form__group_declaration m_0">
          <label class="label input__label input__label_declaration">
            Направления
            <span class="label__decoration label__decoration_declaration label__decoration_declaration_required">•</span>
          </label>
          <div class="lm-dropdown-wrap">
            <div class="lm-dropdown">
              <select id="form__select_declaration_direction" name="direction" class="">
                <option value="" selected="selected" disabled="disabled" hidden="hidden">Массовка, Реклама, Выставки</option>
                <option value="1">Массовка</option>
                <option value="2">Реклама</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form__group form__group_declaration m_0">
          <label class="label input__label input__label_declaration">
            Служба в театрах
          </label>
          <div class="lm-dropdown-wrap">
            <div class="lm-dropdown">
              <select id="form__select_declaration_theater" name="theater" class="">
                <option value="" selected="selected" disabled="disabled" hidden="hidden">Большой театр</option>
                <option value="1">Театр 1</option>
                <option value="2">Театр 2</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form__group form__group_declaration">
          <label for="form__textarea_casting-description" class="label textarea__label textarea__label_declaration">
            Конкурсы и награды
          </label>
          <textarea id="form__textarea_casting-description" rows="13" name="description" placeholder="Голос 2018, январь - март 2018, финалист"
                    class="textarea form__textarea form__textarea_declaration lm-m-textarea-profile-settings" aria-required="false"
                    aria-invalid="false">
          </textarea>
        </div>

        </div>

        <div class="lm-m-profile-container">



        <div class="lm-m-empty-block"></div>

        <div class="lm-m-text-container">
          <div class="lm-m-blue-text-profile-settings">
            <a href="#">Добавить ссылку на видео</a>
          </div>
        </div>

        </div>
        <div class="lm-m-profile-container p_b_24">

        <div class="lm-m-name-h2-profile-settings">
          Параметры тела
        </div>

        <div class="form__group form__group_declaration">
          <label for="profile-settings__growth" class="label input__label input__label_declaration">
            Рост (см)
          </label>
          <input type="number" id="profile-settings__growth" name="growth" autocomplete="off"
                 placeholder="185" class="input form__input form__input_declaration"
                 aria-required="false" aria-invalid="false">
        </div>

        <div class="form__group form__group_declaration">
          <label for="profile-settings__weight" class="label input__label input__label_declaration">
            Вес (кг)
          </label>
          <input type="number" id="profile-settings__weight" name="weight" autocomplete="off"
                 placeholder="65" class="input form__input form__input_declaration"
                 aria-required="false" aria-invalid="false">
        </div>

        <div class="form__group form__group_declaration">
          <label for="profile-settings__footwear" class="label input__label input__label_declaration">
            Размер обуви
          </label>
          <input type="number" id="profile-settings__footwear" name="footwear" autocomplete="off"
                 placeholder="38" class="input form__input form__input_declaration"
                 aria-required="false" aria-invalid="false">
        </div>

        <div class="form__group form__group_declaration m_0">
          <label class="label input__label input__label_declaration">
            Размер одежды
          </label>
          <div class="lm-dropdown-wrap">
            <div class="lm-dropdown">
              <select id="form__select_declaration_payment_clothes" name="clothes" class="">
                <option value="" selected="selected" disabled="disabled" hidden="hidden">Не выбрано</option>
                <option value="1">48</option>
                <option value="2">50</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form__group form__group_declaration m_0">
          <label class="label input__label input__label_declaration">
            Телосложение
          </label>
          <div class="lm-dropdown-wrap">
            <div class="lm-dropdown">
              <select id="form__select_declaration_payment_body_type" name="body_type" class="">
                <option value="" selected="selected" disabled="disabled" hidden="hidden">Не выбрано</option>
                <option value="1">Спортивное</option>
                <option value="2">Худощавое</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form__group form__group_declaration m_0">
          <label class="label input__label input__label_declaration">
            Тип внешности
          </label>
          <div class="lm-dropdown-wrap">
            <div class="lm-dropdown">
              <select id="form__select_declaration_appearance" name="appearance" class="">
                <option value="" selected="selected" disabled="disabled" hidden="hidden">Не выбрано</option>
                <option value="1">Первый</option>
                <option value="2">Второй</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form__group form__group_declaration m_0">
          <label class="label input__label input__label_declaration">
            Цвет глаз
          </label>
          <div class="lm-dropdown-wrap">
            <div class="lm-dropdown">
              <select id="form__select_declaration_eye_color" name="eye_color" class="">
                <option value="" selected="selected" disabled="disabled" hidden="hidden">Не выбрано</option>
                <option value="1">Зеленые</option>
                <option value="2">Карие</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form__group form__group_declaration m_0">
          <label class="label input__label input__label_declaration">
            Цвет волос
          </label>
          <div class="lm-dropdown-wrap">
            <div class="lm-dropdown">
              <select id="form__select_declaration_hair_color" name="hair_color" class="">
                <option value="" selected="selected" disabled="disabled" hidden="hidden">Не выбрано</option>
                <option value="1">Черный</option>
                <option value="2">Белый</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form__group form__group_declaration m_0">
          <label class="label input__label input__label_declaration">
            Длина волос
          </label>
          <div class="lm-dropdown-wrap">
            <div class="lm-dropdown">
              <select id="form__select_declaration_hair_length" name="hair_length" class="">
                <option value="" selected="selected" disabled="disabled" hidden="hidden">Не выбрано</option>
                <option value="1">10</option>
                <option value="2">20</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form__group form__group_declaration form__group_declaration_switch">
          <div class="form__row form__row_declaration form__row_declaration_payment">
            <div class="switch switch_declaration mb_16">
              <label for="form__checkbox_for_hair" class="switch-label-settings">Окрашенные волосы</label>
              <input id="form__checkbox_for_hair" type="checkbox" class="switch__mark">
              <label for="form__checkbox_for_hair" class="switch__btn"></label>
            </div>
            <div class="switch switch_declaration mb_16">
              <label for="form__checkbox_for_tattoos" class="switch-label-settings">Татуировки</label>
              <input id="form__checkbox_for_tattoos" type="checkbox" class="switch__mark">
              <label for="form__checkbox_for_tattoos" class="switch__btn"></label>
            </div>
            <div class="switch switch_declaration">
              <label for="form__checkbox_for_piercing" class="switch-label-settings">Пирсинг</label>
              <input id="form__checkbox_for_piercing" type="checkbox" class="switch__mark">
              <label for="form__checkbox_for_piercing" class="switch__btn"></label>
            </div>
          </div>
        </div>

        </div>


    </div>

      <div class="page__footer page__footer_declaration page__footer_declaration_casting">
        <div class="form__row form__row_buttons form__row_buttons_declaration">
          <button class="button form__button_cancel form__button_cancel_declaration">
            Назад
          </button>
          <button class="button form__button form__button_publish form__button_publish_declaration">
            Опубликовать
          </button>
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
