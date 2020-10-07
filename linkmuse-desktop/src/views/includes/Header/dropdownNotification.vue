<template>
  <dropdown class="d-dropdown_notifications lm-home-page-menu-icon" :caret="false">
    <router-link class="lm-home-page-menu" :to="{ name: 'notifications.index' }" exact-active-class="active">
      <div :class="['lm-v3-header-notification', {'new': hasUnreadNotifications }]">
        <div class="display_flex">
          <svg class="d-icon d-dropdown__icon d-icon_size_16">
            <use xlink:href="dist/web/img/icons/svg/sprite.svg#lm-notification" />
          </svg>
        </div>
      </div>
    </router-link>
    <template slot="dropdown" v-if="false">
      <div class="d-dropdown__content">
        <div class="d-dropdown__header">
          <div class="d-row justify_between align_center">
            Уведомления
            <a class="d-link" href="linkmuse.com/settings?tab=notifications">Настройки</a>
          </div>
        </div>

        <div class="d-dropdown__body">

          <div class="d-dropdown__section">
            <div class="notification">
              <div class="d-row">
                <div class="d-btn d-btn_round d-btn_primary">
                  <svg class="d-icon d-icon_size_16 fill_white">
                    <use xlink:href="/dist/web/img/icons/svg/sprite.svg#round-lm-check" />
                  </svg>
                </div>
                <div class="d-column ml_4 w_100">
                  <div class="notification__text">
                    Ваше объявление <a href="#" class="d-link fw_600">“Название”</a>
                    опубликовано в ленте
                  </div>
                  <div class="notification__date mt_2">27 июня 2019</div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-dropdown__section">
            <div class="notification">
              <div class="d-row">
                <div class="d-btn d-btn_round d-btn_primary">
                  <svg class="d-icon d-icon_size_16 fill_white">
                    <use xlink:href="/dist/web/img/icons/svg/sprite.svg#round-lm-check" />
                  </svg>
                </div>
                <div class="d-column ml_4 w_100">
                  <div class="notification__text">
                    Модератор проверил и опубликовал ваше объявление <a href="#" class="d-link fw_600">“Название”</a>
                  </div>
                  <div class="notification__date mt_2">27 июня 2019</div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-dropdown__section">
            <div class="notification">
              <div class="d-row">
                <div class="d-btn d-btn_round d-btn_primary">
                  <svg class="d-icon d-icon_size_16 fill_white">
                    <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-eye" />
                  </svg>
                </div>
                <div class="d-column ml_4 w_100">
                  <div class="notification__text">
                    Ваш отклик на объявление <a href="#" class="d-link fw_600">“Название”</a> был просмотрен
                  </div>
                  <div class="notification__date mt_2">27 июня 2019</div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-dropdown__section">
            <div class="notification">
              <div class="d-row">
                <div class="d-btn d-btn_round d-btn_primary">
                  <svg class="d-icon d-icon_size_16 fill_white">
                    <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-eye" />
                  </svg>
                </div>
                <div class="d-column ml_4 w_100">
                  <div class="notification__text">
                    За вчерашний день ваш профиль был просмотрен “кол-во” раз
                  </div>
                  <div class="notification__date mt_2">27 июня 2019</div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-dropdown__section">
            <div class="notification">
              <div class="d-row">
                <div class="d-btn d-btn_round d-btn_primary fill_white">
                  <svg class="d-icon d-icon_size_16">
                    <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_info" />
                  </svg>
                </div>
                <div class="d-column ml_4 w_100">
                  <div class="notification__text">
                    Получен новый отклик на объявление <a href="#" class="d-link fw_600">“Название”</a>
                  </div>
                  <div class="notification__date mt_2">27 июня 2019</div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-dropdown__section">
            <div class="notification">
              <div class="d-row">
                <div class="d-btn d-btn_round bg-color_support-1">
                  <svg class="d-icon d-icon_size_16 fill_white">
                    <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_info" />
                  </svg>
                </div>
                <div class="d-column ml_4 w_100">
                  <div class="notification__text">
                    Модератор отклонил ваше объявление <a href="#" class="d-link fw_600">“Название”</a> по причине: “Причина”
                  </div>
                  <div class="notification__date mt_2">27 июня 2019</div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-dropdown__section">
            <div class="notification">
              <div class="d-row">
                <div class="d-btn d-btn_round bg-color_support-3">
                  <svg class="d-icon d-icon_size_16 fill_white">
                    <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_info" />
                  </svg>
                </div>
                <div class="d-column ml_4 w_100">
                  <div class="notification__text">
                    Срок публикации вашего объявления <a href="#" class="d-link fw_600">“Название”</a> закончится через 3 дня
                  </div>
                  <div class="notification__date mt_1">27 июня 2019</div>
                  <div class="d-row w_auto mt_4">
                    <button class="d-btn d-btn_primary">Продлить</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-dropdown__section">
            <div class="notification">
              <div class="d-row">
                <img src="/dist/web/img/2.png" alt="user avatar" class="d-img border-radius_8 d-img_size_40">
                <div class="d-column ml_4 w_100">
                  <div class="notification__text">
                    Получен новый отклик на объявление <a href="#" class="d-link fw_600">“Название”</a>
                  </div>
                  <div class="notification__date mt_2">27 июня 2019</div>
                  <div class="d-row mt_4 align_center">
                    <button class="d-btn d-btn_primary mr_2">Принять</button>
                    <button class="d-btn d-btn_secondary_filled">Отклонить</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-dropdown__section">
            <div class="notification">
              <div class="d-row">
                <img src="/dist/web/img/2.png" alt="user avatar" class="d-img border-radius_8 d-img_size_40">
                <div class="d-column ml_4 w_100">
                  <div class="notification__text">
                    Роман Васильев подписался на вас
                    <a href="#" class="d-link fw_600 display_block">Подписаться в ответ</a>
                  </div>
                  <div class="notification__date mt_2">27 июня 2019</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="d-dropdown__footer">
          <a class="d-btn d-btn_secondary_filled w_100">Показать все</a>
        </div>
      </div>
    </template>
  </dropdown>
</template>

<script>
  export default {
    name: 'dropdownNotification'
  }
</script>

<style scoped>

</style>
