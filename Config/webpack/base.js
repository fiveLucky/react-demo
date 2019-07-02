const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { spliceRootPath, spliceDirPath } = require('../util');
const { outputPath, publicPath } = require('../../project.config.js').output;

const isProd = process.env.NODE_ENV === "production";



const cssLoader = function (modules = true) {
  return [
    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
    modules ?
      {
        loader: 'css-loader',
        options: {
          modules,
          localIdentName: '[name]_[local]-[hash:base64:5]'
        }
      } : 'css-loader',
    'postcss-loader',
  ];
};

const config = {
  entry: {
    index: ['./src/index.js'],
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
    filename: isProd ? '[name]@[hash].js' : '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          spliceDirPath(__dirname, 'lazyLoader.js')
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          ...cssLoader(),
          "less-loader",
        ],
        exclude: /src\/style/,
        include: /src/
      },
      {
        test: /\.less$/,
        use: [
          ...cssLoader(false),
          "less-loader",
        ],
        include: /style/,
      },
      {
        test: /\.css$/,
        use: cssLoader(),
        exclude: /node_modules/
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template/index.html'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
};


module.exports = config;