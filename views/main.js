var html = require('choo/html')
var Nanocomponent = require('nanocomponent')

class Input extends Nanocomponent {
  createElement (cb) {
    return html`<input autofocus onkeyup=${cb} />`
  }

  update () {
    return false
  }
}

var TITLE = 'clapp.space | 👏'
var input = new Input()

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
      <main class="pa3 cf center">
        <section class="fl mw6 w-50-m w-third-l pa3">
          <h2>write some text</h2>
          ${input.render(handleInput)}

          <p>${state.text}</p>
        </section>
      </main>
    </body>
  `

  function handleInput (e) {
    emit('input', e.target.value)
  }
}

// function Input () {
//   if (!(this instanceof Input)) return new Input()
//   Nanocomponent.call(this)
// }

// Input.prototype = Object.create(Nanocomponent.prototype)

// Input.prototype.createElement = function (cb) {
//   return html`<input autofocus onkeyup=${cb} />`
// }

// Input.prototype.update = function () {
//   return false
// }
