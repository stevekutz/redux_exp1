import {combineReducers} from 'redux';

import titleReducer from './titleReducer';
import taskReducer from './taskReducer';

export default combineReducers({
    titleReducer,
    tasks: taskReducer
});