<template>
  <div :class="{ 'notificate--item': true, 'unread': !item.read }">
    <div class="image-user">
      <a :href="from.href">
        <img :src="from.avatar" :alt="from.name">
      </a>
    </div>
    <div class="notificate--item-info">
      <div class="notificate--item-top">
        <a :href="from.href" class="name-user">{{ from.name }}</a>
        <span class="notificate--item-action">
          {{ semantic }} <router-link :to="{ name: 'board.castings.show', params: { slug, id } }" class="name-user">{{ name }}</router-link> {{ type }}
        </span>
      </div>
      <div class="notificate--item-bottom">
        <div class="notificate--item-time">
          <span>{{ date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { has } from '@utils';

  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        has
      }
    },
    computed: {
      from () {
        return this.item.from.data;
      },
      semantic () {
        return 'Кастинг';
      },
      type () {
        return 'опубликован'
      },
      slug () {
        return has(this.item, 'extra.slug') ? this.item.extra.slug : null
      },
      id () {
        return has(this.item, 'extra.id') ? this.item.extra.id : null
      },
      name () {
        return has(this.item, 'extra.name') ? this.item.extra.name : null
      },
      date () {
        return this.$moment(this.item.created_at, 'YYYY-MM-DD HH:mm:ss').fromNow()
      }
    }
  }
</script>
