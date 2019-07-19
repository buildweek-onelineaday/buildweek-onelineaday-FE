import { LOGIN_SUCCESS } from '../actions';

export const addTokenToLocalStorage = (store) => (next) => (action) => {
  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem('userToken', action.payload);
  }
  next(action);
};
