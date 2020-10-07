const { join, resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const SWPrecachePlugin = require('sw-precache-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

const isProd = process.env.NODE_ENV === 'production'

const config = merge(base, {
  context: __dirname,

  entry: [
    'babel-polyfill',
    join(__dirname, './../src/entry-client.js'),
    join(__dirname, './../src/assets/sass/app.sass')
  ],

  resolve: {
    alias: {
      // 'vue$': 'vue/dist/vue.esm.browser.js',
      '~api': resolve('./src/api/index-client.js')
    }
  },

  module: {
    rules: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use : [
            {
              loader: 'css-loader',
              options: { minimize: isProd }
            },
            'sass-loader'
          ],
          fallback: 'vue-style-loader'
        })
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"'
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash].bundle.css',
      allChunks: true
    }),
    new VueSSRClientPlugin(),
  ]
})

if (isProd) {
  config.plugins.push(
    // auto generate service worker
    new SWPrecachePlugin({
      minify: true,
      cacheId: 'sw-desktop-linkmuse',
      filename: 'service-worker.js',
      dontCacheBustUrlsMatching: /./,
      staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/]
    })
  )
}

module.exports = config
