module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: [
                            'react',
                            'es2015',
                            'stage-0'
                        ],
                        //plugins: ['react-html-attrs', 'transform-decorators-legacy']
                    }
                }
            ]
        }
    };
};