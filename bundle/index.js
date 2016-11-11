const browserify = require('browserify')
const builtins = {_process: require('browserify/lib/builtins')._process}
const {name} = require('../package.json')

module.exports = bundle

function bundle (opts) {
  var cached = ''

  make((err, code) => {
    if (err) {
      console.warn('Unable to create initial bundle', err)
      return
    }
    cached = code
  })

  return html

  function html (cb) {
    if (cached) return cb(null, cached)
    make((err, code) => {
      if (err) return cb(err)
      cached = code
      cb(null, code)
    })
  }

  function make (cb) {
    browserify({builtins: builtins, standalone: opts.dev && name})
      .add(require.resolve('../cmp'))
      .bundle((err, buf) => {
        if (err) return cb(err)
        buf = buf.toString()
        cb(null, buf)
      })
  }

}
