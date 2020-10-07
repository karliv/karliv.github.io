<template>
  <no-ssr>
    <div :class="[{ disabled, 'open': dropdownOpen, }, 'lm-dropdown', position]">
      <input ref="search" v-model="search" @focus="openDropdown" @click="openDropdown" @blur="gobacktomodel()" :placeholder="placeholder" :readonly="!filter" :class="[{ 'readonly': !filter }, 'lm-dropdown-selected']" autocomplete="off" :disabled="disabled">

      <i ref="icon" class="lm-dropdown-icon" @click="openDropdown" v-show="!dropdownOpen && !filter"></i>
      <i ref="clear" class="lm-close" @click="clearSearch" v-show="dropdownOpen || filter && value"></i>

      <div class="lm-dropdown-menu">
        <ul :style="{ 'max-height': maxHeight, 'margin': hideResults || !filter ? '0' : '0 0 0.75rem' }">
          <li v-for="(option, index) in filteredOptions" :key="index">
            <a @mousedown.prevent="select(option)" :style="{ 'color': isColor }" :class="[{ select: isOptionSelected(option) }, 'lm-dropdown-menu--item']">
              <slot name="option" v-bind="option">
                {{ getLabel(option) }}
              </slot>
            </a>
          </li>
          <li v-if="!filteredOptions.length" class="no-options">
            <slot name="no-options"><a href="javascript:void(0)">{{ noMatching }}</a></slot>
          </li>
        </ul>
      </div>
    </div>
  </no-ssr>
</template>

<script>

