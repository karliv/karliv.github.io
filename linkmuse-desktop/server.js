const fs = require('fs')
const path = require('path')
const cors = require('cors')
const chalk = require('chalk')
const dotenv = require('dotenv'); dotenv.config()
const express = require('express')
const favicon = require('serve-favicon')
const cookieParser = require('cookie-parser')
const normalizePort = require('normalize-port')

const ForkBalancer = require(path.resolve(__dirname, 'ForkBalancer'))

const Balancer = new ForkBalancer({
  path: path.resolve(__dirname, 'ForkBalancerFork')
})

require('util')

const isProd = process.env.APP_ENV === 'production'

// const availableLanguages = require('./src/i18n/languages').map(lang => lang.locale)

const app = express()

app.use(cors())
app.use(cookieParser())

const setStatic = (path, cache) => express.static(path, {
  maxAge: cache && isProd ? 60 * 60 * 24 * 30 : 0
})

app.set('view engine', 'ejs')
app.use(favicon(path.resolve(__dirname, './dist/favicon.ico')))
app.use('/dist', setStatic(path.resolve(__dirname, './dist'), true))
app.use('/manifest.json', setStatic('./public/manifest.json', false))
app.use('/static', setStatic(path.resolve(__dirname, './public/static'), true))
app.use('/service-worker.js', setStatic('./dist/bundles/service-worker.js', false))

app.get('/robots.txt', (req, res) => {
  const filePath = path.join(__dirname, 'public/robots.txt')
  const stat = fs.statSync(filePath)

  res.writeHead(200, {
    'Content-Type': 'text/plain;charset=UTF-8',
    'Content-Length': stat.size
  })

  const readStream = fs.createReadStream(filePath)
  readStream.pipe(res)
})

app.get('/sitemap.xml', (req, res) => {
  const filePath = path.join(__dirname, 'public/sitemap.xml')
  const stat = fs.statSync(filePath)

  res.writeHead(200, {
    'Content-Type': 'text/xml;charset=UTF-8',
    'Content-Length': stat.size
  })

  const readStream = fs.createReadStream(filePath)
  readStream.pipe(res)
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
    }

    response.end(html)
    const endTimer = Date.now()
    console.log(chalk.cyan('Rendering page ' + '(' + url + ')') + ': ' + chalk.green((endTimer - startTimer) + 'ms'))
  }).catch((e) => {
    console.log(chalk.red('Error: %j'), e)
    // response.status(500).send('500 | Internal Server Error')
    response.status(500).render('500', { title: '500 | Internal Server Error' })
  })
})

const port = normalizePort(process.env.APP_PORT || 9000)
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
