import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { signupReducer } from './signupReducer';
import { quoteCardReducer } from './quoteCardReducer';
import entries from './entries';

export default combineReducers({
  loginReducer,
  signupReducer,
  quoteCardReducer,
  entries,
});
