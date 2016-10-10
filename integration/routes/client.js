'use strict'

module.exports = [
  {
    method: 'GET',
    path: '/css/{path*}',
    config: {
      auth: false
    },
    handler: {
      directory: {
        path: './css/',
        redirectToSlash: true,
        index: false
      }
    }
  },
  {
    method: 'GET',
    path: '/js/{path*}',
    config: {
      auth: false
    },
    handler: {
      directory: {
        path: './js/',
        redirectToSlash: true,
        index: false
      }
    }
  },
  {
    method: 'GET',
    path: '/fonts/{path*}',
    config: {
      auth: false
    },
    handler: {
      directory: {
        path: './fonts/',
        redirectToSlash: true,
        index: false
      }
    }
  },
  {
    method: 'GET',
    path: '/img/{path*}',
    config: {
      auth: false
    },
    handler: {
      directory: {
        path: './img/',
        redirectToSlash: true,
        index: false
      }
    }
  },
  {
    method: 'GET',
    path: '/{path*}',
    config: {
      auth: false
    },
    handler: {
      file: {
        path: './index.html'
      }
    }
  }
]
