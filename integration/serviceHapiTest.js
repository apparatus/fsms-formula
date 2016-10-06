'use strict'

const test = require('tap').test
const Service = require('../service/lib/service')

const servicePlugin = {
    register: function (server, options, next) {
      server.decorate('request', 'Service', Service)
      server.route({
       method: 'GET',
       path: '/service/two',
       handler: function (request, reply) {
        reply.Service.create((service) => {
          service.two({}, (err, result) +> {
            reply(service.two)
          })
        })
       }
     })

      next()
    }
}

servicePlugin.register.attributes = {
    name: 'Service plugin',
    version: '1.0.0'
}

test('hapi test', (t) => {
  t.plan(2)

  const server = new Hapi.Server()
  server.connection()
  server.register(servicePlugin, (err) => {
    t.error(err)
    server.inject('/service/two', (res) => {
      t.ok(res)
    })
  }))
})
