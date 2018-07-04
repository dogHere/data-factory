import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Input } from 'antd'

const propTypes = {
  onFetchDataTree: PropTypes.func,
  dataTree: PropTypes.object,
}

const defaultProps = {}

class DataTree extends Component {
  constructor(props) {
    super(props)
    const { dataTree = {} } = this.props;
    this.state = { dataSource: (dataTree && dataTree.DataChangeRecords) }
  }

  componentDidMount() {
    const { onFetchDataTree } = this.props;
    onFetchDataTree();
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.dataTree) {
      console.log(nextProps.dataTree, 'nexprops');
      const { dataTree = {} } = nextProps;
      this.setState({ dataSource: (dataTree && dataTree.DataChangeRecords) })
    }
  }


  handleSearch = (event) => {
    const { dataTree = {} } = this.props;
    const filetred = (dataTree.DataChangeRecords || []).filter(record => {
      var a = (b) => {
        if (b) {
          return 'yes'
        } else {
          return 'no'
        }
      }
      return (record.tableName
        + record.databaseName
        + record.ymd
        + record.partitionValue
        + record.numRows
        + record.uniqueNumRows
        + record.duplicate
        + record.duplicateRate
        + a(record.hasDuplicate)
        + a(record.hasRingThanGrow) || '').search(event.target.value) > -1
    })
    this.setState({ dataSource: filetred });
  }

  render() {
    const { dataTree } = this.props;
    console.dir(dataTree);
    const columns = [{
      title: '库',
      dataIndex: 'databaseName',
      key: 'databaseName',
    }, {
      title: '表',
      dataIndex: 'tableName',
      key: 'tableName',
    }, {
      title: '时间',
      dataIndex: 'ymd',
      key: 'ymd',
      render: (text, record, index) => {
        if (record.hasDuplicate || !record.hasRingThanGrow) {
          return <div style={{ color: '#e6a23c' }} >
            {text}
          </div>
        } else {
          return <div style={{}} >
            {text}
          </div>
        }
      },
      sorter: (a, b) => {
        if (a.ymd > b.ymd) {
          return -1;
        } else {
          return 1;
        }
      },
      defaultSortOrder: 'descend',
    }, {
      title: '分区',
      dataIndex: 'partitionValue',
      key: 'partitionValue'
    }, {
      title: '行数',
      dataIndex: 'numRows',
      key: 'numRows'
    }, {
      title: '是否重复',
      dataIndex: 'hasDuplicate',
      key: 'hasDuplicate',
      render: (text, record, index) => {
        console.log(text, '是否重复');
        if (record.hasDuplicate) {
          return <div style={{ color: '#e6a23c' }} >
            {'yes'}
          </div>
        } else {
          return <div style={{}} >
            {'no'}
          </div>
        }
      },
    }, {
      title: '是否增长',
      dataIndex: 'hasRingThanGrow',
      key: 'hasRingThanGrow',
      render: (text, record, index) => {
        if (!record.hasRingThanGrow) {
          return <div style={{ color: '#f56c6c' }} >
            {'no'}
          </div>
        } else {
          return <div style={{}} >
            {'yes'}
          </div>
        }
      },
    }, {
      title: '去重后行数',
      dataIndex: 'uniqueNumRows',
      key: 'uniqueNumRows'
    }, {
      title: '重复行数',
      dataIndex: 'duplicate',
      key: 'duplicate'
    }, {
      title: '重复率',
      dataIndex: 'duplicateRate',
      key: 'duplicateRate'
    }, {
      title: '环比增长行数',
      dataIndex: 'ringThanNumRows',
      key: 'ringThanNumRows'
    }, {
      title: '同比增长行数',
      dataIndex: 'sameThanNumRows',
      key: 'sameThanNumRows'
    }, {
      title: '环比',
      dataIndex: 'ringThanNumRowsRate',
      key: 'ringThanNumRowsRate'
    }, {
      title: '同比',
      dataIndex: 'sameThanNumRowsRate',
      key: 'sameThanNumRowsRate'
    }, {
      title: '重复行数环比',
      dataIndex: 'duplicateRingThanNumRowsRate',
      key: 'duplicateRingThanNumRowsRate'
    }, {
      title: '重复行数同比',
      dataIndex: 'duplicateSameThanNumRowsRate',
      key: 'duplicateSameThanNumRowsRate'
    }, {
      title: '同比日期',
      dataIndex: 'sameThanDate',
      key: 'sameThanDate'
    }
    ];


    return (
      <div>
        <h1>数据量状况</h1>
        <Input size="large" placeholder="搜索" style={{ width: '400px' }} onChange={this.handleSearch} />
        <Table dataSource={this.state.dataSource} columns={columns} />
      </div>
    )
  }
}

DataTree.propTypes = propTypes;
DataTree.defaultProps = defaultProps;

export default DataTree;
