const webpack = require('webpack');
module.exports = function() {
    return {
        optimization: {
            splitChunks: {
                chunks: 'all',
                maxInitialRequests: Infinity,
                minSize: 0,
                cacheGroups: {
                    common: {
                        name: 'common',
                        chunks: 'initial',
                        //minChunks: 3
                    }
                }
            },
        },
    };
};

