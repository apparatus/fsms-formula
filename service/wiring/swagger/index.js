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
        title: 'Example API',
        description: 'Powered by node, hapi, joi, hapi-swaggered, hapi-swaggered-ui and swagger-ui',
        version: '1.0'
      }
    }
  },
  {
    register: require('hapi-swaggered-ui'),
    options: {
      title: 'Example API',
      path: '/docs',
      authorization: {
        field: 'apiKey',
        scope: 'query', // header works as well
        // valuePrefix: 'bearer '// prefix incase
        defaultValue: 'demoKey',
        placeholder: 'Enter your apiKey here'
      },
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