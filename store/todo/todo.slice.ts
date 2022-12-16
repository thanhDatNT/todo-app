import {ITodo} from "../../constants/interfaces/todo";
import {createSlice, Draft, PayloadAction, Slice} from "@reduxjs/toolkit";

export interface ITodoSlice {
    loading:boolean;
    todoList:ITodo[];
}

const initialState:ITodoSlice = {
    loading: false,
    todoList: []
}

export const todoSlice:Slice = createSlice({
    name:"todoList",
    initialState,
    reducers:{
        initAction:(state)=>{
            state.loading = true;
        },
        addTodoItem:(state, action:PayloadAction<ITodo>)=>{
            state.todoList.push(action.payload);
            state.loading = false;
        },
        updateTodoItem:(state, action:PayloadAction<ITodo>)=>{
            if(state.todoList.find((todo:ITodo) => todo.id === action.payload.id))
                state.todoList = state.todoList.map((todo:ITodo)=>{
                    return todo.id === action.payload.id ? action.payload : todo;
                })
            state.loading = false;
        }
    }
})

export const todoReducer = todoSlice.reducer;
export const {
    initAction, addTodoItem, updateTodoItem
} = todoSlice.actions;