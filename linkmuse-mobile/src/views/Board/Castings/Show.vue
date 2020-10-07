<template>
  <div>
    <div :class="['page', 'page_declaration', 'page_declaration_casting', { 'pb_0': (showOtherCastings === true) }]">
      <div class="container container_declaration container_declaration_casting">
        <div class="page__header page__header_declaration">
          <div class="block block_declaration">
            <div class="row row_justify_between">
              <button class="btn btn_rounded" @click="_handleClickPreviousPage">
                <svg class="icon icon_back">
                  <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_back" />
                </svg>
              </button>
              <template v-if="(casting && error === false)">
                <div class="row">
                  <social-share-popup :url="(APP_URL + href)" :title="title" :description="$truncate(this.$striptags(description), 50)">
                    <button class="btn btn_rounded">
                      <svg class="icon icon_share">
                        <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_share" />
                      </svg>
                    </button>
                  </social-share-popup>

                  <template v-if="(isCurrentUser === false && true === false)">
                    <button :class="['btn', 'btn_rounded', 'btn_like', { 'btn_like_active': (casting.isFavorited) }]" @click="_handleClickFavorite">
                      <svg class="icon icon_like">
                        <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" />
                      </svg>
                    </button>
                  </template>

                  <template v-if="(isAuthorized === true)">
                    <template v-if="(isCurrentUser === true && isPublished === false)">
                      <button :class="['btn', 'btn_rounded', 'btn_edit']" @click="_handleClickEditCasting">
                        <svg class="icon icon_edit">
                          <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_edit" />
                        </svg>
                      </button>
                    </template>
                  </template>

                  <template v-if="(isAuthorized === true)">
                    <button class="btn btn_rounded" @click="_handleClickActionSheet">
                      <svg class="icon icon_options">
                        <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_options" />
                      </svg>
                    </button>
                  </template>
                </div>
              </template>
            </div>
          </div>
        </div>
        <template v-if="(casting && error === false)">
          <div class="page__body page__body_declaration">
            <template>
              <template v-if="(isRejected === true)">
              <span class="declaration__status declaration__status_refused">{{ $t('casting-page.rejected-two.rejected') }}:
                {{ has(casting, 'rejection.cause.text') ? casting['rejection']['cause']['text'] : '' }}.
                {{ has(casting, 'rejection.comment') ? casting['rejection']['comment'] : '' }}</span>
              </template>

              <template v-if="(isModeration === true)">
                <span class="declaration__status declaration__status_moderation">{{ $t('casting-page.casting-on-moderation-two.on-moderation') }}</span>
              </template>

              <template v-if="(isDraft === true)">
                <span class="declaration__status declaration__status_draft">{{ $t('casting-page.publish-or-archive.draft') }}</span>
              </template>

              <template v-if="(isArchived === true)">
                <span class="declaration__status declaration__status_archive">{{ $t('casting-page.archive-two.archive') }}</span>
              </template>
            </template>

            <div class="block block_declaration">

              <div class="list list__title-info mb_3">
                <template v-if="(isFasten === true)">
                  <div class="list__item">
                    <svg class="icon icon_size_12 fill_support-3 mr_2">
                      <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-favourite" />
                    </svg>
                    Премиум
                  </div>
                </template>
                <template v-if="(isPublished === true)">
                  <div class="list__item casting__creation-date">
                    {{ isToday(casting.publishedAt) ? 'Сегодня' : $moment(casting.publishedAt).format('DD MMMM YYYY') }}
                  </div>
                </template>
              </div>

              <div class="heading heading_h4 mb_0">{{ casting.name }}</div>
              <div class="description description_declaration description_declaration_casting" v-html="description"></div>
            </div>

            <template v-if="(( professions && professions.length) || (genders && genders.length) || ages )">
              <div class="block block_declaration">

                <template v-if="( professions && professions.length )">
                  <div class="column column_declaration">
                    <div class="label label_declaration">{{ $t('casting-page.castings.role') }}</div>
                    <div class="text text_declaration" id="text_declaration_casting_roles">{{ professions.join(', ') }}</div>
                  </div>
                </template>

                <template v-if="( genders && genders.length )">
                  <div class="column column_declaration">
                    <div class="label label_declaration">{{ $t('casting-page.castings.gender') }}</div>
                    <div class="text text_declaration" id="text_declaration_casting_genders">{{ genders.join(', ') }}</div>
                  </div>
                </template>

                <template v-if="( ages )">
                  <div class="column column_declaration">
                    <div class="label label_declaration">{{ $t('casting-page.casting-page.age') }}</div>
                    <div class="text text_declaration" id="text_declaration_casting_ages">{{ ages }}</div>
                  </div>
                </template>
              </div>
            </template>

            <template v-if=" (category || fee )">
              <div class="block block_declaration">
                <template v-if="( category )">
                  <div class="column column_declaration">
                    <div class="label label_declaration">{{ $t('casting-page.castings.category') }}</div>
                    <div class="text text_declaration" id="text_declaration_casting_category">{{ category }}</div>
                  </div>
                </template>


                <div class="column column_declaration">
                  <div class="label label_declaration">{{ $t('casting-page.castings.fee') }}</div>
                  <div class="text text_declaration" id="text_declaration_casting_fee">
                    <template v-if="( fee )">
                      <template v-if=(fee.amount)>
                        {{ fee.amount | currency(fee.currency) }} <template v-if="(fee.type)">/ {{ fee.type | lowercase }}</template>
                      </template>
                      <template v-else>{{ $t('casting-page.casting-page-four.fee-to-be-specified') }}</template>
                    </template>
                    <template v-else>{{ $t('casting-page.casting-page-two.no-fee') }}</template>
                  </div>
                </div>

              </div>
            </template>

            <div class="block block_declaration">
              <template v-if="isCastingOnline === false">
                <template v-if="(casting.country)">
                  <div class="column column_declaration">
                    <div class="label label_declaration">{{ $t('casting-page.castings.country') }}</div>
                    <div class="text text_declaration" id="text_declaration_casting_country">{{ casting.country.text }}</div>
                  </div>
                </template>
                <template v-if="(casting.city)">
                  <div class="column column_declaration">
                    <div class="label label_declaration">{{ $t('casting-page.castings.city') }}</div>
                    <div class="text text_declaration" id="text_declaration_casting_city">{{ casting.city.text }}</div>
                  </div>
                </template>
                <template v-if="(casting.address)">
                  <div class="column column_declaration">
                    <div class="label label_declaration">{{ $t('casting-page.castings.casting-address') }}</div>
                    <div class="text text_declaration" id="text_declaration_casting_address">{{ casting.address }}</div>
                  </div>
                </template>
              </template>

              <template v-if="(isCastingOnline === true)">
                <div class="column column_declaration">
                  <div class="label label_declaration">Место проведения</div>
                  <div class="text text_declaration" id="text_declaration_casting_address_online">Онлайн</div>
                </div>
              </template>

              <div class="column column_declaration">
                <div class="label label_declaration">{{ $t('casting-page.castings.casting-date') }}</div>
                <div class="text text_declaration" id="text_declaration_casting_date">
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
                  <template v-else>{{ $t('casting-page.casting-page.casting-date-to-be-specified') }}</template>
                </div>
              </div>
              <div class="column column_declaration">
                <div class="label label_declaration">{{ $t('casting-page.castings.work-date') }}</div>
                <div class="text text_declaration" id="text_declaration_casting_date-work">
                  <template v-if="(casting.dateWorkStart || casting.dateWorkEnd)">
                    <template v-if="(casting.dateWorkStart && casting.dateWorkEnd && (casting.dateWorkStart === casting.dateWorkEnd))">
                      {{ $moment(casting.dateWorkStart, 'DD-MM-YYYY').format('D.MM.YY') }}
                    </template>
                    <template v-else>
                      <template v-if="casting.dateWorkStart">
                        {{ casting.dateWorkEnd ? '' : $t('casting-page.casting-page-two.from') }}
                        {{ $moment(casting.dateWorkStart, 'DD-MM-YYYY').format('D.MM.YY') }}
                      </template>
                      <template v-if="casting.dateWorkEnd">
                        {{ casting.dateWorkStart ? '-' : 'до' }}
                        {{ $moment(casting.dateWorkEnd, 'DD-MM-YYYY').format('D.MM.YY') }}
                      </template>
                    </template>
                  </template>
                  <template v-else>{{ $t('casting-page.casting-page.casting-date-to-be-specified') }}</template>
                </div>
              </div>
            </div>

            <template v-if="( characterType || (references && references.length) )">
              <div class="block block_declaration">
                <template v-if="(characterType)">
                  <div class="column column_declaration">
                    <div class="label label_declaration">{{ $t('casting-page.casting-page-two.type') }}</div>
                    <div class="text text_declaration" id="text_declaration_casting_characterType">{{ characterType }}</div>
                  </div>
                </template>

                <template v-if="(references && references.length)">
                  <div class="column column_declaration">
                    <div class="label label_declaration">{{ $t('casting-page.castings.reference') }}</div>

                    <div class="gallery__content">
                      <template v-for="item in references.slice(0, 4)">
                        <media type="photo" :media="item" :src="item['paths']['original']" :key="`reference-${item.id}`">
                          <img :src="item['paths']['128x128']" :alt="casting.name" class="img img_declaration img_declaration_casting">
                        </media>
                      </template>
                    </div>

                    <collapse v-model="collapse['references']">
                      <div class="gallery__content mt_3">
                        <template v-for="item in references.slice(4)">
                          <media type="photo" :media="item" :src="item['paths']['original']" :key="`reference-${item.id}`">
                            <img :src="item['paths']['128x128']" :alt="casting.name" class="img img_declaration img_declaration_casting">
                          </media>
                        </template>
                      </div>
                    </collapse>


                    <template v-if="(references.length > 4)">
                      <div class="mt_3">
                        <div class="btn btn_rounded color_gray-2" @click="_handleClickToggleCollapse('references')">
                          <svg :class="['icon', 'icon_size_16', 'fill_gray-2', 'mr_2', { rotate_180: (collapse['references']) }]">
                            <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-chevron"></use>
                          </svg>

                          <span >{{ collapse['references'] ? 'Скрыть' : `Показать все (${references.length})` }}</span>
                        </div>
                      </div>
                    </template>
                  </div>
                </template>
              </div>
            </template>

            <template v-if="(hasContacts === true)">
              <div class="block block_declaration">
                <template v-if="(hideContacts === true)">
                  <div class="section_contacts_action">
                    <span>Узнайте контакты, используя «Показать контакты»</span>
                    <button @click="_handleShowContacts" class="btn btn_primary">Показать контакты</button>
                  </div>
                </template>
                <template v-else>
                  <template v-if="(phone)">
                    <div class="column column_declaration">
                      <div class="label label_declaration">Телефон</div>
                      <div class="text text_declaration">
                        <a :href="`tel:${phone}`" target="_self">{{ phone }}</a>
                      </div>
                    </div>
                  </template>

                  <template v-if="(email)">
                    <div class="column column_declaration">
                      <div class="label label_declaration">E-mail</div>
                      <div class="text text_declaration" v-html="$anchorme(email)"></div>
                    </div>
                  </template>

                  <template v-if="(otherContact)">
                    <div class="column column_declaration">
                      <div class="label label_declaration">Другое</div>
                      <div class="text text_declaration" v-html="$anchorme(otherContact)"></div>
                    </div>
                  </template>
                </template>
              </div>
            </template>

            <div class="block block_declaration">
              <div class="preview profile__preview">
                <router-link :to="{ name: 'user.show', params: { username: author.username } }" class="row row_align_center">
                  <img :src="author.avatar" :alt="author.name" class="img preview__img preview__img_profile">
                  <div class="column">
                    <div class="column">
                      <div class="preview__title preview__title_profile">{{ author.name }}</div>
                      <div class="preview__role preview__role_profile" v-if="(Array.isArray(author.category) && author.category.length)">
                        {{ author.category.join(', ') | truncate(18) }}
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>

            <template v-if="(isCurrentUser === true)">
              <div class="block block_declaration">
                <div class="row">
                  <div class="widget widget_views">
                    <svg class="icon widget__icon icon_views">
                      <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_eye" />
                    </svg>
                    <div class="widget__count">{{ casting.counters.viewed }}</div>
                  </div>
                  <template v-if="(true === false)">
                    <div class="widget widget_like">
                      <svg class="icon widget__icon icon_like">
                        <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_like" />
                      </svg>
                      <div class="widget__count">0</div>
                    </div>
                  </template>
                </div>
              </div>
            </template>

            <template v-if="(isCurrentUser === true && isFasten === false)">
              <lm-m-loader v-if="promotion['prices']['loading']"></lm-m-loader>

              <template v-if="hasPricePromotion">
                <template v-if="(promotion[UP]['success'] === false)">
                  <div :class="['card', 'card__placement', 'card__placement_premium',
                  {'mb_4' : promotion[UP]['success'] === false, 'mb_6' : promotion[UP]['success'] === true}]">
                    <div class="card__content">
                      <template v-if="(promotion[FASTEN]['success'] === false)">
                        <div class="row align_center mb_1">
                          <div class="heading heading_h5 mb_0">Премиум-размещение</div>
                          <svg class="icon icon_size_16 fill_support-3 ml_2">
                            <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-favourite" />
                          </svg>
                        </div>

                        <div class="m-text_normal mb_3">Увеличивает кол-во откликов в 3 раза</div> <!-- .mb_12 -->

                        <div class="sale-line m-text_bold-2 color_white">Скидка {{ promotion['prices']['data'][FASTEN]['percent'] }}%</div>
                        <div class="line-border_absolute"></div>

                        <div class="m-text_normal p_t_12 mb_4">Срок размещения: до <span class="tt_capitalize">{{ $moment().add('7', 'day').format('DD MMMM YYYY') }}</span><br> Оплата: за 7 дней</div>

                        <div class="row justify_between">
                          <button class="btn btn_primary w_100 max-w_272px mr_5" @click="_handleClickCreateCastingPromotion(FASTEN)">Выбрать</button>
                          <div class="card__price">
                            <div class="m-text_bold mb_1">{{ promotion['prices']['data'][FASTEN]['discount'] | currency('₽') }} / 7 дней</div>
                            <div class="m-text_normal">{{ promotion['prices']['data'][FASTEN]['full'] | currency('₽') }} / 7 дней</div>
                          </div>
                        </div>
                      </template>

                      <template v-if="(promotion[FASTEN]['success'] === true)">
                        <div class="row align_center mb_1">
                          <div class="heading heading_h5 mb_0">Объявление закреплено</div>
                          <svg class="icon icon_size_16 icon_check ml_3">
                            <use xlink:href="/dist/img/icons/svg/sprite.svg#checkbox__mark" />
                          </svg>
                        </div>
                        <div class="m-text_normal">Ваше обьявление теперь закреплено в топе ленты на семь дней</div>
                      </template>
                    </div>
                  </div>
                </template>

                <template v-if="(promotion[UP]['success'] === false)">
                  <div class="card card__placement mb_6">
                    <div class="card__content">
                      <template v-if="(promotion[FASTEN]['success'] === false)">
                        <div class="row align_center mb_1">
                          <div class="heading heading_h5 mb_0">Поднятие в топ</div>
                          <svg class="icon icon_size_16 icon_check fill_white rotate_180 ml_2">
                            <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-chevron" />
                          </svg>
                        </div>

                        <div class="m-text_normal mb_3">Увеличивает кол-во трафика в 2 раза</div>

                        <div class="line-border mb_3"></div>

                        <div class="m-text_normal mb_4">Срок размещения: единоразово<br> Оплата: за 1 раз</div>

                        <div class="row justify_between align_center">
                          <button class="btn btn_primary w_100 max-w_272px mr_5" @click="_handleClickCreateCastingPromotion(UP)">Выбрать</button>
                          <div class="card__price">
                            <div class="m-text_bold">{{ promotion['prices']['data'][UP]['discount'] | currency('₽') }} / 1 раз</div>
                          </div>
                        </div>
                      </template>

                      <template v-if="(promotion[FASTEN]['success'] === true)">
                        <div class="row align_center mb_1">
                          <div class="heading heading_h5 mb_0">Объявление поднято</div>
                          <svg class="icon icon_size_16 icon_check ml_3">
                            <use xlink:href="/dist/img/icons/svg/sprite.svg#checkbox__mark" />
                          </svg>
                        </div>
                        <div class="m-text_normal">Ваше обьявление теперь поднято в топе ленты</div>
                      </template>
                    </div>
                  </div>
                </template>
              </template>
            </template>
          </div>
        </template>

        <template v-if="(!casting || error)">
          <span>Ошибка, кастинг не найден.</span>
        </template>
      </div>

      <template v-if="(casting && error === false)">
        <template v-if="((isCurrentUser === false && isResponded && response) || (isCurrentUser === true || isCurrentUser === false && isAdmin === true))">
          <div class="section section_responses mb_4">
            <template v-if="(isCurrentUser === false)">
              <template v-if="(isResponded && response)">
                <div class="container container_responses" id="container_responses">
                  <div class="section__header section__header_responses">
                    <div class="row row_align_center row_justify_between">
                      <div class="response__title">Мой отклик</div>
                      <div class="response__status response__status_not-viewed">{{ response.read ? 'просмотрен' : 'не просмотрен' }}</div>
                    </div>
                  </div>
                </div>

                <response-card :response="response" :style="{ marginBottom: (isCurrentUser === false && isAdmin === true) ? '16px' : 0 }"></response-card>
              </template>
            </template>

            <template v-if="(isCurrentUser === true || (isCurrentUser === false && isAdmin === true))">
              <no-ssr>
                <intersect :disabled="(isCurrentUser === false)" @enter="_handleEnterIntersectedResponses" @leave="_handleLeaveIntersectedResponses" rootMargin="0px 0px -90px 0px" :threshold="[0]">
                  <div class="column">
                    <div class="container container_responses" id="container_responses">
                      <div class="section__header section__header_responses">
                        <div class="row">
                          <div class="heading_h4 heading">
                            {{ !isEmptyResponses ? $t('applications-page.remove-candidate.work-with-responses') : $t('applications-page.suitbale-response.responses') }}
                            <div class="section__counter_responses" v-if="!isEmptyResponses">{{ totalResponses }}</div>
                          </div>
                        </div>
                        <div class="row">
                          <nav class="nav nav_categories nav_categories_feed">
                            <div class="nav__list nav__list_categories">
                              <a href="javascript:void(0)" :class="['nav__item', 'nav__item_categories', { 'nav__item_categories_active': (fieldsResponses.state === RECEIVED)  }]" @click="_handleClickSetResponseState(RECEIVED)">{{ $t('applications-page.remove-candidate.received') }} <span v-if="notReadResponses">(+{{ notReadResponses }})</span></a>
                              <a href="javascript:void(0)" :class="['nav__item', 'nav__item_categories', { 'nav__item_categories_active': (fieldsResponses.state === SELECTED)  }]" @click="_handleClickSetResponseState(SELECTED)">{{ $t('applications-page.remove-candidate.shortlist') }}</a>
                            </div>
                          </nav>
                        </div>
                        <!--
                        <template v-if="(fieldsResponses.state === SELECTED || fieldsResponses.state === RECEIVED)">
                          <div class="border_top pt_4 mt_4">
                            <div class="m-text_bold mb_2">Отклики в PDF</div>
                            <div class="m-text_normal-2 color_gray-2 mb_2">Выгружайте и отправляйте отклики профессионалов в виде PDF</div>
                            <a target="_blank" v-if="fieldsResponses.state === SELECTED" :href="casting.export.selectedResponsesUrl" @click="_handleDownloadPdf" class="m-text_bold color_main">Выгрузить отклики</a>
                            <a target="_blank" v-if="fieldsResponses.state === RECEIVED" :href="casting.export.allResponsesUrl" @click="_handleDownloadPdf" class="m-text_bold color_main">Выгрузить отклики</a>
                          </div>
                        </template>
                        -->
                        <template v-if="(fieldsResponses.state === SELECTED && responses.length >= 2)">
                          <div class="border_top pt_4 mt_4">
                            <div class="m-text_bold mb_2">Напишите всем</div>
                            <div class="m-text_normal-2 color_gray-2 mb_2">Рассылайте сообщения всем кандидатам в пару кликов</div>
                            <a href="javascript:void(0)" class="m-text_bold color_main" @click="_handleClickSendSelectedResponsesMessage">Написать всем</a>
                          </div>
                        </template>
                      </div>
                    </div>

                    <template v-if="!isEmptyResponses">
                      <div class="feed" v-infinite-scroll="_handleInfiniteScrollResponses" infinite-scroll-disabled="infiniteDisabledResponses" infinite-scroll-distance="900">
                        <intersect v-for="response in responses" :key="response.id" :throttle="1000" :disabled="(isCurrentUser === false || response.read === true)" @enter="_handleEnterIntersectedResponse(response.id, response.read)" rootMargin="10% 0px -10% 0px" :threshold="[0.8]">
                          <response-card :response="response" @destroy="_handleDestroyResponse" @change="_handleChangeResponse" @actionSheet="_handleActionSheetResponse" :hideAction="(isArchived === true || isCurrentUser === false)">
                          </response-card>
                        </intersect>
                      </div>
                    </template>

                    <template v-if="isEmptyResponses">
                      <div class="page__plug page__plug_feed_empty-list mt_1">
                        <svg class="icon icon_size_lg icon_fill_blue mb_5">
                          <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-wait" />
                        </svg>
                        <div class="heading heading_h5">Ожидайте</div>
                        <div class="mb_4">Первые отклики появятся в <br>ближайшее время</div>
                      </div>
                    </template>
                    <lm-m-loader v-if="loadingResponses"></lm-m-loader>
                  </div>
                </intersect>
              </no-ssr>
            </template>
          </div>
        </template>
      </template>

      <template v-if="(isCurrentUser === true && responsesButton)">
        <div class="page__footer page__footer_response">
          <div class="row row_justify_center">
            <button class="btn btn_primary w_100" @click="_handleClickScrollToResponses">{{ $t('applications-page.responses-button.responses') }}</button>
          </div>
        </div>
      </template>

      <template v-if="(isCurrentUser === false)">
        <template v-if="(isAuthorized === true && isResponded === false && forTrusted === true && canRespond === false)">
          <div class="page-inner__body_declaration">
            <div class="container">
              <div class="d-column d-card__disabled_respond_big">
                <div class="heading heading_h4">Отклик недоступен</div>
                <template v-if="(isExecutor === true)">
                  <template v-if="((portfolioBadQuality === null || hasPortfolio === false) && hasCertification === false)">
                    <div class="m-text_normal-2">
                      <div>Для отклика необходимо портфолио.</div>
                      <div class="mt_2 mb_2">Пройдите верификацию, чтобы получить профессиональные фото и статус проверенного исполнителя.</div>
                      <router-link :to="{ name: 'certifying.executor.index' }" class="m-text_bold color_main">Узнать подробнее</router-link>
                    </div>
                    <div class="m-text_normal-2 mt_3">
                      <div class="mb_2">Или обновите свой профиль самостоятельно</div>
                      <router-link :to="{ name: 'user.show', params: { username: user.username } }" class="m-text_bold color_main">Обновить</router-link>
                    </div>
                  </template>
                  <template v-if="(portfolioBadQuality === true && hasCertification === false)">
                    <div class="m-text_normal-2">
                      <div>Модератор оценил ваше портфолио как недостаточно качественное.</div>
                      <div class="mt_2 mb_2">Для выяснения причин посмотрите личные сообщения.</div>
                      <router-link :to="{ name: 'messages.index' }" class="m-text_bold color_main">Перейти в личные сообщения</router-link>
                    </div>
                  </template>
                </template>
                <template v-else-if="(isCustomer === true)">
                  <div class="m-text_normal-2">
                    <div class="mb_2">Для отклика необходим аккаунт таланта</div>
                    <template v-if="(hasSecondaryUser === true)">
                      <a href="javascript:void(0)" @click="_handleClickCreateAccount()" class="m-text_bold color_main">Войти как талант</a>
                    </template>
                    <template v-else-if="(hasSecondaryUser === false)">
                      <a href="javascript:void(0)" @click="_handleClickCreateAccount(1)" class="m-text_bold color_main">Добавить аккаунт</a>
                    </template>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="page__footer page__footer_declaration">
            <div class="page__block_declaration">
              <div class="row row_justify_between">
                <template v-if="(canRespond === true || isAuthorized === false || isResponded === true)">
                  <button class="btn btn_round btn_primary" @click="_handleClickMessage">
                    <svg class="icon icon_size_16 icon_fill_white">
                      <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_chat" />
                    </svg>
                  </button>
                  <button class="btn btn_primary w_100 max-w_272px ml_9" :disabled="(isResponded === true)" @click="_handleClickResponse">
                    {{ (isResponded === true) ? 'Отклик отправлен' : 'Откликнуться' }}
                  </button>
                </template>
                <template v-else-if="(canRespond === false)">
                  <button class="btn btn_primary w_100" :disabled="(true)">Кастинг неактуален</button>
                </template>
              </div>
            </div>
          </div>
        </template>
      </template>
    </div>

    <template v-if="(showOtherCastings === true)">
      <div class="section">
        <div class="container_responses">
          <div class="section__header section__header_responses">
            <div class="row">
              <div class="heading_h4 heading mb_0">
                Смотрите также
              </div>
            </div>
          </div>
        </div>
        <div class="page__content page__content_feed">
          <casting-card :casting="item" v-for="item in otherCastings" :key="item.id" :showMore="false" gtm="casting_transition_casting"></casting-card>

          <div class="mt_4" style="padding: 0 16px;">
            <button class="btn btn_outline w_100" @click="_handleClickShowOtherCasting">Показать еще</button>
          </div>
        </div>
      </div>
    </template>

    <casting-issues-modal></casting-issues-modal>
    <actionsheet :actions="sheet.actions" v-model="sheet.value" cancel-text=""></actionsheet>
    <actionsheet :actions="actionSheetResponse.actions" v-model="actionSheetResponse.value" cancel-text="" @input="_handleInputActionSheetResponse"></actionsheet>
    <selected-responses-message-modal></selected-responses-message-modal>
  </div>
