const autoprefixer = require('autoprefixer');

module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.sass$/,
                    include: paths,
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    autoprefixer({
                                        browsers:['ie >= 10', 'last 4 version']
                                    })
                                ],
                                sourceMap: true
                            }
                        },
                        'sass-loader'
                    ]
                }
            ]
        }
    };
};