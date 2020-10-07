<template>
  <div class="page page_casting page_casting_inner">
    <div class="page__content">
      <template v-if="(casting && error === false)">
        <div class="casting casting_inner" ref="castingContentWrap">
          <template v-if="(isCurrentUser === true)">
            <template v-if="(isModeration === true)">
              <div class="casting__status casting__status_moderation"><span>На модерации</span></div>
            </template>
            <template v-if="(isRejected === true)">
              <div class="casting__status casting__status_refused">Отклонен:
                {{ has(casting, 'rejection.cause.text') ? casting['rejection']['cause']['text'] : '' }}.
                {{ has(casting, 'rejection.comment') ? casting['rejection']['comment'] : '' }}
              </div>
            </template>

            <template v-if="(isArchived === true)">
              <div class="casting__status casting__status_archive"><span>Архив</span></div>
            </template>

            <template v-if="(isDraft === true)">
              <div class="casting__status casting__status_draft"><span>Черновик</span></div>
            </template>
          </template>

          <div class="d-row justify_center pt_12">
            <div class="page__body page__body_casting_inner">
              <div class="section_casting section_casting_big pt_0">
                <div class="d-row justify_between mb_4 align_center">
                  <ul class="d-breadcrumbs">
                    <li class="d-breadcrumbs__item"><router-link :to="{ name: 'board.castings.index' }">Кастинги</router-link></li>
                    <li class="d-breadcrumbs__item"><router-link :to="{ name: 'board.castings.index', query: { categoryIds: [categoryId] } }">{{ category | truncate(30) }}</router-link></li>
                  </ul>
                </div>
                <template v-if="casting.name">
                  <div class="d-row">
                    <div class="heading heading_h2 mb_0">{{ casting.name }}</div>
                  </div>
                </template>
                <template v-if="casting.description">
                  <div class="d-row">
                    <div class="d-markdown-layout" v-html="description"></div>
                  </div>
                </template>
              </div>

              <template v-if="(( professions && professions.length) || (genders && genders.length) || ages || category )">
                <div class="section_casting section_casting_big">
                  <template v-if="( professions && professions.length )">
                    <div class="d-row">
                      <div class="label__title">Роль</div>
                      <div class="d-text_bold">{{ professions.join(', ') }}</div>
                    </div>
                  </template>

                  <template v-if="( genders && genders.length )">
                    <div class="d-row mt_4">
                      <div class="label__title">Пол</div>
                      <div class="d-text_bold">{{ genders.join(', ') }}</div>
                    </div>
                  </template>

                  <template v-if="( ages )">
                    <div class="d-row mt_4">
                      <div class="label__title">Возраст</div>
                      <div class="d-text_bold">{{ ages }}</div>
                    </div>
                  </template>

                  <template v-if="( category )">
                    <div class="d-row mt_4">
                      <div class="label__title">Категория</div>
                      <div class="d-text_bold">{{ category }}</div>
                    </div>
                  </template>
                </div>
              </template>

              <div class="section_casting section_casting_big">
                <template v-if="(isCastingOnline === false)">
                  <div class="d-row" v-if="(casting.country)">
                    <div class="label__title">Страна</div>
                    <div class="d-text_bold">{{ casting.country.text }}</div>
                  </div>
                  <div class="d-row mt_4" v-if="(casting.city)">
                    <div class="label__title">Город</div>
                    <div class="d-text_bold">{{ casting.city.text }}</div>
                  </div>
                  <div class="d-row mt_4" v-if="(casting.address)">
                    <div class="label__title">Адрес кастинга</div>
                    <div class="d-text_bold">{{ casting.address }}</div>
                  </div>
                </template>

                <template v-if="(isCastingOnline === true)">
                  <div class="d-row">
                    <div class="label__title">Место проведения</div>
                    <div class="d-text_bold">Онлайн</div>
                  </div>
                </template>

                <div class="d-row mt_4">
                  <div class="label__title">Дата кастинга</div>
                  <div class="d-text_bold">
                    <template v-if="(casting.dateStart || casting.dateEnd)">
                      <template v-if="(casting.dateStart && casting.dateEnd && (casting.dateStart === casting.dateEnd))">
                        {{ $moment(casting.dateStart, 'DD-MM-YYYY').format('D.MM.YY') }}
                      </template>
                      <template v-else>
                        <template v-if="casting.dateStart">
                          {{ casting.dateEnd ? '' : 'с' }}
                          {{ $moment(casting.dateStart, 'DD-MM-YYYY').format('D.MM.YY') }}
                        </template>
                        <template v-if="casting.dateEnd">
                          {{ casting.dateStart ? '-' : 'до' }}
                          {{ $moment(casting.dateEnd, 'DD-MM-YYYY').format('D.MM.YY') }}
                        </template>
                      </template>
                    </template>
                    <template v-else>уточняется</template>
                  </div>
                </div>
                <div class="d-row mt_4">
                  <div class="label__title">Дата работы</div>
                  <div class="d-text_bold">
                    <template v-if="(casting.dateWorkStart || casting.dateWorkEnd)">
                      <template v-if="(casting.dateWorkStart && casting.dateWorkEnd && (casting.dateWorkStart === casting.dateWorkEnd))">
                        {{ $moment(casting.dateWorkStart, 'DD-MM-YYYY').format('D.MM.YY') }}
                      </template>
                      <template v-else>
                        <template v-if="casting.dateWorkStart">
                          {{ casting.dateWorkEnd ? '' : 'с' }}
                          {{ $moment(casting.dateWorkStart, 'DD-MM-YYYY').format('D.MM.YY') }}
                        </template>
                        <template v-if="casting.dateWorkEnd">
                          {{ casting.dateWorkStart ? '-' : 'до' }}
                          {{ $moment(casting.dateWorkEnd, 'DD-MM-YYYY').format('D.MM.YY') }}
                        </template>
                      </template>
                    </template>
                    <template v-else>уточняется</template>
                  </div>
                </div>
              </div>

              <template v-if="( characterType || (references && references.length) )">
                <div class="section_casting section_casting_big">
                  <template v-if="(characterType)">
                    <div class="d-row">
                      <div class="label__title">Типаж</div>
                      <div class="d-text_bold">{{ characterType }}</div>
                    </div>
                  </template>
                  <template v-if="(references && references.length)">
                    <div class="d-row mt_4">
                      <div class="label__title">Референс</div>
                      <div class="gallery gallery_casting">
                        <div class="gallery__content gallery__content_casting">
                          <media type="photo" :src="reference['paths']['original']" :media="reference" v-for="reference in references" :key="`reference-${reference.id}`">
                            <img :src="reference['paths']['128x128']" :alt="casting.name" class="d-img">
                          </media>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </template>

              <template v-if="(hasContacts === true)">
                <div class="section_casting section_casting_big">
                  <template v-if="(hideContacts === true)">
                    <div class="d-row">
                      <div class="label__title">Контакты</div>
                      <div class="d-text_bold">
                        <div class="section_contacts_action">
                          <span>Для просмотра нажмите «Показать контакты»</span>
                          <button @click="_handleShowContacts" class="d-btn d-btn_primary">Показать контакты</button>
                        </div>
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <template v-if="(phone)">
                      <div class="d-row">
                        <div class="label__title">Телефон</div>
                        <div class="d-text_bold">
                          <a class="d-text_bold" :href="`tel:${phone}`" target="_self">{{ phone }}</a>
                        </div>
                      </div>
                    </template>
                    <template v-if="(email)">
                      <div class="d-row mt_4">
                        <div class="label__title">E-mail</div>
                        <div class="d-text_bold" v-html="$anchorme(email)"></div>
                      </div>
                    </template>
                    <template v-if="(otherContact)">
                      <div class="d-row mt_4">
                        <div class="label__title">Другое</div>
                        <div class="d-text_bold" v-html="$anchorme(otherContact)"></div>
                      </div>
                    </template>
                  </template>
                </div>
              </template>

              <template v-if="(isCurrentUser === false || (isCurrentUser === true && (isPublished )))">
                <div class="section_casting section_casting_big pb_0">
                  <div class="d-row">
                    <div class="label__title">Автор</div>
                    <div class="d-row w_100 justify_between">
                      <router-link :to="{ name: 'user.show', params: { username: author.username } }">
                        <div class="preview profile__preview">
                          <div class="d-row align_center">
                            <img :src="author.avatar" :alt="author.name" class="img preview__img preview__img_profile">
                            <div class="d-column">
                              <div class="preview__title preview__title_profile">{{ author.name }}</div>
                              <div class="preview__role preview__role_profile" v-if="(0)">
                                {{ author.category.join(', ') | truncate(18) }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </router-link>

                      <div class="section_casting_small">
                        <template v-if="(isArchived === true || isPublished === true)">
                          <social-share-updated :hover="true" :url="(APP_URL + href)" :clipboard="true" position="top" :title="title" :description="$truncate(this.$striptags(description), 50)" class="d-btn_round mr_4 flex_1">
                            <svg class="d-icon d-icon_size_sm">
                              <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_share" />
                            </svg>
                          </social-share-updated>
                        </template>
                        <template v-if="(isCurrentUser === false)">
                          <button class="d-btn d-btn_secondary_filled" @click="_handleClickAbuseCasting">Пожаловаться</button>
                        </template>
                        <template v-if="(isCurrentUser === true && (isPublished ))">
                          <button class="d-btn d-btn_secondary_filled" @click="_handleClickToArchiveCasting">
                            <div>В архив</div>
                          </button>
                        </template>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>

            <div class="sidebar page__sidebar page__sidebar_casting">
              <div class="sidebar__content align_between" :style="{ zIndex: 10, marginBottom: (isCurrentUser ? '50px' : '16px') }" v-sticky="{ zIndex: 10, stickyTop: 104, disabled: false }">
                <div class="section_casting section_casting_big bt_none pt_0">
                  <div class="d-list d-list_casting-info">
                    <template v-if="(isFasten === true)">
                      <div class="d-list__item">
                        <tooltip :class="['d-tooltip_declaration']" effect="scale" placement="bottom" :content="'К объявлению была применена опция «Премиум-размещение»'">
                          <div class="casting__option casting__option_premium">
                            <svg class="d-icon d-icon_size_12 fill_support-3 mr_2">
                              <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-favourite" />
                            </svg>
                            Премиум
                          </div>
                        </tooltip>
                      </div>
                    </template>
                    <template v-if="(isPublished === true)">
                      <div class="d-list__item">
                        <div class="casting__creation-date">{{ isToday(casting.publishedAt) ? `Сегодня, ${$moment(casting.publishedAt).format('HH:mm')}` : $moment(casting.publishedAt).format('DD MMM YYYY, HH:mm') }}</div>
                      </div>
                    </template>
                  </div>

                  <div class="d-column mb_8">
                    <div class="heading heading_h2">
                      <template v-if="( fee )">
                        <template v-if=(fee.amount)>
                          {{ fee.amount | currency(fee.currency) }} <template v-if="(fee.type)">/ {{ fee.type | lowercase }}</template>
                        </template>
                        <template v-else>Гонорар обсуждается</template>
                      </template>
                      <template v-else>Без гонорара</template>
                    </div>

                    <template v-if="(isCurrentUser === true)">
                      <div class="color_gray-2">Поддерживайте актуальную информацию по гонорару, чтобы избежать недопонимания с потенциальными исполнителями</div>
                      <template v-if="(isPublished === true)">
                        <div class="color_gray-2 mt_2">Для редактирования объявления обратитесь в техподдержку</div>
                      </template>
                    </template>

                    <template v-if="(isCurrentUser === false)">
                      <div class="color_gray-2">Актуальную информацию о гонораре можно узнать, связавшись лично с заказчиком</div>
                    </template>


                    <template v-if="(isCurrentUser === true)">
                      <div class="d-column w_100 mt_12">
                        <template v-if="(isPublished === true)">
                          <button class="d-btn d-btn_primary mb_3 w_100" @click="_handleClickScrollToResponses">Работа с откликами</button>
                        </template>
                        <template v-if="(isArchived === true)">
                          <button class="d-btn d-btn_primary mb_3 w_100" @click="_handleClickPublishedCasting">Опубликовать</button>
                        </template>

                        <template v-if="(isPublished === false || isAdmin)">
                          <button class="d-btn d-btn_outline w_100" @click="_handleClickEditCasting">Редактировать</button>
                        </template>
                      </div>
                    </template>
                  </div>

                  <template v-if="(isCurrentUser === true && isPublished === true)">
                    <div class="d-column mb_3">
                      <lm-loader v-if="promotion['prices']['loading']"></lm-loader>
                      <template v-if="hasPricePromotion">
                        <template v-if="(promotion[UP]['success'] === false && isFasten === false)">
                          <div :class="['d-card_placement', 'd-card_placement-premium', {'mb_6' : promotion[FASTEN]['success'] === false}]">
                            <template v-if="(promotion[FASTEN]['success'] === false)">
                              <div class="d-row align_center justify_between mb_3">
                                <div class="d-row align_center">
                                  <div class="heading heading_h4 mb_0 mr_3">Премиум-размещение</div>

                                  <svg class="d-icon d-icon_size_16 fill_support-3">
                                    <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-favourite" />
                                  </svg>
                                </div>

                                <tooltip style="line-height: 0" effect="scale" placement="left" :content="contentTooltipPremium">
                                  <svg class="d-tooltip__icon fill_gray-3">
                                    <use xlink:href="/dist/img/icons/verification/sprite.svg#icon_info" />
                                  </svg>
                                </tooltip>
                              </div>

                              <div class="mb_12">Увеличивает кол-во откликов в 3 раза</div>

                              <div class="sale-line d-text_bold color_white">Скидка {{ promotion['prices']['data'][FASTEN]['percent'] }}%</div>
                              <div class="line-border_absolute"></div>

                              <div class="pt_3 mb_4">Срок размещения: до <span class="tt_capitalize">{{ $moment().add('7', 'day').format('DD MMMM YYYY') }}</span><br> Оплата: за 7 дней</div>

                              <div class="d-row justify_between">
                                <template v-if="(promotion[FASTEN]['loading'] === false)">
                                  <button class="d-btn d-btn_primary min-w_178px mr_5" @click="_handleClickCreateCastingPromotion(FASTEN)">Выбрать</button>

                                  <div class="card__price">
                                    <div class="d-text_bold mb_1">{{ promotion['prices']['data'][FASTEN]['discount'] | currency('₽') }} / 7 дней</div>
                                    <div class="d-text_normal">{{ promotion['prices']['data'][FASTEN]['full'] | currency('₽') }} / 7 дней</div>
                                  </div>
                                </template>

                                <template v-if="(promotion[FASTEN]['loading'] === true)"><lm-loader class="w_100 mt_4"></lm-loader></template>
                              </div>
                            </template>

                            <template v-if="(promotion[FASTEN]['success'] === true)">
                              <div class="d-row align_center mb_2">
                                <div class="heading heading_h4 mb_0 mr_3">Объявление закреплено</div>
                                <svg class="d-icon d-icon_check d-icon_size_16">
                                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                                </svg>
                              </div>
                              <div>Ваше обьявление теперь закреплено в топе ленты на семь дней</div>
                            </template>
                          </div>
                        </template>

                        <template v-if="(promotion[FASTEN]['success'] === false)">
                          <div class="d-card_placement">
                            <template v-if="(promotion[UP]['success'] === false)">
                              <div class="d-row align_center justify_between mb_3">
                                <div class="d-row align_center">
                                  <div class="heading heading_h4 mb_0 mr_3">Поднятие в топ</div>

                                  <svg class="d-icon d-icon_check d-icon_size_16 fill_white rotate_180">
                                    <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-chevron-bottom" />
                                  </svg>
                                </div>

                                <tooltip style="line-height: 0" effect="scale" placement="left" :content="contentTooltipRepresentative">
                                  <svg class="d-tooltip__icon fill_gray-3">
                                    <use xlink:href="/dist/img/icons/verification/sprite.svg#icon_info" />
                                  </svg>
                                </tooltip>
                              </div>

                              <div class="mb_3">Увеличивает кол-во трафика в 2 раза</div>
                              <div class="line-border"></div>
                              <div class="mt_3 mb_4">Срок размещения: единоразово<br> Оплата: за 1 раз</div>

                              <div class="d-row justify_between">
                                <template v-if="(promotion[UP]['loading'] === false)">
                                  <button class="d-btn d-btn_primary min-w_178px mr_5" @click="_handleClickCreateCastingPromotion(UP)">Выбрать</button>

                                  <div class="card__price justify_center">
                                    <div class="d-text_bold">{{ promotion['prices']['data'][UP]['discount'] | currency('₽') }} / 1 раз</div>
                                  </div>
                                </template>

                                <template v-if="(promotion[UP]['loading'] === true)"><lm-loader class="w_100 mt_4"></lm-loader></template>
                              </div>
                            </template>

                            <template v-if="(promotion[UP]['success'] === true)">
                              <div class="d-row align_center mb_2">
                                <div class="heading heading_h4 mb_0 mr_3">Объявление поднято</div>
                                <svg class="d-icon d-icon_check d-icon_size_16">
                                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                                </svg>
                              </div>
                              <div>Ваше обьявление теперь поднято в топе ленты</div>
                            </template>
                          </div>
                        </template>
                      </template>
                    </div>
                  </template>

                  <div class="d-column w_100">
                    <template v-if="(isCurrentUser === false)">
                      <template v-if="(canRespond === true || isAuthorized === false || isResponded === true)">
                        <button class="d-btn d-btn_primary mb_3 w_100" :disabled="(isResponded === true)" @click="_handleClickResponse">
                          {{ (isResponded === true) ? 'Отклик отправлен' : 'Откликнуться' }}
                        </button>
                        <button class="d-btn d-btn_outline w_100" @click="_handleClickMessage">Написать сообщение</button>
                      </template>

                      <template v-else-if="(canRespond === false)">
                        <tooltip :class="['d-tooltip_declaration']" effect="scale" placement="bottom" :content="'Вы не можете откликнуться – данные в этом объявлении устарели.'">
                          <a href="javascript:void(0)" :class="['d-btn', 'd-btn_primary', 'w_100', 'disabled']" :style="{ pointerEvents: 'auto' }">
                            Кастинг неактуален
                          </a>
                        </tooltip>
                      </template>
                    </template>
                    <template v-if="(!isCurrentUser && isAdmin)">
                      <button class="d-btn d-btn_outline w_100 mt_3" @click="_handleClickEditCasting">Редактировать</button>
                    </template>

                    <template v-if="(isPublished === true && isAdmin === true)">
                      <button class="d-btn d-btn_outline mt_3 w_100" @click="_handleClickIssuesCasting">В АМО</button>
                    </template>
                  </div>
                </div>

                <template v-if="(isCurrentUser === false || (isCurrentUser === true && (isPublished )))">
                  <div class="section_casting section_casting_big p_0 bt_none">
                    <div class="d-row">
                      <template v-if="(isCurrentUser === false && true === false)">
                        <button :class="['d-btn', 'd-btn_secondary_filled', 'd-btn_favorites', 'mr_2', 'flex_1', { 'd-btn_favorites_active': casting.isFavorited }]" @click="_handleClickFavorite">
                          <svg class="d-icon d-icon_size_sm mr_2">
                            <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_like" />
                          </svg>
                          <div>В избранное</div>
                        </button>
                      </template>
                    </div>
                  </div>
                </template>
              </div>

              <template v-if="(isCurrentUser === true && isPublished === true)">
                <div class="d-row position_absolute bottom_0 left_0">
                  <div class="d-widget">
                    <svg class="icon d-widget__icon icon_size_sm">
                      <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_eye" />
                    </svg>
                    <div class="widget__count">{{ casting.counters.viewed }}</div>
                  </div>

                  <template v-if="(true === false)">
                    <div class="d-widget">
                      <svg class="icon d-widget__icon icon_size_sm">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_like" />
                      </svg>
                      <div class="widget__count">0</div>
                    </div>
                    <div class="d-widget">
                      <svg class="icon d-widget__icon icon_size_sm">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_profile" />
                      </svg>
                      <div class="widget__count">0</div>
                    </div>
                  </template>
                </div>
              </template>
            </div>
          </div>
        </div>

        <template v-if="(isCurrentUser === true || (isCurrentUser === false && isAdmin === true))">
          <div class="feed feed_responses" id="container_responses">
            <div class="d-row justify_center align_start">
              <div :class="['page__body', 'page__body_casting_inner', { 'br_none': ((loadingResponses === true && totalResponses === 0) || isEmptyResponses === true) }]">
                <no-ssr>
                  <section class="section_responses" v-infinite-scroll="_handleInfiniteScrollResponses" infinite-scroll-disabled="infiniteDisabledResponses" infinite-scroll-distance="900">

                    <div class="section_casting section_casting_big bt_none pt_0">
                      <div class="d-row align_end mb_3">
                        <div class="heading heading_h2 mb_0">Работа с откликами</div>
                        <div class="d-feed__counter">{{ totalResponses }}</div>
                      </div>
                      <div class="d-row">
                        <nav class="d-nav d-nav_categories d-nav_categories_feed d-nav_categories_responses">
                          <div class="d-nav__list d-nav__list_categories">
                            <div :class="['d-nav__item', 'd-nav__item_categories', { 'd-nav__item_categories_active': (fieldsResponses.state === RECEIVED) }]" @click="_handleClickSetResponseState(RECEIVED)">Полученные <span v-if="notReadResponses">(+{{ notReadResponses }})</span></div>
                            <div :class="['d-nav__item', 'd-nav__item_categories', { 'd-nav__item_categories_active': (fieldsResponses.state === SELECTED) }]" @click="_handleClickSetResponseState(SELECTED)">Шорт-лист</div>
                          </div>
                        </nav>
                      </div>
                    </div>

                    <intersect v-for="response in responses" :key="response.id" :throttle="1000" :disabled="(isCurrentUser === false || response.read === true)" @enter="_handleEnterIntersectedResponse(response.id, response.read)" rootMargin="10% 0px -10% 0px" :threshold="[0.8]">
                      <response-card :response="response" @destroy="_handleDestroyResponse" @change="_handleChangeResponse" :hideAction="(isArchived === true || isCurrentUser === false)"></response-card>
                    </intersect>
                  </section>
                </no-ssr>

                <lm-loader v-if="loadingResponses"></lm-loader>
              </div>

              <div class="sidebar page__sidebar page__sidebar_casting">
                <div class="sidebar__content">
                  <template v-if="(loadingResponses === false && isEmptyResponses === false)">

                    <template v-if="(fieldsResponses.state === SELECTED || fieldsResponses.state === RECEIVED)">
                      <div class="section_casting section_casting_big bt_none pt_0">
                        <div class="d-column">
                          <div class="heading heading_h5">Напишите всем</div>
                          <div class="color_gray-2">Отправьте сообщения всем кандидатам в один клик с помощью кнопки «Написать всем»</div>
                          <button class="d-btn d-btn_primary w_100 mt_6" @click="_handleClickSendSelectedResponsesMessage">Написать всем</button>
                        </div>
                      </div>
                    </template>

                    <div class="section_casting section_casting_big pt_0">
                      <template v-if="(fieldsResponses.state === RECEIVED)">
                        <div class="d-column mb_12 mt_12">
                          <div class="heading heading_h5">Сортировка</div>
                          <div class="color_gray-2">Нажав кнопку «В шорт-лист», вы переместите кандидата во вкладку шорт-лист для последующей работы с ним</div>
                        </div>
                      </template>

                      <div class="d-column">
                        <div class="heading heading_h5">Больше данных</div>
                        <div class="color_gray-2 mb_2">Если вы не нашли в профиле кандидата нужной информации, то обратитесь к нему напрямую с помощью кнопки «Написать сообщение»</div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
          <template v-if="isEmptyResponses">
            <div class="page__plug page__plug_waiting">
              <svg class="d-icon d-icon_size_64 mb_5 fill_main">
                <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-wait"/>
              </svg>
              <div class="heading heading_h5">Ожидайте</div>
              <div>Первые отклики появятся в<br>ближайшее время</div>
            </div>
          </template>
        </template>

        <template v-if="(isCurrentUser === false && isResponded && response)">
          <div class="response response_contractor" id="container_responses">
            <div class="d-row justify_center align_start">
              <div class="page__body page__body_casting_inner section_responses">
                <div class="section_casting section_casting_big bt_none pt_0">
                  <div class="d-row justify_between align_center w_100">
                    <div class="heading heading_h2 mb_0">Мой отклик</div>
                  </div>
                </div>

                <response-card :response="response" class="pb_0"></response-card>
              </div>

              <div class="sidebar page__sidebar page__sidebar_casting">
                <div class="sidebar__content">
                  <div class="section_casting section_casting_big bt_none pt_0">
                    <div class="d-column mb_12">
                      <div class="heading heading_h5">Ожидайте</div>
                      <div class="color_gray-2">Ваш отклик рассмотрят в ближайшее время</div>
                    </div>

                    <div class="d-column">
                      <div class="heading heading_h5">Больше данных</div>
                      <div class="color_gray-2 mb_2">Заполненный профиль увеличивает ваши шансы быть приглашенными на кастинг из-за повышенного внимания к вашей кандидатуре</div>
                      <router-link class="d-link fw_600" :to="{ name: 'settings.index' }">Заполнить профиль</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </template>

      <template v-if="(!casting || error)">
        <span>Ошибка, кастинг не найден.</span>
      </template>

      <casting-issues-modal></casting-issues-modal>
      <selected-responses-message-modal></selected-responses-message-modal>
      <lm-main-footer class="footer-static grey"></lm-main-footer>
    </div>
  </div>
</template>

<script>
  import { has, HEADER_HEIGHT, redirect } from '@utils'
  import { mapGetters, mapActions, mapMutations } from 'vuex'

  import Casting from '@modules/Board/Casting'
  import ResponseCard from '@components/Board/Casting/Response.vue'
  import CastingIssuesModal from '@components/Board/Casting/Modals/Issues.vue'
  import SelectedResponsesMessageModal from '@components/Board/Casting/Modals/Message.vue'

  import { UP, FASTEN } from '@modules/Board/Enums/PromotionType'
  import { RECEIVED, SELECTED } from '@modules/Board/Casting/Response/Enums/ResponseState'
  import { REJECTED, MODERATION, PUBLISHED, DRAFT, ARCHIVED } from '@modules/Board/Casting/Enums/CastingState'

  const APP_URL = process.env.APP_URL
  import { createHelpers } from 'vuex-map-fields'

  const { mapFields } = createHelpers({
    getterType: 'board/casting/response/getField',
    mutationType: 'board/casting/response/updateField',
  })

  export default {
    components: { ResponseCard, SelectedResponsesMessageModal, CastingIssuesModal },
    metaInfo () {
      return {
        title: this.title,
        meta: [
          { name: 'og:type', content: 'website' },
          { name: 'og:title', content: this.title },
          { name: 'description', content: this.$truncate(this.$htmlspecialchars(this.$striptags(this.seoDescription)), 200) },
          { name: 'og:description', content: this.$truncate(this.$striptags(this.seoDescription), 200) },
          { name: 'og:image', content: 'https://s3.eu-central-1.amazonaws.com/linkmuse/upload/logo/logo_without_bottom_text_682.png' }
        ]
      }
    },
    async asyncData ({ store, route }) {
      const { id } = route.params

      await store.dispatch('board/casting/getCastingById', { id }).catch((error) => {
        const { response: { status = 500, url = null } } = error
        throw ({ code: status, message: 'Error show casting', url })
      })

      await store.dispatch('board/casting/response/clearResponses')
    },
    data () {
      return {
        has,
        APP_URL,
        UP, FASTEN,
        RECEIVED, SELECTED,
        hideContacts: true,
        promotion: {
          payment: { form: {}, url: null },
          [UP]: { success: false, loading: false, price: null, id: null, name: null },
          [FASTEN]: { success: false, loading: false, price: null, id: null, name: null },
          prices: { data: { [UP]: { full: 0, percent: 0, discount: 0 }, [FASTEN]: { full: 0, percent: 0, discount: 0 } }, loading: false, error: false }
        }
      }
    },
    computed: {
      ...mapFields({
        fieldsResponses: 'responses.filter'
      }),
      ...mapGetters({
        role: 'auth/getRole',
        user: 'auth/getAuthUser',
        profile: 'auth/getProfile',
        isAuthorized: 'auth/isAuthorized',
        error: 'board/casting/getCastingError',
        casting: 'board/casting/getCastingData',
        loading: 'board/casting/getCastingLoading',
        responses: 'board/casting/response/getResponsesData',
        totalResponses: 'board/casting/response/getResponsesTotal',
        errorResponses: 'board/casting/response/getResponsesError',
        offsetResponses: 'board/casting/response/getResponsesOffset',
        loadingResponses: 'board/casting/response/getResponsesLoading',
        notReadResponses: 'board/casting/response/getNotReadResponsesTotal',
        infiniteDisabledResponses: 'board/casting/response/getResponsesInfiniteDisabled'
      }),
      isCustomer () {
        return (this.role === 'customer')
      },
      isExecutor () {
        return (this.role === 'executor')
      },
      hasSecondaryUser () {
        return (this.user && this.user.hasOwnProperty('secondary_user')) ? this.user['secondary_user'] : false
      },
      title () {
        return this.casting ? this.casting.name ? this.casting.name : 'Черновик' : 'Ошибка'
      },
      description () {
        let { description } = this.casting;

        if (description) {
          description = this.$htmlspecialchars(description) // Escape special characters to HTML
          description = this.$markdown(description) // Transform markdown to html
          description = this.$anchorme(description) // find link and to <a>
        }

        return description;
      },
      isCurrentUser () {
        return (this.user && this.user.id === this.casting.user.id)
      },
      professions () {
        return (this.casting.professions && this.casting.professions.length) ? this.casting.professions.map((p => p.text)) : []
      },
      genders () {
        return (this.casting.genders && this.casting.genders.length) ? this.casting.genders.map((gender => gender.text)) : []
      },
      ages () {
        let attribute = ''
        if (this.casting.ageFrom || this.casting.ageTo) {
          if (this.casting.ageFrom) {
            attribute += this.casting.ageTo
              ? 'от' + ' ' + this.casting.ageFrom + ' - '
              : 'от' + ' ' + this.$pluralize(this.casting.ageFrom, ['года', 'лет', 'лет'])
          }

          if (this.casting.ageTo && this.casting.ageFrom) {
            attribute += this.$pluralize(this.casting.ageTo, ['года', 'лет', 'лет'])
          } else if (this.casting.ageTo && !this.casting.ageFrom) {
            attribute += 'до ' + this.$pluralize(this.casting.ageTo, ['года', 'лет', 'лет'])
          }
        }

        if ((this.casting.ageFrom && this.casting.ageTo) && this.casting.ageFrom === this.casting.ageTo) {
          attribute = this.$pluralize(this.casting.ageFrom, ['года', 'лет', 'лет'])
        }

        return attribute
      },
      category () {
        return (this.casting.category && has(this.casting.category, 'text')) ? this.casting.category.text : null
      },
      categoryId () {
        return (this.casting.category && has(this.casting.category, 'id')) ? this.casting.category.id : null
      },
      fee () {
        if (!this.casting.fee || (this.casting.fee && this.casting.fee.available === false)) return false
        return Casting.getAmountSemanticCatalog(this.casting.fee)
      },
      address () {
        let attribute = ''

        if (has(this.casting, 'country.text')) {
          attribute += this.casting.country.text
        }

        if (has(this.casting, 'city.text')) {
          attribute += (has(this.casting, 'country.text')) ? ', ' : ''
          attribute += this.casting.city.text
        }

        if (has(this.casting, 'address')) {
          attribute += (has(this.casting, 'country.text') || has(this.casting, 'city.text')) ? ', ' : ''
          attribute += this.casting.address
        }

        return attribute
      },
      author () {
        return this.casting.user
      },
      characterType () {
        return this.casting.characterType
      },
      references () {
        return (this.casting.references && this.casting.references.length) ? this.casting.references : []
      },
      href () {
        let { id, slug } = this.casting
        const query = this.isAuthorized && this.user ? { ref: this.user.id } : {}

        const { href } = this.$router.resolve({ name: 'board.castings.show', params: { id, slug }, query })
        return href
      },
      isResponded () {
        return this.casting.isResponded || false
      },
      response () {
        return this.casting.response || null
      },
      city () {
        return has(this.casting, 'city.id') ? this.casting.city : null
      },
      state () {
        return this.casting.state
      },
      isModeration () {
        return (this.state === MODERATION)
      },
      isPublished () {
        return (this.state === PUBLISHED)
      },
      isDraft () {
        return (this.state === DRAFT)
      },
      isArchived () {
        return (this.state === ARCHIVED)
      },
      isRejected () {
        return (this.state === REJECTED)
      },
      isEmptyResponses () {
        return (this.loadingResponses === false && this.totalResponses === 0)
      },
      isAdmin () {
        return (this.user && this.user.hasOwnProperty('isAdmin') && this.user['isAdmin'] === true)
      },
      isCastingOnline () {
        return Boolean(this.casting.isOnline)
      },
      canRespond () {
        return has(this.casting, 'abilities.respond') ? this.casting['abilities']['respond'] : false
      },
      canRespondWithoutSelectProfession () {
        return has(this.casting, 'abilities.respondWithoutSelectProfession') ? this.casting['abilities']['respondWithoutSelectProfession'] : false
      },
      phone () {
        return (has(this.casting, 'phone') && this.casting['phone']) ? this.casting['phone'] : null
      },
      email () {
        return (has(this.casting, 'email') && this.casting['email']) ? this.casting['email'] : null
      },
      otherContact () {
        return (has(this.casting, 'other') && this.casting['other']) ? this.casting['other'] : null
      },
      hasContacts () {
        return (Boolean(this.phone) || Boolean(this.email) || Boolean(this.otherContact))
      },
      isFasten () {
        return this.casting.isFasten || false
      },
      canRespondOnCasting () {
        return (this.user && this.user.hasOwnProperty('can_respond_on_casting') ? this.user['can_respond_on_casting'] : false)
      },
      forTrusted () {
        return this.casting.forTrusted || false
      },
      portfolioBadQuality () {
        return (this.user && this.user.hasOwnProperty('portfolio_bad_quality') ? this.user['portfolio_bad_quality'] : null)
      },
      hasCertification () {
        return (this.user && this.user.hasOwnProperty('has_certification') ? this.user['has_certification'] : false)
      },
      hasPortfolio () {
        return (this.user && this.user.hasOwnProperty('has_portfolio') ? this.user['has_portfolio'] : false)
      },
      userBalance () {
        return Number(this.user.balance)
      },
      seoDescription () {
        let fee = ''
        let desc = this.professions.length ? `Требуется ${this.professions.join(', ').toLowerCase()}` : 'Кастинг'

        if (this.category) {
          const category = this.$seo.forCastingCategory(this, this.casting.category)

          if (category) desc += ` для ${category.toLowerCase()}`
        }

        if (this.city) {
          const city = this.$seo.inCity(this, this.casting.city)

          if (city) desc += ` в ${city}`
        }

        if (this.fee) {
          if (this.fee.amount) {
            fee = `гонорар ${parseInt(this.fee.amount)} ${this.fee.currency} ${this.fee.type ? `${this.fee.type}` : ''}`
          } else {
            fee = this.$t('casting-page.casting-page-four.fee-to-be-specified')
          }
        } else {
          fee = this.$t('casting-page.casting-page-two.no-fee')
        }

        return `${desc}${fee ? `, ${fee.toLowerCase()}` : ''}. Дата публикации ${this.$moment(this.casting.publishedAt).format('DD.MM.YY')}`
      },
      contentTooltipPremium () {
        return `<div style="max-width: 195px;">
          <span style="display: block; margin: 0;">
              Получите в 3 раза больше откликов, закрепив объявление в топе ленты на семь дней
          </span>
        </div>`
      },
      contentTooltipRepresentative () {
        return `<div style="max-width: 195px;">
          <span style="display: block; margin: 0;">
              Получите новые отклики и трафик, единоразово подняв объявление в топ ленты
          </span>
        </div>`
      },
      hasPricePromotion () {
        return (Boolean(this.promotion.prices['data'][FASTEN]['discount'] && Boolean(this.promotion.prices['data'][UP]['discount']) && this.promotion.prices.loading === false))
      }
    },
    created () {
      if (this.isCurrentUser || (this.isCurrentUser === false && this.isAdmin)) {
        this.fieldsResponses['state'] = RECEIVED

        const { id } = this.$route.params
        const fields = this.fieldsResponses

        this._fetchResponses({ id, fields, offset: 0 }).then(() => {
          if (has(this.$route.query, 'responses')) {
            this._handleClickScrollToResponses()
          }
        })
      }
    },
    mounted () {
      let { query: { ref }, path } = this.$route

      if (ref) {
        this.$localStorage.set('redirect.register', path)
      }

      if (this.isAuthorized && this.isCurrentUser) {
        this.hideContacts = false

        this._getPricePromotion()
      }

      this.$root.$on('user-updated-state-folder', (userId, inFolder) => {
        let responses = this.responses.filter(p => p['user']['id'] === userId)

        responses.forEach((r) => this._setFieldResponsesData({ id: r['id'], key: 'user.inFolder', value: inFolder }))
      })

      let { id } = this.casting
      this.$root.$on('response-created', (castingId, response) => {
        if (castingId === id) {
          this.setFieldCastingData({ key: 'isResponded', value: true })
          this.setFieldCastingData({ key: 'response', value: response })
          this.$nextTick(() => this._handleClickScrollToResponses())
        }
      })

      if (this.canRespond) {
        if (has(this.$route.query, 'response')) {
          this._handleClickResponse()
        }
      }
    },
    methods: {
      ...mapActions({
        _getPromotionSources: 'board/getPromotionSources',
        setFieldCastingData: 'board/casting/setFieldCastingData',
        _clearResponses: 'board/casting/response/clearResponses',
        _fetchResponses: 'board/casting/response/fetchResponses',
        _setFieldResponsesData: 'board/casting/response/setFieldResponsesData',
        _deleteRowResponsesData: 'board/casting/response/deleteRowResponsesData'
      }),
      ...mapMutations({
        _setNotReadResponsesCount: 'board/casting/response/SET_NOT_READ_RESPONSES_DATA',
      }),
      _getPricePromotion () {
        this.promotion.prices.loading = true

        this.$api.get(`api/v2/promotions/prices/board_casting`).then((response) => {
          let { data: { data } } = response

          Object.assign(this.promotion.prices, { data, loading: false, error: false })
        }, (error) => {
          const { response: { data, status }} = error

          Object.assign(this.promotion.prices, { error: true, loading: false })
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка при получении цен.' })

          throw new Error('Error fetch professions prices promotion')
        })
      },
      _handleClickPreviousPage () {
        if (window.history.length > 2) {
          this.$router.go(-1)
        } else this.$router.push({ name: 'boards.castings.index' })
      },
      _handleClickEditCasting () {
        let { id } = this.casting
        this.$router.push({ name: 'board.castings.edit', params: { id } })
      },

      _handleClickAbuseCasting () {
        if (this.isAuthorized === false) {
          this._handleClickAbuseWithoutAuthorized()
        } else this._handleAbuseCasting()
      },
      _handleClickAbuseWithoutAuthorized () {
        this.$localStorage.set('redirect.register', this.href)
        this.$nextTick(() => {
          redirect('register')
        })
        // this.$root.$emit('open-modal-access-global', this.href)
      },
      _handleAbuseCasting () {
        let { id } = this.casting
        this.$root.$emit('open-modal-abuse-create', { id, type: 'board_casting' })
      },
      _handleClickPublishedCasting () {
        return new Promise((resolve, reject) => {

          let { id, state } = this.casting

          if (has(this.profile, 'without_moderate.castings') && this.profile['without_moderate']['castings']) {
            this.setFieldCastingData({ key: 'state', value: PUBLISHED })
          } else this.setFieldCastingData({ key: 'state', value: MODERATION })

          this.$api.post(`api/v2/boards/castings/${id}/publish`).then((response) => {
            const { data } = response

            resolve && resolve()
          }, (error) => {
            const { response: { data }, response: { status } } = error

            this.setFieldCastingData({ key: 'state', value: state })
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка при публикации кастинга.' })

            reject && reject()

            throw new Error('Error draft casting')
          })
        })
      },
      _handleClickUnpublishedCasting () {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'снять',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите снять объявление с публикации?'
        }).then(() => {
          this._handleDraft()
        }).catch(() => {})
      },
      _handleClickToArchiveCasting () {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'в архив',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите удалить и перенести объявление в архив?'
        }).then(() => {
          this._handleArchive()
        }).catch(() => {})
      },
      _handleClickFavorite () {
        if (this.isAuthorized === false) {
          this._handleClickFavoriteWithoutAuthorized()
        } else this._handleFavorite()
      },
      _handleClickFavoriteWithoutAuthorized () {
        this.$localStorage.set('redirect.register', this.href)
        this.$nextTick(() => {
          redirect('register')
        })
        // this.$root.$emit('open-modal-access-favorite', this.href)
      },
      _handleFavorite () {
        return new Promise((resolve, reject) => {
          let { id, isFavorited } = this.casting
          this.setFieldCastingData({ key: 'isFavorited', value: (!isFavorited) })

          this.$api.post('api/v2/boards/favorites', { id, type: 'board_casting' }).then((response) => {
            const { data: { isFavorited } } = response
            resolve && resolve()
          }, (error) => {
            const { response: { data }, response: { status } } = error

            this.setFieldCastingData({ key: 'isFavorited', value: (isFavorited) })
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            reject && reject()

            throw new Error('Error create favorites')
          })
        })
      },
      _handleClickResponse () {
        if (this.isAuthorized === true) {
          if (this.isResponded === false) {
            if (this.canRespond && this.canRespondWithoutSelectProfession) {
              let message = (this.city && this.user && has(this.user, 'city.id') && this.user.city.id !== this.city.id)
                ? `Кастинг проходит в городе ${this.city.text}` : ''
              this.$confirmResponse({
                message,
                cancelTxt: '',
                confirmTxt: 'Отправить',
                title: this.casting.name
              }).then(() => this._handleResponse()).catch(() => {})
            } else if (this.canRespond && this.canRespondWithoutSelectProfession === false) {
              this.$modalRouter.push({ name: 'board.castings.responses.create', props: { casting: this.casting } })
            } else this.$notify({ type: 'error', title: 'Ошибка', text: 'Ограничение отклика на кастинг.' })
          } else this.$notify({ type: 'error', title: 'Ошибка', text: 'Отклик уже отправлен.' })
        } else this._handleClickResponseWithoutAuthorized()
      },
      _handleClickResponseWithoutAuthorized () {
        this.$localStorage.set('redirect.register', this.href)
        this.$nextTick(() => {
          redirect('register')
        })
        // this.$root.$emit('open-modal-access-response', this.href)
      },
      _handleResponse () {
        return new Promise((resolve, reject) => {
          let { id } = this.casting

          this.setFieldCastingData({ key: 'isResponded', value: true })

          this.$api.post(`api/v2/boards/castings/${id}/responses`).then((response) => {
            const { data: { data } } = response

            this.setFieldCastingData({ key: 'response', value: data })
            this.$nextTick(() => this._handleClickScrollToResponses())

            resolve && resolve()
          }, (error) => {
            const { response: { data, status } } = error

            this.setFieldCastingData({ key: 'isResponded', value: false })
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка' })

            reject && reject()

            throw new Error('Error create response')
          })
        })
      },
      _handleClickMessage () {
        if (this.isAuthorized === false) {
          this._handleClickMessageWithoutAuthorized()
        } else this._handleMessage()
      },
      _handleClickMessageWithoutAuthorized () {
        this.$localStorage.set('redirect.register', this.href)
        this.$nextTick(() => {
          redirect('register')
        })
        // this.$root.$emit('open-modal-access-message', this.href)
      },
      _handleMessage () {
        let uid = this._.sortBy([ this.author.id, this.user.id ]).toString()
        // this.$router.push({ name: 'messages.show', params: { uid } })
        let { href } = this.$router.resolve({ name: 'messages.show', params: { uid } })
        window.open(href, '_blank')
      },
      _handleDraft () {
        return new Promise((resolve, reject) => {
          this.loading = true

          let { id } = this.casting
          this.$api.post(`api/v2/boards/castings/${id}/draft`).then((response) => {
            const { data } = response
            this.setFieldCastingData({ key: 'state', value: DRAFT })

            this.loading = false
            resolve()
          }, (error) => {
            const { response: { data }, response: { status } } = error

            this.loading = false
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            reject()

            throw new Error('Error draft casting')
          })
        })
      },
      _handleArchive () {
        return new Promise((resolve, reject) => {
          this.loading = true

          let { id } = this.casting
          this.$api.post(`api/v2/boards/castings/${id}/archive`).then((response) => {
            const { data } = response
            this.setFieldCastingData({ key: 'state', value: ARCHIVED })

            this.loading = false

            resolve()
          }, (error) => {
            const { response: { data, status } } = error

            this.loading = false
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            reject()

            throw new Error('Error draft casting')
          })
        })
      },
      _handleClickSetResponseState (value) {
        const { id } = this.$route.params
        const { fieldsResponses: { state }, loadingResponses: loading } = this

        if (loading) return false

        if (state !== value) {
          this.fieldsResponses['state'] = value
          this._clearResponses().then(() => {
            this._fetchResponses({ id, fields: this.fieldsResponses, offset: 0 })
          }).catch(() => {})
        }
      },
      _handleInfiniteScrollResponses () {
        const { id } = this.$route.params
        const { fieldsResponses: fields, offsetResponses: offset } = this
        this.$nextTick(() => this._fetchResponses({ id, fields, offset }))
      },
      _handleChangeResponse (responseId, key, value) {
        this._setFieldResponsesData({ id: responseId, key, value })
      },
      _handleDestroyResponse (responseId) {
        this._deleteRowResponsesData(responseId)
      },
      _handleEnterIntersectedResponse (responseId, read) {
        if (read === true) return false

        this._setNotReadResponsesCount(this.notReadResponses ? this.notReadResponses - 1 : 0 )
        this._setFieldResponsesData({ id: responseId, key: 'read', value: true })
        this._handleReadResponse(responseId).then(() => {}).catch(() => {
          this._setFieldResponsesData({ id: responseId, key: 'read', value: false })
        })
      },
      _handleReadResponse (id) {
        return new Promise((resolve, reject) => {

          this.$api.post(`api/v2/boards/castings/responses/${id}/read`).then((response) => {
            let { data } = response

            resolve && resolve(data)
          }, (response) => {
            const { response: { data, status } } = error

            reject && reject(data)
            throw new Error('Error read response.')
          })
        })
      },
      _handleClickScrollToResponses () {
        this.$scrollTo('#container_responses', 500, { offset: (-10 - HEADER_HEIGHT) })
      },
      _handleClickSendSelectedResponsesMessage () {
        this.$emit('open-modal-send-selected-responses-messages', this.casting, this.totalResponses, this.fieldsResponses['state'])
      },
      _handleClickCreateCastingPromotion (type) {
        let { id } = this.casting
        this._createCastingPromotion(id, type)

        let event = (type === UP) ? 'up_ad_casting' : 'fasten_ad_casting'
        this.$gtm.trackEvent({ event })
      },
      _createCastingPromotion (castingId, type) {
        this.promotion[type]['loading'] = true

        let data = { promotedType: 'board_casting', promotedId: castingId, typeName: type }

        this.$api.post(`api/v2/boards/promotions`, data).then(response => {
          let { data: { data: { id, type: { price } } } } = response

          if (this.userBalance >= Number(price)) {
            this._activatePromotion(id, type).then(() => {
              this.promotion[type]['success'] = true
              this.promotion[type]['loading'] = false
            }).catch(() => { this.promotion[type]['loading'] = false })
          } else {
            this._getPaymentFields(price).then(() => {
              this._initCloudPaymentsWidget(id, type).then(() => {
                this.promotion[type]['success'] = true
                this.promotion[type]['loading'] = false
              }).catch(() => { this.promotion[type]['loading'] = false })
            }).catch(() => { this.promotion[type]['loading'] = false })
          }
        }).catch((err) => {
          this.promotion[type]['loading'] = false
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

          throw new Error(`Error create casting promotion.`)
        })
      },
      _activatePromotion (id, type) {
        return new Promise((resolve, reject) => {
          this.$api.post(`api/v2/boards/promotions/${id}/activate`).then((response) => {
            const { data } = response
            if (type === FASTEN) {
              this.setFieldCastingData({ key: 'isFasten', value: true })
            }
            resolve && resolve()
          }, (error) => {
            const { response: { data, status } } = error

            reject && reject()
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            throw new Error(`Error payment promotion #${id}`)
          })
        })
      },
      _getPaymentFields (price) {
        return new Promise((resolve, reject) => {
          let amount = parseFloat(price).toFixed(2)

          if (!amount) reject && reject('Need price')

          this.$api.post(`api/v2/billing/payment`, { amount }).then(response => {
            const { data: { form, url } } = response
            this.promotion.payment = { form, url }

            resolve && resolve()
          }).catch((err) => {
            reject && reject()
            throw new Error(`Error get payment fields`)
          })
        })
      },
      _initCloudPaymentsWidget (id, type) {
        if (typeof cp !== 'object') {
          throw new Error('Error load CloudPayments')
        }

        return new Promise((resolve, reject) => {
          const widget = new cp.CloudPayments()
          let { publicId, description, amount, currency, invoiceId, accountId } = this.promotion.payment.form

          widget.charge({
            publicId,
            description,
            amount: Number(amount),
            currency,
            invoiceId,
            accountId
          }, (options) => {
            this._activatePromotion(id, type).then(() => {
              resolve && resolve()
            }).catch(() => { reject && reject() })
          }, (reason, options) => {
            reject && reject()
            throw new Error(`Error payment promotion #${id}. ${reason}`)
          })
        })

      },
      isToday(date) {
        let context = this.$moment(date);
        return this.$moment().isSame(context, 'd')
      },
      _handleClickIssuesCasting () {
        let { id } = this.casting
        this.$emit('open-modal-issues-casting', id)
      },
      _handleShowContacts () {
        this.hideContacts = false
        this.$gtm.trackEvent({ event: 'show_contact_casting' })
      },
      _handleClickCreateAccount (selectedRole = null) {
        this.$loading.show({ loader: 'dots', color: '#0063da' })

        this.$api.patch('api/v1/auth/role').then((response) => {
          let { data: { token, role } } = response

          this.$auth.storeSession({ token, role })

          this.$store.dispatch('auth/setToken', { accessToken: token, refreshToken: token }).then(result => {
            this.$store.dispatch('auth/getUserByAPI').then(result => {

              if (selectedRole) this.$localStorage.set('register.role', selectedRole)
              this.$nextTick(() => {
                this.authUserOnSession(token, this.user.href)
              })
            })
          })
        }, (error) => {
          const { response: { data }, response: { status }} = error
          throw new Error('Error change role')
        })
      },
      authUserOnSession (token, url) {
        this.createAuthForm(token, url)
      },
      createAuthForm (token, url) {
        let form = document.createElement("form")

        let elToken = document.createElement("input")
        let elUrl = document.createElement("input")

        form.method = "POST"
        form.action = "/api/auth/by-token"

        elToken.type = "hidden"
        elToken.value = token
        elToken.name = 'token'
        form.appendChild(elToken)

        elUrl.type = "hidden"
        elUrl.value = url
        elUrl.name = "url"
        form.appendChild(elUrl);

        document.body.appendChild(form);

        this.$nextTick(() => {
          form.submit()
        })
      }
    }
  }
</script>

<style scoped>

</style>
