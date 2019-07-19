import axios from 'axios';
import auth from '../auth';

// USER LOGIN AND CREATION ACTION VARIABLES
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
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

// ACTIONS
export const login = (loginInfo) => (dispatch) => {
  dispatch({ type: LOGIN_START });
  const request = axios.post(`https://pt-one-line-a-day.herokuapp.com/login`, loginInfo);
  request
    .then((response) => {
      console.log(response);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data.payload, // TODO: update to match what is being received from backend
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
  console.log(signupInfo);
  const request = axios.post(`https://pt-one-line-a-day.herokuapp.com/register`, signupInfo);
  request
    .then((response) => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: `${response}`,
      });
    })
    .catch((error) => {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: `${error}`,
      });
    });
};

export const addEntry = (text) => ({
  type: ADD_ENTRY_SUCCESS,
  payload: {
    id: Date.now(),
    date: Date.now(),
    text,
  },
});

export const deleteEntry = (id) => ({
  type: DELETE_ENTRY_SUCCESS,
  payload: id,
});

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
  dispatch({
    type: UPDATE_ENTRY_SUCCESS,
    id,
    text,
  });
  dispatch({ type: CLOSE_MODAL });
  dispatch({ type: REMOVE_ACTIVE_ENTRY });
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
