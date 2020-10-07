<template>
  <div :class="['page', {'page_declaration' : isCurrentUser === false}]">
    <div class="page-inner__container">
      <div class="page__header page__header_declaration">
        <div class="block block_declaration bt_none">
          <div class="row row_justify_between">
            <button class="btn btn_rounded btn_back" @click="_handleClickPreviousPage">
              <svg class="icon icon_back">
                <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_back"></use>
              </svg>
            </button>
            <div class="row">
              <template v-if="(isPublished === true)">
                <template v-if="(isAuthorized && isCurrentUser === false)">
                  <button class="btn btn_rounded mr_4" @click="_handleClickAddToFolder">
                    <svg :class="['icon', 'icon_size_16', { 'icon_fill_red': inFolder }]">
                      <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-heart" />
                    </svg>
                  </button>
                </template>
                <template v-if="(isCurrentUser === true)">
                  <router-link :to="{ name: 'users.professions.edit', params: { id } }" class="btn btn_rounded btn_edit mr_4">
                    <svg class="icon icon_edit">
                      <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_edit"></use>
                    </svg>
                  </router-link>
                </template>
                <social-share-popup :url="(APP_URL + href)" :title="title" :description="$truncate(this.$striptags(seoDescription), 50)">
                  <button class="btn btn_rounded">
                    <svg class="icon icon_share">
                      <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_share" />
                    </svg>
                  </button>
                </social-share-popup>
              </template>
              <button class="btn btn_rounded" @click="_handleClickActionSheet">
                <svg class="icon icon_options">
                  <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_options"></use>
                </svg>
              </button>
              <template v-if="(isPublished === false)">
                <router-link :to="{ name: 'users.professions.edit', params: { id } }" class="btn btn_rounded btn_edit">
                  <svg class="icon icon_edit">
                    <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_edit"></use>
                  </svg>
                </router-link>
              </template>
            </div>
          </div>
        </div>
      </div>

      <template v-if="(isCurrentUser === true)">
        <template v-if="(isPublished === false)">
          <div class="lm-m-block-text-archival">
            Снято с публикации
          </div>
        </template>
      </template>

      <div class="page__body page-inner__body_declaration">
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
                {{ isToday(profession.publishedAt) ? `Сегодня, ${$moment(profession.publishedAt).format('HH:mm')}` : $moment(profession.publishedAt).format('DD MMMM YYYY') }}
              </div>
            </template>
          </div>


          <router-link tag="div" :to="{ name: 'user.show', params: { username } }" class="row align_center">
            <div class="avatar-container row mr_5">
              <img :src="avatar" :alt="name" class="d-img">
            </div>

            <div class="row w_100">
              <div class="m-text_normal">
                <div class="d-row" style="margin-bottom: 2px">
                  <div class="heading heading_h4 mb_0">
                    {{ name }}

                    <template v-if="isCertifiedUser">
                      <svg class="icon icon_size_16 ml_1" style="vertical-align: middle;">
                        <use xlink:href="/dist/img/icons/svg/sprite.svg#round_lm-verification" />
                      </svg>
                    </template>
                  </div>
                </div>

                <div class="color_gray-1 mb_2">
                  <span>{{ city ? city.text + ', ' : 'Город не указан, ' }}</span>

                  <template v-if="(age)">
                    <span>{{ $pluralize(age, ['год', 'года', 'лет']) }}</span>
                  </template>
                </div>

                <div class="m-text_bold color_main">Перейти в профиль</div>
              </div>
            </div>
          </router-link>
        </div>

        <template v-if="(professionSupportSnaps && hasSnaps)">
          <div class="block block_declaration">
            <div class="page-inner__label-title mb_1">Снепы</div>

            <template v-if="snaps.length">
              <div class="gallery__content gallery__content_snips">
                <template v-for="item in snaps.slice(0, 4)">
                  <media type="photo" :media="item" :key="`snaps-photo-${item.id}`" :src="item['paths']['original']">
                    <img :src="item['paths']['128x128']" :alt="name" class="img img_declaration img_declaration_casting">
                  </media>
                </template>
              </div>

              <collapse v-model="collapse['snaps']">
                <div class="gallery__content gallery__content_snips collapse-snips mt_3 mt_12">
                  <template v-for="item in snaps.slice(4)">
                    <media type="photo" :media="item" :key="`snaps-photo-${item.id}`" :src="item['paths']['original']">
                      <img :src="item['paths']['128x128']" :alt="name" class="img img_declaration img_declaration_casting">
                    </media>
                  </template>
                </div>
              </collapse>

              <template v-if="(snaps.length > 4)">
                <div class="mt_3">
                  <div class="btn btn_rounded color_gray-2" @click="_handleClickToggleCollapse('snaps')">
                    <svg :class="['icon', 'icon_size_16', 'fill_gray-2', 'mr_2', { rotate_180: (collapse['snaps']) }]">
                      <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-chevron"></use>
                    </svg>

                    <span >{{ collapse['snaps'] ? 'Скрыть' : `Показать все (${snaps.length})` }}</span>
                  </div>
                </div>
              </template>
            </template>

            <template v-if="isCurrentUser || isSnapsApproved">
              <div :class="['section__hint', 'mt_3', {'in_moderation' : isSnapsNotVerified, 'failed_moderation': isSnapsRejected }]">
                <div class="heading heading_h5">
                  <template v-if="(isSnapsRejected === true)">Модерация не пройдена</template>
                  <template v-if="(isSnapsApproved === true)">Модерация пройдена</template>
                  <template v-if="(isSnapsNotVerified === true)">
                    <template v-if="snaps.length >= MIN_SNAP_COUNT">На модерации</template>
                    <template v-if="snaps.length < MIN_SNAP_COUNT">Снепы скрыты</template>
                  </template>
                </div>
                <div class="color_gray-1">
                  <template v-if="(isSnapsRejected === true)">Ваши снепы не соответствуют <a href="javascript:void(0)" v-modal-link="{ name: 'users.checklists.snaps' }" class="m-text_bold color_main" style="display: inline-block;">чек-листу</a>. Ознакомьтесь с ним и обновите фотографии</template>
                  <template v-if="(isSnapsApproved === true)">Снепы прошли модерацию</template>
                  <template v-if="(isSnapsNotVerified === true)">
                    <template v-if="snaps.length >= MIN_SNAP_COUNT">Ваши снепы отправлены на модерацию</template>
                    <template v-if="snaps.length < MIN_SNAP_COUNT">Ваши снепы скрыты для всех пользователей, загрузите недостающие снепы, чтобы изменить видимость</template>
                  </template>
                </div>
              </div>
            </template>
          </div>
        </template>

        <template v-if="hasPortfolio">
          <div class="block block_declaration">
            <div class="page-inner__label-title mb_1">Портфолио</div>

            <div class="gallery__content">
              <template v-for="item in portfolio.slice(0, 4)">
                <template v-if="(item.type === 'photo')">
                  <media :type="item['type']" :media="item" :key="`portfolio-photo-${item.id}`" :src="item['paths']['original']">
                    <img :src="item['paths']['250x250']" :alt="name" class="img img_declaration img_declaration_casting">
                  </media>
                </template>

                <template v-if="(item.type === 'video')">
                  <media :type="item['type']" :media="item" :key="`portfolio-video-${item.id}`" :player="item['player']" class="video__wrapper">
                    <img :src="item['cover']['original']" :alt="name" class="img img_declaration img_declaration_casting">
                    <svg :class="['video__icon', 'icon', 'icon_size_16']">
                      <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-media"></use>
                    </svg>
                  </media>
                </template>
              </template>
            </div>

            <collapse v-model="collapse['portfolio']">
              <div class="gallery__content mt_3">
                <template v-for="item in portfolio.slice(4)">
                  <template v-if="(item.type === 'photo')">
                    <media :type="item['type']" :media="item" :key="`portfolio-photo-${item.id}`" :src="item['paths']['original']">
                      <img :src="item['paths']['250x250']" :alt="name" class="img img_declaration img_declaration_casting">
                    </media>
                  </template>

                  <template v-if="(item.type === 'video')">
                    <media :type="item['type']" :media="item" :key="`portfolio-video-${item.id}`" :player="item['player']" class="video__wrapper">
                      <img :src="item['cover']['original']" :alt="name" class="img img_declaration img_declaration_casting">
                      <svg :class="['video__icon', 'icon', 'icon_size_16']">
                        <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-media"></use>
                      </svg>
                    </media>
                  </template>
                </template>
              </div>
            </collapse>

            <template v-if="(portfolio.length > 4)">
              <div class="mt_3">
                <div class="btn btn_rounded color_gray-2" @click="_handleClickToggleCollapse('portfolio')">
                  <svg :class="['icon', 'icon_size_16', 'fill_gray-2', 'mr_2', { rotate_180: (collapse['portfolio']) }]">
                    <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-chevron"></use>
                  </svg>

                  <span >{{ collapse['portfolio'] ? 'Скрыть' : `Показать все (${portfolio.length})` }}</span>
                </div>
              </div>
            </template>
          </div>
        </template>

        <div class="block block_declaration">
          <div>
            <div class="page-inner__label-title mb_1">Профессия</div>
            <div class="m-text_bold">{{ professionName }}</div>
          </div>

          <div class="mt_6">
            <div class="page-inner__label-title mb_1">Стоимость работы</div>
            <div class="m-text_bold">
              <template v-if="(hasRate === true)">
                от {{ rate['cost-of-work'] | currency(rate['currency']['text']) }} <template v-if="(rate['period-selection'])">/ {{ rate['period-selection']['text'] | lowercase }}</template>
              </template>
              <template v-else-if="(hasRate === false)">Без гонорара</template>
            </div>
          </div>

          <template v-if="isWorkForFree">
            <div class="mt_6">
              <div class="page-inner__label-title mb_1">Дополнительно</div>
              <div class="m-text_bold">Готов принять участие в студенческих, короткометражных или некоммерческих проектах</div>
            </div>
          </template>
        </div>

        <div class="block block_declaration">
          <template v-if="has(anketa, 'game-age')">
            <div>
              <div class="page-inner__label-title mb_1">Игровой возраст</div>
              <div class="m-text_bold">от {{ anketa['game-age'][0]['from'] }} – до {{ anketa['game-age'][0]['to'] }} лет</div>
            </div>
          </template>

          <template v-if="has(anketa, 'directions') && (Array.isArray(anketa.directions) && anketa.directions.length)">
            <div class="mt_6">
              <div class="page-inner__label-title mb_1">Направления</div>
              <div class="m-text_bold">{{ anketa['directions'].join(', ') }}</div>
            </div>
          </template>

          <template v-if="has(anketa, 'service-in-theaters')">
            <div class="mt_6">
              <div class="page-inner__label-title mb_1">Служба в театрах</div>
              <div class="m-text_bold">{{ anketa['service-in-theaters'] }}</div>
            </div>
          </template>

          <template v-if="has(anketa, 'equipment') && (Array.isArray(anketa.equipment) && anketa.equipment.length)">
            <div class="mt_6">
              <div class="page-inner__label-title mb_1">Оборудование</div>
              <div class="m-text_bold">{{ anketa['equipment'].join(', ') }}</div>
            </div>
          </template>

          <template v-if="has(anketa, 'functions') && (Array.isArray(anketa.functions) && anketa.functions.length)">
            <div class="mt_6">
              <div class="page-inner__label-title mb_1">Функции</div>
              <div class="m-text_bold">{{ anketa['functions'].join(', ') }}</div>
            </div>
          </template>

          <template v-if="has(anketa, 'programs-software') && (Array.isArray(anketa['programs-software']) && anketa['programs-software'].length)">
            <div class="mt_6">
              <div class="page-inner__label-title mb_1">Программы / софт</div>
              <div class="m-text_bold">{{ anketa['programs-software'].join(', ') }}</div>
            </div>
          </template>

          <template v-if="has(anketa, 'genres') && (Array.isArray(anketa.genres) && anketa.genres.length)">
            <div class="mt_6">
              <div class="page-inner__label-title mb_1">Жанры</div>
              <div class="m-text_bold">{{ anketa['genres'].join(', ') }}</div>
            </div>
          </template>

          <template v-if="has(anketa, 'instruments') && (Array.isArray(anketa.instruments) && anketa.instruments.length)">
            <div class="mt_6">
              <div class="page-inner__label-title mb_1">Инструменты</div>
              <div class="m-text_bold">{{ anketa['instruments'].join(', ') }}</div>
            </div>
          </template>

          <template v-if="has(anketa, 'music-services')">
            <div class="mt_6">
              <div class="page-inner__label-title mb_1">Музыкальные сервисы</div>
              <div class="m-text_bold">{{ anketa['music-services'] }}</div>
            </div>
          </template>

          <template v-if="has(anketa, 'own-material')">
            <div class="mt_6">
              <div class="page-inner__label-title mb_1">Собственный материал</div>
              <div class="m-text_bold">{{ anketa['own-material'] ? 'Да' : 'Нет' }}</div>
            </div>
          </template>

          <template v-if="has(anketa, 'actors-starred-in')">
            <div class="mt_6">
              <div class="page-inner__label-title mb_1">Актеры снимались в</div>
              <div class="m-text_bold">{{ anketa['actors-starred-in'] }}</div>
            </div>
          </template>

          <template v-if="has(anketa, 'introducing-actors-models')">
            <div class="mt_6">
              <div class="page-inner__label-title mb_1">Представляю актеров / моделей</div>
              <div class="m-text_bold">{{ anketa['introducing-actors-models'] }}</div>
            </div>
          </template>

          <template v-if="has(anketa, 'company')">
            <div class="mt_6">
              <div class="page-inner__label-title mb_1">Компания</div>
              <div class="m-text_bold">{{ anketa['company'] }}</div>
            </div>
          </template>

          <template v-if="has(anketa, 'talent-archive')">
            <div class="mt_6">
              <div class="page-inner__label-title mb_1">Архив талантов</div>
              <div class="m-text_bold">{{ anketa['talent-archive'] ? 'Да' : 'Нет' }}</div>
            </div>
          </template>

          <template v-if="has(anketa, 'work-experience')">
            <div class="mt_6">
              <div class="page-inner__label-title mb_1">Стаж работы</div>
              <div class="m-text_bold">{{ $pluralize(anketa['work-experience'], ['года', 'лет', 'лет']) }}</div>
            </div>
          </template>

          <template v-if="has(anketa, 'other')">
            <div class="mt_6">
              <div class="page-inner__label-title mb_1">Другое</div>
              <div class="m-text_bold">{{ anketa['other'] }}</div>
            </div>
          </template>

          <template v-if="has(anketa, 'competitions-and-awards')">
            <div class="mt_6">
              <div class="page-inner__label-title mb_1">Конкурсы и награды</div>
              <div class="m-text_bold">{{ anketa['competitions-and-awards'] }}</div>
            </div>
          </template>
        </div>


        <template v-if="hasBodyParameters">
          <div class="block block_declaration">
            <template v-if="has(bodyParameters, 'height')">
              <div>
                <div class="page-inner__label-title mb_1">Рост (см)</div>
                <div class="m-text_bold">{{ bodyParameters['height'] }}</div>
              </div>
            </template>

            <template v-if="has(bodyParameters, 'weight')">
              <div class="mt_6">
                <div class="page-inner__label-title mb_1">Вес (кг)</div>
                <div class="m-text_bold">{{ bodyParameters['weight'] }}</div>
              </div>
            </template>

            <template v-if="has(bodyParameters, 'volume-of-breast')">
              <div class="mt_6">
                <div class="page-inner__label-title mb_1">Объем груди (см)</div>
                <div class="m-text_bold">{{ bodyParameters['volume-of-breast'] }}</div>
              </div>
            </template>

            <template v-if="has(bodyParameters, 'waist')">
              <div class="mt_6">
                <div class="page-inner__label-title mb_1">Объем талии (см)</div>
                <div class="m-text_bold">{{ bodyParameters['waist'] }}</div>
              </div>
            </template>

            <template v-if="has(bodyParameters, 'hips')">
              <div class="mt_6">
                <div class="page-inner__label-title mb_1">Объем бедер (см)</div>
                <div class="m-text_bold">{{ bodyParameters['hips'] }}</div>
              </div>
            </template>

            <template v-if="has(bodyParameters, 'shoe-size')">
              <div class="mt_6">
                <div class="page-inner__label-title mb_1">Размер обуви</div>
                <div class="m-text_bold">{{ bodyParameters['shoe-size'] }}</div>
              </div>
            </template>

            <template v-if="has(bodyParameters, 'clothing-size')">
              <div class="mt_6">
                <div class="page-inner__label-title mb_1">Размер одежды</div>
                <div class="m-text_bold">{{ bodyParameters['clothing-size']['text'] }}</div>
              </div>
            </template>

            <template v-if="has(bodyParameters, 'body-type')">
              <div class="mt_6">
                <div class="page-inner__label-title mb_1">Телосложение</div>
                <div class="m-text_bold">{{ bodyParameters['body-type']['text'] }}</div>
              </div>
            </template>

            <template v-if="has(bodyParameters, 'type-of-appearance')">
              <div class="mt_6">
                <div class="page-inner__label-title mb_1">Тип внешности</div>
                <div class="m-text_bold">{{ bodyParameters['type-of-appearance']['text'] }}</div>
              </div>
            </template>

            <template v-if="has(bodyParameters, 'eye-color')">
              <div class="mt_6">
                <div class="page-inner__label-title mb_1">Цвет глаз</div>
                <div class="m-text_bold">{{ bodyParameters['eye-color']['text'] }}</div>
              </div>
            </template>

            <template v-if="has(bodyParameters, 'hair-color')">
              <div class="mt_6">
                <div class="page-inner__label-title mb_1">Цвет волос</div>
                <div class="m-text_bold">{{ bodyParameters['hair-color']['text'] }}</div>
              </div>
            </template>

            <template v-if="has(bodyParameters, 'hair-length')">
              <div class="mt_6">
                <div class="page-inner__label-title mb_1">Длина волос</div>
                <div class="m-text_bold">{{ bodyParameters['hair-length']['text'] }}</div>
              </div>
            </template>

            <template v-if="otherBodyParameters && otherBodyParameters.length">
              <div class="mt_6">
                <div class="page-inner__label-title mb_1">Дополнительно</div>
                <div class="m-text_bold">{{ otherBodyParameters.join(', ') }}</div>
              </div>
            </template>
          </div>
        </template>

        <template v-if="hasParticipationInProjects">
          <div class="block block_declaration">
            <template v-for="item in participationInProjects">
              <div class="mt_6">
                <div class="page-inner__label-title">Проект</div>
                <div class="m-text_bold mt_1">{{ item['project-name'] }}</div>
                <div class="m-text_normal mt_1">{{ item.description }}</div>
              </div>
            </template>
          </div>
        </template>

        <template v-if="hasHigherEducation">
          <div class="block block_declaration">
            <template v-for="item in higherEducation">
              <div class="mt_6">
                <div class="page-inner__label-title">Высшее образование</div>

                <div class="m-text_bold mt_1">
                  {{ item['university'] }}
                  <template v-if="item['years-of-study']">
                    ({{ item['years-of-study'][0]['from'] }} - {{ item['years-of-study'][0]['to'] }})
                  </template>
                </div>

                <div class="m-text_normal-2 mt_1" v-if="item['supervisor']">{{ item['supervisor'] }}</div>

                <div class="mt_3" v-if="item['specialty'] || item['description']">
                  <div class="m-text_semi-bold" v-if="item['specialty']">
                    {{ item['specialty'] }}
                  </div>

                  <div class="m-text_normal" :style="{ marginTop: item['specialty'] ? '2px' : '0'}" v-if="item['description']">
                    {{ item['description'] }}
                  </div>
                </div>
              </div>
            </template>

          </div>
        </template>

        <template v-if="hasTraining">
          <div class="block block_declaration">
            <template v-for="item in training">
              <div class="mt_6">
                <div class="page-inner__label-title">Повышение квалификации</div>

                <div class="m-text_bold mt_1">
                  {{ item['organization'] }}
                  <template v-if="item['years-of-study']">
                    ({{ item['years-of-study'][0]['from'] }} - {{ item['years-of-study'][0]['to'] }})
                  </template>
                </div>

                <div class="m-text_normal-2 mt_1" v-if="item['teacher']">{{ item['teacher'] }}</div>

                <div class="mt_3" v-if="item['thing'] || item['description']">
                  <div class="m-text_semi-bold" v-if="item['thing']">
                    {{ item['thing'] }}
                  </div>

                  <div class="m-text_normal" :style="{ marginTop: item['thing'] ? '2px' : '0'}" v-if="item['description']">
                    {{ item['description'] }}
                  </div>
                </div>
              </div>
            </template>
          </div>
        </template>

        <template v-if="(hasContacts === true)">
          <div class="block block_declaration">
            <template v-if="(hideContacts === true)">
              <div class="section_contacts_action">
                <span class="m-text_bold">Узнайте контакты, используя «Показать контакты»</span>
                <button @click="_handleShowContacts" class="btn btn_primary">Показать контакты</button>
              </div>
            </template>
            <template v-else>
              <template v-if="(vk)">
                <div class="mt_6">
                  <div class="page-inner__label-title">Вконтакте</div>
                  <div class="m-text_bold mt_1">
                    <a class="fw_600 color_gray-1" :href="`https://vk.com/${ getPartSocialUrl(vk, 'vk.com') }`" target="_blank">{{ vk }}</a>
                  </div>
                </div>
              </template>

              <template v-if="(instagram)">
                <div class="mt_6">
                  <div class="page-inner__label-title">Instagram</div>
                  <div class="m-text_bold mt_1">
                    <a class="color_gray-1" :href="`https://instagram.com/${ getPartSocialUrl(instagram, 'instagram.com') }`" target="_blank">{{ instagram }}</a>
                  </div>
                </div>
              </template>

              <template v-if="(facebook)">
                <div class="mt_6">
                  <div class="page-inner__label-title">Facebook</div>
                  <div class="m-text_bold mt_1">
                    <a class="color_gray-1" :href="`https://facebook.com/${ getPartSocialUrl(getPartSocialUrl(facebook, 'facebook.com'), 'fb.com') }`" target="_blank">{{ facebook }}</a>
                  </div>
                </div>
              </template>

              <template v-if="(youtube)">
                <div class="mt_6">
                  <div class="page-inner__label-title">YouTube</div>
                  <div class="m-text_bold mt_1">
                    <a class="color_gray-1" :href="`https://youtube.com/${ getPartSocialUrl(youtube, 'youtube.com') }`" target="_blank">{{ youtube }}</a>
                  </div>
                </div>
              </template>

              <template v-if="(telegram)">
                <div class="mt_6">
                  <div class="page-inner__label-title">Telegram</div>
                  <div class="m-text_bold mt_1">
                    <a :href="`tg://resolve?domain=${ telegram }`" target="_self" class="color_gray-1">{{ telegram }}</a>
                  </div>
                </div>
              </template>

              <template v-if="(whatsapp)">
                <div class="mt_6">
                  <div class="page-inner__label-title">Whatsapp</div>
                  <div class="m-text_bold mt_1">
                    <a class="color_gray-1" :href="`whatsapp://send?phone=${ whatsapp }`" target="_self">{{ whatsapp }}</a>
                  </div>
                </div>
              </template>

              <template v-if="(viber)">
                <div class="mt_6">
                  <div class="page-inner__label-title">Viber</div>
                  <div class="m-text_bold mt_1">
                    <a class="color_gray-1" :href="`viber://chat?number=${ viber }`" target="_self">{{ viber }}</a>
                  </div>
                </div>
              </template>

              <template v-if="(email)">
                <div class="mt_6">
                  <div class="page-inner__label-title">E-mail</div>
                  <div class="m-text_bold mt_1" v-html="$anchorme(email)"></div>
                </div>
              </template>

              <template v-if="(site)">
                <div class="mt_6">
                  <div class="page-inner__label-title">Сайт</div>
                  <div class="m-text_bold mt_1" v-html="$anchorme(site)"></div>
                </div>
              </template>
            </template>
          </div>
        </template>



        <template v-if="(isCurrentUser === true && isFasten === false)">
          <div class="block block_declaration">
            <lm-m-loader v-if="promotion['prices']['loading']"></lm-m-loader>
            <template v-if="hasPricePromotion">
              <template v-if="(promotion[UP]['success'] === false)">
                <div :class="['card', 'card__placement', 'card__placement_premium', {'mb_6' : promotion[UP]['success'] === false}]">
                  <div class="card__content">
                    <template v-if="(promotion[FASTEN]['success'] === false)">
                      <div class="row align_center mb_1">
                        <div class="heading heading_h5 mb_0">Премиум-размещение</div>
                        <svg class="icon icon_size_16 fill_support-3 ml_2">
                          <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-favourite" />
                        </svg>
                      </div>

                      <div class="m-text_normal mb_3">Увеличивает шансы приглашения на работу в 3 раза</div> <!-- .mb_12 -->

                      <div class="sale-line m-text_bold-2 color_white">Скидка {{ promotion['prices']['data'][FASTEN]['percent'] }}%</div>
                      <div class="line-border_absolute"></div>

                      <div class="m-text_normal p_t_12 mb_4">Срок размещения: до <span class="tt_capitalize">{{ $moment().add('7', 'day').format('DD MMMM YYYY') }}</span><br> Оплата: за 7 дней</div>

                      <div class="row justify_between">
                        <button class="btn btn_primary w_100 max-w_272px mr_5" @click="_handleClickCreatePromotion(FASTEN)">Выбрать</button>
                        <div class="card__price">
                          <div class="m-text_bold mb_1">{{ promotion['prices']['data'][FASTEN]['discount'] | currency('₽') }} / 7 дней</div>
                          <div class="m-text_normal">{{ promotion['prices']['data'][FASTEN]['full'] | currency('₽') }} / 7 дней</div>
                        </div>
                      </div>
                    </template>

                    <template v-if="(promotion[FASTEN]['success'] === true)">
                      <div class="row align_center mb_1">
                        <div class="heading heading_h5 mb_0">Профессия закреплена</div>
                        <svg class="icon icon_size_16 icon_check ml_3">
                          <use xlink:href="/dist/img/icons/svg/sprite.svg#checkbox__mark" />
                        </svg>
                      </div>
                      <div class="m-text_normal">Ваша профессия теперь закреплена в топе ленты на семь дней</div>
                    </template>
                  </div>
                </div>
              </template>
            </template>
          </div>
        </template>
      </div>
    </div>

    <template v-if="(isCurrentUser === false)">
      <div class="page__footer page__footer_declaration">
        <div class="page__block_declaration">
          <div class="row row_justify_between">
            <template v-if="phone">
              <button class="btn btn_round btn_primary" @click="_handleClickMessage">
                <svg class="icon icon_size_16 icon_fill_white">
                  <use xlink:href="/dist/img/icons/_declaration/sprite.svg#icon_chat"></use>
                </svg>
              </button>
              <a :href="`tel:${phone}`" class="btn btn_primary w_100 max-w_272px ml_9" @click="_handleClickCallUser">
                Позвонить
              </a>
            </template>
            <template v-else-if="!phone">
              <button class="btn btn_primary w_100" @click="_handleClickMessage">Написать</button>
            </template>
          </div>
        </div>
      </div>
    </template>
    <actionsheet :actions="sheet.actions" v-model="sheet.value" cancel-text="" :lockScroll="true"></actionsheet>
  </div>
