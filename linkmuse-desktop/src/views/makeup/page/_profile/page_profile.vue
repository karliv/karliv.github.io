<template>
  <div class="page page-profile page_feed lm-content vs-wrapper">

    <!-- page content -->
    <div class="page__content">
      <div class="page__body page__body_feed">

        <!-- feed -->
        <div class="d-feed d-row">

          <!-- sidebar -->
          <div class="sidebar d-feed__sidebar">
            <div class="sidebar__profile column">
              <div class="sidebar__profile--avatar"
                   v-bind:style="{ backgroundImage: `url(${avatar})` }">
                <div class="sidebar__profile--avatar_stub" v-if="!avatar"></div>
                <div class="sidebar__profile--description">
                  <h5>Евгений Белоусов</h5>
                  <span>Санкт-Петерубрг, 25 лет</span>
                </div>
              </div>

              <template v-if="(isCurrentUser === true)">
                <div class="sidebar__profile--settings">
                  <button class="d-btn d-btn_secondary_filled  w_100">настройки</button>
                </div>
              </template>

              <template v-else>
                <div class="sidebar__profile--settings">
                  <div class="d-column">
                    <div class="d-row mb_3">
                      <div class="d-row">
                        <button class="d-btn d-btn_primary mr_4">показать номер</button>
                      </div>

                      <div class="d-row w_auto">
                        <more-actions :hover="true" position="top" class="d-btn_primary">
                          <a href="javascript:void(0)" class="list__item list__item_border mb_3" v-if="isAdmin">
                            <span>Войти как Админ</span>
                          </a>

                          <a href="javascript:void(0)" class="list__item"><span>Добавить в коллеги</span></a>
                          <a href="javascript:void(0)" class="list__item list__item_border mb_3"><span>Подписаться</span></a>
                          <a href="javascript:void(0)" class="list__item list__item_red"><span>Удалить из коллег</span></a>
                          <a href="javascript:void(0)" class="list__item list__item_red list__item_border mb_3"><span>Подписаться</span></a>

                          <a href="javascript:void(0)" class="list__item">
                            <span>Пожаловаться</span>
                          </a>
                        </more-actions>
                      </div>
                    </div>
                    <div class="d-row">
                      <button class="d-btn d-btn_outline w_100">написать сообщение</button>
                    </div>
                  </div>
                </div>
              </template>
            </div>

            <div class="d-card mt_4">
              <div class="sidebar-menu">
                <a href="http://point.local/id22819/boards/castings/responses" class="sidebar-menu__link" v-if="!about_me">
                  Изменить описание
                </a>

                <template v-if="about_me">
                  <div class="d-row mb_3">
                    <div class="page-profile__text_1">Обо мне</div>
                  </div>

                  <template v-if="about_me.length > 50">

                    <div class="d-row">
                      <div class="sidebar-menu__text">{{ collapse['about_me_info'] ? about_me.slice(0, 50) + '...'
                        : about_me}}</div>
                    </div>

                    <div class="d-row">
                      <div class="d-row align_center mt_3" @click="_handleClickToggleCollapse('about_me_info')"
                           :style="{ cursor: 'pointer' }">

                        <div class="page-profile__text_1 color_main mr_1">{{collapse['about_me_info'] ? 'Читать полностью' : 'Скрыть'}}</div>

                        <svg :class="['d-icon', 'd-icon_size_16', 'fill_main', {  rotate_180: (!collapse['about_me_info']) }]">
                          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-chevron-bottom"></use>
                        </svg>
                      </div>
                    </div>
                  </template>

                  <template v-else>
                    <div class="d-row mb_3">
                      <div class="page-profile__text_1">Обо мне</div>
                    </div>
                  </template>
                </template>

              </div>
            </div>

            <div class="d-card mt_4" style="margin-bottom: 16px;">
              <div class="sidebar-menu">
                <a href="http://point.local/id22819/boards/castings/responses" class="d-link">
                  <div class="d-row">
                    <div class="page-profile__text_1">Мои подборки</div>
                    <span class="page-profile__text_2">0</span>
                  </div>
                </a>

                <a href="http://point.local/id22819/boards/castings/responses" class="d-link">
                  <div class="d-row">
                    <div class="page-profile__text_1">Мои объявления</div>
                    <span class="page-profile__text_2">2</span>
                  </div>
                </a>

                <a href="http://point.local/id22819/boards/castings/responses" class="d-link">
                  <div class="d-row">
                    <div class="page-profile__text_1">Мои отклики</div>
                    <span class="page-profile__text_2">1</span>
                  </div>
                </a>
              </div>

              <div class="sidebar-menu">
                <a href="http://point.local/id22819/boards/castings/responses" class="d-link">
                  <div class="d-row">
                    <div class="page-profile__text_1">Коллеги</div>
                    <span class="page-profile__text_2">4</span>
                  </div>

                  <div class="d-row w_auto">
                    <div class="sidebar-menu__img sidebar-menu__img_3">
                      <span v-bind:style="{ backgroundImage: `url(${user_image})` }"></span>
                      <span v-bind:style="{ backgroundImage: `url(${user_image})` }"></span>
                      <span v-bind:style="{ backgroundImage: `url(${user_image})` }"></span>
                    </div>
                  </div>
                </a>
                <a href="http://point.local/id22819/boards/castings/responses" class="d-link">
                  <div class="d-row">
                    <div class="page-profile__text_1">Подписчики</div>
                    <span class="page-profile__text_2">1</span>
                  </div>

                  <div class="d-row w_auto">
                    <div class="sidebar-menu__img">
                      <span v-bind:style="{ backgroundImage: `url(${user_image})` }"></span>
                    </div>
                  </div>
                </a>
                <a href="http://point.local/id22819/boards/castings/responses" class="d-link">
                  <div class="d-row">
                    <div class="page-profile__text_1">Подписки</div>
                    <span class="page-profile__text_2">2</span>
                  </div>

                  <div class="d-row w_auto">
                    <div class="sidebar-menu__img sidebar-menu__img_2">
                      <span v-bind:style="{ backgroundImage: `url(${user_image})` }"></span>
                      <span v-bind:style="{ backgroundImage: `url(${user_image})` }"></span>
                    </div>
                  </div>
                </a>
              </div>

              <div class="sidebar-menu sidebar-dropdown-menu">
                <div class="d-row align_center" @click="_handleClickToggleCollapse('contacts')"
                     :style="{ cursor: 'pointer' }">

                  <template v-if="(collapse['contacts'])">
                    <div class="page-profile__text_1 color_main mr_1">Показать контакты</div>

                    <svg :class="['d-icon', 'd-icon_size_16', 'fill_main', {  rotate_180: (!collapse['contacts']) }]">
                      <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-chevron-bottom"></use>
                    </svg>
                  </template>

                  <template v-else>
                    <div class="page-profile__text_1">Контакты</div>
                  </template>

                  <template v-if="(!collapse['contacts'] && fields.categoryIds.length)">
                    <div class="filters__status filters__status_changed"></div>
                  </template>
                </div>

                <collapse v-model="!collapse['contacts']">
                  <div class="sidebar-menu__item" v-if="contacts.socialNetwork.length">
                    <div class="sidebar-menu__contacts" v-for="contact in contacts.socialNetwork">
                      <span class="mr_1">{{ contact.name }}:</span>
                      <a href="javascript:void(0)" class="color_main">{{ contact.link }}</a>
                    </div>
                  </div>

                  <div class="sidebar-menu__item" v-if="contacts.messenger.length">
                    <div class="sidebar-menu__contacts" v-for="contact in contacts.messenger">
                      <span class="mr_1">{{ contact.name }}:</span>
                      <a href="javascript:void(0)" class="color_main">{{ contact.link }}</a>
                    </div>
                  </div>

                  <div class="sidebar-menu__item" v-if="contacts.contacts.length">
                    <div class="sidebar-menu__contacts" v-for="contact in contacts.contacts">
                      <span class="mr_1">{{ contact.name }}:</span>
                      <a href="javascript:void(0)" class="color_main">{{ contact.link }}</a>
                    </div>
                  </div>

                  <div class="d-row align_center mt_3" @click="_handleClickToggleCollapse('contacts')"
                       :style="{ cursor: 'pointer' }">
                    <div class="page-profile__text_1 color_main mr_1">Скрыть</div>
                    <svg :class="['d-icon', 'd-icon_size_16', 'fill_main', {  rotate_180: (!collapse['contacts']) }]">
                      <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-chevron-bottom"></use>
                    </svg>
                  </div>
                </collapse>
              </div>
            </div>
          </div>
          <!-- end of sidebar -->

          <!-- feed__body -->
          <div class="d-feed__body ml_4">

            <template v-if="(isEmptyCompany && isEmptyProfession) && (!isCurrentUser && !isAdmin)">
              <div class="d-card d-card_feed-plug">
                <svg class="d-icon d-icon_size_64 fill_main mb_5">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_info"/>
                </svg>
                <div class="heading heading_h5">Информации нет</div>
                <div class="ta_center mb_4 color_gray-1">Евгений пока не заполнил<br> профиль полностью</div>
              </div>
            </template>

            <template v-else>
              <!-- My professions -->
              <div class="d-card mb_1" style="display: inline-flex">
                <div class="d-row">
                  <div class="page-profile__text_1">{{isCurrentUser ? 'Мои профессии' : 'Профессии'}}</div>
                  <span class="page-profile__text_2">2</span>
                </div>
                <template v-if="isCurrentUser === true">
                  <div class="d-row w_auto">
                    <a href="javascript:void(0)" class="page-profile__text_1 color_main" @click="_showModal">Добавить</a>
                  </div>
                </template>
              </div>

              <div class="d-feed">
                <template v-if="(isEmptyProfession === false && isDraft === false && isArchived === false && isCurrentUser === false) || (isEmptyProfession === false && isCurrentUser === true)">
                  <div class="d-card d-card-np">
                    <a href="#" :class="['section', { 'opacity_64' : (isArchived === true) }]">
                      <div class="d-card__slider">
                        <div class="d-card__slider-container">
                          <div class="d-card__slider-item">
                            <div class="d-card__slider-wrapper">
                              <div class="LazyImage d-card__slider-image LazyImage_loaded">
                                <div class="LazyImage__previewContainer"></div>
                                <img
                                  src="https://7k4lcn62eg.execute-api.eu-central-1.amazonaws.com/dev/upload/boards/location/photos/6J/U2/6JU23xPBIJ7b8WP1YdLA2fqKRdH1mW6g9a9kx98D-264x164.jpg"
                                  class="LazyImage__image">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>

                    <div class="d-card__description">
                      <div class="d-column">
                        <div class="d-row justify_between">
                          <div :class="['d-card__type_casting', 'color_main',
                          {'color_gray-3' : isPublished === false || isDraft === true || isArchived}]">
                            <template v-if="(isCurrentUser === false)">
                              <template v-if="(isPublished === true)">Опубликован</template>
                              <template v-else-if="(isPublished === false)">Снято с публикации</template>
                            </template>
                            <template v-if="(isCurrentUser === true)">
                              <template v-if="(isDraft === true)">Черновик</template>
                              <template v-else-if="(isModeration === true)">На модерации</template>
                              <template v-else-if="(isPublished === true)">Опубликован</template>
                              <template v-else-if="(isPublished === false)">Снято с публикации</template>
                              <template v-else-if="(isArchived === true)">Архив</template>
                            </template>
                          </div>

                          <div class="d-card__date_casting-creation">
                            сегодня
                          </div>
                        </div>

                        <a href="#" :class="[{ 'opacity_64' : (isArchived === true) }]">
                          <div class="heading page-profile__text_1 align-center mb_2">
                            Актёр
                            <template v-if="isCertifiedUser">
                              <tooltip :class="['align-center']" effect="scale" placement="right" :content="'Верифицированная профессия'">
                                <svg class="d-icon d-icon_size_16 ml_2">
                                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#round_lm-verification"/>
                                </svg>
                              </tooltip>
                            </template>
                          </div>

                          <div class="d-card__list d-card__list_casting-parameters mb_2">
                            <template v-if="(city)">
                              <div>{{ city.text }}</div>
                            </template>
                            <template v-if="( age )">
                              <div>{{ age }} лет</div>
                            </template>
                          </div>

                          <div class="heading page-profile__text_3 mb_4">От {{ price | currency(currency) }} / {{ paymentPeriod | lowercase }}</div>
                        </a>

                        <div class="d-row w_100 justify_between">
                          <div class="d-column w_auto">
                            <div class="d-row">
                              <template v-if="(isCurrentUser === false)">
                                <template v-if="(phone)">
                                  <contact-phone-button class="mr_4 min-w_178px" :phone="phone" :hovered="false" event="location_show_number"></contact-phone-button>
                                </template>
                                <button class="d-btn d-btn_outline mr_4">Написать сообщение</button>
                              </template>

                              <template v-else-if="(isCurrentUser === true)">
                                <template v-if="(isArchived === true || isDraft === true || isPublished === false)">
                                  <button class="d-btn d-btn_primary mr_4">
                                    Опубликовать
                                  </button>
                                </template>
                                <button class="d-btn d-btn_outline">
                                  Редактировать
                                </button>
                              </template>
                            </div>
                          </div>

                          <div class="d-column w_auto z-index_3">

                            <div class="d-row">

                              <template v-if="isCurrentUser === false">
                                <button :class="['d-btn', 'd-btn_round', 'mr_4', 'd-btn_secondary_filled', 'd-btn_like']">
                                  <svg class="d-icon d-icon_size_16">
                                    <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_like" />
                                  </svg>
                                </button>

                                <social-share-updated :hover="true" :url="(APP_URL + href)" :clipboard="true" class="d-btn_round mr_4" position="top">
                                  <svg class="d-icon d-icon_size_16">
                                    <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_share" />
                                  </svg>
                                </social-share-updated>
                              </template>

                              <template v-if="isArchived === false">
                                <more-actions position="top" :hover="true" class="d-btn_secondary_filled">
                                  <template v-if="isCurrentUser || isAdmin">
                                    <a class="list__item" href="javascript:void(0)">В архив</a>
                                  </template>

                                  <template v-else>
                                    <a class="list__item" href="javascript:void(0)">Добавить в подборку</a>
                                    <a class="list__item" href="javascript:void(0)">Пожаловаться</a>
                                  </template>
                                </more-actions>
                              </template>

                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>

                <template v-else>
                  <div class="d-card d-card_feed-plug">
                    <svg class="d-icon d-icon_size_64 fill_main mb_5">
                      <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_info"/>
                    </svg>
                    <div class="heading heading_h5">Профессий нет</div>
                    <template v-if="(isCurrentUser === true && isAuthorized === true)">
                      <div class="ta_center mb_4 color_gray-1">Для начала работы, необходимо<br> добавить новую профессию</div>
                      <router-link :to="{ name: 'board.locations.create' }" class="d-btn d-btn_primary">Добавить</router-link>
                    </template>
                  </div>
                </template>
              </div>
              <!-- End of My professions -->


              <!-- My companies -->
              <div class="d-card mb_1" style="display: inline-flex">
                <div class="d-row">
                  <div class="page-profile__text_1">{{isCurrentUser ? 'Мои компании' : 'Компании'}}</div>
                  <span class="page-profile__text_2">2</span>
                </div>
                <template v-if="isCurrentUser === true">
                  <div class="d-row w_auto">
                    <a href="javascript:void(0)" class="page-profile__text_1 color_main" @click="_showModal">Добавить</a>
                  </div>
                </template>
              </div>

              <div class="d-feed">
                <template v-if="(isEmptyCompany === false && isDraft === false && isArchived === false && isCurrentUser === false) || (isEmptyCompany === false && isCurrentUser === true)">
                  <div class="d-card d-card-np">
                    <a href="#" :class="['section', { 'opacity_64' : (isArchived === true) }]">
                      <div class="d-card__slider">
                        <div class="d-card__slider-container">
                          <div class="d-card__slider-item">
                            <div class="d-card__slider-wrapper">
                              <div class="LazyImage d-card__slider-image LazyImage_loaded">
                                <div class="LazyImage__previewContainer"></div>
                                <img
                                  src="https://7k4lcn62eg.execute-api.eu-central-1.amazonaws.com/dev/upload/boards/location/photos/6J/U2/6JU23xPBIJ7b8WP1YdLA2fqKRdH1mW6g9a9kx98D-264x164.jpg"
                                  class="LazyImage__image">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>

                    <div class="d-card__description">
                      <div class="d-column">
                        <div class="d-row justify_between">
                          <div :class="['d-card__type_casting', 'color_main',
                          {'color_gray-3' : isPublished === false || isDraft === true || isArchived}]">
                            <template v-if="(isCurrentUser === false)">
                              <template v-if="(isPublished === true)">Опубликован</template>
                              <template v-else-if="(isPublished === false)">Снято с публикации</template>
                            </template>
                            <template v-if="(isCurrentUser === true)">
                              <template v-if="(isDraft === true)">Черновик</template>
                              <template v-else-if="(isModeration === true)">На модерации</template>
                              <template v-else-if="(isPublished === true)">Опубликован</template>
                              <template v-else-if="(isPublished === false)">Снято с публикации</template>
                              <template v-else-if="(isArchived === true)">Архив</template>
                            </template>
                          </div>

                          <div class="d-card__date_casting-creation">
                            24 июня 2019
                            <span>, 00:00</span>
                          </div>
                        </div>

                        <a href="#" :class="[{ 'opacity_64' : (isArchived === true) }]">
                          <div class="heading page-profile__text_1 mb_2">Актерское агентство</div>

                          <div class="d-card__list d-card__list_casting-parameters mb_2">
                            <template v-if="(city)">
                              <div>{{ city.text }}</div>
                            </template>
                          </div>

                          <div class="heading page-profile__text_3 mb_4">По договоренности</div>
                        </a>

                        <div class="d-row w_100 justify_between">
                          <div class="d-column w_auto">
                            <div class="d-row">
                              <template v-if="(isCurrentUser === false)">
                                <template v-if="(phone)">
                                  <contact-phone-button class="mr_4 min-w_178px" :phone="phone" :hovered="false" event="location_show_number"></contact-phone-button>
                                </template>
                                <button class="d-btn d-btn_outline mr_4">Написать сообщение</button>
                              </template>

                              <template v-else-if="(isCurrentUser === true)">
                                <template v-if="(isArchived === true || isDraft === true || isPublished === false)">
                                  <button class="d-btn d-btn_primary mr_4">
                                    Опубликовать
                                  </button>
                                </template>
                                <button class="d-btn d-btn_outline">
                                  Редактировать
                                </button>
                              </template>
                            </div>
                          </div>

                          <div class="d-column w_auto z-index_3">
                            <div class="d-row">

                              <template v-if="isCurrentUser === false">
                                <button :class="['d-btn', 'd-btn_round', 'mr_4', 'd-btn_secondary_filled', 'd-btn_like']">
                                  <svg class="d-icon d-icon_size_16">
                                    <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_like" />
                                  </svg>
                                </button>

                                <social-share-updated :hover="true" :url="(APP_URL + href)" :clipboard="true" class="d-btn_round mr_4" position="top">
                                  <svg class="d-icon d-icon_size_16">
                                    <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_share" />
                                  </svg>
                                </social-share-updated>
                              </template>

                              <template v-if="isArchived === false">
                                <more-actions position="top" :hover="true" class="d-btn_secondary_filled">
                                  <template v-if="isCurrentUser || isAdmin">
                                    <a class="list__item" href="javascript:void(0)">В архив</a>
                                  </template>

                                  <template v-else>
                                    <a class="list__item" href="javascript:void(0)">Добавить в подборку</a>
                                    <a class="list__item" href="javascript:void(0)">Пожаловаться</a>
                                  </template>
                                </more-actions>
                              </template>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>

                <template v-else>
                  <div class="d-card d-card_feed-plug">
                    <svg class="d-icon d-icon_size_64 fill_main mb_5">
                      <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_info"/>
                    </svg>
                    <div class="heading heading_h5">Компаний нет</div>
                    <template v-if="(isCurrentUser === true && isAuthorized === true)">
                      <div class="ta_center mb_4 color_gray-1">Для начала работы, необходимо<br> добавить новую компанию</div>
                      <router-link :to="{ name: 'board.locations.create' }" class="d-btn d-btn_primary">Добавить</router-link>
                    </template>
                  </div>
                </template>
              </div>

              <!-- END of My companies -->
            </template>

          </div>
          <!-- end of feed__body -->
        </div>
        <!-- end of feed -->
      </div>
    </div>
    <!-- end of page content -->


    <!-- Model window -->
    <template v-if="isModalVisible">
      <div tabindex="-1" role="dialog" class="modal modal-center modal-abuse fade in"
           style="display: block;">
        <div role="document" class="modal-dialog modal-tree-professions">
          <div class="modal-content modal-content-profile">
            <div class="modal-body">
              <div class="modal-abuse-content">
                <div class="title" style="text-align: left">Выберите профессию</div>
                <div class="description mt_3 mb_5">
                  Найдите вашу профессию в списках ниже <br>
                  или воспользуйтесь поиском
                </div>

                <div class="d-input d-input_row d-input__search">
                  <div class="d-row align_center justify_flex-end">
                    <span class="d-input__icon d-input__icon_left">
                      <svg :class="['d-icon', 'd-icon-search', 'd-icon_size_16', 'fill_gray-3']">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_search"></use>
                      </svg>
                    </span>
                    <span class="d-input__icon d-input__icon_right">
                      <svg :class="['d-icon', 'd-icon-close','d-icon_size_16', 'fill_white']">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-close-small"></use>
                      </svg>
                    </span>
                    <input type="text" autocomplete="off" placeholder="Поиск"
                           class="d-input__field" aria-required="false" aria-invalid="false">
                  </div>
                </div>


                <div class="sidebar-dropdown-menu">
                  <div class="d-row align_center" @click="_handleClickToggleCollapse('operators')"
                       :style="{ cursor: 'pointer' }">
                    <svg :class="['d-icon', 'd-icon_size_16', 'mr_2', {  rotate_180: (!collapse['operators']) }]">
                      <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-chevron-bottom"></use>
                    </svg>

                    <div class="page-profile__text_1">Операторская группа</div>
                  </div>

                  <collapse v-model="!collapse['operators']">
                    <ul class="lm-radio-buttons ml_6">
                      <li>
                        <input  name="abuse" type="radio" id="operator_postanov"
                                value="operator_postanov" aria-required="true" aria-invalid="false">
                        <label for="abuse_bad_behavior">Оператор-постановщик</label>
                      </li>
                      <li>
                        <input  name="abuse" type="radio" id="abuse_other"
                                value="other">
                        <label  for="abuse_other">Другое</label>
                      </li>
                    </ul>
                  </collapse>
                </div>


                <div class="sidebar-dropdown-menu">
                  <div class="d-row align_center" @click="_handleClickToggleCollapse('directors')"
                       :style="{ cursor: 'pointer' }">
                    <svg :class="['d-icon', 'd-icon_size_16', 'mr_2', {  rotate_180: (!collapse['directors']) }]">
                      <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-chevron-bottom"></use>
                    </svg>

                    <div class="page-profile__text_1">Режиссерская группа</div>
                  </div>

                  <collapse v-model="!collapse['directors']">
                    <ul class="lm-radio-buttons ml_6">
                      <li>
                        <input  name="abuse" type="radio" id="director_postanov"
                                value="bad_behavior" aria-required="true" aria-invalid="false">
                        <label for="director_postanov">Режиссер-постановщик</label>
                      </li>
                    </ul>
                  </collapse>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop fade in" @click="_closeModal"></div>
    </template>
    <!-- END Model window -->
  </div>
  <!-- end of page -->
