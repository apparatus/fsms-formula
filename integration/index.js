'use strict'

var Hapi = require('hapi')
var Inert = require('inert')
var Path = require('path')
var services = require('./services')

var ClientRoutes = require('./routes/client')

var server = new Hapi.Server()
var opts = {
  port: Number(process.env.HAPI_SERVICE_PORT),
  host: process.env.HAPI_SERVICE_HOST
}

server.connection(opts)

var plugins = [
  {
    register: Inert
  },
  {
    register: require('good'),
    options: {
      opsInterval: 1000,
      reporters: [{
        reporter: require('good-console'),
        events: {
          log: '*',
          response: '*'
        }
      }]
    }
  }
]

services(server)

server.register(plugins,
  function (err) {
    if (err) { throw err }

    var relativePath = Path.join(__dirname, '../frontend/dist/')
    server.realm.settings.files.relativeTo = relativePath

    server.route(ClientRoutes)

    server.start(function () {
      console.log('hapi server listening on port: ' + opts.port)
    })
  }
)

