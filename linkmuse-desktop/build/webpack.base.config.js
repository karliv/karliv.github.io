const webpack = require('webpack')
const { resolve } = require('path')
const Dotenv = require('dotenv-webpack')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')

const isProd = process.env.NODE_ENV === 'production'

let plugins = [
  new Dotenv(),
  new CircularDependencyPlugin({
    exclude: /a\.js|node_modules/,
    cwd: process.cwd(),
  })
]

if (isProd) {
  plugins.push(
    new UglifyJsPlugin({
      parallel: true,
      sourceMap: false,
      uglifyOptions: {
        mangle: {
          safari10: true
        }
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  )
}

if (isProd === false) {
  plugins.push(
    new FriendlyErrorsPlugin()
  )
}

module.exports = {
  devtool: isProd ? false : '#cheap-module-source-map',
  output: {
    filename: 'build.[hash].js',
    publicPath: '/dist/bundles/',
    path: resolve(__dirname, './../dist/bundles'),
  },
  resolve: {
    alias: {
      '~': resolve('./'),
      '@': resolve('./src'),
      '@utils': resolve('./src/utils'),
      '@views': resolve('./src/views'),
      '@plugins': resolve('./src/plugins'),
      '@modules': resolve('./src/modules'),
      '@strings': resolve('./src/strings'),
      '~auth': resolve('./src/modules/auth'),
      '@components': resolve('./src/components'),
      '@directives': resolve('./src/directives'),
      '~api': resolve('./src/api/index-client.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: [require('autoprefixer')()]
        }
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        // важно: использовать vue-style-loader вместо style-loader
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  },
  plugins
}