//webpack-dev-server 具有热加载功能，其实是webpack-dev-middleware 和 webpack-hot-middleware的封装（从功能上看是如此）
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.dev.conf.js');
const post = 8088;
const http = '127.0.0.1';
const options = {
    contentBase: config.output.publicPath,
    hot: true,
    host: http
}

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler,options);

server.listen(post, http, () => {
    console.log(`dev server listening on ${http}:${post}`);
})