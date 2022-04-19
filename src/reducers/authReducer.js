import constants from './../constants';
const {types, authState} = constants

const authReducer = (state = authState, action) => {
    let newState;
    switch (action.type) {
      case types.AUTH_USER_TRUE:
        newState = state;
          newState = true;
          console.log("hi")
        return newState;
      case types.AUTH_USER_FALSE:
        newState = state;
          newState = false;
          console.log("nay")
        return newState;
      default:
        return state;
    }
  }
  
  export default authReducer