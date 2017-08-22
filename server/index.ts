import getBooks from './getBooks'
import * as Router from 'koa-router'
import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as IO from 'koa-socket-2'
import * as chalk from 'chalk'
import * as cors from 'kcors'

var router = new Router()
router.get('/', async (ctx, next) => {
  await next()
  ctx.header('Content-Type', 'text/plain; charset=utf-8')
  ctx.status = 200
  ctx.body = 'Hello World!'
})

router.get('/something', async (ctx, next) => {
  await next()
  ctx.header('Content-Type', 'application/json')
  var books = getBooks()
  var booksStr = JSON.stringify(books)
  ctx.body = booksStr
})

const app = new Koa()
const port = process.env.PORT || 7777
const corsOptions: cors.Options = { credentials: true }
const io = new IO({
  namespace: '/',
})

app.use(bodyParser()).use(router.routes()).use(router.allowedMethods()).use(cors(corsOptions))
io.attach(app)

app.listen(port, () => console.log(chalk.black.bgGreen.bold(`Listening on port ${port}`)))
