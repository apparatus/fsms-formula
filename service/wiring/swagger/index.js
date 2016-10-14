var Hapi = require('hapi')
var Joi = require('joi')
var Route = require('./route')

var server = new Hapi.Server()
server.connection({
  port: 8000,
  labels: ['api']
})

server.register([
  require('inert'),
  require('vision'),
  {
    register: require('hapi-swaggered'),
    options: {
      tags: {
        'foobar/test': 'Example foobar description'
      },
      info: {
        title: 'Microservice Swagger API',
        description: 'Swagger wiring for microservice',
        version: '1.0'
      }
    }
  },
  {
    register: require('hapi-swaggered-ui'),
    options: {
      title: 'Microservice Swagger API',
      path: '/docs',
      swaggerOptions: {
        validatorUrl: null
      }
    }
  }], {
    select: 'api'
  }, function (err) {
  if (err) {
    throw err
  }

  Route(server)

  server.start(function () {
    console.log('started on http://localhost:8000')
  })
})