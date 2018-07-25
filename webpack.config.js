const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');


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
				use: ExtractTextWebpackPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
								localIdentName: '[name]_[local]-[hash:base64:5]'
							}
						},
						{
							loader: 'less-loader'
						}
					]
				}),
				exclude: /style/
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader',
				exclude: /(node_modules)/,
				include: /style/,
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader?{"modules":true}'
			},
		],
	},
	plugins: [
		new ExtractTextWebpackPlugin("style.css"),
		new HtmlWebpackPlugin({
			template: 'template/index.html'
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
	devtool: 'source-map',
	devServer: {
		contentBase: path.join(__dirname, 'release'),
		port: 9000,
		hot: true
	}
};