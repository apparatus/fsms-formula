'use strict'
const context = require('./context')
const setup = require('./setup')
const component = require('./component')

module.exports = wiring

function wiring (opts, service, ready) {
  context(opts.context, init)

  function init (err, ctx) {
    if (err) return ready(err)
    service(ctx)
    if (opts.dev) { component(ctx, {name: opts.name}) }
    setup(ctx, opts.setup, (err) => ready(err, ctx))
  }
}

