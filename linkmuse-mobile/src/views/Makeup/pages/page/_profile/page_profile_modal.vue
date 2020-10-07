<template>
  <div class="mint-popup mint-popup-center lm-m-modal-wrap lm-m-modal-tree-professions pb_0">
    <div class="modal__content_tree-professions form_tree-professions">
      <div class="column align_center mt_12">
        <div class="row align_center justify_center w_100 mb_12">
          <div class="heading_h5 mb_0">Аудитория</div>
          <div class="m-text_bold color_main" style="position:absolute;right:16px">Готово</div>
        </div>

        <div class="nav nav_categories nav_categories_feed justify_center mt_12">
          <div class="nav__list nav__list_categories">
            <a href="javascript:void(0)" class="nav__item nav__item_active m-text_bold-2 mr_6">Коллеги 4</a>
            <a href="javascript:void(0)" class="nav__item m-text_bold-2 mr_6">Подписчики 999</a>
            <a href="javascript:void(0)" class="nav__item m-text_bold-2">Подписки 5</a>
          </div>
        </div>
      </div>

      <div :class="['modal__content_body', {'modal__content_body-empty': !count}]">
        <template v-if="count">
          <div class="input input_search input_search_feed">
            <svg class="icon icon_size_sm icon_search icon_fill_lm-gray-3">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_search"></use>
            </svg>
            <input type="text" name="filterProfessions" autocomplete="off" placeholder="Поиск" value=""
                   class="input__field input__field_search" aria-required="false" aria-invalid="false">
          </div>

          <div class="personal-list column">
            <div class="personal-list__item row justify_between align_center">
              <a href="javascript:void(0)" class="row">
                <div class="notifications-avatar-wrap btn btn_round">
                  <img src="dist/img/no_image_user.png" alt="" class="notifications-avatar">
                </div>

                <div class="column justify_center ml_3">
                  <div class="heading_h5 color_gray-1 mb_2">
                    Дмитрий Носик
                  </div>

                  <div class="label_declaration">
                    санкт-петербург, 30 лет
                  </div>
                </div>
              </a>

              <a href="javascript:void(0)" class="row m-text_bold color_gray-3">Удалить</a>
            </div>



            <div class="personal-list__item row justify_between align_center">
              <a href="javascript:void(0)" class="row">
                <div class="notifications-avatar-wrap btn btn_round">
                  <img src="dist/img/no_image_user.png" alt="" class="notifications-avatar">
                </div>

                <div class="column justify_center ml_3">
                  <div class="heading_h5 color_gray-1 mb_2">
                    Дмитрий Носик
                  </div>

                  <div class="label_declaration">
                    санкт-петербург, 30 лет
                  </div>
                </div>
              </a>

              <a href="javascript:void(0)" class="row m-text_bold color_gray-3">Удалить</a>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="page__plug page__plug_feed_empty-list mt_1">
            <svg class="icon icon_size_lg icon_fill_blue mb_5">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_info" />
            </svg>
            <div class="heading heading_h5">Тут будут ваши коллеги</div>
            <div class="m-text_normal-2"> Мы покажем их, как только вы<br> кого-нибудь добавите</div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 0
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
