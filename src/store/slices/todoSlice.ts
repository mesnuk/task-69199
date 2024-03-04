import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {ITodo} from "../../interfaces/general";
import {TodoStatus} from "../../interfaces/enum";

type FilterStatus = TodoStatus | "ALL";

interface ITodoState {
  todos: ITodo[];
  filterStatus: FilterStatus;
}

const initialState: ITodoState = {
  todos: [],
  filterStatus: "ALL"
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload)
    },
    changeStatusTodo: (state, action: PayloadAction<{id: number }>) => {
      const { id } = action.payload;

      const todoIndex = state.todos.findIndex(todo => todo.id === id);

      if(todoIndex !== -1){
        state.todos[todoIndex] = {
          ...state.todos[todoIndex],
          status: state.todos[todoIndex].status === TodoStatus.COMPLETED ? TodoStatus.UNCOMPLETED : TodoStatus.COMPLETED
        };

      }
    },
  },
})

export const { changeStatusTodo, addTodo } = todoSlice.actions

export default todoSlice.reducer