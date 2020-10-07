<script>
    import { Dropdown } from 'uiv'

const DEFAULT_TAG = 'div'

    export default {
      mixins: [Dropdown],
      props: {
        menuTop: {
          type: Boolean,
          default: false
        }
      },
      render (h) {
        return h(
          this.tag,
          {
            class: {
              'btn-group': this.tag === DEFAULT_TAG,
              dropdown: !this.dropup,
              dropup: this.dropup,
              open: this.show
            }
          },
          [
            this.$slots.default,
            h(
              'ul',
              {
                class: {
                  'dropdown-menu': true,
                  'dropdown-menu-right': this.menuRight,
                  'top_profile_menu': this.menuTop
                },
                ref: 'dropdown'
              },
              [this.$slots.dropdown]
            )
          ]
        )
      }
    }
</script>