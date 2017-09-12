import getBooks from './getBooks'
import getUsers from './getUsers'
import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as chalk from 'chalk'
import * as cors from 'kcors'
import * as IO from 'koa-socket-2'
import * as Router from 'koa-router'
import { initDb } from './db'

async function init() {
  await initDb()
}

init()

var router = new Router()
router.get('/', async (ctx, next) => {
  await next()
  ctx.response.set('Content-Type', 'text/plain; charset=utf-8')
  ctx.status = 200
  ctx.body = 'Hello World!'
})

router.get('/books', async (ctx, next) => {
  await next()
  ctx.response.set('Content-Type', 'application/json')
  var books = await getBooks()
  var booksStr = JSON.stringify(books)
  ctx.body = booksStr
})

router.get('/users', async (ctx, next) => {
  await next()
  ctx.response.set('Content-Type', 'application/json')
  const response = await getUsers()
  ctx.body = response.body
})

const app = new Koa()
const port = 3000
const corsOptions: cors.Options = { credentials: true }
const io = new IO()

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(cors(corsOptions))
io.attach(app)

app.listen(port, () => console.log(chalk.black.bgGreen.bold(`Listening on port ${port}`)))
