<script>
import Dropzone from 'nuxt-dropzone'

export default {
  extends: Dropzone
}
</script>

<style lang="sass">
    .dropzone
        &.dz-clickable
            cursor: pointer
            *
                cursor: default
            .dz-message
                cursor: pointer
                *
                    cursor: pointer
        &.dz-started
            .dz-message
                display: none;
        .dz-preview
            &.dz-processing
                .dz-progress
                    opacity: 1;
                    -webkit-transition: all 0.2s linear;
                    -moz-transition: all 0.2s linear;
                    -ms-transition: all 0.2s linear;
                    -o-transition: all 0.2s linear;
                    transition: all 0.2s linear;
            &.dz-complete
                .dz-progress
                    opacity: 0;
                    -webkit-transition: opacity 0.4s ease-in;
                    -moz-transition: opacity 0.4s ease-in;
                    -ms-transition: opacity 0.4s ease-in;
                    -o-transition: opacity 0.4s ease-in;
                    transition: opacity 0.4s ease-in;
            &:not(.dz-processing)
                .dz-progress
                    -webkit-animation: pulse 6s ease infinite;
                    -moz-animation: pulse 6s ease infinite;
                    -ms-animation: pulse 6s ease infinite;
                    -o-animation: pulse 6s ease infinite;
                    animation: pulse 6s ease infinite;
</style>
