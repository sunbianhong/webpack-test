const path = require("path");
const merge = require("webpack-merge");
const config = require("./webpack.dev.conf");

module.exports = merge(config, {
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
      }
})
