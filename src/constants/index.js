import * as types from './ActionTypes';
import {initialState, authState, userInfo} from './InitialState';
import firebaseConfig from './firebaseConfig';

/*eslint-disable */

export default {
  initialState: initialState,
  firebaseConfig: firebaseConfig,
  authState: authState,
  userInfo: userInfo,
  types: types
}