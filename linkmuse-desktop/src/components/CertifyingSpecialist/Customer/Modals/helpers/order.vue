<template>
  <div style="margin-bottom: 8px;">
    <div class="sertificate-item" style="border-bottom: solid 1px #f3f4f6">
      <div class="left" style="width: 350px;">
        <a :href="certified_user.href" target="_blank" class="lm-user-block">
          <img :src="certified_user.avatar"
               :alt="certified_user.fullname"
               class="lm-user-block-avatar">
          <div class="lm-user-block-info" style="width: 270px;">
            <div class="lm-user-block-info-name">{{ certified_user.fullname }}
            </div>
            <div class="lm-user-block-info-type" v-if="certified_user.category && certified_user.category.length">
              {{ certified_user.category.join('/') | truncate(17) }}
            </div>
          </div>
        </a>
      </div>
      <div class="right" style="text-align: right; padding-right: 8px;">
        <strong :class="[ 'lm-rating', rating_class ]" v-if="review">{{ rating | round(1) }}</strong>
      </div>
    </div>
    <div :class="[{ 'clickable': limit_review_body },  'sertificate-item--review']" v-if="review.body" @click="_handleClickShowReviewBody">
      <span class="title">Отзыв:</span>
      <i :class="[{ 'open': show_review_body }, 'arrow-review']" v-if="limit_review_body"></i>
      <template>
        <div class="text" v-if="(!collapse_review_body)">{{ review.body | truncate(MAX_LENGTH_BODY_REVIEW) }}</div>
        <collapse v-model="show_review_body" v-if="collapse_review_body" :transition-duration="150">
          <div class="text">{{ review.body }}</div>
        </collapse>
      </template>
    </div>
  </div>
</template>

<script>
import { Collapse } from 'uiv'
const MAX_LENGTH_BODY_REVIEW = 40
import CertifyingSpecialist from '@modules/CertifyingSpecialist'

export default {
  components: { 'collapse': Collapse },
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      MAX_LENGTH_BODY_REVIEW,
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
    limit_review_body() {
      if (!this.review) return
      return (this.review.body.length > MAX_LENGTH_BODY_REVIEW)
    },
    collapse_review_body() {
      if (!this.review) return
      return (this.show_review_body && this.limit_review_body)
    },
    rating() {
      if (!this.review) return
      return  this.review.rating
    },
    rating_class () {
      if (!this.review) return
      return CertifyingSpecialist.getRatingClass(this.rating)
    }
  },
  methods: {
    _handleClickShowReviewBody() {
      this.show_review_body = !this.show_review_body
    }
  }
}
</script>

