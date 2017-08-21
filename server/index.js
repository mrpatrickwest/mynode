var finalhandler = require('finalhandler')
var http = require('http')
var Router = require('router')

const hostname = '127.0.0.1'
const port = 3000

var router = Router()
router
  .route('/')
  .all(function(req, res, next) {
    console.log(`Log Something`)
    next()
  })
  .get(function(req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Hello World!')
  })

router.route('/something').get(function(req, res) {
  res.setHeader('Content-Type', 'application/json')
  var books = { books: [{ title: 'The Title', author: 'Patrick West' }] }
  var booksStr = JSON.stringify(books)
  res.end(booksStr)
})

var server = http.createServer(function(req, res) {
  req.on('error', err => {
    console.error(err)
    res.statusCode = 400
    res.end()
  })
  res.on('error', err => {
    console.error(err)
  })
  router(req, res, finalhandler(req, res))
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
