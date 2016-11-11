'use strict'
const wiring = require('./wiring')
const config = require('./config')
const remote = require('../cmp/wiring/remote.js')
const one = require('./actions/one')
const two = require('./actions/two')

wiring(config, service, ready)

function service (ctx) {
  const {mu} = ctx
  const {name, dev} = config

  mu.define({role: name, cmd: 'one'}, one(ctx))

  mu.define({role: name, cmd: 'two'}, two(ctx))

  if (dev) {
    const cmp = remote(config)

    mu.define({role: name, cmd: 'component'}, (args, cb) => {
      cmp((err, payload) => {
        if (err) {
          cb(err)
          return
        }
        cb(null, {payload: payload})
      })
    })

    mu.dispatch({role: 'frontend', cmd: 'reload'}, function (err) {
      console.error(err)
    })

  }


}

function ready (err, ctx) {
  const {mu} = ctx
  const {name} = config

  if (err) { throw err }
  mu.log.info(`${name} service started`)
}

// restify or similar (express, fastify):
// function service (ctx) {
//   const {server} = ctx
//   const {name} = config

//   server.post(`/${name}/one`, one(ctx))

//   server.post(`/${name}/two`, two(ctx))

// }

// function ready (err, ctx) {
//   const {logger} = ctx
//   const {name} = config
//   if (err) { throw err }
//   logger.info(`${name} service started`)
// }
