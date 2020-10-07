<template>
  <div class="bar-player" v-show="tracks.length">
    <div class="bar__content">
      <div class="progress-player" @mousedown="_handleDownProgress" @mouseup="_handleUpProgress" @mousemove="_handleMoveProgress" @mouseout="_handleOutProgress" ref="progressBar">
        <div class="progress__bg"></div>
        <div class="progress__bar">
          <div class="progress__line" :style="{ 'width': width.loaded }"></div>
        </div>
        <div class="progress__bar progress__progress">
          <div class="progress__line" :style="{ 'width': (progressBar.down) ? progressBar.width.position :width.position }">
            <div class="progress__head"></div>
          </div>
        </div>
        <div class="progress__bar progress__text">
          <div class="progress__left">{{ convertTime(Math.round(position)) }}</div>
          <div class="progress__right">{{ convertTime(Math.round(duration)) }}</div>
        </div>
      </div> <!-- -progress -->
      <div class="player-controls">
        <div class="player-controls__btn player-controls__btn_prev" title="Назад" @click="_handleClickPrevTrack">
          <div class="icon icon_prev"></div>
        </div>
        <div :class="[{ 'player-controls__btn_pause': (playing) }, 'player-controls__btn player-controls__btn_play']" :title="(playing) ? 'Пауза' : 'Играть'" @click="togglePlayback">
          <div class="icon"></div>
        </div>
        <div class="player-controls__btn player-controls__btn_next" title="Вперед" @click="_handleClickNextTrack">
          <div class="icon icon_next"></div>
        </div>
        <div class="player-controls__track-container" v-if="current">
          <div class="player-controls__track player-controls__track_shown">
            <div class="player-controls__wrapper">
              <div class="track track_type_player">
                <a href="javascript:void(0)" class="track__cover">
                  <div class="d-cover__wrapper track-cover__wrapper">
                    <img :src="current.album_cover_50">
                  </div>
                </a>
                <div class="track__name">
                  <div class="track__name-wrap">
                    <a href="javascript:void(0)" @click.stop class="track__title link">{{ current.name }}</a>
                    <div class="track__artists">
                      <a href="javascript:void(0)" @click.stop class="link ">{{ current.author }}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="player-controls__track-controls">
                <like-custom-el class="player-controls__btn like_player"
                                type="audio"
                                :id="current.audio_id" :count="current.likes.count"
                                :liked="current.likes.liked" gtm="LIKE_AUDIO">
                  <div :class="{ 'icon': true, 'icon_like': true }"></div>
                </like-custom-el>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- -player-controls -->

      <div :class="[{'volume_open': volumeBar.open }, 'volume volume_bottom volume_show-equalizer volume_visited']" @mouseover="showOpenVolume()" @mouseleave="hideOpenVolume()">
        <div class="volume__holder"></div>
        <div class="volume__control">
          <div class="d-equalizer">
            <div class="d-equalizer__button">
              <span class="d-icon deco-icon d-icon_equalizer"></span>
            </div>
          </div>
          <div class="volume__bar">
            <div class="volume__slider">
              <div class="d-slider-vert__track" ref="volumeBar" @mousedown="_handleDownVolume" @mouseup="_handleUpVolume" @mousemove="_handleMoveVolume" @mouseout="_handleOutVolume">
                <div class="d-slider-vert__filled" :style="{ 'height': height.volume }">
                  <button class="d-slider-vert__drag" tabindex="-1"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="volume__btn" @click="toggleMuteVolume">
          <div :class="{ 'volume__icon': true, 'volume__icon_half': (Number(volume) > 0 && Number(volume) < 0.5), 'volume__icon_mute': (Number(volume) === 0) }"></div>
        </div>
      </div> <!-- -volume -->
    </div> <!-- -bar__content -->
  </div> <!-- -bar-player -->
</template>

