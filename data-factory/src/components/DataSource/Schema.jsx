import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Input } from 'antd'
import  Viz from 'viz.js'
import { Module, render } from 'viz.js/full.render.js';


const propTypes = {
  onFetchSchema: PropTypes.func,
  schema: PropTypes.object,
}

const defaultProps = {}

class Schema extends Component {
  constructor(props) {
    super(props)
    const { schema = {} } = this.props;
    this.state = { dataSource: this.setKeys((schema && schema.TableList)) }
  }

  setKeys= (list = []) => {
    return list.map((k, i) => ({...k, key:i}))
  }

  componentDidMount() {
    const { onFetchSchema } = this.props;
    onFetchSchema();

  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.schema) {
      console.log(nextProps.schema, 'nexprops', 'schema');
      const { schema = {} } = nextProps;
      this.setState({ dataSource: this.setKeys((schema && schema.TableList)) })
    }
  }


  handleSearch = (event) => {
    console.log(event, 'handleSearch');
    const { schema = {} } = this.props;
    const filetred = (schema.TableList || []).filter((record) => (record.tableName
        + record.databaseName
        + record.owner
        + record.location
        + record.inputFormat
        + record.showCreateTable
        || '').search(event.target.value) > -1)
    console.log(filetred, 'filtered');
    this.setState({ dataSource: this.setKeys(filetred) });
  }

  handleExpand = (expanded, record) => {
    console.log(expanded, record, 'expand');
    // this.setState({ expandedRowRender: !expanded ? expandedRowRender : undefined });
  }


  expandedRowRender = (record) => {
    const columns = [
      {
        title: '表类型',
        dataIndex: 'tableType',
        key: 'tableType',
        width: 150
      }, {
          title: '表参数',
          dataIndex: 'tableParameters',
          key: 'tableParameters',
          width: 150
        }, {
            title: '最后访问时间',
            dataIndex: 'transientLastDdlTime',
            key: 'transientLastDdlTime',
            width: 150
          }, {
            title: '最后更新人',
            dataIndex: 'lastModifiedBy',
            key: 'lastModifiedBy',
            width: 150
          }, {
            title: '最后修改时间',
            dataIndex: 'lastModifiedTime',
            key: 'lastModifiedTime',
            width: 150
          }, {
            title: 'serDeLibrary',
            dataIndex: 'serDeLibrary',
            key: 'serDeLibrary',
            width: 150
          }, {
            title: '输入格式',
            dataIndex: 'inputFormat',
            key: 'inputFormat',
            width: 150
          }, {
            title: '输出格式',
            dataIndex: 'outputFormat',
            key: 'outputFormat',
            width: 150
          }, {
            title: '压缩',
            dataIndex: 'compressed',
            key: 'compressed',
            width: 150
          }, {
            title: '分桶数量',
            dataIndex: 'numBuckets',
            key: 'numBuckets',
            width: 150
          }, {
            title: 'bucketColumns',
            dataIndex: 'bucketColumns',
            key: 'bucketColumns',
            width: 150
          }, {
            title: 'sortColumns',
            dataIndex: 'sortColumns',
            key: 'sortColumns',
            width: 150
          }, {
            title: 'storageDescParams',
            dataIndex: 'storageDescParams',
            key: 'storageDescParams',
            width: 150
          }, {
            title: '创表语句',
            dataIndex: 'showCreateTable',
            key: 'showCreateTable',
            width: 550
          }
    ];
    console.log(record, 'expend');
    return (
      <Table
      columns={columns}
      dataSource={[record]}
      pagination={false}
    />
    );
  }


  renderSVGElement=(src,id)=>{
    let viz = new Viz({ Module, render });
    viz.renderSVGElement(src)
    .then(element=> {
        document.getElementById(id).innerHTML='';
        document.getElementById(id).appendChild(element);
    })
    .catch(error => {
      // Create a new Viz instance (@see Caveats page for more info)
      viz = new Viz({ Module, render });
  
      // Possibly display the error
      console.error(error);
    });
  }


  render() {



    const columns = [{
      title: '库',
      dataIndex: 'databaseName',
      key: 'databaseName',
      width: 300,
    }, {
      title: '表',
      dataIndex: 'tableName',
      key: 'tableName',
      width: 500,

    }, {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      width: 150
    }, {
      title: '所有者',
      dataIndex: 'owner',
      key: 'owner',
      width: 150
    }, {
      title: '最后修改时间',
      dataIndex: 'lastAccessTime',
      key: 'lastAccessTime',
      width: 150
    }, {
      title: '保护模式',
      dataIndex: 'protectMode',
      key: 'protectMode',
      width: 150
    }, {
      title: 'retention',
      dataIndex: 'retention',
      key: 'retention',
      width: 150
    }, {
      title: '存储位置',
      dataIndex: 'location',
      key: 'location',
      width: 150
    }
    ];
    const { schema } = this.props;


    this.renderSVGElement('digraph { a -> b }')
    return (
      <div>
        <h1>表元数据</h1>
        
        <Input size="large" placeholder="搜索" style={{ width: '400px' }} onChange={this.handleSearch} />
        <Table
          className="components-table-demo-nested"
          dataSource={this.state.dataSource}
          expandedRowRender={this.expandedRowRender}
          columns={columns}
          scroll={{ x: 900, y: 600 }}
          expandRowByClick={false}
          onExpand={this.handleExpand}
        />


<div>
          
</div>

      </div>
      
     
    )
  }
}

Schema.propTypes = propTypes;
Schema.defaultProps = defaultProps;

export default Schema;
