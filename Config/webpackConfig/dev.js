const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const userConfig = require('../../project.config.js').output;

module.exports = {
	mode: 'development',
	entry: ['./src/index.js',],
	output: {
		path: path.resolve(__dirname, userConfig.outputPath),
		filename: './[name]-bundle.js',
		publicPath: userConfig.publicPath,
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: [
					'babel-loader',
					path.resolve(__dirname, './lazyLoader.js')
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
		contentBase: path.resolve(__dirname, userConfig.outputPath),
		historyApiFallback: true,
		open: true
	}
};