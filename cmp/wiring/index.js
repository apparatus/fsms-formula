'use strict'
const context = require('./context')

wiring.start = start
module.exports = wiring

function wiring (opts, cb) {
  context(init)

  function init (err, ctx) {
    if (err) return cb(err)
    cb(null, {name: opts.name, ctx: ctx})
  }
}

function start (component) {
  return (err, {name, ctx}) => {
    if (err) {
      console.error(`unable to start ${name} component`, err)
      return
    }
    component(ctx)
  }
}

