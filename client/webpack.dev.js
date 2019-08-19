const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 3000,
        hotOnly: true,
        historyApiFallback: true,
        proxy: {
            '/api/': 'http://localhost:5000',
            '/sub/': 'http://localhost:5000',
            '/subs/': 'http://localhost:5000',
            '/user/': 'http://localhost:5000'
        }
    }
});