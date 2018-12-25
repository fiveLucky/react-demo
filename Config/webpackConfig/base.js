const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { spliceRootPath, spliceDirPath } = require('../util');
const { outputPath, publicPath } = require('../../project.config.js').output;

const isProd = process.env.NODE_ENV === 'production';

const config = {
  entry: {
    index: './src/index.js',
    vendors: [
      'react',
      'react-dom',
      'react-router',
      'moment',
      'mobx',
      'mobx-react',
      'rc-menu',
      'rc-notification',
      'rc-tooltip',
      'rc-select',
      'rc-table',
    ]
  },
  output: {
    path: spliceRootPath(outputPath),
    publicPath,
    filename: '[name]@[chunkhash].js',
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
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
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
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};


module.exports = config;