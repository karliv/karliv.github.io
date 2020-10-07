<template>
  <div class="page_declaration_creating page_user_settings">
    <div class="d-row justify_center pt_12">
      <div class="page__body page__body_declaration_creating_second">
        <div class="heading heading_h2 mb_12">{{ $t('unified-profile.unified-profile-settings.settings') }}</div>

        <div class="section_declaration_creating section_declaration_creating_big">
          <div class="heading heading_h4 mb_9">{{ $t('unified-profile.unified-profile-settings.personal-data') }}</div>

          <div class="d-input d-input_row mb_6">
            <label class="d-input__label">{{ $t('unified-profile.unified-profile-settings.profile-photo') }}</label>
            <div class="column">
              <div style="position: relative; height: 128px; width: 128px;">
                <i class="lm-upload_avatar--remove" v-if="0" @click.stop="_handleClickDestroyAvatar"></i>
                <label for="lm-upload_avatar" style="cursor: pointer;">
                  <img :src="avatar" alt="Загрузите аватар" class="user-profile_img d-img">
                </label>
              </div>
              <label for="lm-upload_avatar" class="d-input__link d-input__link_blue mt_4" style="cursor: pointer;">{{ $t('unified-profile.unified-profile-settings.download-img') }}</label>
              <input type="file" id="lm-upload_avatar" @change="_handleChangeInputAvatar" accept="image/*" style="visibility: hidden; display: none;">
            </div>
          </div>

          <div class="d-input d-input_row mb_6">
            <label for="firstName" class="d-input__label d-input__label_required">{{ $t('unified-profile.unified-profile-settings.first-name') }}</label>
            <div class="column">
              <input type="text" autocomplete="off"
                     name="firstName" id="firstName"
                     :data-vv-as="$t('unified-profile.unified-profile-settings.first-name')" :placeholder="$t('unified-profile.unified-profile-settings.ivan')"
                     v-validate="'required|min:1|max:255'"
                     v-model="fields['firstName']"
                     :class="[{ 'error': (verrors.has('firstName')) }, 'd-input__field', 'w_100']">
              <template v-if="verrors.has('firstName')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('firstName') }}</div>
              </template>
            </div>
          </div>

          <div class="d-input d-input_row mb_6">
            <label for="lastName" class="d-input__label d-input__label_required">{{ $t('unified-profile.unified-profile-settings.last-name') }}</label>
            <div class="column">
              <input type="text" autocomplete="off"
                     name="lastName" id="lastName"
                     :data-vv-as="$t('unified-profile.unified-profile-settings.last-name')" :placeholder="$t('unified-profile.unified-profile-settings.ivanov')"
                     v-validate="'required|min:1|max:255'"
                     v-model="fields['lastName']"
                     :class="[{ 'error': (verrors.has('lastName')) }, 'd-input__field', 'w_100']">
              <template v-if="verrors.has('lastName')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('lastName') }}</div>
              </template>
            </div>
          </div>

          <div class="d-input d-input_row mb_6">
            <label for="birthday" class="d-input__label d-input__label_required">{{ $t('unified-profile.unified-profile-settings.date-of-birth') }}</label>
            <div class="column">
              <input type="text" autocomplete="off" v-mask-date
                     name="birthday" id="birthday"
                     :data-vv-as="$t('unified-profile.unified-profile-settings.date-of-birth')" :placeholder="$t('unified-profile.unified-profile-settings.dd-mm-yyyy')"
                     v-validate="`date_format:DD.MM.YYYY|required`"
                     v-model="fields['birthday']"
                     :class="[{ 'error': (verrors.has('birthday')) }, 'd-input__field', 'w_100']">
              <template v-if="verrors.has('birthday')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('birthday') }}</div>
              </template>
            </div>
          </div>

          <div class="d-input d-input_row mb_6">
            <label class="d-input__label d-input__label_required">{{ $t('unified-profile.unified-profile-settings.gender') }}</label>

            <div class="column">
              <div class="d-row">
                <div :class="['d-checkbox', 'd-checkbox_button', 'w_100', { mr_4: (index === 0) }]" v-for="(gender, index) in sources['genders']">
                  <input :id="`form__checkbox_declaration_gender_${gender.id}`" type="radio"
                         name="gender" :value="gender.id" v-model="fields['genderId']"
                         :data-vv-as="$t('unified-profile.unified-profile-settings.gender')"
                         class="d-checkbox__mark">
                  <label class="d-checkbox__label w_100" :for="`form__checkbox_declaration_gender_${gender.id}`">{{ gender.text }}</label>
                </div>
              </div>

              <template v-if="(verrors.has('genders'))">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('genders') }}</div>
              </template>
            </div>
          </div>

          <div class="d-input d-input_row mb_6">
            <label for="declaration__country" class="d-input__label d-input__label_required">{{ $t('unified-profile.unified-profile-settings.country') }}</label>

            <div class="column">
              <vue-select :filterable="true" :options="sources['countries']" :reduce="option => option.id"
                :input-id="'declaration__country'"
                :name="'country'"
                :data-vv-name="'countryId'"
                :data-vv-as="$t('unified-profile.unified-profile-settings.country')"
                :placeholder="$t('unified-profile.unified-profile-settings.country-not-chosen')"
                v-model="fields.countryId"
                @input="_handleChangeCountrySelect(...arguments, true, true)"
                :class="[{ 'error': (verrors.has('countryId')) }, 'w_100' ]">
              </vue-select>

              <template v-if="(verrors.has('countryId'))">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('countryId') }}</div>
              </template>
            </div>
          </div>

          <div class="d-input d-input_row mb_6" id="form__select_declaration_city">
            <label for="declaration__city" class="d-input__label d-input__label_required">{{ $t('unified-profile.unified-profile-settings.city') }}</label>

            <div class="column">
              <vue-select :filterable="false" @search="_handleSearchCities" :options="sources['cities']" :reduce="option => option.id"
                :loading="loadingCities"
                :input-id="'declaration__city'"
                :name="'cityId'"
                :data-vv-name="'cityId'"
                :data-vv-as="$t('unified-profile.unified-profile-settings.city')"
                :placeholder="$t('unified-profile.unified-profile-settings.not-chosen')"
                v-model="fields.cityId"
                :disabled="(hasCountry === false)"
                :class="[{ 'error': (verrors.has('cityId')) } ]">
              </vue-select>

              <template v-if="(verrors.has('cityId'))">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('cityId') }}</div>
              </template>
            </div>
          </div>

          <div class="d-textarea d-input_row mb_6">
            <label for="aboutMe" class="d-input__label">{{ $t('unified-profile.unified-profile-settings.About') }}</label>

            <div class="column">
              <div class="d-row" ref="descriptionRow">
                <textarea-autosize autocomplete="off"
                                   name="aboutMe" id="aboutMe"
                                   :data-vv-as="'Описание'" :placeholder="$t('unified-profile.unified-profile-settings.tell-us')"
                                   v-validate="'max:65000'"
                                   v-model="fields['aboutMe']"
                                   :min-height="76" :max-height="350"
                                   :class="[{ 'error': (verrors.has('aboutMe')) }, 'd-textarea', 'w_100' ]">
                </textarea-autosize>
              </div>

              <template v-if="verrors.has('aboutMe')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('aboutMe') }}</div>
              </template>
            </div>
          </div>

          <div class="d-switched__container w_100">
            <div class="d-switched__item">
              <div class="d-switch w_100">
                <label for="representative" class="d-switch__label">
                  {{ $t('unified-profile.unified-profile-settings.representative') }}
                  <tooltip style="line-height: 0" effect="scale" placement="bottom" :content="contentTooltipRepresentative">
                    <svg class="d-tooltip__icon ml_2">
                      <use xlink:href="/dist/img/icons/verification/sprite.svg#icon_info" />
                    </svg>
                  </tooltip>
                </label>
                <input id="representative" type="checkbox" class="d-switch__mark" name="representative" v-model="fields['representative']">
                <label for="representative" class="d-switch__btn"></label>
              </div>
            </div>
          </div>
        </div>
        <div class="section_declaration_creating section_declaration_creating_big">
          <div class="heading heading_h4 mb_9">{{ $t('unified-profile.unified-profile-settings.contacts') }}</div>

          <div class="d-input d-input_row mb_6">
            <label for="telegram" class="d-input__label">Telegram</label>
            <div class="column">
              <input type="tel" autocomplete="off" v-mask-phone
                     id="telegram" name="telegram"
                     :data-vv-as="'Telegram'" :placeholder="'+7 900 000 00 00'"
                     v-validate="'phone'"
                     v-model="fields['telegram']"
                     :class="[{ 'error': (verrors.has('telegram')) }, 'd-input__field']">

              <template v-if="verrors.has('telegram')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('telegram') }}</div>
              </template>
            </div>
          </div>
          <div class="d-input d-input_row mb_6">
            <label for="whatsapp" class="d-input__label">Whatsapp</label>
            <div class="column">
              <input type="tel" autocomplete="off" v-mask-phone
                     id="whatsapp" name="whatsapp"
                     :data-vv-as="'Whatsapp'" :placeholder="'+7 900 000 00 00'"
                     v-validate="'phone'"
                     v-model="fields['whatsapp']"
                     :class="[{ 'error': (verrors.has('whatsapp')) }, 'd-input__field']">

              <template v-if="verrors.has('whatsapp')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('whatsapp') }}</div>
              </template>
            </div>
          </div>
          <div class="d-input d-input_row mb_6">
            <label for="viber" class="d-input__label">Viber</label>
            <div class="column">
              <input type="tel" autocomplete="off" v-mask-phone
                     id="viber" name="viber"
                     :data-vv-as="'Viber'" :placeholder="'+7 900 000 00 00'"
                     v-validate="'phone'"
                     v-model="fields['viber']"
                     :class="[{ 'error': (verrors.has('viber')) }, 'd-input__field']">

              <template v-if="verrors.has('viber')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('viber') }}</div>
              </template>
            </div>
          </div>
          <div class="d-input d-input_row mb_6">
            <label for="vk" class="d-input__label">ВКонтакте</label>
            <div class="column">
              <div class="d-row">
                <div :class="['d-input__prefix-wrap', 'w_100', { 'error': (verrors.has('vk'))}]">
                  <div class="d-input__prefix--prefix">https://vk.com/</div>
                  <div class="d-input__prefix--input w_100">
                    <input type="text" autocomplete="off" v-mask-social
                           id="vk" name="vk"
                           :data-vv-as="'ВКонтакте'" :placeholder="$t('unified-profile.unified-profile-settings.your-account') + ' Вконтакте'"
                           v-validate="'max:50'"
                           v-model="fields['vk']"
                           :class="[{ 'error': (verrors.has('vk')) }, 'd-input__field']">
                    <div class="d-input__prefix--border"></div>
                  </div>
                </div>
              </div>
              <template v-if="verrors.has('vk')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('vk') }}</div>
              </template>
            </div>
          </div>
          <div class="d-input d-input_row mb_6">
            <label for="instagram" class="d-input__label">Instagram</label>
            <div class="column">
              <div class="d-row">
                <div :class="['d-input__prefix-wrap', 'w_100', { 'error': (verrors.has('instagram'))}]">
                  <div class="d-input__prefix--prefix">https://www.instagram.com/</div>
                  <div class="d-input__prefix--input w_100">
                    <input type="text" autocomplete="off" v-mask-social
                           id="instagram" name="instagram"
                           :data-vv-as="'Instagram'" :placeholder="$t('unified-profile.unified-profile-settings.your-account') + ' Instagram'"
                           v-validate="'max:50'"
                           v-model="fields['instagram']"
                           :class="[{ 'error': (verrors.has('instagram')) }, 'd-input__field']">
                    <div class="d-input__prefix--border"></div>
                  </div>
                </div>
              </div>
              <template v-if="verrors.has('instagram')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('instagram') }}</div>
              </template>
            </div>
          </div>
          <div class="d-input d-input_row mb_6">
            <label for="facebook" class="d-input__label">Facebook</label>
            <div class="column">
              <div class="d-row">
                <div :class="['d-input__prefix-wrap', 'w_100', { 'error': (verrors.has('facebook'))}]">
                  <div class="d-input__prefix--prefix">https://www.facebook.com/</div>
                  <div class="d-input__prefix--input w_100">
                    <input type="text" autocomplete="off" v-mask-social
                           id="facebook" name="facebook"
                           :data-vv-as="'Facebook'" :placeholder="$t('unified-profile.unified-profile-settings.your-account') + ' Facebook'"
                           v-validate="'max:50'"
                           v-model="fields['facebook']"
                           :class="[{ 'error': (verrors.has('facebook')) }, 'd-input__field']">
                    <div class="d-input__prefix--border"></div>
                  </div>
                </div>
              </div>
              <template v-if="verrors.has('facebook')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('facebook') }}</div>
              </template>
            </div>
          </div>
          <div class="d-input d-input_row mb_6">
            <label for="youtube" class="d-input__label">Youtube</label>
            <div class="column">
              <div class="d-row">
                <div :class="['d-input__prefix-wrap', 'w_100', { 'error': (verrors.has('youtube'))}]">
                  <div class="d-input__prefix--prefix">https://www.youtube.com/</div>
                  <div class="d-input__prefix--input w_100">
                    <input type="text" autocomplete="off"
                           id="youtube" name="youtube"
                           :data-vv-as="'Youtube'" :placeholder="$t('unified-profile.unified-profile-settings.your-account') + ' Youtube'"
                           v-validate="'max:50'"
                           v-model="fields['youtube']"
                           :class="[{ 'error': (verrors.has('youtube')) }, 'd-input__field']">
                    <div class="d-input__prefix--border"></div>
                  </div>
                </div>
              </div>
              <template v-if="verrors.has('youtube')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('youtube') }}</div>
              </template>
            </div>
          </div>
          <div class="d-input d-input_row">
            <label for="site" class="d-input__label">{{ $t('unified-profile.unified-profile-settings.website') }}</label>
            <div class="column">
              <div class="d-row">
                <input type="text" autocomplete="off"
                       id="site" name="site"
                       :data-vv-as="$t('unified-profile.unified-profile-settings.website')"
                       :placeholder="$t('unified-profile.unified-profile-settings.link')"
                       v-validate="'url'"
                       v-model="fields['site']"
                       :class="[{ 'error': (verrors.has('site')) }, 'd-input__field']">
              </div>
              <template v-if="verrors.has('site')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('site') }}</div>
              </template>
            </div>
          </div>
        </div>
        <div class="section_declaration_creating section_declaration_creating_big">
          <div class="heading heading_h4 d-input_row justify_between align_center mb_9">
            {{ $t('unified-profile.unified-profile-settings.account') }}
            <a href="javascript:void(0)" class="d-input__link d-input__link_red" @click="_handleClickDestroyPage">{{ $t('unified-profile.unified-profile-settings.delete-account') }}</a>
          </div>

          <div class="d-input d-input_row mb_6">
            <label for="phone" class="d-input__label">{{ $t('unified-profile.unified-profile-settings.telephone-number') }}</label>
            <div class="column">
              <div class="d-row align_center justify_flex-end">
                <template v-if="(hasPhone === true)">
                  <a href="javascript:void(0)" class="d-input__change-link" @click="_handleClickDetachPhone">{{ $t('unified-profile.unified-profile-settings.change') }}</a>
                </template>
                <template v-if="(hasPhone === false)">
                  <a href="javascript:void(0)" class="d-input__change-link" @click="_handleClickAttachPhone">{{ $t('unified-profile.unified-profile-settings.add') }}</a>
                </template>

                <input type="tel" autocomplete="off" v-mask-phone
                       id="phone" name="phone"
                       :data-vv-as="$t('unified-profile.unified-profile-settings.telephone-number')" :placeholder="'+7 900 000-00-00'"
                       v-validate="'phone'"
                       v-model="fields['phone']"
                       :disabled="true"
                       :class="[{ 'error': (verrors.has('phone')) }, 'd-input__field']">
              </div>
              <template v-if="verrors.has('phone')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('phone') }}</div>
              </template>
            </div>
          </div>

          <div class="d-input d-input_row mb_6">
            <label for="email" class="d-input__label">E-mail</label>
            <div class="column">
              <div class="d-row align_center justify_flex-end">
                <template v-if="disabled['email']">
                  <a href="javascript:void(0)" class="d-input__change-link" @click="_handleClickChangeDisabled('email')">{{ $t('unified-profile.unified-profile-settings.change') }}</a>
                </template>
                <input type="email" autocomplete="off" autocapitalize=off
                       id="email" name="email"
                       :data-vv-as="'E-mail'" :placeholder="'pochta@gmaill.com'"
                       v-model="fields['email']"
                       v-validate="'email|max:255'"
                       :disabled="disabled['email']"
                       :class="[{ 'error': (verrors.has('email')) }, 'd-input__field']">
              </div>
              <template v-if="verrors.has('email')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('email') }}</div>
              </template>
            </div>
          </div>

          <div class="d-input d-input_row mb_6">
            <label for="password" class="d-input__label">{{ $t('unified-profile.unified-profile-settings.password') }}</label>
            <div class="column">
              <div class="d-row align_center justify_flex-end">
                <template v-if="disabled['password']">
                  <a href="javascript:void(0)" class="d-input__change-link" @click="_handleClickChangeDisabled('password')">{{ $t('unified-profile.unified-profile-settings.change') }}</a>
                </template>
                <input type="password" autocomplete="off" autocapitalize=off
                       id="password" name="password"
                       :data-vv-as="$t('unified-profile.unified-profile-settings.password')" :placeholder="'******'"
                       v-validate="'min:6'"
                       v-model="fields['password']"
                       :disabled="disabled['password']"
                       :class="[{ 'error': (verrors.has('password')) }, 'd-input__field']">
              </div>

              <template v-if="verrors.has('password')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('password') }}</div>
              </template>
            </div>
          </div>

          <div class="d-input d-input_row mb_6">
            <label for="username" class="d-input__label">
              {{ $t('unified-profile.unified-profile-settings.address-page') }}
              <tooltip style="line-height: 0" effect="scale" placement="bottom" :content="contentTooltipPageAddress">
                <svg class="d-tooltip__icon ml_2">
                  <use xlink:href="/dist/img/icons/verification/sprite.svg#icon_info" />
                </svg>
              </tooltip>
            </label>

            <div class="column">
              <div class="d-row align_center justify_flex-end">
                <template v-if="disabled['username']">
                  <a href="javascript:void(0)" class="d-input__change-link" @click="_handleClickChangeDisabled('username')">{{ $t('unified-profile.unified-profile-settings.change') }}</a>
                </template>
                <input type="text" autocomplete="off" autocapitalize=off v-mask-regexp="'\d*[0-9a-z]*'"
                       id="username" name="username"
                       :data-vv-as="$t('unified-profile.unified-profile-settings.address-page')" :placeholder="$t('unified-profile.unified-profile-settings.address-page-description')"
                       v-validate="'min:4|max:20'"
                       v-model="fields['username']"
                       :disabled="disabled['username']"
                       :class="[{ 'error': (verrors.has('username')) }, 'd-input__field']">
              </div>

              <template v-if="verrors.has('username')">
                <div class="d-input__notification d-input__notification_required">{{ verrors.first('username') }}</div>
              </template>
            </div>
          </div>

          <div class="d-switched__container w_100 mb_6">
            <div class="d-switched__item">
              <div class="d-switch w_100">
                <label for="serviceNewsletter" class="d-switch__label">
                  {{ $t('unified-profile.unified-profile-settings.service-mailing') }}
                </label>

                <input id="serviceNewsletter" type="checkbox" class="d-switch__mark" name="serviceNewsletter" v-model="fields['notifications']['service']">
                <label for="serviceNewsletter" class="d-switch__btn"></label>
              </div>

              <div class="d-switch w_100">
                <label for="newsletter" class="d-switch__label">
                  {{ $t('unified-profile.unified-profile-settings.newsletter') }}
                </label>

                <input id="newsletter" type="checkbox" class="d-switch__mark" name="newsletter" v-model="fields['notifications']['news']">
                <label for="newsletter" class="d-switch__btn"></label>
              </div>
            </div>
          </div>

          <div class="d-row ml_auto" style="width: 234px">
            <lm-loader v-if="(loading === true)"></lm-loader>
            <template v-if="loading === false">
              <button class="d-btn d-btn_primary flex_1" @click="_handleClickSaveSettings">{{ $t('unified-profile.unified-profile-settings.save') }}</button>
            </template>
          </div>
        </div>
      </div>

      <div class="sidebar page__sidebar page__sidebar_declaration_creating">
        <div class="sidebar__content" :style="{ zIndex: 10, marginBottom: '50px' }" v-sticky="{ zIndex: 10, stickyTop: 104 }">

          <div class="section_declaration_creating section_declaration_creating_big pt_0">
            <lm-loader v-if="(loading === true)"></lm-loader>
            <template v-if="loading === false">
              <button class="d-btn d-btn_primary w_100" @click="_handleClickSaveSettings">{{ $t('unified-profile.unified-profile-settings.save') }}</button>
            </template>
          </div>

          <div class="section_declaration_creating section_declaration_creating_big">
            <div class="column mb_6">
              <div class="heading heading_h5">{{ $t('unified-profile.unified-profile-settings.checklist') }}</div>
              <div class="sidebar__text">
                {{ $t('unified-profile.unified-profile-settings.fill-in') }}
              </div>
            </div>

            <ul class="list list_required-fields">
              <li :class="['list__item', { 'list__item_active': (hasFirstName === true) }]">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                {{ $t('unified-profile.unified-profile-settings.first-name') }}
              </li>
              <li :class="['list__item', { 'list__item_active': (hasLastName === true) }]">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                {{ $t('unified-profile.unified-profile-settings.last-name') }}
              </li>
              <li :class="['list__item', { 'list__item_active': (hasBirthday === true) }]">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                {{ $t('unified-profile.unified-profile-settings.date-of-birth') }}
              </li>
              <li :class="['list__item', { 'list__item_active': (hasGender === true) }]">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                {{ $t('unified-profile.unified-profile-settings.gender') }}
              </li>
              <li :class="['list__item', { 'list__item_active': (hasCountry === true) }]">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                {{ $t('unified-profile.unified-profile-settings.country') }}
              </li>
              <li :class="['list__item', { 'list__item_active': (hasCity === true) }]">
                <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
                  <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
                </svg>
                {{ $t('unified-profile.unified-profile-settings.city') }}
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
    <cropper-avatar-modal></cropper-avatar-modal>
    <lm-main-footer class="footer-static grey"></lm-main-footer>
  </div>
