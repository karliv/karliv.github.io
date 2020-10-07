<template>
    <div :class="{ 'empty': isEmpty }">
      <div class="well--header comments-header" v-if="show_header">
        <span>Комментарии </span>
        <div class="count">{{ comments.count }}</div>
      </div>
      <div class="casting-comments--list">
        <comment-item v-for="(comment, index) in comments.data" :key="comment.id"
          :comment="comment"
          :editing.sync="comments.editing"
          @comment:update="_handleUpdateComment"
          @comment:remove="_handleRemoveComment"
          :is_current_user="(isAuthorized && user.id === comment.user.data.user_id)">
        </comment-item>
        <loader class="col-xs-12 pd-26" v-if="comments.loading"></loader>
        <div class="clr"></div>
      </div>
      <template v-if="isAuthorized">
        <comment-input :type="type" :id="id"
         @comment:create="_handleCreateComment"
         :privacy_write_comments="privacy_write_comments"></comment-input>
      </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CommentItem from './helpers/Comment.vue'
import CommentInput from './helpers/Input.vue'

export default {
  props: {
    type: {
      type: String,
      required: true
    },
    id: {
      required: true
    },
    show_header: {
      default: false
    },
    privacy_write_comments: {
      type: Boolean,
      required: true
    }
  },
  components: { CommentItem, CommentInput },
  data () {
    return {
      comments: {
        data: [],
        offset: 0,
        count: 0,
        loading: false,
        editing: false
      }
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/getAuthUser',
      isAuthorized: 'auth/isAuthorized'
    }),
    isEmpty () {
      return (this.comments.count === 0 && this.comments.loading === false)
    }
  },
  created () {
    this.fetchComments()
  },
  methods: {
    fetchComments () {
      let { type, id, comments } = this

      if ( !type || !id) return false

      comments.loading = true

      this.$api.get('/api/v1/comments', { type, id }).then(response => {
        let { data: { data } } = response

        data.forEach(item => comments.data.push(item))
        comments.data.count = data.length
        comments.loading = false
      }).catch(() => {
        comments.loading = false
        throw new Error(`Error loading comments list ${type}/${id}`)
      })
    },
    clearComments () {
      return new Promise((resolve, reject) => {
        this.comments = {
          data: [],
          offset: 0,
          count: 0,
          loading: false
        }

        resolve()
      })
    },
    _handleRemoveComment(comment_id) {
      let index = this.comments.data.map((comment) => comment.id).indexOf(comment_id)

      if (index > -1) {
        this.$delete(this.comments.data, index)
        (this.comments.count >= 1) ? this.comments.count -- : this.comments.count = 0
      }
    },
    _handleCreateComment(comment) {
      this.comments.data.push(comment)
      this.comments.count ++
    },
    _handleUpdateComment(comment_id, { text }) {
      let index = this.comments.data.map((comment) => comment.id).indexOf(comment_id)
      if (index > -1) this.comments.data[index]['text'] = text
    }
  }
}
</script>

<style lang="sass" scoped>
  .comments-header
    span
      display: inline-block
      vertical-align: middle
      font-size: 18px
      letter-spacing: 0.1px
      text-align: left
      color: #333333
      margin-right: 6px
    .count
      font-size: 18px
      letter-spacing: 0.1px
      text-align: left
      color: #979aa0
      display: inline-block
      vertical-align: middle
</style>
