import { useMemo } from "react";

import { useAppSelector } from "./useAppDispatch";
import { TodoStatus } from "../interfaces/enum";
import { ITodo } from "../interfaces/general";

const useFilterTodos = () => {
  const status = useAppSelector((state) => state.todo.filterStatus);
  const todos = useAppSelector((state) => state.todo.todos);

  return useMemo(() => {
    const completedTodos: ITodo[] = [];
    const unCompletedTodos: ITodo[] = [];

    for (const todo of todos) {
      switch (todo.status) {
        case TodoStatus.COMPLETED: {
          completedTodos.push(todo);
          break;
        }
        case TodoStatus.UNCOMPLETED: {
          unCompletedTodos.push(todo);
          break;
        }
        default: {
          break;
        }
      }
    }

    const filteredTodos =
      status === "ALL"
        ? todos
        : status === TodoStatus.UNCOMPLETED
          ? unCompletedTodos
          : completedTodos;

    return {
      filteredTodos,
      todosLength: todos.length,
      uncompletedLength: unCompletedTodos.length,
      completedLength: completedTodos.length,
    };
  }, [status, todos]);
};

export default useFilterTodos;



