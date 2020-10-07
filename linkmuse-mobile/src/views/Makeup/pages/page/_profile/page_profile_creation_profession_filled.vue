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

        <div class="lm-m-profile-container p_b_24 mt_24">

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

        <div class="form__group form__group_declaration mb_-20">
          <div class="form__row form__row_declaration">
            <div class="lm-m-profile-wrap-game-age">
              <div class="lm-m-profile-wrap-text">
                <label class="label textarea__label textarea__label_declaration">
                  Игровой возраст
                  <span
                    class="label__decoration label__decoration_declaration label__decoration_declaration_required">•</span>
                </label>
              </div>

              <div class="lm-m-profile-profession-wrap-age">
                <input type="tel" min="1" maxlength="3" autocomplete="off" autocapitalize="sentences"
                       placeholder="От" id="form__select_declaration_game_age_from" name="ageFrom"
                       class="lm-input" aria-required="false" aria-invalid="false"
                       style="box-sizing: border-box; text-align: right;">
                <div class="lm-m-dash">-</div>
                <input type="tel" min="1" maxlength="3" autocomplete="off" autocapitalize="sentences"
                       placeholder="До" id="form__select_declaration_game_age_to" name="ageTo"
                       class="lm-input" aria-required="false" aria-invalid="false"
                       style="box-sizing: border-box; text-align: right;">
              </div>
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
        <div class="lm-m-profile-container p_b_24">

        <div class="lm-m-name-h2-profile-settings">
          Ставка
        </div>

        <div class="form__group form__group_declaration">
          <div class="form__row form__row_declaration">
            <div class="form__column form__column_declaration">
              <label for="form__input_declaration_work-payment" class="label input__label input__label_declaration">
                Стоимость работы (от)
              </label>
              <input id="form__input_declaration_work-payment" type="text" class="input form__input form__input_declaration" placeholder="Введите сумму" pattern="^[ 0-9]+$">
            </div>
            <div class="form__column form__column_declaration form__column_declaration_payment form__column_declaration_payment_currency">
              <label for="form__select_period_payment" class="label input__label input__label_declaration">
                Валюта
              </label>
              <select name="" id="form__select_period_payment" class="select form__select form__select_declaration">
                <option>₽</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form__group form__group_declaration m_0">
          <label class="label input__label input__label_declaration">
            Период оплаты
          </label>
          <div class="lm-dropdown-wrap">
            <div class="lm-dropdown">
              <select id="form__select_declaration_payment_period" name="payment_period" class="">
                <option value="" selected="selected" disabled="disabled" hidden="hidden">Не выбрано</option>
                <option value="1">Месяц</option>
                <option value="2">Год</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form__group form__group_declaration form__group_declaration_switch">
          <div class="form__row form__row_declaration form__row_declaration_payment">
            <div class="switch switch_declaration">
              <label for="form__checkbox_for_work_for_free" class="switch-label-settings">Работа бесплатно</label>
              <input id="form__checkbox_for_work_for_free" type="checkbox" class="switch__mark">
              <label for="form__checkbox_for_work_for_free" class="switch__btn"></label>
            </div>
          </div>
          <div class="switch__declaration_description">
            <span class="">Включите фильтр, если вы готовы работать в студенческих, короткометражных или некоммерческих проектах</span>
          </div>
        </div>

        </div>
        <div class="lm-m-profile-container">

        <div class="lm-m-name-h2-profile-settings">
          Портфолио
        </div>

        <label class="label input__label input__label_declaration">
          Фото
        </label>

        <div class="lm-m-empty-block"></div>

        <label class="label input__label input__label_declaration mt_24">
          Видео
        </label>

        <div class="lm-m-empty-block"></div>

        <div class="form__group form__group_declaration mb_8 mt_24">
          <label for="profile-settings__video" class="label input__label input__label_declaration">
            Ссылка на видео
            <span class="label__decoration label__decoration_declaration label__decoration_declaration_required">•</span>
          </label>
          <input type="text" id="profile-settings__video" name="video" autocomplete="off"
                 placeholder="Youtube, Rutube или Vimeo" class="input form__input form__input_declaration"
                 aria-required="false" aria-invalid="false">
        </div>

        <div class="form__group form__group_declaration mt_24 mb_0">
          <label class="label input__label input__label_declaration">
            Ссылка на видео
            <span class="label__decoration label__decoration_declaration label__decoration_declaration_required">•</span>
          </label>
          <input type="text" placeholder="Youtube, Rutube или Vimeo" id="form__input_declaration_address" name="address"
                 class="error input form__input form__input_declaration" aria-required="false" aria-invalid="true">
          <div class="form__notification form__notification_declaration form__notification_declaration_required">
            Добавьте ссылку на видеозапись
          </div>
        </div>

        <div class="lm-m-text-container">
          <div class="lm-m-blue-text-profile-settings">
            <a href="#">Добавить ещё</a>
          </div>
          <div class="lm-m-delete-text-profile-settings">
            <a href="#">Удалить</a>
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
              <label for="form__checkbox_for_hair" class="m-text_bold color_gray-2">Окрашенные волосы</label>
              <input id="form__checkbox_for_hair" type="checkbox" class="switch__mark">
              <label for="form__checkbox_for_hair" class="switch__btn"></label>
            </div>
            <div class="switch switch_declaration mb_16">
              <label for="form__checkbox_for_tattoos" class="m-text_bold color_gray-2">Татуировки</label>
              <input id="form__checkbox_for_tattoos" type="checkbox" class="switch__mark">
              <label for="form__checkbox_for_tattoos" class="switch__btn"></label>
            </div>
            <div class="switch switch_declaration">
              <label for="form__checkbox_for_piercing" class="m-text_bold color_gray-2">Пирсинг</label>
              <input id="form__checkbox_for_piercing" type="checkbox" class="switch__mark">
              <label for="form__checkbox_for_piercing" class="switch__btn"></label>
            </div>
          </div>
        </div>

        </div>
        <div class="lm-m-profile-container">

        <div class="lm-m-name-h2-profile-settings">
          Участие в проектах
        </div>

        <div class="form__group form__group_declaration mb_24 mt_8">
          <label for="profile-settings__project" class="label input__label input__label_declaration">
            Проект
            <span class="label__decoration label__decoration_declaration label__decoration_declaration_required">•</span>
          </label>
          <input type="text" id="profile-settings__project" name="project" autocomplete="off"
                 placeholder="Поле чудес" class="input form__input form__input_declaration"
                 aria-required="false" aria-invalid="false">
        </div>

        <div class="form__group form__group_declaration mb_0">
          <label for="form__textarea_profile-description" class="label textarea__label textarea__label_declaration">
            Описание
          </label>
          <textarea id="form__textarea_profile-description" rows="13" name="profile-description" placeholder="Художник-постановщик в 16-17 годах"
                    class="textarea form__textarea form__textarea_declaration lm-m-textarea-profile-settings" aria-required="false"
                    aria-invalid="false">
          </textarea>
        </div>

        <div class="lm-m-text-container">
          <div class="lm-m-blue-text-profile-settings">
            <a href="#">Добавить ещё</a>
          </div>
          <div class="lm-m-delete-text-profile-settings">
            <a href="#">Удалить</a>
          </div>
        </div>

        </div>
        <div class="lm-m-profile-container">

        <div class="lm-m-name-h2-profile-settings">
          Высшее образование
        </div>

        <div class="form__group form__group_declaration mb_24 mt_8">
          <label for="profile-settings__university" class="label input__label input__label_declaration">
            ВУЗ
            <span class="label__decoration label__decoration_declaration label__decoration_declaration_required">•</span>
          </label>
          <input type="text" id="profile-settings__university" name="university" autocomplete="off"
                 placeholder="МГИК" class="input form__input form__input_declaration"
                 aria-required="false" aria-invalid="false">
        </div>

        <div class="form__group form__group_declaration mb_24 mt_8">
          <label for="profile-settings__specialty" class="label input__label input__label_declaration">
            Специальность
          </label>
          <input type="text" id="profile-settings__specialty" name="specialty" autocomplete="off"
                 placeholder="Режиссура и драма" class="input form__input form__input_declaration"
                 aria-required="false" aria-invalid="false">
        </div>

        <div class="form__group form__group_declaration mb_24 mt_8">
          <label for="profile-settings__supervisor" class="label input__label input__label_declaration">
            Научный руководитель
          </label>
          <input type="text" id="profile-settings__supervisor" name="supervisor" autocomplete="off"
                 placeholder="Котт Александр Константинович" class="input form__input form__input_declaration"
                 aria-required="false" aria-invalid="false">
        </div>

        <div class="form__group form__group_declaration mb_-20">
          <div class="form__row form__row_declaration">
            <div class="lm-m-profile-wrap-game-age">
              <div class="lm-m-profile-wrap-text">
                <label class="label textarea__label textarea__label_declaration">
                  Года обучения (с – по)
                  <span
                    class="label__decoration label__decoration_declaration label__decoration_declaration_required">•</span>
                </label>
              </div>

              <div class="lm-m-profile-profession-wrap-age">
                <input type="tel" min="1" maxlength="4" autocomplete="off" autocapitalize="sentences"
                       placeholder="2015" id="form__select_declaration_game_age_training_from" name="ageFrom"
                       class="lm-input" aria-required="false" aria-invalid="false"
                       style="box-sizing: border-box; text-align: right;">
                <div class="lm-m-dash">-</div>
                <input type="tel" min="1" maxlength="4" autocomplete="off" autocapitalize="sentences"
                       placeholder="2019" id="form__select_declaration_game_age_training_to" name="ageTo"
                       class="lm-input" aria-required="false" aria-invalid="false"
                       style="box-sizing: border-box; text-align: right;">
              </div>
            </div>
          </div>
        </div>

        <div class="form__group form__group_declaration mb_0">
          <label for="form__textarea_profile-description-education" class="label textarea__label textarea__label_declaration">
            Описание
          </label>
          <textarea id="form__textarea_profile-description-education" rows="13" name="profile-description-education"
                    placeholder="Отучился на режиссера и актера. Имею красный диплом. Мой учебный фильм удостоился премии"
                    class="textarea form__textarea form__textarea_declaration lm-m-textarea-profile-settings" aria-required="false"
                    aria-invalid="false">
          </textarea>
        </div>

        <div class="lm-m-text-container">
          <div class="lm-m-blue-text-profile-settings">
            <a href="#">Добавить ещё</a>
          </div>
          <div class="lm-m-delete-text-profile-settings">
            <a href="#">Удалить</a>
          </div>
        </div>

        </div>
        <div class="lm-m-profile-container">

        <div class="lm-m-name-h2-profile-settings">
          Повышение квалификации
        </div>

        <div class="form__group form__group_declaration mb_24 mt_8">
          <label for="profile-settings__organization" class="label input__label input__label_declaration">
            Организация
            <span class="label__decoration label__decoration_declaration label__decoration_declaration_required">•</span>
          </label>
          <input type="text" id="profile-settings__organization" name="organization" autocomplete="off"
                 placeholder="МосКино" class="input form__input form__input_declaration"
                 aria-required="false" aria-invalid="false">
        </div>

        <div class="form__group form__group_declaration mb_24 mt_8">
          <label for="profile-settings__thing" class="label input__label input__label_declaration">
            Предмет
          </label>
          <input type="text" id="profile-settings__thing" name="thing" autocomplete="off"
                 placeholder="Режиссура игровых сцен" class="input form__input form__input_declaration"
                 aria-required="false" aria-invalid="false">
        </div>

        <div class="form__group form__group_declaration mb_24 mt_8">
          <label for="profile-settings__teacher" class="label input__label input__label_declaration">
            Преподаватель
          </label>
          <input type="text" id="profile-settings__teacher" name="teacher" autocomplete="off"
                 placeholder="Скопина Яна Алексеевна" class="input form__input form__input_declaration"
                 aria-required="false" aria-invalid="false">
        </div>

        <div class="form__group form__group_declaration mb_-20">
          <div class="form__row form__row_declaration">
            <div class="lm-m-profile-wrap-game-age">
              <div class="lm-m-profile-wrap-text">
                <label class="label textarea__label textarea__label_declaration">
                  Года обучения (с – по)
                  <span
                    class="label__decoration label__decoration_declaration label__decoration_declaration_required">•</span>
                </label>
              </div>

              <div class="lm-m-profile-profession-wrap-age">
                <input type="tel" min="1" maxlength="4" autocomplete="off" autocapitalize="sentences"
                       placeholder="2015" id="form__select_declaration_game_age_qualification_from" name="ageFrom"
                       class="lm-input" aria-required="false" aria-invalid="false"
                       style="box-sizing: border-box; text-align: right;">
                <div class="lm-m-dash">-</div>
                <input type="tel" min="1" maxlength="4" autocomplete="off" autocapitalize="sentences"
                       placeholder="2019" id="form__select_declaration_game_age_qualification_to" name="ageTo"
                       class="lm-input" aria-required="false" aria-invalid="false"
                       style="box-sizing: border-box; text-align: right;">
              </div>
            </div>
          </div>
        </div>

        <div class="form__group form__group_declaration mb_0">
          <label for="form__textarea_profile-description-qualification" class="label textarea__label textarea__label_declaration">
            Описание
          </label>
          <textarea id="form__textarea_profile-description-qualification" rows="13" name="profile-description-qualification"
                    placeholder="Игровые сцены в малых группах, в больших группах, массовые сцены"
                    class="textarea form__textarea form__textarea_declaration lm-m-textarea-profile-settings" aria-required="false"
                    aria-invalid="false">
          </textarea>
        </div>

        <div class="lm-m-text-container mb_0">
          <div class="lm-m-blue-text-profile-settings">
            <a href="#">Добавить ещё</a>
          </div>
          <div class="lm-m-delete-text-profile-settings">
            <a href="#">Удалить</a>
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
