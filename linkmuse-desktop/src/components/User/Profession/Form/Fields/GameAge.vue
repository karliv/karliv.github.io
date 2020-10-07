<template>
  <div class="d-input d-input_row mb_6">
    <label :for="KEYS['ageFrom']" class="d-input__label mr_4">Игровой возраст</label>
    <div class="column">
      <div class="d-row w_100 align_center">
        <input type="number" min="1" inputmode="numeric" pattern="[0-9]*"
               :id="KEYS['ageFrom']" :name="KEYS['gameAge'] + '.0.' + KEYS['ageFrom']" :ref="KEYS['gameAge'] + '.0.' + KEYS['ageFrom']"
               :placeholder="'От'" :data-vv-as="'Возраст от'"
               v-model="fields[0][KEYS['ageFrom']]" v-mask-static="'9{1,3}'"
               v-validate="{ rules: { required: (hasAgeTo === true), decimal: 1, min_value: 1, max_value: 100 } }"
               @input="_handleInputUpdateField"
               :class="[{ 'error': (verrors.has(KEYS['gameAge'] + '.0.' + KEYS['ageFrom'])) }, 'd-input__field', 'mr_2' ]">
        <div class="color_gray-4">-</div>
        <input type="number" min="1" inputmode="numeric" pattern="[0-9]*"
               :id="KEYS['ageTo']" :name="KEYS['gameAge'] + '.0.' + KEYS['ageTo']" :ref="KEYS['gameAge'] + '.0.' + KEYS['ageTo']"
               :placeholder="'До'" :data-vv-as="'Возраст до'"
               v-model="fields[0][KEYS['ageTo']]" v-mask-static="'9{1,3}'"
               v-validate="{ rules: { required: (hasAgeFrom === true), decimal: 1, min_value: 1, max_value: 100, minTarget: KEYS['gameAge'] + '.0.' + KEYS['ageFrom']  } }"
               @input="_handleInputUpdateField"
               :class="[{ 'error': (verrors.has(KEYS['gameAge'] + '.0.' + KEYS['ageTo'])) }, 'd-input__field', 'ml_2' ]">
      </div>
      <template v-if="(verrors.has(KEYS['gameAge'] + '.0.' + KEYS['ageTo']) || verrors.has(KEYS['gameAge'] + '.0.' + KEYS['ageFrom']) )">
        <div class="d-input__notification d-input__notification_required" v-if="verrors.has(KEYS['gameAge'] + '.0.' + KEYS['ageTo'])">{{ verrors.first(KEYS['gameAge'] + '.0.' + KEYS['ageTo']) }}</div>
        <div class="d-input__notification d-input__notification_required" v-if="verrors.has(KEYS['gameAge'] + '.0.' + KEYS['ageFrom'])">{{ verrors.first(KEYS['gameAge'] + '.0.' + KEYS['ageFrom']) }}</div>
      </template>
    </div>
  </div>
</template>

<script>
  const KEYS = {
    ageTo: 'to',
    ageFrom: 'from',
    gameAge: 'game-age'
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
        fields: [
          {
            [KEYS['ageTo']]: null,
            [KEYS['ageFrom']]: null
          }
        ]
      }
    },
    watch: {
      value (value) {
        if (value && value.length) {
          this.fields = value
        } else this.fields = [ { [KEYS['ageTo']]: null, [KEYS['ageFrom']]: null } ]
      }
    },
    computed: {
      hasAgeTo () {
        return Boolean(Boolean(Number(this.fields[0][KEYS['ageTo']])) && Number(this.fields[0][KEYS['ageTo']]))
      },
      hasAgeFrom () {
        return Boolean(Boolean(Number(this.fields[0][KEYS['ageFrom']])) && Number(this.fields[0][KEYS['ageFrom']]))
      }
    },
    created () {
      if (this.value && this.value.length) {
        this.fields = this.value
      }
    },
    methods: {
      _handleInputUpdateField () {
        this.$emit('input', (this.hasAgeTo || this.hasAgeFrom) ? this.fields : [])
      }
    }
  }
</script>

<style scoped>

</style>
