import Vue from 'vue'
import InfiniteScroll from '@directives/other/InfiniteScroll'

const install = (Vue) => {
  Vue.directive('InfiniteScroll', InfiniteScroll)
}

if (!Vue.prototype.$isServer && window.Vue) {
  window.infiniteScroll = InfiniteScroll
  Vue.use(install)
}

InfiniteScroll.install = install
export default InfiniteScroll
