import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import _ from 'lodash';

const { Sider } = Layout
const { SubMenu } = Menu

class PageSidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menus: [
        {
          key: 'dataSource',
          icon: 'user',
          label: 'dataSource',
          items: [
            {
              key: 'dataTree',
              label: 'dataTree'
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
    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['dataTree']}
          defaultOpenKeys={['dataSource']}
          style={{ height: '100%', borderRight: 0 }}
        >
          {this.renderSubMenus()}
        </Menu>
      </Sider>
    )
  }
}

export default PageSidebar
