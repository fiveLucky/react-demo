const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ScriptAttributesInjectPlugin = require('script-attributes-inject-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
    filename: isProd ? '[name]@[chunkhash].js' : '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              // 禁止将es6module转换成commonJs 模块，交给webapck进行 tree shaking
              // 标记未被引用的代码，通过 terser-webpack-plugin 在optimize的时候去除死代码
              // 这里未看到效果
              presets: [
                ['@babel/preset-env', { modules: false }]
              ]
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
    new ScriptAttributesInjectPlugin({
      include: 'head',
      attrs: {
        src: 'asdfasfasdfasfsdfdssdfdsf'
      }
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new CleanWebpackPlugin()
  ],
  resolve: {
    alias: {
      '$component': spliceRootPath('src/component'),
      '$config': spliceRootPath('src/config'),
      '$util': spliceRootPath('src/util'),
    }
  }
};


module.exports = config;