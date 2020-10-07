import nl2br from 'nl2br'

const transform = (value, xhtml = true) => {
  return nl2br(value, xhtml)
}

export default transform
