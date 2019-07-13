import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';

const initialState = {
  error: null,
  pending: false,
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: null,
        pending: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        pending: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
