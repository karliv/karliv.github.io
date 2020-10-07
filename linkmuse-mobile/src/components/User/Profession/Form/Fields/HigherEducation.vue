<template>
  <div class="block block_declaration">
    <div class="m-text_bold mb_4">
      Высшее образование
    </div>

    <template v-if="(fields.length === 0)">
      <div class="mb_4 advanced-container">
        <span class="m-text_normal color_gray-2">
          Добавьте данные, если вы уже получили или получаете в данный момент высшее образование
        </span>
      </div>

      <a href="javascript:void(0)" class="m-text_bold color_main mb_4" @click="_handleClickPushField">Добавить</a>
    </template>

    <template v-for="(item, index) in fields">
      <div :style="[{'marginTop': index >= 1 ? '36px' : '0'  }]">
        <div class="form__group form__group_declaration mb_6 mt_2">
          <label :for="KEYS['higherEducation'] + '.' + index + '.' + KEYS['university']" class="label input__label">
            ВУЗ
            <span class="label_declaration_required">•</span>
          </label>
          <lm-select @search="_handleFetchUniversity(...arguments, index)" :searchable="true" :filterable="false"
                 :options="sources['universities'][index]" :title="'Выбор ВУЗа'"
                 :label="''"
                 :input-required="false"
                 :input-id="KEYS['higherEducation'] + '.' + index + '.' + KEYS['university']"
                 :input-name="KEYS['higherEducation'] + '.' + index + '.' + KEYS['university']"
                 :data-vv-name="KEYS['higherEducation'] + '.' + index + '.' + KEYS['university']"
                 :key="KEYS['higherEducation'] + '.' + index + '.' + KEYS['university']"
                 :placeholder="'Не выбран'" :data-vv-as="'ВУЗ'"
                 v-validate ="{ rules: { required: true, max: 255 } }"
                 v-model="fields[index][KEYS['university']]"
                 @input="_handleInputUpdateField"
                 :class="[{ 'error': (verrors.has(KEYS['higherEducation'] + '.' + index + '.' + KEYS['name'])) } ]">
            <template slot="no-options">Выберите ВУЗ</template>
            <template slot="open-indicator">
              <i class="dropdown-icon"></i>
            </template>
          </lm-select>
          <template v-if="verrors.has(KEYS['higherEducation'] + '.' + index + '.' + KEYS['university'])">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(KEYS['higherEducation'] + '.' + index + '.' + KEYS['university']) }}</div>
          </template>
        </div>

        <div class="form__group form__group_declaration mb_6 mt_2">
          <label :for="KEYS['higherEducation'] + '.' + index + '.' + KEYS['specialty']" class="label input__label">Специальность</label>
          <input type="text" autocomplete="off"
                 :id="KEYS['higherEducation'] + '.' + index + '.' + KEYS['specialty']" :name="KEYS['higherEducation'] + '.' + index + '.' + KEYS['specialty']"
                 :data-vv-name="KEYS['higherEducation'] + '.' + index + '.' + KEYS['specialty']"
                 :key="KEYS['higherEducation'] + '.' + index + '.' + KEYS['specialty']"
                 :placeholder="'Художник кино и телевидения'" :data-vv-as="'Специальность'"
                 v-validate ="{ rules: { max: 255 } }"
                 v-model="fields[index][KEYS['specialty']]"
                 @input="_handleInputUpdateField"
                 :class="[{ 'error': (verrors.has(KEYS['higherEducation'] + '.' + index + '.' + KEYS['specialty'])) }, 'input', 'form__input', 'form__input_declaration' ]">
          <template v-if="verrors.has(KEYS['higherEducation'] + '.' + index + '.' + KEYS['specialty'])">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(KEYS['higherEducation'] + '.' + index + '.' + KEYS['specialty']) }}</div>
          </template>
        </div>

        <div class="form__group form__group_declaration mb_6 mt_2">
          <label :for="KEYS['higherEducation'] + '.' + index + '.' + KEYS['supervisor']" class="label input__label">Научный руководитель</label>
          <input type="text" autocomplete="off"
                 :id="KEYS['higherEducation'] + '.' + index + '.' + KEYS['supervisor']" :name="KEYS['higherEducation'] + '.' + index + '.' + KEYS['supervisor']"
                 :data-vv-name="KEYS['higherEducation'] + '.' + index + '.' + KEYS['supervisor']"
                 :key="KEYS['higherEducation'] + '.' + index + '.' + KEYS['supervisor']"
                 :placeholder="'Котт Александр Константинович'" :data-vv-as="'Научный руководитель'"
                 v-validate ="{ rules: { max: 255 } }"
                 v-model="fields[index][KEYS['supervisor']]"
                 @input="_handleInputUpdateField"
                 :class="[{ 'error': (verrors.has(KEYS['higherEducation'] + '.' + index + '.' + KEYS['supervisor'])) }, 'input', 'form__input', 'form__input_declaration' ]">
          <template v-if="verrors.has(KEYS['higherEducation'] + '.' + index + '.' + KEYS['supervisor'])">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(KEYS['higherEducation'] + '.' + index + '.' + KEYS['supervisor']) }}</div>
          </template>
        </div>

        <div class="form__group form__group_declaration">
          <label :for="[KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom']" class="label input__label">
            Года обучения (с – по)
          </label>

          <div class="form__row form__row_declaration">
            <input type="number" min="1" inputmode="numeric" pattern="[0-9]*"
                   :id="[KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom']"
                   :name="[KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom']"
                   :ref="[KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom']"
                   :placeholder="'C'" :data-vv-as="'Начало'"
                   v-model="fields[index][KEYS['yearsOfStudy']][0][KEYS['yearFrom']]" v-mask-date-year
                   v-validate="{ rules: { date_format: 'YYYY' } }"
                   @input="_handleInputUpdateField"
                   style="box-sizing: border-box; text-align: right;"
                   :class="[{ 'error': (verrors.has([KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom'])) }, 'input', 'form__input', 'form__input_declaration' ]">
            <div class="lm-m-dash">-</div>
            <input type="number" min="1" inputmode="numeric" pattern="[0-9]*"
                   :id="[KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo']"
                   :name="[KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo']"
                   :ref="[KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo']"
                   :placeholder="'По'" :data-vv-as="'Окончание'"
                   v-model="fields[index][KEYS['yearsOfStudy']][0][KEYS['yearTo']]" v-mask-date-year
                   v-validate="{ rules: { date_format: 'YYYY', after: [[KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom'], true] } }"
                   @input="_handleInputUpdateField"
                   style="box-sizing: border-box; text-align: right;"
                   :class="[{ 'error': (verrors.has([KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo'])) }, 'input', 'form__input', 'form__input_declaration' ]">
          </div>

          <template v-if="(verrors.has([KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo']) || verrors.has([KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom']) )">
            <div class="form__notification form__notification_declaration form__notification_declaration_required" v-if="verrors.has([KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo'])">{{ verrors.first([KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo']) }}</div>
            <div class="form__notification form__notification_declaration form__notification_declaration_required" v-if="verrors.has([KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom'])">{{ verrors.first([KEYS['higherEducation']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom']) }}</div>
          </template>
        </div>

        <div class="form__group form__group_declaration mb_4">
          <label :for="KEYS['higherEducation'] + '.' + index + '.' + KEYS['description']" class="label textarea__label textarea__label_declaration">Описание</label>
          <textarea autocomplete="off" rows="13"
                    :id="KEYS['higherEducation'] + '.' + index + '.' + KEYS['description']" :name="KEYS['higherEducation'] + '.' + index + '.' + KEYS['description']"
                    :data-vv-name="KEYS['higherEducation'] + '.' + index + '.' + KEYS['description']"
                    :placeholder="'Художник-постановщик в 12-13 годах'" :data-vv-as="'Описание'"
                    :key="KEYS['higherEducation'] + '.' + index + '.' + KEYS['description']"
                    v-validate ="{ rules: { max: 65000 } }"
                    v-model="fields[index][KEYS['description']]"
                    :style="{ minHeight: '76px' }"
                    @input="_handleInputUpdateField"
                    :class="[{ 'error': (verrors.has(KEYS['higherEducation'] + '.' + index + '.' + KEYS['description'])) }, 'textarea', 'form__textarea_declaration', 'form__textarea_declaration', 'lm-m-textarea-profile-settings' ]">
        </textarea>

          <template v-if="verrors.has(KEYS['higherEducation'] + '.' + index + '.' + KEYS['description'])">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(KEYS['higherEducation'] + '.' + index + '.' + KEYS['description']) }}</div>
          </template>
        </div>

        <template v-if="index === fields.length - 1">
          <div class="m-flex__justify_between">
            <a href="javascript:void(0)" class="m-text_bold color_main" @click="_handleClickPushField">
              Добавить ещё
            </a>
            <a href="javascript:void(0)" class="m-text_bold color_gray-3" @click="_handleClickRemoveField(index)">Удалить</a>
          </div>
        </template>

        <template v-else>
          <div class="m-flex__justify_end">
            <a href="javascript:void(0)" class="m-text_bold color_gray-3" @click="_handleClickRemoveField(index)">Удалить</a>
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
      })
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
      _handleFetchUniversity: _.debounce(function(search, loading, options, index) {
        if (search) {
          loading(true)
          this._fetchUniversities(search).then((data) => {
            options(data)
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
          this.$api.get('api/v2/universities', { q }).then((response) => {
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
