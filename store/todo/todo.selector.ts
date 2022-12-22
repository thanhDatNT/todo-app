import {RootState} from "../configStore";
import {ITodoSlice} from "./todo.slice";

export const todoState = (state:RootState):ITodoSlice => state.todo;