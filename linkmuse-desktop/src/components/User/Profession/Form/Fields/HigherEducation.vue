<template>
  <div class="column w_100">
    <div class="heading heading_h4 mb_0 d-input_row justify_between">
      <div class="align-center">
        Высшее образование
        <tooltip class="align-center" effect="scale" placement="bottom" :content="contentTooltipHigherEducation">
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
      <div :class="['column', { 'mt_12' : (index >= 1), 'mt_9' : (index === 0) }]" :key="`higher-education-${index}`">
        <div class="d-input d-input_row mb_6">
          <label :for="KEYS['higherEducation'] + '.' + index + '.' + KEYS['university']" class="d-input__label d-input__label_required">ВУЗ</label>
          <div class="column">

            <vue-select :filterable="false" @search="_handleFetchUniversity(...arguments, index)" :options="sources['universities'][index]" :reduce="option => option.id"
                   :id="KEYS['higherEducation'] + '.' + index + '.' + KEYS['university']" :name="KEYS['higherEducation'] + '.' + index + '.' + KEYS['university']"
                   :data-vv-name="KEYS['higherEducation'] + '.' + index + '.' + KEYS['university']"
                   :key="KEYS['higherEducation'] + '.' + index + '.' + KEYS['university']"
                   :placeholder="'Не выбран'" :data-vv-as="'ВУЗ'"
                   v-validate ="{ rules: { required: true, max: 255 } }"
                   v-model="fields[index][KEYS['university']]"
                   @input="_handleInputUpdateField"
                   :class="['style-chooser', { 'error': (verrors.has(KEYS['higherEducation'] + '.' + index + '.' + KEYS['university'])) } ]">
            </vue-select>

            <template v-if="verrors.has(KEYS['higherEducation'] + '.' + index + '.' + KEYS['university'])">
              <div class="d-input__notification d-input__notification_required">{{ verrors.first(KEYS['higherEducation'] + '.' + index + '.' + KEYS['university']) }}</div>
            </template>
          </div>
        </div>
        <div class="d-input d-input_row mb_6">
          <label :for="KEYS['higherEducation'] + '.' + index + '.' + KEYS['specialty']" class="d-input__label">Специальность</label>
          <div class="column">
            <input type="text" autocomplete="off"
                   :id="KEYS['higherEducation'] + '.' + index + '.' + KEYS['specialty']" :name="KEYS['higherEducation'] + '.' + index + '.' + KEYS['specialty']"
                   :data-vv-name="KEYS['higherEducation'] + '.' + index + '.' + KEYS['specialty']"
                   :key="KEYS['higherEducation'] + '.' + index + '.' + KEYS['specialty']"
                   :placeholder="'Художник кино и телевидения'" :data-vv-as="'Специальность'"
                   v-validate ="{ rules: { max: 255 } }"
                   v-model="fields[index][KEYS['specialty']]"
                   @input="_handleInputUpdateField"
                   :class="[{ 'error': (verrors.has(KEYS['higherEducation'] + '.' + index + '.' + KEYS['specialty'])) }, 'd-input__field', 'w_100' ]">

            <template v-if="verrors.has(KEYS['higherEducation'] + '.' + index + '.' + KEYS['specialty'])">
              <div class="d-input__notification d-input__notification_required">{{ verrors.first(KEYS['higherEducation'] + '.' + index + '.' + KEYS['specialty']) }}</div>
            </template>
          </div>
        </div>
        <div class="d-input d-input_row mb_6">
          <label :for="KEYS['higherEducation'] + '.' + index + '.' + KEYS['supervisor']" class="d-input__label">Научный руководитель</label>
          <div class="column">
            <input type="text" autocomplete="off"
                   :id="KEYS['higherEducation'] + '.' + index + '.' + KEYS['supervisor']" :name="KEYS['higherEducation'] + '.' + index + '.' + KEYS['supervisor']"
                   :data-vv-name="KEYS['higherEducation'] + '.' + index + '.' + KEYS['supervisor']"
                   :key="KEYS['higherEducation'] + '.' + index + '.' + KEYS['supervisor']"
                   :placeholder="'Котт Александр Константинович'" :data-vv-as="'Научный руководитель'"
                   v-validate ="{ rules: { max: 255 } }"
                   v-model="fields[index][KEYS['supervisor']]"
                   @input="_handleInputUpdateField"
                   :class="[{ 'error': (verrors.has(KEYS['higherEducation'] + '.' + index + '.' + KEYS['supervisor'])) }, 'd-input__field', 'w_100' ]">

            <template v-if="verrors.has(KEYS['higherEducation'] + '.' + index + '.' + KEYS['supervisor'])">
              <div class="d-input__notification d-input__notification_required">{{ verrors.first(KEYS['higherEducation'] + '.' + index + '.' + KEYS['supervisor']) }}</div>
            </template>
          </div>
        </div>
        <div class="d-input d-input_row mb_6" v-if="fields[index][KEYS['yearsOfStudy']] && fields[index][KEYS['yearsOfStudy']].length">
          <label :for="[KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom']" class="d-input__label mr_4">Годы обучения (с – по)</label>

          <div class="column">
            <no-ssr>
              <div class="d-row w_100 align_center">
                <datepicker format="yyyy" :minimumView="'year'" :maximumView="'year'" :initialView="'year'"
                       :id="[KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom']"
                       :name="[KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom']"
                       :ref="[KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom']"
                       :placeholder="'C'" :data-vv-as="'Начало'"
                       v-model="fields[index][KEYS['yearsOfStudy']][0][KEYS['yearFrom']]"
                       v-validate="{ rules: { date_format: 'YYYY' } }"
                       @selected="_handleSelectedDateField(...arguments, index, KEYS['yearFrom'])"
                       :input-class="[{ 'error': (verrors.has([KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom'])) }, 'd-input__field' ]"
                       wrapper-class="mr_2 w_100">
                </datepicker>

                <div class="color_gray-4">-</div>

                <datepicker format="yyyy" :minimumView="'year'" :maximumView="'year'" :initialView="'year'"
                       :id="[KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo']"
                       :name="[KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo']"
                       :ref="[KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo']"
                       :placeholder="'По'" :data-vv-as="'Окончание'"
                       v-model="fields[index][KEYS['yearsOfStudy']][0][KEYS['yearTo']]"
                       v-validate="{ rules: { date_format: 'YYYY', after: [[KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom'], true] } }"
                       @selected="_handleSelectedDateField(...arguments, index, KEYS['yearTo'])"
                       :input-class="[{ 'error': (verrors.has([KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo'])) }, 'd-input__field' ]"
                       wrapper-class="ml_2 w_100">
                </datepicker>
              </div>
            </no-ssr>

            <template v-if="(verrors.has([KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo']) || verrors.has([KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom']) )">
              <div class="d-input__notification d-input__notification_required" v-if="verrors.has([KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo'])">{{ verrors.first([KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo']) }}</div>
              <div class="d-input__notification d-input__notification_required" v-if="verrors.has([KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom'])">{{ verrors.first([KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom']) }}</div>
            </template>
          </div>
        </div>

        <div class="d-textarea d-input_row">
          <label :for="KEYS['higherEducation'] + '.' + index + '.' + KEYS['description']" class="d-input__label mr_4">Описание</label>

          <div class="column">
            <div class="d-row" ref="descriptionRow">
              <textarea-autosize autocomplete="off"
                        :id="KEYS['higherEducation'] + '.' + index + '.' + KEYS['description']" :name="KEYS['higherEducation'] + '.' + index + '.' + KEYS['description']"
                        :data-vv-name="KEYS['higherEducation'] + '.' + index + '.' + KEYS['description']"
                        :placeholder="'Отучился на режиссера и актера. Имею красный диплом. Мой учебный фильм удостоился премии'" :data-vv-as="'Описание'"
                        :key="KEYS['higherEducation'] + '.' + index + '.' + KEYS['description']"
                        v-validate ="{ rules: { max: 65000 } }"
                        v-model="fields[index][KEYS['description']]"
                        :min-height="76" :max-height="350"
                        @input="_handleInputUpdateField"
                        :class="[{ 'error': (verrors.has(KEYS['higherEducation'] + '.' + index + '.' + KEYS['description'])) }, 'd-textarea', 'w_100' ]">
              </textarea-autosize>
            </div>

            <template v-if="verrors.has(KEYS['higherEducation'] + '.' + index + '.' + KEYS['description'])">
              <div class="d-input__notification d-input__notification_required">{{ verrors.first(KEYS['higherEducation'] + '.' + index + '.' + KEYS['description']) }}</div>
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
  import _ from 'lodash'
  import { mapGetters } from 'vuex'

  const KEYS = {
    yearTo: 'to',
    yearFrom: 'from',
    specialty: 'specialty',
    supervisor: 'supervisor',
    university: 'university',
    description: 'description',
    yearsOfStudy: 'years-of-study',
    higherEducation: 'higher-education',
  }

  const FIELD = {
    [KEYS['university']]: null,
    [KEYS['specialty']]: null,
    [KEYS['supervisor']]: null,
    [KEYS['description']]: null,
    [KEYS['yearsOfStudy']]: [{ [KEYS['yearTo']]: null, [KEYS['yearFrom']]: null }] }

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
        fields: [],
        sources: {
          universities: []
        }
      }
    },
    computed: {
      ...mapGetters({
        defaultSources: 'user/profession/getSources'
      }),
      contentTooltipHigherEducation () {
        return `<div style="max-width: 208px;">
          <span style="display: block; margin: 0;">
             Добавьте данные, если вы уже получили или получаете в данный момент высшее образование
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
        this.value.forEach((item, index) => {
          this.fields.push(Object.assign(this._.cloneDeep(FIELD), item))
          this.sources.universities.push(this._.clone(this.defaultSources['professionUniversities'][index] || this.defaultSources['universities']))
        })
      } else this.fields = []
    },
    methods: {
      _handleInputUpdateField () {
        this.$emit('input', this.fields)
      },
      _handleClickPushField () {
        this.fields.push(this._.cloneDeep(FIELD))
        this.sources.universities.push(this._.clone(this.defaultSources['universities']))
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
          this.$nextTick(() => { this.sources.universities.splice(index, 1) })
          this.$nextTick(() => { this._handleInputUpdateField() })
        }).catch(() => {})
      },
      _handleSelectedDateField (date, index, key) {
        this.$nextTick(() => {
          this.fields[index][KEYS['yearsOfStudy']][0][key] = this.$moment(date).format('YYYY')
          this._handleInputUpdateField()
        })
      },
      _handleFetchUniversity: _.debounce(function(search, loading, index) {
        if (search) {
          loading(true)
          this._fetchUniversities(search).then((data) => {
            this.$set(this.sources.universities, index, data)

            let indexOf = data.map(u => u.id).indexOf(this.fields[index][KEYS['university']])
            if (indexOf < 0) this.fields[index][KEYS['university']] = null

            loading(false)
          }).catch(() => {
            loading(false)
          })
        }
      }, 500),
      _fetchUniversities (q) {
        return new Promise((resolve, reject) => {
          this.$api.get('api/v2/universities', { q, limit: 50 }).then((response) => {
            const { data: { data } } = response

            resolve && resolve(data)
          }, (error) => {
            const { response: { data, status } } = error
            reject && reject()
            throw new Error('Error loading castings cities')
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>
