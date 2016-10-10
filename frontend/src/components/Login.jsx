import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Login.scss';

@connect(({ auth }) => {
  auth
})
export default class Login extends Component {
  _handleChangeEmail = ({ target: { value: email }}) => this.setState({ email });
  _handleChangePassword = ({ target: { value: password }}) => this.setState({ password });

  constructor(props) {
    super(props);

    this.state = {};

    this.login = ::this.login;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.user) {
      window.alert('Logged in!');
    }
  }

  login() {
    this.props.dispatch({
      type: 'LOGIN_REQUEST'
    });
  }

  render () {
    return (
      <div>
        <div style={{border: '1px solid #000', padding: 20, width: 300, margin: '0 auto'}}>
          Email
          <br />
          <input onChange={this._handleChangeEmail} />
          <br />
          Password
          <br />
          <input onChange={this._handleChangePassword} />
          <br />
          <br />
          <button type="button" onClick={this.login}>Login</button>
        </div>
      </div>
    );
  }
}
