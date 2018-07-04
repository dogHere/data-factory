
import { FETCH_DATA_TREE, FETCH_SCHEMA } from '../constants/ActionTypes';

const initialState = {
  dataTree: [],
  schema: []
};

export default function dataSource(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_TREE:
      return Object.assign({}, state, {
        status: action.status,
        dataTree: action.response
      });
    case FETCH_SCHEMA:
      return Object.assign({}, state, {
        status: action.status,
        schema: action.response
      });
    default:
      return state;
  }
}
