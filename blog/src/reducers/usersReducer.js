import { FETCH_USER } from "../actions";

const users = (state = [], action) => {
  // console.log(`<usersReducer> action: \n`, action);
  switch (action.type) {
    case FETCH_USER:
      // console.log(`<usersReducer> action.payload: \n`, action.payload);
      const user = action.payload;
      const updatedState = [...state, user];
      return updatedState;

    default:
      return state;
  }
};

// console.log(`<usersReducer> action.payload: \n`, action.payload);
export default users;
