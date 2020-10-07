let EXIF = require('exif-js')

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

export const each = (obj, callback) => {
  let i,
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

export function redirect (url) {
  if (typeof document !== 'undefined') {
    if (url === undefined) { url = window.location.href }
    let ua = navigator.userAgent.toLowerCase()

    let isIE = ua.indexOf('msie') !== -1

    let version = parseInt(ua.substr(4, 2), 10)

    // Internet Explorer 8 and lower
    if (isIE && version < 9) {
      let link = document.createElement('a')
      link.href = url
      document.body.appendChild(link)
      link.click()
    } else {
      window.location.href = url
    }
  }
}

export const has = (obj, key) => {
  let args = key.split('.')
  for (let i = 0; i < args.length; i++) {
    if (!obj || !obj.hasOwnProperty(args[i])) {
      return false
    }
    obj = obj[args[i]]
  }
  return true
}

export const deserialize = (object, prefix) => {
  let result = {}

  function _deserialize (_object, numbered) {
    if (typeof numbered === 'undefined') numbered = false
    for (var p in _object) {
      if (_object.hasOwnProperty('key') && _object.hasOwnProperty('value')) {
        if (numbered !== false && _object.hasOwnProperty('parent_key')) {
          result[_object.parent_key + '.' + numbered + '.' + _object.key] = _object.value
        } else {
          if (_object.value !== null) result[_object.key] = _object.value
        }
      } else if (Array.isArray(_object[p])) {
        _object[p].forEach((_array, key) => {
          _deserialize(_array, key)
        })
      } else if ((typeof _object[p] === 'object')) {
        _deserialize(_object[p], numbered)
      }
    }
  }
  _deserialize(object)

  return { [prefix]: result }
}

export const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16 | 0; let v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

export const checkLoadImage = (path) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve({ path, status: 'ok' })
    img.onerror = () => reject({ path, status: 'error' })

    img.src = path
  })
}

/**
 * Gets the data attribute. the name must be kebab-case.
 */
export const getDataAttribute = (el, name) => el.getAttribute(`data-lm-${name}`)

/**
 * Check the data attribute. the name must be kebab-case.
 */
export const hasDataAttribute = (el, name) => el.hasAttribute(`data-lm-${name}`)

export const normalizeDotsToArrow = (value) => value.replace('.', '->')
export const normalizeArrowsToDot = (value) => value.replace('->', '.')

const flat = require('flat')
export const flatten = (value, options = {}) => flat(value, options)
export const unflatten = (value, options = {}) => flat.unflatten(value, options)

export const omitEmpty = (value, options) => require('omit-empty')(value, options)

export const HEIGHT_FOOTER = 48
export const ERROR_IMAGE = '//i.linkmuse.com/404.png'

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

export const humanFileSize = (size) => {
  let i = Math.floor(Math.log(size) / Math.log(1024))
  return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i]
}

export const isBrowser = process.browser

// one month
export const expires = new Date((new Date()).getTime() + 60 * 60 * 24 * 30 * 1000)
export const expiresRefresh = new Date((new Date()).getTime() + 60 * 60 * 24 * 30 * 1000 * 6)

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

export const isNative = () => {
  return isBrowser && (has(window, 'androidWebViewInterface') || has(window, 'iosWebViewInterface'))
}

export const isNativeIOS = () => {
  return isBrowser && has(window, 'iosWebViewInterface')
}

export const isNativeAndroid = () => {
  return isBrowser && has(window, 'androidWebViewInterface')
}

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

export const versionCompare = (v1, v2, options) => {
  let lexicographical = options && options.lexicographical
  let zeroExtend = options && options.zeroExtend
  let v1parts = v1.split('.')
  let v2parts = v2.split('.')

  function isValidPart (x) {
    return (lexicographical ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(x)
  }

  if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
    return NaN
  }

  if (zeroExtend) {
    while (v1parts.length < v2parts.length) v1parts.push('0')
    while (v2parts.length < v1parts.length) v2parts.push('0')
  }

  if (!lexicographical) {
    v1parts = v1parts.map(Number)
    v2parts = v2parts.map(Number)
  }

  for (var i = 0; i < v1parts.length; ++i) {
    if (v2parts.length === i) {
      return 1
    }

    if (v1parts[i] === v2parts[i]) {
      continue
    } else if (v1parts[i] > v2parts[i]) {
      return 1
    } else {
      return -1
    }
  }

  if (v1parts.length !== v2parts.length) {
    return -1
  }

  return 0
}

export const getPartSocialUrl = (url, domain) => {
  return url.replace(/(^https|^http)/, '').replace(new RegExp(`(\/\/|www.${domain}|${domain}|:)`, 'gi'), '').replace(/^\//g, '')
}
