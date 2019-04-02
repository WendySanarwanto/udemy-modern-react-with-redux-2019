import { FETCH_POSTS } from '../actions';

// PostList reducer
const posts = (oldPosts = [], action) => {
  // console.log(`action: \n`, action);
  switch(action.type) {
    case FETCH_POSTS: 
      const _posts = action.payload;
      return [...oldPosts, ..._posts];
    default:
      return oldPosts;
  }
}

export default posts;