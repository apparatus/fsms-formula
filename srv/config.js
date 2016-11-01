const {name} = require('../package.json')

const env = process.env

module.exports = {
  name: name,
  dev: env.NODE_ENV !== 'production',
  context: {
    dev: env.NODE_ENV !== 'production'
  },
  // restify:
  // context: {
  //   dev: env.NODE_ENV !== 'production',
  //   server: {name: name},
  //   api: {url: env.API_URL}
  // },
  setup: {
    port: env.PORT || 6000,
    host: env.HOST || 'localhost'
  }
}
