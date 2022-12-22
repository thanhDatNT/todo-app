import {
    ActionCreatorWithOptionalPayload, ActionCreatorWithPayload,
    createAction
} from "@reduxjs/toolkit";
import {ITodo} from "../../constants/interfaces/todo";

export const initAct:ActionCreatorWithOptionalPayload<any> = createAction("INIT_ACTION");
export const addTodo: ActionCreatorWithPayload<ITodo> = createAction("ADD_TODO_ITEM");
export const updateTodo:ActionCreatorWithPayload<ITodo> = createAction("UPDATE_TODO_ITEM");