'use strict'
const wiring = require('./wiring')
const config = require('./config')
const one = require('./actions/one')
const two = require('./actions/two')
wiring(config, wiring.start(service))

function service (mu, resrc) {
  const {name} = config

  mu.define({role: name, cmd: 'one'}, one(mu, resrc))

  mu.define({role: name, cmd: 'two'}, two(mu, resrc))

  mu.log.info(`${name} service started`)
}
