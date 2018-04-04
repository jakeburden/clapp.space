var http = require('http')
var path = require('path')
var clap = require('clap-stream')
var bankai = require('bankai/http')
var websocket = require('websocket-stream')

var compiler = bankai(path.join(__dirname, 'index.js'))
var server = http.createServer(function (req, res) {
  compiler(req, res, {quiet: true}, function () {
    res.statusCode = 404
    res.end('bang!')
  })
})

server.listen(9090, function () {
  console.log('server is running on:', server.address())
})

websocket.createServer({server: server}, connect)

function connect (stream, res) {
  stream.pipe(clap()).pipe(stream)
}
