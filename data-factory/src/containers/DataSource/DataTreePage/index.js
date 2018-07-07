import React, { Component } from 'react';
import Frame from '../../../components/Frame'
import DataTree from './DataTreePage';

class DataTreePage extends Component {
  render() {
    return (
      <Frame>
        {this.props.children || <DataTree />}
      </Frame>
    );
  }
}

export default DataTreePage;
