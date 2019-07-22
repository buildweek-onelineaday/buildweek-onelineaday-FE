import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { signupReducer } from './signupReducer';
import { quoteCardReducer } from './quoteCardReducer';
import activeEntry from './activeEntry';
import entries from './entries';
import modalOpen from './modalOpen';

export default combineReducers({
  loginReducer,
  signupReducer,
  quoteCardReducer,
  entries,
  activeEntry,
  modalOpen,
});
