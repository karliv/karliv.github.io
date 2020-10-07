export function throttle (callback, delay) {
  let timeout
  let lastState
  let currentArgs
  const throttled = (state, ...args) => {
    currentArgs = args
    if (timeout && state === lastState) return
    lastState = state
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      callback(state, ...currentArgs)
      timeout = 0
    }, delay)
  }
  throttled._clear = () => {
    clearTimeout(timeout)
  }
  return throttled
}
