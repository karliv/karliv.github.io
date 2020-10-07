<template>
  <div class="modal modal_filters modal_active" v-show="value">
    <div class="modal__content modal__content_filters">
      <div class="form form_filters">
        <div class="row row_justify_between">
          <div class="heading_h4">{{ $t('applications-page.viewed-responses.options') }}</div>
          <template v-if="showReset">
            <button class="btn btn_reset" @click.stop.prevent="_handleClickClearFilter">{{ $t('applications-page.viewed-responses.reset') }}</button>
          </template>
        </div>

        <div class="form__section form__section_filters">
          <div class="form__group form__group_declaration">
            <label for="form__select_declaration_read" class="label select__label select__label_declaration">
              {{ $t('applications-page.viewed-responses.response-status') }}
            </label>
            <lm-select :class="['lm-m-filter-line', { 'filled': (fields.read) }]"
                       v-model="fields.read"
                       :input-required="false"
                       input-id="form__select_declaration_read"
                       input-name="read"
                       data-vv-name="read"
                       :data-vv-as="'Статус'"
                       :placeholder="$t('applications-page.all-statuses.all-statuses')"
                       :placeholderDisabled="true"
                       label=""
                       :multiple="false"
                       :options="sourcesViewedResponse">
            </lm-select>
          </div>
        </div>

        <div class="form__controls form__controls_filters">
          <div class="row row_justify_between">
            <button class="btn btn_secondary" @click.stop.prevent="_handleClickHideFilter">{{ $t('applications-page.viewed-responses.back') }}</button>
            <button class="btn btn_primary" @click.stop.prevent="_handleClickApplyFilter">{{ $t('applications-page.viewed-responses.set') }}</button>
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
    getterType: 'board/casting/response/getField',
    mutationType: 'board/casting/response/updateField',
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
      }
    },
    computed: {
      ...mapFields({
        fields: 'responses.userFilter',
        defaultFields: 'responses.defaultUserFilter'
      }),
      ...mapGetters({
        profile: 'auth/getProfile',
        isAuthorized: 'auth/isAuthorized',
        sources: 'board/casting/getSources'
      }),
      showReset () {
        const fields = this._.omit(this.fields, ['name'])
        const defaultFields = this._.omit(this.defaultFields, ['name'])

        return (this._.isEqual(fields, defaultFields) === false)
      },
      sourcesViewedResponse () {
        return [
          { id: 1, text: 'Просмотрен' },
          { id: 0, text: 'Не просмотрен' }
        ]
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
          } else this.fields[k] = null
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
