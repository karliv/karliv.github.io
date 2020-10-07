const webpack = require('webpack')
const merge = require('webpack-merge')
const { join, resolve } = require('path')
const base = require('./webpack.base.config')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const WebpackVersionFilePlugin = require('webpack-version-file-plugin')

const config = merge(base, {
  entry: ['babel-polyfill', join(__dirname, './../src/entry-server.js')],

  target: 'node',

  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },

  resolve: {
    alias: {
      '~api': resolve('./src/api/index-server.js')
    }
  },

  externals: Object.keys(require('./../package.json').dependencies),

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueSSRServerPlugin(),
    new WebpackVersionFilePlugin({
      packageFile: join(__dirname, './../package.json'),
      template: join(__dirname, './../server/views/version.ejs'),
      outputFile: join(__dirname, './../server/public/version.json'),
      extras: {
        'timestamp': Date.now(),
      }
    }),
  ]
})

module.exports = config