</template>

<script>
  import { Collapse } from 'uiv'
  import { has, isBrowser } from '@utils'

  import { mapGetters, mapActions, mapMutations } from 'vuex'

  import Casting from '@modules/Board/Casting'
  import CastingCard from '@components/Board/Casting/Casting.vue'
  import ResponseCard from '@components/Board/Casting/Response.vue'
  import CastingIssuesModal from '@components/Board/Casting/Modals/Issues.vue'
  import SelectedResponsesMessageModal from '@components/Board/Casting/Modals/Message.vue'

  import { Indicator, Toast } from 'mint-ui'
  import { viewCasting } from '@modules/Rating/Enums/events'
  import { UP, FASTEN } from '@modules/Board/Enums/PromotionType'
  import { RECEIVED, SELECTED } from '@modules/Board/Casting/Response/Enums/ResponseState'
  import { REJECTED, MODERATION, PUBLISHED, DRAFT, ARCHIVED } from '@modules/Board/Casting/Enums/CastingState'

  const APP_URL = process.env.APP_URL

  import { createHelpers } from 'vuex-map-fields'
  import _ from 'lodash'

  const { mapFields } = createHelpers({
    getterType: 'board/casting/response/getField',
    mutationType: 'board/casting/response/updateField',
  })

  export default {
    components: { ResponseCard, SelectedResponsesMessageModal, CastingIssuesModal, Collapse, CastingCard },
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
        sheet: {
          value: false,
          actions: []
        },
        hideContacts: true,
        responsesButton: false,
        banners: {
          selected: true
        },
        promotion: {
          payment: { form: {}, url: null },
          [UP]: { success: false, loading: false },
          [FASTEN]: { success: false, loading: false },
          prices: { data: { [UP]: { full: 0, percent: 0, discount: 0 }, [FASTEN]: { full: 0, percent: 0, discount: 0 } }, loading: false, error: false }
        },
        collapse: {
          references: false,
        },
        actionSheetResponse: {
          actions: [],
          value: false,
          response: { id: null }
        },
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
        castings: 'board/casting/getCastingsData',
        loading: 'board/casting/getCastingLoading',
        responses: 'board/casting/response/getResponsesData',
        totalResponses: 'board/casting/response/getResponsesTotal',
        errorResponses: 'board/casting/response/getResponsesError',
        offsetResponses: 'board/casting/response/getResponsesOffset',
        loadingResponses: 'board/casting/response/getResponsesLoading',
        notReadResponses: 'board/casting/response/getNotReadResponsesTotal',
        infiniteDisabledResponses: 'board/casting/response/getResponsesInfiniteDisabled'
      }),
      isCurrentUser () {
        return (this.user && this.user.id === this.casting.user.id)
      },
      isCustomer () {
        return (this.role === 'customer')
      },
      isExecutor () {
        return (this.role === 'executor')
      },
      hasSecondaryUser () {
        return (this.user && this.user.hasOwnProperty('secondary_user')) ? this.user['secondary_user'] : false
      },
      professions () {
        return (this.casting.professions && this.casting.professions.length) ? this.casting.professions.map((role => role.text)) : []
      },
      genders () {
        return (this.casting.genders && this.casting.genders.length) ? this.casting.genders.map((gender => gender.text)) : []
      },
      ages () {
        let attribute = ''
        if (this.casting.ageFrom || this.casting.ageTo) {
          if (this.casting.ageFrom ) {
            attribute += this.casting.ageTo
              ? this.$t('casting-page.casting-page-two.age-from') + ' ' + this.casting.ageFrom + ' - '
              : this.$t('casting-page.casting-page-two.age-from') + ' ' + this.$pluralize(this.casting.ageFrom, ['год', 'года', 'лет'])
          }

          if (this.casting.ageTo && this.casting.ageFrom) {
            attribute += this.$pluralize(this.casting.ageTo, ['год', 'года', 'лет'])
          } else if (this.casting.ageTo && !this.casting.ageFrom) {
            attribute += 'до ' + this.$pluralize(this.casting.ageTo, ['год', 'года', 'лет'])
          }
        }

        if ((this.casting.ageFrom && this.casting.ageTo) && this.casting.ageFrom === this.casting.ageTo) {
          attribute = this.$pluralize(this.casting.ageFrom, ['год', 'года', 'лет'])
        }

        return attribute
      },
      category () {
        return (this.casting.category && has(this.casting.category, 'text')) ? this.casting.category.text : null
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
          attribute += (has(this.casting, 'country.text')) ?  ', ' : ''
          attribute += this.casting.city.text
        }

        if (has(this.casting, 'address')) {
          attribute += (has(this.casting, 'country.text') || has(this.casting, 'city.text')) ?  ', ' : ''
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
        return ( this.loadingResponses === false && this.totalResponses === 0 )
      },
      isAdmin () {
        return (this.user.hasOwnProperty('isAdmin') && this.user['isAdmin'] === true)
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
        return ( Boolean(this.phone) || Boolean(this.email) || Boolean(this.otherContact))
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
      userBalance() {
        return this.user.balance
      },
      seoDescription () {
        let fee = ''
        let desc = this.professions.length ? `Требуется ${this.professions.join(', ').toLowerCase()}` : 'Кастинг'

        if (this.category) {
          const category = this.$seo.forCastingCategory(this, this.casting.category)

          if (category) desc+= ` для ${category.toLowerCase()}`
        }

        if (this.city) {
          const city = this.$seo.inCity(this, this.casting.city)

          if (city) desc+= ` в ${city}`
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

        return `${desc}${fee ? `, ${fee.toLowerCase()}` : '' }. Дата публикации ${this.$moment(this.casting.publishedAt).format('DD.MM.YY')}`
      },
      hasPricePromotion () {
        return (Boolean(this.promotion.prices['data'][FASTEN]['discount'] && Boolean(this.promotion.prices['data'][UP]['discount']) && this.promotion.prices.loading === false))
      },
      otherCastings () {
        let index = _.findIndex(this.castings, (c) => c.id === this.casting.id)
        return _.clone(this.castings).splice((index + 1), 3)
      },
      showOtherCastings () {
        return (this.isCurrentUser === false && Boolean(this.otherCastings && this.otherCastings.length))
      }
    },
    created () {
      this._draftSheet()

      if (this.isCurrentUser || (this.isCurrentUser === false && this.isAdmin === true)) {
        this.fieldsResponses['state'] = RECEIVED

        const { id } = this.$route.params
        const fields = this.fieldsResponses

        this._fetchResponses({ id, fields, offset: 0 }).then(() => {
          if (has(this.$route.query, 'responses')) {
            this._handleClickScrollToResponses()
          }
        })

        this.banners.selected = !(this.$cookies.get('banners.responses.selected') === 'false')
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
      } else {
        if (isBrowser) this.$nsWebViewInterface.emit('rating', viewCasting)
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
      _draftSheet () {
        return new Promise((resolve, reject) => {
          try {
            if (this.isCurrentUser === true) {
              if (this.casting && this.casting.state !== ARCHIVED && this.casting.state !== PUBLISHED) {
                this.sheet.actions.push({
                  name: 'Редактировать',
                  method: this._handleClickEditCasting
                })
              }

              if (this.casting && this.casting.state === ARCHIVED) {
                this.sheet.actions.push({
                  name: this.$t('casting-page.publish-or-archive.publish'),
                  method: this._handleClickPublishedCasting
                })
              }

              if (this.casting && this.casting.state === PUBLISHED) {
                this.sheet.actions.push({
                  name: this.$t('casting-page.publish-or-archive.archive'),
                  method: this._handleClickToArchiveCasting
                })
              }
            }

            if (this.isCurrentUser === false) {
              this.sheet.actions.push({
                name: 'Пожаловаться',
                method: this._handleClickAbuseCasting
              })
            }

            if (this.isAdmin === true && this.casting.state === MODERATION) {
              this.sheet.actions.push({
                name: 'Одобрить',
                method: this._handleClickApproveCasting
              })
            }

            if (this.isAuthorized && this.user) {
              this.sheet.actions.push({
                name: 'Скопировать ссылку',
                method: this._handleClickClipBoardCasting
              })
            }


            if (this.isAdmin === true) {
              this.sheet.actions.push({
                name: 'В АМО',
                method: this._handleClickIssuesCasting
              })
              this.sheet.actions.push({
                name: 'Редактировать',
                method: this._handleClickEditCasting
              })
            }

            resolve && resolve(true)
          } catch (e) {
            reject && reject(e)
          }
        })
      },
      _clearSheet() {
        return new Promise((resolve, reject) => {
          try {
            this.sheet.actions = []
            resolve && resolve(true)
          } catch (e) {
            reject && reject(e)
          }
        })
      },
      _handleClickPreviousPage () {
        if (window.history.length > 2) {
          this.$router.go(-1)
        } else this.$router.push({ name: 'board.castings.index' })
      },
      _handleClickShowOtherCasting () {
        const route = this.$store.state.route.from
        this.$gtm.trackEvent({ event: 'casting_transition_casting' })
        if (route) {
          const { name } = route
          if (name === 'board.castings.index') {
            this.$router.go(-1)
          } else this.$router.push({ name: 'board.castings.index' })
        } else this.$router.push({ name: 'board.castings.index' })
      },
      _handleClickEditCasting () {
        let { id } = this.casting
        this.$router.push({ name: 'board.castings.edit', params: { id } })
      },
      _handleClickActionSheet () {
        this.sheet.value = true
      },
      _handleClickClipBoardCasting () {
        let { id, slug } = this.casting
        const { href } = this.$router.resolve({ name: 'board.castings.show', params: { id, slug }, query: { ref: this.user.id } })

        this.$copyText(APP_URL + href).then((e) => {
          Toast({ message: 'Успешно',  iconClass: 'mintui mintui-success' })
        }, (e) => {
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
        })
      },
      _handleClickAbuseCasting () {
        let { id } = this.casting
        this.$root.$emit('open-modal-abuse-create', { id, type: 'board_casting' })
      },
      _handleClickPublishedCasting () {
        return new Promise((resolve, reject) => {
          Indicator.open()

          let { id } = this.casting
          this.$api.post(`api/v2/boards/castings/${id}/publish`).then((response) => {
            const { data } = response
            if (has(this.profile, 'without_moderate.castings') && this.profile['without_moderate']['castings']) {
              this.setFieldCastingData({ key: 'state', value: PUBLISHED })
            } else this.setFieldCastingData({ key: 'state', value: MODERATION })

            this._clearSheet().then(() => this._draftSheet()).catch(() => {})

            Indicator.close()
            resolve()
          }, (error) => {
            const { response: { data }, response: { status } } = error

            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            reject()

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
          cancelTxt: this.$t('casting-page.archive-ad.back'),
          confirmTxt: this.$t('casting-page.archive-ad.archive'),
          title: this.$t('casting-page.archive-ad.confirm-your-action'),
          message: this.$t('casting-page.archive-ad.archive-ad')
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
          this.$router.push({ name: 'register' })
        })
        // this.$root.$emit('open-modal-access-favorite', this.href)
      },
      _handleFavorite () {
        return new Promise((resolve, reject) => {
          Indicator.open()

          let { id } = this.casting
          this.$api.post('api/v2/boards/favorites', { id, type: 'board_casting' }).then((response) => {
            const { data: { isFavorited } } = response
            this.setFieldCastingData({ key: 'isFavorited', value: isFavorited })

            Indicator.close()

            resolve()
          }, (error) => {
            const { response: { data }, response: { status } } = error

            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            reject()

            throw new Error('Error create favorites')
          })
        })
      },
      _handleClickResponse () {
        if (this.isAuthorized === true) {
          if (this.isResponded === false) {
            if (this.canRespond) {
              this.$modalRouter.push({ name: 'board.castings.responses.create', props: { casting: this.casting } })
            } else Toast({ message: 'Ограничение отклика на кастинг', iconClass: 'mintui mintui-field-error' })
          } else Toast({ message: 'Отклик уже отправлен', iconClass: 'mintui mintui-field-error' })
        } else this._handleClickResponseWithoutAuthorized()
      },
      _handleClickResponseWithoutAuthorized () {
        this.$localStorage.set('redirect.register', this.href)
        this.$nextTick(() => {
          this.$router.push({ name: 'register' })
        })
        // this.$root.$emit('open-modal-access-response', this.href)
      },
      _handleResponse () {
        return new Promise((resolve, reject) => {
          Indicator.open()

          let { id } = this.casting
          this.$api.post(`api/v2/boards/castings/${id}/responses`).then((response) => {
            const { data: { data } } = response
            this.setFieldCastingData({ key: 'isResponded', value: true })
            this.setFieldCastingData({ key: 'response', value: data })
            this.$nextTick(() => this._handleClickScrollToResponses())

            Indicator.close()

            resolve()
          }, (error) => {
            const { response: { data, status } } = error

            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            reject()

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
          this.$router.push({ name: 'register' })
        })
        // this.$root.$emit('open-modal-access-message', this.href)
      },
      _handleMessage () {
        let uid = this._.sortBy([ this.author.id, this.user.id ]).toString()
        this.$router.push({ name: 'messages.show', params: { uid } })
      },
      _handleDraft () {
        return new Promise((resolve, reject) => {
          Indicator.open()

          let { id } = this.casting
          this.$api.post(`api/v2/boards/castings/${id}/draft`).then((response) => {
            const { data } = response
            this.setFieldCastingData({ key: 'state', value: DRAFT })
            this._clearSheet().then(() => this._draftSheet()).catch(() => {})

            Indicator.close()
            resolve()
          }, (error) => {
            const { response: { data }, response: { status } } = error

            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            reject()

            throw new Error('Error draft casting')
          })
        })
      },
      _handleArchive () {
        return new Promise((resolve, reject) => {
          Indicator.open()

          let { id } = this.casting
          this.$api.post(`api/v2/boards/castings/${id}/archive`).then((response) => {
            const { data } = response
            this.setFieldCastingData({ key: 'state', value: ARCHIVED })
            this._clearSheet().then(() => this._draftSheet()).catch(() => {})

            Indicator.close()

            resolve()
          }, (error) => {
            const { response: { data, status } } = error

            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

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
      _handleActionSheetResponse (responseId) {
        let response = this.$store.getters['board/casting/response/getResponseById'](responseId)

        if (response) {
          Object.assign(this.actionSheetResponse.response, { id: responseId })

          const { user: { colleague, follow } } = response

          if (has(response.user, 'phone') && response.user['phone']) {
            this.actionSheetResponse.actions.push({
              name: 'Написать',
              method: this._handleClickMessageUserResponse
            })
          }

          let actionFollow = {}

          if (follow === -1) {
            actionFollow = { name: 'Отменить запрос на подписку', color: '#fc2e5f' }
          }

          if (follow === 0) {
            actionFollow = { name: 'Подписаться' }
          }

          if (follow === 1) {
            actionFollow = { name: 'Отписаться', color: '#fc2e5f' }
          }

          this.actionSheetResponse.actions.push(Object.assign(actionFollow, {
            method: this._handleClickChangeFollowUserResponse,
          }))


          if (colleague === -1) {
            this.actionSheetResponse.actions.push({
              color: '#fc2e5f',
              name: 'Отменить запрос в коллеги',
              method: this._handleClickDestroyToColleaguesUserResponse
            })
          }

          if (colleague === 0) {
            this.actionSheetResponse.actions.push({
              name: 'Добавить в коллеги',
              method: this._handleClickAddToColleaguesUserResponse
            })
          }

          if (colleague === 1) {
            this.actionSheetResponse.actions.push({
              color: '#fc2e5f',
              name: 'Удалить из коллег',
              method: this._handleClickDestroyToColleaguesUserResponse
            })
          }

          this.actionSheetResponse.actions.push({
            name: 'Скопировать ссылку',
            method: this._handleClickClipBoardProfessionResponse
          })

          this.actionSheetResponse.actions.push({
            name: 'Пожаловаться',
            method: this._handleClickAbuseProfessionResponse
          })

          this.actionSheetResponse.value = true
        }
      },
      _handleInputActionSheetResponse (value) {
        if (value === false) {
          this.actionSheetResponse = {
            actions: [],
            value: false,
            response: { id: null }
          }
        }
      },
      _handleClickChangeFollowUserResponse () {
        let { id: responseId } = this.actionSheetResponse.response
        let response = this.$store.getters['board/casting/response/getResponseById'](responseId)

        if (response) {
          const { user: { id: userId } } = response

          Indicator.open()

          this.$api.post(`api/v1/follow`, { user_id: userId }).then((response) => {
            const { data: { result } } = response
            this._setFieldResponsesData({ id: responseId, key: 'user.follow', value: result })

            Toast({ message: (result === 1) ? 'Подписка оформлена.' : 'Подписка отменена.', iconClass: 'mintui mintui-success' });

            Indicator.close()

          }, (error) => {
            const { response: { data, status }} = error

            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            throw new Error('Error follow user')
          })
        }
      },
      _handleClickDestroyToColleaguesUserResponse () {
        let { id: responseId } = this.actionSheetResponse.response
        let response = this.$store.getters['board/casting/response/getResponseById'](responseId)

        if (response) {
          const { user: { id: userId } } = response

          Indicator.open()

          this.destroyToColleagues(userId).then(() => {
            Indicator.close()
            this._setFieldResponsesData({ id: responseId, key: 'user.colleague', value: 0 })
            Toast({ message: 'Пользователь удален из коллег.', iconClass: 'mintui mintui-success' });
          }).catch(() => {
            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
          })
        }
      },
      destroyToColleagues (userId) {
        return new Promise((resolve, reject) => {
          this.$api.delete(`api/v1/users/partners/${userId}`).then((response) => {
            const { data } = response
            resolve && resolve()
          }, (error) => {
            const { response: { data, status }} = error
            reject && reject()
            throw new Error('Error destroy partner')
          })
        })
      },
      _handleClickAddToColleaguesUserResponse () {
        let { id: responseId } = this.actionSheetResponse.response
        let response = this.$store.getters['board/casting/response/getResponseById'](responseId)

        if (response) {
          const { user: { id: userId } } = response

          Indicator.open()

          this.$api.post(`api/v1/users/partners/${userId}`).then((response) => {
            const { data } = response

            Indicator.close()

            this._setFieldResponsesData({ id: responseId, key: 'user.colleague', value: 1 })
          }, (error) => {
            const { response: { data, status }} = error

            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            throw new Error('Error create partner')
          })
        }
      },
      _handleClickAbuseProfessionResponse () {
        let { id: responseId } = this.actionSheetResponse.response
        let response = this.$store.getters['board/casting/response/getResponseById'](responseId)

        if (response) {
          const { profession: { id: professionId } } = response
          this.$root.$emit('open-modal-abuse-create', { id: professionId, type: 'profession' })
        }
      },
      _handleClickMessageUserResponse () {
        let { id: responseId } = this.actionSheetResponse.response
        let response = this.$store.getters['board/casting/response/getResponseById'](responseId)

        if (response) {
          const { user: { id: userId } } = response
          let uid = this._.sortBy([ userId, this.user.id ]).toString()
          this.$router.push({ name: 'messages.show', params: { uid } })
        }
      },
      _handleClickClipBoardProfessionResponse () {
        let { id: responseId } = this.actionSheetResponse.response
        let response = this.$store.getters['board/casting/response/getResponseById'](responseId)

        if (response) {
          const { profession: { id } } = response
          const query = this.isAuthorized && this.user ? { ref: this.user.id } : {}

          const { href } = this.$router.resolve({ name: 'users.professions.show', params: { id }, query })

          this.$copyText(APP_URL + href).then((e) => {
            Toast({ message: 'Успешно',  iconClass: 'mintui mintui-success' })
          }, (e) => {
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
          })
        }
      },
      _handleClickCloseBannerResponsesSelected () {
        this.banners.selected = false
        this.$cookies.set('banners.responses.selected', false)
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
        this.$scrollTo('#container_responses', 500, { offset: 0 })
      },
      _handleEnterIntersectedResponses () {
        this.responsesButton = false
      },
      _handleLeaveIntersectedResponses () {
        this.responsesButton = true
      },
      _handleClickApproveCasting () {
        Indicator.open()
        let { id } = this.casting

        this.$api.post(`/api/admin/v1/boards/castings/${id}/approve`).then((response) => {
          Indicator.close()
          let { data: { data } } = response
          this.setFieldCastingData({ key: 'state', value: PUBLISHED })
          this._clearSheet().then(() => this._draftSheet()).catch(() => {})

        }, (err) => {
          Indicator.close()
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
        })
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
        Indicator.open()
        this.promotion[type]['loading'] = true

        let data = { promotedType: 'board_casting', promotedId: castingId, typeName: type }

        this.$api.post(`api/v2/boards/promotions`, data).then(response => {
          let { data: { data: { id, type: { price } } } } = response

          if (this.userBalance >= Number(price)) {
            this._activatePromotion(id, type).then(() => {
              Indicator.close()
              this.promotion[type]['success'] = true
              this.promotion[type]['loading'] = false
            }).catch(() => { Indicator.close(); this.promotion[type]['loading'] = false; })
          } else {
            this.$nativeCloudPayments.pay(price).then(data => {
              const { status } = data

              if (status === 'success') {
                this.promotion[type]['success'] = true
              }

              this.promotion[type]['loading'] = false
              Indicator.close()
            }).catch(e => {
              this._getPaymentFields(price).then(() => {
                this._initCloudPaymentsWidget(id, type).then(() => {
                  Indicator.close()
                  this.promotion[type]['success'] = true
                  this.promotion[type]['loading'] = false
                }).catch(() => { Indicator.close(); this.promotion[type]['loading'] = false; })
              }).catch(() => { Indicator.close(); this.promotion[type]['loading'] = false; })
            })
          }
        }).catch((err) => {
          this.promotion[type]['loading'] = false

          Indicator.close()
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

          throw new Error(`Error create casting promotion.`)
        })
      },
      _activatePromotion (id, type) {
        return new Promise((resolve, reject) => {
          this.$api.post(`api/v2/boards/promotions/${id}/activate`).then((response) => {
            const { data } = response
            resolve && resolve()
          }, (error) => {
            const { response: { data, status } } = error

            reject && reject()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

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
        Indicator.open()

        this.$api.patch('api/v1/auth/role').then((response) => {
          let { data: { token, role } } = response

          this.$auth.storeSession({ token, role })

          this.$store.dispatch('auth/setToken', { accessToken: token, refreshToken: token }).then(result => {
            this.$store.dispatch('auth/getUserByAPI').then(result => {
              Indicator.close()
              this._handleCloseModal()
              Toast({ message: 'Успешно', iconClass: 'mintui mintui-success' });
              if (selectedRole) this.$localStorage.set('register.role', selectedRole)

              this.$nextTick(() => {
                if (this.isRegistered === false) this.$router.push({ name: 'user.register' })
              })
            })
          })
        }, (error) => {
          const { response: { data }, response: { status }} = error
          Indicator.close()
        })
      },
      _handleClickToggleCollapse (field) {
        if (this.collapse.hasOwnProperty(field)) {
          this.$set(this.collapse, field, !this.collapse[field])
        } else this.$set(this.collapse, field, true)
      },
      _handleDownloadPdf () {
        if (!isBrowser) return

        if (this.fieldsResponses.state === SELECTED) {
          this.$gtm.trackEvent({ event: 'open_response_short_list' })
        } else {
          this.$gtm.trackEvent({ event: 'open_response_all' })
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
  .lm-m-empty-desc-responses
    color: #808792
    font-size: 8px
    font-weight: 600
    padding: 8px 16px
    line-height: 12px
    letter-spacing: 1px
    text-transform: uppercase
</style>
