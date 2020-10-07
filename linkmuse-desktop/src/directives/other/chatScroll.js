/* global MutationObserver */

const scrollToBottom = (el, smooth) => {
  el.scroll({
    top: el.scrollHeight,
    behavior: smooth ? 'smooth' : 'instant'
  })
}

const emit = (vnode, name, data) => {
  var handlers = (vnode.data && vnode.data.on) ||
        (vnode.componentOptions && vnode.componentOptions.listeners)

  if (handlers && handlers[name]) {
    handlers[name].fns(data)
  }
}

const vChatScroll = {
  bind: (el, binding, vnode) => {
    let timeout
    let scrolled = false
    let scrolledTop = false

    el.addEventListener('scroll', e => {
      if (timeout) window.clearTimeout(timeout)
      timeout = window.setTimeout(function () {
        scrolled = el.scrollTop + el.clientHeight + 1 < el.scrollHeight
        if (el.scrollTop < 100) {
          emit(vnode, 'scroll-top')
          scrolledTop = true
        }
      }, 200)
      scrolledTop = false
    });

    (new MutationObserver(e => {
      let config = binding.value || {}
      let pause = config.always === false && scrolled
      if (scrolledTop) { el.scrollTop = 100; return }
      if (pause || e[e.length - 1].addedNodes.length !== 1) return
      scrollToBottom(el, config.smooth)
    })).observe(el, {childList: true, subtree: true})
  },
  inserted: scrollToBottom
}

export default vChatScroll
