const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const app = new Koa();

app.use(bodyParser());
// app.use(router.routes()).use(router.allowedMethods());

app.use(async (ctx, next)=> {
  ctx.set("Access-Control-Allow-Origin", "*");

  ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");

  ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");

  ctx.set("Content-Type", "application/json;charset=utf-8");

  ctx.set("Access-Control-Allow-Credentials", true);

  ctx.set("Access-Control-Max-Age", 300);

  ctx.set("Access-Control-Expose-Headers", "myData");
  next();
});
app.use(router.routes());

router.get('/user', async (ctx, next) => {
  ctx.body = JSON.stringify({ errCode: '00', errMsg: '成功', url: 'http://www.baidu.com' });
});

router.get('/getRecommandList', async (ctx, next) => {
  ctx.body = JSON.stringify({test: 1});
});

app.listen(5000);

module.exports = app;