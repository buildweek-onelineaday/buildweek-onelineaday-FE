import {
  ADD_ENTRY_SUCCESS,
  DELETE_ENTRY_SUCCESS
} from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_ENTRY_SUCCESS:
      return [
        action.payload,
        ...state
      ];
    case DELETE_ENTRY_SUCCESS:
      return state.filter(entry => entry.id !== action.payload);
    default:
      return state;
  }
};