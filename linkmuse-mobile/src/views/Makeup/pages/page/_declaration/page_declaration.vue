<template lang="html">
  <div class="page page_declaration">
    <!--
    Active classes for display notification:
      .form__notification_declaration_required

    Active classes for display required-fileds border:
      .form__select_declaration_required
      .form__input_declaration_required

      .form__select_declaration_disabled - active class for first disabled select
      .form__button_publish_declaration_disabled - active class for disable publish-button
    -->
    <div class="form form_declaration">
      <!-- header -->
      <div class="form__header form__header_declaration">
        <div class="form__title form__title_declaration">Новое объявление</div>
        <button class="button form__button form__button_close form__button_close_declaration">
          <span class="button__decoration button__decoration_x button__decoration_x_close button__decoration_x_close_declaration"></span>
        </button>
      </div>

      <div class="section form__section form__section_declaration">
        <div class="form__group form__group_declaration">
          <label for="form__select_declaration_type" class="label select__label select__label_declaration">
            Тип объявления
            <span class="label__decoration label__decoration_declaration label__decoration_declaration_required">♦</span>
          </label>
          <select name="" id="form__select_declaration_type" class="select form__select form__select_declaration form__select_declaration_disabled" disabled>
            <option value="Кастинг">Кастинг</option>
          </select>
        </div>
        <div class="form__group form__group_declaration">
          <label for="form__select_declaration_category" class="label select__label select__label_declaration">
            Категория
            <span class="label__decoration label__decoration_declaration label__decoration_declaration_required">♦</span>
          </label>
          <select name="" id="form__select_declaration_category" class="select form__select form__select_declaration form__select_declaration_required" required>
            <option value="Кастинг">Не выбрана</option>
          </select>
          <div class="form__notification form__notification_declaration form__notification_declaration_required">Выберите категорию</div>
        </div>
        <div class="form__group form__group_declaration">
          <label for="form__select_declaration_role" class="label select__label select__label_declaration">
            Роль
          </label>
          <select name="" id="form__select_declaration_role" class="select form__select form__select_declaration" required>
            <option value="Кастинг">Не выбрана</option>
          </select>
        </div>
      </div>

      <div class="section form__section form__section_declaration">
        <div class="form__group form__group_declaration">
          <label class="label input__label input__label_declaration">Пол</label>
          <div class="form__row form__row_declaration">
            <div class="form__column form__column_declaration">
              <input id="form__checkbox_declaration_gender_male" type="checkbox" name="gender" value="Мужской" class="form__checkbox form__checkbox_declaration form__checkbox_declaration_gender form__checkbox_declaration_gender_male">
              <label class="checkbox__label_declaration checkbox__label_declaration_gender" for="form__checkbox_declaration_gender_male">Мужской</label>
            </div>
            <div class="form__column form__column_declaration">
              <input id="form__checkbox_declaration_gender_female" type="checkbox" name="gender" value="Женский" class="form__checkbox form__checkbox_declaration form__checkbox_declaration_gender form__checkbox_declaration_gender_female">
              <label class="checkbox__label_declaration checkbox__label_declaration_gender" for="form__checkbox_declaration_gender_female">Женский</label>
            </div>
          </div>
        </div>
        <div class="form__group form__group_declaration">
          <div class="form__row form__row_declaration">
            <div class="form__column form__column_declaration">
              <label for="form__select_declaration_age_from" class="label select__label select__label_declaration">Возраст (от)</label>
              <select name="age_from" id="form__select_declaration_age_from" class="select form__select form__select_declaration">
                <option>От</option>
              </select>
            </div>
            <div class="form__column form__column_declaration">
              <label for="form__select_declaration_age_to" class="label select__label select__label_declaration">(до)</label>
              <select name="age_to" id="form__select_declaration_age_to" class="select form__select form__select_declaration">
                <option>До</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="section form__section form__section_declaration">
        <div class="form__group form__group_declaration">
          <label for="form__select_declaration_coutry" class="label input__label input__label_declaration">
            Страна
            <span class="label__decoration label__decoration_declaration label__decoration_declaration_required">♦</span>
          </label>
          <select name="form__select_country" id="form__select_declaration_coutry" class="select form__select form__select_declaration">
            <option>Не выбрана</option>
          </select>
        </div>
        <div class="form__group form__group_declaration">
          <label for="form__select_declaration_type" class="label input__label input__label_declaration">
            Город
            <span class="label__decoration label__decoration_declaration label__decoration_declaration_required">♦</span>
          </label>
          <select name="form__select_city" id="form__select_declaration_type" class="select form__select form__select_declaration">
            <option>Не выбран</option>
          </select>
        </div>
        <div class="form__group form__group_declaration">
          <label for="form__input_declaration_address" class="label input__label input__label_declaration">
            Адрес
          </label>
          <input type="text" name="" id="form__input_declaration_address" class="input form__input form__input_declaration" placeholder="ул. Большая садовая, д. 1">
        </div>
      </div>


      <div class="section form__section form__section_declaration">
        <div class="form__group form__group_declaration">
          <div class="form__row form__row_declaration">
            <div class="form__column form__column_declaration">
              <label for="form__select_declaration_casting-date_from" class="label select__label select__label_declaration">Дата кастинга (с)</label>
              <input id="form__select_declaration_casting-date_from" type="text" class="input form__input form__input_declaration form__input_declaration_from" placeholder="дд.мм.гг" pattern="[0-9]{8}" required>
            </div>
            <div class="form__column form__column_declaration">
              <label for="form__select_declaration_casting-date_to" class="label select__label select__label_declaration">(до)</label>
              <input id="form__select_declaration_casting-date_to" type="text" class="input form__input form__input_declaration form__input_declaration_to" placeholder="дд.мм.гг" pattern="[0-9]{8}">
            </div>
          </div>
        </div>
        <div class="form__group form__group_declaration">
          <div class="form__row form__row_declaration">
            <div class="form__column form__column_declaration">
              <label for="form__input_declaration_work-date_from" class="label select__label select__label_declaration">Дата работы (с)</label>
              <input id="form__input_declaration_work-date_from" type="text" class="input form__input form__input_declaration form__input_declaration_from" placeholder="дд.мм.гг" pattern="[0-9]{8}">
            </div>
            <div class="form__column form__column_declaration">
              <label for="form__input_declaration_work-date_to" class="label select__label select__label_declaration">(до)</label>
              <input id="form__input_declaration_work-date_to" type="text" class="input form__input form__input_declaration form__input_declaration_to" placeholder="дд.мм.гг" pattern="[0-9]{8}">
            </div>
          </div>
        </div>
      </div>

      <div class="section form__section form__section_declaration">
        <div class="form__group form__group_declaration">
          <label for="form__input_declaration_casting-title" class="label input__label input__label_declaration">
            Название кастинга
            <span class="label__decoration label__decoration_declaration label__decoration_declaration_required">♦</span>
          </label>
          <input id="form__input_declaration_casting-title" type="text" class="input form__input form__input_declaration form__input_declaration_required" placeholder="Кастинг на телешоу ...">
          <div class="form__notification form__notification_declaration form__notification_declaration_required">Выберите заголовок кастинга</div>
        </div>
        <div class="form__group form__group_declaration">
          <label for="form__textarea_casting-description" class="label textarea__label textarea__label_declaration">
            Описание кастинга
          </label>
          <textarea id="form__textarea_casting-description" class="textarea form__textarea form__textarea_declaration" rows="5" placeholder="Нам требуются актеры на ..."></textarea>
        </div>
        <div class="form__group form__group_declaration">
          <label for="form__input_declaration_character" class="label input__label input__label_declaration">
            Типаж
          </label>
          <input type="text" name="" id="form__input_declaration_character" class="input form__input form__input_declaration" placeholder="Например: Егор Крид">
        </div>
        <div class="section form__section form__section_upload form__section_upload_img form__section_upload_img_declaration">
          <div class="section__container section__container_upload section__container_upload_img section__container_upload_img_declaration">
            <button class="button form__button form__button_upload form__button_upload_img">
              <svg class="icon icon_upload icon_upload_img_declaration">
                <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_upload" />
              </svg>
              <div class="button__content button__content_upload button__content_upload_img">
                Загрузить фото <br /> (MAX 6)
              </div>
            </button>
          </div>
        </div>
        <button class="button form__button form__button_upload form__button_upload_img form__button_upload_img_additional">
          <svg class="icon icon_upload icon_upload_img icon_upload_img_additional">
            <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_upload" />
          </svg>
          <div class="button__content button__content_upload button__content_upload_img button__content_upload_img_additional">
            Добавить фото
          </div>
        </button>

      </div>

      <div class="section form__section form__section_declaration form__section_declaration_disabled">
        <div class="form__group form__group_declaration">
          <div class="form__row form__row_declaration form__row_declaration_payment">
