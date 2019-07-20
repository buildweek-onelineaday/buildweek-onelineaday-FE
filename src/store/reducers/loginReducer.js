import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';

const initialState = {
  message: null,
  pending: false,
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        message: '',
        pending: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        pending: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        message: `${action.payload}`,
      };
    default:
      return state;
  }
}
