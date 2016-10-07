'use strict'

var Hapi = require('hapi')
var services = require('./services')
var server = new Hapi.Server()
var opts = {
  port: Number(process.env.HAPI_SERVICE_PORT),
  host: process.env.HAPI_SERVICE_HOST
}
server.connection(opts)

services(server)
server.register({
  register: require('good'),
  options: {opsInterval: 1000,
            reporters: [{reporter: require('good-console'), events: { log: '*', response: '*' }}]}},
  function (err) {
    if (err) { throw err }
    server.start(function () {
      console.log('hapi server listening on port: ' + opts.port)
    })
  }
)

