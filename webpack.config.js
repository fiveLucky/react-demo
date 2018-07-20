const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
	entry: {
		index: './src/index.js',
	},
	output: {
		path: __dirname + '/release',
		filename: './bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader'
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader?{"modules":true}'
			},

		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'template/index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devtool: 'source-map',
	devServer: {
		contentBase: path.join(__dirname, 'release'),
		port: 9000,
		hotOnly: true
	}
};