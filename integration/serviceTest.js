'use strict'

const test = require('tap').test
const Mu = require('mu')
const tcp = require('mu/drivers/tcp')
const opts = {
  port: process.env.SERVICE_PORT || 6000,
  host: process.env.SERVICE_HOST || 'localhost'
}

test('empty answer', (t) => {
  t.plan(2)
  const mu = Mu()
  mu.outbound('*', tcp.client(opts))
  mu.dispatch({role: 's2', cmd: 'one'}, (err, result) => {
    t.error(err)
    t.deepEqual({}, result)
    mu.tearDown()
  })
})

test('service response', (t) => {
  t.plan(2)
  const mu = Mu()
  mu.outbound('*', tcp.client(opts))
  mu.dispatch({role: 's2', cmd: 'two'}, (err, result) => {
    t.error(err)
    t.deepEqual({my: 'response'}, result)
    mu.tearDown()
  })
})

test('invalid pattern', (t) => {
  t.plan(2)
  const mu = Mu()
  mu.outbound('*', tcp.client(opts))
  mu.dispatch({role: 'invalid', cmd: 'one'}, (err, result) => {
    t.ok(err)
    t.ok(result)
    mu.tearDown()
  })
})
