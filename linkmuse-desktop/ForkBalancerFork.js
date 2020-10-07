const fs = require('fs')
const path = require('path')
const LRU = require('lru-cache')
const { createBundleRenderer } = require('vue-server-renderer')

const serverBundle = require('./dist/bundles/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/bundles/vue-ssr-client-manifest.json')
const template = fs.readFileSync('./src/index.template.html', 'utf-8')

const renderer = createBundleRenderer(serverBundle, {
  template,
  clientManifest,
  runInNewContext: false,
  basedir: path.resolve(__dirname, './dist'),
  cache: LRU({
    max: 1000,
    maxAge: 1000 * 60 * 15
  })
})

process.on('message', params => {
  const { request, response, setCookies, clearCookies, maxRAM, renderId, jobId } = params

  let lang = request.cookies.locale || 'ru'
  const { heapUsed } = process.memoryUsage()
  let context = { url: request.url, cookies: request.cookies, lang, response, setCookies, clearCookies }

  if (process.send) {
    renderer.renderToString(context, (error, html) => {
      if (error instanceof Error) console.log(error)

      // console.log('Child send message: ', request.url, renderId, jobId, process.pid, heapUsed / 1024 / 1024)

      if (heapUsed > maxRAM * 1024 * 1024) {
        console.log('Fork #' + renderId + '(pid:' + process.pid + ') usage memory: ' + (heapUsed / 1024 / 1024) + 'mb')
      }

      process.send({
        html,
        error,
        jobId,
        renderId,
        setCookies,
        clearCookies,
        key: request.url,
        kill: heapUsed > maxRAM * 1024 * 1024
      })
    })
  }
})
