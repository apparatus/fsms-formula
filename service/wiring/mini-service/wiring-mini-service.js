var service = require('../../lib/service')

module.exports = [{
 
  name: 'hello',
  
  init: () => Promise.resolve({
    
    one: (args) =>  new Promise(function(resolve, reject) {
            service.one(args,resolve); 
          }),
    two: (args) => new Promise(function(resolve, reject) {
            service.two(null,resolve); 
          })
  })
}]
