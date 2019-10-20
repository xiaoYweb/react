import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as home } from '../containers/home/store';

const getStore = () => {
  const reducer = combineReducers({
    home
  })
  return createStore(reducer, applyMiddleware(thunk));
}

export default getStore;