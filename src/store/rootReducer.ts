import { combineReducers } from 'redux';
import { userReduser } from './user/reducer';
import { bookReducer } from './book/reducer';

export default combineReducers({
  user: userReduser,
  book: bookReducer,
});
