import {all} from "redux-saga/effects";
import {todoSaga} from "./todo/todo.handle";

export function* rootSaga(){
    yield all([todoSaga()])
}