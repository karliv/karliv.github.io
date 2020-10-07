class Response {
  constructor () {
    this.readState = {
      classes: {
        [true]: 'd-card__status_response_viewed',
        [false]: 'd-card__status_casting_draft'
      }
    }
  }

  getResponseReadStateClass (read) {
    let item = this.readState.classes[read]
    return item || ''
  }
}

export default new Response
