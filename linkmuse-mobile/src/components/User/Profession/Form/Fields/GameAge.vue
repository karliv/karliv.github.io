<template>
  <div class="form__group form__group_declaration">
    <label :for="KEYS['ageFrom']" class="label input__label">Игровой возраст</label>
    <div class="form__row form__row_declaration">
      <input type="number" min="1" inputmode="numeric" pattern="[0-9]*"
             :id="KEYS['ageFrom']" :name="KEYS['gameAge'] + '.0.' + KEYS['ageFrom']" :ref="KEYS['gameAge'] + '.0.' + KEYS['ageFrom']"
             :placeholder="'От'" :data-vv-as="'Возраст от'"
             v-model="fields[0][KEYS['ageFrom']]" v-mask-static="'9{1,3}'"
             v-validate="{ rules: { required: (hasAgeTo === true), decimal: 1, min_value: 1, max_value: 100 } }"
             @input="_handleInputUpdateField"
             style="box-sizing: border-box; text-align: right;"
             :class="[{ 'error': (verrors.has(KEYS['gameAge'] + '.0.' + KEYS['ageFrom'])) }, 'input', 'form__input', 'form__input_declaration']">
      <div class="lm-m-dash">-</div>
      <input type="number" min="1" inputmode="numeric" pattern="[0-9]*"
             :id="KEYS['ageTo']" :name="KEYS['gameAge'] + '.0.' + KEYS['ageTo']" :ref="KEYS['gameAge'] + '.0.' + KEYS['ageTo']"
             :placeholder="'До'" :data-vv-as="'Возраст до'"
             v-model="fields[0][KEYS['ageTo']]" v-mask-static="'9{1,3}'"
             v-validate="{ rules: { required: (hasAgeFrom === true), decimal: 1, min_value: 1, max_value: 100, minTarget: KEYS['gameAge'] + '.0.' + KEYS['ageFrom']  } }"
             @input="_handleInputUpdateField"
             :class="[{ 'error': (verrors.has(KEYS['gameAge'] + '.0.' + KEYS['ageTo'])) }, 'input', 'form__input', 'form__input_declaration']">
    </div>

    <template v-if="(verrors.has(KEYS['gameAge'] + '.0.' + KEYS['ageTo']) || verrors.has(KEYS['gameAge'] + '.0.' + KEYS['ageFrom']) )">
      <div class="form__notification form__notification_declaration form__notification_declaration_required" v-if="verrors.has(KEYS['gameAge'] + '.0.' + KEYS['ageTo'])">{{ verrors.first(KEYS['gameAge'] + '.0.' + KEYS['ageTo']) }}</div>
      <div class="form__notification form__notification_declaration form__notification_declaration_required" v-if="verrors.has(KEYS['gameAge'] + '.0.' + KEYS['ageFrom'])">{{ verrors.first(KEYS['gameAge'] + '.0.' + KEYS['ageFrom']) }}</div>
    </template>
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
    computed: {
      hasAgeTo () {
        return Boolean(Boolean(Number(this.fields[0][KEYS['ageTo']])) && Number(this.fields[0][KEYS['ageTo']]))
      },
      hasAgeFrom () {
        return Boolean(Boolean(Number(this.fields[0][KEYS['ageFrom']])) && Number(this.fields[0][KEYS['ageFrom']]))
      }
    },
    watch: {
      value (value) {
        if (value && value.length) {
          this.fields = value
        } else this.fields = [ { [KEYS['ageTo']]: null, [KEYS['ageFrom']]: null } ]
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
