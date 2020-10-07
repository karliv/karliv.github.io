<template>
  <mt-popup :class="['lm-m-modal-wrap', 'lm-m-modal-tree-professions', 'lm-m-modal-select-searchable', 'm-text', 'pb_0']" v-model="modal" position="center" :modal="false">
    <div class="modal__content_tree-professions form_tree-professions">
      <div class="modal__content_header modal__content_header_fixed column align_center">
        <div class="row align_center justify_center w_100 mb_3">
          <div class="heading_h5 mb_0">{{ title }}</div>
          <a href="javascript:void(0)" @click="_handleClickCancel" class="m-text_bold color_main" style="position:absolute; right:0">Готово</a>
        </div>
      </div>

      <div :class="['modal__content_body', { 'modal__content_body-empty': isEmpty }]" ref="wrapper">
        <div class="input input_search input_search_feed">
          <svg :class="['icon', 'icon_size_16', 'icon_search', (searchFocused) ? 'icon_fill_blue' : 'icon_fill_lm-gray-3']">
            <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_search"></use>
          </svg>
          <input type="text" name="search" ref="search" autocomplete="false"
                 v-model="search"
                 data-lm-key="search"
                 :placeholder="'Поиск'"
                 @focus="_handleFocusFieldSearchUsers"
                 @blur="_handleBlurFieldSearchUsers"
                 :class="['input__field', 'input__field_search']">
          <button class="btn btn_close" v-if="(search)" @click="_handleClickCloseSearching"></button>
        </div>

        <lm-m-loader v-if="mutableLoading" :style="{ marginTop: '15px' }"></lm-m-loader>

        <template v-if="(isEmpty === false && mutableLoading === false)">
          <div class="personal-list column">
            <div class="multiselect__group multiselect__group_declaration" v-for="option in filteredOptions" :key="option.id">
              <div class="checkbox multiselect__checkbox multiselect__checkbox_declaration" @click="_handleSelectOption(option.id)">
                <span>{{ option.text }}</span>
              </div>
            </div>
          </div>
        </template>

        <template v-else-if="(isEmpty === true)">
          <div class="page__plug page__plug_feed_empty-list mt_1">
            <svg class="icon icon_size_lg icon_fill_blue mb_5">
              <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_info" />
            </svg>
            <div class="heading heading_h5">Мы ничего не нашли</div>
            <div class="m-text_normal-2">Попробуйте другой запрос или<br> повторите попытку позже</div>
          </div>
        </template>
      </div>
    </div>
  </mt-popup>

</template>

<script>
  import { Popup } from 'mint-ui'
  import ajax from './../mixins/ajax'

  export default {
    mixins: [ajax],
    name: 'PopupQuery',
    components: { 'mt-popup': Popup },
    props: {
      title: {
        type: String,
        title: 'Выберите'
      },
      options: {
        type: Array,
        default() {
          return []
        }
      },
      /**
       * When true, existing options will be filtered
       * by the search text. Should not be used in conjunction
       * with taggable.
       * @type {Boolean}
       */
      filterable: {
        type: Boolean,
        default: true
      },
      /**
       * Enable/disable filtering the options.
       * @type {Boolean}
       */
      searchable: {
        type: Boolean,
        default: true
      },
      /**
       * Tells vue-select what key to use when generating option
       * labels when each `option` is an object.
       * @type {String}
       */
      label: {
        type: String,
        default: 'text'
      },
      /**
       * Callback to generate the label text. If {option}
       * is an object, returns option[this.label] by default.
       *
       * Label text is used for filtering comparison and
       * displaying. If you only need to adjust the
       * display, you should use the `option` and
       * `selected-option` slots.
       *
       * @type {Function}
       * @param  {Object || String} option
       * @return {String}
       */
      getOptionLabel: {
        type: Function,
        default(option) {
          if (typeof option === 'object') {
            if (!option.hasOwnProperty(this.label)) {
              return console.warn(
                `[vue-select warn]: Label key "option.${this.label}" does not` +
                ` exist in options object ${JSON.stringify(option)}.\n`
              )
            }
            return option[this.label]
          }
          return option;
        }
      },
      /**
       * Callback to determine if the provided option should
       * match the current search text. Used to determine
       * if the option should be displayed.
       * @type   {Function}
       * @param  {Object || String} option
       * @param  {String} label
       * @param  {String} search
       * @return {Boolean}
       */
      filterBy: {
        type: Function,
        default(option, label, search) {
          return (label || '').toLowerCase().indexOf(search.toLowerCase()) > -1
        }
      },
      /**
       * Callback to filter results when search text
       * is provided. Default implementation loops
       * each option, and returns the result of
       * this.filterBy.
       * @type   {Function}
       * @param  {Array} list of options
       * @param  {String} search text
       * @param  {Object} vSelect instance
       * @return {Boolean}
       */
      filter: {
        "type": Function,
        default(options, search) {
          return options.filter((option) => {
            let label = this.getOptionLabel(option)
            if (typeof label === 'number') {
              label = label.toString()
            }
            return this.filterBy(option, label, search)
          });
        }
      },
      emptyOption: {
        type: Object,
        default() {
          return {
            id: null,
            text: 'Не выбрано'
          }
        }
      }
    },
    data () {
      return {
        search: '',
        modal: true,
        mutableOptions: [],
        searchFocused: false
      }
    },
    computed: {
      isEmpty () {
        return (this.mutableOptions.length === 0 && this.mutableLoading === false)
      },
      filteredOptions () {
        const optionList = [this.emptyOption].concat(this.mutableOptions)

        if (!this.filterable) {
          return optionList
        }

        return this.search.length ? this.filter(optionList, this.search, this) : optionList;
      }
    },
    created () {
      this.mutableOptions = this.options
    },
    methods: {
      _processingClose () {

      },
      _handleInputMtPopup (value) {
        if (value === false) {
          this._processingClose()
        }
      },
      _handleClickCancel () {
        this.$emit('popup:close')
        this._handleInputMtPopup(false)
      },
      _handleSelectOption (value) {
        this.$emit('input', value)
        this._handleClickCancel()
      },
      _handleFocusFieldSearchUsers () {
        this.searchFocused = true
      },
      _handleBlurFieldSearchUsers () {
        this.searchFocused = false
      },
      _handleClickCloseSearching () {
        this.search = null
      }
    }
  }
</script>
