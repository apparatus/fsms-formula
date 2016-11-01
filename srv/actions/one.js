module.exports = (ctx) => (args, cb) => {
  const {mu} = ctx
  mu.dispatch({role: 'another-service', cmd: 'cmd'}, (err, result) => {
    if (err) return cb(err)
    // ...
    args.moreStuff = result
    cb(null, args)
  })
}

// restify:
// module.exports = (ctx) => (req, res, next) => {
//   const {client, logger} = ctx
//
//   // call another service
//   client.get('/another-service/cmd', (err, cReq, cRes, result) => {
//     res.end(domeSomethingWith(result))
//     logger.info('Server returned: %j', result)
//   })
// }
