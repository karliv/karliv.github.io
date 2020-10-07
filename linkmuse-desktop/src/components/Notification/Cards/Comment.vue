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
          <span v-if="has(item, 'extra.comment')" v-html="comment"></span>
        </div>
        <div class="notificate--item-time">
          <i class="comment notificate-icon"></i>
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
      from () {
        return this.item.from.data
      },
      semantic () {
        if (this.from.sex === 2) return 'прокомментировала'
        return 'прокомментировал'
      },
      type () {
        let type

        switch (this.item.content_type) {
          case 'photo':
            type = 'ваше фото'
            break
          case 'video':
            type = 'ваше видео'
            break
          case 'audio':
            type = 'ваше аудио'
            break
          case 'casting':
            type = 'ваш кастинг'
            break
          case 'project':
            type = 'ваш проект'
            break
          default:
            type = 'вашу запись'
        }

        return type
      },
      date () {
        return this.$moment(this.item.created_at, 'YYYY-MM-DD HH:mm:ss').fromNow()
      },
      comment () {
        if (has(this.item, 'extra.comment')) {
          let { extra: { comment } } = this.item

          if (comment) {
            comment = this.$striptags(comment) // Removed all tags
            comment = this.$nl2br(comment) // nl2br to <br>
            comment = this.$emoji(comment) // :emoji: to <img>
          }

          return comment
        } else return null
      }
    },
    methods: {
      mouseover (item) {
        this.$emit('mouseover', item)
      }
    }
  }
</script>
