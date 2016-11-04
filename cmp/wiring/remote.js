const browserify = require('browserify')

module.exports = (args, cb) => browserify()
  .add(require.resolve('../'))
  .bundle((err, buf) => {
    cb(null, buf.toString())
  })