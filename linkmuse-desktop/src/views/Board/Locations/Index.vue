<template>
  <div class="page page_feed">

    <!-- page content -->
    <div class="page__content">

      <div class="page__body page__body_feed"><!-- feed -->

        <div class="d-row mb_6">
          <div class="heading heading_h2 mb_0">{{ $t('location.location.locations') }}</div>
          <div class="d-feed__counter">{{ total }}</div>
        </div>

        <!-- feed -->
        <div class="d-feed" id="d-feed_locations" data-v-sticky-container>
          <!-- sidebar -->
          <div class="sidebar d-feed__sidebar" v-sticky-sidebar="optionsStickySidebar">
            <div class="sidebar__content" data-v-sticky-inner>
              <!-- filters -->
              <div :class="['filters', { loading }]">
                <div class="d-card">
                  <div class="section filters__section">
                    <div class="list list_filters list_dropdown">
                      <div class="d-row align_center" @click="_handleClickToggleCollapse('types')" :style="{ cursor: 'pointer' }">
                        <div class="list__header list__header_filters list__header_dropdown">{{ $t('location.location.location-type') }}</div>
                        <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['types']) }]">
                          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                        </svg>
                        <template v-if="(!collapse['types'] && fields.types.length)">
                          <div class="filters__status filters__status_changed"></div>
                        </template>
                      </div>
                      <collapse v-model="collapse['types']">
                        <div class="list__body list__body_filters list__body_dropdown">
                          <div class="list__item" v-for="type in sources['types'].slice(0, 3)"
                               :key="`board-type-${type.id}`">
                            <div class="d-checkbox">
                              <input :id="`board-type-${type.id}`" name="types"
                                     type="checkbox" class="d-checkbox__mark"
                                     data-vv-name="types"
                                     :data-vv-as="$t('location.location.show-all')"
                                     :value="type.id"
                                     @change="_handleChangeFieldSearchLocation"
                                     v-model="fields.types">
                              <label :for="`board-type-${type.id}`" class="d-checkbox__label">{{ type.text }}</label>
                            </div>
                          </div>
                          <template v-if="(sources['types'].length > 3)">
                            <template v-if="(!collapse['lists']['types'])">
                              <a href="javascript:void(0)" class="d-link d-link_show-all"
                                 @click="_handleClickToggleCollapseLists('types')">{{ $t('location.location.show-all') }}</a>
                            </template>

                            <template v-if="collapse['lists']['types']">
                              <div class="list__item" v-for="type in sources['types'].slice(3)"
                                   :key="`board-type-${type.id}`">
                                <div class="d-checkbox">
                                  <input :id="`board-type-${type.id}`" name="types"
                                         type="checkbox" class="d-checkbox__mark"
                                         data-vv-name="types"
                                         :data-vv-as="$t('location.location.show-all')"Тип локации
                                         :value="type.id"
                                         @change="_handleChangeFieldSearchLocation"
                                         v-model="fields.types">
                                  <label :for="`board-type-${type.id}`" class="d-checkbox__label">{{ type.text }}</label>
                                </div>
                              </div>
                              <a href="javascript:void(0)" class="d-link d-link_show-all"
                                 @click="_handleClickToggleCollapseLists('types')">Скрыть</a>
                            </template>
                          </template>
                        </div>
                      </collapse>
                    </div>
                  </div>
                  <div class="section filters__section">
                    <div class="list list_filters list_dropdown">
                      <div class="d-row align_center" @click="_handleClickToggleCollapse('roomTypes')" :style="{ cursor: 'pointer' }">
                        <div class="list__header list__header_filters list__header_dropdown">{{ $t('location.location.room-type') }}</div>
                        <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['roomTypes']) }]">
                          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                        </svg>
                        <template v-if="(!collapse['roomTypes'] && fields.roomTypes.length)">
                          <div class="filters__status filters__status_changed"></div>
                        </template>
                      </div>
                      <collapse v-model="collapse['roomTypes']">
                        <div class="list__body list__body_filters list__body_dropdown">
                          <div class="list__item" v-for="roomType in sources['roomTypes'].slice(0, 3)"
                               :key="`board-roomType-${roomType.id}`">
                            <div class="d-checkbox">
                              <input :id="`board-roomType-${roomType.id}`" name="roomTypes"
                                     type="checkbox" class="d-checkbox__mark"
                                     data-vv-name="roomTypes"
                                     :data-vv-as="$t('location.location.room-type')"
                                     :value="roomType.id"
                                     @change="_handleChangeFieldSearchLocation"
                                     v-model="fields.roomTypes">
                              <label :for="`board-roomType-${roomType.id}`" class="d-checkbox__label">{{ roomType.text }}</label>
                            </div>
                          </div>
                          <template v-if="(sources['roomTypes'].length > 3)">
                            <template v-if="(!collapse['lists']['roomTypes'])">
                              <a href="javascript:void(0)" class="d-link d-link_show-all"
                                 @click="_handleClickToggleCollapseLists('roomTypes')">{{ $t('location.location.show-all') }}</a>
                            </template>

                            <template v-if="collapse['lists']['roomTypes']">
                              <div class="list__item" v-for="roomType in sources['roomTypes'].slice(3)"
                                   :key="`board-roomType-${roomType.id}`">
                                <div class="d-checkbox">
                                  <input :id="`board-roomType-${roomType.id}`" name="roomTypes"
                                         type="checkbox" class="d-checkbox__mark"
                                         data-vv-name="roomTypes"
                                         :data-vv-as="$t('location.location.room-type')"
                                         :value="roomType.id"
                                         @change="_handleChangeFieldSearchLocation"
                                         v-model="fields.roomTypes">
                                  <label :for="`board-roomType-${roomType.id}`" class="d-checkbox__label">{{ roomType.text }}</label>
                                </div>
                              </div>
                              <a href="javascript:void(0)" class="d-link d-link_show-all"
                                 @click="_handleClickToggleCollapseLists('roomTypes')">Скрыть</a>
                            </template>
                          </template>
                        </div>
                      </collapse>
                    </div>
                  </div>
                  <div class="section filters__section">
                    <div class="list list_filters list_dropdown">
                      <div class="d-row align_center" @click="_handleClickToggleCollapse('equipmentAndFacilities')" :style="{ cursor: 'pointer' }">
                        <div class="list__header list__header_filters list__header_dropdown">{{ $t('location.location.equipment-and-services') }}</div>
                        <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['equipmentAndFacilities']) }]">
                          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                        </svg>
                        <template v-if="(!collapse['equipmentAndFacilities'] && fields.equipmentAndFacilities.length)">
                          <div class="filters__status filters__status_changed"></div>
                        </template>
                      </div>
                      <collapse v-model="collapse['equipmentAndFacilities']">
                        <div class="list__body list__body_filters list__body_dropdown">
                          <div class="list__item" v-for="item in equipmentAndFacilities.slice(0, 3)"
                               :key="`board-equipmentAndFacilities-${item.id}`">
                            <div class="d-checkbox">
                              <input :id="`board-equipmentAndFacilities-${item.id}`" name="equipmentAndFacilities"
                                     type="checkbox" class="d-checkbox__mark"
                                     data-vv-name="equipmentAndFacilities"
                                     :data-vv-as="'Оборудование и услуги'"
                                     :value="item.id"
                                     @change="_handleChangeFieldSearchLocation"
                                     v-model="fields.equipmentAndFacilities">
                              <label :for="`board-equipmentAndFacilities-${item.id}`" class="d-checkbox__label">{{ item.text }}</label>
                            </div>
                          </div>
                          <template v-if="(equipmentAndFacilities.length > 3)">
                            <template v-if="(!collapse['lists']['equipmentAndFacilities'])">
                              <a href="javascript:void(0)" class="d-link d-link_show-all"
                                 @click="_handleClickToggleCollapseLists('equipmentAndFacilities')">{{ $t('location.location.show-all') }}</a>
                            </template>

                            <template v-if="collapse['lists']['equipmentAndFacilities']">
                              <div class="list__item" v-for="item in equipmentAndFacilities.slice(3)"
                                   :key="`board-equipmentAndFacilities-${item.id}`">
                                <div class="d-checkbox">
                                  <input :id="`board-equipmentAndFacilities-${item.id}`" name="equipmentAndFacilities"
                                         type="checkbox" class="d-checkbox__mark"
                                         data-vv-name="equipmentAndFacilities"
                                         :data-vv-as="'Оборудование и услуги'"
                                         :value="item.id"
                                         @change="_handleChangeFieldSearchLocation"
                                         v-model="fields.equipmentAndFacilities">
                                  <label :for="`board-equipmentAndFacilities-${item.id}`" class="d-checkbox__label">{{ item.text }}</label>
                                </div>
                              </div>
                              <a href="javascript:void(0)" class="d-link d-link_show-all"
                                 @click="_handleClickToggleCollapseLists('equipmentAndFacilities')">Скрыть</a>
                            </template>
                          </template>
                        </div>
                      </collapse>
                    </div>
                  </div>
                  <div class="section filters__section">
                    <div class="d-row align_center" @click="_handleClickToggleCollapse('roomHeights')"
                         :style="{ cursor: 'pointer' }">
                      <div class="list__header list__header_filters list__header_dropdown">{{ $t('location.location.room-height') }}</div>
                      <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['roomHeights']) }]">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                      </svg>
                      <template v-if="(!collapse['roomHeights'] && (fields.roomHeightMin || fields.roomHeightMax))">
                        <div class="filters__status filters__status_changed"></div>
                      </template>
                    </div>
                    <no-ssr>
                      <collapse v-model="collapse['roomHeights']">
                        <div class="d-row align_center mt_3">
                          <div class="d-input">
                            <input v-mask-decimal="{ digits: 2 }" type="text" :placeholder="$t('location.location.from')"
                                   id="roomHeightMin"
                                   name="roomHeightMin"
                                   data-vv-name="roomHeightMin"
                                   :data-vv-as="$t('location.location.from')"
                                   ref="roomHeightMin"
                                   v-model="fields.roomHeightMin"
                                   min="1" max="9999"
                                   @input="_handleChangeFieldSearchLocation"
                                   v-validate="'decimal:2|min_value:1|max_value:9999'"
                                   :class="[{ 'error': (verrors.has('roomHeightMin')), 'filled': (fields.roomHeightMin && !verrors.has('roomHeightMin')) }, 'd-input__field']">
                          </div>
                          <div class="color_gray-4 ml_1 mr_1">-</div>
                          <div class="d-input">
                            <input v-mask-decimal="{ digits: 2 }" type="text" :placeholder="$t('location.location.to')"
                                   id="roomHeightMax"
                                   name="roomHeightMax"
                                   data-vv-name="roomHeightMax"
                                   :data-vv-as="$t('location.location.to')"
                                   ref="roomHeightMax"
                                   v-model="fields.roomHeightMax"
                                   min="1" max="9999"
                                   @input="_handleChangeFieldSearchLocation"
                                   v-validate="'decimal:2|min_value:1|max_value:9999|minTarget:roomHeightMin'"
                                   :class="[{ 'error': (verrors.has('roomHeightMax')), 'filled': (fields.roomHeightMax && !verrors.has('roomHeightMax')) }, 'd-input__field']">
                          </div>
                        </div>
                      </collapse>
                    </no-ssr>
                  </div>
                  <div class="section filters__section">
                    <div class="d-row align_center" @click="_handleClickToggleCollapse('dimensions')"
                         :style="{ cursor: 'pointer' }">
                      <div class="list__header list__header_filters list__header_dropdown">{{ $t('location.location.size') }}</div>
                      <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['dimensions']) }]">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                      </svg>
                      <template v-if="(!collapse['dimensions'] && (fields.dimensionMin || fields.dimensionMax))">
                        <div class="filters__status filters__status_changed"></div>
                      </template>
                    </div>
                    <no-ssr>
                      <collapse v-model="collapse['dimensions']">
                        <div class="d-row align_center mt_3">
                          <div class="d-input">
                            <input v-mask-decimal="{ digits: 2 }" type="text" :placeholder="$t('location.location.from')"
                                   id="dimensionMin"
                                   name="dimensionMin"
                                   data-vv-name="dimensionMin"
                                   :data-vv-as="$t('location.location.from')"
                                   ref="dimensionMin"
                                   v-model="fields.dimensionMin"
                                   min="1" max="9999"
                                   @input="_handleChangeFieldSearchLocation"
                                   v-validate="'decimal:2|min_value:1|max_value:9999'"
                                   :class="[{ 'error': (verrors.has('dimensionMin')), 'filled': (fields.dimensionMin && !verrors.has('dimensionMin')) }, 'd-input__field']">
                          </div>
                          <div class="color_gray-4 ml_1 mr_1">-</div>
                          <div class="d-input">
                            <input v-mask-decimal="{ digits: 2 }" type="text" :placeholder="$t('location.location.to')"
                                   id="dimensionMax"
                                   name="dimensionMax"
                                   data-vv-name="dimensionMax"
                                   :data-vv-as="$t('location.location.to')"
                                   ref="dimensionMax"
                                   v-model="fields.dimensionMax"
                                   min="1" max="9999"
                                   @input="_handleChangeFieldSearchLocation"
                                   v-validate="'decimal:2|min_value:1|max_value:9999|minTarget:dimensionMin'"
                                   :class="[{ 'error': (verrors.has('dimensionMax')), 'filled': (fields.dimensionMax && !verrors.has('dimensionMax')) }, 'd-input__field']">
                          </div>
                        </div>
                      </collapse>
                    </no-ssr>
                  </div>
                  <div class="section filters__section">
                    <div class="d-row align_center" @click="_handleClickToggleCollapse('prices')"
                         :style="{ cursor: 'pointer' }">
                      <div class="list__header list__header_filters list__header_dropdown">{{ $t('location.location.price') }}</div>
                      <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['prices']) }]">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                      </svg>
                      <template v-if="(!collapse['prices'] && (fields.price))">
                        <div class="filters__status filters__status_changed"></div>
                      </template>
                    </div>
                    <no-ssr>
                      <collapse v-model="collapse['prices']">
                        <div class="d-row align_center mt_3">
                          <div class="d-input w_100">
                            <input v-mask-numeric type="text" :placeholder="$t('location.location.enter-amount')"
                                   id="price"
                                   name="price"
                                   data-vv-name="price"
                                   :data-vv-as="$t('location.location.price')"
                                   ref="price"
                                   v-model="fields.price"
                                   min="1" max="9999999"
                                   @input="_handleChangeFieldSearchLocation"
                                   v-validate="'numeric|min_value:1|max_value:9999999'"
                                   :class="[{ 'error': (verrors.has('price')), 'filled': (!verrors.has('price')) }, 'd-input__field']">
                          </div>
                        </div>
                      </collapse>
                    </no-ssr>
                  </div>
                  <div class="section filters__section">
                    <div class="d-row align_center" @click="_handleClickToggleCollapse('currencies')"
                         :style="{ cursor: 'pointer' }">
                      <div class="list__header list__header_filters list__header_dropdown">{{ $t('location.location.currency') }}</div>
                      <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['currencies']) }]">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                      </svg>
                      <template v-if="(!collapse['currencies'] && fields.currencyId)">
                        <div class="filters__status filters__status_changed"></div>
                      </template>
                    </div>
                    <no-ssr>
                      <collapse v-model="collapse['currencies']">
                        <div class="d-row align-center mt_3">
                          <lm-select
                            input-id="declaration__country"
                            input-name="country"
                            data-vv-name="currencyId"
                            :data-vv-as="$t('location.location.currency')"
                            :options="currencies"
                            v-model="fields.currencyId"
                            :placeholder="$t('location.location-filter.all-currencies')"
                            :multiple="false"
                            :filter="false"
                            @input="_handleChangeFieldSearchLocation"
                            :class="['lm-dropdown-wrap--n', 'w_100', { 'error': (verrors.has('currencyId')) }]">
                          </lm-select>
                        </div>
                      </collapse>
                    </no-ssr>
                  </div>
                  <div class="section filters__section">
                    <div class="d-row align_center" @click="_handleClickToggleCollapse('paymentPeriods')"
                         :style="{ cursor: 'pointer' }">
                      <div class="list__header list__header_filters list__header_dropdown">{{ $t('location.location.payment-period') }}</div>
                      <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['paymentPeriods']) }]">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                      </svg>
                      <template v-if="(!collapse['paymentPeriods'] && fields.paymentPeriod)">
                        <div class="filters__status filters__status_changed"></div>
                      </template>
                    </div>
                    <no-ssr>
                      <collapse v-model="collapse['paymentPeriods']">
                        <div class="d-row align-center mt_3">
                          <lm-select
                            input-id="declaration__country"
                            input-name="country"
                            data-vv-name="paymentPeriod"
                            :data-vv-as="$t('location.location.payment-period')"
                            :options="sources['paymentPeriods']"
                            v-model="fields.paymentPeriod"
                            :placeholder="$t('location.location-filter.all')"
                            :multiple="false"
                            :filter="false"
                            @input="_handleChangeFieldSearchLocation"
                            :class="['lm-dropdown-wrap--n', 'w_100', { 'error': (verrors.has('paymentPeriod')) }]">
                          </lm-select>
                        </div>
                      </collapse>
                    </no-ssr>
                  </div>
                  <div class="section filters__section">
                    <div class="d-row align_center" @click="_handleClickToggleCollapse('geo')"
                         :style="{ cursor: 'pointer' }">
                      <div class="list__header list__header_filters list__header_dropdown">Местоположение</div>
                      <svg :class="['d-icon', 'd-icon_size_16', 'ml_1', { rotate_180: (!collapse['geo']) }]">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-dropdown"/>
                      </svg>
                      <template v-if="(!collapse['geo'] && (fields.cityId || fields.countryId))">
                        <div class="filters__status filters__status_changed"></div>
                      </template>
                    </div>
                    <no-ssr>
                      <collapse v-model="collapse['geo']">
                        <div class="d-row align-center mt_3">
                          <div class="d-select w_100">
                            <vue-select :filterable="true" :options="sources['countries']" :reduce="option => String(option.id)"
                              :input-id="'declaration__country'"
                              :name="'country'"
                              :data-vv-name="'countryId'"
                              :data-vv-as="$t('location.location.country')"
                              :placeholder="$t('location.location-filter.not-chosen')"
                              v-model="fields.countryId"
                              @input="_handleChangeCountrySelect(...arguments, true, true, _handleChangeFieldSearchLocation)"
                              :class="[{ 'error': (verrors.has('countryId')) } ]">
                            </vue-select>
                          </div>
                        </div>
                        <div class="d-row align-center mt_3">
                          <div class="d-select w_100">
                            <vue-select :filterable="false" @search="_handleSearchCities" :options="sources['cities']" :reduce="option => String(option.id)"
                              :loading="loadingCities"
                              :input-id="'declaration__city'"
                              :name="'cityId'"
                              :data-vv-name="'cityId'"
                              :data-vv-as="$t('location.location.city')"
                              :placeholder="citiesPlaceholder"
                              v-model="fields.cityId"
                              @input="_handleChangeFieldSearchLocation"
                              :disabled="(!fields.countryId )"
                              :class="[{ 'error': (verrors.has('cityId')) } ]">
                            </vue-select>
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
                    <div class="heading heading_h5 mb_0">Помогите нам стать лучше</div>
                    <a href="javascript:void(0)" @click="_handleClickHideTypeForm">
                      <svg class="d-icon d-icon_size_16 fill_gray-3">
                        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#lm-close"/>
                      </svg>
                    </a>
                  </div>
                  <div class="d-row mt_2 color_gray-2 fsize_14">
                    Пройдите опрос и примите участие в тестировании новых разделов и функций
                  </div>
                  <a href="https://linkmuse.typeform.com/to/A3Rn4O" target="_blank" class="d-btn d-btn_outline mt_4 w_100">Пройти
                    опрос</a>
                </div>
              </template>

              <sidebar-navigation/>
            </div>
          </div> <!-- end of sidebar -->

          <!-- feed__body -->
          <div class="d-feed__body ml_4" v-infinite-scroll="_handleInfiniteScroll" infinite-scroll-disabled="infiniteDisabled" infinite-scroll-distance="900">

            <location-card :location="location" v-for="location in locations" :key="location.id"
                          @changeState="_handleChangeState">
            </location-card>

            <lm-loader v-if="loading" :style="{ marginTop: '15px' }"></lm-loader>

            <template v-if="(isEmpty === true)">
              <div class="d-card d-card_feed-plug">
                <svg class="d-icon d-icon_size_64 fill_main mb_5">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#icon_search"/>
                </svg>
                <div class="heading heading_h5">{{ $t('location.nothing-found.nothing-found') }}</div>
                <div class="ta_center mb_4 color_gray-1">{{ $t('location.nothing-found.try') }}<br>{{ $t('location.nothing-found.reset-filters') }}</div>
                <template>
                  <template v-if="showReset">
                    <button class="d-btn d-btn_primary" @click="_handleClickClearFilter">{{ $t('location.nothing-found.reset') }}</button>
                  </template>
                  <template v-else>
                    <button class="d-btn d-btn_primary" @click="_handleClickCreateLocation">Создать</button>
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
  import { omitEmpty, getDataAttribute, HEADER_HEIGHT, has } from '@utils'
  import { PUBLISHED, DRAFT, ARCHIVED, MODERATION } from '@modules/Board/Location/Enums/LocationState'
  import { EQUIPMENT_RENTAL, PARKING, INTERIOR, EXTERIOR, DRESSING_ROOM, SCENE, CHROMAKEY, CYCLORAMA, DAYLIGHT } from '@modules/Board/Location/Enums/LocationEquip'

  import AjaxSelectCity from '@modules/Geo/mixins/AjaxSelectCity'

  import SeoFilterLocation from '@modules/SEO/mixins/Locations'
  import LocationCard from '@components/Board/Location/Location.vue'
  import { getFieldsFromRoute } from '@modules/SEO/mixins/Locations'

  import { createHelpers } from 'vuex-map-fields'

  const { mapFields } = createHelpers({
    getterType: 'board/location/getField',
    mutationType: 'board/location/updateField',
  })


  export default {
    mixins: [SeoFilterLocation, AjaxSelectCity],
    components: { Collapse, LocationCard },
    metaInfo () {
      return {
        title: this.seoTitle,
        meta: [
          { name: 'description', content: this.seoDescription },
        ]
      }
    },
    data () {
      return {
        typeFormPoll: false,
        collapse: {
          geo: false,
          types: true,
          prices: true,
          roomTypes: true,
          dimensions: true,
          currencies: false,
          roomHeights: true,
          paymentPeriods: false,
          equipmentAndFacilities: true,
          lists: {
            types: false,
            roomTypes: false,
            equipmentAndFacilities: false
          }
        },
        optionsStickySidebar: {
          topSpacing: 104,
          bottomSpacing: 16
        }
      }
    },
    async asyncData ({ store, route }) {
      const { query } = route
      const initialized = store.getters['board/location/getInitializedSources']
      const defaultFields = store.getters['board/location/getCatalogDefaultFieldsFilter']

      let promises = []
      let fields = omitEmpty(_.merge(defaultFields, query), { omitZero: false })

      if (!initialized) await store.dispatch('board/location/getSources')

      fields = getFieldsFromRoute(route, store.getters['board/location/getSources'], fields)

      await store.dispatch('board/location/clearLocations')
      await store.dispatch('board/location/fetchLocations', { fields, offset: 0 }).then((total) => {
        if (typeof window !== 'undefined' && total < 4) {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }
      })
    },
    computed: {
      ...mapFields({
        fields: 'locations.filter',
        defaultFields: 'locations.defaultFilter'
      }),
      ...mapGetters({
        user: 'auth/getAuthUser',
        profile: 'auth/getProfile',
        isAuthorized: 'auth/isAuthorized',
        sources: 'board/location/getSources',
        total: 'board/location/getLocationsTotal',
        error: 'board/location/getLocationsError',
        offset: 'board/location/getLocationsOffset',
        locations: 'board/location/getLocationsData',
        loading: 'board/location/getLocationsLoading',
        infiniteDisabled: 'board/location/getLocationsInfiniteDisabled'
      }),
      isEmpty () {
        return ( this.loading === false && this.total === 0 )
      },
      isAdmin () {
        return (this.user && this.user.hasOwnProperty('isAdmin') && this.user['isAdmin'] === true)
      },
      showReset () {
        const fields = this._.omit(this.fields)
        const defaultFields = this._.omit(this.defaultFields)

        return (this._.isEqual(fields, defaultFields) === false)
      },
      citiesPlaceholder () {
        return this.fields['countryId'] ? 'Не выбран' : this.$t('location.location-filter.specify-country')
      },
      currencies () {
        return this.sources['currencies'].map((curr) => { return { id: curr.id, text: curr.symbol } })
      },
      equipmentAndFacilities () {
        return [
          { id: EQUIPMENT_RENTAL, text: this.$t('dictionary.equipment-services.' + EQUIPMENT_RENTAL) },
          { id: PARKING, text: this.$t('dictionary.equipment-services.' + PARKING) },
          { id: INTERIOR, text: this.$t('dictionary.equipment-services.' + INTERIOR) },
          { id: EXTERIOR, text: this.$t('dictionary.equipment-services.' + EXTERIOR) },
          { id: DRESSING_ROOM, text: this.$t('dictionary.equipment-services.' + DRESSING_ROOM) },
          { id: SCENE, text: this.$t('dictionary.equipment-services.' + SCENE) },
          { id: CHROMAKEY, text: this.$t('dictionary.equipment-services.' + CHROMAKEY) },
          { id: CYCLORAMA, text: this.$t('dictionary.equipment-services.' + CYCLORAMA) },
          { id: DAYLIGHT, text: this.$t('dictionary.equipment-services.' + DAYLIGHT) }
        ]
      }
    },
    created () {
      this.typeFormPoll = !(this.$cookies.get('typeform.poll') === 'false')

      const { query } = this.$route
      this._.merge(this.fields, query)

      this.$nextTick(() => {
        if (this.fields.countryId && this.sources.cities.length === 0) {
          this._handleChangeCountrySelect(this.fields.countryId, false, true)
        }
      })
    },
    mounted () {

    },
    beforeDestroy () {
      this._clearFilter().then(() => {
        console.log('Cleared locations...')
      }).catch(() => {})
    },
    beforeRouteUpdate (to, from, next) {
      const { query, params } = to

      if (has(params, 'filter') || Object.keys(query).length) return next()

      this._clearFilter().then(() => {
        console.log('Cleared locations...')
        this.seoGenerate()
        next()
      }).catch(() => {
        this.seoGenerate()
        next()
      })
    },
    methods: {
      ...mapActions({
        fetchLocations: 'board/location/fetchLocations',
        clearLocations: 'board/location/clearLocations'
      }),
      _handleClickToggleCollapse (field) {
        this.collapse[field] = !this.collapse[field]
      },
      _handleClickToggleCollapseLists (field) {
        this.collapse['lists'][field] = !this.collapse['lists'][field]
      },
      _handleInputFieldSearchLocation: _.debounce(function(e) {
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
      _handleChangeFieldSearchLocation: _.debounce(function(e) {
        this._handleValidateFields().then(() => {
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
      _clearFilter () {
        return new Promise((resolve, reject) => {

          try {
            this.fields = this._.clone(this.defaultFields)

            resolve && resolve()
          } catch (e) {
            reject && reject(e)
          }
        })
      },
      _handleInfiniteScroll() {
        let { fields, offset } = this
        this.fetchLocations({ fields, offset })
      },
      _handleApplyFilter () {
        let { fields } = this
        const { query, params } = this.getSeoRouterParams(omitEmpty(fields, { omitZero: false }))

        if (this._.isEqual(query, this.$route.query) === false || this._.isEqual(params, this.$route.params) === false) {
          this.clearLocations().then(() => {
            // this.$scrollTo('#d-feed_castings', 500, { offset: (-20 - HEADER_HEIGHT) })

            this.$router.replace({ name: 'board.locations.index', query, params }, () => {
              this.seoGenerate()
            })
            this.$gtm.trackEvent({ event: 'location_filter' })
          }).catch(() => {})
        }
      },
      _handleChangeState ({ id, key, value }) {
        this.$store.dispatch('board/location/setFieldLocationsData', { id, key, value })
      },
      _handleClickCreateLocation () {
        if (this.isAuthorized === false) {
          const { href } = this.$router.resolve({ name: 'board.locations.create' })
          this.$root.$emit('open-modal-access-global', href)
        } else this.$router.push({ name: 'board.locations.create' })
      },
      _handleClickHideTypeForm () {
        this.typeFormPoll = false
        this.$cookies.set('typeform.poll', 'false')
      },
      _handleClickUnpublishedLocation (id) {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'снять',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите снять объявление с публикации?'
        }).then(() => {
          this._handleDraft(id)
        }).catch(() => {})
      },
      _handleClickArchiveLocation (id) {
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

          this.$api.post(`api/v2/boards/locations/${id}/draft`).then((response) => {
            const { data } = response
            this.$store.dispatch('board/location/setFieldLocationsData', { id, key: 'state', value: DRAFT })

            resolve()
          }, (error) => {
            const { response: { data, status } } = error

            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            reject()

            throw new Error('Error draft location')
          })
        })
      },
      _handleArchive (id) {
        return new Promise((resolve, reject) => {

          this.$api.post(`api/v2/boards/locations/${id}/archive`).then((response) => {
            const { data } = response
            this.$store.dispatch('board/location/setFieldLocationsData', { id, key: 'state', value: ARCHIVED })

            resolve()
          }, (error) => {
            const { response: { data, status } } = error

            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })

            reject()

            throw new Error('Error archive location')
          })
        })
      },
      _handleClickApproveLocation (id) {
        this.$api.post(`/api/admin/v1/boards/locations/${id}/approve`).then((response) => {
          let { data: { data } } = response
          this.$store.dispatch('board/location/setFieldLocationsData', { id, key: 'state', value: PUBLISHED })
        }, (err) => {
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
        })
      },
    }
  }
</script>

<style scoped>

</style>
