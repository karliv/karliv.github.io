<template>
  <ul class="list list_required-fields">
    <li :class="['list__item', { 'list__item_active': true }]">
      <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
        <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
      </svg>

      Профессия
    </li>

    <template v-if="has(fields, 'game-age')">
      <li :class="['list__item', { 'list__item_active': (!!fields['game-age'] && fields['game-age'].length && fields['game-age'][0]['from'] && fields['game-age'][0]['to']) }]">
        <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
        </svg>

        Игровой возраст
      </li>
    </template>

    <template v-if="has(fields, 'directions')">
      <li :class="['list__item', { 'list__item_active': (!!fields['directions']) }]">
        <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
        </svg>

        Направления
      </li>
    </template>

    <template v-if="has(fields, 'service-in-theaters')">
      <li :class="['list__item', { 'list__item_active': (!!fields['service-in-theaters']) }]">
        <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
        </svg>

        Служба в театрах
      </li>
    </template>

    <template v-if="has(fields, 'equipment')">
      <li :class="['list__item', { 'list__item_active': (!!fields['equipment']) }]">
        <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
        </svg>

        Оборудование
      </li>
    </template>

    <template v-if="has(fields, 'functions')">
      <li :class="['list__item', { 'list__item_active': (!!fields['functions']) }]">
        <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
        </svg>

        Функции
      </li>
    </template>

    <template v-if="has(fields, 'programs-software')">
      <li :class="['list__item', { 'list__item_active': (!!fields['programs-software']) }]">
        <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
        </svg>

        Программы / софт
      </li>
    </template>

    <template v-if="has(fields, 'instruments')">
      <li :class="['list__item', { 'list__item_active': (!!fields['instruments']) }]">
        <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
        </svg>

        Жанры
      </li>
    </template>

    <template v-if="has(fields, 'music-services')">
      <li :class="['list__item', { 'list__item_active': (!!fields['music-services']) }]">
        <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
        </svg>

        Музыкальные сервисы
      </li>
    </template>

    <template v-if="has(fields, 'actors-starred-in')">
      <li :class="['list__item', { 'list__item_active': (!!fields['actors-starred-in']) }]">
        <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
        </svg>

        Актеры снимались в
      </li>
    </template>

    <template v-if="has(fields, 'introducing-actors-models')">
      <li :class="['list__item', { 'list__item_active': (!!fields['introducing-actors-models']) }]">
        <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
        </svg>

        Представляю актеров / моделей
      </li>
    </template>

    <template v-if="has(fields, 'company')">
      <li :class="['list__item', { 'list__item_active': (!!fields['company']) }]">
        <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
        </svg>

        Компания
      </li>
    </template>

    <template v-if="has(fields, 'work-experience')">
      <li :class="['list__item', { 'list__item_active': (!!fields['work-experience']) }]">
        <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
        </svg>

        Стаж работы
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

    <template v-if="has(fields, 'competitions-and-awards')">
      <li :class="['list__item', { 'list__item_active': (!!fields['competitions-and-awards']) }]">
        <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
        </svg>

        Конкурсы и награды
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

    <template v-if="hasPortfolio">
      <li :class="['list__item', { 'list__item_active': (hasPhotos || hasVideos) }]">
        <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
        </svg>

        Портфолио
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

    <template v-if="has(fields, 'higher-education')">
      <li :class="['list__item', { 'list__item_active': (!!fields['higher-education'] && fields['higher-education'].length && fields['higher-education'][0]['university']) }]">
        <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
        </svg>

        Высшее образование
      </li>
    </template>

    <template v-if="has(fields, 'training')">
      <li :class="['list__item', { 'list__item_active': (!!fields['training'] && fields['training'].length && fields['training'][0]['organization']) }]">
        <svg class="d-icon d-icon_size_16 d-icon_checkmark mr_2">
          <use xlink:href="/dist/web/img/icons/svg/sprite.svg#checkbox__mark" />
        </svg>

        Повышение квалификации
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
      },
      hasPortfolio: {
        type: Boolean,
        default: false
      },
      hasPhotos: {
        type: Boolean,
        default: false
      },
      hasVideos: {
        type: Boolean,
        default: false
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
