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
        <span class="notificate--item-action">{{ semantic }} вам стать коллегой</span>
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
      from () {
        return this.item.from.data
      },
      semantic () {
        if (this.from.sex === 2) return 'предлагает'
        return 'предлагает'
      },

      date () {
        return this.$moment(this.item.created_at, 'YYYY-MM-DD HH:mm:ss').fromNow()
      }
    },
    methods: {
      mouseover (item) {
        this.$emit('mouseover', item)
      }
    }
  }
</script>
