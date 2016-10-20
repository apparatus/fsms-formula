'use strict'

module.exports = service

function service ({define}, {role}) {
  define({role: role, cmd: 'one'}, (args, cb) => {
    cb()
  })

  define({role: role, cmd: 'two'}, (args, cb) => {
    cb(null, {my: 'action two'})
  })
}
