const path = require('path');

const webpack = require("webpack");
//自动生成主入口html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//输出打包文件的根目录下./dist 生成 manifest.json 文件，记录打包文件信息
const ManifestPlugin = require('webpack-manifest-plugin');
//去重打包文件
const CleanWebpackPlugin = require('clean-webpack-plugin');
const cleanOptions = {
	//__dirname指当前文件所在目录；重定向项目根目录为 ./webpack-test
	root: path.resolve(__dirname, '../'),
	verbose: true,
	dry: false,
	watch: true
};
const pathToClean = ['dist'];
const vueLoaderConfig = require('./vue-loader.conf');
//获取相对于根目录文件的文件路径
function resolve(dir) {
	return path.join(__dirname, '..', 'dir')
}
//vue loder plugin
const VueLoaderPlugin = require('vue-loader/lib/plugin');
let options = null;

const config = {
	entry: {
		app: './src/index.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '../dist'),
	},
	module: {
		rules: [{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.css$/,
				use: ['vue-style-loader', 'style-loader', 'css-loader']
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader']
			},
			{
				test: /\.(ttf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: ['file-loader']
			},
			{
				test: /\.vue$/,
				use: ['vue-loader'],
			},
			{
				test: /\.js$/,
				use: ['babel-loader']
			}

		]
	},
	resolve: {
		//自动补全后缀名
		extensions: ['.js', '.vue', '.json', '.lodash', '.jstree'],
		//默认路径代理
		alias: {

			vue$: "vue/dist/vue.common.js",
			assets: resolve("src/assets")
		}
	},
	//定位bug至准确文件位置
	devtool: 'inline-source-map',
	plugins: [
		new ManifestPlugin(options),
		new CleanWebpackPlugin(pathToClean, cleanOptions),
		new HtmlWebpackPlugin({
			template: './index.html',
			title: 'vue app',
			favicon: 'favicon.ico',
			inject: 'body'
		}),
		new webpack.NamedModulesPlugin(),
		//模块热替换 HMR
		new webpack.HotModuleReplacementPlugin(),
		new VueLoaderPlugin()
	]
}

module.exports = config;
