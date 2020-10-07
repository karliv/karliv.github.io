<script>
import RangeUtil from './../utils/rangeUtil.js'
import EmojiUtil from './../utils/emojiUtil.js'

const data = EmojiUtil.getEmojiData()
const getUnicode = EmojiUtil.getUnicodeByName
const getNameWithUnicode = EmojiUtil.getNameWithUnicode
const pathEmoji = '/dist/img/emoji/'
const emojiRegexp = /:[a-z0-9-_+]+:/
const emojiUnicodeRegexp = /([\uD800-\uDBFF][\uDC00-\uDFFF])/

const ELEMENT_NODE = 1
const TEXT_NODE = 3
const TAGS_BLOCK = ['p', 'div', 'pre', 'form']
const KEY_ENTER = 13
const KEY_ESC = 27
const KEY_TAB = 9

const hasEmojiUnicode = () => {
  let selection = RangeUtil.getSelection()
  if (!selection.length) { return false }

  let _range = selection[0]
  let currentNode = _range.startContainer

  let text = currentNode.textContent
  let match = emojiUnicodeRegexp.exec(text)
  if (!match) { return false }

  return match
}

const parseUnicode = (match) => {
  let start = match.index
  let end = start + match[0].length
  let selection = RangeUtil.getSelection()
  let _range = selection[0]

  if (_range.startOffset !== end) {
    _range.setStart(_range.startContainer, end)
    _range.collapse(true)
  }

  let emoji = match[0]

  let code = getNameWithUnicode(emoji)
  let image = findIcon(`:${code}:`)

  _range.insertNode(image)
  let previousText = image.previousSibling
  previousText.textContent = previousText.textContent.replace(emoji, '')
  let nextText = image.nextSibling

  _range.setStart(nextText, 0)
  _range.collapse(true)
  RangeUtil.restoreSelection([_range])

  return true
}

const hasEmoji = () => {
  let selection = RangeUtil.getSelection()
  if (!selection.length) { return false }

  let _range = selection[0]
  let currentNode = _range.startContainer

  let text = currentNode.textContent
  let match = emojiRegexp.exec(text)
  if (!match) { return false }

  return match
}

const parse = (match) => {
  let start = match.index
  let end = start + match[0].length
  let selection = RangeUtil.getSelection()
  let _range = selection[0]

  if (_range.startOffset !== end) {
    _range.setStart(_range.startContainer, end)
    _range.collapse(true)
  }

  let emoji = match[0]
  var image = findIcon(emoji)
  _range.insertNode(image)
  let previousText = image.previousSibling
  previousText.textContent = previousText.textContent.replace(emoji, '')
  let nextText = image.nextSibling
  _range.setStart(nextText, 0)
  _range.collapse(true)
  RangeUtil.restoreSelection([_range])

  return true
}

const findIcon = (identifier) => {
  let emojis = data
  for (var group in emojis) {
    for (var key in emojis[group]) {
      if (emojis[group].hasOwnProperty(key)) {
        if (key === identifier) {
          let filename = emojis[group][key]
          let path = pathEmoji || ''
          if (path.length && path.charAt(path.length - 1) !== '/') path += '/'
          let uniconde = getUnicode(getPureName(key))
          let image = new Image()
          image.src = path + filename
          image.title = RangeUtil.htmlEntities(key)
          image.alt = uniconde
          image.width = 18
          image.height = 18
          return image
        }
      }
    }
  }

  // &#x0003A;
  let code = document.createTextNode(identifier.replace(':', ''))
  return code

  // TODO: FIX ME
  // let image = document.createElement('img');
  // image.alt = RangeUtil.htmlEntities(identifier);
  // return image;
}

const getPureName = (name) => {
  return name.replace(/:/g, '')
}

