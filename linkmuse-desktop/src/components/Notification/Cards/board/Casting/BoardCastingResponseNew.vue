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
          <router-link :to="{ name: 'board.castings.show', params: { slug, id }, query: { responses: true } }">
           {{ semantic }} {{ name }} {{ type }}
          </router-link>
        </span>
      </div>
      <div class="notificate--item-bottom">
        <div class="notificate--item-time">
          <i class="icon-plus_L add notificate-icon"></i>
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
      grouped () {
        return (has(this.item, 'count') && this.item.from.data.length > 1)
      },
      from () {
        if (this.grouped) return this.item.from.data[0]
        return this.item.from.data
      },
      semantic () {
        if (this.grouped) return `Новые (${this.count}) отклики на кастинг`
        return 'Новый отклик на кастинг'
      },
      type () {
        return ''
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
      count () {
        if (this.grouped) return (this.item.from.data.length - 1)
      },
      date () {
        return this.$moment(this.item.created_at, 'YYYY-MM-DD HH:mm:ss').fromNow()
      }
    }
  }
</script>
