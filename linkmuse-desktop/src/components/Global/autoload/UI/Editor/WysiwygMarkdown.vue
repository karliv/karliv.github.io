<template>
  <div class="markdown-editor markdown-body">
    <textarea :disabled="disabled" :placeholder="placeholder" class="markdown-body-textarea"></textarea>
  </div>
</template>

<script>
  import marked from 'marked'
  import { isBrowser } from '@utils'

  let SimpleMDE = {}
  if (isBrowser) {
    SimpleMDE = require('simplemde')
  }

  export default {
    name: 'markdown-editor',
    props: {
      value: String,
      name: String,
      previewClass: String,
      placeholder: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      autoinit: {
        type: Boolean,
        default: false
      },
      highlight: {
        type: Boolean,
        default: false
      },
      sanitize: {
        type: Boolean,
        default: false
      },
      configs: {
        type: Object,
        default () {
          return {
            status: false,
            toolbar: [
              {
                name: 'bold',
                title: 'Жирный',
                action: SimpleMDE.toggleBold,
                className: 'd-markdown-layout__icon_bold'
              },
              '|',
              {
                name: 'italic',
                title: 'Курсив',
                action: SimpleMDE.toggleItalic,
                className: 'd-markdown-layout__icon_italic'
              },
              '|',
              {
                name: 'strikethrough',
                title: 'Зачеркнутый',
                action: SimpleMDE.toggleStrikethrough,
                className: 'd-markdown-layout__icon_strikethrough'
              },
              '|',
              {
                name: 'unordered-list',
                title: 'Маркированный список',
                action: SimpleMDE.toggleUnorderedList,
                className: 'd-markdown-layout__icon_list-ul'
              },
              '|',
              {
                name: 'ordered-list',
                title: 'Нумерованный список',
                action: SimpleMDE.toggleOrderedList,
                className: 'd-markdown-layout__icon_list-ol'
              },
              '|',
              {
                name: 'link',
                title: 'Создать ссылку',
                action: SimpleMDE.drawLink,
                className: 'd-markdown-layout__icon_link'
              },
              {
                name: 'preview',
                title: 'Предварительный просмотр',
                action: SimpleMDE.togglePreview,
                className: 'd-markdown-layout__icon_visibility pull-right no-disable'
              }
            ]
          }
        }
      }
    },
    mounted () {
      if (this.autoinit) this.initialize()
    },
    activated () {
      const editor = this.simplemde
      if (!editor) return
      const isActive = editor.isSideBySideActive() || editor.isPreviewActive()
      if (isActive) editor.toggleFullScreen()
    },
    methods: {
      initialize () {
        const configs = Object.assign({
          renderingConfig: {},
          initialValue: this.value,
          element: this.$el.firstElementChild
        }, this.configs)

        if (configs.initialValue) {
          this.$emit('input', configs.initialValue)
        }

        if (this.highlight) {
          configs.renderingConfig.codeSyntaxHighlighting = true
        }

        marked.setOptions({ sanitize: this.sanitize })

        this.simplemde = new SimpleMDE(configs)

        const className = this.previewClass || ''
        this.addPreviewClass(className)

        this.bindingEvents()
      },
      bindingEvents () {
        this.simplemde.codemirror.on('change', () => {
          this.$emit('input', this.simplemde.value())
        })
        this.simplemde.codemirror.on('focus', () => {
          this.$emit('focus')
        })
        this.simplemde.codemirror.on('blur', () => {
          this.$emit('blur')
        })
      },
      addPreviewClass (className) {
        const wrapper = this.simplemde.codemirror.getWrapperElement()
        const preview = document.createElement('div')
        wrapper.nextSibling.className += ` ${className}`
        preview.className = `editor-preview ${className}`
        wrapper.appendChild(preview)
      }
    },
    destroyed () {
      this.simplemde = null
    },
    watch: {
      value (val) {
      if (!this.simplemde || val === this.simplemde.value()) return
        this.simplemde.value(val)
      }
    }
  }
</script>

<style>
  @import '~simplemde/dist/simplemde.min.css';
</style>

