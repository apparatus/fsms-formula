'use strict'
const wiring = require('./wiring')
const config = require('./config')

wiring(config, wiring.start(component))

function component (ctx) {
  const {button} = ctx
}
