import { combineReducers } from 'redux';
// import UserReducer from './reducer-users';
// import ActiveUserReducer from './reducer-active-user';
import TodoReducer from './reducer-todo';



const allReducers = combineReducers({
    // users: UserReducer,
    // activeUser: ActiveUserReducer,
    todo: TodoReducer,
});

export default allReducers;
