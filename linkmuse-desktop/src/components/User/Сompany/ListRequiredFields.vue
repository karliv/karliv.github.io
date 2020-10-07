<template>
  <ul class="list list_required-fields">
    <li :class="['list__item', { 'list__item_active': true }]">
      <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
      </svg>

      Компания
    </li>

    <template v-if="has(fields, 'functions')">
      <li :class="['list__item', { 'list__item_active': (!!fields['functions']) }]">
        <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
        </svg>

        Функции
      </li>
    </template>

    <template v-if="has(fields, 'other')">
      <li :class="['list__item', { 'list__item_active': (!!fields['other']) }]">
        <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
        </svg>

        Другое
      </li>
    </template>

    <template v-if="has(fields, 'rate')">
      <li :class="['list__item', { 'list__item_active': (!!fields['rate'] && fields['rate'].length && fields['rate'][0]['cost-of-work']) }]">
        <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
        </svg>

        Ставка
      </li>
    </template>

    <template v-if="has(fields, 'participation-in-projects')">
      <li :class="['list__item', { 'list__item_active': (!!fields['participation-in-projects'] && fields['participation-in-projects'].length && fields['participation-in-projects'][0]['project-name']) }]">
        <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
        </svg>

        Участие в проектах
      </li>
    </template>
  </ul>
</template>

<script>
  import { has } from '@utils'
  export default {
    props: {
      fields: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        has
      }
    }
  }
</script>

<style scoped>

</style>
