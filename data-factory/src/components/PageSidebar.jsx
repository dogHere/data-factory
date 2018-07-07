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
          label: '元数据监控',
          items: [
            {
              key: '1',
              label: '数据量状况',
              link: '/data-source/data-tree'

            },
            {
              key: '2',
              label: '血缘关系监控',
              link: '/data-source/lineage'
            }
          ]
        },
        {
          key: 'sub2',
          icon: 'laptop',
          label: '元数据管理',
          items: [
            {
              key: '3',
              label: '数据库表信息',
              link: '/data-source/schema'
            }
          ]
        }
      ]
    }
  }

  componentWillMount(){
    const currentPath = (window.location.hash ||'#').split('#')[1];
    let targetKey = -1 ;
    this.state.menus.forEach(k=>{
      k.items.forEach(sub=>{
        if(sub.link===currentPath){
          targetKey = sub.key;
        }
      }) 
    })
    this.setState({defaultSelectedKeys:[targetKey]});
  }

  renderSubMenus() {
    const { menus } = this.state;
    return _.map(menus, menu => (
      <SubMenu key={menu.key} title={<span><Icon type={menu.icon} /> {menu.label}</span>}>
        {
          menu.items ?
            _.map(menu.items, item => <Menu.Item key={item.key}> <Link to={item.link}>{item.label}</Link> </Menu.Item>) : null
        }
      </SubMenu>
      ));
  }

  render() {
    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={this.state.defaultSelectedKeys}
          defaultOpenKeys={['sub1', 'sub2']}
          style={{ height: '100%', borderRight: 0 }}
        >
          {this.renderSubMenus()}
        </Menu>
      </Sider>
    )
  }
}

export default PageSidebar
