<template>
  <div :dir="dir" class="v-select style-chooser" :class="[{'lm-m-modal-tree-professions lm-m-modal-select-searchable vs--open_full': dropdownOpen}, stateClasses]">

    <template v-if="dropdownOpen === false">
      <div ref="toggle" @mousedown.prevent="openDropdown" class="vs__dropdown-toggle">
        <div class="vs__selected-options" ref="selectedOptions" :style="{paddingTop: (selectedValue.length ? '12px' : '0')}">
          <slot v-for="option in selectedValue"
                name="selected-option-container"
                :option="normalizeOptionForSlot(option)"
                :deselect="deselect"
                :multiple="multiple"
                :disabled="disabled">
            <span :key="getOptionKey(option)" class="vs__selected m-text_bold-2">
              <slot name="selected-option" v-bind="normalizeOptionForSlot(option)">
                {{ getOptionLabel(option) }}
              </slot>
              <button v-if="multiple" :disabled="disabled" @click="deselect(option)" type="button" class="vs__deselect" aria-label="Deselect option" ref="deselectButtons">
                <component :is="childComponents.Deselect" />
              </button>
            </span>
          </slot>
          <slot name="search" v-bind="scope.search">
            <input class="vs__search" :style="{paddingBottom: (selectedValue.length ? '12px' : '0')}" v-bind="scope.search.attributes">
          </slot>
        </div>

        <div class="vs__actions" ref="actions">
          <button v-show="showClearButton"
                  :disabled="disabled"
                  @click="clearSelection"
                  type="button"
                  class="vs__clear"
                  title="Clear selection"
                  ref="clearButton">
            <component :is="childComponents.Deselect" />
          </button>

          <slot name="open-indicator" v-bind="scope.openIndicator">
            <component :is="childComponents.OpenIndicator" v-show="showIndicatorButton" v-if="!noDrop" v-bind="scope.openIndicator.attributes"/>
          </slot>

          <slot name="spinner" v-bind="scope.spinner">
            <component :is="childComponents.Spinner" v-show="mutableLoading" />
          </slot>
        </div>
      </div>
    </template>

    <template v-if="dropdownOpen">
      <div class="modal__content_header modal__content_header_fixed column align_center">
        <div class="row align_center justify_center w_100 mb_3">
          <div class="heading_h5 mb_0">Выберите</div>
          <a href="javascript:void(0)" @click="closeDropdown" class="m-text_bold color_main" style="position:absolute; right:0">Готово</a>
        </div>
      </div>

      <div class="modal__content_body">
        <div class="vs__selected-search" ref="selectedOptions">
          <slot v-for="option in selectedValue"
                name="selected-option-container"
                :option="normalizeOptionForSlot(option)"
                :deselect="deselect"
                :multiple="multiple"
                :disabled="disabled">
          <span :key="getOptionKey(option)" class="vs__selected m-text_bold-2">
            <slot name="selected-option" v-bind="normalizeOptionForSlot(option)">
              {{ getOptionLabel(option) }}
            </slot>
            <button v-if="multiple" :disabled="disabled" @click="deselect(option)" type="button" class="vs__deselect" aria-label="Deselect option" ref="deselectButtons">
              <component :is="childComponents.Deselect" />
            </button>
          </span>
          </slot>
          <slot name="search" v-bind="scope.search">
            <input class="vs__search input__field input__field_search" v-bind="scope.search.attributes" v-on="scope.search.events">
          </slot>
        </div>

        <div ref="dropdownMenu" class="personal-list column" role="listbox">
          <div role="option"
               v-for="(option, index) in filteredOptions"
               :key="getOptionKey(option)"
               class="vs__dropdown-option"
               :class="[ { 'vs__dropdown-option--selected': isOptionSelected(option), 'vs__dropdown-option--highlight': index === typeAheadPointer, 'vs__dropdown-option--disabled': !selectable(option) }]"
               @mouseover="selectable(option) ? typeAheadPointer = index : null"
               @mousedown.prevent.stop="selectable(option) ? select(option) : null">
            <div class="checkbox multiselect__checkbox multiselect__checkbox_declaration">
              <slot name="option" v-bind="normalizeOptionForSlot(option)">
                <span>
                  <template v-if="taggable && search.length && !optionExists(option)">+ Добавить «</template>{{ getOptionLabel(option) }}<template v-if="taggable && search.length && !optionExists(option)">»</template>
                </span>
              </slot>
            </div>
          </div>
          <div v-if="!filteredOptions.length" class="vs__no-options multiselect__group multiselect__group_declaration" @mousedown.stop="">
            <div class="checkbox multiselect__checkbox multiselect__checkbox_declaration">
              <slot name="no-options"><span>К сожалению, ничего не найдено.</span></slot>
            </div>
          </div>
        </div>
      </div>

      <lm-m-loader v-show="mutableLoading"></lm-m-loader>
    </template>
  </div>
