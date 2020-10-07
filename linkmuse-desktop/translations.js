const fs = require('fs')
const request = require('request')
const { resolve } = require('path')

const download = (url, dest, cb) => {
  const file = fs.createWriteStream(dest)
  const sendReq = request.get(url)

  // verify response code
  sendReq.on('response', (response) => {
    if (response.statusCode !== 200) {
      return cb('Response status was ' + response.statusCode)
    }

    sendReq.pipe(file)
  })

  file.on('finish', () => file.close(cb))

  sendReq.on('error', (err) => {
    return cb(err.message)
  })

  file.on('error', (err) => {
    return cb(err.message)
  })
}
const domain = 'https://s3.eu-central-1.amazonaws.com/linkmuse'
const languages = ['ru', 'en']

languages.forEach(lang => {
  download(`${domain}/lang/web/${lang}.json`, resolve(`./src/lang/${lang}.json`), () => {
    console.log(`Complete download language: ${lang}`)
  })
})
