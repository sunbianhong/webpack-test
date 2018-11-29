const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.base.conf.js');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(config, {   
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        //NODE_ENV 是一个由 Node.js 暴露给执行脚本的系统环境变量;
        //任何位于 /src 的本地代码都可以关联到 process.env.NODE_ENV 环境变量
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
})