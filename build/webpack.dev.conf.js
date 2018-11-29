const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.base.conf.js');
const merge = require('webpack-merge');

const port = 8088;
const http = '127.0.0.1';

module.exports = merge(config, {   
    mode: 'development',
    devServer: {
        contentBase: '../dist',
        hot: true,
        host: http,
        port: port
    },
})