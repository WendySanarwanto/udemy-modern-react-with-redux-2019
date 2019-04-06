import { SIGNED_IN, SIGNED_OUT } from './types';

export const signedIn = (userId, authToken, userProfile) => {
  return {
    type: SIGNED_IN,
    payload: { 
      userId, authToken, userProfile
    }  
  };
}

export const signedOut = () => {
  return {
    type: SIGNED_OUT    
  };
}

export * from './types';