<template>
  <div>
    <div class="form__group form__group_declaration">
      <div class="form__row form__row_declaration">
        <div class="form__column form__column_declaration">
          <label :for="KEYS['costOfWork']" class="label input__label">Стоимость работы (от)</label>
          <input type="number" min="1" inputmode="numeric" pattern="[0-9]*"
                 :id="KEYS['costOfWork']" :name="KEYS['rate'] + '.0.' + KEYS['costOfWork']"
                 :placeholder="'Введите сумму'" :data-vv-as="'Сумма'"
                 v-model="fields[0][KEYS['costOfWork']]" v-mask-numeric
                 v-validate="'numeric|min:1|max_value:9999999'"
                 @input="_handleInputUpdateField"
                 :class="[{ 'error': (verrors.has(KEYS['rate'] + '.0.' + KEYS['costOfWork'])) }, 'input', 'form__input', 'form__input_declaration' ]">
        </div>
        <div class="form__column form__column_declaration form__column_declaration_payment form__column_declaration_payment_currency" style="min-width: 72px;">
          <label :for="KEYS['currency']" class="label input__label">
            Валюта
          </label>
          <lm-select :input-id="KEYS['currency']"
            :input-name="KEYS['rate'] + '.0.' + KEYS['currency']"
            :data-vv-name="KEYS['rate'] + '.0.' + KEYS['currency']"
            :key="KEYS['rate'] + '.0.' + KEYS['currency']"
            data-vv-as="Валюта"
            :options="currencies"
            v-model="fields[0][KEYS['currency']]"
            :placeholder="'Валюта'"
            :placeholderDisabled="true"
            :placeholderHidden="true"
            label=""
            @change="_handleInputUpdateField"
            :disabled="(hasCostOfWork === false)"
            v-validate="{ rules: { required: (hasCostOfWork === true) } }"
            :class="[{ 'error': (verrors.has(KEYS['rate'] + '.0.' + KEYS['currency'])) }]">
          </lm-select>
        </div>
      </div>
    </div>

    <div class="form__group form__group_declaration">
      <label :for="KEYS['periodSelection']" class="label input__label">Период оплаты</label>
      <lm-select :input-id="KEYS['periodSelection']"
        :input-name="KEYS['rate'] + '.0.' + KEYS['periodSelection']"
        :data-vv-name="KEYS['rate'] + '.0.' + KEYS['periodSelection']"
        :key="KEYS['rate'] + '.0.' + KEYS['periodSelection']"
        data-vv-as="Период оплаты"
        :options="periods"
        v-model="fields[0][KEYS['periodSelection']]"
        placeholder="Не выбран"
        :placeholderDisabled="true"
        :placeholderHidden="true"
        label=""
        @change="_handleInputUpdateField"
        :disabled="(hasCostOfWork === false)"
        v-validate="{ rules: { required: (hasCostOfWork === true) } }"
        :class="[{ 'error': (verrors.has(KEYS['rate'] + '.0.' + KEYS['periodSelection'])) }]">
      </lm-select>
    </div>
  </div>
</template>

<script>
  const KEYS = {
    rate: 'rate',
    currency: 'currency',
    costOfWork: 'cost-of-work',
    periodSelection: 'period-selection'
  }

  export default {
    inject: ['$validator'],
    props: {
      value: {
        default: null
      },
      currencies: {
        type: Array,
        default: []
      },
      periods: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
        KEYS,
        fields: [
          {
            [KEYS['currency']]: null,
            [KEYS['costOfWork']]: null,
            [KEYS['periodSelection']]: null
          }
        ]
      }
    },
    computed: {
      hasCostOfWork () {
        return Boolean(Boolean(Number(this.fields[0][KEYS['costOfWork']])) && Number(this.fields[0][KEYS['costOfWork']]))
      }
    },
    watch: {
      value (value, old) {
        if (value !== old) {
          if (value && value.length) {
            this.fields = value
          } else this.fields = [ { [KEYS['currency']]: null, [KEYS['costOfWork']]: null, [KEYS['periodSelection']]: null } ]
        }
      }
    },
    created () {
      if (this.value && this.value.length) {
        this.fields = this.value
      }
    },
    mounted () {
      if (!this.fields[0][KEYS['currency']]) {
        this.fields[0][KEYS['currency']] = this.currencies && this.currencies.length ? this.currencies[0]['id'] : null
        this.fields[0][KEYS['periodSelection']] = this.periods && this.periods.length ? this.periods[0]['id'] : null
      }
    },
    methods: {
      _handleInputUpdateField () {
        this.$emit('input', this.hasCostOfWork ? this.fields : [])
      }
    }
  }
</script>

<style scoped>

</style>
