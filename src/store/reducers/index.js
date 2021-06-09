import {combineReducers} from 'redux';
import LogsReducer from './logs';

export const reducers = combineReducers({
    LogsReducer: LogsReducer,
});

