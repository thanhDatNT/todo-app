import {PayloadAction} from "@reduxjs/toolkit";
import {ITodo} from "../../constants/interfaces/todo";
import {addTodoItem, initAction, updateTodoItem} from "./todo.slice";
import {addTodo, updateTodo} from "./todo.action";
import {delay, put, takeLatest} from "redux-saga/effects";

function* addTodoItemHandler(action:PayloadAction<ITodo>){
    try {
        // @ts-ignore
        yield put(initAction());
        yield delay(2000)
        yield put(addTodoItem(action.payload));
    }
    catch (e) {
        console.log(e)
    }
}

function* updateTodoItemHandler(action:PayloadAction<ITodo>){
    try {
        // @ts-ignore
        yield put(initAction());
        yield delay(2000);
        yield put(updateTodoItem(action.payload));
    }
    catch (e) {
        console.log(e)
    }
}

export function* todoSaga(){
    yield takeLatest(addTodo.type,addTodoItemHandler)
    yield takeLatest(updateTodo.type,updateTodoItemHandler)
}