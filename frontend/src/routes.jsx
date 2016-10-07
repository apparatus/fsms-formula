import React, { Component } from 'react';

import LoginPage from './components/Login';

export class LoginRoute extends Component {
  static defaultProps = {
    path: '/auth/login',
    component: LoginPage,
    onEnter: () => {
      // Check if already logged in, if so redirect to home page
    }
  }
}

// Can export more routes such as
// /auth/teams
// /auth/roles

// export class LoginRoute extends Component {
//   static defaultProps = {
//     path: '/auth/login',
//     component: LoginPage,
//     onEnter: () => {
//       // Check if already logged in, if so redirect to home page
//     }
//   }
// }
