import { combineReducers } from 'redux';
import { reducer as formReducer }  from 'redux-form';
import auth from './authReducer';

const combinedReducers = combineReducers({
  auth,
  form: formReducer
});

export default combinedReducers;