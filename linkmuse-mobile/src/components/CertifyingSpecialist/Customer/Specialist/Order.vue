<template>
  <div :class="['lm-m-profile-cs-item', { 'open': show_review_body }]">
    <div class="lm-user-block">
      <a href="javascript:void(0)">
        <div>
          <img :src="certified_user.avatar" class="lm-user-block-avatar" :alt="certified_user.fullname">
          <div class="lm-user-block-info">
            <div class="lm-user-block-info-name"><span>{{ certified_user.fullname }}</span></div>
            <div class="lm-user-block-info-type">
              {{ formatWorks(service.works) }}
            </div>
          </div>
        </div>
        <div class="lm-user-block-right">
          <div class="lm-cs-arrow" @click="_handleClickShowReviewBody"></div>
          <template v-if="review">
            <div :class="['lm-user-block-rating', rating_class]"> {{ rating | round(1) }} </div>
          </template>
        </div>
      </a>
    </div>
    <div class="lm-m-profile-cs-item-review">
      <div class="text">{{ review.body }}</div>
    </div>
  </div>
</template>

<script>
  import CertifyingSpecialist from '@modules/CertifyingSpecialist'

  export default {
    props: {
      order: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        show_review_body: false
      }
    },
    computed: {
      service () {
        return this.order.service.data
      },
      certified_user () {
        return this.order.certified_user.data
      },
      review () {
        if (!this.order.hasOwnProperty('review')) return
        return this.order.review.data
      },
      rating () {
        if (!this.review) return
        return  this.review.rating
      },
      rating_class () {
        if (!this.review) return
        return CertifyingSpecialist.getRatingClass(this.rating)
      },

    },
    methods: {
      _handleClickShowReviewBody () {
        this.show_review_body = !this.show_review_body
      },
      formatWorks (works) {
        return Object.values(CertifyingSpecialist.getTransformServiceWorkType(works)).join(', ')
      }
    }
  }
</script>

<style scoped>

</style>
