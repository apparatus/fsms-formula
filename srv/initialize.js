'use strict'

module.exports = initialize

function initialize (cb) {
  // simulate resource initialization
  setTimeout(() => {
    // pass any database connections,
    // net sockets, etc. in the resrc object
    const resrc = {}
    cb(null, resrc)
  }, 1000)
}
