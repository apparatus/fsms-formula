'use strict'
const tcp = require('mu/drivers/tcp')

module.exports = setup

function setup (mu, opts, cb) {
  mu.inbound('*', tcp.server(opts))

  cb()
}
