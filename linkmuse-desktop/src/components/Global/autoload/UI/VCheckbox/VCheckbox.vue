<template>
  <div class="checkbox form__checkbox">
    <input type="checkbox"
       :id="uid"
       :name="name"
       :value="value"
       :disabled="disabled"
       :checked="isChecked"
       class="checkbox__mark"
       @change="_handleChange"
    />
    <label :for="uid" class="checkbox__label">
      <slot/>
    </label>
  </div>
</template>

<script>
  export default {
    model: {
      prop: 'model',
      event: 'change'
    },
    props: {
      id: {
        type: String,
        default: undefined
      },
      model: {
        type: String | Array,
        default: undefined
      },
      checked: Boolean,
      value: String,
      name: String,
      disabled: Boolean
    },
    data () {
      return {
        uid: ''
      }
    },
    computed: {
      isChecked () {
        if (this.model === undefined) return this.checked
        if (Array.isArray(this.model)) return this.model.indexOf(this.value) !== -1
        return this.model
      }
    },
    mounted () {
      this.generateUniqueID()
    },
    methods: {
      generateUniqueID () {
        if (this.id === undefined) {
          this.uid = `lm-checkbox--${ Math.random().toString(36).substring(2,10) }`
        } else this.uid = this.id
      },
      _handleChange () {
        if (this.disabled) return

        let value = this.model

        if (Array.isArray(value)) {
          value = value.slice()
          const found = value.indexOf(this.value)

          if (found === -1) {
            value.push(this.value)
          } else value.splice(found, 1)
        } else value = !this.isChecked

        this.$emit('change', value)
      }
    }
  }
</script>

<style scoped>

</style>
