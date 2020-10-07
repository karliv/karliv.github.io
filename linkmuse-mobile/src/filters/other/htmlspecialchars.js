import htmlspecialchars from 'htmlspecialchars'

const transform = (value) => {
  return htmlspecialchars(value)
}

export default transform
