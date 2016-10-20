'use strict'

const {test} = require('tap')
const createMu = require('mu')
const {name} = require('../../package.json')
const service = require('../../srv/service')

test(`role: '${name}', cmd: 'one'`, (t) => {
  const mu = createMu()
  service(mu, name)
  mu.dispatch({role: name, cmd: 'one'}, (err, result) => {
    t.error(err)
    t.deepEqual({}, result)
    t.end()
  })
})

test(`role: '${name}', cmd: 'two'`, (t) => {
  const mu = createMu()
  service(mu, name)
  mu.dispatch({role: name, cmd: 'two'}, (err, result) => {
    t.error(err)
    t.deepEqual({my: 'action two'}, result)
    t.end()
  })
})
