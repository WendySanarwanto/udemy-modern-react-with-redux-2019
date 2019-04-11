import streamyApi from "../api/streamy.axios";

import { SIGNED_IN, SIGNED_OUT,
  CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, DELETE_STREAM, EDIT_STREAM
} from './types';

const STREAMS_API_PATH = "/streams";

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

export const createStream = (title, description) => async dispatch => {
  const response = 
    await streamyApi.post(STREAMS_API_PATH, { title, description });
  dispatch({ type: CREATE_STREAM, payload: response.data });  
}

export const fetchStreams = () => async dispatch => {
  const response = await streamyApi.get(STREAMS_API_PATH);
  dispatch({ type: FETCH_STREAMS, payload: response.data});
}

export const fetchStream = (id) => async dispatch => {
  const response = await streamyApi.get(`${STREAMS_API_PATH}/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
}

export const editStream = (id, title, description) => async dispatch => {
  const response = await streamyApi.put(`${STREAMS_API_PATH}/${id}`, { title, description });
  dispatch({ type: EDIT_STREAM, payload: response.data });
}

export const deleteStream = (id) => async dispatch => {
  await streamyApi.delete(`${STREAMS_API_PATH}/${id}`);
  dispatch({ type: DELETE_STREAM, paylaod: id });
}

export * from './types';