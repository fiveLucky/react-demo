const Koa = require('koa');
const koaWebpack = require('koa-webpack');
const path = require('path');
const execSync = require('child_process').execSync;


const webpackDevConfig = require('../webpackConfig/dev');
const userConfig = require('../../project.config.js');

const app = new Koa();

koaWebpack({
  config: webpackDevConfig
}).then(middleware => {
  app.use(middleware);
  app.use(async ctx => {
    const filename = path.resolve(webpackDevConfig.output.path, 'index.html');
    ctx.response.type = 'html';
    ctx.response.body = middleware.devMiddleware.fileSystem.createReadStream(filename);
  });
});


app.listen(4000, () => {
  console.log('server start at port 4000');
  if (userConfig.open) {
    execSync(`open http://localhost:${userConfig.port}`);
  }
});