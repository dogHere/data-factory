import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, Breadcrumb } from 'antd'
import PageHeader from './PageHeader'
import PageSidebar from './PageSidebar'

const { Content } = Layout

const propTypes = {
  activeItem: PropTypes.string,
  hideSidebar: PropTypes.bool,
  hideHeader: PropTypes.bool,
};

const contextTypes = {
  router: PropTypes.object.isRequired,
  menus: PropTypes.array
};

const defaultProps = {
  headerProps: {}
};

class Frame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }
  }

  render() {
    const { children } = this.props;

    return (
      <Layout>
        {<PageHeader />}
        <Layout>
          {<PageSidebar />}
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              { children || 'Page.Content' }
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

Frame.propTypes = propTypes;
Frame.contextTypes = contextTypes;
Frame.defaultProps = defaultProps;
export default Frame;
