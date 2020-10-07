<template>
  <div class="d-row justify_center pt_12">
    <div class="page__body page__body_declaration_creating_second">
      <div class="heading heading_h2 mb_2">{{ title }}</div>
      <div class="d-input__label mb_12">{{ professionTitle }}</div>

      <div class="section_declaration_creating section_declaration_creating_big">
        <div class="column w_100">
          <div class="heading heading_h4 mb_9">Основная информация</div>

          <div class="d-input d-input_row mb_6">
            <label for="profession__category" class="d-input__label d-input__label_required">Профессия</label>
            <div class="column">
              <div class="lm-w-dropdown-wrap lm-dropdown-wrap--n w_100">
                <div :class="['lm-w-dropdown', { disabled: edit }]">
                  <input placeholder="Не выбрано" id="profession__category" readonly="readonly" autocomplete="off" :disabled="(edit === true)"
                         :value="professionTitle" class="readonly lm-w-dropdown-selected" @click="_handleClickChangeProfession">
                  <i class="lm-w-dropdown-icon"></i>
                </div>
              </div>
            </div>
          </div>

          <template v-if="(KEYS['gameAge'] && has(fields, KEYS['gameAge']))">
            <game-age-filed v-model="fields[KEYS['gameAge']]"></game-age-filed>
          </template>

          <template v-if="(KEYS['directions'] && has(fields, KEYS['directions']))">
            <div class="d-input d-input_row mb_6">
              <label :for="KEYS['directions']" class="d-input__label">Направления</label>
              <div class="column">
                <input type="text" autocomplete="off"
                       :id="KEYS['directions']" :name="normalizeDotsToArrow(KEYS['directions'])"
                       :placeholder="'Массовка, Реклама, Выставки'" :data-vv-as="'Направления'"
                       v-validate="'max:255'"
                       v-model="fields[KEYS['directions']]"
                       :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['directions']))) }, 'd-input__field', 'w_100' ]">

                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['directions']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['directions'])) }}</div>
                </template>
              </div>
            </div>
          </template>

          <template v-if="(KEYS['serviceInTheaters'] && has(fields, KEYS['serviceInTheaters']))">
            <div class="d-input d-input_row mb_6">
              <label :for="KEYS['serviceInTheaters']" class="d-input__label">Служба в театрах</label>
              <div class="column">
                <input type="text" autocomplete="off"
                       :id="KEYS['serviceInTheaters']" :name="normalizeDotsToArrow(KEYS['serviceInTheaters'])"
                       :placeholder="'Театр Моссовета, Большой театр'" :data-vv-as="'Служба в театрах'"
                       v-validate="'max:255'"
                       v-model="fields[KEYS['serviceInTheaters']]"
                       :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['serviceInTheaters']))) }, 'd-input__field', 'w_100' ]">

                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['serviceInTheaters']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['serviceInTheaters'])) }}</div>
                </template>
              </div>
            </div>
          </template>

          <template v-if="(KEYS['functions'] && has(fields, KEYS['functions']))">
            <div class="d-input d-input_row mb_6">
              <label :for="KEYS['functions']" class="d-input__label">Функции</label>
              <div class="column">
                <input type="text" autocomplete="off"
                       :id="KEYS['functions']" :name="normalizeDotsToArrow(KEYS['functions'])"
                       :placeholder="'Функции'" :data-vv-as="'Функции'"
                       v-validate="'max:255'"
                       v-model="fields[KEYS['functions']]"
                       :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['functions']))) }, 'd-input__field', 'w_100' ]">

                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['functions']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['functions'])) }}</div>
                </template>
              </div>
            </div>
          </template>

          <template v-if="(KEYS['workExperience'] && has(fields, KEYS['workExperience']))">
            <div class="d-input d-input_row mb_6">
              <label :for="KEYS['workExperience']" class="d-input__label">Стаж работы</label>
              <div class="column">
                <input type="text" autocomplete="off" min="1" max="9999999" v-mask-numeric
                       :id="KEYS['workExperience']" :name="normalizeDotsToArrow(KEYS['workExperience'])"
                       :placeholder="'Стаж работы, лет'" :data-vv-as="'Стаж работы'"
                       v-validate="'numeric|min_value:1|max_value:99'"
                       v-model="fields[KEYS['workExperience']]"
                       :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['workExperience']))) }, 'd-input__field', 'w_100' ]">

                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['workExperience']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['workExperience'])) }}</div>
                </template>
              </div>
            </div>
          </template>

          <template v-if="(KEYS['other'] && has(fields, KEYS['other']))">
            <div class="d-textarea d-input_row">
              <label :for="KEYS['other']" class="d-input__label">Другое</label>
              <div class="column">
                <div class="d-row">
                  <textarea-autosize autocomplete="off"
                                     :id="KEYS['other']" :name="normalizeDotsToArrow(KEYS['other'])"
                                     :placeholder="'Другое'" :data-vv-as="'Другое'"
                                     v-validate="'max:65000'"
                                     v-model="fields[KEYS['other']]"
                                     :min-height="76" :max-height="350"
                                     :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['other']))) }, 'd-textarea', 'w_100' ]">
                  </textarea-autosize>
                </div>
                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['other']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['other'])) }}</div>
                </template>
              </div>
            </div>
          </template>

          <template v-if="(KEYS['actorsStarredIn'] && has(fields, KEYS['actorsStarredIn']))">
            <div class="d-textarea d-input_row mb_6">
              <label :for="KEYS['actorsStarredIn']" class="d-input__label">Актеры снимались в</label>
              <div class="column">
                <div class="d-row">
                  <textarea-autosize autocomplete="off"
                                     :id="KEYS['actorsStarredIn']" :name="normalizeDotsToArrow(KEYS['actorsStarredIn'])"
                                     :placeholder="'Актеры снимались в'" :data-vv-as="'Актеры снимались в'"
                                     v-validate="'max:65000'"
                                     v-model="fields[KEYS['actorsStarredIn']]"
                                     :min-height="76" :max-height="350"
                                     :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['actorsStarredIn']))) }, 'd-textarea', 'w_100' ]">
                  </textarea-autosize>
                </div>
                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['actorsStarredIn']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['actorsStarredIn'])) }}</div>
                </template>
              </div>
            </div>
          </template>

          <template v-if="(KEYS['introducingActorsModels'] && has(fields, KEYS['introducingActorsModels']))">
            <div class="d-textarea d-input_row mb_6">
              <label :for="KEYS['introducingActorsModels']" class="d-input__label">Представляю</label>
              <div class="column">
                <div class="d-row">
                  <textarea-autosize autocomplete="off"
                                     :id="KEYS['introducingActorsModels']" :name="normalizeDotsToArrow(KEYS['introducingActorsModels'])"
                                     :placeholder="'Представляю актеров / моделей'" :data-vv-as="'Представляю'"
                                     v-validate="'max:65000'"
                                     v-model="fields[KEYS['introducingActorsModels']]"
                                     :min-height="76" :max-height="350"
                                     :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['introducingActorsModels']))) }, 'd-textarea', 'w_100' ]">
                  </textarea-autosize>
                </div>
                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['introducingActorsModels']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['introducingActorsModels'])) }}</div>
                </template>
              </div>
            </div>
          </template>

          <template v-if="(KEYS['company'] && has(fields, KEYS['company']))">
            <div class="d-textarea d-input_row">
              <label :for="KEYS['company']" class="d-input__label">Компания</label>
              <div class="column">
                <div class="d-row">
                  <textarea-autosize autocomplete="off"
                                     :id="KEYS['company']" :name="normalizeDotsToArrow(KEYS['company'])"
                                     :placeholder="'Компания'" :data-vv-as="'Компания'"
                                     v-validate="'max:65000'"
                                     v-model="fields[KEYS['company']]"
                                     :min-height="76" :max-height="350"
                                     :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['company']))) }, 'd-textarea', 'w_100' ]">
                  </textarea-autosize>
                </div>
                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['company']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['company'])) }}</div>
                </template>
              </div>
            </div>
          </template>

          <template v-if="(KEYS['talentArchive'] && has(fields, KEYS['talentArchive']))">
            <div class="d-switched__container w_100">
              <div class="d-switched__item">
                <div class="d-switch w_100">
                  <label :for="KEYS['talentArchive']" class="d-switch__label">
                    Архив талантов
                    <tooltip style="line-height: 0" effect="scale" placement="bottom" :content="contentTooltipTalentArchive">
                      <svg class="d-tooltip__icon ml_2">
                        <use xlink:href="/dist/img/icons/verification/sprite.svg#icon_info" />
                      </svg>
                    </tooltip>
                  </label>
                  <input :id="KEYS['talentArchive']" type="checkbox" class="d-switch__mark" :name="normalizeDotsToArrow(KEYS['talentArchive'])" v-model="fields[KEYS['talentArchive']]">
                  <label :for="KEYS['talentArchive']" class="d-switch__btn"></label>
                </div>
              </div>
            </div>
          </template>

          <template v-if="(KEYS['programsSoftware'] && has(fields, KEYS['programsSoftware']))">
            <div class="d-input d-input_row mb_6">
              <label :for="KEYS['programsSoftware']" class="d-input__label">Программы / софт</label>
              <div class="column">
                <input type="text" autocomplete="off"
                       :id="KEYS['programsSoftware']" :name="normalizeDotsToArrow(KEYS['programsSoftware'])"
                       :placeholder="'Программы или софт, с которыми работаю'" :data-vv-as="'Программы / софт'"
                       v-validate="'max:255'"
                       v-model="fields[KEYS['programsSoftware']]"
                       :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['programsSoftware']))) }, 'd-input__field', 'w_100' ]">

                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['programsSoftware']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['programsSoftware'])) }}</div>
                </template>
              </div>
            </div>
          </template>

          <template v-if="(KEYS['genres'] && has(fields, KEYS['genres']))">
            <div class="d-input d-input_row mb_6">
              <label :for="KEYS['genres']" class="d-input__label">Жанры</label>
              <div class="column">
                <input type="text" autocomplete="off"
                       :id="KEYS['genres']" :name="normalizeDotsToArrow(KEYS['genres'])"
                       :placeholder="'Кантри, Хип-хоп'" :data-vv-as="'Жанры'"
                       v-validate="'max:255'"
                       v-model="fields[KEYS['genres']]"
                       :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['genres']))) }, 'd-input__field', 'w_100' ]">

                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['genres']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['genres'])) }}</div>
                </template>
              </div>
            </div>
          </template>

          <template v-if="(KEYS['instruments'] && has(fields, KEYS['instruments']))">
            <div class="d-input d-input_row mb_6">
              <label :for="KEYS['instruments']" class="d-input__label">Инструменты</label>
              <div class="column">
                <input type="text" autocomplete="off"
                       :id="KEYS['instruments']" :name="normalizeDotsToArrow(KEYS['instruments'])"
                       :placeholder="'Гитара, барабан'" :data-vv-as="'Инструменты'"
                       v-validate="'max:255'"
                       v-model="fields[KEYS['instruments']]"
                       :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['instruments']))) }, 'd-input__field', 'w_100' ]">

                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['instruments']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['instruments'])) }}</div>
                </template>
              </div>
            </div>
          </template>

          <template v-if="(KEYS['musicServices'] && has(fields, KEYS['musicServices']))">
            <div class="d-textarea d-input_row mb_6">
              <label :for="KEYS['musicServices']" class="d-input__label">Музыкальные сервисы</label>
              <div class="column">
                <div class="d-row">
                  <textarea-autosize autocomplete="off"
                                     :id="KEYS['musicServices']" :name="normalizeDotsToArrow(KEYS['musicServices'])"
                                     :placeholder="'Музыкальные сервисы'" :data-vv-as="'Музыкальные сервисы'"
                                     v-validate="'max:65000'"
                                     v-model="fields[KEYS['musicServices']]"
                                     :min-height="76" :max-height="350"
                                     :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['musicServices']))) }, 'd-textarea', 'w_100' ]">
                  </textarea-autosize>
                </div>
                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['musicServices']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['musicServices'])) }}</div>
                </template>
              </div>
            </div>
          </template>

          <template v-if="(KEYS['equipment'] && has(fields, KEYS['equipment']))">
            <div class="d-textarea d-input_row mb_6">
              <label :for="KEYS['equipment']" class="d-input__label">Оборудование</label>
              <div class="column">
                <div class="d-row">
                  <textarea-autosize autocomplete="off"
                                     :id="KEYS['equipment']" :name="normalizeDotsToArrow(KEYS['equipment'])"
                                     :placeholder="'Оборудование, с которым работаю'" :data-vv-as="'Оборудование'"
                                     v-validate="'max:65000'"
                                     v-model="fields[KEYS['equipment']]"
                                     :min-height="76" :max-height="350"
                                     :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['equipment']))) }, 'd-textarea', 'w_100' ]">
                  </textarea-autosize>
                </div>
                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['equipment']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['equipment'])) }}</div>
                </template>
              </div>
            </div>
          </template>

          <template v-if="(KEYS['competitionsAndAwards'] && has(fields, KEYS['competitionsAndAwards']))">
            <div class="d-textarea d-input_row mb_6">
              <label :for="KEYS['competitionsAndAwards']" class="d-input__label">Конкурсы и награды</label>
              <div class="column">
                <div class="d-row">
                  <textarea-autosize autocomplete="off"
                                     :id="KEYS['competitionsAndAwards']" :name="normalizeDotsToArrow(KEYS['competitionsAndAwards'])"
                                     :placeholder="'Голос 2018, январь - март 2018, финалист'" :data-vv-as="'Конкурсы и награды'"
                                     v-validate="'max:65000'"
                                     v-model="fields[KEYS['competitionsAndAwards']]"
                                     :min-height="76" :max-height="350"
                                     :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['competitionsAndAwards']))) }, 'd-textarea', 'w_100' ]">
                  </textarea-autosize>
                </div>
                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['competitionsAndAwards']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['competitionsAndAwards'])) }}</div>
                </template>
              </div>
            </div>
          </template>

          <template v-if="(KEYS['ownMaterial'] && has(fields, KEYS['ownMaterial']))">
            <div class="d-switched__container w_100">
              <div class="d-switched__item">
                <div class="d-switch w_100">
                  <label :for="KEYS['ownMaterial']" class="d-switch__label">
                    Собственный материал
                    <tooltip style="line-height: 0" effect="scale" placement="bottom" :content="contentTooltipOwnMaterial">
                      <svg class="d-tooltip__icon ml_2">
                        <use xlink:href="/dist/img/icons/verification/sprite.svg#icon_info" />
                      </svg>
                    </tooltip>
                  </label>
                  <input :id="KEYS['ownMaterial']" type="checkbox" class="d-switch__mark" :name="normalizeDotsToArrow(KEYS['ownMaterial'])" v-model="fields[KEYS['ownMaterial']]">
                  <label :for="KEYS['ownMaterial']" class="d-switch__btn"></label>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>

      <template v-if="(KEYS['rate'] && has(fields, KEYS['rate']))">
        <div class="section_declaration_creating section_declaration_creating_big">
          <div class="column w_100">
            <div class="heading heading_h4 mb_9">Ставка</div>
            <rate-filed v-model="fields[KEYS['rate']]" :currencies="sources['lists']['valyuty']" :periods="sources['lists']['vybor-perioda']" class="mb_6"></rate-filed>
            <template v-if="(KEYS['workForFree'] && has(fields, KEYS['workForFree']))">
              <div class="d-switched__container w_100">
                <div class="d-switched__item">
                  <div class="d-switch w_100">
                    <label :for="KEYS['workForFree']" class="d-switch__label">
                      Работа бесплатно
                      <tooltip style="line-height: 0" effect="scale" placement="bottom" :content="contentTooltipWorkForFree">
                        <svg class="d-tooltip__icon ml_2">
                          <use xlink:href="/dist/img/icons/verification/sprite.svg#icon_info" />
                        </svg>
                      </tooltip>
                    </label>
                    <input :id="KEYS['workForFree']" type="checkbox" class="d-switch__mark" :name="normalizeDotsToArrow(KEYS['workForFree'])" v-model="fields[KEYS['workForFree']]">
                    <label :for="KEYS['workForFree']" class="d-switch__btn"></label>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </template>

      <template v-if="hasPortfolio">
        <div class="section_declaration_creating section_declaration_creating_big">
          <div class="column w_100">
            <div class="heading heading_h4 mb_9 d-input_row justify_between">
              <div class="align-center">Портфолио</div>
              <a href="javascript:void(0)" class="d-input__link d-input__link_blue" @click="_handleClickOpenModalCheckList">Чек-лист</a>
            </div>

            <photos-filed v-model="photos" :id="id" :edit="edit" v-if="showFieldForm"></photos-filed>
            <videos-filed v-model="videos" :id="id" :edit="edit" v-if="showFieldForm"></videos-filed>
          </div>
        </div>
      </template>

      <template v-if="hasBodyParameters">
        <div class="section_declaration_creating section_declaration_creating_big">
          <div class="column w_100">
            <div class="heading heading_h4 mb_9">
              Параметры тела
            </div>

            <div class="d-input d-input_row mb_6">
              <label :for="KEYS['height']" class="d-input__label mr_4">Рост (см)</label>
              <div class="column">
                <input type="text" autocomplete="off" v-mask-static="'9{2,3}'"
                       :id="KEYS['height']" :name="normalizeDotsToArrow(KEYS['height'])"
                       :placeholder="'185'" :data-vv-as="'Рост'"
                       v-validate="'decimal:2|max_value:275'"
                       v-model="fields[KEYS['height']]"
                       :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['height']))) }, 'd-input__field', 'w_100']">

                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['height']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['height'])) }}</div>
                </template>
              </div>
            </div>
            <div class="d-input d-input_row mb_6">
              <label :for="KEYS['weight']" class="d-input__label mr_4">Вес (кг)</label>
              <div class="column">
                <input type="text" autocomplete="off" v-mask-static="'9{2,3}'"
                       :id="KEYS['weight']" :name="normalizeDotsToArrow(KEYS['weight'])"
                       :placeholder="'65'" :data-vv-as="'Вес'"
                       v-validate="'decimal:2|min_value:30|max_value:275'"
                       v-model="fields[KEYS['weight']]"
                       :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['weight']))) }, 'd-input__field', 'w_100']">

                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['weight']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['weight'])) }}</div>
                </template>
              </div>
            </div>
            <div class="d-input d-input_row mb_6">
              <label :for="KEYS['volumeOfBreast']" class="d-input__label mr_4">Объем груди (см)</label>
              <div class="column">
                <input type="text" autocomplete="off" v-mask-static="'9{2,3}'"
                       :id="KEYS['volumeOfBreast']" :name="normalizeDotsToArrow(KEYS['volumeOfBreast'])"
                       :placeholder="'90'" :data-vv-as="'Объем груди'"
                       v-validate="'decimal:2|min_value:30|max_value:275'"
                       v-model="fields[KEYS['volumeOfBreast']]"
                       :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['volumeOfBreast']))) }, 'd-input__field', 'w_100']">

                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['volumeOfBreast']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['volumeOfBreast'])) }}</div>
                </template>
              </div>
            </div>
            <div class="d-input d-input_row mb_6">
              <label :for="KEYS['waist']" class="d-input__label mr_4">Объем талии (см)</label>
              <div class="column">
                <input type="text" autocomplete="off" v-mask-static="'9{2,3}'"
                       :id="KEYS['waist']" :name="normalizeDotsToArrow(KEYS['waist'])"
                       :placeholder="'60'" :data-vv-as="'Объем талии'"
                       v-validate="'decimal:2|min_value:30|max_value:275'"
                       v-model="fields[KEYS['waist']]"
                       :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['waist']))) }, 'd-input__field', 'w_100']">

                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['waist']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['waist'])) }}</div>
                </template>
              </div>
            </div>
            <div class="d-input d-input_row mb_6">
              <label :for="KEYS['hips']" class="d-input__label mr_4">Объем бедер (см)</label>
              <div class="column">
                <input type="text" autocomplete="off" v-mask-static="'9{2,3}'"
                       :id="KEYS['hips']" :name="normalizeDotsToArrow(KEYS['hips'])"
                       :placeholder="'90'" :data-vv-as="'Объем бедер'"
                       v-validate="'decimal:2|min_value:30|max_value:275'"
                       v-model="fields[KEYS['hips']]"
                       :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['hips']))) }, 'd-input__field', 'w_100']">

                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['hips']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['hips'])) }}</div>
                </template>
              </div>
            </div>
            <div class="d-input d-input_row mb_6">
              <label :for="KEYS['shoeSize']" class="d-input__label mr_4">Размер обуви</label>
              <div class="column">
                <input type="text" autocomplete="off" v-mask-static="'9{2,3}'"
                       :id="KEYS['shoeSize']" :name="normalizeDotsToArrow(KEYS['shoeSize'])"
                       :placeholder="'38'" :data-vv-as="'Размер обуви'"
                       v-validate="'decimal:2|min_value:10|max_value:50'"
                       v-model="fields[KEYS['shoeSize']]"
                       :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['shoeSize']))) }, 'd-input__field', 'w_100']">

                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['shoeSize']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['shoeSize'])) }}</div>
                </template>
              </div>
            </div>
            <div class="d-input d-input_row mb_6">
              <label :for="KEYS['clothingSize']" class="d-input__label mr_4">Размер одежды</label>
              <div class="column">
                <lm-select
                  :input-id="KEYS['clothingSize']"
                  :input-name="normalizeDotsToArrow(KEYS['clothingSize'])"
                  :data-vv-name="normalizeDotsToArrow(KEYS['clothingSize'])"
                  data-vv-as="Размер одежды"
                  :options="sources['lists']['razmer-odezhdy']"
                  v-model="fields[KEYS['clothingSize']]"
                  v-validate="''"
                  :placeholder="'Не выбрано'"
                  :multiple="false"
                  :filter="false"
                  :class="['lm-dropdown-wrap--n', 'w_100', { 'error': (verrors.has(normalizeDotsToArrow(KEYS['clothingSize']))) }]">
                </lm-select>

                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['clothingSize']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['clothingSize'])) }}</div>
                </template>
              </div>
            </div>
            <div class="d-input d-input_row mb_6">
              <label :for="KEYS['bodyType']" class="d-input__label mr_4">Телосложение</label>
              <div class="column">
                <lm-select
                  :input-id="KEYS['bodyType']"
                  :input-name="normalizeDotsToArrow(KEYS['bodyType'])"
                  :data-vv-name="normalizeDotsToArrow(KEYS['bodyType'])"
                  data-vv-as="Телосложение"
                  :options="sources['lists']['teloslozhenie']"
                  v-model="fields[KEYS['bodyType']]"
                  v-validate="''"
                  :placeholder="'Не выбрано'"
                  :multiple="false"
                  :filter="false"
                  :class="['lm-dropdown-wrap--n', 'w_100', { 'error': (verrors.has(normalizeDotsToArrow(KEYS['bodyType']))) }]">
                </lm-select>

                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['bodyType']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['bodyType'])) }}</div>
                </template>
              </div>
            </div>
            <div class="d-input d-input_row mb_6">
              <label :for="KEYS['typeOfAppearance']" class="d-input__label mr_4">Тип внешности</label>
              <div class="column">
                <lm-select
                  :input-id="KEYS['typeOfAppearance']"
                  :input-name="normalizeDotsToArrow(KEYS['typeOfAppearance'])"
                  :data-vv-name="normalizeDotsToArrow(KEYS['typeOfAppearance'])"
                  data-vv-as="Тип внешности"
                  :options="sources['lists']['tip-vneshnosti']"
                  v-model="fields[KEYS['typeOfAppearance']]"
                  v-validate="''"
                  :placeholder="'Не выбрано'"
                  :multiple="false"
                  :filter="false"
                  :class="['lm-dropdown-wrap--n', 'w_100', { 'error': (verrors.has(normalizeDotsToArrow(KEYS['typeOfAppearance']))) }]">
                </lm-select>

                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['typeOfAppearance']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['typeOfAppearance'])) }}</div>
                </template>
              </div>
            </div>
            <div class="d-input d-input_row mb_6">
              <label :for="KEYS['eyeColor']" class="d-input__label mr_4">Цвет глаз</label>
              <div class="column">
                <lm-select
                  :input-id="KEYS['eyeColor']"
                  :input-name="normalizeDotsToArrow(KEYS['eyeColor'])"
                  :data-vv-name="normalizeDotsToArrow(KEYS['eyeColor'])"
                  data-vv-as="Цвет глаз"
                  :options="sources['lists']['cvet-glaz']"
                  v-model="fields[KEYS['eyeColor']]"
                  v-validate="''"
                  :placeholder="'Не выбрано'"
                  :multiple="false"
                  :filter="false"
                  :class="['lm-dropdown-wrap--n', 'w_100', { 'error': (verrors.has(normalizeDotsToArrow(KEYS['eyeColor']))) }]">
                </lm-select>

                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['eyeColor']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['eyeColor'])) }}</div>
                </template>
              </div>
            </div>
            <div class="d-input d-input_row mb_6">
              <label :for="KEYS['hairColor']" class="d-input__label mr_4">Цвет волос</label>
              <div class="column">
                <lm-select
                  :input-id="KEYS['hairColor']"
                  :input-name="normalizeDotsToArrow(KEYS['hairColor'])"
                  :data-vv-name="normalizeDotsToArrow(KEYS['hairColor'])"
                  data-vv-as="Цвет волос"
                  :options="sources['lists']['cvet-volos']"
                  v-model="fields[KEYS['hairColor']]"
                  v-validate="''"
                  :placeholder="'Не выбрано'"
                  :multiple="false"
                  :filter="false"
                  :class="['lm-dropdown-wrap--n', 'w_100', { 'error': (verrors.has(normalizeDotsToArrow(KEYS['hairColor']))) }]">
                </lm-select>

                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['hairColor']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['hairColor'])) }}</div>
                </template>
              </div>
            </div>
            <div class="d-input d-input_row mb_6">
              <label :for="KEYS['hairLength']" class="d-input__label mr_4">Длина волос</label>
              <div class="column">
                <lm-select
                  :input-id="KEYS['hairLength']"
                  :input-name="normalizeDotsToArrow(KEYS['hairLength'])"
                  :data-vv-name="normalizeDotsToArrow(KEYS['hairLength'])"
                  data-vv-as="Длина волос"
                  :options="sources['lists']['dlina-volos']"
                  v-model="fields[KEYS['hairLength']]"
                  v-validate="''"
                  :placeholder="'Не выбрано'"
                  :multiple="false"
                  :filter="false"
                  :class="['lm-dropdown-wrap--n', 'w_100', { 'error': (verrors.has(normalizeDotsToArrow(KEYS['hairLength']))) }]">
                </lm-select>

                <template v-if="verrors.has(normalizeDotsToArrow(KEYS['hairLength']))">
                  <div class="d-input__notification d-input__notification_required">{{ verrors.first(normalizeDotsToArrow(KEYS['hairLength'])) }}</div>
                </template>
              </div>
            </div>
            <div class="d-switched__container w_100">
              <div class="d-switched__item">
                <div class="d-switch w_100">
                  <label :for="KEYS['dyedHair']" class="d-switch__label">Окрашенные волосы</label>
                  <input :id="KEYS['dyedHair']" type="checkbox" class="d-switch__mark" :name="normalizeDotsToArrow(KEYS['dyedHair'])" v-model="fields[KEYS['dyedHair']]">
                  <label :for="KEYS['dyedHair']" class="d-switch__btn"></label>
                </div>

                <div class="d-switch w_100">
                  <label :for="KEYS['tattoos']" class="d-switch__label">Татуировки</label>
                  <input :id="KEYS['tattoos']" type="checkbox" class="d-switch__mark" :name="normalizeDotsToArrow(KEYS['tattoos'])" v-model="fields[KEYS['tattoos']]">
                  <label :for="KEYS['tattoos']" class="d-switch__btn"></label>
                </div>

                <div class="d-switch w_100">
                  <label :for="KEYS['piercings']" class="d-switch__label">Пирсинг</label>
                  <input :id="KEYS['piercings']" type="checkbox" class="d-switch__mark" :name="normalizeDotsToArrow(KEYS['piercings'])" v-model="fields[KEYS['piercings']]">
                  <label :for="KEYS['piercings']" class="d-switch__btn"></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template v-if="(KEYS['participationInProjects'] && has(fields, KEYS['participationInProjects']))">
        <div class="section_declaration_creating section_declaration_creating_big">
          <participation-in-projects-filed v-model="fields[KEYS['participationInProjects']]"></participation-in-projects-filed>
        </div>
      </template>

      <template v-if="(KEYS['higherEducation'] && has(fields, KEYS['higherEducation']))">
        <div class="section_declaration_creating section_declaration_creating_big">
          <higher-education-filed v-model="fields[KEYS['higherEducation']]"></higher-education-filed>
        </div>
      </template>

      <template v-if="(KEYS['training'] && has(fields, KEYS['training']))">
        <div class="section_declaration_creating section_declaration_creating_big">
          <training-filed v-model="fields[KEYS['training']]"></training-filed>
        </div>
      </template>
    </div>
    <div class="sidebar page__sidebar page__sidebar_declaration_creating">
      <div class="sidebar__content" :style="{ zIndex: 10, marginBottom: '50px' }" v-sticky="{ zIndex: 10, stickyTop: 104 }">
        <div class="section_declaration_creating section_declaration_creating_big pt_0">
          <button class="d-btn d-btn_primary w_100" @click="_handleClickActionProfession">{{ isPublished ? 'Сохранить' :  'Опубликовать' }}</button>
        </div>
        <div class="section_declaration_creating section_declaration_creating_big">
          <div class="column mb_6">
            <div class="heading heading_h5">Самое важное</div>
            <div class="sidebar__text">Заполните рекомендуемые поля, чтобы опубликовать профессию</div>
          </div>

          <list-required-fields :fields="fields" :hasPortfolio="hasPortfolio" :hasPhotos="hasPhotos" :hasVideos="hasVideos"></list-required-fields>
        </div>

        <template v-if="(edit === false && showReset === true)">
          <div class="section_declaration_creating section_declaration_creating_big">
            <button class="d-btn d-btn_secondary_filled w_100" @click="_handleClickClearForm">Очистить форму</button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import { has } from '@utils'

  import RateFiled from '@components/User/Profession/Form/Fields/Rate.vue'
  import PhotosFiled from '@components/User/Profession/Form/Fields/Photos.vue'
  import VideosFiled from '@components/User/Profession/Form/Fields/Videos.vue'
  import GameAgeFiled from '@components/User/Profession/Form/Fields/GameAge.vue'
  import TrainingFiled from '@components/User/Profession/Form/Fields/Training.vue'
  import ListRequiredFields from '@components/User/Profession/Form/ListRequiredFields.vue'
  import HigherEducationFiled from '@components/User/Profession/Form/Fields/HigherEducation.vue'
  import ParticipationInProjectsFiled from '@components/User/Profession/Form/Fields/ParticipationInProjects.vue'

  export default {
    components: { RateFiled, ParticipationInProjectsFiled, GameAgeFiled, HigherEducationFiled, TrainingFiled, VideosFiled, PhotosFiled, ListRequiredFields },
    data () { return { has } },
    computed: {
      contentTooltipWorkForFree () {
        return `<div style="max-width: 265px;">
          <span style="display: block; margin: 0;">
              Включите фильтр, если вы готовы работать в студенческих, короткометражных или некоммерческих проектах
          </span>
        </div>`;
      },
      contentTooltipTalentArchive () {
        return `<div style="max-width: 226px; width: 226px">
          <span style="display: block; margin: 0;">
              Включите фильтр, если у вас есть архив талантов
          </span>
        </div>`;
      },
      contentTooltipOwnMaterial () {
        return `<div style="max-width: 226px; width: 226px">
          <span style="display: block; margin: 0;">
              Включите фильтр, если у вас есть собственный материал
          </span>
        </div>`;
      }
    }
  }
</script>

<style scoped>

</style>
