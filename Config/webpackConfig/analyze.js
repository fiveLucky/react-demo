const webpackConfig = require('./dev.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

webpackConfig.plugins.push(new BundleAnalyzerPlugin());
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(webpackConfig);