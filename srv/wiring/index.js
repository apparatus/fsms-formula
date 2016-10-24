'use strict'
const mu = require('mu')()
const resources = require('./resources')
const setup = require('./setup')

wiring.start = start
module.exports = wiring

function wiring (opts, cb) {
  resources(init)

  function init (err, resrc) {
    if (err) return cb(err)

    setup(
      mu,
      Object.assign({}, opts.setup, {resrc}),
      (err) => srv(err, {resrc})
    )
  }

  function srv (err, {resrc}) {
    if (err) return cb(err)
    cb(null, {mu, resrc})
  }
}

function start (service) {
  return (err, {mu, resrc}) => {
    if (err) throw err
    service(mu, resrc)
  }
}

