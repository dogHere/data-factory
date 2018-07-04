import gql from 'graphql-tag';

import { FETCH_DATA_TREE } from '../constants/ActionTypes';
import { API_DATA_TREE } from '../constants/APIs';
import { FETCH_SCHEMA } from '../constants/ActionTypes';
import { API_SCHEMA } from '../constants/APIs';


export function fetchDataTree(params) {
  return {
    actionType: FETCH_DATA_TREE,
    options: {
      type: 'query',
      graphql: gql`${API_DATA_TREE}`,
      ...params
    }
  }
}


export function fetchSchema(params) {
  return {
    actionType: FETCH_SCHEMA,
    options: {
      type: 'query',
      graphql: gql`${API_SCHEMA}`,
      ...params
    }
  }
}
