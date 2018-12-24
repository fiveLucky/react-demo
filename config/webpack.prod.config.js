const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');


module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../release'),
    filename: './[name]@[chunkhash].js',
    chunkFilename: './[name]@[chunkhash].js'
  },
  optimization: {

  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [
          'babel-loader',
          path.resolve(__dirname, './lazyLoader.js')
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
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
    new MiniCssExtractPlugin({ filename: "style@[contenthash].css" }),
    new HtmlWebpackPlugin({
      template: 'template/index.html'
    }),
    new ParallelUglifyPlugin({
      cacheDir: '.cache/',
    })
  ],
};