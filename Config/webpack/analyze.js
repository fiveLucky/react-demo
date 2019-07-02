const webpack = require('./prod.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

webpack.plugins.push(new BundleAnalyzerPlugin({
  analyzerPort: 8889
}));
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(webpack);