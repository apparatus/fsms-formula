'use strict'

// every fullstack microservice should have an actions/cmp.js file
// it exposes the component js, which is useful for
// dev mode (or even for remote components in production)

const cmp = require('../../cmp/wiring/remote.js')

module.exports = (ctx) => (args, cb) => {
  cmp(args, (err, component) => {
    cb(null, {component: component})
  })
}

// typically this action is only activated in dev, 
// (see srv/wiring/index.js), in production we bundle
// all components together with the builder