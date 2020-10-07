const config = require('./../config')

class OAuth {
  constructor (type) {
    this.type = type
  }

  getUrl () {
    return config.get('oauth:' + this.type + ':url')
  }

  getParams () {
    return config.get('oauth:' + this.type + ':params')
  }
}

module.exports = OAuth
