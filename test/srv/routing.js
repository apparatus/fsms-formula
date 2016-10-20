'use strict'

const {test} = require('tap')
const createMu = require('mu')
const tcp = require('mu/drivers/tcp')
const routing = require('../../srv/routing')

test('*', (t) => {
  const mu = createMu()
  const opts = {port: 6000}

  routing(mu, opts)

  mu.outbound('*', tcp.client(opts))

  mu.define({role: 'test', cmd: 'test'}, (args, cb) => {
    cb(null, {response: true})
  })

  mu.dispatch({role: 'test', cmd: 'test'}, (err, {response}) => {
    t.error(err)
    t.ok(response)
    mu.tearDown()
    t.end()
  })
})

test('invalid answer', (t) => {
  const mu = createMu()
  const opts = {port: 6001}

  routing(mu, opts)

  mu.outbound('*', tcp.client(opts))

  mu.dispatch({role: 'invalid', cmd: 'one'}, (err) => {
    t.ok(err)
    mu.tearDown()
    t.end()
  })
})

