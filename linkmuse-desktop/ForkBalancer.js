const { fork } = require('child_process')

const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16 | 0; let v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

const requestLimit = 0

class ForkBalancer {
  constructor ({ path = '', forks = 4, maxRAM = 250, args = [] }) {
    this.path = path
    this.args = args
    this.forks = forks
    this.activeFork = 0
    this.maxRAM = maxRAM
    this.resolvers = Array.from({ length: forks }, () => new Map())
    this.renderers = Array.from({ length: forks }, () => this.createFork())
  }

  getFromRenderer (params) {
    const { resolvers, maxRAM, activeFork, renderers } = this
    const renderer = renderers[activeFork]

    return new Promise((resolve, reject) => {
      try {
        let jobId = uuid()
        renderer.setMaxListeners(requestLimit)
        renderer.send({ ...params, maxRAM, renderId: activeFork, jobId })
        resolvers[activeFork].set(jobId, resolve)
      } catch (error) {
        reject(error)
      }
    })
  }

  createListeners (renderer) {
    const { resolvers } = this

    renderer.on('message', res => {
      const { renderId, jobId } = res
      const resolve = resolvers[renderId].get(jobId)

      resolve(res)
      resolvers[renderId].delete(jobId)

      if (res.kill && renderId === this.activeFork) {
        this.next()
      }

      if (res.kill && resolvers[renderId].size === 0) {
        this.kill(renderId)
      }
    })
  }

  createFork () {
    const { path, args } = this
    const render = fork(path, args)
    this.createListeners(render)

    return render
  }

  kill (activeFork) {
    const { renderers } = this

    const renderer = renderers[activeFork]
    renderer.kill()
    console.log('Kill fork #' + activeFork)

    this.renderers[activeFork] = this.createFork()
  }

  next () {
    const { activeFork, forks } = this

    if (activeFork === forks - 1) {
      this.activeFork = 0
    } else this.activeFork++
    console.log('Change active fork to #' + this.activeFork)
  }
}

module.exports = ForkBalancer
