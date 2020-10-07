<template lang="html">
    <!-- step of verification -->
    <div class="section page__section page__section_verification-step page__section_verification-step_adding-studios">
      <div class="section__title section__title_verification-step">Добавление студий</div>
      <div class="section__description section__description_verification-step">Адрес первой студии в списке является приоритетным.<br />Последующее редактирование доступно на странице “Настройки”</div>

      <!-- form -->
      <form action="" class="form form_verification-step form_verification-step_adding_studios">

        <!-- studio's data section -->
        <div class="section form__section form__section_verification-step form__section_verification-step_studios">
          <div class="label section__label section__label_number-of-section">
            <div class="label__decoration label__decoration_number-of-section">1</div>
          </div>
          <button class="button section__button section__button_delete section__button_delete_section">
            <span class="button__decoration button__decoration_x button__decoration_x_delete-section"></span>
          </button>

          <div class="form__group form__group_input form__group_input_verification-step">
            <span class="input__label input__label_verification-step">Название студии:</span>
            <input type="text" class="input input_verification-step error" placeholder="Название" required />
            <div class="form__notification form__notification_verification-step form__notification_verification-step_required">Заполните поле корректно</div>
          </div>
          <div class="form__group form__group_input form__group_input_verification-step">
            <span class="input__label input__label_verification-step">Метро:</span>
            <input type="text" class="input input_verification-step" placeholder="Метро" required />
          </div>
          <div class="form__group form__group_input form__group_input_verification-step">
            <span class="input__label input__label_verification-step">фактический адрес:</span>
            <input type="text" class="input input_verification-step" placeholder="Адрес" required />
          </div>
          <div class="section form__section form__section_upload form__section_upload_img">
            <div class="section__container section__container_upload section__container_upload_img section__container_upload_img_verification-step">
              <div class="img section__img section__img_upload section__img_upload_verification-step">
                <button class="button section__button section__button_delete section__button_delete_img">
                  <span class="button__decoration button__decoration_x button__decoration_x_delete-img"></span>
                </button>
              </div>
              <div class="img section__img section__img_upload section__img_upload_verification-step">
                <button class="button section__button section__button_delete section__button_delete_img">
                  <span class="button__decoration button__decoration_x button__decoration_x_delete-img"></span>
                </button>
              </div>
              <div class="img section__img section__img_upload section__img_upload_verification-step">
                <button class="button section__button section__button_delete section__button_delete_img">
                  <span class="button__decoration button__decoration_x button__decoration_x_delete-img"></span>
                </button>
              </div>
              <div class="img section__img section__img_upload section__img_upload_verification-step">
                <button class="button section__button section__button_delete section__button_delete_img">
                  <span class="button__decoration button__decoration_x button__decoration_x_delete-img"></span>
                </button>
              </div>
              <div class="img section__img section__img_upload section__img_upload_verification-step">
                <button class="button section__button section__button_delete section__button_delete_img">
                  <span class="button__decoration button__decoration_x button__decoration_x_delete-img"></span>
                </button>
              </div>
              <div class="img section__img section__img_upload section__img_upload_verification-step">
                <button class="button section__button section__button_delete section__button_delete_img">
                  <span class="button__decoration button__decoration_x button__decoration_x_delete-img"></span>
                </button>
              </div>
            </div>
            <button class="button form__button form__button_upload form__button_upload_img form__button_upload_img_additional">
              <svg class="icon icon_upload icon_upload_img icon_upload_img_additional">
                <use xlink:href="/dist/img/icons/verification/sprite.svg#icon_upload" />
              </svg>
              <div class="button__content button__content_upload button__content_upload_img button__content_upload_img_additional">
                Добавить фото
              </div>
            </button>
          </div>
        </div>


        <!-- studio's data section -->
        <div class="section form__section form__section_verification-step form__section_verification-step_studios">
          <div class="label section__label section__label_number-of-section">
            <div class="label__decoration label__decoration_number-of-section">2</div>
          </div>
          <button class="button section__button section__button_delete section__button_delete_section">
            <span class="button__decoration button__decoration_x button__decoration_x_delete-section"></span>
          </button>

          <div class="form__group form__group_input form__group_input_verification-step">
            <span class="input__label input__label_verification-step">Название студии:</span>
            <input type="text" class="input input_verification-step" placeholder="Название" required />
          </div>
          <div class="form__group form__group_input form__group_input_verification-step">
            <span class="input__label input__label_verification-step">Метро:</span>
            <input type="text" class="input input_verification-step" placeholder="Метро" required />
          </div>
          <div class="form__group form__group_input form__group_input_verification-step">
            <span class="input__label input__label_verification-step">фактический адрес:</span>
            <input type="text" class="input input_verification-step" placeholder="Адрес" required />
          </div>
          <div class="section form__section form__section_upload form__section_upload_img">
            <div class="section__container section__container_upload section__container_upload_img section__container_upload_img_verification-step">
              <div class="img section__img section__img_upload section__img_upload_verification-step">
                <button class="button section__button section__button_delete section__button_delete_img">
                  <span class="button__decoration button__decoration_x button__decoration_x_delete-img"></span>
                </button>
              </div>
              <div class="img section__img section__img_upload section__img_upload_verification-step">
                <button class="button section__button section__button_delete section__button_delete_img">
                  <span class="button__decoration button__decoration_x button__decoration_x_delete-img"></span>
                </button>
              </div>
            </div>
            <button class="button form__button form__button_upload form__button_upload_img form__button_upload_img_additional">
              <svg class="icon icon_upload icon_upload_img icon_upload_img_additional">
                <use xlink:href="/dist/img/icons/verification/sprite.svg#icon_upload" />
              </svg>
              <div class="button__content button__content_upload button__content_upload_img button__content_upload_img_additional">
                Добавить фото
              </div>
            </button>
          </div>
        </div>

        <!-- studio's data section -->
        <div class="section form__section form__section_verification-step form__section_verification-step_studios">
          <div class="label section__label section__label_number-of-section">
            <div class="label__decoration label__decoration_number-of-section">2</div>
          </div>
          <button class="button section__button section__button_delete section__button_delete_section">
            <span class="button__decoration button__decoration_x button__decoration_x_delete-section"></span>
          </button>

          <div class="form__group form__group_input form__group_input_verification-step">
            <span class="input__label input__label_verification-step">Название студии:</span>
            <input type="text" class="input input_verification-step" placeholder="Название" required />
          </div>
          <div class="form__group form__group_input form__group_input_verification-step">
            <span class="input__label input__label_verification-step">Метро:</span>
            <input type="text" class="input input_verification-step" placeholder="Метро" required />
          </div>
          <div class="form__group form__group_input form__group_input_verification-step">
            <span class="input__label input__label_verification-step">фактический адрес:</span>
            <input type="text" class="input input_verification-step" placeholder="Адрес" required />
          </div>
          <div class="section form__section form__section_upload form__section_upload_img">
            <div class="section__container section__container_upload section__container_upload_img section__container_upload_img_verification-step">
              <button class="button form__button form__button_upload form__button_upload_img">
                <svg class="icon icon_upload icon_upload_img">
                  <use xlink:href="/dist/img/icons/verification/sprite.svg#icon_upload" />
                </svg>
                <div class="button__content button__content_upload button__content_upload_img">
                  Загрузить фото <br /> (MAX 9)
                </div>
              </button>
            </div>
          </div>
        </div>

        <div class="form__group form__group_buttons form__group_buttons_verification-step">
          <button class="button form__button form__button_back form__button_back_verification-step">Назад</button>
          <button class="button form__button form__button_continue form__button_continue_verification-step">Продолжить</button>
        </div>

      </form>
      <button class="button form__button form__button_add form__button_add_studio">
        <span class="button__decoration button__decoration_plus"></span>
        <span class="button__content button__content_add button__content_add_studio">Добавить студию</span>
      </button>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
