/* global Node */
let EXIF = require('exif-js')

export const inBrowser = typeof window !== 'undefined'

const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g
const MOZ_HACK_REGEXP = /^moz([A-Z])/

const ieVersion = (typeof document !== 'undefined') ? Number(document.documentMode) : 0

export function isIE11 () {
  if (typeof document === 'undefined') return
  return !!window.MSInputMethodContext && !!document.documentMode
}

export function isIE10 () {
  return window.navigator.appVersion.indexOf('MSIE 10') !== -1
}

const camelCase = function (name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter
  }).replace(MOZ_HACK_REGEXP, 'Moz$1')
}

/* istanbul ignore next */
export const on = (function () {
  if (typeof document !== 'undefined') {
    if (document.addEventListener) {
      return function (element, event, handler) {
        if (element && event && handler) {
          element._eventListener = handler
          element.addEventListener(event, handler, false)
        }
      }
    } else {
      return function (element, event, handler) {
        if (element && event && handler) {
          element._eventListener = handler
          element.attachEvent('on' + event, handler)
        }
      }
    }
  }
})()

/* istanbul ignore next */
export const off = (function () {
  if (typeof document !== 'undefined') {
    if (document.removeEventListener) {
      return function (element, event, handler) {
        if (element && event) {
          if (!handler && element._eventListener) {
            handler = element._eventListener
            element._eventListener = undefined
          }
          element.removeEventListener(event, handler, false)
        }
      }
    } else {
      return function (element, event, handler) {
        if (element && event) {
          if (!handler && element._eventListener) {
            handler = element._eventListener
            element._eventListener = undefined
          }
          element.detachEvent('on' + event, handler)
        }
      }
    }
  }
})()

/* istanbul ignore next */
export const once = function (el, event, fn) {
  var listener = function () {
    if (fn) {
      fn.apply(this, arguments)
    }
    off(el, event, listener)
  }
  on(el, event, listener)
}

/* istanbul ignore next */
export function hasClass (el, cls) {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
};

/* istanbul ignore next */
export function addClass (el, cls) {
  if (!el) return
  var curClass = el.className
  var classes = (cls || '').split(' ')

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName
      }
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
};

/* istanbul ignore next */
export function removeClass (el, cls) {
  if (!el || !cls) return
  var classes = cls.split(' ')
  var curClass = ' ' + el.className + ' '

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ')
      }
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
};
export function trim (value) {
  return value
}

/* istanbul ignore next */
export const getStyle = ieVersion < 9 ? function (element, styleName) {
  if (!element || !styleName) return null
  styleName = camelCase(styleName)
  if (styleName === 'float') {
    styleName = 'styleFloat'
  }
  try {
    switch (styleName) {
      case 'opacity':
        try {
          return element.filters.item('alpha').opacity / 100
        } catch (e) {
          return 1.0
        }
      default:
        return (element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null)
    }
  } catch (e) {
    return element.style[styleName]
  }
} : function (element, styleName) {
  if (typeof document !== 'undefined') {
    if (!element || !styleName) return null
    styleName = camelCase(styleName)
    if (styleName === 'float') {
      styleName = 'cssFloat'
    }
    try {
      var computed = document.defaultView.getComputedStyle(element, '')
      return element.style[styleName] || computed ? computed[styleName] : null
    } catch (e) {
      return element.style[styleName]
    }
  }
}

/* istanbul ignore next */
export function setStyle (element, styleName, value) {
  if (!element || !styleName) return

  if (typeof styleName === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop])
      }
    }
  } else {
    styleName = camelCase(styleName)
    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')'
    } else {
      element.style[styleName] = value
    }
  }
};

export function isElement (el) {
  return el && el.nodeType === Node.ELEMENT_NODE
}

export function removeFromDom (el) {
  isElement(el) && isElement(el.parentNode) && el.parentNode.removeChild(el)
}

export function getComputedStyle (el) {
  return window.getComputedStyle(el)
}

export function toggleBodyOverflow (enable) {
  if (typeof document !== 'undefined') {
    const MODAL_OPEN = 'modal-open'
    const body = document.body
    if (enable) {
      removeClass(body, MODAL_OPEN)
      body.style.paddingRight = null
    } else {
      const browsersWithFloatingScrollbar = isIE10() || isIE11()
      const documentHasScrollbar = hasScrollbar(document.documentElement) || hasScrollbar(document.body)
      if (documentHasScrollbar && !browsersWithFloatingScrollbar) {
        body.style.paddingRight = `${_getScrollbarWidth()}px`
      }
      addClass(body, MODAL_OPEN)
    }
  }
}

export function hasScrollbar (el) {
  const SCROLL = 'scroll'
  const hasVScroll = el.scrollHeight > el.clientHeight
  const style = getComputedStyle(el)
  return hasVScroll || style.overflow === SCROLL || style.overflowY === SCROLL
}

