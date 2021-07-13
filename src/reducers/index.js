import {combineReducers} from "redux";
import {counterReducer} from "./counterReducer";
import {todosReducer} from "./todosReduser";

export const rootReducer = combineReducers({
    counterReducer,
    todosReducer
})
