'use strict'

var test = require('tap').test
var service = require('../../../service/lib/service')

test('empty answer', (t) => {
  t.plan(2)
  service((svc) => {
    svc.one({}, (err, result) => {
      t.error(err)
      t.notOk(result)
    })
  })
})

test('service response', (t) => {
  t.plan(2)
  service((svc) => {
    svc.two({}, (err, result) => {
      t.error(err)
      t.deepEqual({my: 'response'}, result)
    })
  })
})
