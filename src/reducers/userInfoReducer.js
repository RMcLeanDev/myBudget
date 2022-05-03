import constants from './../constants';
const {types, userInfo} = constants

const userInfoReducer = (state = userInfo, action) => {
    let newState;
    switch (action.type) {
      case types.SET_USER_INFO:
        newState = state;
          newState = action;
        return newState;
      case types.DUMP_USER_INFO:
        newState = state;
          newState = null;
        return newState;
      default:
        return state;
    }
  }
  
  export default userInfoReducer;