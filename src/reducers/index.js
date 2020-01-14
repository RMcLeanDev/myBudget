import {combineReducers} from 'redux';
import testReducer from './testReducer';
import authReducer from './authReducer';
import userInformationReducer from './userInformationReducer';

const rootReducer = combineReducers({
    authState: authReducer,
    userInformationState: userInformationReducer,
    testState: testReducer
});

export default rootReducer;
