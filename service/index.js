var service = require('./wiring-mu.js')({port: 6000, host: 'localhost'})

service.start(
  function(){
    console.log('service started');
  }
);