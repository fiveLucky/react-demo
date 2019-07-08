const Koa = require('koa');
const koaWebpack = require('koa-webpack');
const path = require('path');
const execSync = require('child_process').execSync;
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');


const webpackDevConfig = require('../webpack/dev');
const userConfig = require('../../project.config.js').devServer;

const app = new Koa();

const compiler = webpack(webpackDevConfig);
compiler.apply(new DashboardPlugin());
koaWebpack({
  compiler,
  hotClient: userConfig.hot && {},
}).then(middleware => {
  app.use(middleware);
  app.use(async ctx => {
    const filename = path.resolve(webpackDevConfig.output.path, 'index.html');
    ctx.response.type = 'html';
    ctx.response.body = middleware.devMiddleware.fileSystem.createReadStream(filename);
  });
});
app.listen(userConfig.port, () => {
  console.log(`server start at port ${userConfig.port}`);
  if (userConfig.open) {
    execSync(`open http://localhost:${userConfig.port}/web`);
  }
});