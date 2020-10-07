<template>
  <div class="lm-m-article-wrap">
    <div class="lm-m-article-wrap--item">
      <div class="lm-m-black-head-nav">
        <div class="lm-m-black-head-nav-wrap">
          <div class="left">
            <a @click="_handleClickPreviousPage">
              <i class="lm-back-icon"></i>
              <span>К списку</span>
            </a>
          </div>
          <div class="right">
            <template v-if="isCurrentUser && interview.approve === 0">
              <i class="lm-more-icon" @click="_handleClickActionSheetClick"></i>
            </template>
          </div>
        </div>
      </div>
      <template v-if="(interview)">
        <div class="lm-m-article-wrap--item-head">
          <img class="background" :src="interview.images['media_social']" :alt="interview.title">
          <div class="lm-m-article-overflow">
            <img class="image" :src="interview.images['346x442']" :alt="interview.title">
          </div>
        </div>
        <div class="lm-m-article-overflow-item">
          <div class="lm-m-article-overflow-item-title">
            <router-link class="category bio" :to="{ name: 'interviews.category', params: { category: category.slug  } }">
              {{ category.name }}
            </router-link>
            <span class="date">{{ [interview.date, 'DD-MM-YYYY'] | moment('DD MMM Y') }}</span>
          </div>
          <h1 class="blog-title">{{ interview.title | truncate(50) }}</h1>
          <div class="lm-m-article-item-user">
            <router-link :to="{ name: 'user.show', params: { username: user.username } }" class="lm-user-block small">
              <img :src="user.avatar" class="lm-user-block-avatar">
              <div class="lm-user-block-info">
                <div class="lm-user-block-info-name"><span>{{ user_name }}</span></div>
              </div>
            </router-link>
            <div class="lm-m-article-item-share">
              <social-share :url="interview.href" :title="`Bio ${interview.title}`" :description="$truncate(interview.description, 50)" :media="interview.og.vk"></social-share>
            </div>
            <div class="lm-m-article-item-view">
              <like-el type="interview" :id="interview.id" :count="likes.count" :liked="likes.liked" gtm="LIKE_ARTICLE_LIST"/>
            </div>
          </div>
          <div class="text" v-html="interview.description"></div>
        </div>
      </template>
      <template v-if="(!interview)">
        <span>Ошибка, интервью не найдено.</span>
      </template>
    </div>
    <actionsheet :actions="sheet.actions" v-model="sheet.value" cancel-text=""></actionsheet>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    metaInfo: {
      title: 'Интервью'
    },
    data () {
      return {
        sheet: {
          value: false,
          actions: [
            {
              name: 'Подтвердить публикацию',
              method: this._handleClickApprove
            }
          ]
        }
      }
    },
    async asyncData ({store, route}) {
      let { category, slug } = route.params

      await Promise.all([
        store.dispatch('interview/getInterviewByCategoryAndSlug', { category, slug })
      ])
    },
    computed: {
      ...mapGetters({
        authUser: 'auth/getAuthUser',
        isAuthorized: 'auth/isAuthorized',
        interview: 'interview/getSingleInterviewData',
        loading: 'interview/getSingleInterviewLoading',
        error: 'interview/getSingleInterviewError'
      }),
      category () {
        return this.interview.category
      },
      user () {
        return (this.interview) ? this.interview.user.data : null
      },
      user_name () {
        return this.interview.user_name || this.user.name;
      },
      likes () {
        return this.interview.likes
      },
      isCurrentUser () {
        return (this.user && this.authUser.id === this.user.id)
      }
    },
    methods: {
      _handleClickActionSheetClick () {
        this.sheet.value = true
      },
      _handleClickApprove () {
        if (!this.isAuthorized) {
          this.$root.$emit('open-access-auth-modal');
          return false;
        }

        this.$api.patch(`/api/v1/interviews/${this.interview.id}/approve`, { status: 1 }).then((response) => {
          this.$store.dispatch('interview/setSingleInterviewDataFields', { approve: 1 })
        }).catch((response) => {
          this.$store.dispatch('interview/setSingleInterviewDataFields', { approve: 0 })
        });
      },
      _handleClickPreviousPage () {
        if (window.history.length > 2) {
          this.$router.go(-1)
        } else {
          this.$router.push({ name: 'interviews.index' })
        }
      }
    }
  }
</script>
