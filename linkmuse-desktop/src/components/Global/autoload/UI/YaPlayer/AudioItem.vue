<template>
  <div :class="[{ 'play': (isPlaying === true), 'pause': (isPlaying === false), 'current': (isCurrent === true) }, 'music-icon']" @click.stop.prevent="_handleClickPlayAudio">
    <slot></slot>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: {
      audioId: {
        type: Number,
        required: true
      },
      audio: {
        type: Object,
        required: true
      },
    },
    computed: {
      ...mapGetters({
        currentAudioId: 'audio/getCurrentAudioId',
        statePlayingAudio: 'audio/getStatePlayingAudio'
      }),
      isCurrent () {
        return (this.audioId === this.currentAudioId)
      },
      isPlaying () {
        return (this.isCurrent && this.statePlayingAudio === true)
      }
    },
    methods: {
      _handleClickPlayAudio () {
        this.$emit('play', this.audioId);
      }
    }
  }
</script>

<style scoped>

</style>
