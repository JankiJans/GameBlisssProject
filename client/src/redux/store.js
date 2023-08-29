import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';

import usersReducer from './usersRedux';
import productsReducer from './productsRedux';
import orderReducer from './orderRedux';
import cartReducer from './cartRedux';

const subreducers = {
  user: usersReducer,
  products: productsReducer,
  cart: cartReducer,
  orders: orderReducer
};

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
