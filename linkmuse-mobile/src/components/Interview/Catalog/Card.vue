<template>
  <div :class="['lm-m-interviews--item', { 'not-publish': (interview.approve === 0) }]">
    <template v-if="(interview.approve === 0)">
      <corner-ribbon style="font-size: 13px;">Не опубликовано</corner-ribbon>
    </template>
    <div class="lm-m-interviews--item--head">
      <like-custom-el :class="['lm-icon--like--blog', { 'active': interview.likes['liked'] }]"
                      type="interview" :id="interview.id"
                      :count="likes.count" :liked="likes.liked"
                      gtm="LIKE_ARTICLE_LIST" @like="_handleCreateLike">
      </like-custom-el>
      <router-link :to="{ name: 'interviews.show', params: { category: category.slug, slug: interview.slug } }">
        <img :src="interview.images['254x318']" :alt="interview.title">
      </router-link>
    </div>
    <div class="lm-m-interviews--item--bottom">
      <router-link :to="{ name: 'interviews.show', params: { category: category.slug, slug: interview.slug } }">
        <div class="lm-m-interviews--item--name">«{{ interview.quote | truncate(50) }}»</div>
      </router-link>
      <router-link :to="{ name: 'user.show', params: { username: user.username } }" class="lm-user-block">
        <img :src="user.avatar" class="lm-user-block-avatar">
        <div class="lm-user-block-info">
          <div class="lm-user-block-info-name"><span>{{ user_name }}</span></div>
          <div class="lm-user-block-info-type">{{ interview['user_description'] | truncate(21) }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      interview: {
        type: Object,
        required: true
      }
    },
    computed: {
      category () {
        return this.interview.category
      },
      user () {
        return this.interview.user.data
      },
      user_name () {
        return this.interview.user_name || this.user.name;
      },
      likes () {
        return this.interview.likes
      }
    },
    methods: {
      _handleCreateLike(count, liked) {
        this.$store.dispatch('interview/setInterviewOnCatalogFiledById', {
          id: this.interview.id,
          key: 'likes',
          value : { count, liked }
        })
      }
    }
  }
</script>

<style scoped>

</style>
