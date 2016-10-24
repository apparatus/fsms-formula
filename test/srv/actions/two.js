'use strict'

const {test} = require('tap')
const {name} = require('../../../package.json')
const action = require('../../../srv/actions/two')

test(`role: '${name}', cmd: 'two'`, (t) => {
  const mock = {resrc: {}, mu: {}}
  const two = action(mock.result, mock.mu)

  two({role: name, cmd: 'two'}, (err, result) => {
    t.error(err)
    t.deepEqual({my: 'action two'}, result)
    t.end()
  })
})
