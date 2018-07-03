

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../../actions/users'
import UserTableView from '../../components/Users'


function mapState2Props(state) {
  const currentState = state.store.user;
  return {
    status: currentState.status,
    userList: currentState.items,
    page: currentState.page
  }
}

function mapDispatch2Props(dispatch) {
  const actions = bindActionCreators(actionCreators, dispatch)
  return {
    onFetchUser: actions.fetchUsers
  }
}

export default connect(mapState2Props, mapDispatch2Props)(UserTableView)
