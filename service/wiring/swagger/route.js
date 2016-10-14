'use strict'
var Joi = require('joi')

var service = require('../../lib/service')

module.exports = function (server) {
  server.route({
    method: 'GET',
    path: '/service1/action1/',
    config: {
        handler: function (request, reply) { service(function (svc){ svc.one(null, reply) })},
        description: 'Action1 on service1',
        tags: ['api']
    }
  })
  server.route({
    method: 'GET',
    path: '/service1/action2/',
    config: {
        handler: function (request, reply) { service(function (svc){ svc.two(null, reply) })},
        description: 'Action2 on service1',
        tags: ['api']
    }
  })
}