<!--             <label for="form__checkbox_payment" class="label form__label form__label_declaration">Работа оплачивается</label>
            <div class="form__group form__group_declaration form__group_declaration_checkbox">
              <div class="checkbox form__checkbox form__checkbox_switch form__checkbox_switch_declaration">
                <input id="form__checkbox_payment" type="checkbox" class="checkbox__mark">
                <label for="form__checkbox_payment" class="checkbox__label"></label>
              </div>
            </div> -->
            <div class="switch switch_declaration">
              <label for="form__checkbox_payment" class="switch__label">Работа оплачивается</label>
              <input id="form__checkbox_payment" type="checkbox" class="switch__mark">
              <label for="form__checkbox_payment" class="switch__btn"></label>
            </div>
          </div>
        </div>

        <div class="form__group form__group_declaration">
          <div class="form__row form__row_declaration">
            <div class="form__column form__column_declaration">
              <label for="form__input_declaration_work-payment" class="label input__label input__label_declaration">
                Гонорар
                <span class="label__decoration label__decoration_declaration label__decoration_declaration_required">♦</span>
              </label>
              <input id="form__input_declaration_work-payment" type="text" class="input form__input form__input_declaration" placeholder="1000" pattern="^[ 0-9]+$">
            </div>
            <div class="form__column form__column_declaration form__column_declaration_payment form__column_declaration_payment_currency">
              <label for="form__select_period_payment" class="label select__label select__label_declaration">
                Валюта
              </label>
              <select name="" id="form__select_period_payment" class="select form__select form__select_declaration">
                <option>₽</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form__group form__group_declaration">
          <label for="form__select_period_payment" class="label select__label select__label_declaration">
            Период оплаты
            <span class="label__decoration label__decoration_declaration label__decoration_declaration_required">♦</span>
          </label>
          <select name="" id="form__select_period_payment" class="select form__select form__select_declaration">
            <option>Не выбран</option>
          </select>
        </div>

      </div>
      <section class="section form__section form__section_declaration">
        <button class="button form__button form__button_save form__button_save_declaration">Сохранить в черновик</button>
      </section>

      <div class="form__row form__row_buttons form__row_buttons_declaration">
        <button class="button form__button_cancel form__button_cancel_declaration">Отмена</button>
        <button class="button form__button form__button_publish form__button_publish_declaration form__button_publish_declaration_disabled">Опубликовать</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="css" scoped>
</style>
