import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/common'
import App from '../components/App';


function mapState2Props(state) {
  const currentState = state.store.common;
  return {
    menus: currentState.menus
  };
}

function mapDispatch2Props(dispatch) {
  const actions = bindActionCreators(actionCreators, dispatch)
  return {
    fetchMenu: actions.fetchMenus
  }
}

export default connect(mapState2Props, mapDispatch2Props)(App);
