'use strict'
const mu = require('mu')()
const initialize = require('./initialize.js')
const routing = require('./routing.js')
const service = require('./service.js')
const {name} = require('../package.json')

initialize((err, resrc) => {
  if (err) throw err

  service(mu, {
    role: name,
    resrc: resrc
  })

  routing(mu, {
    port: process.env.PORT || 6000,
    host: process.env.HOST || 'localhost',
    resrc: resrc
  })

  mu.log.info(`${name} service started`)
})
