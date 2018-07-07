import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/common'
import App from '../components/App';


function mapState2Props(state) {
  const currentState = state.store.common;
  return {
  };
}

function mapDispatch2Props(dispatch) {
  const actions = bindActionCreators(actionCreators, dispatch)
  return {
  }
}

export default connect(mapState2Props, mapDispatch2Props)(App);
