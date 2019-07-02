const webpackMerge = require('webpack-merge');
const { outputPath } = require('../../project.config.js').output;
const { spliceRootPath } = require('../util');
const baseConfig = require('./base');

const devConfig = {
	mode: "development",
	devtool: 'source-map',
	output: {
		publicPath: '/',
	},
	devServer: {
		contentBase: spliceRootPath(outputPath),
		historyApiFallback: true,
		open: true
	},
};
module.exports = webpackMerge.smart(baseConfig, devConfig);