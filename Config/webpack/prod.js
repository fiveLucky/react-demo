const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackMerge = require('webpack-merge');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
// const webpack = require('webpack');
const baseConfig = require('./base');

const prodConfig = {
  mode: "production",
  // devtool: 'source-map',
  optimization: {
    // minimize: true,// 默认开启
    minimizer: [ // 这样就覆盖了默认的 minimizer，为了压缩css
      new TerserWebpackPlugin({ // 这个其实和默认的minimizer效果一样，但是覆盖了，就得手动设置了
        cache: true,
        parallel: true
      }),
      new OptimizeCssAssetsWebpackPlugin() // 压缩css
    ],
    splitChunks: {
      chunks: 'all',// async(默认)、initial（入口文件）、all（所有文件）
      minSize: 3000, // 最小的文件大小 超过这个值，小于maxsize 的包会被提取
      // maxSize: 0, // 最大值
      // minChunks: 1, // chunk 数量，表示几个chunk共同依赖  才会被提取
      // maxAsyncRequests: 5, // 最大的异步加载请求数量 默认5
      // maxInitialRequests: 3, // 首次加载，最大的请求资源数量
      // automaticNameDelimiter: '~', // 分割自动提取后的文件名称
      name: true,
      cacheGroups: {
        // vendors: {    // 默认
        //   test: /[\\/]node_modules[\\/]/,
        //   priority: -10 // 模块符合多种规则时的优先级
        // },
        common: {
          test: /[\\/]src[\\/]/,
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true,
        },
      }
    }

  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style@[contenthash].css",
      chunkFilename: "style@[contenthash].css"
    }),
    // 忽略文件，不会打包
    // new webpack.IgnorePlugin(/@ant-design\/icons\//)
  ],
};


module.exports = webpackMerge.smart(baseConfig, prodConfig);