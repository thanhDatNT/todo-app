import {combineReducers, Reducer} from '@reduxjs/toolkit';
import {todoReducer} from "./todo/todo.slice";

const rootReducer:Reducer = combineReducers({
    todo:todoReducer
})

export default  rootReducer;