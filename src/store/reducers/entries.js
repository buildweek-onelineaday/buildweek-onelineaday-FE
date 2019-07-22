import {
  ADD_ENTRY_START,
  ADD_ENTRY_SUCCESS,
  ADD_ENTRY_FAILURE,
  DELETE_ENTRY_START,
  DELETE_ENTRY_SUCCESS,
  DELETE_ENTRY_FAILURE,
  FETCH_ENTRIES_START,
  FETCH_ENTRIES_SUCCESS,
  FETCH_ENTRIES_FAILURE,
  UPDATE_ENTRY_START,
  UPDATE_ENTRY_SUCCESS,
  UPDATE_ENTRY_FAILURE
} from '../actions';

const initialState = {
  adding: false,
  deleting: false,
  fetching: false,
  updating: false,
  error: null,
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENTRY_START:
      return {
        ...state,
        adding: true
      };
    case ADD_ENTRY_SUCCESS:
      return {
        ...state,
        adding: false,
        list: [
          ...state.list,
          action.payload
        ]
      };
    case ADD_ENTRY_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case DELETE_ENTRY_START:
      return {
        ...state,
        deleting: true
      };
    case DELETE_ENTRY_SUCCESS:
      return {
        ...state,
        deleting: false,
        list: state.list.filter(entry => entry.id !== action.id)
      }
    case DELETE_ENTRY_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case FETCH_ENTRIES_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_ENTRIES_SUCCESS:
      return {
        ...state,
        fetching: false,
        list: action.payload
      };
    case FETCH_ENTRIES_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case UPDATE_ENTRY_START:
      return {
        ...state,
        updating: true
      };
    case UPDATE_ENTRY_SUCCESS:
      return {
        ...state,
        list: state.list.map(entry => entry.id === action.id ? {...entry, post: action.text} : entry)
      }
    case UPDATE_ENTRY_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};