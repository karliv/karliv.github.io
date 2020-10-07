<template>
  <div class="casting-comments--item">
    <a :href="user.href" class="image-user">
      <img :src="user.avatar" :alt="user.name">
    </a>
    <div class="casting-comments--info">
      <div class="casting-comments-top">
        <a :href="user.href" target="_blank" class="name-user">{{ user.name }}</a>
        <div class="action-comments">
          <div @click="_handleClickEdit(comment.id)" class="casting-comments--item--edit icon-edit" v-if="is_current_user && editing === false && editable.enabled === false"></div>
          <div class="casting-comments--item--remove icon-close2" @click="_handleClickRemove(comment.id)" v-if="is_current_user"></div>

          <tooltip :enable="!isToday(date)" effect="scale" placement="top" :content="$options.filters.moment([ date ], 'D MMMM YYYY в HH:mm')">
            <span>{{ isToday(date) ? ($options.filters.moment([ date ], 'HH:mm')) : ($options.filters.moment([ date ], 'D MMM')) }}</span>
          </tooltip>
        </div>
      </div>

      <template v-if="editable.enabled === true">
        <span v-if="editable.enabled" class="edit-comment-text">Редактирование</span>

        <emoji-input-area name="comment"
          :class="{ 'comment-edit-textarea': true, 'error': verrors.has('comment') }"
          id="emoji-area-comment--edit"
          placeholder="Редактировать комментарий"
          :readonly="false"
          v-validate="'required'"
          key="comment"
          data-vv-name="comment"
          @key:enter="_handleClickSaveEdit"
          @key:esc="_handleClickCancelEdit"
          v-model="editable.fields.text">
        </emoji-input-area>

        <div class="emoji" @click="_handleShowEmojiPicker" id="emoji-button-comment--edit">
          <emoji-input-picker v-if="emoji.picker"
              ref="emoji"
              area="emoji-area-comment--edit"
              btn="emoji-button-comment--edit"
              @hide="_handleHideEmojiPicker"
              @insert:emoji="_handleInsertEmoji"
              class="link-muse-emoji-picker">
          </emoji-input-picker>
        </div>

        <div class="edit-comment-action">
          <a class="cancel" @click="_handleClickCancelEdit">Отменить</a>
          <a class="save" @click="_handleClickSaveEdit">Сохранить</a>
        </div>
      </template>

      <div v-if="editable.enabled === false" v-html="text"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    },
    is_current_user: {
      type: Boolean,
      default: false
    },
    editing: {
      type: Boolean
    }
  },
  data() {
    return {
      editable: {
        enabled: false,
        loading: false,
        fields: {
          text: null
        }
      },
      emoji: {
        picker: false
      }
    }
  },
  computed: {
    text() {
      let { text } = this.comment;

      if (text) {
        text = this.$striptags(text); // Removed all tags
        text = this.$nl2br(text); // nl2br to <br>
        text = this.$emoji(text); // :emoji: to <img>
        text = this.$anchorme(text); // find link and to <a>
      }

      return text;
    },
    user() {
      return this.comment.user.data
    },
    date() {
      return this.comment.created_at
    }
  },
  methods: {
    _handleClickRemove(comment_id) {
      this.$confirm({
        title: 'Удаление комментария',
        message: 'Вы уверены, что хотите удалить комментарий?',
      }).then((args) => {
        this.$api.delete(`/api/v1/comments/${comment_id}`).then(response => {
          this.$emit('comment:remove', comment_id);
        }).catch(() => {
          throw new Error(`Error removed comment ${comment_id}`)
        })
      }).catch((args) => {});
    },
    _handleClickEdit(comment_id) {
      if (this.editing === false) {
        this.editable = {
          enabled: true,
          fields: {
            text: this.comment.text
          }
        };
        this.$emit('update:editing', true)
      }
    },
    _handleClickCancelEdit() {
      return new Promise((resolve, reject) => {
        this.editable = {
          enabled: false,
          loading: false,
          fields: {
            text: null
          }
        };
        this.$emit('update:editing', false)
      })
    },
    _handleClickSaveEdit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          if (this.editable.loading) return;

          this.editable.loading = true;

          let { id } = this.comment
          let { fields: { text } } = this.editable

          if (text !== this.comment.text) {
            this.$api.patch(`/api/v1/comments/${id}`, { text }).then(response => {
              let { data: { data }} = response
              this.$emit('comment:update', id, { text });
              this._handleClickCancelEdit();
            }).catch(() => {
              throw new Error(`Error update comment ${id}`)
            })
          } else this._handleClickCancelEdit();
        } else {
          // TODO:: Add toast
          console.log('Заполните поле ввода комментария');
        }
      })
    },
    _handlePasteImage () {},
    _handleShowEmojiPicker () {
      this.emoji.picker = true
    },
    _handleHideEmojiPicker () {
      this.emoji.picker = false
    },
    _handleInsertEmoji (text) {
      this.$emit('parse:emoji', text)
    },
    isToday(date) {
      let context = this.$moment(date);
      return this.$moment().isSame(context, 'd');
    }
  }
}
</script>

<style lang="sass" scoped>
  .casting-comments--item
    position: relative
    .emoji
      height: 34px;
      width: 34px;
      text-align: center;
      line-height: 34px;
      color: #6C7482;
      position: absolute;
      right: 55px;
      top: -webkit-calc(50% - 17px);
      top: -moz-calc(50% - 17px);
      top: calc(50% - 17px);
      cursor: pointer;
      background-image: url('data:image/svg+xml;charset=utf-8,<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"24"%20height%3D"24"%20viewBox%3D"410%2020%2024%2024"><desc>%20Created%20with%20Sketch.<%2Fdesc><g%20fill%3D"none"><rect%20x%3D"410"%20y%3D"20"%20width%3D"24"%20height%3D"24"%2F><path%20d%3D"M422%2039.5L422%2039.5C426.1%2039.5%20429.5%2036.1%20429.5%2032%20429.5%2027.9%20426.1%2024.5%20422%2024.5%20417.9%2024.5%20414.5%2027.9%20414.5%2032%20414.5%2036.1%20417.9%2039.5%20422%2039.5L422%2039.5ZM422%2041C417%2041%20413%2037%20413%2032%20413%2027%20417%2023%20422%2023%20427%2023%20431%2027%20431%2032%20431%2037%20427%2041%20422%2041ZM419%2036.1C419.7%2036.6%20420.7%2037%20422%2037%20423.3%2037%20424.3%2036.6%20425%2036.1%20425.5%2035.8%20425.8%2035.4%20425.9%2035.1%20426.1%2034.7%20426%2034%20426%2034%20426%2034%20418%2034%20418%2034%20418%2034%20417.9%2034.7%20418.1%2035.1%20418.2%2035.4%20418.5%2035.8%20419%2036.1ZM419%2032C419.6%2032%20420%2031.3%20420%2030.5%20420%2029.7%20419.6%2029%20419%2029%20418.4%2029%20418%2029.7%20418%2030.5%20418%2031.3%20418.4%2032%20419%2032ZM425%2032C425.6%2032%20426%2031.3%20426%2030.5%20426%2029.7%20425.6%2029%20425%2029%20424.4%2029%20424%2029.7%20424%2030.5%20424%2031.3%20424.4%2032%20425%2032Z"%20fill%3D"%23828A99"%2F><%2Fg><%2Fsvg>');
      background-repeat: no-repeat;
      background-position: center center;
      -webkit-background-size: 28px 28px;
      -moz-background-size: 28px;
      -o-background-size: 28px;
      background-size: 28px;
</style>
