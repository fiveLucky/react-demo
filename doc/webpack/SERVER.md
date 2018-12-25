# koa + webpack 搭建本地server，并支持 热加载

废话不多说，直接上代码


- server.js

```
const Koa = require('koa'); 
// 引用koa对象

const koaWebpack = require('koa-webpack'); 
// 引入koa-webpack，这个包集成了 webpack-dev-middleWare 和 client-hot-middleWare

const path = require('path');
const execSync = require('child_process').execSync;

const webpackDevConfig = require('../webpackConfig/dev');

const userConfig = require('../../project.config.js').devServer;
// 可以把一些常用配置抽出一个文件供开发者配置

const app = new Koa();

// 使用 koa-webpack 具体使用方法参考官方文档
koaWebpack({

  config: webpackDevConfig,

  hotClient: userConfig.hot && {},
  // 配置是否启用 热加载

}).then(middleware => {
  app.use(middleware);
  app.use(async ctx => {
    const filename = path.resolve(webpackDevConfig.output.path, 'index.html');
    ctx.response.type = 'html';
    ctx.response.body = middleware.devMiddleware.fileSystem.createReadStream(filename);
    // 读取 webpack build 到内存里的静态文件
  });
});


app.listen(userConfig.port, () => {
  console.log(`server start at port ${userConfig.port}`);
  if (userConfig.open) {

  // 支持启动服务自动打开浏览器，类似于 webpack-dev-server --open
    execSync(`open http://localhost:${userConfig.port}`);
  }
});
```

- project.config.js
```
module.exports = {
  output: {
    publicPath: '/',      // 打包输出路径
    outputPath: './release', // 打包输出的文件夹
  },
  devServer: {
    port: 4000, // 本地开发服务端口
    open: true, // 启动服务自动打开浏览器
    hot: true, // 热加载  notice: this is reload not replace
  }
};
```

- webpackConfig/dev.js

```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const userConfig = require('../../project.config.js').output;

module.exports = {
	mode: 'development',
	entry: ['./src/index.js',],
	output: {
		path: path.resolve(__dirname, userConfig.outputPath),
		filename: './[name]-bundle.js',
		publicPath: userConfig.publicPath,
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
					"style-loader",
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
	],
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, userConfig.outputPath),
		historyApiFallback: true,
		open: true
	}
};
```