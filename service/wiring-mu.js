/*
 * THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING
 * IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

'use strict'

var mu = require('mu')()
var tcp = require('mu/drivers/tcp')
var service = require('./lib/service')


/**
 * options:
 *
 *  port: process.env.SERVICE_PORT || 6000
 *  host: process.env.SERVICE_HOST || 'localhost'
 */
module.exports = function (options) {

  function start (cb) {
    service(function (svc) {
      mu.define({role: 's2', cmd: 'one'}, svc.one)
      mu.define({role: 's2', cmd: 'two'}, svc.two)
      mu.inbound('*', tcp.server(options))
      cb()
    })
  }


  function stop () {
    mu.tearDown()
  }

  return {
    start: start,
    stop: stop
  }
}

