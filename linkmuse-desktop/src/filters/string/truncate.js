import * as HtmlTruncate from 'html-truncate'

const truncate = (value, length = 15, options = {}) => {
  if (!value) return
  return HtmlTruncate(value, length, options)
}

export default truncate
