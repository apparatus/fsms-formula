'use strict'
const cmp = require('../actions/cmp')

module.exports = component

function component (ctx, opts) {
  const {mu} = ctx
  const {name} = opts

  mu.define({role: name, cmd: 'component'}, cmp(ctx))  

}

