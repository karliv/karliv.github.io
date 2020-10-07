<template>
  <div :class="['lm-m-profile-user-info--line', { 'editing': (editing !== false) }]">
    <div :class="{ 'lm-m-profile-user-info--line-edit-wrap': (editing !== false) }">
      <div class="title">
        <div class="left">
          <span>Контакты</span>
        </div>
        <div class="right" v-if="(isCurrentUser && editing !== 'base')">
          <i class="lm-icon-pencil" @click="_handleClickOpenEditMode('base')"></i>
        </div>
      </div>
      <template v-if="(editing !== 'base')">
        <div class="lm-profile-contact">
          <div class="lm-profile-contact-line" v-if="has(anketa, KEYS['email']) && _.get(anketa, KEYS['email'])">
            <a :href="`mailto:${anketa.email}`" class="lm-profile-contact-mail">
              <span>{{ _.get(anketa, KEYS['email']) }}</span>
            </a>
          </div>
          <div class="lm-profile-contact-line" v-if="has(anketa, KEYS['phone']) && _.get(anketa, KEYS['phone'])">
            <a :href="`tel:${anketa.contactdetails.phone}`" class="lm-profile-contact-phone">
              <span>{{ _.get(anketa, KEYS['phone']) }}</span>
            </a>
          </div>
          <div class="lm-profile-contact-line" v-if="has(anketa, KEYS['site']) && _.get(anketa, KEYS['site']) && siteUrl" v-html="siteUrl"></div>
          <!-- TODO: Удалить -->
          <div class="lm-profile-contact-line" v-if="has(anketa, KEYS['agent']) && _.get(anketa, KEYS['agent'])">
            <span><b>Агент:</b></span>
            <span><b>{{ _.get(anketa, KEYS['agent']) }}</b></span>
          </div>
        </div>
      </template>
      <template v-if="(editing === 'base')">
        <div class="lm-input-wrap">
          <div class="lm-input-wrap">
            <label for="email">Почта</label>
            <input id="email" type="email"
                   placeholder="Введите"
                   v-validate="'email'"
                   @blur="_handleBlurUpdateField"
                   :name="normalizeDotsToArrow(KEYS['email'])"
                   :key="KEYS['email']"
                   :data-lm-key="KEYS['email']"
                   v-model="fields[KEYS['email']]"
                   :class="['lm-input', 'lm-input-icon', 'lm-icon-email', { 'error': (verrors.has(normalizeDotsToArrow(KEYS['email']))) }]">
          </div>
          <label for="phone">Телефон</label>
          <input v-mask-phone id="phone" type="tel"
                 placeholder="Введите"
                 v-validate="'phone'"
                 @blur="_handleBlurUpdateField"
                 :name="normalizeDotsToArrow(KEYS['phone'])"
                 :key="KEYS['phone']"
                 :data-lm-key="KEYS['phone']"
                 v-model="fields[KEYS['phone']]"
                 :class="['lm-input', 'lm-input-icon', 'lm-icon-phone', { 'error': (verrors.has(normalizeDotsToArrow(KEYS['phone']))) }]">
        </div>
        <template v-if="isCustomer">
          <div class="lm-input-wrap">
            <label for="site">Сайт</label>
            <input id="site" type="url"
                   placeholder="Введите"
                   v-validate="'url'"
                   @blur="_handleBlurUpdateField"
                   :name="normalizeDotsToArrow(KEYS['site'])"
                   :key="KEYS['site']"
                   :data-lm-key="KEYS['site']"
                   v-model="fields[KEYS['site']]"
                   :class="['lm-input', 'lm-input-icon', 'lm-icon-world', { 'error': (verrors.has(normalizeDotsToArrow(KEYS['site']))) }]">
          </div>
        </template>
        <template v-if="isExecutor">
          <div class="lm-input-wrap">
            <label for="agent">Агент</label>
            <input id="agent" type="text"
                   placeholder="Введите"
                   v-validate="'max:256'"
                   @blur="_handleBlurUpdateField"
                   :name="normalizeDotsToArrow(KEYS['agent'])"
                   :key="KEYS['agent']"
                   :data-lm-key="KEYS['agent']"
                   v-model="fields[KEYS['agent']]"
                   :class="['lm-input', { 'error': (verrors.has(normalizeDotsToArrow(KEYS['agent']))) }]">
          </div>
        </template>
        <div class="lm-m-profile-action-edit">
          <a href="javascript:void(0)" class="lm-link-button" @click="_handleClickCloseEditMode">отмена</a>
          <button href="javascript:void(0)" class="lm-primary-button middle" @click="_handleClickSaveFields">сохранить</button>
        </div>
      </template>
      <div class="title" style="margin-top: 24px;">
        <div class="left">
          <span>Соц. сети</span>
        </div>
        <div class="right" v-if="(isCurrentUser && editing !== 'social')">
          <i class="lm-icon-pencil" @click="_handleClickOpenEditMode('social')"></i>
        </div>
      </div>
      <template v-if="(editing !== 'social')">
        <div class="lm-social">
          <div v-if="has(anketa, KEYS['vk']) && _.get(anketa, KEYS['vk'])" class="lm-social-vk"><a target="_blank" :href="`https://www.vk.com/${ _.get(anketa, KEYS['vk']) }`"></a></div>
          <div v-if="has(anketa, KEYS['fb']) && _.get(anketa, KEYS['fb'])" class="lm-social-fb"><a target="_blank" :href="`https://www.facebook.com/${ _.get(anketa, KEYS['fb']) }`"></a></div>
          <div v-if="has(anketa, KEYS['ok']) && _.get(anketa, KEYS['ok'])" class="lm-social-ok"><a target="_blank" :href="`https://ok.ru/${ _.get(anketa, KEYS['ok']) }`"></a></div>
          <div v-if="has(anketa, KEYS['instagram']) && _.get(anketa, KEYS['instagram'])" class="lm-social-inst"><a target="_blank" :href="`https://www.instagram.com/${ _.get(anketa, KEYS['instagram']) }`"></a></div>
          <div v-if="has(anketa, KEYS['youtube']) && _.get(anketa, KEYS['youtube'])" class="lm-social-youtube"><a target="_blank" :href="`https://www.youtube.com/${ _.get(anketa, KEYS['youtube']) }`"></a></div>
        </div>
      </template>
      <template v-if="(editing === 'social')">

        <div class="lm-input-wrap prefix">
          <label for="vk">Vk</label>
          <div class="lm-input-prefix" :class="{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['vk']))) }">
            <div class="lm-input-prefix-text">https://vk.com/</div>
            <input id="vk" type="text" autofocus
                   v-mask-social
                   v-validate="'max:30'"
                   @blur="_handleBlurUpdateField"
                   :name="normalizeDotsToArrow(KEYS['vk'])"
                   :key="KEYS['vk']"
                   :data-lm-key="KEYS['vk']"
                   v-model="fields[KEYS['vk']]"
                   class="lm-input">
          </div>
        </div>
        <div class="lm-input-wrap prefix">
          <label for="fb">Facebook</label>
          <div class="lm-input-prefix" :class="{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['fb']))) }">
            <div class="lm-input-prefix-text">https://facebook.com/</div>
            <input id="fb" type="text"
                   v-mask-social
                   v-validate="'max:30'"
                   @blur="_handleBlurUpdateField"
                   :name="normalizeDotsToArrow(KEYS['fb'])"
                   :key="KEYS['fb']"
                   :data-lm-key="KEYS['fb']"
                   v-model="fields[KEYS['fb']]"
                   class="lm-input">
            </div>
        </div>
        <div class="lm-input-wrap facebook prefix">
          <label for="ok">Одноклассники</label>
          <div class="lm-input-prefix" :class="{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['ok']))) }">
            <div class="lm-input-prefix-text">https://ok.ru/</div>
            <input id="ok" type="text"
                   v-mask-social
                   v-validate="'max:30'"
                   @blur="_handleBlurUpdateField"
                   :name="normalizeDotsToArrow(KEYS['ok'])"
                   :key="KEYS['ok']"
                   :data-lm-key="KEYS['ok']"
                   v-model="fields[KEYS['ok']]"
                   class="lm-input">
          </div>
        </div>
        <div class="lm-input-wrap prefix">
          <label for="instagram">Instagram</label>
          <div class="lm-input-prefix" :class="{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['instagram']))) }">
            <div class="lm-input-prefix-text">https://www.instagram.com/</div>
            <input id="instagram" type="text"
                   v-mask-social
                   v-validate="'max:30'"
                   @blur="_handleBlurUpdateField"
                   :name="normalizeDotsToArrow(KEYS['instagram'])"
                   :key="KEYS['instagram']"
                   :data-lm-key="KEYS['instagram']"
                   v-model="fields[KEYS['instagram']]"
                   class="lm-input">
          </div>
        </div>
        <div class="lm-input-wrap prefix">
          <label for="youtube">Youtube</label>
          <div class="lm-input-prefix" :class="{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['youtube']))) }">
            <div class="lm-input-prefix-text">https://www.youtube.com/</div>
            <input id="youtube" type="text"
                   v-mask-social
                   v-validate="'max:30'"
                   @blur="_handleBlurUpdateField"
                   :name="normalizeDotsToArrow(KEYS['youtube'])"
                   :key="KEYS['youtube']"
                   :data-lm-key="KEYS['youtube']"
                   v-model="fields[KEYS['youtube']]"
                   class="lm-input">
          </div>
        </div>
        <div class="lm-m-profile-action-edit">
          <a href="javascript:void(0)" class="lm-link-button" @click="_handleClickCloseEditMode">отмена</a>
          <button href="javascript:void(0)" class="lm-primary-button middle" @click="_handleClickSaveFields">сохранить</button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import { has, normalizeDotsToArrow } from '@utils'
  import profileFormMixin from '@modules/User/mixins/form'

  const KEYS = {
    agent: 'contactdetails.agent',
    site: 'contactdetails.site',
    phone: 'contactdetails.phone',
    email: 'contactdetails.email',
    vk: 'contactdetails.vk',
    fb: 'contactdetails.fb',
    ok: 'contactdetails.ok',
    youtube: 'contactdetails.youtube',
    instagram: 'contactdetails.instagram'
  }

  export default {
    mixins: [profileFormMixin],
    props: {
      isCurrentUser: {
        type: Boolean,
        default: false
      },
      isCustomer: {
        type: Boolean,
        default: false
      },
      isExecutor: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        has, KEYS, normalizeDotsToArrow,
        fields: {},
        editing: false
      }
    },
    computed: {
      apiUrl () {
        return this.isExecutor ? 'api/v1/profiles/artists' : 'api/v1/profiles/customers'
      },
      siteUrl () {
        if (has(this.anketa, this.KEYS['site']) && this._.get(this.anketa, this.KEYS['site'])) {
          return this.$anchorme(this._.get(this.anketa, this.KEYS['site']), {
            attributes: [
              {
                name:"target",
                value:"_blank"
              },
              {
                name: "rel",
                value: "nofollow noopener"
              },
              {
                name: 'class',
                value: 'lm-profile-contact-web'
              }
            ]
          })
        } else return false
      }
    },
    methods: {
      _handleClickOpenEditMode (type) {
        this._handlePushFields().then(() => this.editing = type).catch((e) => { throw new Error(e) })
      },
      _handleClickCloseEditMode () {
        this.editing = false
      },
      _handleClickSaveFields () {
        this._handleValidateFields().then(() => {
          this._handleSaveFields().then(() => {
            this._handleClickCloseEditMode()
          }).catch(() => {})
        }).catch(() => {})
      }
    }
  }
</script>

<style lang="scss">
  .lm-profile-contact-web {
      color: #0063da;
      font-size: 14px;
      line-height: 18px;
  }
</style>
