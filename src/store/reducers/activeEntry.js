import {
  SET_ACTIVE_ENTRY,
  REMOVE_ACTIVE_ENTRY
} from '../actions';

export default (state = null, action) => {
  switch (action.type) {
    case SET_ACTIVE_ENTRY:
      return action.payload;
    case REMOVE_ACTIVE_ENTRY:
      return null;
    default:
      return state;
  }
};