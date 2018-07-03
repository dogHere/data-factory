import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  onFetchDataTree: PropTypes.func,
  dataTree: PropTypes.object,
}

const defaultProps = {}

class DataTree extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    const { onFetchDataTree } = this.props;
    onFetchDataTree({
      variables: { app_id: '5b2cb6c68d17c02d560f8bea' }
    });
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.dataTree) {
      console.log(nextProps.dataTree, 'nexprops');
    }
  }

  render() {
    const { dataTree } = this.props;
    console.dir(dataTree);
    return (
      <div>
        <h1>DataTree</h1>
      </div>
    )
  }
}

DataTree.propTypes = propTypes;
DataTree.defaultProps = defaultProps;

export default DataTree;
