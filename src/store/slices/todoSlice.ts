import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { FilterStatus, ITodo } from "../../interfaces/general";
import { TodoStatus } from "../../interfaces/enum";

interface ITodoState {
  todos: ITodo[];
  filterStatus: FilterStatus;
}

const initialState: ITodoState = {
  todos: [],
  filterStatus: "ALL",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload);
    },
    changeFilterStatus: (state, action: PayloadAction<FilterStatus>) => {
      state.filterStatus = action.payload;
    },
    changeStatusTodo: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      const todoIndex = state.todos.findIndex((todo) => todo.id === id);

      if (todoIndex !== -1) {
        state.todos[todoIndex] = {
          ...state.todos[todoIndex],
          status:
            state.todos[todoIndex].status === TodoStatus.COMPLETED
              ? TodoStatus.UNCOMPLETED
              : TodoStatus.COMPLETED,
        };
      }
    },
  },
});

export const { changeStatusTodo, addTodo, changeFilterStatus } =
  todoSlice.actions;

export default todoSlice.reducer;
