<template>
  <gmap-map
      :center="map.center"
      :zoom="map.zoom"
      ref="map"
      :map-type-id="map.type"
      :style="map.style">
    <gmap-cluster :styles="map.cluster.styles" :zoomOnClick="map.cluster.zoomOnClick">
      <gmap-info-window :options="map.info.options" :position="map.info.position" :opened="map.info.opened" @closeclick="_handleCloseInfoWindow">
        <template v-if="specialist">
            <specialist-item :specialist="specialist"></specialist-item>
        </template>
      </gmap-info-window>

      <gmap-marker v-for="(user, index) in markers"  v-if="has(user, 'services.data.0.studio.data.coordinates')"
          :key="user.id"
           :icon.sync="map.marker.icon"
          :clickable="true" :draggable="false"
          :position="{ lat: parseFloat(user.services.data[0]['studio']['data']['coordinates']['lat']), lng: parseFloat(user.services.data[0]['studio']['data']['coordinates']['lng']) } "
          @click="_handleToggleInfoWindow(user, index)"/>
    </gmap-cluster>
  </gmap-map>
</template>

<script>
import { has } from '@utils'
import { inBrowser } from '@utils'
import { Map as GmapMap, Marker as GmapMarker, InfoWindow as GmapInfoWindow} from '~/node_modules/vue2-google-maps' // SUPER PUPER FIXIK
import GmapCluster from '~/node_modules/vue2-google-maps/dist/components/cluster'
import SpecialistItem from '@components/CertifyingSpecialist/Customer/Specialist/Card/MapItem.vue'

const HEIGHT_HEADER = 62

const getGoogleClusterInlineSvg = (color) => {
  const encoded = window.btoa(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-100 -100 200 200"><defs><g id="a" transform="rotate(45)"><path d="M0 47A47 47 0 0 0 47 0L62 0A62 62 0 0 1 0 62Z" fill-opacity="0.5"/></g></defs><g fill="${color}"><circle r="42"/><use xlink:href="#a"/><g transform="rotate(120)"><use xlink:href="#a"/></g><g transform="rotate(240)"><use xlink:href="#a"/></g></g></svg>`)
  return (`data:image/svg+xml;base64,${encoded}`)
}

const getGoogleMarkerSvg = (color) => {
  const encoded = window.btoa(`<svg width="36px" height="36px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-1110.000000, -313.000000)" fill="${color}"> <circle id="Oval-2" cx="1128" cy="331" r="18"></circle> </g> </g> <text text-anchor="middle" x="18" y="22" font-weight="bold" lengthAdjust="spacing" font-family="Arial" font-size="12" fill="#ffffff">1</text> </svg>`)
  return (`data:image/svg+xml;base64,${encoded}`)
}

export default {
  components: { GmapMap, GmapMarker, GmapCluster, GmapInfoWindow, SpecialistItem},
  props: {
    specialists: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      has,
      map: {
        center: { lat: 55.753, lng: 37.619 },
        zoom: 11,
        type: 'roadmap',
        markers: [],
        places: [],
        currentPlace: null,
        style: {
          width: '100%',
          height: '698px'
        },
        marker: {
          icon: getGoogleMarkerSvg('#0063da')
        },
        info: {
          specialist: null,
          index: null,
          options: {
            pixelOffset: {
              width: 0,
              height: -35
            }
          },
          position: null,
          opened: false
        },
        cluster: {
          zoomOnClick: true,
          gridSize: 10,
          styles: [
            {
              width: 75,
              height: 75,
              url: getGoogleClusterInlineSvg('#0063da'),
              textColor: '#ffffff',
              textSize: 12
            }
          ]
        }
      }
    }
  },
  computed: {
    markers () {
      return this.specialists.filter((item) => has(item, 'services.data.0.studio.data.coordinates') && item.services.data[0]['studio']['data']['coordinates'])
    },
    specialist () {
      return this.map.info.specialist
    }
  },
  mounted () {
    this.geolocate()
  },
  created () {
    if (inBrowser) {
      window.addEventListener('resize', this._handleWindowResize)
      this._handleWindowResize()
    }
  },
  beforeDestroy () {
    if (inBrowser) {
      window.removeEventListener('resize', this._handleWindowResize)
    }
  },
  methods: {
    _handleWindowResize () {
      let height = window.innerHeight
      this.map.style.height = `${height - HEIGHT_HEADER}px`
    },
    geolocate () {
      navigator.geolocation.getCurrentPosition(position => {
        this.map.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    },
    _handleToggleInfoWindow (specialist, index) {
      let position = has(specialist, 'services.data.0.studio.data.coordinates') ? specialist.services.data[0]['studio']['data']['coordinates'] : false
      this.map.info.specialist = specialist

      if (position) {
        let { lat, lng } = specialist.services.data[0]['studio']['data']['coordinates']
        this.map.info.position = { lat: parseFloat(lat), lng: parseFloat(lng) }
        this.map.center = { lat: parseFloat(lat), lng: parseFloat(lng) }
      }

      if (this.map.info.index === index) {
        this.map.info.opened = !this.map.info.opened
      } else {
        this.map.info.opened = true
        this.map.info.index = index
      }
    },
    _handleCloseInfoWindow () {
      this.map.info.opened = false
    }
  }
}
</script>
