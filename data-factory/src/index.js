import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import axios from 'axios'
import reducers from './reducers'
import routes from './routes'
import callAPIMiddleware from './middlewares/callAPIMiddleware'
import { BASE_URL } from './constants/APIs'
import './sass/main.scss'

axios.defaults.baseURL = BASE_URL;
const middlewares = [thunkMiddleware, callAPIMiddleware];

if (process.env.NODE_ENV === 'development') {

  const createLogger = require('redux-logger');
  const logger = createLogger();
  middlewares.push(logger);
}

const store = createStore(
  combineReducers({
    store: reducers,
    routing: routerReducer
  }), applyMiddleware(...middlewares)
);

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render((
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
), document.getElementById('mount'));
