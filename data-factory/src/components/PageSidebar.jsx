import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Icon } from 'antd'
import _ from 'lodash';
import { Link } from 'react-router'

const { Sider } = Layout
const { SubMenu } = Menu


const propTypes = {
  collapsed: PropTypes.bool
}

const contextTypes = {
  menus: PropTypes.array
}

class PageSidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menus: [
        {
          key: 'sub1',
          icon: 'user',
          label: 'subnav 1',
          items: [
            {
              key: '1',
              label: 'option1'
            },
            {
              key: '2',
              label: 'option2'
            }
          ]
        },
        {
          key: 'sub2',
          icon: 'laptop',
          label: 'subnav 2',
          items: [
            {
              key: '3',
              label: 'option3'
            },
            {
              key: '4',
              label: 'option4'
            }
          ]
        }
      ]
    }
  }

  renderSubMenus() {
    const { menus } = this.state;
    return _.map(menus, menu => (
      <SubMenu key={menu.key} title={<span><Icon type={menu.icon} />{menu.label}</span>}>
        {
          menu.items ?
            _.map(menu.items, item => <Menu.Item key={item.key}>{item.label}</Menu.Item>) : null
        }
      </SubMenu>
      ));
  }

  render() {
    const { menus } = this.context;
    const { collapsed } = this.props;
    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          {this.renderSubMenus()}
        </Menu>
      </Sider>
    )
  }
}

PageSidebar.propTypes = propTypes;
PageSidebar.contextTypes = contextTypes;

export default PageSidebar
