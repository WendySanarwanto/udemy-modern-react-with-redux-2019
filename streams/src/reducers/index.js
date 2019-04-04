import { combineReducers } from 'redux';

const combinedReducers = combineReducers({
  delme: (state = [], action) => { return state; }
});

export default combinedReducers;