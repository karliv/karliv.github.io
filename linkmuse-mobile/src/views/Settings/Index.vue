<template>
  <div>
    <div class="page page_declaration">
      <div class="page-inner__container">
        <div class="page__body page-inner__body_declaration">
          <div class="block block_declaration bt_none">
            <div class="heading heading_h4 mb_0">
              {{ $t('unified-profile.profile-settings.settings') }}
            </div>
          </div>

          <div class="block block_declaration">
            <div class="m-text_bold mb_4">
              {{ $t('unified-profile.profile-settings.personal-data') }}
            </div>

            <div class="column mb_6">
              <div class="label input__label">
                {{ $t('unified-profile.profile-settings.profile-img') }}
              </div>
              <div class="mb_4" style="position: relative; height: 128px; width: 128px;">
                <i class="lm-upload_avatar--remove" v-if="0" @click.stop="_handleClickDestroyAvatar"></i>
                <label for="upload_avatar" class="avatar-container avatar-container_setting mb_4">
                  <img class="d-img" :src="avatar" alt="Загрузите аватар">
                </label>
              </div>
              <label for="upload_avatar" class="m-text_bold color_main">{{ $t('unified-profile.profile-settings.download-image') }}</label>
              <input type="file" id="upload_avatar" @change="_handleChangeInputAvatar" accept="image/*" style="visibility: hidden; display: none;">
            </div>


            <div class="form__group form__group_declaration">
              <label for="firstName" class="label input__label">
                {{ $t('unified-profile.profile-settings.first-name') }}
                <span class="label_declaration_required">•</span>
              </label>
              <input type="text" autocomplete="off"
                     name="firstName" id="firstName"
                     :data-vv-as="$t('unified-profile.profile-settings.first-name')" :placeholder="$t('unified-profile.profile-settings.ivan')"
                     v-validate="'required|min:2|max:255'"
                     v-model="fields['firstName']"
                     :class="[{ 'error': (verrors.has('firstName')) }, 'input', 'form__input', 'form__input_declaration']">
              <template v-if="(verrors.has('firstName'))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('firstName') }}</div>
              </template>
            </div>

            <div class="form__group form__group_declaration">
              <label for="lastName" class="label input__label">
                {{ $t('unified-profile.profile-settings.last-name') }}
                <span class="label_declaration_required">•</span>
              </label>
              <input type="text" autocomplete="off"
                     name="lastName" id="lastName"
                     :data-vv-as="$t('unified-profile.profile-settings.last-name')" :placeholder="$t('unified-profile.profile-settings.ivanov')"
                     v-validate="'required|min:2|max:255'"
                     v-model="fields['lastName']"
                     :class="[{ 'error': (verrors.has('lastName')) }, 'input', 'form__input', 'form__input_declaration']">
              <template v-if="(verrors.has('lastName'))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('lastName') }}</div>
              </template>
            </div>

            <div class="form__group form__group_declaration">
              <label for="birthday" class="label input__label">
                {{ $t('unified-profile.profile-settings.date-of-birth') }}
                <span class="label_declaration_required">•</span>
              </label>
              <input type="text" autocomplete="off" v-mask-date
                     name="birthday" id="birthday"
                     :data-vv-as="$t('unified-profile.profile-settings.date-of-birth')" :placeholder="$t('unified-profile.profile-settings.dd-mm-yyyy')"
                     v-validate="`date_format:DD.MM.YYYY|required`"
                     v-model="fields['birthday']"
                     :class="[{ 'error': (verrors.has('birthday')) }, 'input', 'form__input', 'form__input_declaration']">
              <template v-if="(verrors.has('birthday'))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('birthday') }}</div>
              </template>
            </div>

            <div class="form__group form__group_declaration">
              <label class="label input__label">
                {{ $t('unified-profile.profile-settings.gender') }}
                <span class="label_declaration_required">•</span>
              </label>
              <div class="form__row form__row_declaration">
                <div class="form__column form__column_declaration" v-for="(gender) in sources['genders']">
                  <input :id="`form__checkbox_declaration_gender_${gender.id}`" type="radio"
                         name="gender" :value="gender.id" v-model="fields['genderId']"
                         class="form__checkbox form__checkbox_declaration form__checkbox_declaration_gender">
                  <label :for="`form__checkbox_declaration_gender_${gender.id}`" class="checkbox__label_declaration checkbox__label_declaration_gender">{{ gender.text }}</label>
                </div>
              </div>
            </div>

            <div class="form__group form__group_declaration">
              <label class="label input__label" for="declaration__country">
                {{ $t('unified-profile.profile-settings.country') }}
                <span class="label_declaration_required">•</span>
              </label>
              <lm-select :class="[{ 'error': (verrors.has('countryId')) }]"
                         :searchable="true" :filterable="true" :title="'Выбор страны'"
                         data-vv-name="countryId"
                         :data-vv-as="$t('unified-profile.profile-settings.country')"
                         v-model="fields.countryId"
                         :input-required="false"
                         input-id="declaration__country"
                         input-name="country"
                         :placeholder="$t('board-create-casting.new-casting.category-not-selected')"
                         :placeholderDisabled="true"
                         :placeholderHidden="true"
                         label=""
                         @input="_handleChangeCountrySelect(...arguments, true, true)"
                         v-validate="'required'"
                         :options="sources['countries']">
              </lm-select>
              <template v-if="(verrors.has('countryId'))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('countryId') }}</div>
              </template>
            </div>

            <div class="form__group form__group_declaration">
              <label for="declaration__city" class="label input__label">
                {{ $t('unified-profile.profile-settings.city') }}
                <span class="label_declaration_required">•</span>
              </label>
              <lm-select :class="[{ 'error': (verrors.has('cityId')) }]"
                         @search="_handleSearchCities" :searchable="true" :filterable="false" :loading="loadingCities" :title="'Выбор города'"
                         data-vv-name="cityId"
                         :data-vv-as="$t('unified-profile.profile-settings.city')"
                         :input-required="false"
                         v-model="fields.cityId"
                         input-id="declaration__city"
                         input-name="city"
                         :placeholder="$t('board-create-casting.new-casting.city-not-selected')"
                         :placeholderDisabled="true"
                         :placeholderHidden="true"
                         label=""
                         v-validate="'required'"
                         :disabled="(hasCountry === false)"
                         :options="sources['cities']">
              </lm-select>
              <template v-if="(verrors.has('cityId'))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('cityId') }}</div>
              </template>
            </div>

            <div class="form__group form__group_declaration">
              <label for="aboutMe" class="label textarea__label textarea__label_declaration">
                {{ $t('unified-profile.profile-settings.about') }}
              </label>
              <textarea autocomplete="off"
                        name="aboutMe" id="aboutMe"
                        :data-vv-as="'Описание'" :placeholder="$t('unified-profile.profile-settings.tell-us')"
                        v-validate="'max:65000'"
                        v-model="fields['aboutMe']"
                        :style="{ minHeight: '76px' }"
                        :class="[{ 'error': (verrors.has('aboutMe')) }, 'textarea', 'form__textarea', 'form__textarea_declaration', 'lm-m-textarea-profile-settings']">
                    </textarea>
              <template v-if="(verrors.has('aboutMe'))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('aboutMe') }}</div>
              </template>
            </div>

            <div class="form__group form__group_declaration form__group_declaration_switch">
              <div class="form__row form__row_declaration form__row_declaration_payment">
                <div class="switch switch_declaration">
                  <label for="representative" class="m-text_bold color_gray-2">{{ $t('unified-profile.profile-settings.representative') }}</label>
                  <input id="representative" type="checkbox" class="switch__mark" name="representative" v-model="fields['representative']">
                  <label for="representative" class="switch__btn"></label>
                </div>
              </div>
              <div class="switch__declaration_description">
                <span>{{ $t('unified-profile.profile-settings.turn-on') }}</span>
              </div>
            </div>
          </div>

          <div class="block block_declaration">
            <div class="m-text_bold mb_4">
              {{ $t('unified-profile.profile-settings.contacts') }}
            </div>

            <div class="form__group form__group_declaration">
              <label for="telegram" class="label input__label">
                Telegram
              </label>
              <input type="tel" autocomplete="off" v-mask-phone
                     id="telegram" name="telegram"
                     :data-vv-as="'Telegram'" :placeholder="'+7 900 000 00 00'"
                     v-validate="'phone'"
                     v-model="fields['telegram']"
                     :class="[{ 'error': (verrors.has('telegram')) }, 'input', 'form__input', 'form__input_declaration']">
              <template v-if="(verrors.has('telegram'))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('telegram') }}</div>
              </template>
            </div>
            <div class="form__group form__group_declaration">
              <label for="whatsapp" class="label input__label">
                Whatsapp
              </label>
              <input type="tel" autocomplete="off" v-mask-phone
                     id="whatsapp" name="whatsapp"
                     :data-vv-as="'Whatsapp'" :placeholder="'+7 900 000 00 00'"
                     v-validate="'phone'"
                     v-model="fields['whatsapp']"
                     :class="[{ 'error': (verrors.has('telegram')) }, 'input', 'form__input', 'form__input_declaration']">
              <template v-if="(verrors.has('whatsapp'))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('telegram') }}</div>
              </template>
            </div>
            <div class="form__group form__group_declaration">
              <label for="viber" class="label input__label">
                Viber
              </label>
              <input type="tel" autocomplete="off" v-mask-phone
                     id="viber" name="viber"
                     :data-vv-as="'Viber'" :placeholder="'+7 900 000 00 00'"
                     v-validate="'phone'"
                     v-model="fields['viber']"
                     :class="[{ 'error': (verrors.has('telegram')) }, 'input', 'form__input', 'form__input_declaration']">
              <template v-if="(verrors.has('viber'))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('viber') }}</div>
              </template>
            </div>
            <div class="form__group form__group_declaration lm-input-wrap prefix">
              <label for="vk" class="label input__label">
                ВКонтакте
              </label>
              <div :class="['lm-input-prefix', { 'error': (verrors.has('vk'))}]">
                <div class="lm-input-prefix-text" @click="onFocus()">vk.com/</div>
                <input type="text" autocomplete="off"
                       id="vk" name="vk"
                       :data-vv-as="'ВКонтакте'" placeholder="id"
                       v-validate="'max:50'"
                       v-model="fields['vk']"
                       :class="[{ 'error': (verrors.has('vk')) }, 'input', 'form__input', 'form__input_declaration']">
              </div>

              <template v-if="(verrors.has('vk'))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('vk') }}</div>
              </template>
            </div>
            <div class="form__group form__group_declaration lm-input-wrap prefix">
              <label for="instagram" class="label input__label">
                Instagram
              </label>
              <div :class="['lm-input-prefix', { 'error': (verrors.has('instagram'))}]">
                <div class="lm-input-prefix-text" @click="onFocus()">instagram.com/</div>
                <input type="text" autocomplete="off"
                       id="instagram" name="instagram"
                       :data-vv-as="'Instagram'" placeholder="id"
                       v-validate="'max:50'"
                       v-model="fields['instagram']"
                       :class="[{ 'error': (verrors.has('instagram')) }, 'input', 'form__input', 'form__input_declaration']">
              </div>

              <template v-if="(verrors.has('instagram'))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('instagram') }}</div>
              </template>
            </div>
            <div class="form__group form__group_declaration lm-input-wrap prefix">
              <label for="facebook" class="label input__label">
                Facebook
              </label>
              <div :class="['lm-input-prefix', { 'error': (verrors.has('facebook'))}]">
                <div class="lm-input-prefix-text" @click="onFocus()">facebook.com/</div>
                <input type="text" autocomplete="off"
                       id="facebook" name="facebook"
                       :data-vv-as="'Facebook'" placeholder="id"
                       v-validate="'max:50'"
                       v-model="fields['facebook']"
                       :class="[{ 'error': (verrors.has('facebook')) }, 'input', 'form__input', 'form__input_declaration']">
              </div>

              <template v-if="(verrors.has('facebook'))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('facebook') }}</div>
              </template>
            </div>
            <div class="form__group form__group_declaration lm-input-wrap prefix">
              <label for="youtube" class="label input__label">
                Youtube
              </label>
              <div :class="['lm-input-prefix', { 'error': (verrors.has('youtube'))}]">
                <div class="lm-input-prefix-text" @click="onFocus()">youtube.com/user/</div>
                <input type="text" autocomplete="off" v-mask-social
                       id="youtube" name="youtube"
                       :data-vv-as="'Youtube'" placeholder="id"
                       v-validate="'max:50'"
                       v-model="fields['youtube']"
                       :class="[{ 'error': (verrors.has('youtube')) }, 'input', 'form__input', 'form__input_declaration']">
              </div>

              <template v-if="(verrors.has('youtube'))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('youtube') }}</div>
              </template>
            </div>
            <div class="form__group form__group_declaration">
              <label for="site" class="label input__label">
                {{ $t('unified-profile.profile-settings.website') }}
              </label>
              <input type="text" autocomplete="off"
                     id="site" name="site"
                     :data-vv-as="'Сайт'" :placeholder="$t('unified-profile.profile-settings.link')"
                     v-validate="'url'"
                     v-model="fields['site']"
                     :class="[{ 'error': (verrors.has('site')) }, 'input', 'form__input', 'form__input_declaration']">
              <template v-if="(verrors.has('site'))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('site') }}</div>
              </template>
            </div>
          </div>

          <div class="block block_declaration">
            <div class="m-text_bold mb_4">
              Безопасность
            </div>

            <template v-if="(hasEmail === false) || ((hasPhone === false))">
              <div class="form__group form__group_declaration">
                <div class="section__hint">
                  <div class="heading heading_h5">
                    Подумайте о безопасности
                  </div>
                  <template v-if="(hasEmail === false)">
                    <div class="color_gray-2 mb_2">
                      Добавьте почту, для восстановления доступа к своей странице
                    </div>
                    <a href="javascript:void(0)" class="m-text_bold color_main" @click="_handleClickChangeDisabledEmail">Добавить</a>
                  </template>

                  <template v-else-if="(hasPhone === false)">
                    <div class="color_gray-2 mb_2">
                      Добавьте номер телефона, для восстановления доступа к своей странице, при утрате почты
                    </div>
                    <a href="javascript:void(0)" class="m-text_bold color_main" @click="_handleClickChangeDisabledPhone">Добавить</a>
                  </template>
                </div>
              </div>
            </template>

            <div class="form__group form__group_declaration">
              <label for="phone" class="label input__label">
                {{ $t('unified-profile.profile-settings.telephone-number') }}
              </label>
              <div class="column justify_center align_flex-end position_relative">
                <template v-if="(phone.loading === false)">
                  <template v-if="(disabled['phone'] === true)">
                    <a href="javascript:void(0)" class="form__input_change-link" @click="_handleClickChangeDisabledPhone">
                      <template v-if="(hasPhone === true)">{{ $t('unified-profile.profile-settings.change') }}</template>
                      <template v-if="(hasPhone === false)">{{ $t('unified-profile.profile-settings.add') }}</template>
                    </a>
                  </template>
                  <template v-if="(disabled['phone'] === false)">
                    <a href="javascript:void(0)" class="form__input_change-link" @click="_handleClickReturnChangeDisabledPhone">Отменить</a>
                  </template>
                </template>
                <template v-if="(phone.loading === true)">
                  <div class="form__input_change-link"><div class="vs__spinner" style="opacity: 1;">Загрузка...</div></div>
                </template>

                <input type="tel" autocomplete="off" v-mask-phone
                       id="phone" name="phone" ref="phone"
                       :data-vv-as="$t('unified-profile.profile-settings.telephone-number')" :placeholder="'+7 900 000-00-00'"
                       v-validate="'phone'"
                       v-model="fields['phone']"
                       :disabled="disabled['phone']"
                       @keyup.enter="_handleClickAttachPhone"
                       class="input form__input form__input_declaration">
              </div>

              <template v-if="(verrors.has('phone'))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('phone') }}</div>
              </template>

              <template v-if="(disabled['phone'] === false)">
                <div class="d-row mt_4">
                  <button class="btn btn_primary" :disabled="(hasPhoneField === false  || phone.loading === true)" @click="_handleClickAttachPhone">
                    {{ hasPhone === false ? 'Добавить' : 'Изменить'}}
                  </button>
                </div>
              </template>
            </div>

            <div class="form__group form__group_declaration">
              <label for="email" class="label input__label">
                Почта
              </label>
              <div class="column justify_center align_flex-end position_relative">
                <template v-if="(disabled['email'] === true)">
                  <a href="javascript:void(0)" class="form__input_change-link" @click="_handleClickChangeDisabledEmail">
                    <template v-if="(hasEmail === true)">{{ $t('unified-profile.profile-settings.change') }}</template>
                    <template v-if="(hasEmail === false)">Добавить</template>
                  </a>
                </template>
                <template v-if="(disabled['email'] === false)">
                  <a href="javascript:void(0)" class="form__input_change-link" @click="_handleClickReturnChangeDisabledEmail">Отменить</a>
                </template>

                <input type="email" autocomplete="off" autocapitalize=off
                       id="email" name="email" ref="email"
                       :data-vv-as="'Почта'" :placeholder="'pochta@gmaill.com'"
                       v-model="fields['email']"
                       v-validate="'email|max:255'"
                       :disabled="disabled['email']"
                       @keyup.enter="_handleClickAttachEmail"
                       :class="[{ 'error': (verrors.has('email')) }, 'input', 'form__input', 'form__input_declaration']">
              </div>

              <template v-if="(verrors.has('email'))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('email') }}</div>
              </template>

              <template v-if="(disabled['email'] === false)">
                <div class="d-row mt_4">
                  <button class="btn btn_primary" :disabled="(hasEmailField === false)" @click="_handleClickAttachEmail">
                    {{ hasEmail === false ? 'Добавить' : 'Изменить'}}
                  </button>
                </div>
              </template>

              <template v-if="(email['success'] === true)">
                <div class="section__hint mt_4">
                  <div class="heading heading_h5">
                    Проверьте почту
                  </div>
                  <div class="color_gray-1">
                    Мы выслали вам письмо для подтверждения почты
                  </div>
                </div>
              </template>
            </div>
            <div class="form__group form__group_declaration">
              <label for="password" class="label input__label">
                {{ $t('unified-profile.profile-settings.password') }}
              </label>
              <div class="column justify_center align_flex-end position_relative">
                <template v-if="disabled['password']">
                  <a href="javascript:void(0)" class="form__input_change-link" @click="_handleClickChangeDisabledPassword">{{ $t('unified-profile.profile-settings.change') }}</a>
                </template>
                <template v-if="(disabled['password'] === false)">
                  <a href="javascript:void(0)" class="form__input_change-link" @click="_handleClickReturnChangeDisabledPassword">Отменить</a>
                </template>
                <input type="password" autocomplete="off" autocapitalize=off
                       id="password" name="password" ref="password"
                       :data-vv-as="$t('unified-profile.profile-settings.password')" :placeholder="'Введите пароль'"
                       v-validate="'min:6'"
                       :disabled="disabled['password']"
                       v-model="fields['password']"
                       :class="[{ 'error': (verrors.has('password')) }, 'input', 'form__input', 'form__input_declaration']">
                <template v-if="(verrors.has('password'))">
                  <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('password') }}</div>
                </template>
              </div>
            </div>

            <div class="form__group form__group_declaration">
              <label for="username" class="label input__label">
                {{ $t('unified-profile.profile-settings.address-page') }}
              </label>
              <div :class="['form__group', 'form__group_declaration', 'form__group_declaration_switch',
              { 'error': (verrors.has('username')), 'disabled': disabled['username'] }]">
                <div class="form__row form__row_declaration form__row_declaration_payment p_0">
                  <div class="column justify_center align_flex-end position_relative">
                    <template v-if="disabled['username']">
                      <a href="javascript:void(0)" class="form__input_change-link" @click="_handleClickChangeDisabledUsername">{{ $t('unified-profile.profile-settings.change') }}</a>
                    </template>
                    <template v-if="(disabled['username'] === false)">
                      <a href="javascript:void(0)" class="form__input_change-link" @click="_handleClickReturnChangeDisabledUsername">Отменить</a>
                    </template>
                    <input type="text" autocomplete="off" autocapitalize=off v-mask-regexp="'\d*[a-z._-][0-9a-z\d._-]*'"
                         id="username" name="username" ref="username"
                         :data-vv-as="$t('unified-profile.profile-settings.address-page')" :placeholder="'Введите адрес страницы'"
                         v-validate="'min:4|max:20'"
                         :disabled="disabled['username']"
                         v-model="fields['username']"
                         :class="[{ 'error': (verrors.has('username')) }, 'bd_none']">
                  </div>
                </div>
                <template v-if="(disabled['username'] === false)">
                  <div class="switch__declaration_description">
                  <span class="">Адрес страницы может содержать только буквы (A–Z), цифры (0–9) и точки (.), без расширений
                    (.com, .net)
                  </span>
                  </div>
                </template>
              </div>
              <template v-if="(verrors.has('username'))">
                <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first('username') }}</div>
              </template>
            </div>

            <div class="form__group form__group_declaration form__group_declaration_switch">
              <div class="form__row form__row_declaration form__row_declaration_payment">
                <div class="switch switch_declaration">
                  <label for="serviceNewsletter" class="m-text_bold color_gray-2">{{ $t('unified-profile.profile-settings.service-mailing') }}</label>
                  <input id="serviceNewsletter" type="checkbox" class="switch__mark" name="serviceNewsletter" v-model="fields['notifications']['service']">
                  <label for="serviceNewsletter" class="switch__btn"></label>
                </div>
                <div class="switch switch_declaration">
                  <label for="newsletter" class="m-text_bold color_gray-2">{{ $t('unified-profile.profile-settings.newsletter') }}</label>
                  <input id="newsletter" type="checkbox" class="switch__mark" name="newsletter" v-model="fields['notifications']['news']">
                  <label for="newsletter" class="switch__btn"></label>
                </div>
              </div>
            </div>

            <a href="javascript:void(0)" class="m-text_bold color_support-1" @click="_handleClickDestroyPage">{{ $t('unified-profile.profile-settings.delete-account') }}</a>
          </div>
        </div>

        <div class="page__footer page__footer_declaration">
          <div class="page__block_declaration">
            <div class="row justify_between">
              <button class="btn btn_secondary" @click="_handleClickPreviousPage">
                {{ $t('unified-profile.profile-settings.back') }}
              </button>
              <button class="btn btn_primary" @click="_handleClickSaveSettings">
                {{ $t('unified-profile.profile-settings.save') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <cropper-avatar-modal></cropper-avatar-modal>
  </div>
</template>

<script>
  import { AVATAR } from '@utils'
  import { mapGetters } from 'vuex'
  import { Indicator, Toast } from 'mint-ui'
  import { createHelpers } from 'vuex-map-fields'
  import { VK, FB, GOOGLE } from '@modules/oauth/native'
  import { resizeImage, has, isBrowser, isNative } from '@utils'
  import CropperAvatarModal from '@components/User/Modals/CropperAvatar.vue'

  import User from '@modules/User'
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
      let promises = []
      const initializedSources = store.getters['user/getInitializedSettingsSources']

      if (!initializedSources) {
        await store.dispatch('user/getSourcesSettings')
      }

      await store.dispatch('user/getFieldsSettings')
    },
    data () {
      return {
        avatarCrop: {
          modal: false,
          crop: null
        },
        isNative: true,
        username: { default: null },
        phone: { token: null, default: null, loading: false },
        email: { default: null, success: false, loading: false },
        loading: false,
        disabled: {
          phone: true,
          email: true,
          password: true,
          username: true
        }
      }
    },
    computed: {
      ...mapFields({ fields: 'settings.fields' }),
      ...mapGetters({
        hasEmail: 'auth/hasEmail',
        hasPhone: 'auth/hasPhone',
        user: 'auth/getAuthUser',
        sources: 'user/getSettingsSources'
      }),
      hasCountry () {
        return (!!this.fields.countryId)
      },
      hasCity () {
        return (!!this.fields.cityId)
      },
      hasPhoneField () {
        return (!!this.fields.phone)
      },
      hasEmailField () {
        return (!!this.fields.email)
      },
      avatar () {
        const { avatar: { '183x183': path } } = this.fields
        return path
      },
      socialAccounts () {
        const { socialAccounts } = this.fields
        return socialAccounts
      },
      hasSocialAccountApple () {
        return (this.socialAccounts && has(this.socialAccounts, 'apple'))
      },
      hasSocialAccountVkontakte () {
        return (this.socialAccounts && has(this.socialAccounts, 'vkontakte'))
      },
      hasSocialAccountFacebook () {
        return (this.socialAccounts && has(this.socialAccounts, 'facebook'))
      },
      hasSocialAccountGoogle () {
        return (this.socialAccounts && has(this.socialAccounts, 'google'))
      }
    },
    beforeDestroy () {
      this.$root.$off('detach-phone')
      this.$root.$off('attached-phone')
      this.$root.$off('updated-avatar')
    },
    created () {
      this.$root.$on('detach-phone', (token) => {
        this.phone['token'] = token
        this._clearPhoneField()
      })

      this.$root.$on('attached-phone', () => {
        this.phone['token'] = null
        this._handleClickChangeDisabled('phone')
        Toast({ message: 'Настройки безопасности изменены', iconClass: 'mintui mintui-success' })
      })

      this.$root.$on('updated-avatar', (data) => {
        Object.assign(this.fields['avatar'], data)
      })
    },
    mounted () {
      if (isBrowser) {
        setTimeout(() => {
          this.isNative = isNative()
        }, 100)
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
    methods: {
      _handleClickPreviousPage () {
        if (window.history.length > 2) {
          this.$router.go(-1)
        } else this.$router.push({ name: 'user.show', params: { username: this.user.username } })
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
      _handleClickChangeDisabled (field) {
        if (this.disabled.hasOwnProperty(field)) {
          this.disabled[field] = !Boolean(this.disabled[field])
        } else throw new Error('Not found disabled field.')
      },
      _handleClickChangeDisabledPhone () {
        if (this.hasPhone) {
          this._detachPhone()
        } else this._clearPhoneField()
      },
      _detachPhone () {
        return new Promise((resolve, reject) => {
          this.phone.loading = true

          this.$api.post('api/v2/users/phone/detach').then((response) => {
            const { data } = response

            this.phone.loading = false
            const { phone } = this.fields
            this.$modalRouter.push({ name: 'users.settings.phone.detach', props: { phone } })

            resolve && resolve()

          }, (error) => {
            const { response: { data, status }} = error

            reject && reject()

            this.phone.loading = false
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            if (status === 422) {
              const { errors } = data
              Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: key, msg: errors[key].join(', ') }))
            } else if (status === 403) {
              this.$validator.errors.add({ field: 'phone', msg: 'Слишком много попыток подтверждения. Пожалуйста, повторите позже.' })
            } else throw new Error('Error detach phone')
          })
        })
      },
      _clearPhoneField () {
        let { phone } = this.fields
        this.phone['default'] = phone

        this.fields['phone'] = null
        this._handleClickChangeDisabled('phone')
        this.$nextTick(() => this.$refs['phone'].focus())
      },
      _handleClickReturnChangeDisabledPhone () {
        this.fields['phone'] = this.phone['default']
        this._handleClickChangeDisabled('phone')
      },
      _handleClickAttachPhone () {
        this.$validator.validate('phone').then(result => {
          if (result) {
            this._attachPhone()
          }
        })
      },
      _attachPhone () {
        return new Promise((resolve, reject) => {
          this.phone.loading = true

          const { token } = this.phone
          const { phone } = this.fields

          this.$api.post('api/v2/users/phone/attach', { phone, token }).then((response) => {
            const { data: { result } } = response

            this.phone.loading = false

            this.$modalRouter.push({ name: 'users.settings.phone.attach', props: { token, phone } })

            resolve && resolve()
          }, (error) => {
            const { response: { data, status }} = error

            reject && reject()

            this.phone.loading = false
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            if (status === 422) {
              const { errors } = data
              Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: key, msg: errors[key].join(', ') }))
            } else if (status === 403) {
              this.$validator.errors.add({ field: 'phone', msg: 'Слишком много попыток подтверждения. Пожалуйста, повторите позже.' })
            } else throw new Error('Error attach phone')
          })
        })
      },
      _handleClickChangeDisabledEmail () {
        this._clearEmailField()
      },
      _handleClickReturnChangeDisabledEmail () {
        this.fields['email'] = this.email['default']
        this._handleClickChangeDisabled('email')
      },
      _clearEmailField () {
        let { email } = this.fields
        this.email['default'] = email

        this.fields['email'] = null
        this._handleClickChangeDisabled('email')
        this.$nextTick(() => this.$refs['email'].focus())
      },
      _handleClickAttachEmail () {
        this.$validator.validate('email').then(result => {
          if (result) {
            let { email } = this.fields
            Indicator.open()

            return new Promise((resolve, reject) => {
              this.$api.patch('api/v2/settings/email', { email }).then((response) => {
                const { data: { data } } = response

                Indicator.close()
                this.email['success'] = true
                this._handleClickChangeDisabled('email')
                this.$store.dispatch('auth/getUserByAPI')
                this.$store.dispatch('auth/setUserField', { key: 'hasEmail', value: true })
                Toast({ message: 'Настройки безопасности изменены', iconClass: 'mintui mintui-success' })
                resolve && resolve(data)
              }, (error) => {
                const { response: { data, status }} = error

                Indicator.close()
                Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

                reject && reject()

                if (status === 422) {
                  this.$setLaravelValidationErrorsFromResponse(data)
                } else throw new Error('Error save settings')
              })
            })
          }
        })
      },
      _handleClickChangeDisabledUsername () {
        this._clearUsernameField()
      },
      _clearUsernameField () {
        let { username } = this.fields
        this.username['default'] = username

        this.fields['username'] = null
        this._handleClickChangeDisabled('username')
        this.$nextTick(() => this.$refs['username'].focus())
      },
      _handleClickReturnChangeDisabledUsername () {
        this.fields['username'] = this.username['default']
        this._handleClickChangeDisabled('username')
      },
      _handleClickChangeDisabledPassword () {
        this._clearPasswordField()
      },
      _clearPasswordField () {
        this.fields['password'] = null
        this._handleClickChangeDisabled('password')
        this.$nextTick(() => this.$refs['password'].focus())
      },
      _handleClickReturnChangeDisabledPassword () {
        this.fields['password'] = 'password'
        this._handleClickChangeDisabled('password')
      },
      _handleClickSaveSettings () {
        this._handleValidateFields().then(() => {
          this._saveSettings().then(() => {
            Toast({ message: 'Настройки успешно сохранены', iconClass: 'mintui mintui-success' })
            this.$store.dispatch('auth/getUserByAPI').then((user) => {
              const { username } = user
              this.$router.push({ name: 'user.show' , params: { username }})
            }).catch(() => {})
          }).catch(() => this._scrollToErrorFields())
        }).catch(() => this._scrollToErrorFields())
      },
      _scrollToErrorFields () {
        let el = document.getElementsByClassName('error')
        if (el && el.length) this.$scrollTo(el[0], 500, {  offset: -40 })
      },
      _saveSettings () {
        return new Promise((resolve, reject) => {

          this.loading = true
          Indicator.open()

          let data = this._.cloneDeep(this.fields)

          if (this.disabled['password']) {
            this.$delete(data, 'password')
          }

          if (this.disabled['username']) {
            this.$delete(data, 'username')
          }

          this.$api.patch('api/v2/settings', data).then((response) => {
            const { data: { data } } = response

            Indicator.close()
            this.loading = false
            resolve && resolve(data)
          }, (error) => {
            const { response: { data, status }} = error

            Indicator.close()
            this.loading = false
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            reject && reject()

            if (status === 422) {
              this.$setLaravelValidationErrorsFromResponse(data)
            } else throw new Error('Error save settings')
          })
        })
      },
      _handleClickDestroyPage () {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'удалить',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите удалить аккаунт и все данные в нем?'
        }).then((args) => {
          Indicator.open()
          this.$api.delete(('/api/v1/users')).then((response) => {
            Indicator.close()
            this.$gtm.trackEvent({ event: 'delete_page' })
            Toast({ message: 'Аккаунт успешно удален', iconClass: 'mintui mintui-success' })
            this.logout()
          }, (error) => {
            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
            throw new Error('Error destroy account.')
          })
        }).catch((args) => {})
      },
      logout () {
        Indicator.open()

        this.$auth.logout().then(() => {
          let redirection = '/'

          this.$store.dispatch('auth/destroyToken', { reload: false }).then(res => {
            if (this.$route.query.redirect) {
              redirection = this.$route.query.redirect
            }

            this.$router.replace(redirection, () => { Indicator.close()})
          }, (err) => {
            this.$router.replace(redirection, () => { Indicator.close()})
          })
        }).catch((error) => {
          console.log(error)
          this.$store.dispatch('auth/destroyToken', { reload: true })
        })
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
              }).catch((data, status) => {
                Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
              })
            }

            resizeImage(event.target.result, 1280, null, 'image/png').then(({ src, blob }) => {
              next(src, blob)
            }).catch(err => {
              this.fields['avatar']['path'] = event.target.result
              next(event.target.result, file)
              console.error(err);
            })
          };
          reader.readAsDataURL(file);
        } else console.log('Sorry, FileReader API not supported');
      },
      _handleUploadAvatar (file) {
        return new Promise((resolve, reject) => {
          Indicator.open()

          let data = new FormData();
          data.append('image', file, 'avatar.png')

          this.$api.post('api/v2/settings/avatar/original', data).then((response) => {
            const { data: { data: { path } } } = response

            Indicator.close()
            this.$gtm.trackEvent({ event: 'UPLOAD_PHOTO_AVATAR' })
            resolve({ path })
          }, (error) => {
            Indicator.close()

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
          Indicator.open()
          this.$api.delete(('api/v2/settings/avatar')).then((response) => {
            Indicator.close()
            this.$store.dispatch('auth/getUserByAPI')
            this.$store.dispatch('auth/setUserField', { field: 'avatar.84x84', value: AVATAR })
            Toast({ message: 'Аватар успешно удален', iconClass: 'mintui mintui-success' })
          }, (error) => {
            Indicator.close()
            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
            throw new Error('Error delete avatar.')
          })
        }).catch((args) => {})
      },
      onFocus() {
        event.target.parentNode.querySelector('input').focus()
        //console.log(event.target.tagName)
      },
      _handleClickDetachSocial (social) {
        Indicator.open()
        this._deleteSocial(social).then(() => {
          Indicator.close()
          this.$delete(this.fields.socialAccounts, social)
        }).catch(() => { Indicator.close() })
      },
      _deleteSocial (social) {
        return new Promise((resolve, reject) => {

          this.$api.delete(`api/v2/users/social/${social}`).then((response) => {
            resolve && resolve()
          }, (error) => {
            const { response: { data, status }} = error

            reject && reject()

            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })

            throw new Error('Error delete social')
          })
        })
      },
      _handleClickOAuthVk () {
        this.$nativeOAuth.appOAuth(VK).then(data => {
          const get = has(data, 'mobile') ? this.$api.get('/api/v1/oauth/vkontakte/callback', data) : this.$api.get(`oauth/mobile/vkontakte/callback?code=${data.code}`)
          this._attemptSign(get, 'vkontakte').then((response) => {}, (e) => {
            if (e) {
              let { response: { data } } = e
              this.$bugsnag.metaData = { data }
              throw e
            }
          })
        }).catch(e => {
          this.$oauth.vkAuth().then((data) => {
            let { social, code } = data
            this._attemptSign(this.$api.get(`oauth/mobile/${social}/callback?code=${code}`), social).then((r) => {}, (e) => {})
          }).catch((e) => {
            throw new Error(e)
          })
        })
      },
      _handleClickOAuthFacebook () {
        this.$nativeOAuth.appOAuth(FB).then(data => {
          this._attemptSign(this.$api.get('/api/v1/oauth/facebook/callback', data), 'facebook').then((response) => {}, (e) => {
            if (e) {
              let { response: { data } } = e
              this.$bugsnag.metaData = { data }
              throw e
            }
          })
        }).catch(e => {
          this.$oauth.fbAuth().then((data) => {
            let { social, code } = data
            this._attemptSign(this.$api.get(`oauth/mobile/${social}/callback?code=${code}`), social).then((r) => {}, (e) => {})
          }).catch((e) => {
            throw new Error(e)
          })
        })
      },
      _handleClickOAuthGoogle () {
        this.$nativeOAuth.appOAuth(GOOGLE).then(data => {
          if (!has(data, 'code')) return this._handleError()

          this._attemptSign(this.$api.get(`oauth/mobile/google/callback?code=${data.code}`), 'google').then((response) => {}, (e) => {
            if (e) {
              let { response: { data } } = e
              this.$bugsnag.metaData = { data }
              throw e
            }
          })
        }).catch(e => {
          this.$oauth.googleAuth().then((data) => {
            let { social, code } = data
            this._attemptSign(this.$api.get(`oauth/mobile/${social}/callback?code=${code}`), social).then((r) => {}, (e) => {})
          }).catch((e) => {
            throw new Error(e)
          })
        })
      },
      _handleClickOAuthApple () {
        this.$oauth.appleAuth().then((data) => {
          let { social, code } = data
          this._attemptSign(this.$api.post(`oauth/mobile/${social}/callback?code=${code}`), social).then((r) => {}, (e) => {})
        }).catch((e) => {
          throw new Error(e)
        })
      },
      _attemptSign (apiPromise, social) {
        return new Promise((resolve, reject) => {
          Indicator.open()

          apiPromise.then(response => {
            const { data: { uid, link } } = response

            Indicator.close()

            this.$set(this.fields.socialAccounts, social, { uid, link })
            resolve && resolve(response)
          }).catch(e => {
            Indicator.close()

            reject && reject(e)

            Toast({ message: 'Ошибка', iconClass: 'mintui mintui-field-error' })
          })
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
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

  .form__group {

    .vs__spinner {
      align-self: center;
      opacity: 0;
      font-size: 5px;
      text-indent: -9999em;
      overflow: hidden;
      border-top: 0.9em solid rgba(100, 100, 100, 0.1);
      border-right: 0.9em solid rgba(100, 100, 100, 0.1);
      border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);
      border-left: 0.9em solid rgba(60, 60, 60, 0.45);
      transform: translateZ(0);
      animation: vSelectSpinner 1.1s infinite linear;
      transition: opacity .1s; }

    .vs__spinner,
    .vs__spinner:after {
      border-radius: 50%;
    }

    .vs__spinner {
      border-top: 0.45em solid rgba(100, 100, 100, 0.1);
      border-right: 0.45em solid rgba(100, 100, 100, 0.1);
      border-bottom: 0.45em solid rgba(100, 100, 100, 0.1);
      border-left: 0.45em solid rgba(60, 60, 60, 0.45);
    }

    .vs__spinner, .vs__spinner:after {
      width: 2.8em;
      height: 2.8em;
    }

    /* KeyFrames */
    @-webkit-keyframes vSelectSpinner {
      0% {
        transform: rotate(0deg); }
      100% {
        transform: rotate(360deg); } }

    @keyframes vSelectSpinner {
      0% {
        transform: rotate(0deg); }
      100% {
        transform: rotate(360deg); } }
  }
</style>
