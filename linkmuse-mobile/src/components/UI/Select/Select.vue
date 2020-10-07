<template>
  <div :class="['lm-dropdown-wrap', { disabled, 'fill': (multiple && value && value.length) }]">
    <label :for="inputId" v-if="label">{{ label }} <font class="required" v-if="inputRequired">*</font></label>
    <div class="lm-dropdown">
      <template v-if="(isMultiple === false)">
        <div class="lm-dropdown-popup-wrap" @click="_handleTapSelect" v-if="isSearchable">
          <lm-m-loader v-if="mutableLoading" style="line-height: 40px;"></lm-m-loader>
        </div>
        <select :class="{ 'lm-dropdown-selected': (!value) }" :id="inputId" :name="inputName" :disabled="disabled" :tabindex="tabindex"
                @input="_handleOnInputSelect" @change="_handleOnChangeSelect" :value="value">
          <option v-if="placeholder" value selected :disabled="placeholderDisabled" :hidden="placeholderHidden">{{ placeholder }}</option>
          <option :value="option.id" v-for="option in options">{{ option.text }}</option>
        </select>
      </template>

      <template v-else-if="(isMultiple === true)">
        <div @click="_handleTapDropDownMultiple" :class="['lm-dropdown-selected']">
          <template v-if="(multipleValue.length === 0)">{{ placeholder }}</template>
          <template v-if="(multipleValue.length > 0)">{{ multipleValue.map((value) => value.text).join(', ') | truncate(100) }}</template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  // TODO: ВСЕ ЭТО ДЕРЬМО НУЖНО ПЕРЕПИСАТЬ
  import Vue from 'vue'
  import PopupSearchable from './Popup/PopupSearchable.vue'

  const ConstructorPopupSearchable = Vue.extend(PopupSearchable)

  export default {
    props: {
      value: {
        default: null
      },
      inputId: {
        type: String
      },
      inputName: {
        required: true
      },
      options: {
        type: Array,
        default() {
          return []
        },
      },
      disabled: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: ''
      },
      placeholderDisabled: {
        type: Boolean,
        default: false
      },
      placeholderHidden: {
        type: Boolean,
        default: false
      },
      inputRequired: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: 'Выберите'
      },
      label: {
        type: String,
        default: 'label'
      },
      tabindex: {
        type: Number,
        default: null
      },
      multiple: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      searchable: {
        type: Boolean,
        default: false
      },
      filterable: {
        type: Boolean,
        default: false
      },
    },
    data () {
      return {
        mutableLoading: false,
        instancePopupSearchable: null
      }
    },
    watch: {
      loading (val) {
        this.mutableLoading = val
      }
    },
    computed: {
      multipleValue () {
        if (!this.multiple) return this.value
        return this.options.filter(o => this.value.includes(o.id))
      },
      isMultiple () {
        return !!this.multiple
      },
      isSearchable () {
        return !!this.searchable
      }
    },
    methods: {
      _handleOnInputSelect (event) {
        this.$emit('input', event.target.value)
      },
      _handleOnChangeSelect (event) {
        this.$emit('change', event.target.value)
      },
      _handleTapDropDownMultiple () {
        if (this.disabled || !this.options.length) return

        setTimeout(() => {
          this.$selectMultiple({
            value: this.value,
            title: this.label,
            options: this.options
          }).then((value) => {
            this.$emit('input', value)
          }).catch((args) => {})
        }, 100)
      },
      _handleTapSelect () {
        if (!this.isSearchable || this.mutableLoading || this.instancePopupSearchable) return false

        this.instancePopupSearchable = new ConstructorPopupSearchable({
          // parent: this,
          el: document.createElement('div'),
          propsData: {
            title: this.title,
            options: this.options,
            searchable: this.searchable,
            filterable: this.filterable
          }
        }).$mount()

        document.body.appendChild(this.instancePopupSearchable.$el)

        this.$nextTick(() => {
          this.instancePopupSearchable.$on('search', (...args) => {
            this.$emit('search', ...args)
          })

          this.instancePopupSearchable.$on('input', (value) => {
            this.$emit('input', value)
          })

          this.instancePopupSearchable.$on('popup:close', () => {
            if (this.instancePopupSearchable) {
              this.instancePopupSearchable.$el.remove()

              this.instancePopupSearchable = null
            }
          })
        })
      },
      _handleClickRemoveMultipleValue (value) {
        if (!this.multiple) return false
        let index = this.value.indexOf(value)
        if (index > -1) {
          this.value.splice(index, 1)
          this.$emit('input', this.value)
        }
      }
    }
  }
</script>
