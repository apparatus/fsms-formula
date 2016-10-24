'use strict'

module.exports = resources

function resources (cb) {
  // simulate resource initialization
  setTimeout(() => {
    // pass any database connections,
    // net sockets, or module instances
    // through the resrc object
    const resrc = {

    }
    cb(null, resrc)
  }, 1000)
}
