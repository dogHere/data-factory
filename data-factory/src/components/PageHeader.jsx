import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { Layout, Icon } from 'antd'

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
