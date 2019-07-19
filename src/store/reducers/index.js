import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { signupReducer } from './signupReducer';
import activeEntry from './activeEntry';
import entries from './entries';
import modalOpen from './modalOpen';

export default combineReducers({
  loginReducer,
  signupReducer,
  activeEntry,
  entries,
  modalOpen
});
