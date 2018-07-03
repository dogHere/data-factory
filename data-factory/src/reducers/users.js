
import * as types from '../constants/ActionTypes'
import createReducer from '../utils/createReducer'
import createRequestHandler from '../utils/createRequestHandler'
import { toTable } from '../utils/actionToStore'

const initialState = {
  status: null,
  items: [],
  page: {}
}


export default createReducer(initialState, {
  [types.FETCH_USERS]: createRequestHandler((state, action) => {
    return toTable(action)
  })
})
