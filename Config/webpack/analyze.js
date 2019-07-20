const webpack = require('./prod.js');
// 分析打包后的文件大小分布
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// 打包时在终端输出耗时
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

webpack.plugins.push(new BundleAnalyzerPlugin({
  analyzerPort: 8889
}));
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(webpack);