export default {
  render (h) {
    return h('div', {
      ref: 'input',
      class: ['im_editable'],
      attrs: {
        contenteditable: (!this.readonly),
        tabindex: 0
      },
      on: {
        input: (e) => {
          this._handleInput(e)
        },
        keyup: (e) => {
          this._handleKeyUp(e)
        },
        keydown: (e) => {
          this._handleKeyDown(e)
        },
        paste: (e) => {
          this._handlePaste(e)
        }
      }
    })
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.$el.innerText = this.value

    this.$parent.$on('clear-emoji-area', () => {
      this.$el.innerText = ''
    })

    this.$parent.$on('set-emoji-area', (text) => {
      this.$el.innerText = text
    })

    this.$parent.$on('set-focus-emoji-area', () => {
      // this.$el.focus();
    })

    this.$parent.$on('parse:emoji', (code) => {
      try {
        let textElement = this.$el.lastChild
        setTimeout(() => {
          let _range = document.createRange()
          _range.setStart(textElement, textElement.textContent.length)
          RangeUtil.restoreSelection([_range])
        }, 0)
      } catch (err) {
        console.log(err)
        throw new Error('Disabled area')
      }

      this.$nextTick(() => {
        this._handleInput()
      })
    })

    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init () {
      let textElement = (this.$el.lastChild) ? this.$el.lastChild : this.$el

      setTimeout(() => {
        let _range = document.createRange()
        _range.setStart(textElement, textElement.textContent.length)
        RangeUtil.restoreSelection([_range])
      }, 0)

      if (!this.$el.lastChild) return false

      setTimeout(() => {
        let event = document.createEvent('HTMLEvents')
        event.initEvent('input', true, false)
        this.$el.dispatchEvent(event)

        let _range = document.createRange()
        _range.selectNode(this.$el.lastChild)
        _range.collapse(false)
        RangeUtil.restoreSelection([_range])
      }, 0)
    },
    _handlePaste (e) {
      if (e.originalEvent && e.originalEvent.clipboardData && e.originalEvent.clipboardData.getData) {
        e.preventDefault()
        let text = e.originalEvent.clipboardData.getData('text/plain')
        window.document.execCommand('insertText', false, text)
      } else if (e.clipboardData && e.clipboardData.getData) {
        e.preventDefault()

        let pastedData = e.clipboardData.items[0]
        if (pastedData.type.indexOf('image') === 0) {
          let image = pastedData.getAsFile()
          this.$emit('paste:image', image)
        }

        let text = e.clipboardData.getData('text/plain')
        window.document.execCommand('insertText', false, text)
      } else if (window.clipboardData && window.clipboardData.getData) {
        if (!_onPaste_StripFormatting_IEPaste) {
          _onPaste_StripFormatting_IEPaste = true
          e.preventDefault()
          window.document.execCommand('ms-pasteTextOnly', false)
        }
        _onPaste_StripFormatting_IEPaste = false
      }
    },
    _handleInput () {
      let match
      let mathUnicode

      this.$nextTick(() => {
        while (mathUnicode = hasEmojiUnicode()) {
          parseUnicode(mathUnicode)
        }
      })

      this.$nextTick(() => {
        while (match = hasEmoji()) {
          parse(match)
        };
      })

      this.$nextTick(() => {
        let value = this.getValueContent()
        this.$emit('input', value)
      })
    },
    _handleKeyUp (e) {
      // this.$emit('keyup', e);
    },
    _handleKeyDown (e) {
      // this.$emit('keydown', e);
      if (e.keyCode === KEY_ENTER && e.shiftKey) {
        document.execCommand('insertHTML', false, '<br>')
      } else if (e.keyCode === KEY_ENTER && !e.shiftKey) {
        e.preventDefault()
        this.$emit('key:enter')
      } else if (e.keyCode === KEY_TAB) {
        e.preventDefault()
        this.$emit('key:tab')
      } else if (e.keyCode === KEY_ESC) {
        e.preventDefault()
        this.$emit('key:esc')
      }
    },
    getValueContent () {
      let lines = []
      let line = []

      let flush = function () {
        lines.push(line.join(''))
        line = []
      }

      let sanitizeNode = (node) => {
        if (node.nodeType === TEXT_NODE) {
          line.push(node.nodeValue)
        } else if (node.nodeType === ELEMENT_NODE) {
          let tagName = node.tagName.toLowerCase()
          let isBlock = TAGS_BLOCK.indexOf(tagName) !== -1

          if (isBlock && line.length) flush()

          if (tagName === 'img') {
            let title = node.getAttribute('title') || ''
            if (title) line.push(title)
            return
          } else if (tagName === 'br') {
            flush()
          }

          let children = node.childNodes
          for (let i = 0; i < children.length; i++) {
            sanitizeNode(children[i])
          }

          if (isBlock && line.length) flush()
        }
      }

      let children = this.$el.childNodes
      for (let i = 0; i < children.length; i++) {
        sanitizeNode(children[i])
      }

      if (line.length) flush()

      return lines.join('\n')
    }
  }
}
</script>

<style lang="sass">
    .im_editable
        overflow: auto
        width: 100%
        &.lock
            color: #B5B9C0
            padding-right: 20px
        &:empty
            &:before
                content: attr(placeholder)
                display: block
        img
            height: 18px
            width: 18px
        *
            vertical-align: middle
</style>
