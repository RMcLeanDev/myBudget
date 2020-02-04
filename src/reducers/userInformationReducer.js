import constants from './../constants';
const {types, userInformationState} = constants

const userInformationReducer = (state = userInformationState, action) => {
  let newState;
  switch (action.type) {
    case types.SET_USER_INFORMATION:
      newState = state;
        newState = action.information;
      return newState;
    case types.DUMP_USER_INFORMATION:
      newState = state;
        newState = null;
      return newState;
    default:
      return state;
  }
}

export default userInformationReducer;