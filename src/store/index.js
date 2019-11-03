import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as home } from '../containers/home/store';

const reducer = combineReducers({
  home
})

const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
}
const getClientStore = () => {
  const initState = window.__context__.state;
  return createStore(reducer, initState, applyMiddleware(thunk));
}

export {
  getStore, getClientStore
};