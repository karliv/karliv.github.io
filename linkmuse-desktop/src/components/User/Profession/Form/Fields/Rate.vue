<template>
  <div>
    <div class="d-input d-input_row mb_6">
      <label :for="KEYS['costOfWork']" class="d-input__label">Стоимость работы (от)</label>

      <input type="number" min="1" inputmode="numeric" pattern="[0-9]*"
             :id="KEYS['costOfWork']" :name="KEYS['rate'] + '.0.' + KEYS['costOfWork']"
             :placeholder="'Введите сумму'" :data-vv-as="'Сумма'"
             v-model="fields[0][KEYS['costOfWork']]" v-mask-numeric
             v-validate="'numeric|min:1|max_value:9999999'"
             @input="_handleInputUpdateField"
             :class="[{ 'error': (verrors.has(KEYS['rate'] + '.0.' + KEYS['costOfWork'])) }, 'd-input__field', 'mr_4']">

      <lm-select
        :input-id="KEYS['currency']"
        :input-name="KEYS['rate'] + '.0.' + KEYS['currency']"
        :data-vv-name="KEYS['rate'] + '.0.' + KEYS['currency']"
        :key="KEYS['rate'] + '.0.' + KEYS['currency']"
        data-vv-as="Валюта"
        :options="currencies"
        v-model="fields[0][KEYS['currency']]"
        :placeholder="'₽'"
        :multiple="false"
        :filter="false"
        :position="'bottom'"
        @change="_handleInputUpdateField"
        :disabled="(hasCostOfWork === false)"
        v-validate="{ rules: { required: (hasCostOfWork === true) } }"
        style="width: 72px"
        :class="['lm-dropdown-wrap--n', { 'error': (verrors.has(KEYS['rate'] + '.0.' + KEYS['currency'])) }]">
      </lm-select>
    </div>

    <div class="d-input d-input_row">
      <label :for="KEYS['periodSelection']" class="d-input__label">Период оплаты</label>

      <lm-select
        :input-id="KEYS['periodSelection']"
        :input-name="KEYS['rate'] + '.0.' + KEYS['periodSelection']"
        :data-vv-name="KEYS['rate'] + '.0.' + KEYS['periodSelection']"
        :key="KEYS['rate'] + '.0.' + KEYS['periodSelection']"
        data-vv-as="Период оплаты"
        :options="periods"
        v-model="fields[0][KEYS['periodSelection']]"
        :placeholder="'Не выбран'"
        :multiple="false"
        :filter="false"
        :position="'bottom'"
        @change="_handleInputUpdateField"
        :disabled="(hasCostOfWork === false)"
        v-validate="{ rules: { required: (hasCostOfWork === true) } }"
        :class="['lm-dropdown-wrap--n', 'w_100', { 'error': (verrors.has(KEYS['rate'] + '.0.' + KEYS['periodSelection'])) }]">
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
