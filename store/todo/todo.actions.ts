import {ActionCreatorWithOptionalPayload, ActionCreatorWithoutPayload} from "@reduxjs/toolkit";
import {createAction} from "@reduxjs/toolkit/src/createAction";
import {ITodo} from "../../constants/interfaces/todo";

export const initAction:ActionCreatorWithoutPayload = createAction("INIT_ACTION");
export const addTodoItem:ActionCreatorWithOptionalPayload<ITodo> = createAction("ADD_TODO_ITEM");
export const updateTodoItem:ActionCreatorWithOptionalPayload<ITodo> = createAction("UPDATE_TODO_ITEM");