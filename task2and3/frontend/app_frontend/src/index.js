import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "semantic-ui-css/semantic.min.css";
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers } from 'redux';
import { createReducer } from "redux-orm";

import orm from '../src/redux/orm';

const composedEnhancers = composeWithDevTools()

const rootReducer = combineReducers({
  //reducer method that returns a reducer function you can plug in to a root reducer,
  //have an orm branch in your state
  orm: createReducer(orm),
});
// const store = createStore(rootReducer, composeWithDevTools(
//   applyMiddleware(),
// ));
const store = createStore(rootReducer, composedEnhancers)
ReactDOM.render(
  <Provider store ={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


