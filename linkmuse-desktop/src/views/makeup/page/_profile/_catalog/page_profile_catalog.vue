<template>
  <div class="page page_feed page-profile page-inner">

    <!-- page content -->
    <div class="page__content">

      <div class="page__body page__body_feed"><!-- feed -->

        <div class="d-row mb_6">
          <div class="heading heading_h2 mb_0">Профессионалы</div>
          <div class="d-feed__counter d-feed__counter_locations">{{ total }}</div>
        </div>

        <!-- feed -->
        <div class="d-feed d-feed_locations" id="d-feed_locations" data-v-sticky-container>
          <!-- sidebar -->
          <div class="sidebar d-feed__sidebar" v-sticky-sidebar="optionsStickySidebar">
            <div class="sidebar__content" data-v-sticky-inner>
              <!-- filters -->
              <div class="filters">
                <div class="d-card">

                  <div class="section filters__section">
                    <div
                      :class="['d-input', 'd-input_search', 'd-input_search_feed', { 'd-input_search_feed_focused': searchFocused }]">
                      <svg class="d-icon d-icon_size_16 d-icon_search">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_search"/>
                      </svg>
                      <input type="text" name="name" ref="name" autocomplete="off"
                             v-validate="'max:25'"
                             v-model="fields.name"
                             data-lm-key="name"
                             :placeholder="'Поиск по имени, фамилии'"
                             @focus="_handleFocusFieldSearchTalent"
                             @blur="_handleBlurFieldSearchTalent"
                             @input="_handleInputFieldSearchCasting"
                             :class="['d-input__field', 'd-input__field_search', { 'error': (verrors.has('name')) }]">
                      <template v-if="(fields.name)">
                        <svg class="d-icon d-icon_size_16 d-icon_close d-icon_close_search fill_white" @click="_handleClickCloseSearching">
                          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-close-small"/>
                        </svg>
                      </template>
                    </div>
                  </div>

                  <div class="section filters__section">
                    <div class="list list_filters list_dropdown list_dropdown_radio list_dropdown_active ">
                      <div class="d-row align_center" @click="_handleClickToggleCollapse('profession')"
                           :style="{ cursor: 'pointer' }">
                        <div class="list__header list__header_filters list__header_dropdown">Профессия</div>
                        <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['profession']) }]">
                          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                        </svg>
                        <template v-if="(!collapse['profession'])">
                          <div class="filters__status filters__status_changed"></div>
                        </template>
                      </div>

                      <collapse v-model="collapse['profession']">
                        <div class="mt_3" v-for="profession in sources333['profession'].slice(0, 3)"
                             :key="`board-${profession.name}-${profession.id}`">

                          <div class="d-row align_center" @click="_handleClickToggleCollapseLists(profession.name)"
                               :style="{ cursor: 'pointer' }">
                            <div class="mr_1">{{profession.text}}</div>

                            <svg :class="['d-icon', 'd-icon_size_16', {  rotate_180: (collapse['lists'][profession.name]) }]">
                              <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-chevron-bottom"></use>
                            </svg>
                          </div>

                          <collapse v-model="collapse['lists'][profession.name]">
                            <ul class="lm-radio-buttons mt_3" v-for="role in profession.roles">
                              <li :key="`board-${role.name}-${role.id}`">
                                <input name="abuse" type="radio" :id="`${role.name}_${role.id}`"
                                        :value="role.text" aria-required="true" aria-invalid="false">
                                <label :for="`${role.name}_${role.id}`">{{role.text}}</label>
                              </li>
                            </ul>
                          </collapse>
                        </div>


                        <template v-if="(sources333['profession'].length > 3)">
                          <template v-if="collapse['lists']['profession']">
                            <div class="mt_3" v-for="profession in sources333['profession'].slice(3)"
                                 :key="`board-${profession.name}-${profession.id}`">

                              <div class="d-row align_center" @click="_handleClickToggleCollapseLists(profession.name)"
                                   :style="{ cursor: 'pointer' }">
                                <div class="mr_1">{{profession.text}}</div>

                                <svg :class="['d-icon', 'd-icon_size_16', {  rotate_180: (collapse['lists'][profession.name]) }]">
                                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-chevron-bottom"></use>
                                </svg>
                              </div>

                              <collapse v-model="collapse['lists'][profession.name]">
                                <ul class="lm-radio-buttons mt_3" v-for="role in profession.roles">
                                  <li :key="`board-${role.name}-${role.id}`">
                                    <input name="abuse" type="radio" :id="`${role.name}_${role.id}`"
                                           :value="role.text" aria-required="true" aria-invalid="false">
                                    <label :for="`${role.name}_${role.id}`">{{role.text}}</label>
                                  </li>
                                </ul>
                              </collapse>
                            </div>
                          </template>

                          <a href="javascript:void(0)" class="d-row d-link d-link_show-all mt_3"
                             @click="_handleClickToggleCollapseLists('profession')">
                            {{!collapse['lists']['profession'] ? 'Показать все' : 'Скрыть'}}
                          </a>
                        </template>


                      </collapse>
                    </div>
                  </div>

                  <div class="section filters__section">
                    <div class="list list_filters list_dropdown list_dropdown_active">
                      <div class="d-row align_center" @click="_handleClickToggleCollapse('genders')"
                           :style="{ cursor: 'pointer' }">
                        <div class="list__header list__header_filters list__header_dropdown">Пол</div>
                        <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['genders']) }]">
                          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                        </svg>
                        <template v-if="(!collapse['genders'] && fields.genderIds.length)">
                          <div class="filters__status filters__status_changed"></div>
                        </template>
                      </div>

                      <collapse v-model="collapse['genders']">
                        <div class="list__body list__body_filters list__body_dropdown">
                          <div class="list__item" v-for="gender in sources['genders']">
                            <div class="d-checkbox">
                              <input :id="`board-gender-${gender.id}`" name="genderIds"
                                     type="checkbox" class="d-checkbox__mark"
                                     data-vv-name="genderIds"
                                     :data-vv-as="'Пол'"
                                     :value="gender.id"
                                     @change="_handleChangeFieldSearchCasting"
                                     v-model="fields.genderIds">
                              <label :for="`board-gender-${gender.id}`" class="d-checkbox__label">{{ gender.text }}</label>
                            </div>
                          </div>
                        </div>
                      </collapse>
                    </div>
                  </div>

                  <div class="section filters__section">
                    <div class="d-row align_center" @click="_handleClickToggleCollapse('ages')"
                         :style="{ cursor: 'pointer' }">
                      <div class="list__header list__header_filters list__header_dropdown">Возраст</div>
                      <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['ages']) }]">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                      </svg>
                      <template v-if="(!collapse['ages'] && (fields.ageFrom || fields.ageTo))">
                        <div class="filters__status filters__status_changed"></div>
                      </template>
                    </div>
                    <no-ssr>
                      <collapse v-model="collapse['ages']">
                        <div class="d-row align_center mt_3">
                          <div class="d-input">
                            <input v-mask-numeric type="text" placeholder="От"
                                   id="ageFrom"
                                   name="ageFrom"
                                   data-vv-name="ageFrom"
                                   :data-vv-as="'От'"
                                   ref="ageFrom"
                                   v-model="fields.ageFrom"
                                   min="1" max="150"
                                   @change="_handleChangeFieldSearchCasting"
                                   v-validate="'decimal:3|min_value:1|max_value:150'"
                                   :class="[{ 'error': (verrors.has('ageFrom')), 'filled': (fields.ageTo && !verrors.has('ageFrom')) }, 'd-input__field']">
                          </div>
                          <div class="color_gray-4 ml_1 mr_1">-</div>
                          <div class="d-input">
                            <input v-mask-numeric type="text" placeholder="До"
                                   id="ageTo"
                                   name="ageTo"
                                   data-vv-name="ageTo"
                                   :data-vv-as="'До'"
                                   ref="ageTo"
                                   v-model="fields.ageTo"
                                   min="1" max="150"
                                   @change="_handleChangeFieldSearchCasting"
                                   v-validate="'decimal:3|min_value:1|max_value:150|minTarget:ageFrom'"
                                   :class="[{ 'error': (verrors.has('ageTo')), 'filled': (fields.ageTo && !verrors.has('ageTo')) }, 'd-input__field']">
                          </div>
                        </div>
                      </collapse>
                    </no-ssr>
                  </div>

                  <div class="section filters__section">
                    <div class="d-row align_center" @click="_handleClickToggleCollapse('prices')"
                         :style="{ cursor: 'pointer' }">
                      <div class="list__header list__header_filters list__header_dropdown">Ставка (₽)</div>
                      <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['prices']) }]">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                      </svg>
                      <template v-if="(!collapse['prices'] && (priceMin || priceMax))">
                        <div class="filters__status filters__status_changed"></div>
                      </template>
                    </div>
                    <no-ssr>
                      <collapse v-model="collapse['prices']">
                        <div class="d-row align_center mt_3">
                          <div class="d-input">
                            <input v-mask-decimal="{ digits: 2 }" type="text" placeholder="От"
                                   id="priceMin"
                                   name="priceMin"
                                   data-vv-name="priceMin"
                                   :data-vv-as="'От'"
                                   ref="priceMin"
                                   v-model="priceMin"
                                   min="1" max="9999"
                                   @input="_handleChangeFieldSearchCasting"
                                   v-validate="'decimal:2|min_value:1|max_value:9999'"
                                   :class="[{ 'error': (verrors.has('priceMin')), 'filled': (priceMin && !verrors.has('priceMin')) }, 'd-input__field']">
                          </div>
                          <div class="color_gray-4 ml_1 mr_1">-</div>
                          <div class="d-input">
                            <input v-mask-decimal="{ digits: 2 }" type="text" placeholder="До"
                                   id="priceMax"
                                   name="priceMax"
                                   data-vv-name="priceMax"
                                   :data-vv-as="'До'"
                                   ref="priceMax"
                                   v-model="priceMax"
                                   min="1" max="9999"
                                   @input="_handleChangeFieldSearchCasting"
                                   v-validate="'decimal:2|min_value:1|max_value:9999|minTarget:priceMin'"
                                   :class="[{ 'error': (verrors.has('priceMax')), 'filled': (priceMax && !verrors.has('priceMax')) }, 'd-input__field']">
                          </div>
                        </div>
                        <div class="d-row align-center mt_3">
                          <div class="d-select w_100">
                            <lm-select
                              input-id="declaration__country"
                              input-name="country"
                              data-vv-name="paymentPeriod"
                              data-vv-as="Период оплаты"
                              :options="sources['paymentPeriods']"
                              v-model="fields.paymentPeriod"
                              :placeholder="'Все'"
                              :multiple="false"
                              :filter="false"
                              @input="_handleChangeFieldSearchCasting"
                              :class="['lm-dropdown-wrap--n', 'd-select__field', { 'error': (verrors.has('paymentPeriod')) }]">
                            </lm-select>
                          </div>
                        </div>
                      </collapse>
                    </no-ssr>
                  </div>

                  <div class="section filters__section">
                    <div class="d-row align_center" @click="_handleClickToggleCollapse('location')"
                         :style="{ cursor: 'pointer' }">
                      <div class="list__header list__header_filters list__header_dropdown">Местоположение</div>
                      <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['location']) }]">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                      </svg>
                      <template v-if="(!collapse['location'] && fields.countryId)">
                        <div class="filters__status filters__status_changed"></div>
                      </template>
                    </div>
                    <no-ssr>
                      <collapse v-model="collapse['location']">
                        <div class="d-row align-center mt_3">
                          <div class="d-select w_100">
                            <lm-select
                              input-id="declaration__country"
                              input-name="country"
                              data-vv-name="countryId"
                              data-vv-as="Страна"
                              :options="sources['location']"
                              v-model="fields.countryId"
                              :placeholder="'Выберите страну'"
                              :multiple="false"
                              :filter="true"
                              @input="_handleChangeFieldSearchCasting(); _handleChangeCountrySelect(...arguments, true, true);"
                              :class="['lm-dropdown-wrap--n', 'd-select__field', { 'error': (verrors.has('countryId')) }]">
                            </lm-select>
                          </div>
                        </div>

                        <div class="d-row align-center mt_3">
                          <div class="d-select w_100">
                            <lm-select
                              input-id="declaration__city"
                              input-name="city"
                              data-vv-name="cityId"
                              data-vv-as="Город"
                              :options="sources['cities']"
                              v-model="fields.cityId"
                              :placeholder="citiesPlaceholder"
                              :multiple="false"
                              :filter="true"
                              @input="_handleChangeFieldSearchCasting"
                              :disabled="(sources['cities'].length === 0 || !fields.countryId )"
                              :class="['lm-dropdown-wrap--n', 'd-select__field', 'w_100', { 'error': (verrors.has('cityId')) }]">
                            </lm-select>
                          </div>
                        </div>
                      </collapse>
                    </no-ssr>
                  </div>
                  <template v-if="showReset">
                    <div class="section filters__section">
                      <button class="d-btn d-btn_outline w_100" @click="_handleClickClearFilter" :disabled="(loading)">
                        Сбросить фильтры
                      </button>
                    </div>
                  </template>
                </div>
              </div> <!-- end of filters -->

              <template v-if="typeFormPoll">
                <div class="d-card">
                  <div class="d-row justify_between">
                    <div class="heading heading_h5 mb_0">Сделаем сайт лучше?</div>
                    <a href="javascript:void(0)" @click="_handleClickHideTypeForm">
                      <svg class="d-icon d-icon_size_16 fill_gray-3">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-close"/>
                      </svg>
                    </a>
                  </div>
                  <div class="d-row mt_2 color_gray-2 fsize_14">
                    Пожалуйста, ответьте на несколько вопросов по удобству
                  </div>
                  <a href="https://linkmuse.typeform.com/to/A3Rn4O" target="_blank" class="d-btn d-btn_outline mt_4 w_100">
                    Пройти опрос
                  </a>
                </div>
              </template>

              <sidebar-navigation/>
              <div class="d-card d-card_outline">
                <div class="d-nav d-nav_inline-bullet">
                  <div class="d-nav__text">
                    Работа для моделей, актеров и танцоров
                  </div>
                  <div class="d-nav__text">
                    Как получить работу модели?
                    На нашем сайте каждый день публикуются самые свежие кастинги для фотомоделей
                  </div>
                  <div class="d-nav__text">
                    Кастинговые агентства, букеры и скауты модельных агентств размещают самые разные предложения - от работы на
                    подиуме, каталожной съемки, работы хостес на мероприятиях до работы веб моделью на дому
                  </div>
                  <div class="d-nav__text">
                    Здесь легко можно найти подработку моделью в Москве, в том числе для непрофессиональных моделей: работу на
                    выставках, модельные тусовки или можно просто бесплатно попасть за модельный стол в клубе
                  </div>
                  <div class="d-nav__text">
                    Если вы актер подработка для вас тоже найдется - например, массовки в Москве за деньги
                  </div>
                  <div class="d-nav__text">
                    Это быстрый и несложный заработок: как правило, массовка оплачивается сразу же
                  </div>
                </div>
              </div>
            </div>
          </div> <!-- end of sidebar -->

          <!-- feed__body -->
          <div class="d-feed__body ml_4" v-infinite-scroll="_handleInfiniteScroll" infinite-scroll-disabled="infiniteDisabled" infinite-scroll-distance="900">
            <template v-if="isEmptyProfession">
              <div class="d-card d-card_feed-plug">
                <svg class="d-icon d-icon_size_64 fill_main mb_5">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_info"/>
                </svg>
                <div class="heading heading_h5">Мы ничего не нашли</div>
                <div class="ta_center mb_4 color_gray-1">Попробуйте другой запрос<br> или сбросьте фильтры</div>
                <a href="javascript:void(0)" class="d-btn d-btn_primary">Сбросить фильтры</a>
              </div>
            </template>

            <template v-else>
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
                          актер
                        </div>

                        <div class="d-card__date_casting-creation">
                          сегодня
                        </div>
                      </div>

                      <a href="#" :class="[{ 'opacity_64' : (isArchived === true) }]">
                        <div class="heading page-profile__text_1 align-center mb_2">
                          Евгений Белоусов
                          <template v-if="isCertifiedUser">
                            <tooltip :class="['align-center', 'tooltip_small']" effect="scale" placement="right" :content="'Пройдена процедура верификации'">
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

            </template>



            <template v-if="(isEmpty === true)">
              <div class="d-card d-card_feed-plug">
                <svg class="d-icon d-icon_size_64 fill_main mb_5">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_search"/>
                </svg>
                <div class="heading heading_h5">Мы ничего не нашли</div>
                <div class="ta_center mb_4 color_gray-1">Попробуйте другой запрос<br>или сбросьте фильтры</div>
                <template>
                  <template v-if="showReset">
                    <button class="d-btn d-btn_primary" @click="_handleClickClearFilter">Сбросить</button>
                  </template>
                  <template v-else>
                    <button class="d-btn d-btn_primary" @click="_handleClickCreateCasting">Создать</button>
                  </template>
                </template>
              </div>
            </template>

          </div> <!-- end of feed__body -->

        </div> <!-- end of feed -->
      </div>
    </div> <!-- end of page content -->
  </div> <!-- end of page -->
