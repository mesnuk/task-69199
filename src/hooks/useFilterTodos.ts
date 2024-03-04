import {useMemo} from "react";

import {useAppSelector} from "./useAppDispatch";


const useFilterTodos = () => {

  const status = useAppSelector((state) => state.todo.filterStatus);
  const todos = useAppSelector((state) => state.todo.todos);

  const filteredTodos = useMemo(() => {
    if(status === "ALL") return todos;

    return todos?.filter(todo => todo?.status === status)
  }, [status, todos]);


  return {
    filteredTodos,
  };
}

export default useFilterTodos;