export const has = (obj, key) => {
  let args = key.split('.')
  for (var i = 0; i < args.length; i++) {
    if (!obj || !obj.hasOwnProperty(args[i])) {
      return false
    }
    obj = obj[args[i]]
  }
  return true
}

export function redirect (url) {
  if (typeof document !== 'undefined') {
    if (url === undefined) { url = window.location.href }
    var ua = navigator.userAgent.toLowerCase()

    var isIE = ua.indexOf('msie') !== -1

    var version = parseInt(ua.substr(4, 2), 10)

    // Internet Explorer 8 and lower
    if (isIE && version < 9) {
      var link = document.createElement('a')
      link.href = url
      document.body.appendChild(link)
      link.click()
    } else {
      window.location.href = url
    }
  }
};

export function _checkScrollbar () {
  if (typeof document !== 'undefined') {
    const rect = document.body.getBoundingClientRect()
    return rect.left + rect.right < window.innerWidth
  }
};

export function _getScrollbarWidth () {
  if (typeof document !== 'undefined') {
    const scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    document.body.appendChild(scrollDiv)
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth
    document.body.removeChild(scrollDiv)
    return scrollbarWidth
  }
};

export const arrayItemToggle = (array, item) => {
  const isItemInArray = array.includes(item)
  if (isItemInArray) {
    return array.filter(arrayItem => arrayItem !== item)
  } else {
    return [
      ...array,
      item
    ]
  }
}

export const each = (obj, callback) => {
  var i,
    len
  if (Array.isArray(obj)) {
    for (i = 0, len = obj.length; i < len; i++) {
      if (callback(obj[i], i, obj) === false) {
        break
      }
    }
  } else {
    for (i in obj) {
      if (callback(obj[i], i, obj) === false) {
        break
      }
    }
  }
  return obj
}

export const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0; var v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

export const getOS = () => {
  if (typeof window === 'undefined') return

  const userAgent = window.navigator.userAgent
  const platform = window.navigator.platform
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K']
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE']
  const iosPlatforms = ['iPhone', 'iPad', 'iPod']

  let os = null

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS'
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS'
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows'
  } else if (/Android/.test(userAgent)) {
    os = 'Android'
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux'
  }

  return os
}

export const moveArrayItem = (array, moveIndex, toIndex) => {
  /* #move - Moves an array item from one position in an array to another.
     Note: This is a pure function so a new array will be returned, instead
     of altering the array argument.
    Arguments:
    1. array     (String) : Array in which to move an item.         (required)
    2. moveIndex (Object) : The index of the item to move.          (required)
    3. toIndex   (Object) : The index to move item at moveIndex to. (required)
  */
  const item = array[moveIndex]
  const length = array.length
  const diff = moveIndex - toIndex

  if (diff > 0) {
    // move left
    return [
      ...array.slice(0, toIndex),
      item,
      ...array.slice(toIndex, moveIndex),
      ...array.slice(moveIndex + 1, length)
    ]
  } else if (diff < 0) {
    // move right
    const targetIndex = toIndex + 1
    return [
      ...array.slice(0, moveIndex),
      ...array.slice(moveIndex + 1, targetIndex),
      item,
      ...array.slice(targetIndex, length)
    ]
  }
  return array
}

/**
 * Load script
 * @param {String}  src  source
 */
export const loadScript = (src) => {
  // Do nothing if run from server-side
  if (typeof document === 'undefined') return

  const script = document.createElement('script')

  script.async = true
  script.src = src

  document.body.appendChild(script)
}

/**
 * Check if script is in the document
 * @param {String}  name  name script
 * @return {boolean}
 */
export const hasScript = (name) => {
  // Do nothing if run from server-side
  if (typeof document === 'undefined') return

  return Array
    .from(document.getElementsByTagName('script'))
    .some(script => script.src.includes(name))
}

/**
 * Gets the data attribute. the name must be kebab-case.
 */
export const getDataAttribute = (el, name) => el.getAttribute(`data-lm-${name}`)

/**
 * Check the data attribute. the name must be kebab-case.
 */
export const hasDataAttribute = (el, name) => el.hasAttribute(`data-lm-${name}`)

export const normalizeDotsToArrow = (value) => value.replace(/\./g, '->')
export const normalizeArrowsToDot = (value) => value.replace(/\->/g, '.')

const flat = require('flat')
export const flatten = (value, options = {}) => flat(value, options)
export const unflatten = (value, options = {}) => flat.unflatten(value, options)

export const omitEmpty = (value, options) => require('omit-empty')(value, options)

export const humanFileSize = (size) => {
  let i = Math.floor(Math.log(size) / Math.log(1024))
  return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i]
}

export const isBrowser = process.browser

