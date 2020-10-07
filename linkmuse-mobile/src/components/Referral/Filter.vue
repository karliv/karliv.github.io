<template>
  <div class="modal modal_filters modal_active" v-show="value">
    <div class="modal__content modal__content_filters">
      <div class="form form_filters">

        <div class="row row_justify_between">
          <div class="heading_h4">Фильтры</div>
          <template v-if="showReset">
            <button class="btn btn_reset" @click.stop.prevent="_handleClickClearFilter">Сбросить</button>
          </template>
        </div>

        <div class="form__section form__section_filters">
          <div class="form__group form__group_declaration">
            <div class="row row_justify_between">
              <div class="column mr_4">
                <div class="input">
                  <label for="startFrom" class="input__label">Период регистрации</label>
                  <input v-mask-date type="text" placeholder="от"
                         id="startFrom"
                         name="startFrom"
                         data-vv-name="startFrom"
                         :data-vv-as="'От'"
                         ref="startFrom"
                         v-model="fields.startFrom"
                         v-validate="{ rules: { date_format: 'DD.MM.YYYY' } }"
                         :class="[{ 'error': (verrors.has('startFrom')), 'filled': (fields.startFrom && !verrors.has('startFrom')) }, 'input__field', 'input__field_filters']">
                </div>
              </div>
              <div class="column">
                <div class="input">
                  <label for="endTo" class="input__label">&nbsp;</label>
                  <input v-mask-date type="text" placeholder="до"
                         id="endTo"
                         name="endTo"
                         data-vv-name="endTo"
                         :data-vv-as="'До'"
                         ref="endTo"
                         v-model="fields.endTo"
                         v-validate="{ rules: { date_format: 'DD.MM.YYYY', after: ['startFrom', true] } }"
                         :class="[{ 'error': (verrors.has('endTo')), 'filled': (fields.endTo && !verrors.has('endTo')) }, 'input__field', 'input__field_filters']">
                </div>
              </div>
            </div>
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
  import { createHelpers } from 'vuex-map-fields'

  const { mapFields } = createHelpers({
    getterType: 'referral/getField',
    mutationType: 'referral/updateField'
  })

  export default {
    props: {
      value: {
        type: Boolean,
        default: false
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
        fields: 'referrals.filter',
        defaultFields: 'referrals.defaultFilter'
      }),
      showReset () {
        const fields = this._.omit(this.fields, ['query'])
        const defaultFields = this._.omit(this.defaultFields, ['query'])

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
        this._clearFilter().then(() => {
        }).catch(() => {})
      },
      _clearFilter() {
        return new Promise((resolve, reject) => {
          try {
            this.fields = this._.clone(this.defaultFields)

            resolve && resolve()
          } catch (e) {
            reject && reject(e)
          }
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
      },
    }
  }
</script>

<style scoped>

</style>
