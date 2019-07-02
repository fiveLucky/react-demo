const Koa = require('koa');
const stat = require('koa-static');
const Router = require('koa-router');
const execSync = require('child_process').execSync;
const fs = require('fs');



const app = new Koa();
const router = new Router();

app.use(stat(process.cwd() + '/dist'));
app.use(async (ctx, next) => {
    console.log(ctx.url);
    next();
});

router.get('/web*', (ctx, next) => {
    ctx.response.type = 'html';
    ctx.response.body = fs.readFileSync(process.cwd() + '/dist/index.html');
    next();
});


app.use(router.routes())
    .use(router.allowedMethods());

app.listen(5000, () => {
    console.log(`prod server start at port 5000`);
    execSync('open http://localhost:5000/web');
});
