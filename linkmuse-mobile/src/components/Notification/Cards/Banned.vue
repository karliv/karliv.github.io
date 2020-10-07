<template>
  <div class="lm-m-notifications-item">
    <div class="lm-user-block small">
      <div class="lm-user-block-avatar-wrap">
        <img :src="from.avatar" class="lm-user-block-avatar">
        <i class="lm-user-block-avatar-icon partner-exclusive partner-exclusive-remove"></i>
      </div>
      <div class="lm-user-block-info">
        <div class="lm-user-block-info-wrap">
          <div class="lm-user-block-info-name"><span>{{ from.name | truncate(50) }}</span></div>
          <div class="lm-user-block-info-action">{{ semantic }} {{ type }}</div>
          <a v-if="has(item, 'extra.name')" :href="item.url" class="lm-user-block-info-type">
            {{ item.extra.name }}
          </a>
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
        if (this.from.sex === 2) return 'заблокировала';
        return 'заблокировал';
      },
      type () {
        let type;

        switch (this.item.content_type) {
          case 'photo':
            type = 'ваше фото';
            break;
          case 'video':
            type = 'ваше видео';
            break;
          case 'audio':
            type = 'ваше аудио';
            break;
          case 'casting':
            type = 'ваш кастинг';
            break;
          case 'project':
            type = 'ваш проект';
            break;
          default:
            type = 'вашу запись';
        }

        return type;
      }
    }
  }
</script>
