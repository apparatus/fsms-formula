'use strict'

var test = require('tap').test
var opts = {port: process.env.SERVICE_PORT || 6000, host: process.env.SERVICE_HOST || 'localhost'}
var Mu = require('mu')
var wiring = require('../../../service/wiring-mu')(opts)
var tcp = require('mu/drivers/tcp')


test('empty answer', (t) => {
  t.plan(2)
  var mu = Mu()
  mu.outbound('*', tcp.client(opts))

  wiring.start(() => {
    mu.dispatch({role: 's2', cmd: 'one'}, (err, result) => {
      t.error(err)
      t.deepEqual({}, result)
      wiring.stop()
      mu.tearDown()
    })
  })
})


test('empty answer', (t) => {
  t.plan(2)
  var mu = Mu()
  mu.outbound('*', tcp.client(opts))

  wiring.start(() => {
    mu.dispatch({role: 's2', cmd: 'two'}, (err, result) => {
      t.error(err)
      t.deepEqual({my: 'response'}, result)
      wiring.stop()
      mu.tearDown()
    })
  })
})


test('empty answer', (t) => {
  t.plan(2)
  var mu = Mu()
  mu.outbound('*', tcp.client(opts))

  wiring.start(() => {
    mu.dispatch({role: 'invalid', cmd: 'one'}, (err, result) => {
      t.ok(err)
      t.ok(result)
      wiring.stop()
      mu.tearDown()
    })
  })
})

