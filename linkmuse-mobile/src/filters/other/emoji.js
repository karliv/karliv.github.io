
import EmojiUtil from '@components/UI/Emoji/utils/emojiUtil'

const emojiRegexp = /:[a-z0-9-_+]+:/
const PATH_EMOJI = '/dist/img/emoji/'

const HEIGHT = 18
const WIDTH = 18

const emojiData = EmojiUtil.getEmojiData()
const getUnicode = EmojiUtil.getUnicodeByName

const createIcon = (identifier) => {
  let emojis = emojiData
  for (var group in emojis) {
    for (var key in emojis[group]) {
      if (emojis[group].hasOwnProperty(key)) {
        if (key === identifier) {
          let filename = emojis[group][key]
          let path = PATH_EMOJI || ''
          if (path.length && path.charAt(path.length - 1) !== '/') path += '/'
          let uniconde = getUnicode(getPureName(key))
          return `<img src="${path + filename}" width="${WIDTH}px" height="${HEIGHT}px" alt="${uniconde}" style="vertical-align: middle;" class="emoji-img">`
        }
      }
    }
  }
}

const getPureName = (name) => {
  return name.replace(/:/g, '')
}

const hasEmoji = (value) => {
  let match = emojiRegexp.exec(value)
  if (!match) { return false }

  return match
}

const parse = (match, value) => {
  let emoji = match[0]
  let image = createIcon(emoji)
  value = value.replace(emoji, image)
  return value
}

const emoji = (value) => {
  if (!value) return

  let match
  while (match = hasEmoji(value)) {
    value = parse(match, value)
  };

  return value
}

export default emoji
