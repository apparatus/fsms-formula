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
    dev: env.NODE_ENV !== 'production',
    port: env.SERVICE_NAME_PORT,
    host: env.SERVICE_NAME_HOST,
    outbound: {
      frontend: {
        port: env.FRONTEND_PORT,
        host: env.FRONTEND_HOST
      }
    }
  }
}
