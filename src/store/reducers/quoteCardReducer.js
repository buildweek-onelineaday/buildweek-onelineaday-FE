import { QUOTE_FETCH_START, QUOTE_FETCH_SUCCESS, QUOTE_FETCH_FAILURE } from '../actions';

const initialState = {
  error: null,
  pending: false,
  quote: '',
};

export function quoteCardReducer(state = initialState, action) {
  switch (action.type) {
    case QUOTE_FETCH_START:
      return {
        ...state,
        pending: true,
      };
    case QUOTE_FETCH_SUCCESS:
      return {
        ...state,
        pending: false,
        quote: action.payload,
      };
    case QUOTE_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
