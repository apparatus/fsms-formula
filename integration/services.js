'use strict'

var mu = require('mu')()
var tcp = require('mu/drivers/tcp')

mu.outbound({role: 's1'}, tcp.client({port: process.env.service1_PORT, host: process.env.service1_HOST}))
mu.outbound({role: 's2'}, tcp.client({port: process.env.service2_PORT, host: process.env.service2_HOST}))
mu.outbound({role: 's3'}, tcp.client({port: process.env.service3_PORT, host: process.env.service3_HOST}))


function handleRoleCommand (role, command, request, reply) {
  mu.dispatch({role: role, cmd: command}, function (err, res) {
    reply({result: err ? 'error' : res, err: err})
  })
}


module.exports = function (server) {
  server.route({
    method: 'GET',
    path: '/service1/action1',
    handler: function (request, reply) { handleRoleCommand('s1', 'one', request, reply) }
  })
  server.route({
    method: 'GET',
    path: '/service1/action2',
    handler: function (request, reply) { handleRoleCommand('s1', 'two', request, reply) }
  })
  server.route({
    method: 'GET',
    path: '/service2/action1',
    handler: function (request, reply) { handleRoleCommand('s2', 'one', request, reply) }
  })
  server.route({
    method: 'GET',
    path: '/service2/action2',
    handler: function (request, reply) { handleRoleCommand('s2', 'two', request, reply) }
  })
  server.route({
    method: 'GET',
    path: '/service3/action1',
    handler: function (request, reply) { handleRoleCommand('s3', 'one', request, reply) }
  })
}

