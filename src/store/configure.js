import { combineReducers, createStore } from "redux";
import todosReducer from "../state/todos/reducer";

const rootReducer = combineReducers({ todos: todosReducer });

export default createStore(rootReducer);