</template>

<script>
  import { AVATAR } from '@utils'
  import cookies from 'js-cookie'
  import User from '@modules/User'
  import { mapGetters } from 'vuex'
  import { createHelpers } from 'vuex-map-fields'
  import { redirect, HEADER_HEIGHT, resizeImage } from '@utils'
  import CropperAvatarModal from '@components/User/Modals/CropperAvatar.vue'

  import AjaxSelectCity from '@modules/Geo/mixins/AjaxSelectCity'

  const { mapFields } = createHelpers({
    getterType: 'user/getField',
    mutationType: 'user/updateField'
  })

  export default {
    mixins: [AjaxSelectCity],
    components: { CropperAvatarModal },
    metaInfo: {
      title: 'Настройки'
    },
    async asyncData ({ store, route }) {
      const initializedSources = store.getters['user/getInitializedSettingsSources']

      if (!initializedSources) {
        await store.dispatch('user/getSourcesSettings')
      }

      await store.dispatch('user/getFieldsSettings')
    },
    data () {
      return {
        loading: false,
        disabled: {
          email: true,
          password: true,
          username: true
        }
      }
    },
    computed: {
      ...mapFields({ fields: 'settings.fields' }),
      ...mapGetters({
        user: 'auth/getAuthUser',
        sources: 'user/getSettingsSources'
      }),
      hasFirstName () {
        return (!!this.fields.firstName)
      },
      hasLastName () {
        return (!!this.fields.lastName)
      },
      hasBirthday () {
        return (!!this.fields.birthday)
      },
      hasGender () {
        return (!!this.fields.genderId)
      },
      hasCountry () {
        return (!!this.fields.countryId)
      },
      hasCity () {
        return (!!this.fields.cityId)
      },
      hasPhone () {
        return (!!this.fields.phone)
      },
      contentTooltipRepresentative () {
        return `<div style="max-width: 164px;">
          <span style="display: block; margin: 0;">
              Включите фильтр, если вы являетесь представителем компании или агенства
          </span>
        </div>`
      },
      contentTooltipPageAddress () {
        return `<div style="max-width: 226px; width: 226px">
          <span style="display: block; margin: 0;">
              Адрес страницы может содержать только буквы (A–Z), цифры (0–9) и точки (.), без расширений (.com, .net)
          </span>
        </div>`
      },
      avatar () {
        const { avatar: { '183x183': path } } = this.fields
        return path
      }
    },
    watch: {
      'fields.vk' (val) {
        let href = User.validVk(val)
        if (href) {
          this.fields['vk'] = href
        }
      },
      'fields.facebook' (val) {
        let href = User.validFacebook(val)
        if (href) {
          this.fields['facebook'] = href
        }
      },
      'fields.instagram' (val) {
        let href = User.validInstagram(val)
        if (href) {
          this.fields['instagram'] = href
        }
      },
      'fields.youtube' (val) {
        let href = User.validYoutube(val)
        if (href) {
          this.fields['youtube'] = href
        }
      }
    },
    beforeDestroy () {
      this.$root.$off('detach-phone')
      this.$root.$off('attached-phone')
      this.$root.$off('updated-avatar')
    },
    created () {
      this.$root.$on('detach-phone', () => {
        this.fields.phone = null
      })

      this.$root.$on('attached-phone', (phone) => {
        this.fields.phone = phone
      })

      this.$root.$on('updated-avatar', (data) => {
        Object.assign(this.fields['avatar'], data)
      })
    },
    methods: {
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
      _handleClickChangeDisabled (field) {
        if (this.disabled.hasOwnProperty(field)) {
          this.disabled[field] = !Boolean(this.disabled[field])
        } else throw new Error('Not found disabled field.')
      },
      _handleClickSaveSettings () {
        this._handleValidateFields().then(() => {
            this._saveSettings().then(() => {
              this.$notify({
                type: 'success',
                title: 'Успешно',
                text: 'Настройки успешно сохранены.'
              })

              this.$store.dispatch('auth/getUserByAPI').then((user) => {
                const { username } = user
                this.$router.push({ name: 'user.show' , params: { username }})
              }).catch(() => {})
            }).catch(() => this._scrollToErrorFields())
        }).catch(() => this._scrollToErrorFields())
      },
      _scrollToErrorFields () {
        let el = document.getElementsByClassName('error')
        if (el && el.length) this.$scrollTo(el[0], 500, {  offset: (-40 - HEADER_HEIGHT) })
        this.$notify({ type: 'error', title: 'Ошибка', text: 'Проверьте правильность ввода.' })
      },
      _saveSettings () {
        return new Promise((resolve, reject) => {

          this.loading = true

          let data = this._.cloneDeep(this.fields)

          if (this.disabled['email']) {
            this.$delete(data, 'email')
          }

          if (this.disabled['password']) {
            this.$delete(data, 'password')
          }

          if (this.disabled['username']) {
            this.$delete(data, 'username')
          }

          this.$api.patch('api/v2/settings', data).then((response) => {
            const { data: { data } } = response

            this.loading = false
            resolve && resolve(data)
          }, (error) => {
            const { response: { data, status }} = error

            this.loading = false
            this.$notify({
              type: 'error',
              title: 'Ошибка',
              text: 'Произошла ошибка при сохранении настроек.'
            })

            reject && reject()

            if (status === 422) {
              this.$setLaravelValidationErrorsFromResponse(data)
            } else throw new Error('Error save settings')
          })
        })
      },
      _handleClickDetachPhone () {
        this.$root.$emit('open-modal-detach-phone')
      },
      _handleClickAttachPhone () {
        this.$root.$emit('open-modal-attach-phone')
      },
      _handleClickDestroyPage () {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'удалить',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите удалить аккаунт и все данные в нем?'
        }).then((args) => {
          this.$api.delete(('/api/v1/users')).then((response) => {
            this.$gtm.trackEvent({ event: 'delete_account' })
            this.$notify({ type: 'success', title: 'Успешно', text: 'Аккаунт успешно удален.' })
            this.logout()
          }, (error) => {
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
            throw new Error('Error destroy account.')
          })
        }).catch((args) => {})
      },
      async logout () {
        try {
          cookies.remove('auth_user')
          let logout = await this.$auth.logout()

          let redirection = '/' // Default route
          this.$store.dispatch('auth/destroyToken', { reload: false }).then(response => {
            redirect(redirection)
          }, err => {
            redirect(redirection)
            if (err) {}
          })
        } catch (error) {
          // Error in Login
          console.log(error)
          redirect('/')
        }
      },
      _handleChangeInputAvatar (el) {
        let files = el.target.files || el.dataTransfer.files;
        if (!files.length)
          return;

        const file = el.target.files[0];

        if (!file.type.includes('image/')) {
          console.log('Please select an image file')
          return
        }

        if (typeof FileReader === 'function') {
          const reader = new FileReader()

          reader.onload = (event) => {
            const next = (src, file) => {
              this._handleUploadAvatar(file).then(({ path }) => {
                this.fields['avatar']['path'] = src
                this.fields['avatar']['183x183'] = src
                this.$store.dispatch('auth/getUserByAPI')
                this.$root.$emit('open-modal-cropper-avatar', src)
                // this.$store.dispatch('auth/setUserField', { field: 'avatar.84x84', value: path })
                this.$notify({ type: 'success', title: 'Успешно', text: 'Аватар успешно загружен.' })
              }).catch((data, status) => {
                this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
              })
            }

            resizeImage(event.target.result, 1280, null, 'image/png').then(({ src, blob }) => {
              next(src, blob)
            }).catch(err => {
              next(event.target.result, file)
              console.error(err);
            })
          };
          reader.readAsDataURL(file);
        } else console.log('Sorry, FileReader API not supported');
      },
      _handleUploadAvatar (file) {
        return new Promise((resolve, reject) => {
          const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })

          let data = new FormData();
          data.append('image', file, 'avatar.png')

          // TODO: нужен ответ со всеми прессетами
          this.$api.post('api/v2/settings/avatar/original', data).then((response) => {
            const { data: { data: { path } } } = response

            loader.hide()
            resolve({ path })

          }, (error) => {
            loader.hide()

            const { response: { data, status }} = error

            if (status === 422 && data.errors) {
              const { errors } = data

            } else throw new Error('Error upload avatar')

            reject(data, status)
          })
        })
      },
      _handleClickDestroyAvatar () {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'удалить',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите удалить аватар?'
        }).then((args) => {
          const loader = this.$loading.show({ loader: 'dots', color: '#0063da' })
          this.$api.delete(('api/v2/settings/avatar')).then((response) => {
            loader.hide()
            this.$store.dispatch('auth/getUserByAPI')
            this.fields['avatar']['183x183'] = AVATAR
            // this.$store.dispatch('auth/setUserField', { field: 'avatar.84x84', value: AVATAR })
            this.$notify({ type: 'success', title: 'Успешно', text: 'Аватар успешно удален.' })
          }, (error) => {
            loader.hide()
            this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
            throw new Error('Error delete avatar.')
          })
        }).catch((args) => {})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tooltip .tooltip-inner, .tooltip {
    max-width: 258px
  }

  .user-profile_img {
    width: 128px;
    height: 128px;
    object-fit: cover;
    border-radius: 8px;
    box-sizing: border-box;
  }

  .lm-upload_avatar--remove {
    border-radius: 8px;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"> <path fill="%23ffffff" d="M10.467 3.766L7.995 6.238 5.59 3.834c-.424-.425-.99-.425-1.413-.001l-.283.282c-.423.424-.423.99.001 1.414L6.3 7.933l-2.472 2.472c-.423.424-.423.99.001 1.413l.354.354c.424.424.99.425 1.413 0l2.402-2.4 2.404 2.403c.424.425.99.425 1.413.001l.353-.353c.424-.424.424-.989 0-1.413L9.691 7.935l2.401-2.402c.424-.423.424-.989 0-1.413l-.284-.283c-.353-.495-.99-.424-1.342-.071z"/></svg>') no-repeat center, rgba(40, 42, 54, 0.64);
    overflow: hidden;
    width: 24px;
    height: 24px;
    display: block;
    position: absolute;
    right: 8px;
    top: 8px;
    z-index: 4;
    cursor: pointer;
  }
</style>
