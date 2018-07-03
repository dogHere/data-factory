import * as types from '../constants/ActionTypes'
import createReducer from '../utils/createReducer'
import createRequestHandler from '../utils/createRequestHandler'
import { toItems } from '../utils/actionToStore'

const initialState = {
  menus: []
}

export default createReducer(initialState, {
  [types.FETCH_MENUS]: createRequestHandler((state, action) => {
    return {
      menus: toItems(action)
    }
  })
})
