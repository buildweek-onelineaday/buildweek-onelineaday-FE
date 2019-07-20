import { LOGIN_SUCCESS, LOGOUT } from '../actions';

export const addTokenToLocalStorage = (store) => (next) => (action) => {
  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem('userToken', action.payload);
  }
  next(action);
};

export const removeTokenFromLocalStorage = (store) => (next) => (action) => {
  if (action.type === LOGOUT) {
    localStorage.removeItem('userToken');
  }
  next(action);
};
