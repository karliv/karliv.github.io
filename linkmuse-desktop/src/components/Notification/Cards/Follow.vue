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
        <span class="notificate--item-action">{{ semantic }} <a :href="item.url">{{ type }}</a></span>
      </div>
      <div class="notificate--item-bottom">
        <div class="notificate--item-content">
          <div class="notificate--user--lists-mini" v-if="grouped">
            <a :href="item.from.data[n].href" v-for="n in ((count < 5) ? count : 5)">
              <img :src="item.from.data[n].avatar" :alt="item.from.data[n].name">
            </a>
            <a href="javascript:void(0)" v-if="item.from.data.length > 5">
              <span> {{ count - 5 }}</span>
            </a>
          </div>
        </div>
        <div class="notificate--item-time">
          <i class="icon-ok subscribe notificate-icon"></i>
          <span>{{ date }}</span>
        </div>
        <a :href="item.url" v-if="has(item, 'extra.preview_image')">
          <img class="notificate--item-right-image" :src="item.extra.preview_image">
        </a>
      </div>
    </div>
  </div>
</template>
<script>

  import { has } from '@utils'

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
        return (this.has(this.item, 'count') && this.item.from.data.length > 1)
      },
      from () {
        if (this.grouped) return this.item.from.data[0]
        return this.item.from.data
      },
      semantic () {
        if (this.grouped) return `и еще ${this.count} человек подписались`
        if (this.from.sex === 2) return 'подписалась'
        return 'подписался'
      },
      type () {
        return 'на вас'
      },
      date () {
        return this.$moment(this.item.created_at, 'YYYY-MM-DD HH:mm:ss').fromNow()
      },
      count () {
        if (this.grouped) return (this.item.from.data.length - 1)
      }
    },
    methods: {
      mouseover (item) {
        this.$emit('mouseover', item)
      }
    }
  }
</script>