</template>

<script>
    import _ from 'lodash'
    import { Collapse } from 'uiv'
    import { mapGetters, mapActions } from 'vuex'
    import { omitEmpty, getDataAttribute, HEADER_HEIGHT } from '@utils'

    import { createHelpers } from 'vuex-map-fields'

    const APP_URL = process.env.APP_URL;

    const { mapFields } = createHelpers({
        getterType: 'board/casting/getField',
        mutationType: 'board/casting/updateField',
    })

    import { PUBLISHED, DRAFT, ARCHIVED, MODERATION } from '@modules/Board/Casting/Enums/CastingState'

    export default {
        components: { Collapse },
        metaInfo: {
            title: 'Профессионалы'
        },
        data () {
            return {
                APP_URL,
                draft: false,
                published: true,
                is_moderation: false,
                archived: false,
                admin: false,
                current_user: true,
                searchFocused: false,

                total_profession: 1,
                city: {
                    text: 'Москва'
                },
                age: 25,
                phone: '+79036824712',
                priceMin: '',
                priceMax: '',
                href: '/boards/castings/kasting_v_korotkiy_metr-1068?ref=22819',
                genders: [
                    {
                        id: 1,
                        text: 'Мужской'
                    },
                    {
                        id: 2,
                        text: 'Женский'
                    }
                ],

                sources333: {
                    profession: [
                        {
                            id: 1,
                            name: "talents",
                            text: "Таланты",
                            roles: [
                                {
                                    id: 1,
                                    name: "actor",
                                    text: "Актер"
                                },
                                {
                                    id: 2,
                                    name: "model",
                                    text: "Модель"
                                },
                                {
                                    id: 3,
                                    name: "dancer",
                                    text: "Танцор"
                                },
                                {
                                    id: 4,
                                    name: "leading",
                                    text: "Ведущий"
                                },
                                {
                                    id: 5,
                                    name: "musician",
                                    text: "Музыкант / группы"
                                },
                                {
                                    id: 6,
                                    name: "circus_artist",
                                    text: "Артист цирка"
                                },
                                {
                                    id: 7,
                                    name: "choreographer",
                                    text: "Хореограф"
                                },
                                {
                                    id: 8,
                                    name: "actor_mass_scenes",
                                    text: "Актер массовых сцен"
                                },
                            ]
                        },

                        {
                            id: 2,
                            name: "acting_department",
                            text: "Актерский департамент",
                            roles: [
                                {
                                    id: 1,
                                    name: "hfghfgh",
                                    text: "hfghfgh"
                                },
                                {
                                    id: 2,
                                    name: "gjhlttt",
                                    text: "gjhlttt"
                                },
                            ]
                        },

                        {
                            id: 3,
                            name: "operator_group",
                            text: "Операторская группа",
                            roles: [
                                {
                                    id: 1,
                                    name: "hfyrtylghfgh",
                                    text: "hfyrtylghfgh"
                                },
                                {
                                    id: 2,
                                    name: "gjhfghfghlttt",
                                    text: "gjhfghfghlttt"
                                },
                            ]
                        },

                        {
                            id: 4,
                            name: "directors_group",
                            text: "Режиссерская группа",
                            roles: [
                                {
                                    id: 1,
                                    name: "6756786i",
                                    text: "6756786i"
                                },
                                {
                                    id: 2,
                                    name: "gjhlvcbvnvbnttt",
                                    text: "gjhlvcbvnvbnttt"
                                },
                            ]
                        },
                    ],
                },


                typeFormPoll: false,
                collapse: {
                    roles: true,
                    profession: true,
                    genders: true,
                    prices: false,
                    location: false,
                    ages: true,
                    lists: {
                        roles: false,
                        profession: false,
                        talents: false,
                        operator_group: false,
                        directors_group: false,
                        acting_department: false,
                    }
                },

                optionsStickySidebar: {
                    topSpacing: 72,
                    bottomSpacing: 16
                }
            }
        },
        async asyncData ({ store, route }) {
            const { query } = route

            let promises = []
            const count = store.getters['board/casting/getCastingsTotal']
            const initialized = store.getters['board/casting/getInitializedSources']
            const defaultFields = store.getters['board/casting/getCatalogFieldsFilter']

            let fields = omitEmpty(_.merge(defaultFields, query), { omitZero: false })

            // if (!count)  {
            promises.push(store.dispatch('board/casting/fetchCastings', { fields, offset: 0 }))
            // }

            if (!initialized) {
                promises.push(store.dispatch('board/casting/getSources'))
            }

            await Promise.all(promises)
        },
        computed: {
            ...mapFields({
                fields: 'castings.filter',
                defaultFields: 'castings.defaultFilter'
            }),
            ...mapGetters({
                user: 'auth/getAuthUser',
                profile: 'auth/getProfile',
                isAuthorized: 'auth/isAuthorized',
                sources: 'board/casting/getSources',
                total: 'board/casting/getCastingsTotal',
                error: 'board/casting/getCastingsError',
                offset: 'board/casting/getCastingsOffset',
                castings: 'board/casting/getCastingsData',
                loading: 'board/casting/getCastingsLoading',
                infiniteDisabled: 'board/casting/getCastingsInfiniteDisabled'
            }),
            isEmpty () {
                return ( this.loading === false && this.total === 0 )
            },
            showReset () {
                const fields = this._.omit(this.fields)
                const defaultFields = this._.omit(this.defaultFields)

                return (this._.isEqual(fields, defaultFields) === false)
            },
            hasMoreFields () {
                return Boolean(Number(this.fields.isOnline))
            },
            citiesPlaceholder () {
                return this.fields['countryId'] ? 'Не выбран' : 'Укажите страну'
            },



            isAdmin () {
                return this.admin;
            },
            isPublished () {
                return this.published;
            },
            isDraft () {
                return this.draft;
            },
            isModeration () {
                return this.is_moderation;
            },
            isCurrentUser () {
                return this.current_user;
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
                return ( this.loading === false && this.total_profession === 0 )
            },
            isCertifiedUser () {
                return true
            },
        },
        created () {
            this.typeFormPoll = !(this.$cookies.get('typeform.poll') === 'false')

            const { query } = this.$route
            this._.merge(this.fields, query)
        },
        mounted () {
            this.openSecondPage = this.$localStorage.get('openSecondPage', false, Boolean)
            this.showOnBoardingModal  = this.$localStorage.get('onboarding.boards', true, Boolean)
            if (this.openSecondPage === false) {
                this.$localStorage.set('openSecondPage', true)
            }
        },
        methods: {
            ...mapActions({
                fetchCastings: 'board/casting/fetchCastings',
                clearCastings: 'board/casting/clearCastings'
            }),
            _handleInputPickParameters () {
                if ( this.parameters ) {
                    this._clearFilter(false).then(() => {
                        let { age, sex } = this.profile
                        Object.assign(this.fields, {
                            ageTo: age ? (age + 1) : '',
                            genderIds: sex ? [sex] : [],
                            ageFrom: age ? (age - 1) : ''
                        })
                    }).catch(() => {})
                } else {
                    this._clearFilter(false).then(() => {
                        Object.assign(this.fields, {
                            ageTo: '',
                            ageFrom: '',
                            genderIds: []
                        })
                    }).catch(() => {})
                }

                this.$nextTick(() => {
                    this._handleValidateFields().then(() => {
                        this._handleApplyFilter()
                    }).catch(() => {})
                })
            },
            _handleClickToggleCollapse (field) {
                this.collapse[field] = !this.collapse[field]
            },
            _handleClickToggleCollapseLists (field) {
                this.collapse['lists'][field] = !this.collapse['lists'][field]
            },
            _handleFocusFieldSearchTalent () {
                this.searchFocused = true
            },
            _handleBlurFieldSearchTalent () {
                this.searchFocused = false
            },
            _handleInputFieldSearchCasting: _.debounce(function(e) {
                const el = e.target
                let key = getDataAttribute(el, 'key')

                this.$validator.validate(key).then((result) => {
                    if (result) {
                        this._handleApplyFilter()
                    }
                })
            }, 900),
            _handleClickCloseSearching () {
                this.fields.name = null

                this.$nextTick(() => {
                    this._handleApplyFilter()
                })
            },
            /**
             * Handle change country select. Loaded cities.
             *
             * @param countryId
             * @param clear
             * @param loading
             * @private
             */
            _handleChangeCountrySelect (countryId, clear = true, loading = true) {
                if (!countryId) return false

                this.sources.cities = []

                setTimeout(() => {
                    this.collapse['cities'] = true
                }, 250)

                this.$api.get('api/v1/geo/cities', { country_id: countryId }).then((response) => {
                    if (clear) {
                        this.fields.cityId = null
                    }

                    const { data } = response
                    this.sources.cities = Object.values(data)
                }, (error) => {

                    const { response: { data }, response: { status } } = error
                    throw new Error('Error loading castings cities')
                })
            },
            /**
             * Validate all fields on current transition
             * @returns {Promise<any>}
             * @private
             */
            _handleValidateFields () {
                return new Promise((resolve, reject) => {
                    this.$validator.validateAll().then(result => {
                        if (result) {
                            resolve(result)
                        } else reject()
                    })
                })
            },
            _handleChangeFieldSearchCasting: _.debounce(function(e) {
                this._handleValidateFields().then(() => {
                    this.parameters = false
                    this._handleApplyFilter()
                }).catch(() => {})
            }, 900),
            /**
             *
             */
            _handleClickClearFilter () {
                this._clearFilter().then(() => {
                    this._handleApplyFilter()
                }).catch(() => {})
            },
            _clearFilter (parameters = true) {
                return new Promise((resolve, reject) => {
                    if (parameters) this.parameters = false
                    const fields = this.fields

                    try {
                        Object.keys(fields).forEach(k => {
                            if (this.fields[k] === null && typeof this.fields[k] === "object") {
                                this.fields[k] = null
                            } else if (typeof this.fields[k] === 'object') {
                                this.fields[k] = []
                            } else this.fields[k] = ''
                        })
                        this.fields.isOnline = String('')
                        resolve && resolve()
                    } catch (e) {
                        reject && reject(e)
                    }
                })
            },
            _handleInfiniteScroll() {
                let { fields, offset } = this
                this.fetchCastings({ fields, offset })
            },
            _handleApplyFilter () {
                let { fields } = this

                this.clearCastings().then(() => {
                    this.$scrollTo('#d-feed_castings', 500, { offset: (-20 - HEADER_HEIGHT) })

                    const query = omitEmpty(fields, { omitZero: false })
                    this.$router.replace({ name: 'board.castings.index', query })
                }).catch(() => {})
            },
            _handleChangeState ({ id, key, value }) {
                this.$store.dispatch('board/casting/setFieldCastingsData', { id, key, value })
            },

            _handleClickOpenCastingResponses (id, slug) {
                this.$router.push({ name: 'board.castings.show', params: { id, slug }, query: { responses: true } })
            },
            _handleClickUnpublishedCasting (id) {
                this.$confirm({
                    cancelTxt: 'отмена',
                    confirmTxt: 'снять',
                    title: 'Подтвердите действие',
                    message: 'Вы уверены, что хотите снять объявление с публикации?'
                }).then(() => {
                    this._handleDraft(id)
                }).catch(() => {})
            },
            _handleClickArchiveCasting (id) {
                this.$confirm({
                    cancelTxt: 'отмена',
                    confirmTxt: 'в архив',
                    title: 'Подтвердите действие',
                    message: 'Вы уверены, что хотите удалить и перенести объявление в архив?'
                }).then(() => {
                    this._handleArchive(id)
                }).catch(() => {})
            },
            _handleDraft (id) {
                return new Promise((resolve, reject) => {

                    this.$api.post(`api/v2/boards/castings/${id}/draft`).then((response) => {
                        const { data } = response
                        this.$store.dispatch('board/casting/setFieldCastingsData', { id, key: 'state', value: DRAFT })

                        resolve()
                    }, (error) => {
                        const { response: { data, status } } = error

                        this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

                        reject()

                        throw new Error('Error draft casting')
                    })
                })
            },
            _handleArchive (id) {
                return new Promise((resolve, reject) => {

                    this.$api.post(`api/v2/boards/castings/${id}/archive`).then((response) => {
                        const { data } = response
                        this.$store.dispatch('board/casting/setFieldCastingsData', { id, key: 'state', value: ARCHIVED })

                        resolve()
                    }, (error) => {
                        const { response: { data, status } } = error

                        this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

                        reject()

                        throw new Error('Error draft casting')
                    })
                })
            },
            _handleClickAbuseCasting () {
                let { id } = this.actionSheet.casting
                this.$root.$emit('open-modal-abuse-create', { id, type: 'board_casting' })
            },
            _handleClickApproveCasting (id) {
                this.$api.post(`/api/admin/v1/boards/castings/${id}/approve`).then((response) => {
                    let { data: { data } } = response
                    this.$store.dispatch('board/casting/setFieldCastingsData', { id, key: 'state', value: PUBLISHED })
                }, (err) => {
                    this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
                })
            },
            _handleClickCreateCasting () {
                if (this.isAuthorized === false) {
                    const { href } = this.$router.resolve({ name: 'board.castings.create' })
                    this.$root.$emit('open-modal-access-global', href)
                } else this.$router.push({ name: 'board.castings.create' })
            },
            _handleClickHideTypeForm () {
                this.typeFormPoll = false
                this.$cookies.set('typeform.poll', 'false')
            }
        }
    }
</script>

<style scoped>

</style>
