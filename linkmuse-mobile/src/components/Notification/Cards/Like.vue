<template>
  <div class="lm-m-notifications-item">
    <div class="lm-user-block small">
      <div class="lm-user-block-avatar-wrap">
        <img :src="from.avatar" class="lm-user-block-avatar">
        <i class="lm-user-block-avatar-icon like"></i>
      </div>
      <div class="lm-user-block-info">
        <div class="lm-user-block-info-wrap">
          <div class="lm-user-block-info-name"><span>{{ from.name | truncate(50) }}</span></div>
          <div class="lm-user-block-info-action">{{ semantic }} {{ type }}</div>
          <a :href="has(item, 'extra.preview_image') ? 'javascript:void(0)' : item.url"
             class="lm-user-block-info-type" v-if="has(item, 'extra.description')">{{ item.extra.description }}</a>
        </div>
      </div>
      <div class="lm-item-right-image" v-if="has(item, 'extra.preview_image')">
        <media type="photo" :src="item.extra.preview_image" :media="{}">
          <img :src="item.extra.preview_image">
        </media>
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
      if (this.grouped) return `и еще ${this.count} человек оценили`
      if (this.from.sex === 2) return 'оценила'
      return 'оценил'
    },
    type () {
      let type;

      switch (this.item.content_type) {
        case 'photo':
          type = 'ваше фото'
          break;
        case 'video':
          type = 'ваше видео'
          break;
        case 'audio':
          type = 'ваше аудио'
          break;
        case 'casting':
          type = 'ваш кастинг'
          break;
        case 'project':
          type = 'ваш проект'
          break;
        case 'profile_portfolio':
          type = 'ваше портфолио'
          break;
        default:
          type = 'вашу запись'
      }

      return type
    },
    count () {
      if (this.grouped) return (this.item.from.data.length - 1)
    }
  }
}
</script>

