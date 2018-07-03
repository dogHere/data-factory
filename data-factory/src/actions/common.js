import * as APIs from '../constants/APIs'
import { FETCH_MENUS } from '../constants/ActionTypes'

export function fetchMenus() {
  return {
    actionType: FETCH_MENUS,
    options: {
      url: APIs.API_MENUS
    }
  }
}
