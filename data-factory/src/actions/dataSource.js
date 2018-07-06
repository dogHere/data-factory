import gql from 'graphql-tag';
import * as actionTypes from '../constants/ActionTypes';
import * as APIs from '../constants/APIs';

export function fetchDataTree(params) {
  return {
    actionType: actionTypes.FETCH_DATA_TREE,
    options: {
      type: 'query',
      graphql: gql`${APIs.DataTreeQuery}`,
      ...params
    }
  }
}