</template>

<script>
    const DEFAULT_IMAGE_AVATAR = '/dist/img/no_image_user.png';
    const DEFAULT_IMAGE_BACKGROUND = '/dist/img/no_image_user.png';
    const APP_URL = process.env.APP_URL;

    import { Collapse } from 'uiv'
    import { mapGetters } from 'vuex'

    import { createHelpers } from 'vuex-map-fields'

    const { mapFields } = createHelpers({
        getterType: 'board/casting/getField',
        mutationType: 'board/casting/updateField',
    });

    export default {
        components: { Collapse },
        data() {
            return {
                APP_URL,
                loading: true,
                user_image: DEFAULT_IMAGE_AVATAR,
                avatar: '',
                about_me: 'Участвую в новом сезоне сериала “Американская История Ужасов”',
                admin: false,
                current_user: true,
                isModeration: false,
                isDraft: false,
                isPublished: true,
                isRejected: false,
                isModalVisible: false,
                archived: false,
                total: {
                    profession: 1,
                    company: 1
                },
                city: {
                    text: 'Москва'
                },
                age: 25,
                phone: '+79036824712',
                href: '/boards/castings/kasting_v_korotkiy_metr-1068?ref=22819',

                contacts: {
                    socialNetwork: [
                        {
                            name: 'Instagram',
                            link: '#'
                        },
                        {
                            name: 'Facebook',
                            link: '#'
                        }
                    ],
                    messenger: [
                        {
                            name: 'Whatsapp',
                            link: '#'
                        }
                    ],
                    contacts: [
                        {
                            name: 'Сайт',
                            link: '#'
                        }
                    ]
                },

                collapse: {
                    contacts: true,
                    operators: true,
                    directors: true,
                    about_me_info: true,
                },
            }
        },

        computed: {
            ...mapFields({
                fields: 'castings.filter',
            }),
            ...mapGetters({
                user: 'auth/getAuthUser',
                isAuthorized: 'auth/isAuthorized'
            }),
            isCurrentUser () {
                return this.current_user;
            },
            isAdmin () {
                return this.admin;
            },
            isArchived () {
                return this.archived;
            },
            currency () {
                return null
            },
            price () {
                return '5000';
            },
            paymentPeriod () {
                return 'в день';
            },
            isEmptyProfession () {
                return ( this.loading === false && this.total.profession === 0 )
            },
            isEmptyCompany () {
                return ( this.loading === false && this.total.company === 0 )
            },
            isCertifiedUser () {
                return true
            },
        },

        mounted() {
            this.loading = false;
        },

        methods: {
            _handleClickToggleCollapse (field) {
                this.collapse[field] = !this.collapse[field]
            },

            _handleClickToggleCollapseLists (field) {
                this.collapse['lists'][field] = !this.collapse['lists'][field]
            },

            _showModal () {
                return this.isModalVisible = true;
            },

            _closeModal () {
                return this.isModalVisible = false;
            },
        }
    }
</script>