</template>

<script>
  import { Collapse } from 'uiv'
  import { Toast, Indicator } from 'mint-ui'
  import { mapGetters, mapActions } from 'vuex'
  import { has, AVATAR, isBrowser, getPartSocialUrl } from '@utils'
  const APP_URL = process.env.APP_URL

  import Snap from '@modules/User/Profession/Snap'
  import Profession from '@modules/User/Profession'
  import { viewProfession } from '@modules/Rating/Enums/events'
  import { UP, FASTEN } from '@modules/Board/Enums/PromotionType'
  import { NOT_VERIFIED, APPROVED, REJECTED } from '@modules/User/Profession/Snap/Enums/SnapState'

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
        has, getPartSocialUrl,
        APP_URL,
        UP, FASTEN,
        relateDate: null,
        sheet: {
          value: false,
          actions: []
        },
        collapse: {
          snaps: false,
          portfolio: false
        },
        hideContacts: true,
        MIN_SNAP_COUNT: Snap.MIN_SNAP_COUNT,
        promotion: {
          payment: { form: {}, url: null },
          [UP]: { success: false, loading: false },
          [FASTEN]: { success: false, loading: false },
          prices: { data: { [UP]: { full: 0, percent: 0, discount: 0 }, [FASTEN]: { full: 0, percent: 0, discount: 0 } }, loading: false, error: false }
        },
      }
    },
    beforeDestroy () {
      this.$root.$off('user-updated-state-folder')
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
      isCertifiedUser () {
        return this.author.isCertifiedUser || false
      },
      avatar () {
        if (this.author && has(this.author, 'avatar.84x84')) {
          const { avatar: { '84x84': image } } = this.author
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

        if (this.bodyParameters && has(this.bodyParameters, 'dyed-hair')) others.push('Окрашенные волосы')
        if (this.bodyParameters && has(this.bodyParameters, 'tattoos')) others.push('Татуировки')
        if (this.bodyParameters && has(this.bodyParameters, 'piercings')) others.push('Пирсинг')

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
      hasSnaps () {
        return (has(this.profession, 'snaps') && this.profession['snaps'].length)
      },
      snaps () {
        return this.hasSnaps ? this.profession['snaps'] : []
      },
      professionSupportSnaps () {
        const { profession: { name } } = this.profession
        return Profession.supportSnaps(name)
      },
      isSnapsApproved () {
        return (has(this.profession, 'snapsState') && this.profession['snapsState'] && this.profession['snapsState'] === APPROVED)
      },
      isSnapsNotVerified () {
        return (has(this.profession, 'snapsState') && this.profession['snapsState'] && this.profession['snapsState'] === NOT_VERIFIED)
      },
      isSnapsRejected () {
        return (has(this.profession, 'snapsState') && this.profession['snapsState'] && this.profession['snapsState'] === REJECTED)
      },
      originalAvatar () {
        if (this.author && has(this.author, 'avatar.original')) {
          const { avatar: { original : image } } = this.author
          return image || AVATAR
        } else return AVATAR
      },
      inFolder () {
        return this.author.inFolder || false
      },
      userBalance () {
        return Number(this.user.balance)
      },
      isFasten () {
        return this.profession.isFasten || false
      },
      hasPricePromotion () {
        return (Boolean(this.promotion.prices['data'][FASTEN]['discount']) && this.promotion.prices.loading === false)
      },
    },
    mounted () {
      if (this.isAuthorized && this.isCurrentUser) {
        this.hideContacts = false

        this._getPricePromotion()
      } else {
        if (isBrowser) this.$nsWebViewInterface.emit('rating', viewProfession)
      }

      this.$root.$on('user-updated-state-folder', (userId, inFolder) => {
        let { id } = this.profession
        this.setFieldProfessionData({ id, key: 'user.inFolder', value: inFolder })
      })
    },
    created () {
      this._draftSheet()
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
      _draftSheet () {
        return new Promise((resolve, reject) => {
          try {
            if (this.isCurrentUser === false) {
              this.sheet.actions.push({
                name: 'Пожаловаться',
                method: this._handleClickAbuseCasting
              })
            }

            if (this.isAuthorized && this.user) {
              this.sheet.actions.push({
                name: 'Скопировать ссылку',
                method: this._handleClickClipProfession
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
      _handleClickAddToFolder () {
        this.$root.$emit('open-modal-add-user-on-folder', { user: this.author } )
      },
      _handleClickAbuseCasting () {
        let { id } = this.profession
        this.$root.$emit('open-modal-abuse-create', { id, type: 'profession' })
      },
      _handleClickClipProfession () {
        this.$copyText(APP_URL + this.href).then((e) => {
          Toast({ message: 'Успешно',  iconClass: 'mintui mintui-success' })
        }, (e) => {
          Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
        })
      },
      _handleClickPreviousPage () {
        if (window.history.length > 2) {
          this.$router.go(-1)
        } else this.$router.push({ name: 'users.index' })
      },
      isToday(date) {
        let context = this.$moment(date);
        return this.$moment().isSame(context, 'd')
      },
      _handleShowContacts () {
        this.hideContacts = false
        this.$gtm.trackEvent({ event: 'show_contancts' })
      },
      _handleClickActionSheet () {
        this.sheet.value = true
      },
      _handleClickMessage () {
        if (this.isAuthorized === false) {
          this._handleClickMessageWithoutAuthorized()
        } else this._handleMessage()

        this.$gtm.trackEvent({ event: 'profession_write_message' })
      },
      _handleClickMessageWithoutAuthorized () {
        this.$localStorage.set('redirect.register', this.href)
        this.$nextTick(() => {
          this.$router.push({ name: 'register' })
        })
      },
      _handleMessage () {
        let uid = this._.sortBy([ this.author.id, this.user.id ]).toString()

        this.$router.push({ name: 'messages.show', params: { uid } })
      },
      _handleClickCallUser () {
        this.$gtm.trackEvent({ event: 'call_user_number' })
      },
      _handleClickToggleCollapse (field) {
        if (this.collapse.hasOwnProperty(field)) {
          this.$set(this.collapse, field, !this.collapse[field])
        } else this.$set(this.collapse, field, true)
      },
      _handleClickCreatePromotion (type) {
        let { id } = this.profession
        this._createPromotion(id, type)

        let event = 'fasten_profession'
        this.$gtm.trackEvent({ event })
      },
      _createPromotion (promotedId, type) {
        Indicator.open()
        this.promotion[type]['loading'] = true

        let data = { promotedType: 'profession', promotedId, typeName: type }

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
              window.nsWebViewInterface.emit('callback', { error: e.message })
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

          throw new Error(`Error create profession promotion.`)
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
    }
  }
</script>

<style lang="scss" scoped>
</style>
