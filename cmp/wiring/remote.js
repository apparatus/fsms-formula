const browserify = require('browserify')
const builtins = {_process: require('browserify/lib/builtins')._process}
const {name} = require('../config')

module.exports = remote

function remote (opts) {
  var cached = ''

  bundle((err, code) => {
    if (err) {
      console.warn('Unable to create initial bundle', err)
      return
    }
    cached = code
  })

  return html

  function html (cb) {
    if (cached) return cb(null, cached)
    bundle((err, code) => {
      if (err) return cb(err)
      cached = code
      cb(null, code)
    })
  }

  function bundle (cb) {
    browserify({builtins: builtins, standalone: opts.dev && name})
      .add(require.resolve('../'))
      .bundle((err, buf) => {
        if (err) return console.error(err)
        buf = buf.toString()
        cb(null, buf)
      })
  }

}
