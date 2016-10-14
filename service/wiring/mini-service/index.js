const {startServer} = require('mini-service')

startServer({
  services: require('./wiring-mini-service.js'),
})