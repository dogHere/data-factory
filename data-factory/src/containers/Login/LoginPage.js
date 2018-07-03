
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/login';
import { Login } from '../../components/Login';


function mapState2Props(state) {
  const loginState = state.store.login;
  return {
    status: loginState.status
  };
}

function mapDispatch2Props(dispatch) {
  const actions = bindActionCreators(actionCreators, dispatch);
  return {
    onLogin: actions.login
  };
}

export default connect(mapState2Props, mapDispatch2Props)(Login);
