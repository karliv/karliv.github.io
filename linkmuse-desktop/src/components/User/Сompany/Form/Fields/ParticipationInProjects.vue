<template>
  <div class="column w_100">
    <div class="heading heading_h4 mb_0 d-input_row justify_between">
      <div class="align-center">
        Участие в проектах
        <tooltip class="align-center" effect="scale" placement="bottom" :content="contentTooltipParticipationInProjects">
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
      <div :class="['column', { 'mt_12' : (index >= 1), 'mt_9' : (index === 0) }]" :key="`participation-in-projects-${index}`">
        <div class="d-input d-input_row mb_6">
          <label :for="KEYS['participationInProjects'] + '.' + index + '.' + KEYS['name']" class="d-input__label d-input__label_required">Проект</label>
          <div class="column">
            <input type="text" autocomplete="off"
                   :id="KEYS['participationInProjects'] + '.' + index + '.' + KEYS['name']" :name="KEYS['participationInProjects'] + '.' + index + '.' + KEYS['name']"
                   :data-vv-name="KEYS['participationInProjects'] + '.' + index + '.' + KEYS['name']"
                   :key="KEYS['participationInProjects'] + '.' + index + '.' + KEYS['name']"
                   :placeholder="'Поле чудес'" :data-vv-as="'Проект'"
                   v-validate ="{ rules: { required: true, max: 255 } }"
                   v-model="fields[index][KEYS['name']]"
                   @input="_handleInputUpdateField"
                   :class="[{ 'error': (verrors.has(KEYS['participationInProjects'] + '.' + index + '.' + KEYS['name'])) }, 'd-input__field', 'w_100' ]">

            <template v-if="verrors.has(KEYS['participationInProjects'] + '.' + index + '.' + KEYS['name'])">
              <div class="d-input__notification d-input__notification_required">{{ verrors.first(KEYS['participationInProjects'] + '.' + index + '.' + KEYS['name']) }}</div>
            </template>
          </div>
        </div>

        <div class="d-textarea d-input_row">
          <label :for="KEYS['participationInProjects'] + '.' + index + '.' + KEYS['description']" class="d-input__label">Описание</label>

          <div class="column">
            <div class="d-row" ref="descriptionRow">
              <textarea-autosize autocomplete="off"
                        :id="KEYS['participationInProjects'] + '.' + index + '.' + KEYS['description']" :name="KEYS['participationInProjects'] + '.' + index + '.' + KEYS['description']"
                        :data-vv-name="KEYS['participationInProjects'] + '.' + index + '.' + KEYS['description']"
                        :placeholder="'Описание проекта'" :data-vv-as="'Описание'"
                        :key="KEYS['participationInProjects'] + '.' + index + '.' + KEYS['description']"
                        v-validate ="{ rules: { max: 65000 } }"
                        v-model="fields[index][KEYS['description']]"
                        :min-height="76" :max-height="350"
                        @input="_handleInputUpdateField"
                        :class="[{ 'error': (verrors.has(KEYS['participationInProjects'] + '.' + index + '.' + KEYS['description'])) }, 'd-textarea', 'w_100' ]">
              </textarea-autosize>
            </div>
            <template v-if="verrors.has(KEYS['participationInProjects'] + '.' + index + '.' + KEYS['description'])">
              <div class="d-input__notification d-input__notification_required">{{ verrors.first(KEYS['participationInProjects'] + '.' + index + '.' + KEYS['description']) }}</div>
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
        return `<div style="max-width: 188px;">
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
