import marked from "marked"

const markdown = (value, options = {}) => {
  if (!value) return
  return marked(value, { sanitize: true })
}

export default markdown
