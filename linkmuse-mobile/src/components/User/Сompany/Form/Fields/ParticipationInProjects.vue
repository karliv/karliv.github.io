<template>
  <div class="block block_declaration">
    <div class="m-text_bold mb_4">
      Участие в проектах
    </div>

    <template v-if="(fields.length === 0)">
      <div class="mb_4 advanced-container">
        <span class="m-text_normal color_gray-2">
          Добавьте данные, если вы уже участвовали или участвуете в данный момент в проектах
        </span>
      </div>

      <a href="javascript:void(0)" class="m-text_bold color_main mb_4" @click="_handleClickPushField">Добавить</a>
    </template>

    <template v-for="(item, index) in fields">
      <div :style="[{'marginTop': index >= 1 ? '36px' : '0'  }]">
        <div class="form__group form__group_declaration mb_6">
          <label :for="KEYS['participationInProjects'] + '.' + index + '.' + KEYS['name']" class="label input__label">
            Проект
            <span class="label_declaration_required">•</span>
          </label>
          <input type="text" autocomplete="off"
                 :id="KEYS['participationInProjects'] + '.' + index + '.' + KEYS['name']" :name="KEYS['participationInProjects'] + '.' + index + '.' + KEYS['name']"
                 :data-vv-name="KEYS['participationInProjects'] + '.' + index + '.' + KEYS['name']"
                 :key="KEYS['participationInProjects'] + '.' + index + '.' + KEYS['name']"
                 :placeholder="'Поле чудес'" :data-vv-as="'Проект'"
                 v-validate ="{ rules: { required: true, max: 255 } }"
                 v-model="fields[index][KEYS['name']]"
                 @input="_handleInputUpdateField"
                 :class="[{ 'error': (verrors.has(KEYS['participationInProjects'] + '.' + index + '.' + KEYS['name'])) }, 'input', 'form__input', 'form__input_declaration' ]">
          <template v-if="verrors.has(KEYS['participationInProjects'] + '.' + index + '.' + KEYS['name'])">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(KEYS['participationInProjects'] + '.' + index + '.' + KEYS['name']) }}</div>
          </template>
        </div>
        <div class="form__group form__group_declaration mb_4">
          <label :for="KEYS['participationInProjects'] + '.' + index + '.' + KEYS['description']" class="label textarea__label textarea__label_declaration">Описание</label>
          <textarea autocomplete="off" rows="13"
                    :id="KEYS['participationInProjects'] + '.' + index + '.' + KEYS['description']" :name="KEYS['participationInProjects'] + '.' + index + '.' + KEYS['description']"
                    :data-vv-name="KEYS['participationInProjects'] + '.' + index + '.' + KEYS['description']"
                    :placeholder="'Художник-постановщик в 12-13 годах'" :data-vv-as="'Описание'"
                    :key="KEYS['participationInProjects'] + '.' + index + '.' + KEYS['description']"
                    v-validate ="{ rules: { max: 65000 } }"
                    v-model="fields[index][KEYS['description']]"
                    :style="{ minHeight: '76px' }"
                    @input="_handleInputUpdateField"
                    :class="[{ 'error': (verrors.has(KEYS['participationInProjects'] + '.' + index + '.' + KEYS['description'])) }, 'textarea', 'form__textarea_declaration', 'form__textarea_declaration', 'lm-m-textarea-profile-settings' ]">
        </textarea>

          <template v-if="verrors.has(KEYS['participationInProjects'] + '.' + index + '.' + KEYS['description'])">
            <div class="form__notification form__notification_declaration form__notification_declaration_required">{{ verrors.first(KEYS['participationInProjects'] + '.' + index + '.' + KEYS['description']) }}</div>
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
    name: 'project-name',
    description: 'description',
    participationInProjects: 'participation-in-projects'
  }

  const FIELD = { [KEYS['name']]: null, [KEYS['description']]: null }

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
      contentTooltipParticipationInProjects () {
        return `<div style="max-width: 226px;">
          <span style="display: block; margin: 0;">
             Добавьте данные, если вы уже участвовали или участвуете в данный момент в проектах
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
      this.fields = this.value || []
    },
    methods: {
      _handleInputUpdateField () {
        this.$emit('input', this.fields)
      },
      _handleClickPushField () {
        this.fields.push(this._.clone(FIELD))
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
        }).catch(() => {})
      }
    }
  }
</script>

<style scoped>

</style>
