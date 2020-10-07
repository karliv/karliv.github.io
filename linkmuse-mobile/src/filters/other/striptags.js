import striptags from 'striptags'

const transform = (value, allowed_tags = false, tag_replacement = false) => {
  return striptags(value, allowed_tags, tag_replacement)
}

export default transform
