import client from './client';
import ReqeustStatus from '../constants/RequestStatus';

function request(options) {
  const { type = 'query', graphql, variables, ...restOptions } = options;
  if (type === 'query') {
    return client.query({
      query: graphql,
      variables,
      ...restOptions
    });
  }
  return client.mutate({
    mutation: graphql,
    variables,
    ...restOptions
  });
}


function callAPIMiddleware({ dispatch, getState }) {
  return next => (action) => {
    const {
      actionType,
      options,
      shouldCallAPI = () => true,
      payload = {}
    } = action

    if (!actionType) {
      return next(action)
    }

    if (!shouldCallAPI(getState())) {
      return;
    }

    dispatch(Object.assign({}, payload, {
      status: ReqeustStatus.REQUEST,
      type: actionType
    }))

    return request(options).then(
      response => dispatch(Object.assign({}, payload, {
        status: ReqeustStatus.SUCCESS,
        response: response.data,
        type: actionType
      })))
      .catch(err => dispatch(Object.assign({}, payload, {
        status: ReqeustStatus.ERROR,
        err,
        type: actionType
      })))
  }
}

export default callAPIMiddleware
