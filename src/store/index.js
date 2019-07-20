import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {
  addTokenToLocalStorage as addToken,
  removeTokenFromLocalStorage as removeToken,
} from './middleware/userToken';
import rootReducer from './reducers';

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk, addToken, removeToken, logger),
);
