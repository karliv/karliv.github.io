export default {
  install (Vue, options) {
    Vue.prototype.$setLaravelValidationErrorsFromResponse = function (errorResponse) {
      // only allow this function to be run if the validator exists
      if (!this.hasOwnProperty('$validator')) return

      // clear errors
      this.$validator.errors.clear()

      // check if errors exist
      if (!errorResponse.hasOwnProperty('errors')) return

      const { errors } = errorResponse

      // insert laravel errors
      Object.keys(errors).forEach((key) => this.$validator.errors.add({ field: key, msg: errors[key].join(', ') }))
    }
  }
}
