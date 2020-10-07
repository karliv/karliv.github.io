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
        <span class="notificate--item-action">{{ semantic }} {{ type }}</span>
      </div>
      <div class="notificate--item-bottom">
        <div class="notificate--item-content" style="margin: 7px 0">
          <a class="button lm-outline-button very-small disapprove-btn-notify" href="javascript:void(0)"
             @click="_handleClickDisapproveFollow" style="display: none">Отклонить</a>
          <template v-if="(loading === false)">
            <a class="button lm-primary-button very-small approve-btn-notify" href="javascript:void(0)"
               @click="_handleClickApproveFollow">Подтвердить</a>
          </template>
         <lm-loader v-if="(loading === true)" :style="{ width: '139px', margin: '7px 0' }"></lm-loader>
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
        has,
        loading: false
      }
    },
    computed: {
      from () {
        return this.item.from.data
      },
      semantic () {
        if (this.from.sex === 2) return 'отправила'
        return 'отправил'
      },
      type () {
        return 'Вам запрос на подписку'
      },
      date () {
        return this.$moment(this.item.created_at, 'YYYY-MM-DD HH:mm:ss').fromNow()
      }
    },
    methods: {
      mouseover (item) {
        this.$emit('mouseover', item)
      },
      _handleClickDisapproveFollow () {
        this.loading = true
        let { id: user_id } = this.from

        this.$api.post('/api/v1/follow/disapprove', { user_id }).then(response => {
          this.loading = false
          this.$notify({ type: 'success', title: 'Успешно', text: 'Вы отклонили запрос на подписку.' })
        }, response => {
          this.loading = false
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
        })
      },
      _handleClickApproveFollow () {
        this.loading = true
        let { id: user_id } = this.from

        this.$api.post('/api/v1/follow/approve', { user_id }).then(response => {
          this.loading = false
          this.$emit('approve', this.item.id)
          this.$notify({ type: 'success', title: 'Успешно', text: 'Вы приняли запрос на подписку.' })
        }, response => {
          this.loading = false
          this.$notify({ type: 'error', title: 'Ошибка', text: 'Произошла ошибка.' })
        })
      }
    }
  }
</script>
<style lang="sass" scoped>
  .disapprove-btn-notify, .approve-btn-notify
    cursor: pointer
</style>
