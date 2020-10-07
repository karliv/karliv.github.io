<template>
  <div class="modal modal_filters modal_active" v-show="value">
    <div class="modal__content modal__content_filters">
      <div class="form form_filters">
        <div class="row row_justify_between">
          <div class="heading_h4">Параметры</div>
          <template v-if="showReset">
            <button class="btn btn_reset" @click.stop.prevent="_handleClickClearFilter">Сбросить</button>
          </template>
        </div>

        <div class="form__section form__section_filters">
          <div class="form__group form__group_declaration">
            <label for="form__select_declaration_state" class="label select__label select__label_declaration">
              Статус объявления
            </label>
            <lm-select :class="['lm-m-filter-line', { 'filled': (fields.state.length) }]"
                       v-model="fields.state"
                       :input-required="false"
                       input-id="form__select_declaration_state"
                       input-name="state"
                       data-vv-name="state"
                       :data-vv-as="'Статус'"
                       :placeholder="'Все статусы'"
                       label=""
                       :multiple="true"
                       :options="sources['stateCasting']">
            </lm-select>
          </div>
        </div>

        <div class="form__controls form__controls_filters">
          <div class="row row_justify_between">
            <button class="btn btn_secondary" @click.stop.prevent="_handleClickHideFilter">Назад</button>
            <button class="btn btn_primary" @click.stop.prevent="_handleClickApplyFilter">Применить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { Indicator, Toast } from 'mint-ui'
  import { createHelpers } from 'vuex-map-fields'

  const { mapFields } = createHelpers({
    getterType: 'board/casting/getField',
    mutationType: 'board/casting/updateField',
  })

  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        parameters: false
      }
    },
    watch: {
      value(val) {
        val ? window.nsWebViewInterface.emit('swipe2Back', true) : window.nsWebViewInterface.emit('swipe2Back', false)
        this.$root.$emit('open-modal-fullscreen', val)
      }
    },
    computed: {
      ...mapFields({
        fields: 'castings.userFilter',
        defaultFields: 'castings.defaultUserFilter'
      }),
      ...mapGetters({
        profile: 'auth/getProfile',
        isAuthorized: 'auth/isAuthorized',
        sources: 'board/casting/getSources'
      }),
      showReset () {
        const fields = this._.omit(this.fields, ['name', 'type'])
        const defaultFields = this._.omit(this.defaultFields, ['name', 'type'])

        return (this._.isEqual(fields, defaultFields) === false)
      }
    },
    methods: {
      /**
       *
       * */
      _handleClickHideFilter () {
        this.$emit('hide')
      },
      /**
       *
       */
      _handleClickApplyFilter () {
        this._handleValidateFields().then(() => {
          this.$emit('apply')
        }).catch(() => {})
      },
      /**
       *
       */
      _handleClickClearFilter () {
        const fields = this._.omit(this.fields, ['name'])

        Object.keys(fields).forEach(k => {
          if (this.fields[k] === null && typeof this.fields[k] === "object") {
            this.fields[k] = null
          } else if (typeof this.fields[k] === 'object') {
            this.fields[k] = []
          } else this.fields[k] = ''
        })
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
      }
    }
  }
</script>

<style scoped>

</style>
