import { combineReducers } from "redux";
import toDoReducer from ".";

const allReducers = combineReducers({
  todos: toDoReducer,
});

export default allReducers;
