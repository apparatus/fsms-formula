'use strict'

const wiring = require('./wiring/mu')

module.exports = function (server) {
  server.route({
    method: 'GET',
    path: '/service1/action1',
    handler: function (request, reply) { wiring.handleOne(request, reply) }
  })
  server.route({
    method: 'GET',
    path: '/service1/action2',
    handler: function (request, reply) { wiring.handleTwo(request, reply) }
  })
}

