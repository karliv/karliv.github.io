<template>
  <div class="lm-m-notifications-item">
    <div class="lm-user-block small">
      <div class="lm-user-block-avatar-wrap">
        <img :src="from.avatar" class="lm-user-block-avatar">
        <i class="lm-user-block-avatar-icon partner partner-subscribe"></i>
      </div>
      <div class="lm-user-block-info">
        <div class="lm-user-block-info-wrap">
          <div class="lm-user-block-info-name"><span>{{ from.name | truncate(50) }}</span></div>
          <div class="lm-user-block-info-action">{{ semantic }} запрос на сотрудничество</div>
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
        if (this.from.sex === 2) return 'отправила'
        return 'отправил'
      }
    }
  }
</script>
