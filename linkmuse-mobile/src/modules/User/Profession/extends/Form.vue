<template>
  <div class="page page_declaration">
    <div class="page-inner__container">

      <div class="page__body page-inner__body_declaration pb_24">
        <div class="block block_declaration bt_none">
          <div class="heading heading_h4 mb_2">{{ title }}</div>
          <div class="m-text_semi-bold color_gray-2">{{ professionTitle }}</div>
        </div>

        <div class="block block_declaration">
          <div class="m-text_bold mb_4">Основная информация</div>

          <div class="form__group form__group_declaration">
            <label for="profession__category" class="label input__label">
              Профессия
              <span class="label_declaration_required">•</span>
            </label>
            <div class="lm-dropdown-wrap">
              <div class="lm-dropdown">
                <select id="profession__category" :disabled="edit" @click="_handleClickChangeProfession">
                  <option selected="selected" disabled="disabled" hidden="hidden">{{ professionTitle }}</option>
                </select>
              </div>
            </div>
          </div>

          <template v-if="(KEYS['gameAge'] && has(fields, KEYS['gameAge']))">
            <game-age-filed v-model="fields[KEYS['gameAge']]"></game-age-filed>
          </template>

          <template v-if="(KEYS['directions'] && has(fields, KEYS['directions']))">
            <div class="form__group form__group_declaration">
              <label :for="KEYS['directions']" class="label input__label">Направления</label>

              <vue-select :taggable="true" :multiple="true" :pushTags="true" :filterable="false"
                          @search="_handleFetchTag(...arguments, KEYS['directions'])"
                          :options="sources[KEYS['directions']]"
                          :input-id="KEYS['directions']"
                          :name="normalizeDotsToArrow(KEYS['directions'])"
                          :data-vv-name="normalizeDotsToArrow(KEYS['directions'])"
                          :placeholder="'Массовка, Реклама, Выставки'"
                          :data-vv-as="'Направления'"
                          v-model="fields[KEYS['directions']]"
                          :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['directions']))) }, 'w_100']">
                <template slot="no-options">Начните ввод...</template>
              </vue-select>

              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['directions']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['directions'])) }}</div>
              </template>
            </div>
          </template>

          <template v-if="(KEYS['serviceInTheaters'] && has(fields, KEYS['serviceInTheaters']))">
            <div class="form__group form__group_declaration">
              <label :for="KEYS['serviceInTheaters']" class="label input__label">Служба в театрах</label>
              <input type="text" autocomplete="off"
                     :id="KEYS['serviceInTheaters']" :name="normalizeDotsToArrow(KEYS['serviceInTheaters'])"
                     :placeholder="'Театр Моссовета, Большой театр'" :data-vv-as="'Служба в театрах'"
                     v-validate="'max:255'"
                     v-model="fields[KEYS['serviceInTheaters']]"
                     :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['serviceInTheaters']))) }, 'input', 'form__input', 'form__input_declaration' ]">

              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['serviceInTheaters']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['serviceInTheaters'])) }}</div>
              </template>
            </div>
          </template>

          <template v-if="(KEYS['functions'] && has(fields, KEYS['functions']))">
            <div class="form__group form__group_declaration">
              <label :for="KEYS['functions']" class="label input__label">Функции</label>
              <vue-select :taggable="true" :multiple="true" :pushTags="true" :filterable="false"
                          @search="_handleFetchTag(...arguments, KEYS['functions'])"
                          :options="sources[KEYS['functions']]"
                          :input-id="KEYS['functions']"
                          :name="normalizeDotsToArrow(KEYS['functions'])"
                          :data-vv-name="normalizeDotsToArrow(KEYS['functions'])"
                          :placeholder="'Функции'"
                          :data-vv-as="'Функции'"
                          v-model="fields[KEYS['functions']]"
                          :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['functions']))) }, 'w_100' ]">
                <template slot="no-options">Начните ввод...</template>
              </vue-select>

              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['functions']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['functions'])) }}</div>
              </template>
            </div>
          </template>

          <template v-if="(KEYS['workExperience'] && has(fields, KEYS['workExperience']))">
            <div class="form__group form__group_declaration">
              <label :for="KEYS['workExperience']" class="label input__label">Стаж работы</label>
              <input type="text" autocomplete="off" min="1" max="9999999" v-mask-numeric
                     :id="KEYS['workExperience']" :name="normalizeDotsToArrow(KEYS['workExperience'])"
                     :placeholder="'Стаж работы, лет'" :data-vv-as="'Стаж работы'"
                     v-validate="'numeric|min_value:1|max_value:99'"
                     v-model="fields[KEYS['workExperience']]"
                     :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['workExperience']))) }, 'input', 'form__input', 'form__input_declaration' ]">

              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['workExperience']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['workExperience'])) }}</div>
              </template>
            </div>
          </template>

          <template v-if="(KEYS['other'] && has(fields, KEYS['other']))">
            <div class="form__group form__group_declaration">
              <label :for="KEYS['other']" class="label textarea__label textarea__label_declaration">Другое</label>
              <textarea autocomplete="off" rows="13"
                        :id="KEYS['other']" :name="normalizeDotsToArrow(KEYS['other'])"
                        :placeholder="'Другое'" :data-vv-as="'Другое'"
                        v-validate="'max:65000'"
                        v-model="fields[KEYS['other']]"
                        :style="{ minHeight: '76px' }"
                        :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['other']))) }, 'textarea', 'form__textarea', 'form__textarea_declaration', 'lm-m-textarea-profile-settings' ]">
                  </textarea>
              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['other']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['other'])) }}</div>
              </template>
            </div>
          </template>

          <template v-if="(KEYS['actorsStarredIn'] && has(fields, KEYS['actorsStarredIn']))">
            <div class="form__group form__group_declaration">
              <label :for="KEYS['actorsStarredIn']" class="label textarea__label textarea__label_declaration">Актеры снимались в</label>
              <textarea autocomplete="off" rows="13"
                        :id="KEYS['actorsStarredIn']" :name="normalizeDotsToArrow(KEYS['actorsStarredIn'])"
                        :placeholder="'Актеры снимались в'" :data-vv-as="'Актеры снимались в'"
                        v-validate="'max:65000'"
                        v-model="fields[KEYS['actorsStarredIn']]"
                        :style="{ minHeight: '76px' }"
                        :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['actorsStarredIn']))) }, 'textarea', 'form__textarea', 'form__textarea_declaration', 'lm-m-textarea-profile-settings' ]">
                  </textarea>
              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['actorsStarredIn']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['actorsStarredIn'])) }}</div>
              </template>
            </div>
          </template>

          <template v-if="(KEYS['introducingActorsModels'] && has(fields, KEYS['introducingActorsModels']))">
            <div class="form__group form__group_declaration">
              <label :for="KEYS['introducingActorsModels']" class="label textarea__label textarea__label_declaration">Представляю</label>
              <textarea autocomplete="off" rows="13"
                        :id="KEYS['introducingActorsModels']" :name="normalizeDotsToArrow(KEYS['introducingActorsModels'])"
                        :placeholder="'Представляю актеров / моделей'" :data-vv-as="'Представляю'"
                        v-validate="'max:65000'"
                        v-model="fields[KEYS['introducingActorsModels']]"
                        :style="{ minHeight: '76px' }"
                        :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['introducingActorsModels']))) }, 'textarea', 'form__textarea', 'form__textarea_declaration', 'lm-m-textarea-profile-settings' ]">
                  </textarea>
              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['introducingActorsModels']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['introducingActorsModels'])) }}</div>
              </template>
            </div>
          </template>

          <template v-if="(KEYS['company'] && has(fields, KEYS['company']))">
            <div class="form__group form__group_declaration">
              <label :for="KEYS['company']" class="label textarea__label textarea__label_declaration">Компания</label>
              <textarea autocomplete="off" rows="13"
                        :id="KEYS['company']" :name="normalizeDotsToArrow(KEYS['company'])"
                        :placeholder="'Компания'" :data-vv-as="'Компания'"
                        v-validate="'max:65000'"
                        v-model="fields[KEYS['company']]"
                        :style="{ minHeight: '76px' }"
                        :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['company']))) }, 'textarea', 'form__textarea', 'form__textarea_declaration', 'lm-m-textarea-profile-settings' ]">
                  </textarea>
              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['company']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['company'])) }}</div>
              </template>
            </div>
          </template>

          <template v-if="(KEYS['talentArchive'] && has(fields, KEYS['talentArchive']))">
            <div class="form__group form__group_declaration form__group_declaration_switch">
              <div class="form__row form__row_declaration form__row_declaration_payment">
                <div class="switch switch_declaration">
                  <label :for="KEYS['talentArchive']" class="m-text_bold color_gray-2">Архив талантов</label>
                  <input :id="KEYS['talentArchive']" type="checkbox" class="switch__mark" :name="normalizeDotsToArrow(KEYS['talentArchive'])" v-model="fields[KEYS['talentArchive']]">
                  <label :for="KEYS['talentArchive']" class="switch__btn"></label>
                </div>
              </div>
              <div class="switch__declaration_description">
                <span class="">Включите фильтр, если у вас есть архив талантов</span>
              </div>
            </div>
          </template>

          <template v-if="(KEYS['programsSoftware'] && has(fields, KEYS['programsSoftware']))">
            <div class="form__group form__group_declaration">
              <label :for="KEYS['programsSoftware']" class="label input__label">Программы / софт</label>
              <vue-select :taggable="true" :multiple="true" :pushTags="true" :filterable="false"
                          @search="_handleFetchTag(...arguments, KEYS['programsSoftware'])"
                          :options="sources[KEYS['programsSoftware']]"
                          :input-id="KEYS['programsSoftware']"
                          :name="normalizeDotsToArrow(KEYS['programsSoftware'])"
                          :data-vv-name="normalizeDotsToArrow(KEYS['programsSoftware'])"
                          :placeholder="'Программы или софт, с которыми работаю'"
                          :data-vv-as="'Программы / софт'"
                          v-model="fields[KEYS['programsSoftware']]"
                          :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['programsSoftware']))) }, 'w_100' ]">
                <template slot="no-options">Начните ввод...</template>
              </vue-select>

              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['programsSoftware']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['programsSoftware'])) }}</div>
              </template>
            </div>
          </template>

          <template v-if="(KEYS['genres'] && has(fields, KEYS['genres']))">
            <div class="form__group form__group_declaration">
              <label :for="KEYS['genres']" class="label input__label">Жанры</label>
              <vue-select :taggable="true" :multiple="true" :pushTags="true" :filterable="false"
                          @search="_handleFetchTag(...arguments, KEYS['genres'])"
                          :options="sources[KEYS['genres']]"
                          :input-id="KEYS['genres']"
                          :name="normalizeDotsToArrow(KEYS['genres'])"
                          :data-vv-name="normalizeDotsToArrow(KEYS['genres'])"
                          :placeholder="'Кантри, Хип-хоп'"
                          :data-vv-as="'Жанры'"
                          v-model="fields[KEYS['genres']]"
                          :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['genres']))) }, 'w_100' ]">
                <template slot="no-options">Начните ввод...</template>
              </vue-select>

              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['genres']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['genres'])) }}</div>
              </template>
            </div>
          </template>

          <template v-if="(KEYS['instruments'] && has(fields, KEYS['instruments']))">
            <div class="form__group form__group_declaration">
              <label :for="KEYS['instruments']" class="label input__label">Инструменты</label>
              <vue-select :taggable="true" :multiple="true" :pushTags="true" :filterable="false"
                          @search="_handleFetchTag(...arguments, KEYS['instruments'])"
                          :options="sources[KEYS['instruments']]"
                          :input-id="KEYS['instruments']"
                          :name="normalizeDotsToArrow(KEYS['instruments'])"
                          :data-vv-name="normalizeDotsToArrow(KEYS['instruments'])"
                          :placeholder="'Гитара, барабан'"
                          :data-vv-as="'Инструменты'"
                          v-model="fields[KEYS['instruments']]"
                          :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['instruments']))) }, 'w_100' ]">
                <template slot="no-options">Начните ввод...</template>
              </vue-select>

              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['instruments']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['instruments'])) }}</div>
              </template>
            </div>
          </template>

          <template v-if="(KEYS['musicServices'] && has(fields, KEYS['musicServices']))">
            <div class="form__group form__group_declaration">
              <label :for="KEYS['musicServices']" class="label textarea__label textarea__label_declaration">Музыкальные сервисы</label>
              <textarea autocomplete="off"
                        :id="KEYS['musicServices']" :name="normalizeDotsToArrow(KEYS['musicServices'])"
                        :placeholder="'Музыкальные сервисы'" :data-vv-as="'Музыкальные сервисы'"
                        v-validate="'max:65000'"
                        v-model="fields[KEYS['musicServices']]"
                        :style="{ minHeight: '76px' }"
                        :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['musicServices']))) }, 'textarea', 'form__textarea', 'form__textarea_declaration', 'lm-m-textarea-profile-settings' ]">
                  </textarea>
              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['musicServices']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['musicServices'])) }}</div>
              </template>
            </div>
          </template>

          <template v-if="(KEYS['equipment'] && has(fields, KEYS['equipment']))">
            <div class="form__group form__group_declaration">
              <label :for="KEYS['equipment']" class="label textarea__label textarea__label_declaration">Оборудование</label>
              <vue-select :taggable="true" :multiple="true" :pushTags="true" :filterable="false"
                          @search="_handleFetchTag(...arguments, KEYS['equipment'])"
                          :options="sources[KEYS['equipment']]"
                          :input-id="KEYS['equipment']"
                          :name="normalizeDotsToArrow(KEYS['equipment'])"
                          :data-vv-name="normalizeDotsToArrow(KEYS['equipment'])"
                          :placeholder="'Оборудование, с которым работаю'"
                          :data-vv-as="'Оборудование'"
                          v-model="fields[KEYS['equipment']]"
                          :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['equipment']))) }, 'w_100' ]">
                <template slot="no-options">Начните ввод...</template>
              </vue-select>
              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['equipment']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['equipment'])) }}</div>
              </template>
            </div>
          </template>

          <template v-if="(KEYS['competitionsAndAwards'] && has(fields, KEYS['competitionsAndAwards']))">
            <div class="form__group form__group_declaration">
              <label :for="KEYS['competitionsAndAwards']" class="label textarea__label textarea__label_declaration">Конкурсы и награды</label>
              <textarea autocomplete="off" rows="13"
                        :id="KEYS['competitionsAndAwards']" :name="normalizeDotsToArrow(KEYS['competitionsAndAwards'])"
                        :placeholder="'Голос 2018, январь - март 2018, финалист'" :data-vv-as="'Конкурсы и награды'"
                        v-validate="'max:65000'"
                        v-model="fields[KEYS['competitionsAndAwards']]"
                        :style="{ minHeight: '76px' }"
                        :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['competitionsAndAwards']))) }, 'textarea', 'form__textarea', 'form__textarea_declaration', 'lm-m-textarea-profile-settings' ]">
                    </textarea>
              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['competitionsAndAwards']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['competitionsAndAwards'])) }}</div>
              </template>
            </div>
          </template>

          <template v-if="(KEYS['ownMaterial'] && has(fields, KEYS['ownMaterial']))">
            <div class="form__group form__group_declaration form__group_declaration_switch">
              <div class="form__row form__row_declaration form__row_declaration_payment">
                <div class="switch switch_declaration">
                  <label :for="KEYS['ownMaterial']" class="m-text_bold color_gray-2">Собственный материал</label>
                  <input :id="KEYS['ownMaterial']" type="checkbox" class="switch__mark" :name="normalizeDotsToArrow(KEYS['ownMaterial'])" v-model="fields[KEYS['ownMaterial']]">
                  <label :for="KEYS['ownMaterial']" class="switch__btn"></label>
                </div>
              </div>
              <div class="switch__declaration_description">
                <span class="">Включите фильтр, если у вас есть собственный материал</span>
              </div>
            </div>
          </template>
        </div>

        <template v-if="(KEYS['rate'] && has(fields, KEYS['rate']))">
          <div class="block block_declaration">
            <div class="m-text_bold mb_4">Ставка</div>

            <rate-filed v-model="fields[KEYS['rate']]" :currencies="sources['lists']['valyuty']" :periods="sources['lists']['vybor-perioda']"></rate-filed>
            <template v-if="(KEYS['workForFree'] && has(fields, KEYS['workForFree']))">
              <div class="form__group form__group_declaration form__group_declaration_switch mt_6">
                <div class="form__row form__row_declaration form__row_declaration_payment">
                  <div class="switch switch_declaration">
                    <label :for="KEYS['workForFree']" class="m-text_bold color_gray-2">Работа бесплатно</label>
                    <input :id="KEYS['workForFree']" type="checkbox" class="switch__mark" :name="normalizeDotsToArrow(KEYS['workForFree'])" v-model="fields[KEYS['workForFree']]">
                    <label :for="KEYS['workForFree']" class="switch__btn"></label>
                  </div>
                </div>
                <div class="switch__declaration_description">
                  <span class="">Включите фильтр, если вы готовы работать в студенческих, короткометражных или некоммерческих проектах</span>
                </div>
              </div>
            </template>
          </div>
        </template>

        <template v-if="hasSnaps">
          <div class="block block_declaration">
            <div class="row row_justify_between mb_4">
              <div class="m-text_bold">Снепы</div>
              <a href="javascript:void(0)" class="m-text_bold color_main" @click="_handleClickOpenModalSnapsCheckList">Чек-лист</a>
            </div>

            <snaps-filed v-model="snaps" :id="id" :edit="edit"></snaps-filed>
          </div>
        </template>

        <template v-if="hasPortfolio">
          <div class="block block_declaration">
            <div class="row row_justify_between mb_4">
              <div class="m-text_bold">Портфолио</div>
              <a href="javascript:void(0)" class="m-text_bold color_main" @click="_handleClickOpenModalCheckList">Чек-лист</a>
            </div>

            <photos-filed v-model="photos" :id="id" :edit="edit" v-if="showFieldForm"></photos-filed>
            <!--
            <videos-filed v-model="videos" :id="id" :edit="edit" v-if="showFieldForm"></videos-filed>
            -->
          </div>
        </template>

        <template v-if="hasBodyParameters">
          <div class="block block_declaration">
            <div class="m-text_bold mb_4">Параметры тела</div>

            <div class="form__group form__group_declaration">
              <label :for="KEYS['height']" class="label input__label">Рост (см)</label>
              <input type="text" autocomplete="off" v-mask-static="'9{2,3}'"
                     :id="KEYS['height']" :name="normalizeDotsToArrow(KEYS['height'])"
                     :placeholder="'185'" :data-vv-as="'Рост'"
                     v-validate="'decimal:2|min_value:30|max_value:275'"
                     v-model="fields[KEYS['height']]"
                     :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['height']))) }, 'input', 'form__input', 'form__input_declaration']">

              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['height']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['height'])) }}</div>
              </template>
            </div>
            <div class="form__group form__group_declaration">
              <label :for="KEYS['weight']" class="label input__label">Вес (кг)</label>
              <input type="text" autocomplete="off" v-mask-static="'9{2,3}'"
                     :id="KEYS['weight']" :name="normalizeDotsToArrow(KEYS['weight'])"
                     :placeholder="'65'" :data-vv-as="'Рост'"
                     v-validate="'decimal:2|min_value:30|max_value:275'"
                     v-model="fields[KEYS['weight']]"
                     :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['weight']))) }, 'input', 'form__input', 'form__input_declaration']">

              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['weight']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['weight'])) }}</div>
              </template>
            </div>
            <div class="form__group form__group_declaration">
              <label :for="KEYS['volumeOfBreast']" class="label input__label">Объем груди (см)</label>
              <input type="text" autocomplete="off" v-mask-static="'9{2,3}'"
                     :id="KEYS['volumeOfBreast']" :name="normalizeDotsToArrow(KEYS['volumeOfBreast'])"
                     :placeholder="'90'" :data-vv-as="'Объем груди'"
                     v-validate="'decimal:2|min_value:30|max_value:275'"
                     v-model="fields[KEYS['volumeOfBreast']]"
                     :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['volumeOfBreast']))) }, 'input', 'form__input', 'form__input_declaration']">

              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['volumeOfBreast']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['volumeOfBreast'])) }}</div>
              </template>
            </div>
            <div class="form__group form__group_declaration">
              <label :for="KEYS['waist']" class="label input__label">Объем талии (см)</label>
              <input type="text" autocomplete="off" v-mask-static="'9{2,3}'"
                     :id="KEYS['waist']" :name="normalizeDotsToArrow(KEYS['waist'])"
                     :placeholder="'60'" :data-vv-as="'Объем талии'"
                     v-validate="'decimal:2|min_value:30|max_value:275'"
                     v-model="fields[KEYS['waist']]"
                     :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['waist']))) }, 'input', 'form__input', 'form__input_declaration']">

              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['waist']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['waist'])) }}</div>
              </template>
            </div>
            <div class="form__group form__group_declaration">
              <label :for="KEYS['hips']" class="label input__label">Объем бедер (см)</label>
              <input type="text" autocomplete="off" v-mask-static="'9{2,3}'"
                     :id="KEYS['hips']" :name="normalizeDotsToArrow(KEYS['hips'])"
                     :placeholder="'90'" :data-vv-as="'Объем бедер'"
                     v-validate="'decimal:2|min_value:30|max_value:275'"
                     v-model="fields[KEYS['hips']]"
                     :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['hips']))) }, 'input', 'form__input', 'form__input_declaration']">

              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['hips']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['hips'])) }}</div>
              </template>
            </div>
            <div class="form__group form__group_declaration">
              <label :for="KEYS['shoeSize']" class="label input__label">Размер обуви</label>
              <input type="text" autocomplete="off" v-mask-static="'9{2,3}'"
                     :id="KEYS['shoeSize']" :name="normalizeDotsToArrow(KEYS['shoeSize'])"
                     :placeholder="'38'" :data-vv-as="'Размер обуви'"
                     v-validate="'decimal:2|min_value:10|max_value:50'"
                     v-model="fields[KEYS['shoeSize']]"
                     :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['shoeSize']))) }, 'input', 'form__input', 'form__input_declaration']">

              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['shoeSize']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['shoeSize'])) }}</div>
              </template>
            </div>
            <div class="form__group form__group_declaration">
              <label :for="KEYS['clothingSize']" class="label input__label">Размер одежды</label>
              <lm-select
                :input-id="KEYS['clothingSize']"
                :input-name="normalizeDotsToArrow(KEYS['clothingSize'])"
                :data-vv-name="normalizeDotsToArrow(KEYS['clothingSize'])"
                data-vv-as="Размер одежды"
                :options="sources['lists']['razmer-odezhdy']"
                v-model="fields[KEYS['clothingSize']]"
                v-validate="''"
                :placeholder="'Не выбрано'"
                :placeholderDisabled="true"
                :placeholderHidden="true"
                label=""
                :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['clothingSize']))) }]">
              </lm-select>

              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['clothingSize']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['clothingSize'])) }}</div>
              </template>
            </div>
            <div class="form__group form__group_declaration">
              <label :for="KEYS['bodyType']" class="label input__label">Телосложение</label>
              <lm-select
                :input-id="KEYS['bodyType']"
                :input-name="normalizeDotsToArrow(KEYS['bodyType'])"
                :data-vv-name="normalizeDotsToArrow(KEYS['bodyType'])"
                data-vv-as="Телосложение"
                :options="sources['lists']['teloslozhenie']"
                v-model="fields[KEYS['bodyType']]"
                v-validate="''"
                :placeholder="'Не выбрано'"
                :placeholderDisabled="true"
                :placeholderHidden="true"
                label=""
                :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['bodyType']))) }]">
              </lm-select>

              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['bodyType']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['bodyType'])) }}</div>
              </template>
            </div>
            <div class="form__group form__group_declaration">
              <label :for="KEYS['typeOfAppearance']" class="label input__label">Тип внешности</label>
              <lm-select
                :input-id="KEYS['typeOfAppearance']"
                :input-name="normalizeDotsToArrow(KEYS['typeOfAppearance'])"
                :data-vv-name="normalizeDotsToArrow(KEYS['typeOfAppearance'])"
                data-vv-as="Тип внешности"
                :options="sources['lists']['tip-vneshnosti']"
                v-model="fields[KEYS['typeOfAppearance']]"
                v-validate="''"
                :placeholder="'Не выбрано'"
                :placeholderDisabled="true"
                :placeholderHidden="true"
                label=""
                :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['typeOfAppearance']))) }]">
              </lm-select>

              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['typeOfAppearance']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['typeOfAppearance'])) }}</div>
              </template>
            </div>
            <div class="form__group form__group_declaration">
              <label :for="KEYS['eyeColor']" class="label input__label">Цвет глаз</label>
              <lm-select
                :input-id="KEYS['eyeColor']"
                :input-name="normalizeDotsToArrow(KEYS['eyeColor'])"
                :data-vv-name="normalizeDotsToArrow(KEYS['eyeColor'])"
                data-vv-as="Цвет глаз"
                :options="sources['lists']['cvet-glaz']"
                v-model="fields[KEYS['eyeColor']]"
                v-validate="''"
                :placeholder="'Не выбрано'"
                :placeholderDisabled="true"
                :placeholderHidden="true"
                label=""
                :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['eyeColor']))) }]">
              </lm-select>

              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['eyeColor']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['eyeColor'])) }}</div>
              </template>
            </div>
            <div class="form__group form__group_declaration">
              <label :for="KEYS['hairColor']" class="label input__label">Цвет волос</label>
              <lm-select
                :input-id="KEYS['hairColor']"
                :input-name="normalizeDotsToArrow(KEYS['hairColor'])"
                :data-vv-name="normalizeDotsToArrow(KEYS['hairColor'])"
                data-vv-as="Цвет волос"
                :options="sources['lists']['cvet-volos']"
                v-model="fields[KEYS['hairColor']]"
                v-validate="''"
                :placeholder="'Не выбрано'"
                :placeholderDisabled="true"
                :placeholderHidden="true"
                label=""
                :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['hairColor']))) }]">
              </lm-select>

              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['hairColor']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['hairColor'])) }}</div>
              </template>
            </div>
            <div class="form__group form__group_declaration">
              <label :for="KEYS['hairLength']" class="label input__label">Длина волос</label>
              <lm-select
                :input-id="KEYS['hairLength']"
                :input-name="normalizeDotsToArrow(KEYS['hairLength'])"
                :data-vv-name="normalizeDotsToArrow(KEYS['hairLength'])"
                data-vv-as="Длина волос"
                :options="sources['lists']['dlina-volos']"
                v-model="fields[KEYS['hairLength']]"
                v-validate="''"
                :placeholder="'Не выбрано'"
                :placeholderDisabled="true"
                :placeholderHidden="true"
                label=""
                :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['hairLength']))) }]">
              </lm-select>

              <template v-if="verrors.has(normalizeDotsToArrow(KEYS['hairLength']))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(normalizeDotsToArrow(KEYS['hairLength'])) }}</div>
              </template>
            </div>
            <div class="form__group form__group_declaration form__group_declaration_switch">
              <div class="form__row form__row_declaration form__row_declaration_payment">
                <div class="switch switch_declaration">
                  <label :for="KEYS['dyedHair']" class="switch__label">Окрашенные волосы</label>
                  <input :id="KEYS['dyedHair']" type="checkbox" class="switch__mark" :name="normalizeDotsToArrow(KEYS['dyedHair'])" v-model="fields[KEYS['dyedHair']]">
                  <label :for="KEYS['dyedHair']" class="switch__btn"></label>
                </div>
                <div class="switch switch_declaration">
                  <label :for="KEYS['tattoos']" class="switch__label">Татуировки</label>
                  <input :id="KEYS['tattoos']" type="checkbox" class="switch__mark" :name="normalizeDotsToArrow(KEYS['tattoos'])" v-model="fields[KEYS['tattoos']]">
                  <label :for="KEYS['tattoos']" class="switch__btn"></label>
                </div>
                <div class="switch switch_declaration">
                  <label :for="KEYS['piercings']" class="switch__label">Пирсинг</label>
                  <input :id="KEYS['piercings']" type="checkbox" class="switch__mark" :name="normalizeDotsToArrow(KEYS['piercings'])" v-model="fields[KEYS['piercings']]">
                  <label :for="KEYS['piercings']" class="switch__btn"></label>
                </div>
              </div>
            </div>
          </div>
        </template>

        <template v-if="(KEYS['participationInProjects'] && has(fields, KEYS['participationInProjects']))">
          <participation-in-projects-filed v-model="fields[KEYS['participationInProjects']]" class="pb_24"></participation-in-projects-filed>
        </template>

        <template v-if="(KEYS['higherEducation'] && has(fields, KEYS['higherEducation']))">
          <higher-education-filed v-model="fields[KEYS['higherEducation']]" class="pb_24"></higher-education-filed>
        </template>

        <template v-if="(KEYS['training'] && has(fields, KEYS['training']))">
          <training-filed v-model="fields[KEYS['training']]" class="pb_24"></training-filed>
        </template>

        <template v-if="(edit === false && showReset === true)">
          <div class="form__group form__group_declaration">
            <button class="btn btn_secondary_filled w_100" @click="_handleClickClearForm">Очистить форму</button>
          </div>
        </template>
      </div>
    </div>

    <div class="page__footer page-inner__footer">
      <div class="page-inner__body_declaration">
        <div class="row row_justify_between">
          <button class="btn btn_secondary" @click="_handleClickPreviousPage">
            Назад
          </button>
          <button class="btn btn_primary" @click="_handleClickActionProfession">
            {{ isPublished ? 'Сохранить' :  'Опубликовать' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { has } from '@utils'

  import RateFiled from '@components/User/Profession/Form/Fields/Rate.vue'
  import SnapsFiled from '@components/User/Profession/Form/Fields/Snaps.vue'
  import PhotosFiled from '@components/User/Profession/Form/Fields/Photos.vue'
  import VideosFiled from '@components/User/Profession/Form/Fields/Videos.vue'
  import GameAgeFiled from '@components/User/Profession/Form/Fields/GameAge.vue'
  import TrainingFiled from '@components/User/Profession/Form/Fields/Training.vue'
  import HigherEducationFiled from '@components/User/Profession/Form/Fields/HigherEducation.vue'
  import ParticipationInProjectsFiled from '@components/User/Profession/Form/Fields/ParticipationInProjects.vue'

  export default {
    components: { GameAgeFiled, RateFiled, ParticipationInProjectsFiled, HigherEducationFiled, TrainingFiled, VideosFiled, PhotosFiled, SnapsFiled },
    data () { return { has } },
    methods: {
      _handleFetchTag: _.debounce(function(search, loading, field) {
        if (search) {
          loading(true)
          this._fetchTags(search, field).then((data) => {
            this.$set(this.sources, field, data)

            loading(false)
          }).catch(() => {
            loading(false)
          })
        }
      }, 500),
      _fetchTags (q, field) {
        let { professionName } = this

        return new Promise((resolve, reject) => {
          this.$api.get('api/v2/users/professions/tags', { q, field, professionName, limit: 50 }).then((response) => {
            const { data: { data } } = response

            resolve && resolve(data)
          }, (error) => {
            const { response: { data, status } } = error
            reject && reject()
            throw new Error('Error loading tags')
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>
