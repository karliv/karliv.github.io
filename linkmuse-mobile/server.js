const fs = require('fs')
const url = require('url')
const path = require('path')
const cors = require('cors')
const chalk = require('chalk')
const dotenv = require('dotenv'); dotenv.config()
const request = require('request')
const express = require('express')
const bugsnag = require('@bugsnag/js')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const browserSync = require('browser-sync')
const cookieParser = require('cookie-parser')
const normalizePort = require('normalize-port')

const bugsnagExpress = require('@bugsnag/plugin-express')

const bugsnagClient = bugsnag({
  appType: 'server',
  apiKey: process.env.BUGSNAG_API_KEY,
  notifyReleaseStages: [ 'production', 'staging' ],
  releaseStage: process.env.NODE_ENV || 'development'
})
bugsnagClient.use(bugsnagExpress)

const { check, query, validationResult } = require('express-validator')

const OAuth = require(path.resolve(__dirname, './server/modules/OAuth'))

const ForkBalancer = require(path.resolve(__dirname, 'ForkBalancer'))

const Balancer = new ForkBalancer({
  path: path.resolve(__dirname, 'ForkBalancerFork')
})

require('util')

const isProd = process.env.APP_ENV === 'production'
const isBrowserSync = process.env.BROWSER_SYNC === 'true'
const BACKEND_URL = process.env.APP_BACKEND_URL || 'https://linkmuse.com'

// const availableLanguages = require('./src/i18n/languages').map(lang => lang.locale)

const app = express()

const { requestHandler, errorHandler } = bugsnagClient.getPlugin('express')

app.use(cors())
app.use(cookieParser())
app.use(requestHandler)

const setStatic = (path, cache) => express.static(path, {
  maxAge: cache && isProd ? 60 * 60 * 24 * 30 : 0
})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/server/views'))
app.use(favicon(path.resolve(__dirname, './dist/favicon.ico')))
app.use('/dist', setStatic(path.resolve(__dirname, './dist'), true))
app.use('/manifest.json', setStatic('./server/public/manifest.json', false))
app.use('/static', setStatic(path.resolve(__dirname, './server/public/static'), true))
app.use('/service-worker.js', setStatic('./dist/bundles/service-worker.js', false))

app.get('/apple-app-site-association', (request, response) => {
  response.setHeader('Content-Type', 'application/json')

  let aasa = {
    'applinks': {
      'apps': [],
      'details': [
        {
          'appID': 'JNPJ4H4J79.com.linkmuse',
          'paths': ['*']
        }
      ]
    }
  }

  response.end(JSON.stringify(aasa))
})

app.get('/robots.txt', (req, res) => {
  const filePath = path.join(__dirname, 'server/public/robots.txt')
  const stat = fs.statSync(filePath)

  res.writeHead(200, {
    'Content-Type': 'text/plain;charset=UTF-8',
    'Content-Length': stat.size
  })

  const readStream = fs.createReadStream(filePath)
  readStream.pipe(res)
})

app.get('/sitemap.xml', (req, res) => {
  const filePath = path.join(__dirname, 'server/public/sitemap.xml')
  const stat = fs.statSync(filePath)

  res.writeHead(200, {
    'Content-Type': 'text/xml;charset=UTF-8',
    'Content-Length': stat.size
  })

  const readStream = fs.createReadStream(filePath)
  readStream.pipe(res)
})

app.get('/version.json', (req, res) => {
  const filePath = path.join(__dirname, 'server/public/version.json')
  const stat = fs.statSync(filePath)

  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Content-Length': stat.size
  })

  const readStream = fs.createReadStream(filePath)
  readStream.pipe(res)
})

app.get('/.well-known/assetlinks.json', (request, response) => {
  response.setHeader('Content-Type', 'application/json')

  let aasa = [{
    'relation': ['delegate_permission/common.handle_all_urls'],
    'target': {
      'namespace': 'android_app',
      'package_name': 'com.linkmuse',
      'sha256_cert_fingerprints':
        ['93:0A:25:47:F8:D0:2C:7E:1B:7B:18:43:05:DB:79:C5:F7:8F:66:2A:DD:50:D6:6F:BC:70:DE:2C:F2:85:12:46']
    }
  }]

  response.end(JSON.stringify(aasa))
})

