import { combineReducers } from 'redux';

import posts from './postsReducer';
import users from './usersReducer';

export default combineReducers({
  posts,
  users
});