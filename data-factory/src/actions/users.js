import { FETCH_USERS } from '../constants/ActionTypes';
import { API_USERS } from '../constants/APIs';

export function fetchUsers(params) {
  return {
    actionType: FETCH_USERS,
    options: {
      url: API_USERS,
      params
    }
  }
}
