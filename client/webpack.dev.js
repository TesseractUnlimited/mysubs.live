const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval',
    devServer: {
        contentBase: path.resolve(__dirname, './src/static'),
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