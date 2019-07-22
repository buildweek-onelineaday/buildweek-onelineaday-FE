import axios from 'axios';
import auth from '../auth';
import ls from 'local-storage';

// USER LOGIN AND CREATION ACTION VARIABLES
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

// ENTRY CRUD ACTION VARIABLES
export const ADD_ENTRY_START = 'ADD_ENTRY_START';
export const ADD_ENTRY_SUCCESS = 'ADD_ENTRY_SUCCESS';
export const ADD_ENTRY_FAILURE = 'ADD_ENTRY_FAILURE';
export const DELETE_ENTRY_START = 'DELETE_ENTRY_START';
export const DELETE_ENTRY_SUCCESS = 'DELETE_ENTRY_SUCCESS';
export const DELETE_ENTRY_FAILURE = 'DELETE_ENTRY_FAILURE';
export const FETCH_ENTRIES_START = 'GET_ENTRIES_START';
export const FETCH_ENTRIES_SUCCESS = 'GET_ENTRIES_SUCCESS';
export const FETCH_ENTRIES_FAILURE = 'GET_ENTRIES_FAILURE';
export const UPDATE_ENTRY_START = 'UPDATE_ENTRY_START';
export const UPDATE_ENTRY_SUCCESS = 'UPDATE_ENTRY_SUCCESS';
export const UPDATE_ENTRY_FAILURE = 'UPDATE_ENTRY_FAILURE';
export const REMOVE_ACTIVE_ENTRY = 'REMOVE_ACTIVE_ENTRY';
export const SET_ACTIVE_ENTRY = 'SET_ACTIVE_ENTRY';

// GOOFY FETCH ACTION VARIABLES
export const QUOTE_FETCH_START = 'QUOTE_FETCH_START';
export const QUOTE_FETCH_SUCCESS = 'QUOTE_FETCH_SUCCESS';
export const QUOTE_FETCH_FAILURE = 'QUOTE_FETCH_FAILURE';

// MODAL ACTION VARIABLES
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

// USER ID
const uid = ls.get('userId');

// ACTIONS
export const login = (loginInfo) => (dispatch) => {
  dispatch({ type: LOGIN_START });
  const request = axios.post(`https://pt-one-line-a-day.herokuapp.com/login`, loginInfo);
  request
    .then((response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: `${error}`,
      });
    });
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const signUp = (signupInfo) => (dispatch) => {
  dispatch({ type: SIGNUP_START });
  const request = axios.post(`https://pt-one-line-a-day.herokuapp.com/register`, signupInfo);
  request
    .then((response) => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: `${response.data}`,
      });
    })
    .catch((error) => {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: `${error}`,
      });
    });
};

export const fetchEntries = () => dispatch => {
  dispatch({ type: FETCH_ENTRIES_START });

  return auth().get(`https://pt-one-line-a-day.herokuapp.com/posts/user/${uid}`)
              .then(r => dispatch({
                type: FETCH_ENTRIES_SUCCESS,
                payload: r.data
              }))
              .catch(err => dispatch({
                type: FETCH_ENTRIES_FAILURE,
                error: `${err}`
              }));
};

export const addEntry = (text) => dispatch => {
  dispatch({ type: ADD_ENTRY_START });

  return auth().post('https://pt-one-line-a-day.herokuapp.com/posts', {
    post: text,
    user_id: `${uid}`
  })
  .then(r => dispatch({
    type: ADD_ENTRY_SUCCESS,
    payload: r.data
  }))
  .catch(err => dispatch({
    type: ADD_ENTRY_FAILURE,
    error: `${err}`
  }));
};

export const deleteEntry = (id) => dispatch => {
  dispatch({ type: DELETE_ENTRY_START });

  return auth().delete(`https://pt-one-line-a-day.herokuapp.com/posts/${id}`)
                .then(r => dispatch({
                  type: DELETE_ENTRY_SUCCESS,
                  id
                }))
                .catch(err => dispatch({
                  type: DELETE_ENTRY_FAILURE,
                  payload: `${err}`
                }));
};

export const getCardQuote = () => (dispatch) => {
  dispatch({ type: QUOTE_FETCH_START });
  const request = axios.get(`http://ron-swanson-quotes.herokuapp.com/v2/quotes`);
  request
    .then((response) => {
      dispatch({
        type: QUOTE_FETCH_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: QUOTE_FETCH_FAILURE,
        payload: `${error}`,
      });
    });
};

export const updateEntry = (id, text) => (dispatch) => {
  dispatch({ type: UPDATE_ENTRY_START });

  return auth().put(`https://pt-one-line-a-day.herokuapp.com/posts/${id}`, {
    post: text,
    user_id: `${uid}`
  })
  .then(r => {
    dispatch({
      type: UPDATE_ENTRY_SUCCESS,
      id,
      text
    });
    dispatch({ type: CLOSE_MODAL });
    dispatch({ type: REMOVE_ACTIVE_ENTRY });
  })
  .catch(err => dispatch({
    type: UPDATE_ENTRY_FAILURE,
    payload: `${err}`
  }));
};

export const openModal = (entry) => (dispatch) => {
  dispatch({ type: OPEN_MODAL });
  dispatch({
    type: SET_ACTIVE_ENTRY,
    payload: entry,
  });
};

export const closeModal = () => (dispatch) => {
  dispatch({ type: CLOSE_MODAL });
  dispatch({ type: REMOVE_ACTIVE_ENTRY });
};
