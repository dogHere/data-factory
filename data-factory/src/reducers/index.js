import { combineReducers } from 'redux'
import login from './login'
import user from './users'
import common from './common'
import dataSource from './dataSource';

const app = combineReducers({
  login,
  user,
  common,
  dataSource
})

export default app
