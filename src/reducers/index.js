import {combineReducers} from 'redux';
import testReducer from './testReducer';
import authReducer from './authReducer';
import userInfoReducer from './userInfoReducer';

const rootReducer = combineReducers({
    testState: testReducer,
    authState: authReducer,
    userInfo: userInfoReducer
});

export default rootReducer;
