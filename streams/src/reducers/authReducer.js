import { SIGNED_IN, SIGNED_OUT } from '../actions';

const INITIAL_STATE = {
  isSignedIn: null
};

const authReducer = (state = INITIAL_STATE, action) => {
  // console.log(`action: \n`, action);
  switch(action.type) {
    case SIGNED_IN: 
      return {...state, isSignedIn: true};
    case SIGNED_OUT: 
      const updatedState = {...state, isSignedIn: false};
      return updatedState;
    default: 
      return state;
  }
}

export default authReducer;