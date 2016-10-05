'use strict'

const test = require('tap').test

const Mu = require('mu')
var func = require('mu/drivers/func')
const Service = require('../service/lib/service')

test('empty answer', (t) => {
  t.plan(2)
  Service((mu) => {
    mu.dispatch({role: 's2', cmd: 'one'}, (err, result) => {
      t.error(err)
      t.deepEqual({}, result)
    })
  })
})

test('service response', (t) => {
  t.plan(2)
  Service((mu) => {
    mu.dispatch({role: 's2', cmd: 'two'}, (err, result) => {
      t.error(err)
      t.deepEqual({my: 'response'}, result)
    })
  })
})
