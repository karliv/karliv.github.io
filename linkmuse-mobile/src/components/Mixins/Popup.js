export default {
  watch: {
    'model.value' (val) {
      val ? window.nsWebViewInterface.emit('swipe2Back', true) : window.nsWebViewInterface.emit('swipe2Back', false)
    }
  }
}
