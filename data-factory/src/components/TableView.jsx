import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Pagination } from 'antd'

import ReqeustStatus from '../constants/RequestStatus'

const propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  status: PropTypes.string,
  loadData: PropTypes.func
}

class TablveView extends Component {
  constructor(props) {
    super(props)
    const { total } = props.options;
    this.state = {
      pagination: {
        total,
        current: 1,
        pageSize: 30,
        showTotal: this.showTotal
      },
      params: {
        page: 1,
        pageSize: 30,
        filterColumn: '',
        filterOrder: 'descend'
      }
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState((prevState) => {
        return {
          pagination: { ...prevState.pagination, ...{ total: nextProps.options.total } }
        }
      })
    }
  }

  getParams() {
    return this.state.params
  }

  setParams(params, callback) {
    this.setState((prevState) => {
      return {
        params: { ...prevState.params, ...params }
      }
    }, () => {
      callback && callback();
    })
  }

  showTotal = (total) => {
    return `Total ${total} items`
  }

  handlePaginatiChange = (page, pageSize) => {
    this.setState((prevState) => {
      return {
        pagination: { ...prevState.pagination, ...{ current: page } }
      }
    })
    const params = {
      page,
      pageSize
    }

    this.setParams(params, this.loadTableData)
  }

  handleTableChange = (pagination, filters, sorter) => {
    const params = {
      filterColumn: sorter.field,
      filterOrder: sorter.order
    }

    this.setParams(params, this.loadTableData)
  }

  handleShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
    this.setState((prevState) => {
      return {
        pagination: { ...prevState.pagination, ...{ pageSize } }
      }
    })
    const params = {
      page: 1,
      pageSize
    }
    this.setParams(params, this.loadTableData)
  }

  loadTableData = (params) => {
    const { loadData } = this.props
    loadData(params || this.state.params)
  }

  renderPagination() {
    const { pagination } = this.state;
    return (
      <Pagination
        className="table-pagination"
        showSizeChanger
        onShowSizeChange={this.handleShowSizeChange}
        total={pagination.total}
        showTotal={total => `Total ${total} items`}
        pageSize={pagination.pageSize}
        current={pagination.current}
        defaultCurrent={1}
        onChange={this.handlePaginatiChange}
      />
    );
  }

  render() {
    const { data, columns, status } = this.props
    return (
      <div>
        <Table
          dataSource={data}
          columns={columns}
          pagination={false}
          loading={status === ReqeustStatus.REQUEST}
          onChange={this.handleTableChange}
          {...this.props}
        />
        {this.renderPagination()}
      </div>
    )
  }
}

TablveView.propTypes = propTypes

export default TablveView
