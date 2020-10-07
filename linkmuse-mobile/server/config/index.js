const path = require('path')
const nconf = require('nconf')

nconf.argv()
  .env()
  .file({ file: path.join(__dirname, 'config.json') })

nconf.set('oauth:vkontakte:params:client_id', nconf.get('VKONTAKTE_KEY'))
nconf.set('oauth:vkontakte:params:redirect_uri', nconf.get('VKONTAKTE_REDIRECT_URI'))

nconf.set('oauth:facebook:params:client_id', nconf.get('FACEBOOK_KEY'))
nconf.set('oauth:facebook:params:redirect_uri', nconf.get('FACEBOOK_REDIRECT_URI'))

nconf.set('oauth:google:params:client_id', nconf.get('GOOGLE_KEY'))
nconf.set('oauth:google:params:redirect_uri', nconf.get('GOOGLE_REDIRECT_URI'))

nconf.set('oauth:apple:params:client_id', nconf.get('APPLE_KEY'))
nconf.set('oauth:apple:params:redirect_uri', nconf.get('APPLE_REDIRECT_URI'))

module.exports = nconf
