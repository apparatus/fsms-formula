const mini = require('mini-service')
const client = mini.getClient({remote: 'http://localhost:8080'})

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
