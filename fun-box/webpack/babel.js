const loose = true;

module.exports = function() {
    return {
        // module: {
        //     rules: [
        //         {
        //             test: /\.jsx?$/,
        //             exclude: /node_modules/,
        //             loader: 'babel-loader',
        //             query: {
        //                 presets: [
        //                     "@babel/preset-env", "@babel/preset-react"
        //                 ],
        //                 plugins: [
        //                     "@babel/plugin-proposal-export-default-from",
        //                     "@babel/plugin-proposal-class-properties",
        //                     "@babel/transform-react-jsx"
        //                 ]
        //             }
        //         }
        //     ]
        // },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                }
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
    };
};