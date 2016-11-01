'use strict'

const {test} = require('tap')
const {name} = require('../../../package.json')
const action = require('../../actions/one')

test(`role: '${name}', cmd: 'one'`, (t) => {
  const ctx = {mu: {
    dispatch: (args, cb) => {
      cb(null, args)
    }
  }}
  const one = action(ctx)

  one({role: name, cmd: 'one'}, (err, result) => {
    // t.error(err)
    // t.notOk(result)
    t.end()
  })
})
