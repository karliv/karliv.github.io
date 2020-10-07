import { isBrowser } from '@utils'

import clamp from 'math-clamp'
import assign from 'object-assign'

if (isBrowser) {
  require('ya-music')
}

export default {
  data () {
    return {
      /**
       * The Player instance used for playback
       */
      _player: null,
      /**
       * Whether audio is currently playing
       */
      playing: false,
      /**
       * Whether the audio playback is muted
       */
      muted: false,
      /**
       * The volume of the playback on a scale of 0 to 1
       */
      volume: 1.0,
      /**
       * The position of playback in seconds
       */
      position: 0,
      /**
       * The loaded of playback in seconds
       */
      loaded: 0,
      /**
       * The duration of the audio in seconds
       */
      duration: 0,
      /**
       * The index track in palylist
       */
      trackIndex: null,
      /**
       *
       */
      width: {
        loaded: '0%',
        position: '0%'
      },
      /**
       *
       */
      height: {
        volume: '100%'
      },
      /**
       * A list of player events to listen to and
       * functions to call when they are triggered
       */
      _events: [
        {
          name: window.ya.music.Audio.EVENT_STATE,
          emit: true,
          hook: (state) => {
            if (state === window.ya.music.Audio.STATE_PLAYING) {
              this.playing = true
            } else this.playing = false
          }
        },
        {
          name: window.ya.music.Audio.EVENT_PROGRESS,
          emit: false,
          hook: (timings) => {
            this.loaded = timings.loaded
            this.position = timings.position
            this.duration = timings.duration
            this.width = {
              loaded: `${(timings.loaded / timings.duration * 100).toFixed(2)}%`,
              position: `${(timings.position / timings.duration * 100).toFixed(2)}%`
            }
          }
        },
        {
          name: window.ya.music.Audio.EVENT_VOLUME,
          emit: false,
          hook: (volume) => {
            this.volume = volume.toFixed(2)
            this.height.volume = (volume * 100).toFixed(2) + '%'
          }
        },
        {
          name: window.ya.music.Audio.EVENT_ENDED,
          emit: true,
          hook: () => {
            this.trackIndex++
            if (this.trackIndex < this.trackUrls.length) this.play()
          }
        },
        {
          name: window.ya.music.Audio.EVENT_LOADED,
          emit: true,
          hook: () => {
            if (this.trackIndex + 1 < this.trackUrls.length) this.$data._player.preload(this.trackUrls[this.trackIndex + 1])
          }
        },
        {
          name: window.ya.music.Audio.EVENT_ERROR,
          emit: true,
          hook: () => {
            this.$emit('error-playing')
          }
        },
        {
          name: window.ya.music.Audio.EVENT_CRASHED,
          emit: true,
          hook: () => {
            this.$emit('error-init')
          }
        }
      ]

    }
  },
  computed: {

  },
  created () {

  },
  mounted () {
    this._initialize()
  },
  beforeDestroy () {
    this._cleanup()
  },
  watch: {

  },
  methods: {
    /**
     * Initialize the Yandex player
     */
    _initialize () {
      const AudioPlayer = window.ya.music.Audio

      let _overlay = document.createElement('div')
      _overlay.className = 'overlay'
      this.$el.appendChild(_overlay)

      this.$data._player = new AudioPlayer(null, _overlay)

      this.$data._player.initPromise().then(() => {
        /**
         * Hide overlay, show controll button
         */
        _overlay.classList.add('hidden')

        try {
          let volume = this.$localStorage.get('player.volume', 1, Number)
          if (volume) this.setVolume(parseFloat(volume))
        } catch (e) {}
      }, (err) => {
        /**
         * Show error in overlay
         */
        _overlay.innerHTML = err.message
        _overlay.classList.add('error')
      })

      // const duration  = this.$data._player.getDuration();
      // this.duration = duration;

      // Bind to all Player events
      this.$data._events = this.$data._events.map(event => {
        // Normalize string shorthands to objects
        if (typeof event === 'string') {
          event = { name: event }
        }

        // Create a handler
        const handler = (...payload) => {
          if (typeof event.hook === 'function') event.hook(...payload)
          if (event.emit) this.$emit(event.name, ...payload)
        }

        // // Bind the handler
        this.$data._player.on(event.name, handler)

        // // Return the name and handler to unbind later
        return assign({}, event, { handler })
      })

      this.$data._player.initPromise().then(() => {
        let volume = this.$data._player.getVolume()
        this.height.volume = (volume * 100).toFixed(2) + '%'
      })
    },
    /**
     * Clean up the Howler player
     */
    _cleanup (resetSettings = true) {
      // Stop all playback
      if (this.$data._player) this.stop()

      // Clear all event listeners
      this.$data._player.map(event => {
        if (event.handler) {
          if (this.$data._player) {
            this.$data._player.off(event.name, event.handler)
          }

          const _event = assign({}, event)
          delete _event.handler
          return _event
        }

        return event
      })

      // Destroy the Howl instance
      this.$data._player = null
    },
    /**
     * Start the playback
     */
    play () {
      let track = this.trackUrls[this.trackIndex]

      if (this.$data._player.isPreloaded(track)) {
        this.$data._player.playPreloaded(track)
      } else this.$data._player.play(track)
    },
    /**
     * Pause the playback
     */
    pause () {
      this.$data._player.pause()
    },
    /**
     * Stop the playback
     */
    stop () {
      this.$data._player.stop()
    },
    /**
     * Resume the playback
     */
    resume () {
      this.$data._player.resume()
    },
    /**
     * Previous the play track
     */
    prevTrack () {
      this.trackIndex = (this.trackIndex > 0) ? (this.trackIndex - 1) : 0
      this.play()
    },
    /**
     * Next the play track
     */
    nextTrack () {
      this.trackIndex = (this.trackIndex >= (this.trackUrls.length - 1)) ? 0 : (this.trackIndex + 1)
      this.play()
    },
    /**
     * Toggle playing or pausing the playback
     */
    togglePlayback () {
      let state = this.$data._player.getState()

      switch (state) {
        case window.ya.music.Audio.STATE_PLAYING:
          this.$data._player.pause()
          break

        case window.ya.music.Audio.STATE_PAUSED:
          this.$data._player.resume()
          break

        default:
          this.play()
      }
    },
    /**
     * Set the volume of the playback
     * @param {Number} volume - The new volume.
     * The value is clamped between 0 and 1
     */
    setVolume (volume) {
      if (typeof volume !== 'number') {
        throw new Error(
          `volume must be a number, got a ${typeof volume} instead`
        )
      }

      this.$data._player.setVolume(clamp(volume, 0, 1))
    },
    /**
     * Set the position of the playback
     * @param {Number} progress - The new position.
     * The value is clamped between 0 and 1
     */
    setPosition (progress) {
      if (typeof progress !== 'number') {
        throw new Error(
          `progress must be a number, got a ${typeof progress} instead`
        )
      }

      let duration = this.$data._player.getDuration()
      this.$data._player.setPosition(clamp(progress, 0, duration))
    },
    /**
     * Conver seconds to M:SS.
     * @param  {Number}  secs - Seconds
     * @return {String}  Formated timeline
     */
    convertTime (secs) {
      let minutes = Math.floor(secs / 60) || 0
      let seconds = (secs - minutes * 60) || 0
      return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
    },
    getDuration () {
      return this.$data._player.getDuration()
    }
  }
}
