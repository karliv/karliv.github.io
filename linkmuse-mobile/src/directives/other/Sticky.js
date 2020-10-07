let sticky

try {
  sticky = require('vue-sticky').default // Client-side
} catch (err) {
  sticky = {} // SSR, pass empty stub
}

export default sticky
