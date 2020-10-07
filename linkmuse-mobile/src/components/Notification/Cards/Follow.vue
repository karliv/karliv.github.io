<template>
  <div class="lm-m-notifications-item">
    <div class="lm-user-block small">
      <div class="lm-user-block-avatar-wrap">
        <img :src="from.avatar" class="lm-user-block-avatar">
        <i class="lm-user-block-avatar-icon subscribe"></i>
      </div>
      <div class="lm-user-block-info">
        <div class="lm-user-block-info-wrap">
          <div class="lm-user-block-info-name"><span>{{ from.name | truncate(50) }}</span></div>
          <a href="javascript:void(0)" class="lm-user-block-info-type">{{ semantic }} {{ type }}</a>
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
        return (this.has(this.item, 'count') && this.item.from.data.length > 1);
      },
      from () {
        if (this.grouped) return this.item.from.data[0];
        return this.item.from.data;
      },
      semantic () {
        if (this.grouped) return `и еще ${this.count} человек подписались`;
        if (this.from.sex === 2) return 'подписалась';
        return 'подписался';
      },
      type () {
        return 'на вас';
      },
      count () {
        if (this.grouped) return (this.item.from.data.length - 1)
      }
    }
  }
</script>
