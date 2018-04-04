function store (state, emitter) {
  state.text = ''

  emitter.on('DOMContentLoaded', function () {
    var websocket = require('websocket-stream')
    var ws = websocket('ws://localhost:9090')

    emitter.on('input', function (data) {
      ws.write(data)
    })

    ws.on('data', function (data) {
      state.text = data.toString()
      emitter.emit('render')
    })
  })
}

module.exports = store
