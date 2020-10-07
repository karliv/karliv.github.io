<template>
    <input type="text" autocomplete="off"
           :placeholder="placeholder"
           :id="id"
           ref="input"
           :value="value"/>
</template>
<script>
// import { Autocomplete } from '~/node_modules/vue2-google-maps';  // SUPER PUPER FIXIK

import { bindProps, getPropsValues } from '~/node_modules/vue2-google-maps/src/utils/bindProps.js'
import downArrowSimulator from '~/node_modules/vue2-google-maps/src/utils/simulateArrowDown.js'

const loaded = new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
  if (typeof window === 'undefined') {
    // Do nothing if run from server-side
    return
  }
  window['vueGoogleMapsInit'] = resolve()
})

const mappedPropsToVueProps = (mappedProps) => {
  return Object.entries(mappedProps)
    .map(([key, prop]) => {
      const value = {}

      if ('type' in prop) value.type = prop.type
      if ('default' in prop) value.default = prop.default
      if ('required' in prop) value.required = prop.required

      return [key, value]
    })
    .reduce((acc, [key, val]) => {
      acc[key] = val
      return acc
    }, {})
}

const mappedProps = {
  bounds: {
    type: Object
  },
  componentRestrictions: {
    type: Object,
    noBind: true
  },
  types: {
    type: Array,
    default: function () {
      return []
    }
  }
}

const props = {
  placeholder: {
    required: false,
    type: String
  },
  selectFirstOnEnter: {
    require: false,
    type: Boolean,
    default: false
  },
  value: {
    type: String,
    default: ''
  },
  options: {
    type: Object
  },
  id: {
    type: String
  },
  index: {
    type: Number
  }
}

export default {
  mounted () {
    loaded.then(() => {
      if (this.selectFirstOnEnter) {
        downArrowSimulator(this.$refs.input)
      }

      if (typeof (google.maps.places.Autocomplete) !== 'function') {
        throw new Error('google.maps.places.Autocomplete is undefined. Did you add \'places\' to libraries when loading Google Maps?')
      }

      /* eslint-disable no-unused-vars */
      const finalOptions = {
        ...getPropsValues(this, mappedProps),
        ...this.options
      }

      this.$autocomplete = new google.maps.places.Autocomplete(this.$refs.input, finalOptions)
      bindProps(this, this.$autocomplete, mappedProps)

      this.$watch('componentRestrictions', v => {
        if (v !== undefined) {
          this.$autocomplete.setComponentRestrictions(v)
        }
      })

      // Not using `bindEvents` because we also want
      // to return the result of `getPlace()`
      this.$autocomplete.addListener('place_changed', () => {
        this.$emit('place_changed', this.$autocomplete.getPlace(), this.id, this.index)
      })
    })
  },
  props: {
    ...mappedPropsToVueProps(mappedProps),
    ...props
  }
}
</script>
