<template lang="html">
  <div class="page page_ad">
    <!--
    Active classes for display notification:
      .form__notification_ad_required

    Active classes for display required-fileds border:
      .form__select_ad_required
      .form__input_ad_required

      .form__select_ad_disabled - active class for first disabled select
      .form__button_publish_ad_disabled - active class for disable publish-button
    -->
    <div class="form form_ad">
      <!-- header -->
      <div class="form__header form__header_ad">
        <div class="form__title form__title_ad">Новое объявление</div>
        <button class="button form__button form__button_close form__button_close_ad">
          <span class="button__decoration button__decoration_x button__decoration_x_close button__decoration_x_close_ad"></span>
        </button>
      </div>

      <div class="section form__section form__section_ad">
        <div class="form__group form__group_ad">
          <label for="form__select_ad_type" class="label select__label select__label_ad">
            Тип объявления
            <span class="label__decoration label__decoration_ad label__decoration_ad_required">♦</span>
          </label>
          <select name="" id="form__select_ad_type" class="select form__select form__select_ad form__select_ad_disabled" disabled>
            <option value="Кастинг">Кастинг</option>
          </select>
        </div>
        <div class="form__group form__group_ad">
          <label for="form__select_ad_category" class="label select__label select__label_ad">
            Категория
            <span class="label__decoration label__decoration_ad label__decoration_ad_required">♦</span>
          </label>
          <select name="" id="form__select_ad_category" class="select form__select form__select_ad" required>
            <option value="Кастинг">Не выбрана</option>
          </select>
        </div>
        <div class="form__group form__group_ad">
          <label for="form__select_ad_role" class="label select__label select__label_ad">
            Роль
          </label>
          <select name="" id="form__select_ad_role" class="select form__select form__select_ad" required>
            <option value="Кастинг">Не выбрана</option>
          </select>
        </div>
      </div>

      <div class="section form__section form__section_ad form__section_ad_disabled">
        <div class="form__group form__group_ad">
          <label class="label input__label input__label_ad">Пол</label>
          <div class="form__row form__row_ad">
            <div class="form__column form__column_ad">
              <input id="form__checkbox_ad_gender_male" type="checkbox" name="gender" value="Мужской" class="checkbox form__checkbox form__checkbox_ad form__checkbox_ad_gender form__checkbox_ad_gender_male">
              <label class="label checkbox__label checkbox__label_ad checkbox__label_ad_gender" for="form__checkbox_ad_gender_male">Мужской</label>
            </div>
            <div class="form__column form__column_ad">
              <input id="form__checkbox_ad_gender_female" type="checkbox" name="gender" value="Женский" class="checkbox form__checkbox form__checkbox_ad form__checkbox_ad_gender form__checkbox_ad_gender_female">
              <label class="label checkbox__label checkbox__label_ad checkbox__label_ad_gender" for="form__checkbox_ad_gender_female">Женский</label>
            </div>
          </div>
        </div>
        <div class="form__group form__group_ad">
          <div class="form__row form__row_ad">
            <div class="form__column form__column_ad">
              <label for="form__select_ad_age_from" class="label select__label select__label_ad">Возраст (от)</label>
              <select name="age_from" id="form__select_ad_age_from" class="select form__select form__select_ad">
                <option>От</option>
              </select>
            </div>
            <div class="form__column form__column_ad">
              <label for="form__select_ad_age_to" class="label select__label select__label_ad">(до)</label>
              <select name="age_to" id="form__select_ad_age_to" class="select form__select form__select_ad">
                <option>До</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="section form__section form__section_ad form__section_ad_disabled">
        <div class="form__group form__group_ad">
          <label for="form__select_ad_coutry" class="label input__label input__label_ad">
            Страна
            <span class="label__decoration label__decoration_ad label__decoration_ad_required">♦</span>
          </label>
          <select name="form__select_country" id="form__select_ad_coutry" class="select form__select form__select_ad">
            <option>Не выбрана</option>
          </select>
        </div>
        <div class="form__group form__group_ad">
          <label for="form__select_ad_type" class="label input__label input__label_ad">
            Город
            <span class="label__decoration label__decoration_ad label__decoration_ad_required">♦</span>
          </label>
          <select name="form__select_city" id="form__select_ad_type" class="select form__select form__select_ad">
            <option>Не выбран</option>
          </select>
        </div>
        <div class="form__group form__group_ad">
          <label for="form__input_ad_address" class="label input__label input__label_ad">
            Адрес
          </label>
          <input type="text" name="" id="form__input_ad_address" class="input form__input form__input_ad" placeholder="ул. Большая садовая, д. 1">
        </div>
      </div>


      <div class="section form__section form__section_ad form__section_ad_disabled">
        <div class="form__group form__group_ad">
          <div class="form__row form__row_ad">
            <div class="form__column form__column_ad">
              <label for="form__select_ad_casting-date_from" class="label select__label select__label_ad">Дата кастинга (с)</label>
              <input id="form__select_ad_casting-date_from" type="text" class="input form__input form__input_ad form__input_ad_from" placeholder="дд.мм.гг" pattern="[0-9]{8}" required>
            </div>
            <div class="form__column form__column_ad">
              <label for="form__select_ad_casting-date_to" class="label select__label select__label_ad">(до)</label>
              <input id="form__select_ad_casting-date_to" type="text" class="input form__input form__input_ad form__input_ad_to" placeholder="дд.мм.гг" pattern="[0-9]{8}">
            </div>
          </div>
        </div>
        <div class="form__group form__group_ad">
          <div class="form__row form__row_ad">
            <div class="form__column form__column_ad">
              <label for="form__input_ad_work-date_from" class="label select__label select__label_ad">Дата работы (с)</label>
              <input id="form__input_ad_work-date_from" type="text" class="input form__input form__input_ad form__input_ad_from" placeholder="дд.мм.гг" pattern="[0-9]{8}">
            </div>
            <div class="form__column form__column_ad">
              <label for="form__input_ad_work-date_to" class="label select__label select__label_ad">(до)</label>
              <input id="form__input_ad_work-date_to" type="text" class="input form__input form__input_ad form__input_ad_to" placeholder="дд.мм.гг" pattern="[0-9]{8}">
            </div>
          </div>
        </div>
      </div>

      <div class="section form__section form__section_ad form__section_ad_disabled">
        <div class="form__group form__group_ad">
          <label for="form__input_ad_casting-title" class="label input__label input__label_ad">
            Заголовок кастинга
            <span class="label__decoration label__decoration_ad label__decoration_ad_required">♦</span>
          </label>
          <input id="form__input_ad_casting-title" type="text" class="input form__input form__input_ad" placeholder="Кастинг на телешоу ...">
        </div>
        <div class="form__group form__group_ad">
          <label for="form__textarea_casting-description" class="label textarea__label textarea__label_ad">
            Описание кастинга
          </label>
          <textarea id="form__textarea_casting-description" class="textarea form__textarea form__textarea_ad" rows="5" placeholder="Нам требуются актеры на ..."></textarea>
        </div>
        <div class="form__group form__group_ad">
          <label for="form__input_ad_character" class="label input__label input__label_ad">
            Типаж
          </label>
          <input type="text" name="" id="form__input_ad_character" class="input form__input form__input_ad" placeholder="Например: Егор Крид">
        </div>
        <div class="section form__section form__section_upload form__section_upload_img form__section_upload_img_ad">
          <div class="section__container section__container_upload section__container_upload_img section__container_upload_img_ad">
            <button class="button form__button form__button_upload form__button_upload_img">
              <svg class="icon icon_upload icon_upload_img_ad">
                <use xlink:href="/dist/img/icons/_ad/sprite.svg#icon_upload" />
              </svg>
              <div class="button__content button__content_upload button__content_upload_img">
                Загрузить фото <br /> (MAX 6)
              </div>
            </button>
          </div>
        </div>
        <button class="button form__button form__button_upload form__button_upload_img form__button_upload_img_additional">
          <svg class="icon icon_upload icon_upload_img icon_upload_img_additional">
            <use xlink:href="/dist/img/icons/_ad/sprite.svg#icon_upload" />
          </svg>
          <div class="button__content button__content_upload button__content_upload_img button__content_upload_img_additional">
            Добавить фото
          </div>
        </button>

      </div>

      <div class="section form__section form__section_ad form__section_ad_disabled">
        <div class="form__group form__group_ad">
          <div class="form__row form__row_ad form__row_ad_payment">
            <label for="form__checkbox_payment" class="label form__label form__label_ad">Работа оплачивается</label>
            <div class="form__group form__group_ad form__group_ad_checkbox">
              <div class="checkbox form__checkbox form__checkbox_switch form__checkbox_switch_ad">
                <input id="form__checkbox_payment" type="checkbox" class="checkbox__mark">
                <label for="form__checkbox_payment" class="checkbox__label"></label>
              </div>
            </div>
          </div>
        </div>

        <div class="form__group form__group_ad">
          <div class="form__row form__row_ad">
            <div class="form__column form__column_ad">
              <label for="form__input_ad_work-payment" class="label input__label input__label_ad">
                Гонорар
                <span class="label__decoration label__decoration_ad label__decoration_ad_required">♦</span>
              </label>
              <input id="form__input_ad_work-payment" type="text" class="input form__input form__input_ad" placeholder="1000" pattern="^[ 0-9]+$">
            </div>
            <div class="form__column form__column_ad form__column_ad_payment form__column_ad_payment_currency">
              <label for="form__select_period_payment" class="label select__label select__label_ad">
                Валюта
              </label>
              <select name="" id="form__select_period_payment" class="select form__select form__select_ad">
                <option>₽</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form__group form__group_ad">
          <label for="form__select_period_payment" class="label select__label select__label_ad">
            Период
            <span class="label__decoration label__decoration_ad label__decoration_ad_required">♦</span>
          </label>
          <select name="" id="form__select_period_payment" class="select form__select form__select_ad">
            <option>Не выбран</option>
          </select>
        </div>

      </div>
      <section class="section form__section form__section_ad form__section_ad_disabled">
        <button class="button form__button form__button_save form__button_save_ad">Сохранить в черновик</button>
      </section>

      <div class="form__row form__row_buttons form__row_buttons_ad">
        <button class="button form__button_cancel form__button_cancel_ad">Отмена</button>
        <button class="button form__button form__button_publish form__button_publish_ad form__button_publish_ad_disabled">Опубликовать</button>
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