<script>
  import { mapGetters } from 'vuex'
  import Player from '@modules/Player'
  import { addClass, removeClass } from '@utils'
  
  export default {
    mixins: [Player],
    data () {
      return {
        progressBar: {
          down: false,
          width: {
            position: '0%'
          }
        },
        volumeBar: {
          open: false,
          down: false
        }
      }
    },
    computed: {
      ...mapGetters({
        role: 'auth/getRole',
        user: 'auth/getAuthUser',
        profile: 'auth/getProfile',
        tracks: 'audio/getPlaylist',
        isAuthorized: 'auth/isAuthorized',
        currentAudioId: 'audio/getCurrentAudioId'
      }),
      trackUrls () {
        return this.tracks.map((item) => item.path)
      },
      current () {
        return this.tracks[this.trackIndex] || null
      },
    },
    watch: {
      tracks (val) {
        let index = this.tracks.map((item) => item['audio_id']).indexOf(this.currentAudioId)

        if (index > -1) {
          this.trackIndex = index
        } else this.trackIndex = null

        if (val.length) {
          addClass(document.body, 'audio-player-show')
        } else removeClass(document.body, 'audio-player-show')
      },
      trackIndex (index) {
        if (this.tracks.length && index !== null) {
          let audioId = this.tracks[index]['audio_id'] || null
          this.$store.dispatch('audio/setCurrentAudioId', audioId)
        }
      },
      playing (val) {
        this.$store.dispatch('audio/setStatePlayingAudio', Boolean(val))
      }
    },
    mounted () {
      this.$root.$on('start-play-audio', (audioId) => {
        this.$store.dispatch('audio/setCurrentAudioId', audioId)

        let state = this.$data._player.getState()
        if (state === window.ya.music.Audio.STATE_PLAYING && this.current && this.current['audio_id'] === audioId) {
          this.pause()
        } else if (state === window.ya.music.Audio.STATE_PAUSED && this.current && this.current['audio_id'] === audioId) {
          this.resume()
        } else {
          let index = this.tracks.map((item) => item['audio_id']).indexOf(audioId);
          if (index > -1) {
            this.trackIndex = index
            this.play()
          }
        }
      })
    },
    beforeDestroy() {
      this.$root.$off('start-play-audio')
    },
    methods: {
      showOpenVolume () {
        this.volumeBar.open = true
      },
      hideOpenVolume () {
        this.volumeBar.open = false
      },
      _handleMoveProgress (e) {
        let offsetLeft = function(node) {
          let offset = node.offsetLeft;
          if (node.offsetParent) {
            offset += offsetLeft(node.offsetParent)
          }
          return offset;
        }

        let full = this.$refs.progressBar.offsetWidth,
          offset = offsetLeft(this.$refs.progressBar);

        let relative = Math.max(0, Math.min(1, (e.clientX - offset) / full));

        this.progressBar.width.position = `${(relative*100).toFixed(2)}%`
      },
      _handleOutProgress (e) {
        this.progressBar.down = false
      },
      _handleDownProgress (e) {
        this.progressBar.down = true
      },
      _handleUpProgress (e) {
        let offsetLeft = (node) => {
          let offset = node.offsetLeft;
          if (node.offsetParent) {
            offset += offsetLeft(node.offsetParent)
          }
          return offset
        }

        let full = this.$refs.progressBar.offsetWidth,
          offset = offsetLeft(this.$refs.progressBar)

        let relative = Math.max(0, Math.min(1, (e.clientX - offset) / full))
        let duration = this.getDuration()

        this.setPosition(duration * relative)

        this.$nextTick(() => {
          this.progressBar.down = false
        })
      },
      _handleDownVolume (e) {
        this.volumeBar.down = true
      },
      _handleUpVolume (e) {
        this.setPositionVolume(e)
        this.volumeBar.down = false
      },
      _handleMoveVolume (e) {
        if (this.volumeBar.down) {
          this.setPositionVolume(e)
        }
      },
      _handleOutVolume (e) {
        this.volumeBar.down = false
      },
      setPositionVolume (e) {
        let offsetTop = (node) => {
          let offset = node.offsetTop
          if (node.offsetParent) {
            offset += offsetTop(node.offsetParent)
          }
          return offset
        }

        let full = this.$refs.volumeBar.offsetHeight,
          offset = offsetTop(this.$refs.volumeBar)

        let volume = 1 - Math.max(0, Math.min(1, (e.clientY - offset) / full))
        this.setVolume(volume);
        try {
          this.$localStorage.set('player.volume', volume)
        } catch(e) {}
      },
      toggleMuteVolume () {
        if (this.volume > 0) this.setVolume(0)
        else {
          try {
            let volume = this.$localStorage.get('player.volume', 1, Number)
            if (volume) this.setVolume(parseFloat(volume))
          } catch(e) {}
        }
      },
      _handleClickPrevTrack () {
        this.prevTrack()
      },
      _handleClickNextTrack () {
        this.nextTrack()
      }
    }
  }
