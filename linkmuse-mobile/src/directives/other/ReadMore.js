import * as truncate from 'html-truncate'

const MORE_STR = 'показать еще'
const LESS_STR = 'скрыть'

/**
 * Gets the data attribute. the name must be kebab-case.
 */
const getDataAttribute = (el, name) => el.getAttribute(`data-rm-${name}`)

/**
 * Check the data attribute. the name must be kebab-case.
 */
const hasDataAttribute = (el, name) => el.hasAttribute(`data-rm-${name}`)

/**
 * UsageDirective
 * *
 * v-read-more='value' Text is used to limit the submitted string based on the length.
 * data-vv-length - It is used to limit the text value to generate a read more text.
 * data-rm-more - Customize your read more string. Default - MORE_STR
 * data-rm-less - Customize your read less string. Default - LESS_STR
 * *
 */

export default {
  twoWay: true,
  bind: (el, binding, vn) => {
    let value = binding.value
    let length = binding.arg || getDataAttribute(el, 'length')
    let moreStr = hasDataAttribute(el, 'more') ? getDataAttribute(el, 'more') : MORE_STR
    let lessStr = hasDataAttribute(el, 'less') ? getDataAttribute(el, 'less') : LESS_STR

    if (value && value.length > length) {
      vn.elm.textContent = truncate(value, length)

      let more = document.createElement('a')
      more.href = 'javascript:void(0)'
      more.text = moreStr

      let less = document.createElement('a')
      less.href = 'javascript:void(0)'
      less.text = lessStr

      vn.elm.append(' ', more)

      more.addEventListener('click', () => {
        vn.elm.textContent = value
        vn.elm.append(' ', less)
      })

      less.addEventListener('click', () => {
        vn.elm.textContent = truncate(value, length)
        vn.elm.append(' ', more)
      })
    } else vn.elm.textContent = value
  }
}
