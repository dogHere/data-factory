import React, { Component } from 'react'
import Frame from '../Frame'
import Dashboard from './Dashboard'

class DashboardView extends Component {
  render() {
    return (
      <Frame>
        {this.props.children || <Dashboard {...this.props} />}
      </Frame>
    );
  }
}

export default DashboardView
