<template>
  <gmap-map
    :center="map.center"
    :zoom="map.zoom"
    ref="map"
    :map-type-id="map.type"
    :style="map.style"
    :options="map.options">
    <gmap-marker :clickable="false" :draggable="false" :position="{ lat, lng }"/>
  </gmap-map>
</template>

<script>
  import { has } from '@utils'
  import { inBrowser } from '@utils'
  import { Map as GmapMap, Marker as GmapMarker } from '~/node_modules/vue2-google-maps' // SUPER PUPER FIXIK

  export default {
    components: { GmapMap, GmapMarker },
    props: {
      lat: {
        type: Number,
        required: true
      },
      lng: {
        type: Number,
        required: true
      }
    },
    data () {
      return {
        has,
        map: {
          center: { lat: this.lat, lng: this.lng },
          zoom: 17,
          type: 'roadmap',
          markers: [],
          places: [],
          currentPlace: null,
          style: {
            width: '100%',
            height: '150px'
          },
          options: {
            zoomControl: false,
            scaleControl: false,
            rotateControl: false,
            mapTypeControl: false,
            disableDefaultUi: false,
            fullscreenControl: false,
            streetViewControl: false,
          }
        }
      }
    },
  }
</script>

<style scoped>

</style>