export default {
  props: {
    /**
     * Contains the currently selected value. Very similar to a
     * `value` attribute on an <input>.
     * @type {Object||String||null}
     */
    value: {
      default: null
    },
    /**
     * Initial value showing on `i-select`
     * @type {String}
     */
    initial: {
      type: String,
      default: ''
    },
    /**
     * Equivalent to the `placeholder` attribute on an `<input>`.
     * Used in filter
     * @type {String}
     */
    placeholder: {
      type: String,
      default: 'Введите запрос'
    },
    /**
     * Alternative message to show when has no matching on filter
     * @type {String}
     */
    noMatching: {
      type: String,
      default: 'К сожалению, ничего не найдено.'
    },
    /**
     * An array of strings or objects to be used as dropdown choices.
     * If you are using an array of objects, vue-select will look for
     * a `label` key (ex. [{label: 'This is Foo', value: 'foo'}]). A
     * custom label key can be set with the `label` prop.
     * @type {Array}
     */
    options: {
      type: Array,
      default () {
        return []
      }
    },
    /**
     * This select will return multiple results?
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
      default: false
    },
    /**
     * Tells what key to use when generating option
     * labels when each `option` is an object.
     * @type {String}
     */
    label: {
      type: String,
      default: 'text'
    },
    /**
     * Return to v-model only a string instead an object.
     * Enter with key name and return this value
     * @type {String}
     */
    return: {
      type: String,
      default: 'id'
    },
    /**
     * Limit how much results will be avaliable in Dropdown
     * @type {String}
     */
    limit: {
      type: String,
      default: '5'
    },
    /**
     * When True a input search will be avaliable.
     * @type {Boolean}
     */
    filter: {
      type: Boolean,
      default: false
    },
    /**
     * Disable the entire component.
     * @type {Boolean}
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Convert All Exibed Text to UPPERCASE.
     * @type {Boolean}
     */
    uppercase: {
      type: Boolean,
      default: false
    },
    /**
     * Hide results from Dropdown
     * when filteredOptions is called
     * @type {Boolean}
     */
    hideResults: {
      type: Boolean,
      default: false
    },
    /**
     * Display element inline
     * its mean, no borders
     * @type {Boolean}
     */
    inline: {
      type: Boolean,
      default: false
    },
    /**
     * Sets the max-height property on the dropdown list.
     * @deprecated
     * @type {String}
     */
    maxHeight: {
      type: String,
      default: '200px'
    },
    /**
     *
     */
    position: {
      type: String,
      required: false,
      validator: value => ['top', 'bottom' ].indexOf(value) !== -1
    },
    /**
     * Integration with iComponents, personalize colors and tooltips.
     * Also personalization is avaliable with `i-select` class in CSS
     */
    isBackground: String,
    isOutline: String,
    isColor: String,
    isTooltip: String,
    isPosition: String
  },
  data () {
    return {
      search: '',
      dropdownOpen: false,
      mutableOptions: [],
      multipleReturn: [],
      height: false
    }
  },
  watch: {
    /**
     * When the value prop changes, update
     * the internal mutableValue.
     * @param  {mixed} val
     * @return {void}
     */
    value (val, old) {
      this.mutableValue = val
      if (this.return) {
        const initialValueWithReturn = this.return && this.mutableOptions.find(o => o[this.return] === val)
        this.mutableValue = initialValueWithReturn || val
      }
      val && this.setLabel(this.mutableValue)
    },
    /**
     * Update options list
     * when the father change
     * the value passed
     * into this property
     * @param  {mixed} val
     * @return {void}
     */
    options (val) {
      this.mutableOptions = val

      if (this.return) {
        const initialValueWithReturn = this.return && val.find(o => o[this.return] === this.value)

        this.mutableValue = initialValueWithReturn || this.getLabel(this.value) || this.model
        this.search = this.getLabel(this.mutableValue)
      } else {
        if (this.value) { return console.warn(`[i-select warn]: It's impossible identify the value "${this.value}"`) }
      }
    },
    /**
     * Make initial reactive
     * @param  {mixed} val
     * @return {void}
     */
    initial (val) {
      this.mutableValue = val
    }
  },
  computed: {
    /**
     * Return Selected value to v-model.
     * @return {Object|String}
     */
    model: {
      get () {
        return this.mutableValue
      },
      set (v) {
        if (this.return) {
          if (!this.multiple) {
            return this.$emit('input', v[this.return])
          } else {
            return this.$emit('input', v.map(each => each[this.return]))
          }
        }
        //   this.$emit('input', v);
      }
    },
    /**
     * The currently displayed options, filtered
     * by the search elements value. If tagging
     * true, the search text will be prepended
     * if it doesn't already exist.
     *
     * @return {array}
     */
    filteredOptions () {
      if (!this.filter) return this.mutableOptions.slice(0, +this.limit)
      const search = (this.search || '').toString().toLowerCase()
      const options = this.mutableOptions.filter(option => {
        if (typeof option === 'object') {
          if (option.hasOwnProperty(this.label)) {
            return (
              option[this.label]
                .toString()
                .toLowerCase()
                .indexOf(search) > -1
            )
          } else {
            return console.warn(`[v-select warn]: Label key "option.${this.label}"`)
          }
        }
        return (option.toString().toLowerCase().indexOf(search) > -1)
      })
      return options.slice(0, +this.limit)
    },
    style () {
      return {
        'background-color': this.isBackground,
        'text-transform': this.uppercase ? 'uppercase' : '',
        'border-color': this.isOutline,
        color: this.isColor
      }
    }
  },
  /**
   * Clone props into mutable values,
   * attach any event listeners.
   */
  created () {
    this.mutableOptions = this.options.slice(0)

    const initialValueWithReturn = this.return && this.mutableOptions.find(o => o[this.return] === this.value)

    this.mutableValue = initialValueWithReturn || this.initial
    this.search = this.getLabel(this.mutableValue)
  },
  methods: {
    /**
     * Toggle the visibility of the dropdown menu.
     * Close dropdown when clicked outside.
     * @param  {Event} e
     * @return {void}
     */
    toggleDropdown (e) {
      let isClickOutside =
            e.target != this.$refs.dropdown &&
            e.target != this.$refs.selected &&
            e.target != this.$refs.results &&
            e.target != this.$refs.toggle &&
            e.target != this.$refs.search &&
            e.target != this.$refs.clear &&
            e.target != this.$refs.icon &&
            e.target != this.$el
      isClickOutside && this.closeDropdown()
    },
    /**
     * Open Dropdown
     * @param  {Event} e
     * @return {void}
     */
    openDropdown (e) {
      this.filter && (this.search = '')

      this.$refs.search && this.$refs.search.focus()
      this.dropdownOpen = true
      this.$nextTick(() => {
        this.container = document.querySelectorAll('body')[0]
        if (this.container) {
          this.container.addEventListener('click', this.toggleDropdown)
        }
      })
    },
    /**
     * Close Dropdown
     * @param  {Event} e
     * @return {void}
     */
    closeDropdown () {
      this.dropdownOpen = false
      this.container.removeEventListener('click', this.toggleDropdown, false)
    },
    /**
     * Select a given option.
     * @param  {Object|String} option
     * @return {void}
     */
    select (option, close = true) {
      if (!this.multiple) {
        this.model = option
      } else {
        const index = this.multipleReturn.findIndex(o => o === option)

        if (index < 0) this.multipleReturn.push(option)
        else this.multipleReturn.splice(index, 1)

        this.model = this.multipleReturn
      }
      this.setLabel(option)

      close && this.closeDropdown()
    },
    /**
     * Reutilize function to Set Label
     * @param  {Object || String} val
     */
    setLabel (val) {
      if (this.multiple) {
        this.search = this.getLabel(this.multipleReturn).join(', ')
      } else this.search = this.getLabel(val)
    },
    /**
     * Callback to generate the label text. If {option}
     * is an object, returns option[this.label] by default.
     * @type {String}
     * @param  {Object || String} option
     * @return {String}
     */
    getLabel (option) {
      if (!option) return ''

      if (typeof option === 'object' && this.label && !!option[this.label]) {
        return option[this.label]
      } else {
        if (this.multiple) {
          if (option.length) {
            return option.map(each => each[this.label])
          } else return []
        } else {
          const label = this.mutableOptions.find(i => i[this.return] == option)
          console.warn(`Label key "${this.label}" does not exist in option selected "${option}" is ${label}`)
          if (label) {
            return label[this.label]
          } else return option
        }
      }
    },
    isOptionSelected (option) {
      if (!this.multiple) {
        return this.mutableValue === option
      } else return this.multipleReturn.some(each => each === option)
    },
    gobacktomodel () {
      if (this.multiple) {
        this.search = this.getLabel(this.multipleReturn).join(', ')
      } else this.search = this.getLabel(this.mutableValue)
    },
    clearSearch () {
      if (this.filter && this.value)
        this.value = null

      this.search = this.initial
      this.closeDropdown()
      this.$emit('input', undefined)
      this.multiple && (this.multipleReturn = [])
    }
  }
}
</script>

<style lang="sass">
  .lm-dropdown
    padding: 0
    height: 2.5rem
    min-width: 6rem
    width: 100%
    cursor: pointer
    position: relative
    display: inline-block
    word-wrap: break-word
    white-space: normal
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none

    .clear
      font-style: normal
      color: #808792
      position: absolute
      right: 14px
      top: 10px
      font-size: 8px

    .lm-dropdown-selected
      width: 100%
      background: transparent

      &.readonly
        cursor: pointer

      &:disabled
        background-color: #F0EFF4

    .lm-dropdown-menu
      z-index: 1000
      min-height: 100%
      background-clip: padding-box

      ul
        padding: 0
        margin: 0
        text-align: left
        list-style: none
        overflow: auto

        li
          margin: 0

          &.no-options
            a
              color: #808792
              font-size: 14px
              display: block
              width: 100%
              white-space: nowrap
              overflow: hidden
              -o-text-overflow: ellipsis
              text-overflow: ellipsis
              padding: 16px 14px 0 14px
</style>
