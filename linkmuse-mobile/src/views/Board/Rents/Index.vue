<template>
  <div class="page page_feed">
    <div class="page__header page__header_feed">
      <div class="row row_justify_between">
        <div class="heading_h4">{{ $t('casting-page.rent.ads') }}</div>
      </div>
      <div class="input input_search input_search_feed">
        <svg class="icon icon_size_16 icon_search icon_fill_lm-gray-3">
          <use xlink:href="/dist/img/icons/svg/sprite.svg#icon_search" />
        </svg>
        <input type="text" name="name" ref="name"
               :placeholder="$t('casting-page.rent.search')"
               disabled="disabled"
               :class="['input__field', 'input__field_search', {  }]">
      </div>
      <div class="row">
        <navigation-categories></navigation-categories>
      </div>
    </div>
    <div class="page__content page__content_feed">
      <div class="page__plug page__plug_feed_unavailable">
        <svg class="icon icon_size_lg icon_fill_blue mb_5">
          <use xlink:href="/dist/img/icons/svg/sprite.svg#lm-wait" />
        </svg>
        <div class="heading heading_h5">{{ $t('casting-page.rent.rent-not-available') }}</div>
        <div class="mb_1">{{ $t('casting-page.rent.signup') }}</div>
        <a href="https://linkmuse.typeform.com/to/A3Rn4O" target="_blank" class="btn btn_primary">{{ $t('casting-page.rent.signup-button') }}</a>
      </div>
    </div>
  </div>
</template>

<script>
  import NavigationCategories from '@components/Board/NavigationCategories.vue'

  export default {
    metaInfo: {
      title: 'Аренда'
    },
    components: { NavigationCategories }
  }
</script>

<style scoped>

</style>
