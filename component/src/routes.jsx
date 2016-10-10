import React from 'react';
import { Route } from 'react-router';
import Component from './components/Login';

let LoginRoute = (<Route path="/login" getComponents={(nextState, cb) => {
  cb(null, Component);
}} />);

export default LoginRoute