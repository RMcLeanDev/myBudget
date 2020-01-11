import {combineReducers} from 'redux';
import testReducer from './testReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    authState: authReducer,
    testState: testReducer
});

export default rootReducer;
