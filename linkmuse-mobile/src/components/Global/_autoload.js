import Vue from 'vue'
import kebabCase from 'lodash/kebabCase'

// require all global components
const requireComponent = require.context('./autoload', true, /\.vue$/)

// Creates a component name like
const getComponentName = (path) => {
  let name = path.split('/').pop() // filename
  return kebabCase(
    name.replace(/\.\w+$/, '') // extension
  )
}

// For each matching file name...
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = getComponentName(fileName)

  Vue.component(componentName, componentConfig.default || componentConfig)
})
