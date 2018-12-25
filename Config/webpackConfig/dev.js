const HtmlWebpackPlugin = require('html-webpack-plugin');
const { outputPath, publicPath } = require('../../project.config.js').output;
const { spliceRootPath, spliceDirPath } = require('../util');

module.exports = {
	mode: 'development',
	entry: ['./src/index.js',],
	output: {
		path: spliceRootPath(outputPath),
		publicPath,
		filename: '[name]-bundle.js',
		chunkFilename: '[name]@[chunkhash].js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: [
					'babel-loader',
					spliceDirPath(__dirname, 'lazyLoader.js')
				]
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.less$/,
				use: [
					"style-loader",
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[name]_[local]-[hash:base64:5]'
						}
					},
					"less-loader",
				],
				exclude: /style/
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader',
				include: /style/,
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
	],
	devtool: 'inline-source-map',
	devServer: {
		contentBase: spliceRootPath(outputPath),
		historyApiFallback: true,
		open: true
	}
};