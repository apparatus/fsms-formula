'use strict'

module.exports = context

function context (cb) {
  // simulate resource initialization
  setTimeout(() => {
    // let's pretend we've remotely loaded
    // a button component
    const button = ({label, click}) => `
      <button onClick=${click}>${label}</button>
    `
    // pass any fullstack service component
    // dependencies (and any other async deps)
    // into the ctx object
    const ctx = {
      button: button
    }
    cb(null, ctx)
  }, 1000)
}
