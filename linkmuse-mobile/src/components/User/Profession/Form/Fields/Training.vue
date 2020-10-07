<template>
  <div class="block block_declaration">
    <div class="m-text_bold mb_4">
      Повышение квалификации
    </div>

    <template v-if="(fields.length === 0)">
      <div class="mb_4 advanced-container">
        <span class="m-text_normal color_gray-2">
          Добавьте данные, если вы уже прошли или проходите в данный момент дополнительное обазование, курсы
        </span>
      </div>

      <a href="javascript:void(0)" class="m-text_bold color_main mb_4" @click="_handleClickPushField">Добавить</a>
    </template>

    <template v-for="(item, index) in fields">
      <div :style="[{'marginTop': index >= 1 ? '36px' : '0'  }]">
        <div class="form__group form__group_declaration mb_6 mt_2">
          <label :for="KEYS['training'] + '.' + index + '.' + KEYS['organization']" class="label input__label">
            Организация
            <span class="label_declaration_required">•</span>
          </label>
          <input type="text" autocomplete="off"
                 :id="KEYS['training'] + '.' + index + '.' + KEYS['organization']" :name="KEYS['training'] + '.' + index + '.' + KEYS['organization']"
                 :data-vv-name="KEYS['training'] + '.' + index + '.' + KEYS['organization']"
                 :key="KEYS['training'] + '.' + index + '.' + KEYS['organization']"
                 :placeholder="'МосКино'" :data-vv-as="'Организация'"
                 v-validate ="{ rules: { required: true, max: 255 } }"
                 v-model="fields[index][KEYS['organization']]"
                 @input="_handleInputUpdateField"
                 :class="[{ 'error': (verrors.has(KEYS['training'] + '.' + index + '.' + KEYS['organization'])) }, 'input', 'form__input', 'form__input_declaration' ]">
          <template v-if="verrors.has(KEYS['training'] + '.' + index + '.' + KEYS['organization'])">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(KEYS['training'] + '.' + index + '.' + KEYS['organization']) }}</div>
          </template>
        </div>

        <div class="form__group form__group_declaration mb_6 mt_2">
          <label :for="KEYS['training'] + '.' + index + '.' + KEYS['thing']" class="label input__label">
            Предмет
          </label>
          <input type="text" autocomplete="off"
                 :id="KEYS['training'] + '.' + index + '.' + KEYS['thing']" :name="KEYS['training'] + '.' + index + '.' + KEYS['thing']"
                 :data-vv-name="KEYS['training'] + '.' + index + '.' + KEYS['thing']"
                 :key="KEYS['training'] + '.' + index + '.' + KEYS['thing']"
                 :placeholder="'Режиссура игровых сцен'" :data-vv-as="'Предмет'"
                 v-validate ="{ rules: { max: 255 } }"
                 v-model="fields[index][KEYS['thing']]"
                 @input="_handleInputUpdateField"
                 :class="[{ 'error': (verrors.has(KEYS['training'] + '.' + index + '.' + KEYS['thing'])) }, 'input', 'form__input', 'form__input_declaration' ]">
          <template v-if="verrors.has(KEYS['training'] + '.' + index + '.' + KEYS['thing'])">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(KEYS['training'] + '.' + index + '.' + KEYS['thing']) }}</div>
          </template>
        </div>

        <div class="form__group form__group_declaration mb_6 mt_2">
          <label :for="KEYS['training'] + '.' + index + '.' + KEYS['teacher']" class="label input__label">
            Преподаватель
          </label>
          <input type="text" autocomplete="off"
                 :id="KEYS['training'] + '.' + index + '.' + KEYS['teacher']" :name="KEYS['training'] + '.' + index + '.' + KEYS['teacher']"
                 :data-vv-name="KEYS['training'] + '.' + index + '.' + KEYS['teacher']"
                 :key="KEYS['training'] + '.' + index + '.' + KEYS['teacher']"
                 :placeholder="'Скопина Яна Алексеевна'" :data-vv-as="'Преподаватель'"
                 v-validate ="{ rules: { max: 255 } }"
                 v-model="fields[index][KEYS['teacher']]"
                 @input="_handleInputUpdateField"
                 :class="[{ 'error': (verrors.has(KEYS['training'] + '.' + index + '.' + KEYS['teacher'])) }, 'input', 'form__input', 'form__input_declaration' ]">
          <template v-if="verrors.has(KEYS['training'] + '.' + index + '.' + KEYS['teacher'])">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(KEYS['training'] + '.' + index + '.' + KEYS['teacher']) }}</div>
          </template>
        </div>

        <div class="form__group form__group_declaration" v-if="fields[index][KEYS['yearsOfStudy']] && fields[index][KEYS['yearsOfStudy']].length">
          <label :for="[KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom']" class="label textarea__label textarea__label_declaration">
            Года обучения (с – по)
          </label>

          <div class="form__row form__row_declaration">
            <input type="number" min="1" inputmode="numeric" pattern="[0-9]*"
                   :id="[KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom']"
                   :name="[KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom']"
                   :ref="[KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom']"
                   :placeholder="'C'" :data-vv-as="'Начало'"
                   v-model="fields[index][KEYS['yearsOfStudy']][0][KEYS['yearFrom']]" v-mask-date-year
                   v-validate="{ rules: { date_format: 'YYYY' } }"
                   @input="_handleInputUpdateField"
                   style="box-sizing: border-box; text-align: right;"
                   :class="[{ 'error': (verrors.has([KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom'])) }, 'input', 'form__input', 'form__input_declaration' ]">
            <div class="lm-m-dash">-</div>
            <input type="number" min="1" inputmode="numeric" pattern="[0-9]*"
                   :id="[KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo']"
                   :name="[KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo']"
                   :ref="[KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo']"
                   :placeholder="'По'" :data-vv-as="'Окончание'"
                   v-model="fields[index][KEYS['yearsOfStudy']][0][KEYS['yearTo']]" v-mask-date-year
                   v-validate="{ rules: { date_format: 'YYYY', after: [[KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom'], true] } }"
                   @input="_handleInputUpdateField"
                   style="box-sizing: border-box; text-align: right;"
                   :class="[{ 'error': (verrors.has([KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo'])) }, 'input', 'form__input', 'form__input_declaration' ]">
          </div>

          <template v-if="(verrors.has([KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo']) || verrors.has([KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom']) )">
            <div class="form__notification form__notification_declaration form__notification_declaration_required" v-if="verrors.has([KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo'])">{{ verrors.first([KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearTo']) }}</div>
            <div class="form__notification form__notification_declaration form__notification_declaration_required" v-if="verrors.has([KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom'])">{{ verrors.first([KEYS['training']] + '.' + [index] + '.' + KEYS['yearsOfStudy'] + '.0.' + KEYS['yearFrom']) }}</div>
          </template>
        </div>

        <div class="form__group form__group_declaration mb_4">
          <label :for="KEYS['training'] + '.' + index + '.' + KEYS['description']" class="label textarea__label textarea__label_declaration">Описание</label>
          <textarea autocomplete="off" rows="13"
                    :id="KEYS['training'] + '.' + index + '.' + KEYS['description']" :name="KEYS['training'] + '.' + index + '.' + KEYS['description']"
                    :data-vv-name="KEYS['training'] + '.' + index + '.' + KEYS['description']"
                    :placeholder="'Отучился на режиссера и актера. Имею красный диплом. Мой учебный фильм удостоился премии'" :data-vv-as="'Описание'"
                    :key="KEYS['training'] + '.' + index + '.' + KEYS['description']"
                    v-validate ="{ rules: { max: 65000 } }"
                    v-model="fields[index][KEYS['description']]"
                    :style="{ minHeight: '76px' }"
                    @input="_handleInputUpdateField"
                    :class="[{ 'error': (verrors.has(KEYS['training'] + '.' + index + '.' + KEYS['description'])) }, 'textarea', 'form__textarea_declaration', 'form__textarea_declaration', 'lm-m-textarea-profile-settings' ]">
        </textarea>

          <template v-if="verrors.has(KEYS['training'] + '.' + index + '.' + KEYS['description'])">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(KEYS['training'] + '.' + index + '.' + KEYS['description']) }}</div>
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
        return `<div style="max-width: 226px;">
          <span style="display: block; margin: 0;">
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
      }
    }
  }
</script>

<style scoped>

</style>
