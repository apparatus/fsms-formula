'use strict'
const tcp = require('mu/drivers/tcp')

module.exports = routing

function routing (mu, opts) {
  mu.inbound('*', tcp.server(opts))
}