app.get('/.well-known/apple-developer-merchantid-domain-association', (req, res) => {
  const filePath = path.join(__dirname, 'server/public/.well-known/apple-developer-merchantid-domain-association.uu')
  const stat = fs.statSync(filePath)

  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Content-Length': stat.size
  })

  const readStream = fs.createReadStream(filePath)
  readStream.pipe(res)
})

app.get('/.well-known/apple-developer-domain-association.txt', (req, res) => {
  const filePath = path.join(__dirname, 'server/public/.well-known/apple-developer-domain-association.txt')
  const stat = fs.statSync(filePath)

  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Content-Length': stat.size
  })

  const readStream = fs.createReadStream(filePath)
  readStream.pipe(res)
})

app.post('/auth/apple/callback', bodyParser.urlencoded({ extended: false }), (request, response) => {
  const { code } = request.body

  response.redirect(url.format({
    pathname: '/auth/apple/callback',
    query: { code }
  }))
})

app.get('/oauth/:social/callback', [ check('social').exists().isIn(['vkontakte', 'facebook', 'google', 'apple']), query('code').exists() ], (request, response) => {
  const errors = validationResult(request)

  if (!errors.isEmpty()) {
    return response.status(422).json({ errors: errors.array() })
  }

  const { code } = request.query
  const { social } = request.params

  response.status(200).render('OAuth', { title: 'Авторизация', social, code })
})

app.get('/auth/social-login', [ query('type').exists().isIn(['vkontakte', 'facebook', 'google', 'apple']) ], (request, response) => {
  const errors = validationResult(request)

  if (!errors.isEmpty()) {
    return response.status(422).json({ errors: errors.array() })
  }

  const { type } = request.query

  const oauth = new OAuth(type)

  const pathname = oauth.getUrl()
  const query = oauth.getParams()

  response.redirect(url.format({
    pathname, query
  }))
})

app.get('/email/verify/:userId', (req, res) => {
  const { url: _url } = req

  request({
    method: 'GET',
    uri: BACKEND_URL + _url,
    headers: {
      'User-Agent': 'Mobile server'
    }
  },
  function (error, response, body) {
    if (error) {
      console.error('upload failed:', error)
    }

    res.redirect(url.format({
      pathname: '/'
    }))
  })
})

app.get('*', (request, response) => {
  response.setHeader('Content-Type', 'text/html')

  const { url, cookies } = request
  const { locals: { lang, staticContext, graphqlState, preloadState }, cookie } = response

  const startTimer = Date.now()
  Balancer.getFromRenderer({
    setCookies: [],
    clearCookies: [],
    request: { url, cookies },
    response: {
      cookie,
      locals: {
        lang,
        preloadState,
        graphqlState,
        staticContext
      }
    }
  }).then(({ error, html, setCookies, clearCookies }) => {
    if (setCookies && setCookies.length) {
      setCookies.forEach(cookie => {
        request.cookies[cookie['key']] = cookie['value']
        response.cookie(cookie['key'], cookie['value'], cookie['options'])
      })
    }

    if (clearCookies && clearCookies.length) {
      clearCookies.forEach(cookie => response.clearCookie(cookie))
    }

    if (error) {
      if (error.url) {
        response.redirect(error.url)
      } else if (error.code === 404) {
        // response.status(404).send('404 | Page Not Found')
        response.status(404).render('404', { title: '404 | Page Not Found' })
      } else if (error.code === 403) {
        response.status(403).render('403', { title: '403 | Forbidden' })
      } else {
        console.log(chalk.red('Error: %j'), error)
        // response.status(500).send('500 | Internal Server Error')
        response.status(500).render('500', { title: '500 | Internal Server Error' })
      }

      request.bugsnag.notify(JSON.stringify(error))
    }

    response.end(html)
    const endTimer = Date.now()
    console.log(chalk.cyan('Rendering page ' + '(' + url + ')') + ': ' + chalk.green((endTimer - startTimer) + 'ms'))
  }).catch((e) => {
    request.bugsnag.notify(e)
    console.log(chalk.red('Error: %j'), e)
    // response.status(500).send('500 | Internal Server Error')
    response.status(500).render('500', { title: '500 | Internal Server Error' })
  })
})

app.use(errorHandler)

const port = normalizePort(process.env.APP_PORT || 9001)
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
  if (isBrowserSync) {
    browserSync({
      files: ['src/**/*.{js,css}'],
      online: false,
      open: false,
      port: port + 1,
      proxy: 'localhost:' + port,
      ui: false
    })
  }
})
