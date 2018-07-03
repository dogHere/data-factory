
import { FETCH_DATA_TREE } from '../constants/ActionTypes';


const initialState = {
  dataTree: []
};

export default function dataSource(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_TREE:
      return Object.assign({}, state, {
        status: action.status,
        dataTree: action.response
      });
    default:
      return state;
  }
}
