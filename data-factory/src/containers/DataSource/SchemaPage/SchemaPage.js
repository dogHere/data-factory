

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../../actions/dataSource';
import { Schema } from '../../../components/DataSource/Index';


function mapState2Props(state) {
  const currentState = state.store.dataSource || {};
  return {
    status: currentState.status,
    schema: currentState.schema
  };
}

function mapDispatch2Props(dispatch) {
  const actions = bindActionCreators(actionCreators, dispatch);
  return {
    onFetchSchema: actions.fetchSchema
  };
}

export default connect(mapState2Props, mapDispatch2Props)(Schema);
