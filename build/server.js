//webpack-dev-middleware 没有热加载功能，必须结合webpack-hot-middleware插件，
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.middle.conf.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.middleware.conf.js
// configuration file as a base.
const options = {
  publicPath: config.output.publicPath,
}
app.use(webpackDevMiddleware(compiler, options));
const post = 3000;
const http = '127.0.0.1';
// Serve the files on port 3000.
app.listen(post, http, () => {
  console.log(`dev-middleware server listening on ${http}:${post}`);
});