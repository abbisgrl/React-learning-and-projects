import { combineReducers } from 'redux';
import taskManage from './taskmanage';

const rootReducer = combineReducers({
    task: taskManage
})


export default rootReducer