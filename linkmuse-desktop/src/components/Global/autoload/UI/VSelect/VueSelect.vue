<template>
  <div :dir="dir" class="v-select style-chooser" :class="stateClasses">
    <no-ssr>
      <div ref="toggle" @mousedown.prevent="toggleDropdown" class="vs__dropdown-toggle">
        <div class="vs__selected-options" ref="selectedOptions">
          <slot v-for="option in selectedValue"
                name="selected-option-container"
                :option="normalizeOptionForSlot(option)"
                :deselect="deselect"
                :multiple="multiple"
                :disabled="disabled">
            <span :key="getOptionKey(option)" class="vs__selected">
              <slot name="selected-option" v-bind="normalizeOptionForSlot(option)">
                {{ getOptionLabel(option) }}
              </slot>
              <button v-if="multiple" :disabled="disabled" @click="deselect(option)" type="button" class="vs__deselect" aria-label="Deselect option" ref="deselectButtons">
                <component :is="childComponents.Deselect" />
              </button>
            </span>
          </slot>

          <slot name="search" v-bind="scope.search">
            <input class="vs__search" v-bind="scope.search.attributes" v-on="scope.search.events" autocomplete="new-password">
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
    </no-ssr>

    <transition :name="transition">
      <ul ref="dropdownMenu" v-if="dropdownOpen" class="vs__dropdown-menu" role="listbox" @mousedown.prevent="onMousedown" @mouseup="onMouseUp">
        <li
          role="option"
          v-for="(option, index) in filteredOptions"
          :key="getOptionKey(option)"
          class="vs__dropdown-option"
          :class="{ 'vs__dropdown-option--selected': isOptionSelected(option), 'vs__dropdown-option--highlight': index === typeAheadPointer, 'vs__dropdown-option--disabled': !selectable(option) }"
          @mouseover="selectable(option) ? typeAheadPointer = index : null"
          @mousedown.prevent.stop="selectable(option) ? select(option) : null"
        >
          <slot name="option" v-bind="normalizeOptionForSlot(option)">
            {{ getOptionLabel(option) }}
          </slot>
        </li>
        <li v-if="!filteredOptions.length" class="vs__no-options" @mousedown.stop="">
          <slot name="no-options">К сожалению, ничего не найдено.</slot>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
  import VueSelect from 'vue-select'
  import Spinner from './VueSelect/Spinner.vue'
  import Deselect from './VueSelect/Deselect.vue'
  import OpenIndicator from './VueSelect/OpenIndicator.vue'

  export default {
    extends: VueSelect,
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
      /**
       * When working with objects, the reduce
       * prop allows you to transform a given
       * object to only the information you
       * want passed to a v-model binding
       * or @input event.
       */
      reduce: {
        type: Function,
        default: option => option.id,
      },
    },
    computed: {
      /**
       * Determines if the clear button should be displayed.
       * @return {Boolean}
       */
      showIndicatorButton () {
        return !this.showClearButton
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

    .vs__search {
      line-height: 34px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

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
