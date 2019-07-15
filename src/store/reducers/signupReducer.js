import { SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions';

const initialState = {
  error: null,
  pending: false,
};

export function signupReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
        error: null,
        pending: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        error: null,
        pending: false,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