<style lang="scss">
  .editor-toolbar {
    &::before {
      margin-bottom: 12px;
    }
  }

  .markdown-editor {
    min-height: 166px;
    padding-bottom: 0px;

    .markdown-body-textarea {
      height: 100%;

      &:disabled {
        border: solid 1px #f3f4f6;
        background-color: #f3f4f6;
      }
    }

    .CodeMirror,
    .CodeMirror-scroll {
      min-height: 153px;
      max-height: 230px;
      box-sizing: border-box;
    }

    .editor-toolbar {
      border-color: #cbd0d8;
      background-color: #f3f4f6;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;

      a {
        width: 16px;
        height: 16px;

        &.active, &:hover {
          fill: #282a36;
          background-color: transparent;
          border-color: transparent;

          &.d-markdown-layout__icon_bold {
            background-image: url('/dist/web/img/icons/svg/bold_active.svg');
            background-repeat: no-repeat;
            background-position: center center;
          }

          &.d-markdown-layout__icon_italic {
            background-image: url('/dist/web/img/icons/svg/italic_active.svg');
            background-repeat: no-repeat;
            background-position: center center;
          }

          &.d-markdown-layout__icon_strikethrough {
            background-image: url('/dist/web/img/icons/svg/strikethrough_active.svg');
            background-repeat: no-repeat;
            background-position: center center;
          }

          &.d-markdown-layout__icon_list-ul {
            background-image: url('/dist/web/img/icons/svg/generic_active.svg');
            background-repeat: no-repeat;
            background-position: center center;
          }

          &.d-markdown-layout__icon_list-ol {
            background-image: url('/dist/web/img/icons/svg/list-ol_active.svg');
            background-repeat: no-repeat;
            background-position: center center;
          }

          &.d-markdown-layout__icon_link {
            background-image: url('/dist/web/img/icons/svg/lm-link_active.svg');
            background-repeat: no-repeat;
            background-position: center center;
          }

          &.d-markdown-layout__icon_visibility {
            background-image: url('/dist/web/img/icons/svg/lm-eye-1_active.svg');
            background-repeat: no-repeat;
            background-position: center center;
          }

        }
      }

      &.disabled-for-preview {
        a:not(.no-disable) {
          background: transparent;

          &.d-markdown-layout__icon_bold {
            background-image: url('/dist/web/img/icons/svg/bold_active.svg');
            background-repeat: no-repeat;
            background-position: center center;
          }

          &.d-markdown-layout__icon_italic {
            background-image: url('/dist/web/img/icons/svg/italic_active.svg');
            background-repeat: no-repeat;
            background-position: center center;
          }

          &.d-markdown-layout__icon_strikethrough {
            background-image: url('/dist/web/img/icons/svg/strikethrough_active.svg');
            background-repeat: no-repeat;
            background-position: center center;
          }

          &.d-markdown-layout__icon_list-ul {
            background-image: url('/dist/web/img/icons/svg/generic_active.svg');
            background-repeat: no-repeat;
            background-position: center center;
          }

          &.d-markdown-layout__icon_list-ol {
            background-image: url('/dist/web/img/icons/svg/list-ol_active.svg');
            background-repeat: no-repeat;
            background-position: center center;
          }

          &.d-markdown-layout__icon_link {
            background-image: url('/dist/web/img/icons/svg/lm-link_active.svg');
            background-repeat: no-repeat;
            background-position: center center;
          }

          &.d-markdown-layout__icon_visibility {
            background-image: url('/dist/web/img/icons/svg/lm-eye-1_active.svg');
            background-repeat: no-repeat;
            background-position: center center;
          }
        }
      }
    }

    .CodeMirror {
      border-color: #cbd0d8;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;

      .CodeMirror-placeholder {
        opacity: 1;
        color: rgba(40, 42, 54, 0.32);
      }
    }

    &.error {
      .editor-toolbar {
        border: solid 1px #fc2e5f;
      }

      .CodeMirror {
        border: solid 1px #fc2e5f;
      }
    }


    .markdown-body {
      padding: 0.5em;
    }

    .editor-preview-active {
      display: block;
    }

    .editor-preview-active-side {
      display: block;
    }

  }


</style>