export const emptyAvatar = '/dist/img/no_image_user.png'
export const expires = new Date((new Date()).getTime() + 60 * 60 * 24 * 14 * 1000)

export const HEADER_HEIGHT = 56

/**
 * @param {any} obj
 * @param {any} form
 * @param {any} namespace
 * @returns
 */
export const obj2fd = (obj, form, namespace) => {
  let fd = form || new FormData()
  let formKey

  for (let property in obj) {
    // if (obj.hasOwnProperty(property) && obj[property]) {
    if (obj.hasOwnProperty(property)) {
      if (namespace) {
        formKey = namespace + '[' + property + ']'
      } else {
        formKey = property
      }

      if (obj[property] instanceof Date) {
        fd.append(formKey, obj[property].toISOString())
      } else if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
        obj2fd(obj[property], fd, formKey)
      } else { // if it's a string or a File object
        fd.append(formKey, obj[property])
      }
    }
  }

  return fd
}

// Truthy version
/**
 *
 * @param {any} obj
 * @param {any} form
 * @param {any} namespace
 */
export const Truthy = (obj, form, namespace) => {
  let fd = form || new FormData()
  let formKey
  for (let property in obj) {
    if (obj.hasOwnProperty(property) && obj[property]) {
      if (namespace) {
        formKey = namespace + '[' + property + ']'
      } else {
        formKey = property
      }

      if (obj[property] instanceof Date) {
        fd.append(formKey, obj[property].toISOString())
      } else if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
        obj2fd(obj[property], fd, formKey)
      } else { // if it's a string or a File object
        fd.append(formKey, obj[property])
      }
    }
  }
  return fd
}

export const resizeImage = (src, width, height, type, rotate) => {
  // TODO add to polyfill
  // toBlob polyfill
  if (!HTMLCanvasElement.prototype.toBlob) {
    Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
      value: function (callback, type, quality) {
        var dataURL = this.toDataURL(type, quality).split(',')[1]
        setTimeout(function () {
          let binStr = atob(dataURL),
            len = binStr.length,
            arr = new Uint8Array(len)
          for (var i = 0; i < len; i++) {
            arr[i] = binStr.charCodeAt(i)
          }
          callback(new Blob([arr], { type: type || 'image/png' }))
        })
      }
    })
  }

  return new Promise((resolve, reject) => {
    try {
      const rotateDeg = typeof rotate !== 'undefined' ? rotate : 0
      const img = new Image()
      img.crossOrigin = 'Anonymous'
      img.src = src
      img.onload = () => {
        const elem = document.createElement('canvas')

        if (typeof width === 'undefined') {
          width = img.width > 5000 ? 5000 : img.width
        }

        // if (img.width <= width || (height && img.height <= height)) {
        //   return reject(new Error('Image has small or equal sizes'))
        // }

        let degrees = 0

        const draw = (deg) => {
          let w
          let h

          if (deg === 90 || deg === 270) {
            w = height || img.height * (width / img.width)
            h = width
          } else {
            w = width
            h = height || img.height * (width / img.width)
          }

          elem.width = w
          elem.height = h

          const ctx = elem.getContext('2d')
          const quality = width < 1300 && height < 1300 ? 0.95 : 0.8

          switch (deg) {
            case 90:
              ctx.transform(0, 1, -1, 0, w, 0)
              ctx.drawImage(img, 0, 0, h, w)
              break
            case 180:
              ctx.transform(-1, 0, 0, -1, w, h)
              ctx.drawImage(img, 0, 0, w, h)
              break
            case 270:
              ctx.transform(0, -1, 1, 0, 0, h)
              ctx.drawImage(img, 0, 0, h, w)
              break
            default:
              ctx.drawImage(img, 0, 0, w, h)
              break
          }

          ctx.canvas.toBlob((blob) => {
            resolve({ src: URL.createObjectURL(blob), blob })
          }, type || 'image/jpeg', quality)
        }

        EXIF.getData(img, function () {
          let orientation = EXIF.getTag(this, 'Orientation')

          switch (orientation) {
            case 1:
              break
            case 2:
              break
            case 3:
              degrees = 180
              break
            case 4:
              degrees = 180
              break
            case 5:
              degrees = 90
              break
            case 6:
              degrees = 90
              break
            case 7:
              degrees = 270
              break
            case 8:
              degrees = 270
              break
            default:
              break
          }

          draw(degrees + rotateDeg)
        })
      }
    } catch (e) {
      reject(e)
    }
  })
}

export const PHOTO = 'photo'
export const VIDEO = 'video'

export const AVATAR = '/dist/img/no_image_user.png'

export const buildQueryParam = (obj) => {
  let query = ''
  let name
  let value

  for (name in obj) {
    value = obj[name]
    query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&'
  }

  return query.length ? query.substr(0, query.length - 1) : query
}
