'use strict'

var test = require('tap').test
const spawn = require('child_process').spawn
const http = require('http')

var env = Object.create( process.env )
env.NODE_ENV = 'test'
env.HAPI_SERVICE_PORT = 6001
env.HAPI_SERVICE_HOST = 'localhost'

env.SERVICE_PORT = 6000
env.SERVICE_HOST = 'localhost'

test('integration test', (t) => {
  t.plan(2)

  const hapi = spawn('node', ['index'], {env: env})
  hapi.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
  })
  hapi.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`)
  })

  var service
  setTimeout(() => {
    service = spawn('node', ['service'], {env: env})
    service.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`)
    })
    service.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`)
    })
  }, 1000)

  const httpOpts = {
    hostname: env.HAPI_SERVICE_HOST,
    port: env.HAPI_SERVICE_PORT,
    path: '/service1/action2'
  }

  setTimeout(() => {
    const req = http.request(httpOpts, (response) => {
      var res = ''

      response.on('data', function (chunk) {
        res += chunk
      })

      response.on('end', function () {
        console.log(res)

        var answer = JSON.parse(res)
        t.error(answer.err)
        t.deepEqual({my: 'response'}, answer.result)

        hapi.kill()
        service.kill()

        process.exit(0)
      })
    })

    req.on('error', (e) => {
      console.log(`problem with request: ${e.message}`)
    })

    req.end()
  }, 3000)
})
