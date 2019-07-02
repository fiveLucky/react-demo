const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base');

const prodConfig = {
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      // maxSize: 0,
      // minChunks: 1,
      // maxAsyncRequests: 5,
      // maxInitialRequests: 3,
      // automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        // vendors: {
        //   test: /[\\/]node_modules[\\/]/,
        //   priority: -10
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
  ],
};


module.exports = webpackMerge.smart(baseConfig, prodConfig);