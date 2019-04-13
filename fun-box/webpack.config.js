const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const fonts = require('./webpack/fonts');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const babelJS = require('./webpack/babel');

const PATHS = {
    source: path.resolve(__dirname, 'source'),
    build: path.resolve(__dirname, 'build')
};

const common = merge([
    {
        entry: {
            index: PATHS.source + '/index.js'
        },
        output: {
            path: PATHS.build,
            filename: 'js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: PATHS.source + '/index.html'
            })
        ]
    },
    uglifyJS(),
    images(),
    fonts(),
    babelJS()
]);

module.exports = function(env, argv) {
    if (argv.mode === 'production'){
        return merge([
            common,
            extractCSS(),
        ]);
    }
    if (argv.mode === 'development'){
        return merge([
            common,
            devserver(),
            sass(),
            css()
        ])
    }
};