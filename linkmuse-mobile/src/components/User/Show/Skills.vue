<template>
  <div :class="['lm-m-profile-user-info--line', { 'editing': (editing === true) }]">
    <div :class="{ 'lm-m-profile-user-info--line-edit-wrap': (editing === true) }">
      <div class="title">
        <div class="left">
          <span>Навыки</span>
        </div>
        <div class="right" v-if="(isCurrentUser && editing === false)">
          <i class="lm-icon-pencil" @click="_handleClickOpenEditMode"></i>
        </div>
      </div>
      <template v-if="(editing === false)">
        <div class="lm-m-profile-skills-line" v-if="has(anketa, KEYS['driving']) && _.get(anketa, KEYS['driving']) && _.get(anketa, KEYS['driving']).length">
          <div class="lm-m-profile-skill-title">Вождение</div>
          <div class="lm-m-profile-skill-desc"> {{ _.get(anketa, KEYS['driving']).join(', ') }}</div>
        </div>
        <div class="lm-m-profile-skills-line" v-if="has(anketa, KEYS['danceStyles']) && _.get(anketa, KEYS['danceStyles']) && _.get(anketa, KEYS['danceStyles']).length">
          <div class="lm-m-profile-skill-title">Танцевальные стили</div>
          <div class="lm-m-profile-skill-desc"> {{ _.get(anketa, KEYS['danceStyles']).join(', ') }}</div>
        </div>
        <div class="lm-m-profile-skills-line" v-if="has(anketa, KEYS['instruments']) && _.get(anketa, KEYS['instruments']) && _.get(anketa, KEYS['instruments']).length">
          <div class="lm-m-profile-skill-title">Музыкальные инструменты</div>
          <div class="lm-m-profile-skill-desc"> {{ _.get(anketa, KEYS['instruments']).join(', ') }}</div>
        </div>
        <div class="lm-m-profile-skills-line" v-if="has(anketa, KEYS['sport']) && _.get(anketa, KEYS['sport']) && _.get(anketa, KEYS['sport']).length">
          <div class="lm-m-profile-skill-title">Спорт</div>
          <div class="lm-m-profile-skill-desc"> {{ _.get(anketa, KEYS['sport']).join(', ') }}</div>
        </div>
      </template>
      <template v-else-if="(editing === true)">
        <lm-select :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['driving']))) }]"
                   v-model="fields[KEYS['driving']]"
                   :data-vv-name="KEYS['driving']"
                   :input-id="KEYS['driving']"
                   :input-name="KEYS['driving']"
                   :multiple="true"
                   placeholder="Выберите"
                   label="Вождение"
                   :options="sources[KEYS['driving']]">
        </lm-select>
        <lm-select :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['danceStyles']))) }]"
                   v-model="fields[KEYS['danceStyles']]"
                   :input-id="KEYS['danceStyles']"
                   :input-name="KEYS['danceStyles']"
                   :data-vv-name="KEYS['danceStyles']"
                   :multiple="true"
                   placeholder="Выберите"
                   label="Танцевальные стили"
                   :options="sources[KEYS['danceStyles']]">
        </lm-select>
        <lm-select :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['instruments']))) }]"
                   v-model="fields[KEYS['instruments']]"
                   :input-id="KEYS['instruments']"
                   :input-name="KEYS['instruments']"
                   :multiple="true"
                   placeholder="Выберите"
                   label="Музыкальные инструменты"
                   :options="sources[KEYS['instruments']]">
        </lm-select>
        <lm-select :class="[{ 'error': (verrors.has(normalizeDotsToArrow(KEYS['sport']))) }]"
                   v-model="fields[KEYS['sport']]"
                   :input-id="KEYS['sport']"
                   :input-name="KEYS['sport']"
                   :data-vv-name="KEYS['sport']"
                   :multiple="true"
                   placeholder="Выберите"
                   label="Спорт"
                   :options="sources[KEYS['sport']]">
        </lm-select>
        <div class="lm-m-profile-action-edit">
          <a href="javascript:void(0)" class="lm-link-button" @click="_handleClickCloseEditMode">отмена</a>
          <button href="javascript:void(0)" class="lm-primary-button middle" @click="_handleClickSaveFields">сохранить</button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { has, normalizeDotsToArrow } from '@utils'
  import profileFormMixin from '@modules/User/mixins/form'

  const KEYS = {
    driving: 'skills.driving',
    danceStyles: 'skills.dance-styles',
    instruments: 'skills.instruments',
    sport: 'skills.sport'
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
      ...mapGetters({
        sourcesValues: 'user/getSources'
      }),
      sources () {
        return this.$deepModel(this.sourcesValues)
      },
      apiUrl () {
        return this.isExecutor ? 'api/v1/profiles/artists' : 'api/v1/profiles/customers'
      }
    },
    methods: {
      _handlePushFields () {
        const _ = this._
        return new Promise((resolve, reject) => {
          try {
            Object.keys(this['KEYS']).forEach((key) => this.$set(this.fields, this['KEYS'][key], _.get(this.rawAnketa, this['KEYS'][key], [])))
            resolve()
          } catch (e) {
            reject(e)
          }
        })
      },
      _handleClickOpenEditMode () {
        this._handlePushFields().then(() => this.editing = true).catch((e) => { throw new Error(e) })
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
