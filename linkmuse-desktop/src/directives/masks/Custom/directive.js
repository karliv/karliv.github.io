import masker from './masker'
import tokens from './tokens'
import phoneCodes from './phone-codes'

const masksPhoneSort = (a, b) => {
  let maska = a.replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""), maskb = b.replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""), maskas = a.split("#")[0], maskbs = b.split("#")[0];
  return 0 === maskbs.indexOf(maskas) ? -1 : 0 === maskas.indexOf(maskbs) ? 1 : maska.localeCompare(maskb);
}

// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events#The_old-fashioned_way
function event (name) {
  let evt = document.createEvent('Event')
  evt.initEvent(name, true, true)
  return evt
}

export default function (el, binding) {
  let config = binding.value
  if (Array.isArray(config) || typeof config === 'string') {
    config = {
      mask: config,
      tokens: tokens
    }
  }

  if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
    let els = el.getElementsByTagName('input')
    if (els.length !== 1) {
      throw new Error("v-mask directive requires 1 input, found " + els.length)
    } else {
      el = els[0]
    }
  }

  el.oninput = function (evt) {
    if (!evt.isTrusted) return // avoid infinite loop
    /* other properties to try to diferentiate InputEvent of Event (custom)
    InputEvent (native)
      cancelable: false
      isTrusted: true

      composed: true
      isComposing: false
      which: 0

    Event (custom)
      cancelable: true
      isTrusted: false
    */
    // by default, keep cursor at same position as before the mask
    let position = el.selectionEnd
    // save the character just inserted
    let digit = el.value[position-1]
    el.value = masker(el.value, config.mask, true, config.tokens)
    // if the digit was changed, increment position until find the digit again
    while (position < el.value.length && el.value.charAt(position-1) !== digit) {
      position++
    }
    if (el === document.activeElement) {
      el.setSelectionRange(position, position)
      setTimeout(function () {
        el.setSelectionRange(position, position)
      }, 0)
    }
    el.dispatchEvent(event('input'))
  }

  let newDisplay = masker(el.value, config.mask, true, config.tokens)
  if (newDisplay !== el.value) {
    el.value = newDisplay
    el.dispatchEvent(event('input'))
  }
}

export const maskPhone = function (el, binding) {
  let config = phoneCodes.sort(masksPhoneSort)
  if (Array.isArray(config) || typeof config === 'string') {
    config = {
      mask: config,
      tokens: tokens
    }
  }

  el.oninput = function (evt) {
    if (!evt.isTrusted) return false;// avoid infinite loop
    /* other properties to try to diferentiate InputEvent of Event (custom)
    InputEvent (native)
      cancelable: false
      isTrusted: true

      composed: true
      isComposing: false
      which: 0

    Event (custom)
      cancelable: true
      isTrusted: false
    */
    // by default, keep cursor at same position as before the mask
    let position = el.selectionEnd
    // save the character just inserted
    let digit = el.value[position-1]
    el.value = masker(el.value, config.mask, true, config.tokens, ['phone'])
    // if the digit was changed, increment position until find the digit again
    while (position < el.value.length && el.value.charAt(position-1) !== digit) {
      position++
    }
    if (el === document.activeElement) {
      el.setSelectionRange(position, position)
      setTimeout(function () {
        el.setSelectionRange(position, position)
      }, 0)
    }
    el.dispatchEvent(event('input'))
  }

  let newDisplay = masker(el.value, config.mask, true, config.tokens, ['phone'])
  if (newDisplay !== el.value) {
    el.value = newDisplay
    el.dispatchEvent(event('input'))
  }
}

export const maskPhoneEmail = function (el, binding) {
  let config = phoneCodes.sort(masksPhoneSort)
  if (Array.isArray(config) || typeof config === 'string') {
    config = {
      mask: config,
      tokens: tokens
    }
  }

  el.oninput = function (evt) {
    if (!evt.isTrusted) return // avoid infinite loop
    /* other properties to try to diferentiate InputEvent of Event (custom)
    InputEvent (native)
      cancelable: false
      isTrusted: true

      composed: true
      isComposing: false
      which: 0

    Event (custom)
      cancelable: true
      isTrusted: false
    */
    // by default, keep cursor at same position as before the mask
    let position = el.selectionEnd
    // save the character just inserted
    let digit = el.value[position-1]
    el.value = masker(el.value, config.mask, true, config.tokens, ['phone', 'email'])
    // if the digit was changed, increment position until find the digit again
    while (position < el.value.length && el.value.charAt(position-1) !== digit) {
      position++
    }
    if (el === document.activeElement) {
      el.setSelectionRange(position, position)
      setTimeout(function () {
        el.setSelectionRange(position, position)
      }, 0)
    }
    el.dispatchEvent(event('input'))
  }

  let newDisplay = masker(el.value, config.mask, true, config.tokens, ['phone', 'email'])
  if (newDisplay !== el.value) {
    el.value = newDisplay
    el.dispatchEvent(event('input'))
  }
}
