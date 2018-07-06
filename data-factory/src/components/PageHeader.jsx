import React, { Component } from 'react'
import { Layout } from 'antd'

const { Header } = Layout

const propTypes = {
};

const contextTypes = {
  // router: React.PropTypes.object.isRequired
};

class PageHeader extends Component {

  render() {
    return (
      <Header className="header">
        <div className="logo" />
      </Header>
    );
  }
}

PageHeader.propTypes = propTypes;
PageHeader.contextTypes = contextTypes;

export default PageHeader;
