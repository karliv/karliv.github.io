<template>
  <div class="lm-m-notifications-item">
    <div class="lm-user-block small">
      <div class="lm-user-block-avatar-wrap">
        <img :src="from.avatar" class="lm-user-block-avatar">
        <i class="lm-user-block-avatar-icon casting"></i>
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
        return 'Информация в проекте';
      },
      type () {
        return 'была обновлена'
      }
    }
  }
</script>