</script>

<style lang="sass">
  .bar-player
    position: fixed
    width: 100%
    margin: 0 auto
    bottom: 0
    z-index: 13
    transition: transform .25s ease
    z-index: 2147485000!important
    .bar__content
      position: relative
      height: 100%
      min-height: 60px
      background: rgba(255,255,255,0.95)
      .progress-player
        position: absolute
        right: 0
        left: 0
        bottom: 60px
        height: 16px
        cursor: pointer
        -webkit-user-select: none
        -moz-user-select: none
        -ms-user-select: none
        .progress__bg
          position: absolute
          left: 0
          bottom: 0
          width: 100%
          height: 5px
          background: #ebebeb
        .progress__bar
          position: absolute
          left: 0
          bottom: 0
          width: 100%
          text-align: center
          color: #000
          font-size: 11px
          height: 5px
          line-height: 5px
          .progress__line
            display: block
            position: relative
            height: 100%
            background: rgba(191,191,191,0.95)
          &.progress__progress
            color: #000
            .progress__line
              background: #167efb
          .progress__left
            margin-left: 10px
            float: left
            display: none
          .progress__right
            margin-right: 10px
            float: right
            display: none
      .player-controls
        position: absolute
        -moz-box-sizing: border-box
        box-sizing: border-box
        top: 0
        padding-left: 12px
        width: 100%
        .player-controls__btn
          width: 40px
          height: 40px
          margin: 0 0 0 8px
          padding: 10px 0
          opacity: .4
          display: inline-block
          cursor: pointer
          vertical-align: top
          -webkit-user-select: none
          user-select: none
          box-sizing: content-box
          &:hover
            opacity: 1
          .icon_prev
            background-image: url(/dist/img/player/prev.svg)
          .icon_next
            background-image: url(/dist/img/player/next.svg)
        .player-controls__btn_play
          .icon
            background-image: url(/dist/img/player/play.svg)
        .player-controls__btn_pause
          .icon
            background-image: url(/dist/img/player/pause.svg)

        .player-controls__track-container
          position: absolute
          bottom: 0
          margin-left: 220px
          right: 210px
          left: 0
          .player-controls__track
            display: inline-block
            position: relative
            max-width: 100%
            vertical-align: top
            .player-controls__wrapper
              margin-left: 0
              padding: 5px 0
              position: relative
              max-width: 500px
              transition: max-width .1s ease
              .track
                position: relative
                overflow: hidden
                font: 13px YandexSans,Arial,Helvetica,sans-serif
                line-height: 38px
                height: 38px
                cursor: pointer
                .track__cover
                  display: inline-block
                  position: absolute
                  width: 50px
                  height: 50px
                  top: 8px
                  left: 4px
                  .track-cover__wrapper
                    height: 100%
                    position: relative
                    &:after
                      content: ''
                      display: block
                      position: absolute
                      width: 100%
                      height: 100%
                      top: 0
                      left: 0
                      background: #222
                      opacity: .03
                    img
                      width: 50px
                      height: 50px
                      object-fit: cover
                      border-radius: 4px
                      box-sizing: border-box
              .track__name
                color: #000
                margin-left: 35px
                margin-right: 55px
                position: relative
              .track__name-wrap
                position: absolute
                left: 0
                padding-left: 5px
                right: 0
                white-space: nowrap
                overflow: hidden
                text-overflow: ellipsis
              .track_type_player
                height: 50px
                line-height: 50px
                margin-top: 0
                height: 50px
                vertical-align: middle
                border: 0
                .track__cover
                  left: 0
                  top: 0
                .track__name
                  margin-left: 60px
                  line-height: 1.6
                  margin-top: 5px
                .track__name-wrap
                  position: static
                  padding-left: 1px
                  .track__title
                    font-weight: bold
                .track__artists
                  white-space: nowrap
                  overflow: hidden
                  text-overflow: ellipsis
            .player-controls__track-controls
              display: inline-block
              position: absolute
              right: 0
              top: 0
              vertical-align: top
              white-space: nowrap
              .player-controls__btn
                margin-left: 0
              .like_player
                .icon_like
                  margin: 6px
                  width: 28px
                  height: 28px
                  background-image: url(/dist/img/player/like.svg)
                &.active
                  .icon_like
                    background-image: url(/dist/img/player/like_on.svg)
    .overlay
      display: block
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: 100
      &.hidden
        display: none
    &:hover
      .bar__content
        .progress-player
          .progress__bg, .progress__bar
            height: 16px
            line-height: 17px
            -webkit-animation: progress__expand 90ms ease-out
            -moz-animation: progress__expand 90ms ease-out
            animation: progress__expand 90ms ease-out
            .progress__left, .progress__right
              display: block
    .icon
      display: inline-block
      background: center center no-repeat
      background-size: 100% 100%
      width: 32px
      height: 32px
    .volume
      position: absolute
      right: 15px
      top: 10px
      z-index: 3
      -webkit-touch-callout: none
      -webkit-user-select: none
      -khtml-user-select: none
      -moz-user-select: none
      -ms-user-select: none
      user-select: none
      display: inline-block
      line-height: 0
      .volume__holder
        display: none
        position: absolute
        width: 100%
        height: 80px
        left: 0
        bottom: 0
      .volume__control
        display: block
        position: absolute
        width: 44px
        height: 225px
        background: #fff
        right: -2px
        border: 1px #e0e0e0 solid
        border-radius: 3px
        box-sizing: border-box
        box-shadow: 0 15px 30px rgba(0,0,0,0.2)
        opacity: 0
        z-index: -1
        margin-bottom: 65px
        bottom: -500px
        &:after, &:before
          display: block
          position: absolute
          content: ""
          width: 0
          height: 0
          border-style: solid
        &:after
          bottom: -5px
          border-width: 5px 4px 0 4px
          border-color: #f7f6f4 transparent transparent transparent
          right: 18px
        &:before
          bottom: -6px
          border-width: 6px 6px 0 6px
          border-color: #e0e0e0 transparent transparent transparent
          right: 16px
        .volume__bar
          display: block
          position: absolute
          top: 0
          right: 0
          width: 42px
          height: 100%
          background: #f7f6f4
          z-index: 1
          .volume__slider
            position: absolute
            bottom: 31px
            left: 50%
            margin-left: -16px
            display: block
            width: 32px
            height: 136px
            .d-slider-vert__track
              display: block
              position: absolute
              width: 6px
              height: 100%
              left: 50%
              margin-left: -3px
              background: #e0e0e0
              border-radius: 3px
              cursor: pointer
              .d-slider-vert__filled
                display: block
                position: absolute
                left: 0
                bottom: 0
                width: 6px
                border-radius: 3px
                background: rgba(22, 126, 251, 0.5)
                .d-slider-vert__drag
                  box-sizing: border-box
                  display: block
                  position: absolute
                  top: -9px
                  left: -6px
                  width: 18px
                  height: 18px
                  background: #fff
                  border: 1px solid rgba(151,151,151,0.25)
                  border-radius: 9px
                  box-shadow: 0 2px 1px rgba(0,0,0,0.15)
                  cursor: pointer
                  z-index: 2
        .d-equalizer
          position: absolute
          right: 0
          top: 0
          z-index: 2
          display: inline-block
          -webkit-touch-callout: none
          -webkit-user-select: none
          -khtml-user-select: none
          -moz-user-select: none
          -ms-user-select: none
          user-select: none
          .d-equalizer__button
            margin-top: 3px
            cursor: pointer
            .d-icon_equalizer
              opacity: .4
              margin: 10px 9px 10px 11px
              background: url(/dist/img/player/equalizer.svg)
              background-size: 100%
              width: 24px
              height: 24px
              display: inline-block
      .volume__btn
        opacity: .4
        position: relative
        display: inline-block
        cursor: pointer
        .volume__icon
          position: relative
          background: url(/dist/img/player/volume.svg) center center no-repeat
          background-position: 0 0
          display: inline-block
          width: 28px
          height: 28px
          margin: 6px
          box-sizing: border-box
          &.volume__icon_half
            background-position: 0 -28px
          &.volume__icon_mute
            background-position: 0 -56px

      &.volume_open
        .volume__holder
          display: block
        .volume__control
          bottom: 10px
          -webkit-animation: volume_bottom__expand 100ms ease-out
          -moz-animation: volume_bottom__expand 100ms ease-out
          animation: volume_bottom__expand 100ms ease-out
          bottom: 10px
          opacity: 1
          z-index: 10
        .volume__btn
          opacity: 1
</style>
