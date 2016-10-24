'use strict'

const {test} = require('tap')
const {name} = require('../../../package.json')
const action = require('../../../srv/actions/one')

test(`role: '${name}', cmd: 'one'`, (t) => {
  const mock = {resrc: {}, mu: {}}
  const one = action(mock.result, mock.mu)

  one({role: name, cmd: 'one'}, (err, result) => {
    t.error(err)
    t.notOk(result)
    t.end()
  })
})
