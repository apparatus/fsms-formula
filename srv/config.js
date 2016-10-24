const {name} = require('../package.json')

module.exports = {
  name: name,
  setup: {
    port: process.env.PORT || 6000,
    host: process.env.HOST || 'localhost'
  }
}
