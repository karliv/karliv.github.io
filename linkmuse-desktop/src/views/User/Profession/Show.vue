<template>
  <div class="page_declaration_creating">
    <template v-if="profession">
      <template v-if="(isCurrentUser === true)">
        <template v-if="(isPublished === false)">
          <div class="casting__status casting__status_draft w_100"><span>Снято с публикации</span></div>
        </template>
      </template>
      <div class="d-row justify_center pt_12">
        <div class="page__body page__body_declaration_creating_second">
          <div class="section_declaration_creating section_declaration_creating_big bt_none pt_0">
            <div class="d-row mb_4">
              <ul class="d-breadcrumbs">
                <li class="d-breadcrumbs__item"><router-link :to="{ name: 'users.professions.index' }">Профессионалы</router-link></li>
                <li class="d-breadcrumbs__item"><router-link :to="{ name: 'user.show', params: { username } }">{{ name }}</router-link></li>
                <li class="d-breadcrumbs__item"><router-link :to="{ name: 'users.professions.index', params: { profession: professionNode['name'] } }">{{ professionNode['text'] }}</router-link></li>
              </ul>
            </div>


            <router-link :to="{ name: 'user.show', params: { username } }" class="d-row">
              <div class="avatar-container mr_12">
                <img :src="avatar" :alt="name" class="d-img">
              </div>

              <div class="column justify_center color_gray-1">
                <div class="d-row mb_1">
                  <div class="heading heading_h2 mb_0">{{ name }}</div>
                </div>

                <div class="mb_3">
                  <span>{{ city ? city.text + ', ' : 'Город не указан, ' }}</span>

                  <template v-if="(age)">
                    <span>{{ $pluralize(age, ['год', 'года', 'лет']) }}</span>
                  </template>
                </div>

                <span class="d-link_back">
                    Перейти в профиль
                  </span>
              </div>
            </router-link>
          </div>

          <template v-if="hasPortfolio">
            <div class="section_declaration_creating section_declaration_creating_big">
              <div class="d-row">
                <div class="label__title">Портфолио</div>
                <div class="gallery gallery_casting">
                  <div class="gallery__content gallery__content_casting">
                    <template v-for="item in portfolio.slice(0, 4)">
                      <template v-if="(item.type === 'photo')">
                        <media :type="item['type']" :media="item" :key="`portfolio-photo-${item.id}`" :src="item['paths']['original']" class="photo">
                          <img :src="item['paths']['250x250']" :alt="name" class="d-img">
                        </media>
                      </template>

                      <template v-if="(item.type === 'video')">
                        <media :type="item['type']" :media="item" :key="`portfolio-video-${item.id}`" :player="item['player']" class="d-video">
                          <img :src="item['cover']['original']" :alt="name" class="d-img">
                          <svg :class="['d-icon', ' d-icon_size_16', 'd-video__icon']">
                            <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-play"></use>
                          </svg>
                        </media>
                      </template>
                    </template>

                    <collapse v-model="collapse['portfolio']">
                      <div class="mt_3 display_flex f-wrap_wrap">
                        <template v-for="item in portfolio.slice(4)">
                          <template v-if="(item.type === 'photo')">
                            <media :type="item['type']" :media="item" :key="`portfolio-photo-${item.id}`" :src="item['paths']['original']" class="photo">
                              <img :src="item['paths']['250x250']" :alt="name" class="d-img">
                            </media>
                          </template>

                          <template v-if="(item.type === 'video')">
                            <media :type="item['type']" :media="item" :key="`portfolio-video-${item.id}`" :player="item['player']" class="d-video">
                              <img :src="item['cover']['original']" :alt="name" class="d-img">
                              <svg :class="['d-icon', ' d-icon_size_16', 'd-video__icon']">
                                <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-play"></use>
                              </svg>
                            </media>
                          </template>
                        </template>
                      </div>
                    </collapse>

                    <template v-if="(portfolio.length > 4)">
                      <div class="d-row lm-flex-end mt_3" @click="_handleClickToggleCollapse('portfolio')" :style="{ cursor: 'pointer' }">
                        <div class="d-link_back mr_1">{{ collapse['portfolio'] ? 'Скрыть' : `Показать все (${portfolio.length})` }}</div>
                        <svg :class="['d-icon', 'd-icon_size_16', 'fill_main', {  rotate_180: (collapse['portfolio']) }]">
                          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-chevron-bottom"></use>
                        </svg>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <div class="section_declaration_creating section_declaration_creating_big">
            <div class="d-row">
              <div class="label__title">Профессия</div>
              <div class="d-text_bold">{{ professionName }}</div>
            </div>

            <template v-if="has(anketa, 'game-age')">
              <div class="d-row mt_4">
                <div class="label__title">Игровой возраст</div>
                <div class="d-text_bold">от {{ anketa['game-age'][0]['from'] }} – до {{ anketa['game-age'][0]['to'] }} лет</div>
              </div>
            </template>

            <template v-if="has(anketa, 'directions')">
              <div class="d-row mt_4">
                <div class="label__title">Направления</div>
                <div class="d-text_bold">{{ anketa['directions'] }}</div>
              </div>
            </template>

            <template v-if="has(anketa, 'service-in-theaters')">
              <div class="d-row mt_4">
                <div class="label__title">Служба в театрах</div>
                <div class="d-text_bold">{{ anketa['service-in-theaters'] }}</div>
              </div>
            </template>

            <template v-if="has(anketa, 'equipment')">
              <div class="d-row mt_4">
                <div class="label__title">Оборудование</div>
                <div class="d-text_bold">{{ anketa['equipment'] }}</div>
              </div>
            </template>

            <template v-if="has(anketa, 'functions')">
              <div class="d-row mt_4">
                <div class="label__title">Функции</div>
                <div class="d-text_bold">{{ anketa['functions'] }}</div>
              </div>
            </template>

            <template v-if="has(anketa, 'programs-software')">
              <div class="d-row mt_4">
                <div class="label__title">Программы / софт</div>
                <div class="d-text_bold">{{ anketa['programs-software'] }}</div>
              </div>
            </template>

            <template v-if="has(anketa, 'genres')">
              <div class="d-row mt_4">
                <div class="label__title">Жанры</div>
                <div class="d-text_bold">{{ anketa['genres'] }}</div>
              </div>
            </template>

            <template v-if="has(anketa, 'instruments')">
              <div class="d-row mt_4">
                <div class="label__title">Инструменты</div>
                <div class="d-text_bold">{{ anketa['instruments'] }}</div>
              </div>
            </template>

            <template v-if="has(anketa, 'music-services')">
              <div class="d-row mt_4">
                <div class="label__title">Музыкальные сервисы</div>
                <div class="d-text_bold">{{ anketa['music-services'] }}</div>
              </div>
            </template>

            <template v-if="has(anketa, 'own-material')">
              <div class="d-row mt_4">
                <div class="label__title">Собственный материал</div>
                <div class="d-text_bold">{{ anketa['own-material'] ? 'Да' : 'Нет' }}</div>
              </div>
            </template>

            <template v-if="has(anketa, 'actors-starred-in')">
              <div class="d-row mt_4">
                <div class="label__title">Актеры снимались в</div>
                <div class="d-text_bold">{{ anketa['actors-starred-in'] }}</div>
              </div>
            </template>

            <template v-if="has(anketa, 'introducing-actors-models')">
              <div class="d-row mt_4">
                <div class="label__title">Представляю актеров / моделей</div>
                <div class="d-text_bold">{{ anketa['introducing-actors-models'] }}</div>
              </div>
            </template>

            <template v-if="has(anketa, 'company')">
              <div class="d-row mt_4">
                <div class="label__title">Компания</div>
                <div class="d-text_bold">{{ anketa['company'] }}</div>
              </div>
            </template>

            <template v-if="has(anketa, 'talent-archive')">
              <div class="d-row mt_4">
                <div class="label__title">Архив талантов</div>
                <div class="d-text_bold">{{ anketa['talent-archive'] ? 'Да' : 'Нет' }}</div>
              </div>
            </template>

            <template v-if="has(anketa, 'work-experience')">
              <div class="d-row mt_4">
                <div class="label__title">Стаж работы</div>
                <div class="d-text_bold">{{ $pluralize(anketa['work-experience'], ['года', 'лет', 'лет']) }}</div>
              </div>
            </template>

            <template v-if="has(anketa, 'other')">
              <div class="d-row mt_4">
                <div class="label__title">Другое</div>
                <div class="d-text_bold">{{ anketa['other'] }}</div>
              </div>
            </template>

            <template v-if="has(anketa, 'competitions-and-awards')">
              <div class="d-row mt_4">
                <div class="label__title">Конкурсы и награды</div>
                <div class="d-text_bold">{{ anketa['competitions-and-awards'] }}</div>
              </div>
            </template>
          </div>
          <template v-if="hasBodyParameters">
            <div class="section_declaration_creating section_declaration_creating_big">
              <template v-if="has(bodyParameters, 'height')">
                <div class="d-row">
                  <div class="label__title">Рост (см)</div>
                  <div class="d-text_bold">{{ bodyParameters['height'] }}</div>
                </div>
              </template>
              <template v-if="has(bodyParameters, 'weight')">
                <div class="d-row mt_4">
                  <div class="label__title">Вес (кг)</div>
                  <div class="d-text_bold">{{ bodyParameters['weight'] }}</div>
                </div>
              </template>
              <template v-if="has(bodyParameters, 'volume-of-breast')">
                <div class="d-row mt_4">
                  <div class="label__title">Объем груди (см)</div>
                  <div class="d-text_bold">{{ bodyParameters['volume-of-breast'] }}</div>
                </div>
              </template>
              <template v-if="has(bodyParameters, 'waist')">
                <div class="d-row mt_4">
                  <div class="label__title">Объем талии (см)</div>
                  <div class="d-text_bold">{{ bodyParameters['waist'] }}</div>
                </div>
              </template>
              <template v-if="has(bodyParameters, 'hips')">
                <div class="d-row mt_4">
                  <div class="label__title">Объем бедер (см)</div>
                  <div class="d-text_bold">{{ bodyParameters['hips'] }}</div>
                </div>
              </template>
              <template v-if="has(bodyParameters, 'shoe-size')">
                <div class="d-row mt_4">
                  <div class="label__title">Размер обуви</div>
                  <div class="d-text_bold">{{ bodyParameters['shoe-size'] }}</div>
                </div>
              </template>
              <template v-if="has(bodyParameters, 'clothing-size')">
                <div class="d-row mt_4">
                  <div class="label__title">Размер одежды</div>
                  <div class="d-text_bold">{{ bodyParameters['clothing-size']['text'] }}</div>
                </div>
              </template>
              <template v-if="has(bodyParameters, 'body-type')">
                <div class="d-row mt_4">
                  <div class="label__title">Телосложение</div>
                  <div class="d-text_bold">{{ bodyParameters['body-type']['text'] }}</div>
                </div>
              </template>
              <template v-if="has(bodyParameters, 'type-of-appearance')">
                <div class="d-row mt_4">
                  <div class="label__title">Тип внешности</div>
                  <div class="d-text_bold">{{ bodyParameters['type-of-appearance']['text'] }}</div>
                </div>
              </template>
              <template v-if="has(bodyParameters, 'eye-color')">
                <div class="d-row mt_4">
                  <div class="label__title">Цвет глаз</div>
                  <div class="d-text_bold">{{ bodyParameters['eye-color']['text'] }}</div>
                </div>
              </template>
              <template v-if="has(bodyParameters, 'hair-color')">
                <div class="d-row mt_4">
                  <div class="label__title">Цвет волос</div>
                  <div class="d-text_bold">{{ bodyParameters['hair-color']['text'] }}</div>
                </div>
              </template>
              <template v-if="has(bodyParameters, 'hair-length')">
                <div class="d-row mt_4">
                  <div class="label__title">Длина волос</div>
                  <div class="d-text_bold">{{ bodyParameters['hair-length']['text'] }}</div>
                </div>
              </template>

              <template v-if="otherBodyParameters && otherBodyParameters.length">
                <div class="d-row mt_4">
                  <div class="label__title">Дополнительно</div>
                  <div class="d-text_bold">{{ otherBodyParameters.join(', ') }}</div>
                </div>
              </template>
            </div>
          </template>
          <template v-if="hasParticipationInProjects">
            <div class="section_declaration_creating section_declaration_creating_big">
              <template v-for="(item, index) in participationInProjects">
                <div :class="['d-row', { 'mt_6' : index >= 1, '' : index === 0 }]" :key="item.id">
                  <div class="label__title">Проект</div>
                  <div>
                    <div class="d-text_bold">{{ item['project-name'] }}</div>
                    <div class="d-text_normal mt_1" v-if="item.description">{{ item.description }}</div>
                  </div>
                </div>
              </template>
            </div>
          </template>
          <template v-if="hasHigherEducation">
            <div class="section_declaration_creating section_declaration_creating_big">
              <template v-for="(item, index) in higherEducation">
                <div :class="['d-row', { 'mt_6' : index >= 1, '' : index === 0 }]" :key="item.id">
                  <div class="label__title">Высшее образование</div>
                  <div>
                    <div class="d-text_bold">
                      {{ item['university'] }}
                      <template v-if="item['years-of-study']">
                        (<template v-if="item['years-of-study'][0]['from']">{{ item['years-of-study'][0]['from'] }} -</template><template v-if="item['years-of-study'][0]['to']">{{ item['years-of-study'][0]['to'] }}</template>)
                      </template>
                    </div>
                    <div class="d-text_normal mt_1" v-if="item['supervisor']">{{ item['supervisor'] }}</div>
                    <div class="mt_3" v-if="item['specialty'] || item['description']">
                      <div class="d-text_semi-bold" v-if="item['specialty']">{{ item['specialty'] }}</div>
                      <div class="d-text_normal" :style="{ marginTop: item['specialty'] ? '2px' : '0'}" v-if="item['description']">{{ item['description'] }}</div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </template>
          <template v-if="hasTraining">
            <div class="section_declaration_creating section_declaration_creating_big">
              <template v-for="(item, index) in training">
                <div :class="['d-row', { 'mt_6' : index >= 1, '' : index === 0 }]" :key="item.id">
                  <div class="label__title">Повышение квалификации</div>
                  <div>
                    <div class="d-text_bold">{{ item['organization'] }}
                      <template v-if="item['years-of-study']">
                        (<template v-if="item['years-of-study'][0]['from']">{{ item['years-of-study'][0]['from'] }} -</template><template v-if="item['years-of-study'][0]['to']">{{ item['years-of-study'][0]['to'] }}</template>)
                      </template>
                    </div>
                    <div class="d-text_normal mt_1" v-if="item['teacher']">{{ item['teacher'] }}</div>
                    <div class="mt_3" v-if="item['thing'] || item['description']">
                      <div class="d-text_semi-bold" v-if="item['thing']">{{ item['thing'] }}</div>
                      <div class="d-text_normal" :style="{ marginTop: item['thing'] ? '2px' : '0' }" v-if="item['description']">{{ item['description'] }}</div>
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
                  <div class="min-w_157px mr_3">Контакты</div>
                  <div class="fw_600 color_gray-1">
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
                    <span class="fw_600 color_gray-1">{{phone}}</span>
                  </div>
                </template>
                <template v-if="(site)">
                  <div class="d-row mt_4">
                    <div class="label__title">Сайт</div>
                    <a :href="$anchorme(site)" target="_blank" class="fw_600 color_gray-1">{{site}}</a>
                  </div>
                </template>
                <template v-if="(telegram)">
                  <div class="d-row mt_4">
                    <div class="label__title">Telegram</div>
                    <div class="fw_600 color_gray-1">
                      <a class="fw_600 color_gray-1" :href="`tg://resolve?domain=${ telegram }`" target="_self">{{ telegram }}</a>
                    </div>
                  </div>
                </template>
                <template v-if="(whatsapp)">
                  <div class="d-row mt_4">
                    <div class="label__title">Whatsapp</div>
                    <div class="fw_600 color_gray-1">
                      <a class="fw_600 color_gray-1" :href="`whatsapp://send?phone=${ whatsapp }`" target="_self">{{ whatsapp }}</a>
                    </div>
                  </div>
                </template>
                <template v-if="(viber)">
                  <div class="d-row mt_4">
                    <div class="label__title">Viber</div>
                    <div class="fw_600 color_gray-1">
                      <a class="fw_600 color_gray-1" :href="`viber://chat?number=${ viber }`" target="_self">{{ viber }}</a>
                    </div>
                  </div>
                </template>
                <template v-if="(instagram)">
                  <div class="d-row mt_4">
                    <div class="label__title">Instagram</div>
                    <div class="fw_600 color_gray-1">
                      <a class="fw_600 color_gray-1" :href="`https://www.instagram.com/${ instagram }`" target="_blank">{{ instagram }}</a>
                    </div>
                  </div>
                </template>
                <template v-if="(facebook)">
                  <div class="d-row mt_4">
                    <div class="label__title">Facebook</div>
                    <div class="fw_600 color_gray-1">
                      <a class="fw_600 color_gray-1" :href="`https://www.facebook.com/${ facebook }`" target="_blank">{{ facebook }}</a>
                    </div>
                  </div>
                </template>
                <template v-if="(youtube)">
                  <div class="d-row mt_4">
                    <div class="label__title">YouTube</div>
                    <div class="fw_600 color_gray-1">
                      <a class="fw_600 color_gray-1" :href="`https://www.youtube.com/${ youtube }`" target="_blank">{{ youtube }}</a>
                    </div>
                  </div>
                </template>
                <template v-if="(vk)">
                  <div class="d-row mt_4">
                    <div class="label__title">Вконтакте</div>
                    <div class="fw_600 color_gray-1">
                      <a class="fw_600 color_gray-1" :href="`https://www.vk.com/${ vk }`" target="_blank">{{ vk }}</a>
                    </div>
                  </div>
                </template>
                <template v-if="(email)">
                  <div class="d-row mt_4">
                    <div class="label__title">E-mail</div>
                    <div class="fw_600 color_gray-1" v-html="$anchorme(email)"></div>
                  </div>
                </template>
              </template>
            </div>
          </template>
          <template v-if="(isCurrentUser === false || (isCurrentUser === true && (isPublished )))">
            <div class="section_casting section_casting_big">
              <div class="d-row">
                <div class="d-row w_100 lm-flex-end">
                  <div class="section_casting_small">
                    <template v-if="(isPublished === true)">
                      <social-share-updated :hover="true" :url="(APP_URL + href)" :clipboard="true" position="top" :title="title" :description="$truncate(this.$striptags(seoDescription), 50)" class="d-btn_round mr_4 flex_1">
                        <svg class="d-icon d-icon_size_sm">
                          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_share" />
                        </svg>
                      </social-share-updated>
                    </template>
                    <template v-if="(isCurrentUser === false)">
                      <button class="d-btn d-btn_secondary_filled" @click="_handleClickAbuseProfession">Пожаловаться</button>
                    </template>
                    <template v-if="(isCurrentUser === true && (isPublished ))">
                      <button class="d-btn d-btn_secondary_filled" @click="_handleClickUnPublishProfession">снять с публикации</button>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="sidebar page__sidebar page__sidebar_declaration_creating">
          <div class="sidebar__content" v-sticky="{ zIndex: 10, stickyTop: 104 }">
            <div class="section_casting section_casting_big bt_none pt_0">

              <div class="d-list d-list_casting-info">
                <template v-if="(isFasten === true)">
                  <div class="d-list__item">
                    <tooltip :class="['d-tooltip_declaration']" effect="scale" placement="bottom" :content="'К профессии была применена опция «Премиум-размещение»'">
                      <div class="casting__option casting__option_premium">
                        <svg class="d-icon d-icon_size_12 fill_support-3 mr_2">
                          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-favourite" />
                        </svg>
                        Премиум
                      </div>
                    </tooltip>
                  </div>
                </template>
                <template v-if="isPublished">
                  <div class="d-list__item">
                    <div class="casting__creation-date">{{ isToday(profession.publishedAt) ? `Сегодня, ${$moment(profession.publishedAt).format('HH:mm')}` : $moment(profession.publishedAt).format('DD MMM YYYY, HH:mm') }}</div>
                  </div>
                </template>
              </div>

              <div class="d-column">
                <div :class="['heading', 'heading_h2', { mb_0: (!isWorkForFree) }]">
                  <template v-if="(hasRate === true)">
                    от {{ rate['cost-of-work'] | currency(rate['currency']['text']) }} <template v-if="(rate['period-selection'])">/ {{ rate['period-selection']['text'] | lowercase }}</template>
                  </template>
                  <template v-else-if="(hasRate === false)">Без гонорара</template>
                </div>

                <template v-if="isWorkForFree">
                  <div class="color_gray-1">Готов принять участие в студенческих, короткометражных или некоммерческих проектах</div>
                </template>

                <div class="mt_12">
                  <template v-if="( phone )">
                    <contact-phone-button class="mb_3 w_100" :phone="phone" :hovered="false" :opened="isCurrentUser" event="show_user_number"></contact-phone-button>
                  </template>

                  <template v-if="(isCurrentUser)">
                    <template v-if="(isPublished === false)">
                      <button :class="['d-btn', 'd-btn_primary', 'w_100', 'mb_3']" @click="_handleClickPublishProfession">Опубликовать</button>
                    </template>

                    <template v-if="(isPublished === true)">
                      <button :class="['d-btn', 'd-btn_primary', 'w_100', 'mb_3']" @click="_handleClickUnPublishProfession">Снять с публикации</button>
                    </template>

                    <router-link :to="{ name: 'users.professions.edit', params: { id } }" class="d-btn d-btn_outline w_100">Редактировать</router-link>
                  </template>

                  <template v-if="(isCurrentUser === false)">
                    <button :class="['d-btn', 'd-btn_outline', 'w_100']" @click="_handleClickMessage">Написать сообщение</button>
                  </template>

                  <template v-if="(isAuthorized && isCurrentUser === false)">
                    <button class="d-btn d-btn_secondary_filled w_100 mt_6" @click="_handleClickAddToFolder">в подборку</button>
                  </template>
                </div>
              </div>

              <template v-if="(isCurrentUser === true && isPublished === true)">
                <div class="d-column mt_8">
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

                          <div class="mb_12">Увеличивает кол-во звонков в 3 раза</div>

                          <div class="sale-line d-text_bold color_white">Скидка {{ promotion['prices']['data'][FASTEN]['percent'] }}%</div>
                          <div class="line-border_absolute"></div>

                          <div class="pt_3 mb_4">Срок размещения: до <span class="tt_capitalize">{{ $moment().add('7', 'day').format('DD MMMM YYYY') }}</span><br> Оплата: за 7 дней</div>

                          <div class="d-row justify_between">
                            <template v-if="(promotion[FASTEN]['loading'] === false)">
                              <button class="d-btn d-btn_primary min-w_178px mr_5" @click="_handleClickCreatePromotion(FASTEN)">Выбрать</button>

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
                            <div class="heading heading_h4 mb_0 mr_3">Профессия закреплена</div>
                            <svg class="d-icon d-icon_check d-icon_size_16">
                              <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                            </svg>
                          </div>
                          <div>Ваша профессия теперь закреплена в топе ленты на семь дней</div>
                        </template>
                      </div>
                    </template>
                  </template>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </template>
    <lm-main-footer class="footer-static grey"></lm-main-footer>
  </div>
