import { LOGIN_SUCCESS, LOGOUT } from '../actions';

export const addTokenToLocalStorage = (store) => (next) => (action) => {
  if (action.type === LOGIN_SUCCESS) {
    const userInfo = {
      id: action.payload.user_id,
      token: action.payload.your_token,
    };
    localStorage.setItem('userId', userInfo.id);
    localStorage.setItem('userToken', userInfo.token);
  }
  next(action);
};

export const removeTokenFromLocalStorage = (store) => (next) => (action) => {
  if (action.type === LOGOUT) {
    localStorage.removeItem('userInfo');
  }
  next(action);
};
