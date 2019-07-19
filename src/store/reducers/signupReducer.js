import { SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions';

const initialState = {
  message: null,
  pending: false,
};

export function signupReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
        message: '',
        pending: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        message: action.payload,
        pending: false,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
}
