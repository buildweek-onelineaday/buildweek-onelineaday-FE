import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const login = (loginInfo) => (dispatch) => {
  dispatch({ type: LOGIN_START });
  const request = axios.post(``, loginInfo);
  request
    .then((response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data.payload,
      });
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: `${error}`,
      });
    });
};

export const signUp = (signupInfo) => (dispatch) => {
  dispatch({ type: SIGNUP_START });
  const request = axios.post(``, signupInfo);
  request
    .then((response) => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: response.data.payload,
      });
    })
    .catch((error) => {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: `${error}`,
      });
    });
};
