import $ from 'jquery'

export default {
  methods: {
    _checkScrollbar () {
      const rect = document.body.getBoundingClientRect()
      return rect.left + rect.right < window.innerWidth
    },
    _getScrollbarWidth () {
      const scrollDiv = document.createElement('div')
      scrollDiv.className = 'modal-scrollbar-measure'
      document.body.appendChild(scrollDiv)
      const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth
      document.body.removeChild(scrollDiv)
      return scrollbarWidth
    },
    _setScrollbar () {
      if (this._checkScrollbar()) {
        let _scrollbarWidth = this._getScrollbarWidth()

        // Adjust fixed content padding
        $('.is-fixed').each((index, element) => {
          const actualPadding = $(element)[0].style.paddingRight
          const calculatedPadding = $(element).css('padding-right')
          $(element).data('padding-right', actualPadding).css('padding-right', `${parseFloat(calculatedPadding) + _scrollbarWidth}px`)
        })

        $('.is-fixed-mgn').each((index, element) => {
          const actualMargin = $(element)[0].style.marginRight
          const calculatedMargin = $(element).css('margin-right')
          $(element).data('margin-right', actualMargin).css('margin-right', `${parseFloat(calculatedMargin) + _scrollbarWidth}px`)
        })

        const actualPadding = document.body.style.paddingRight
        const calculatedPadding = $(document.body).css('padding-right')
        $(document.body).data('padding-right', actualPadding).css('padding-right', `${parseFloat(calculatedPadding) + _scrollbarWidth}px`)
      }
    },
    _resetScrollbar () {
      $('.is-fixed').each((index, element) => {
        const padding = $(element).data('padding-right')
        if (typeof padding !== 'undefined') {
          $(element).css('padding-right', padding).removeData('padding-right')
        }
      })

      // Restore sticky content and navbar-toggler margin
      $('.is-fixed-mgn').each((index, element) => {
        const margin = $(element).data('margin-right')
        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right')
        }
      })

      // Restore body padding
      const padding = $(document.body).data('padding-right')
      if (typeof padding !== 'undefined') {
        $(document.body).css('padding-right', padding).removeData('padding-right')
      }
    }
  }
}
