import axios from 'axios';

export const LOGIN_START = 'LOGGING_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

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
