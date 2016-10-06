'use strict'

const test = require('tap').test

const Mu = require('mu')
const Service = require('../service/lib/service')

test('empty answer', (t) => {
  t.plan(2)
  Service.create((service) => {
    service.one({}, (err, result) => {
      t.error(err)
      t.notOk(result)
    })
  })
})

test('service response', (t) => {
  t.plan(2)
  Service.create((service) => {
    service.two({}, (err, result) => {
      t.error(err)
      t.deepEqual({my: 'response'}, result)
    })
  })
})
