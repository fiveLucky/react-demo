const Koa = require('koa');
const stat = require('koa-static');
const Router = require('koa-router');
const execSync = require('child_process').execSync;
const fs = require('fs');




const app = new Koa();
const router = new Router();

app.use(stat(process.cwd() + '/release'));

router.get('/*', (ctx, next) => {
    console.log(ctx.params);
    ctx.response.type = 'html';
    ctx.response.body = fs.readFileSync(process.cwd() + '/release/index.html');
    next();
});


app.use(router.routes())
    .use(router.allowedMethods());

app.listen(5000, () => {
    console.log(`prod server start at port 5000`);
    execSync('open http://localhost:5000');
});
