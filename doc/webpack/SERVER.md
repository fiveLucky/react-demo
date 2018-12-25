# koa + webpack 搭建本地server


废话不多说，直接上代码

```
const Koa = require('koa'); 
// 引用koa对象
const koaWebpack = require('koa-webpack'); 
// 引入koa-webpack，这个包集成了 webpack-dev-middleWare 和 client-hot-middleWare
const path = require('path');
const execSync = require('child_process').execSync;
<!-- 引入子进程命令 -->


const webpackDevConfig = require('../webpackConfig/dev');
const userConfig = require('../../project.config.js').devServer;

const app = new Koa();

koaWebpack({
  config: webpackDevConfig,
  hotClient: userConfig.hot && {},
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
```