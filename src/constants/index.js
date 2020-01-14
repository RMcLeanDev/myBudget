import * as types from './ActionTypes';
import {initialState, authState, userInformationState} from './InitialState';
import firebaseConfig from './firebaseConfig';

export default {
  initialState: initialState,
  authState: authState,
  userInformationState: userInformationState,
  firebaseConfig: firebaseConfig,
  types: types
}
