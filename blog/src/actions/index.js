
import _ from 'lodash';

import jsonPlaceholder from '../shared/jsonPlaceholder.axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_USER = 'FETCH_USER';

export const fetchPostsAndUsers = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts());

    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach(userId => dispatch(fetchUser(userId)));

    _.chain(getState().posts)
      .map(`userId`)
      .uniq()
      .forEach(userId => dispatch(fetchUser(userId)))
      .value();
  };
}

// export const fetchPosts = () => async (dispatch, getState) => {
//   const response = await jsonPlaceholder.get('/posts');
//   let posts = response && response.status === 200 ? response.data : [];
//   dispatch({ type: FETCH_POSTS, payload: posts });
// };

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    let posts = response && response.status === 200 ? response.data : [];
    dispatch({ type: FETCH_POSTS, payload: posts });    
  };
}

// Without memoization
export const fetchUser = (userId) => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${userId}`);

    console.log(`response fetchUser: \n`, response);
    let user = response && response.status === 200 ? response.data : {};
    dispatch({ type: FETCH_USER, payload: user })
  }
}

// // Memoize FETCH_USER, to ensure that fetchUser method is not repeated to be called with same userId argument
// export const fetchUser = userId => dispatch => _fetchUser(userId, dispatch);

// const _fetchUser = _.memoize( async (userId, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${userId}`);
//   const user = response && response.status === 200 ? response.data : {};
//   dispatch({ type: FETCH_USER, payload: user })
// });
