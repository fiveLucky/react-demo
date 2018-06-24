module.exports = {
	entry: {
		app: './src/index.js',
		vendors: '',
	},
	output: {
		path: __dirname,
		filename: './release/bundle.js'
	},
	module: {
		rules: [
			{
				test: /.js?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader'
			}
		]
	}
};