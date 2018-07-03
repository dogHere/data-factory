import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TableView from '../TableView'


const propTypes = {
  userList: PropTypes.array,
  page: PropTypes.object,
  status: PropTypes.string,
  onFetchUser: PropTypes.func
}

class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.loadTableData(this.table.getParams());
  }

  getTableOptions() {
    const { page } = this.props;
    return {
      total: page.total || 0
    }
  }


  getColumns() {
    const columns = [
      {
        title: '姓名',
        width: 200,
        dataIndex: 'name',
        fixed: true,
      },
      {
        title: '年龄',
        width: 100,
        dataIndex: 'age',
      },
      {
        title: '地址',
        dataIndex: 'address',
        sorter: true,
        width: 300,
      },
      {
        title: '联系方式',
        dataIndex: 'phone',
        width: 150,
        sorter: true,
      },
      {
        title: '邮箱',
        dataIndex: 'email',
        width: 150,
      },
      {
        title: '性别',
        dataIndex: 'gender',
        width: 150,
      },
      {
        title: 'Action',
        width: 100,
        render: () => <a href="#">action</a>,
      },
    ];
    return columns;
  }

  loadTableData = (params) => {
    const { onFetchUser } = this.props;
    onFetchUser(params);
  }

  render() {
    const { userList, status, page } = this.props;
    return (
      <TableView
        status={status}
        data={userList}
        page={page}
        options={this.getTableOptions()}
        loadData={this.loadTableData}
        columns={this.getColumns()}
        ref={(ref) => {
          this.table = ref
        }}
      />
    )
  }
}

UserTable.propTypes = propTypes
export default UserTable
