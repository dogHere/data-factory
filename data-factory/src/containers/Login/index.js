import React, { Component } from 'react';
import Frame from '../../components/Frame'
import Login from './LoginPage';

class LoginPage extends Component {
  render() {
    return (
      <Frame
        hideSidebar
      >
        {this.props.children || <Login />}
      </Frame>
    );
  }
}

export default LoginPage;
