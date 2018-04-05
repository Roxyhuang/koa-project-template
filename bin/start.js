const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();

const koaBody = require('koa-body')({
  multipart: true,  // 允许上传多个文件
  formidable: {
    uploadDir: 'public/images',// 上传的文件存储的路径
    keepExtensions: true  //  保存图片的扩展名
  }
});

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

router.get('/demo', async (ctx, next) => {
  ctx.body = JSON.stringify({ errCode: '00', errMsg: '成功', url: 'http://www.baidu.com' });
});

router.get('/demo2', async (ctx, next) => {
  ctx.body = JSON.stringify({ errCode: '00', errMsg: '成功', url: 'http://www.99bill.com' });
});

router.get('/demo3', async (ctx, next) => {
  ctx.body = '<!doctype html>\n' +
      '<html lang="en">\n' +
      '<head>\n' +
      '    <meta charset="UTF-8">\n' +
      '    <meta name="viewport"\n' +
      '          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n' +
      '    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n' +
      '    <title>Document</title>\n' +
      '</head>\n' +
      '<body id="bbb">\n' +
      '<div id="aaa">12333333333</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '<div>123</div>\n' +
      '\n' +
      '</body>\n' +
      '</html>'
});

router.post('/form', async (ctx, next) => {
  // console.log(ctx.request);
  console.log(ctx.request.body);
  ctx.body = JSON.stringify(ctx.request.body);
});

router.post('/form2', koaBody,(ctx) => {
      console.log(ctx.request.body);
      ctx.body = JSON.stringify(ctx.request.body);
    }
);

router.get('/module', koaBody,(ctx) => {
      ctx.body = JSON.stringify({test: 1111});
    }
);

app.listen(5000);

module.exports = app;