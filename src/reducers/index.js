import { combineReducers } from 'redux';
import authReducer from './authReducers';
import errorReducer from './errorReducers';

const rootReducer = combineReducers({
    auth: authReducer,
    error: errorReducer
});

export default rootReducer;