const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
const server = new Koa()
const router = new Router()

server.use(koaBody())
const port = 3001;

router.get('/api/getHomeList', async ctx => {
  console.log('--->> getHomeList')
  ctx.body = {
    data: [
      {id: 1 , title: 'item title 1'},
      {id: 2 , title: 'item title 2'},
      {id: 3 , title: 'item title 3'}
    ],
    code: 200,
    msg: 'success'
  }
})

server.use(router.routes())

server.listen(port, () => {
  console.log(`koa server is listening ${port}`)
});

