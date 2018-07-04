

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../../actions/dataSource';
import { DataTree } from '../../../components/DataSource/Index';


function mapState2Props(state) {
  const currentState = state.store.dataSource || {};
  return {
    status: currentState.status,
    dataTree: currentState.dataTree
  };
}

function mapDispatch2Props(dispatch) {
  const actions = bindActionCreators(actionCreators, dispatch);
  return {
    onFetchDataTree: actions.fetchDataTree
  };
}

export default connect(mapState2Props, mapDispatch2Props)(DataTree);
