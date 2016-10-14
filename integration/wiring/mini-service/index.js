const client = require('mini-service')({remote: 'http://my-service:8080'})

module.exports = {
  handleOne: function (request, reply) { 
    client.init().then(() => {
      client.one().then(res => reply(res))
    })
  },
  handleTwo: function (request, reply) { 
    client.init().then(() => {
      client.two().then(res => reply(res))
    })
  }
}