</template>

<script>
  import VueSelect from 'vue-select'
  import Spinner from './VueSelect/VueSpinner.vue'
  import Deselect from './VueSelect/Deselect.vue'
  import OpenIndicator from './VueSelect/OpenIndicator.vue'
  import PopupManager from 'mint-ui/src/utils/popup/popup-manager'

  let idSeed = 1;

  const getDOM = function(dom) {
    if (dom.nodeType === 3) {
      dom = dom.nextElementSibling || dom.nextSibling;
      getDOM(dom);
    }
    return dom;
  };

  let scrollBarWidth;
  const getScrollBarWidth = () => {
    if (scrollBarWidth !== undefined) return scrollBarWidth;

    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    document.body.appendChild(outer);

    const widthNoScroll = outer.offsetWidth;
    outer.style.overflow = 'scroll';

    const inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);

    const widthWithScroll = inner.offsetWidth;
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
  };

  export default {
    mixins: [VueSelect],
    props: {
      /**
       * An object with any custom components that you'd like to overwrite
       * the default implementation of in your app. The keys in this object
       * will be merged with the defaults.
       * @see https://vue-select.org/guide/components.html
       * @type {Function}
       */
      components: {
        type: Object,
        default: () => ({
          Spinner,
          Deselect,
          OpenIndicator
        })
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
       * Query Selector used to find the search input
       * when the 'search' scoped slot is used.
       *
       * Must be a valid CSS selector string.
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
       * @type {String}
       */
      searchInputQuerySelector: {
        type: String,
        default: '[type=text]'
      },
      /**
       * Decides whether an option is selectable or not. Not selectable options
       * are displayed but disabled and cannot be selected.
       *
       * @type {Function}
       * @since 3.3.0
       * @param {Object|String} option
       * @return {Boolean}
       */
      selectable: {
        type: Function,
        default: option => true,
      },
      openDelay: {},
      closeDelay: {},
      zIndex: {},
    },

    beforeMount() {
      this._popupId = 'popup-' + idSeed++;
      PopupManager.register(this._popupId, this);
    },

    beforeDestroy() {
      PopupManager.deregister(this._popupId);
      PopupManager.closeModal(this._popupId);
      if (this.bodyOverflow !== null && this.bodyOverflow !== 'hidden') {
        document.body.style.overflow = this.bodyOverflow;
        document.body.style.paddingRight = this.bodyPaddingRight;
      }
      this.bodyOverflow = null;
      this.bodyPaddingRight = null;
    },

    data () {
      return {
        bodyOverflow: null,
        bodyPaddingRight: null,
        rendered: false
      }
    },

    computed: {
      /**
       * Determines if the clear button should be displayed.
       * @return {Boolean}
       */
      showIndicatorButton () {
        return !this.showClearButton
      },
      /**
       * Return the current state of the
       * dropdown menu.
       * @return {Boolean} True if open
       */
      dropdownOpen() {
        return this.noDrop ? false : this.open
      },
    },
    methods: {
      /**
       * Close the dropdown on blur.
       * @emits  {search:blur}
       * @return {void}
       */
      onSearchBlur () {
        // Fixed bug where no-options message could not be closed
        if (this.open && this.search.length === 0 && this.options.length === 0) {
          this.closeSearchOptions()
          return
        }
      },

      /**
       * 'Private' function to close the search options
       * @emits  {search:blur}
       * @returns {void}
       */
      closeSearchOptions () {
        this.closeDropdown()
        this.$emit('search:blur')
      },


      /**
       * Called from this.select after each selection.
       * @param  {Object|String} option
       * @return {void}
       */
      onAfterSelect(option) {
        if (this.closeOnSelect) {
          // this.open = !this.open
          this.open ? this.closeDropdown() : this.openDropdown()
          this.searchEl.blur()
        }
        if (this.clearSearchOnSelect) {
          this.search = ''
        }
      },

      /**
       * Toggle the visibility of the dropdown menu.
       * @param  {Event} e
       * @return {void}
       */
      openDropdown ({ target }) {
        //  don't react to click on deselect/clear buttons,
        //  they dropdown state will be set in their click handlers
        const ignoredButtons = [
          ...(this.$refs['deselectButtons'] || []),
          ...([this.$refs['clearButton']] || [])
        ];

        if (ignoredButtons.some(ref => ref.contains(target) || ref === target)) {
          return;
        }

        if (!this.rendered) {
          this.rendered = true;
        }

        if (this._closeTimer) {
          clearTimeout(this._closeTimer);
          this._closeTimer = null;
        }
        clearTimeout(this._openTimer);

        const openDelay = Number(this.openDelay);
        if (openDelay > 0) {
          this._openTimer = setTimeout(() => {
            this._openTimer = null;
            this.doOpen();
          }, openDelay);
        } else {
          this.doOpen();
        }
      },
      doOpen () {
        if (this.$isServer) return;
        if (this.willOpen && !this.willOpen()) return;
        if (this.open) return;

        const dom = getDOM(this.$el)

        const zIndex = this.zIndex
        if (zIndex) {
          PopupManager.zIndex = zIndex;
        }

        if (this._closing) {
          PopupManager.closeModal(this._popupId);
          this._closing = false;
        }

        PopupManager.openModal(this._popupId, PopupManager.nextZIndex(), dom, '', '')

        if (!this.bodyOverflow) {
          this.bodyPaddingRight = document.body.style.paddingRight;
          this.bodyOverflow = document.body.style.overflow;
        }
        scrollBarWidth = getScrollBarWidth();
        let bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
        if (scrollBarWidth > 0 && bodyHasOverflow) {
          document.body.style.paddingRight = scrollBarWidth + 'px';
        }
        document.body.style.overflow = 'hidden';

        if (getComputedStyle(dom).position === 'static') {
          dom.style.position = 'absolute';
        }

        dom.style.zIndex = PopupManager.nextZIndex();

        this.open = true;

        this.$nextTick(() => {
          this.searchEl.focus();
        })

        this.onOpen && this.onOpen();

        this._opening = false;
      },
      closeDropdown () {
        if (this.willClose && !this.willClose()) return;

        if (this._openTimer !== null) {
          clearTimeout(this._openTimer);
          this._openTimer = null;
        }
        clearTimeout(this._closeTimer);

        const closeDelay = Number(this.closeDelay);

        if (closeDelay > 0) {
          this._closeTimer = setTimeout(() => {
            this._closeTimer = null;
            this.doClose()
          }, closeDelay)
        } else {
          this.doClose();
        }
      },
      doClose () {
        this._closing = true;

        this.onClose && this.onClose();

        setTimeout(() => {
          if (this.bodyOverflow !== 'hidden') {
            document.body.style.overflow = this.bodyOverflow;
            document.body.style.paddingRight = this.bodyPaddingRight;
          }
          this.bodyOverflow = null;
          this.bodyPaddingRight = null;
        }, 200);

        this.open = false;
        // document.body.style.overflow = 'auto';

        PopupManager.closeModal(this._popupId);
        this._closing = false;
      }
    }
  }
</script>

<style lang="scss">
  @import '~vue-select/src/scss/vue-select.scss';

  .style-chooser {
    &.error {
      .vs__dropdown-toggle {
        border: solid 1px #FC2E5F;
      }
    }

    /*.vs__search {*/
    /*  line-height: 34px;*/
    /*  white-space: nowrap;*/
    /*  overflow: hidden;*/
    /*  text-overflow: ellipsis;*/
    /*}*/

    .vs__actions {
      margin-right: 10px;
    }

    .vs__clear {
      margin-right: 0;
    }

    .vs__search::-webkit-search-decoration,
    .vs__search::-webkit-search-cancel-button,
    .vs__search::-webkit-search-results-button,
    .vs__search::-webkit-search-results-decoration {
      -webkit-appearance:none;
    }
  }

  .vs__spinner {
    border-top: 0.45em solid rgba(100, 100, 100, 0.1);
    border-right: 0.45em solid rgba(100, 100, 100, 0.1);
    border-bottom: 0.45em solid rgba(100, 100, 100, 0.1);
    border-left: 0.45em solid rgba(60, 60, 60, 0.45);
  }

  .vs__spinner, .vs__spinner:after {
    width: 2.8em;
    height: 2.8em;
  }

  .vs--disabled .vs__dropdown-toggle,
  .vs--disabled .vs__clear,
  .vs--disabled .vs__search,
  .vs--disabled .vs__selected,
  .vs--disabled .vs__open-indicator {
    border: none;
    background-color: #f3f4f6;
    color: rgba(40, 42, 54, 0.32);
  }
</style>
