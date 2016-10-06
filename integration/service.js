'use strict'

var opts = {port: process.env.SERVICE_PORT, host: process.env.SERVICE_HOST}
const wiring = require('../service/wiring-mu')(opts)

wiring.start(() => {
  console.log(`service listening on port: ${opts.port}`)
})
