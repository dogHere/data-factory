import React, { Component } from 'react'
import Frame from '../Frame'
import UserTable from './UserTable'

class UserTableView extends Component {
  render() {
    return (
      <Frame>
        {this.props.children || <UserTable {...this.props} />}
      </Frame>
    );
  }
}

export default UserTableView;
