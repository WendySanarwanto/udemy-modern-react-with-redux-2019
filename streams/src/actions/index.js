import { SIGNED_IN, SIGNED_OUT } from './types';

export const signedIn = () => {
  return {
    type: SIGNED_IN    
  };
}

export const signedOut = () => {
  return {
    type: SIGNED_OUT    
  };
}

export * from './types';