</template>

<script>
  import { Collapse } from 'uiv'
  import { has, AVATAR } from '@utils'
  import { mapGetters, mapActions } from 'vuex'

  import { UP, FASTEN } from '@modules/Board/Enums/PromotionType'

  const APP_URL = process.env.APP_URL

  export default {
    name: 'ShowProfession',
    components: { Collapse },
    metaInfo () {
      return {
        title: this.title,
        meta: [
          { name: 'og:type', content: 'website' },
          { name: 'og:title', content: this.title },
          { name: 'description', content: this.$truncate(this.$htmlspecialchars(this.$striptags(this.seoDescription)), 200) },
          { name: 'og:description', content: this.$truncate(this.$striptags(this.seoDescription), 200) },
        ]
      }
    },
    async asyncData ({ store, route }) {
      const { id } = route.params
      await store.dispatch('user/profession/getProfessionById', {
        id: Number(id)
      }).catch((error) => {
        const { response: { status = 500, url = null } } = error
        throw ({ code: status, message: 'Error show profession', url })
      })
    },
    data () {
      return {
        has,
        APP_URL,
        collapse: {
          portfolio: false,
        },
        UP, FASTEN,
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
      ...mapGetters({
        user: 'auth/getAuthUser',
        isAuthorized: 'auth/isAuthorized',
        error: 'user/profession/getProfessionError',
        loading: 'user/profession/getProfessionLoading',
        profession: 'user/profession/getProfessionData',
      }),
      id () {
        const { params: { id } } = this.$route
        return id
      },
      href () {
        let { id } = this.profession
        const query = this.isAuthorized && this.user ? { ref: this.user.id } : {}

        const { href } = this.$router.resolve({ name: 'users.professions.show', params: { id }, query })
        return href
      },
      isCurrentUser () {
        return (this.user && this.user.id === this.author.id)
      },
      title () {
        return `${this.professionName} ${this.name} - портфолио, опыт, проекты`
      },
      seoDescription () {
        let desc = `${this.professionName} ${this.name}`

        if (this.city) {
          const city = this.$seo.fromCity(this, this.city)

          if (city) desc+= ` из ${city}`
        }

        return desc
      },
      description () {
        return `${this.name}`
      },
      author () {
        const { user } = this.profession
        return user
      },
      username () {
        const { username } = this.author
        return username
      },
      name () {
        return has(this.author, 'name') ? this.author.name : null
      },
      avatar () {
        if (this.author && has(this.author, 'avatar.84x84')) {
          const { avatar: { '183x183': image } } = this.author
          return image || AVATAR
        } else return AVATAR
      },
      originalAvatar () {
        if (this.author && has(this.author, 'avatar.original')) {
          const { avatar: { original : image } } = this.author
          return image || AVATAR
        } else return AVATAR
      },
      professionNode () {
        const { profession } = this.profession
        return profession
      },
      professionName () {
        const { profession: { text } } = this.profession
        return text
      },
      anketa () {
        const { anketa } = this.profession
        return anketa
      },
      hasBodyParameters () {
        return has(this.anketa, 'body-parameters')
      },
      bodyParameters () {
        return this.hasBodyParameters ? this.anketa['body-parameters'] : null
      },
      otherBodyParameters () {
        let others = []

        if (this.bodyParameters && has(this.bodyParameters, 'dyed-hair') && Boolean(this.bodyParameters['dyed-hair'])) others.push('Окрашенные волосы')
        if (this.bodyParameters && has(this.bodyParameters, 'tattoos') && Boolean(this.bodyParameters['dyed-hair'])) others.push('Татуировки')
        if (this.bodyParameters && has(this.bodyParameters, 'piercings') && Boolean(this.bodyParameters['dyed-hair'])) others.push('Пирсинг')

        return others
      },
      hasParticipationInProjects () {
        return has(this.anketa, 'participation-in-projects')
      },
      participationInProjects () {
        return this.anketa['participation-in-projects']
      },
      hasHigherEducation () {
        return has(this.anketa, 'higher-education')
      },
      higherEducation () {
        return this.anketa['higher-education']
      },
      hasTraining () {
        return has(this.anketa, 'training')
      },
      training () {
        return this.anketa['training']
      },
      phone () {
        return (has(this.author, 'contacts.phone') && this.author['contacts']['phone']) ? this.author['contacts']['phone'] : null
      },
      email () {
        return (has(this.author, 'contacts.email') && this.author['contacts']['email']) ? this.author['contacts']['email'] : null
      },
      site () {
        return (has(this.author, 'contacts.site') && this.author['contacts']['site']) ? this.author['contacts']['site'] : null
      },
      telegram () {
        return (has(this.author, 'contacts.telegram') && this.author['contacts']['telegram']) ? this.author['contacts']['telegram'] : null
      },
      whatsapp () {
        return (has(this.author, 'contacts.whatsapp') && this.author['contacts']['whatsapp']) ? this.author['contacts']['whatsapp'] : null
      },
      viber () {
        return (has(this.author, 'contacts.viber') && this.author['contacts']['viber']) ? this.author['contacts']['viber'] : null
      },
      instagram () {
        return (has(this.author, 'contacts.instagram') && this.author['contacts']['instagram']) ? this.author['contacts']['instagram'] : null
      },
      facebook () {
        return (has(this.author, 'contacts.facebook') && this.author['contacts']['facebook']) ? this.author['contacts']['facebook'] : null
      },
      youtube () {
        return (has(this.author, 'contacts.youtube') && this.author['contacts']['youtube']) ? this.author['contacts']['youtube'] : null
      },
      vk () {
        return (has(this.author, 'contacts.vk') && this.author['contacts']['vk']) ? this.author['contacts']['vk'] : null
      },
      hasContacts () {
        return Boolean((has(this.author, 'contacts') && Object.keys(this._.omit(this.author.contacts, ['phone'])).length))
      },
      hasRate () {
        return has(this.anketa, 'rate')
      },
      rate () {
        return this.anketa['rate'][0]
      },
      isWorkForFree () {
        return (has(this.anketa, 'work-for-free') && this.anketa['work-for-free'])
      },
      isPublished () {
        return Boolean(this.profession.isPublished)
      },
      city () {
        return has(this.author, 'city.id') ? this.author.city : null
      },
      age () {
        return has(this.author, 'age') ? this.author.age : null
      },
      photos () {
        return (has(this.profession, 'photos') && this.profession.photos.length) ? this.profession.photos : []
      },
      videos () {
        return (has(this.profession, 'videos') && this.profession.videos.length) ? this.profession.videos : []
      },
      portfolio () {
        return [...this.photos, ...this.videos]
      },
      hasPortfolio () {
        return this.portfolio.length
      },
      userBalance () {
        return Number(this.user.balance)
      },
      isFasten () {
        return this.profession.isFasten || false
      },
      contentTooltipPremium () {
        return `<div style="max-width: 195px;">
          <span style="display: block; margin: 0;">
              Получите в 3 раза больше звонков, закрепив профессию в топе ленты на семь дней
          </span>
        </div>`
      },
      contentTooltipRepresentative () {
        return `<div style="max-width: 195px;">
          <span style="display: block; margin: 0;">
              Получите новые предложения и трафик, единоразово подняв объявление в топ ленты
          </span>
        </div>`
      },
      hasPricePromotion () {
        return (Boolean(this.promotion.prices['data'][FASTEN]['discount']) && this.promotion.prices.loading === false)
      },
    },
    mounted () {
      if (this.isAuthorized && this.isCurrentUser) {
        this.hideContacts = false

        this._getPricePromotion()
      }
    },
    methods: {
      ...mapActions({
        setFieldProfessionData: 'user/profession/setFieldProfessionData'
      }),
      _getPricePromotion () {
        this.promotion.prices.loading = true

        this.$api.get(`api/v2/promotions/prices/profession`).then((response) => {
          let { data: { data } } = response

          Object.assign(this.promotion.prices, { data, loading: false, error: false })
        }, (error) => {
          const { response: { data, status }} = error

          Object.assign(this.promotion.prices, { error: true, loading: false })
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка при получении цен.' })

          throw new Error('Error fetch professions prices promotion')
        })
      },
      isToday(date) {
        let context = this.$moment(date);
        return this.$moment().isSame(context, 'd')
      },
      _handleShowContacts () {
        this.hideContacts = false
        this.$gtm.trackEvent({ event: 'show_contancts' })
      },
      _handleClickAbuseProfession () {
        if (this.isAuthorized === false) {
          this._handleClickAbuseWithoutAuthorized()
        } else this._handleAbuseProfession()
      },
      _handleClickAbuseWithoutAuthorized () {
        this.$localStorage.set('redirect.register', this.href)
        this.$nextTick(() => {
          this.$router.push({ name: 'register' })
        })
      },
      _handleAbuseProfession () {
        let { id } = this.profession
        this.$root.$emit('open-modal-abuse-create', { id, type: 'profession' })
      },
      _handleClickPublishProfession () {
        this._handlePublishProfession()
      },
      _handlePublishProfession () {
        return new Promise((resolve, reject) => {
          const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

          let { id } = this.profession
          this.$api.post(`api/v2/users/professions/${id}/publish`).then((response) => {
            const { data } = response
            this.setFieldProfessionData({ key: 'isPublished', value: true })
            this.$gtm.trackEvent({ event: 'publish_profession' })
            loader.hide()

            resolve()
          }, (error) => {
            const { response: { data, status } } = error

            loader.hide()
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            reject()

            throw new Error('Error publish profession')
          })
        })
      },
      _handleClickUnPublishProfession () {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'снять',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите снять профессию с публикации?'
        }).then(() => {
          this._handleUnPublishProfession()
        }).catch(() => {})
      },
      _handleUnPublishProfession () {
        return new Promise((resolve, reject) => {
          const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

          let { id } = this.profession
          this.$api.post(`api/v2/users/professions/${id}/unpublish`).then((response) => {
            const { data } = response
            this.setFieldProfessionData({ key: 'isPublished', value: false })

            loader.hide()

            resolve()
          }, (error) => {
            const { response: { data, status } } = error

            loader.hide()
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            reject()

            throw new Error('Error unpublish profession')
          })
        })
      },
      _handleClickMessage () {
        if (this.isAuthorized === false) {
          this._handleClickMessageWithoutAuthorized()
        } else this._handleMessage()

        this.$gtm.trackEvent({ event: 'write_message' })
      },
      _handleClickMessageWithoutAuthorized () {
        this.$localStorage.set('redirect.register', this.href)
        this.$nextTick(() => {
          this.$router.push({ name: 'register' })
        })
      },
      _handleMessage () {
        let uid = this._.sortBy([ this.author.id, this.user.id ]).toString()

        let { href } = this.$router.resolve({ name: 'messages.show', params: { uid } })
        window.open(href, '_blank')
      },
      _handleClickAddToFolder () {
        this.$root.$emit('open-modal-add-user-on-folder', { user: this.author } )
      },
      _handleClickToggleCollapse (field) {
        if (this.collapse.hasOwnProperty(field)) {
          this.$set(this.collapse, field, !this.collapse[field])
        } else this.$set(this.collapse, field, true)
      },
      _handleClickCreatePromotion (type) {
        let { id } = this.profession
        this._createPromotion(id, type)

        let event = (type === UP) ? 'up_profession' : 'fasten_profession'
        this.$gtm.trackEvent({ event })
      },
      _createPromotion (promotedId, type) {
        this.promotion[type]['loading'] = true

        let data = { promotedType: 'profession', promotedId, typeName: type }

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

          throw new Error(`Error create profession promotion.`)
        })
      },
      _activatePromotion (id, type) {
        return new Promise((resolve, reject) => {
          this.$api.post(`api/v2/boards/promotions/${id}/activate`).then((response) => {
            const { data } = response
            if (type === FASTEN) {
              this.setFieldProfessionData({ key: 'isFasten', value: true })
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
      }
    }
  }
</script>

<style scoped>

</style>
