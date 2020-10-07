<template>
  <div class="column w_100">
    <div class="heading heading_h4 mb_0 d-input_row justify_between">
      <div class="align-center">
        Повышение квалификации
        <tooltip class="align-center" effect="scale" placement="bottom" :content="contentTooltipTraining">
          <svg class="d-tooltip__icon ml_2">
            <use xlink:href="/dist/img/icons/verification/sprite.svg#icon_info" />
          </svg>
        </tooltip>
      </div>

      <template v-if="(fields.length === 0)">
        <a href="javascript:void(0)" class="d-input__link d-input__link_blue" @click="_handleClickPushField">Добавить</a>
      </template>
    </div>

    <template v-for="(item, index) in fields">
      <div :class="['column', { 'mt_12' : (index >= 1), 'mt_9' : (index === 0) }]" :key="`training-${index}`">
        <div class="d-input d-input_row mb_6">
          <label :for="KEYS['training'] + '.' + index + '.' + KEYS['organization']" class="d-input__label d-input__label_required">Организация</label>
          <div class="column">
            <input type="text" autocomplete="off"
                   :id="KEYS['training'] + '.' + index + '.' + KEYS['organization']" :name="KEYS['training'] + '.' + index + '.' + KEYS['organization']"
                   :data-vv-name="KEYS['training'] + '.' + index + '.' + KEYS['organization']"
                   :key="KEYS['training'] + '.' + index + '.' + KEYS['organization']"
                   :placeholder="'МосКино'" :data-vv-as="'Организация'"
                   v-validate ="{ rules: { required: true, max: 255 } }"
                   v-model="fields[index][KEYS['organization']]"
                   @input="_handleInputUpdateField"
                   :class="[{ 'error': (verrors.has(KEYS['training'] + '.' + index + '.' + KEYS['organization'])) }, 'd-input__field', 'w_100' ]">

            <template v-if="verrors.has(KEYS['training'] + '.' + index + '.' + KEYS['organization'])">
              <div class="d-input__notification d-input__notification_required">{{ verrors.first(KEYS['training'] + '.' + index + '.' + KEYS['organization']) }}</div>
            </template>
          </div>
        </div>
        <div class="d-input d-input_row mb_6">
          <label :for="KEYS['training'] + '.' + index + '.' + KEYS['thing']" class="d-input__label">Предмет</label>
          <div class="column">
            <input type="text" autocomplete="off"
                   :id="KEYS['training'] + '.' + index + '.' + KEYS['thing']" :name="KEYS['training'] + '.' + index + '.' + KEYS['thing']"
                   :data-vv-name="KEYS['training'] + '.' + index + '.' + KEYS['thing']"
                   :key="KEYS['training'] + '.' + index + '.' + KEYS['thing']"
                   :placeholder="'Режиссура игровых сцен'" :data-vv-as="'Предмет'"
                   v-validate ="{ rules: { max: 255 } }"
                   v-model="fields[index][KEYS['thing']]"
                   @input="_handleInputUpdateField"
                   :class="[{ 'error': (verrors.has(KEYS['training'] + '.' + index + '.' + KEYS['thing'])) }, 'd-input__field', 'w_100' ]">

            <template v-if="verrors.has(KEYS['training'] + '.' + index + '.' + KEYS['thing'])">
              <div class="d-input__notification d-input__notification_required">{{ verrors.first(KEYS['training'] + '.' + index + '.' + KEYS['thing']) }}</div>
            </template>
          </div>
        </div>

        <div class="d-input d-input_row mb_6">
          <label :for="KEYS['training'] + '.' + index + '.' + KEYS['teacher']" class="d-input__label">Преподаватель</label>
          <div class="column">
            <input type="text" autocomplete="off"
                   :id="KEYS['training'] + '.' + index + '.' + KEYS['teacher']" :name="KEYS['training'] + '.' + index + '.' + KEYS['teacher']"
                   :data-vv-name="KEYS['training'] + '.' + index + '.' + KEYS['teacher']"
                   :key="KEYS['training'] + '.' + index + '.' + KEYS['teacher']"
                   :placeholder="'Скопина Яна Алексеевна'" :data-vv-as="'Преподаватель'"
                   v-validate ="{ rules: { max: 255 } }"
                   v-model="fields[index][KEYS['teacher']]"
                   @input="_handleInputUpdateField"
                   :class="[{ 'error': (verrors.has(KEYS['training'] + '.' + index + '.' + KEYS['teacher'])) }, 'd-input__field', 'w_100' ]">

            <template v-if="verrors.has(KEYS['training'] + '.' + index + '.' + KEYS['teacher'])">
              <div class="d-input__notification d-input__notification_required">{{ verrors.first(KEYS['training'] + '.' + index + '.' + KEYS['teacher']) }}</div>
            </template>
          </div>
        </div>

        <div class="d-input d-input_row mb_6" v-if="fields[index][KEYS['yearsOfStudy']] && fields[index][KEYS['yearsOfStudy']].length">
          <label :for="[KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom']" class="d-input__label">Годы обучения (с – по)</label>
          <div class="column">
            <no-ssr>
              <div class="d-row w_100 align_center">
                <datepicker format="yyyy" :minimumView="'year'" :maximumView="'year'" :initialView="'year'"
                            :id="[KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom']"
                            :name="[KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom']"
                            :ref="[KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom']"
                            :placeholder="'C'" :data-vv-as="'Начало'"
                            v-model="fields[index][KEYS['yearsOfStudy']][0][KEYS['yearFrom']]"
                            v-validate="{ rules: { date_format: 'YYYY' } }"
                            @selected="_handleSelectedDateField(...arguments, index, KEYS['yearFrom'])"
                            :input-class="[{ 'error': (verrors.has([KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom'])) }, 'd-input__field' ]"
                            wrapper-class="mr_2 w_100">
                </datepicker>
                <div class="color_gray-4">-</div>
                <datepicker format="yyyy" :minimumView="'year'" :maximumView="'year'" :initialView="'year'"
                            :id="[KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo']"
                            :name="[KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo']"
                            :ref="[KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo']"
                            :placeholder="'По'" :data-vv-as="'Окончание'"
                            v-model="fields[index][KEYS['yearsOfStudy']][0][KEYS['yearTo']]"
                            v-validate="{ rules: { date_format: 'YYYY', after: [[KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom'], true] } }"
                            @selected="_handleSelectedDateField(...arguments, index, KEYS['yearTo'])"
                            :input-class="[{ 'error': (verrors.has([KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo'])) }, 'd-input__field' ]"
                            wrapper-class="ml_2 w_100">
                </datepicker>
              </div>
            </no-ssr>
            <template v-if="(verrors.has([KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo']) || verrors.has([KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom']) )">
              <div class="d-input__notification d-input__notification_required" v-if="verrors.has([KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo'])">{{ verrors.first([KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo']) }}</div>
              <div class="d-input__notification d-input__notification_required" v-if="verrors.has([KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom'])">{{ verrors.first([KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom']) }}</div>
            </template>
          </div>
        </div>
        <div class="d-textarea d-input_row">
          <label :for="KEYS['training'] + '.' + index + '.' + KEYS['description']" class="d-input__label">Описание</label>
          <div class="column">
            <div class="d-row" ref="descriptionRow">
              <textarea-autosize autocomplete="off"
                        :id="KEYS['training'] + '.' + index + '.' + KEYS['description']" :name="KEYS['training'] + '.' + index + '.' + KEYS['description']"
                        :data-vv-name="KEYS['training'] + '.' + index + '.' + KEYS['description']"
                        :placeholder="'Отучился на режиссера и актера. Имею красный диплом. Мой учебный фильм удостоился премии'" :data-vv-as="'Описание'"
                        :key="KEYS['training'] + '.' + index + '.' + KEYS['description']"
                        v-validate ="{ rules: { max: 65000 } }"
                        v-model="fields[index][KEYS['description']]"
                        :min-height="76" :max-height="350"
                        @input="_handleInputUpdateField"
                        :class="[{ 'error': (verrors.has(KEYS['training'] + '.' + index + '.' + KEYS['description'])) }, 'd-textarea', 'w_100' ]">
              </textarea-autosize>
            </div>
            <template v-if="verrors.has(KEYS['training'] + '.' + index + '.' + KEYS['description'])">
              <div class="d-input__notification d-input__notification_required">{{ verrors.first(KEYS['training'] + '.' + index + '.' + KEYS['description']) }}</div>
            </template>
          </div>

        </div>
      </div>

      <div class="d-input d-input_row mt_6">
        <span class="d-input__label"></span>

        <template v-if="index === fields.length - 1">
          <div class="d-row justify_between">
            <a href="javascript:void(0)" class="d-link_back" @click="_handleClickPushField">
              Добавить ещё
            </a>
            <a href="javascript:void(0)" class="d-link_disable" @click="_handleClickRemoveField(index)">Удалить</a>
          </div>
        </template>

        <template v-else>
          <div class="d-row justify_flex-end">
            <a href="javascript:void(0)" class="d-link_disable" @click="_handleClickRemoveField(index)">Удалить</a>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
  const KEYS = {
    yearTo: 'to',
    thing: 'thing',
    yearFrom: 'from',
    teacher: 'teacher',
    training: 'training',
    description: 'description',
    organization: 'organization',
    yearsOfStudy: 'years-of-study'
  }

  const FIELD = {
    [KEYS['thing']]: null,
    [KEYS['teacher']]: null,
    [KEYS['description']]: null,
    [KEYS['organization']]: null,
    [KEYS['yearsOfStudy']]: [{ [KEYS['yearTo']]: null, [KEYS['yearFrom']]: null }]
  }

  export default {
    inject: ['$validator'],
    props: {
      value: {
        default: null
      }
    },
    data () {
      return {
        KEYS,
        fields: []
      }
    },
    computed: {
      contentTooltipTraining () {
        return `<div style="max-width: 238px;">
          <span style="display: block;">
             Добавьте данные, если вы уже прошли или проходите в данный момент дополнительное обазование, курсы
          </span>
        </div>`;
      }
    },
    watch: {
      value (value, old) {
        if (value !== old) {
          this.fields = []
          if (value && value.length) {
            value.forEach((item) => {
              this.fields.push(Object.assign(this._.cloneDeep(FIELD), item))
            })
          }
        }
      }
    },
    created () {
      if (this.value && this.value.length) {
        this.value.forEach((item) => {
          this.fields.push(Object.assign(this._.cloneDeep(FIELD), item))
        })
      } else this.fields = []
    },
    methods: {
      _handleInputUpdateField () {
        this.$emit('input', this.fields)
      },
      _handleClickPushField () {
        this.fields.push(this._.cloneDeep(FIELD))
      },
      _handleClickRemoveField (index) {
        this.$confirm({
          cancelTxt: 'отмена',
          confirmTxt: 'удалить',
          title: 'Подтвердите действие',
          message: 'Вы уверены, что хотите удалить?'
        }).then(() => {
          Object.keys(this.fields[index]).forEach((item) => this.fields[index][item] = null)
          this.$nextTick(() => { this.fields.splice(index, 1) })
          this.$nextTick(() => { this._handleInputUpdateField() })
        }).catch(() => {})
      },
      _handleSelectedDateField (date, index, key) {
        this.$nextTick(() => {
          this.fields[index][KEYS['yearsOfStudy']][0][key] = this.$moment(date).format('YYYY')
          this._handleInputUpdateField()
        })

      }
    }
  }
</script>

<style scoped>

</style>
