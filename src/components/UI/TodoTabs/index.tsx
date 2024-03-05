import { SyntheticEvent } from "react";

import useFilterTodos from "../../../hooks/useFilterTodos";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppDispatch";
import { changeFilterStatus } from "../../../store/slices/todoSlice.ts";

import { TabContext, TabList } from "@mui/lab";
import { Box, Tab } from "@mui/material";

import { FilterStatus } from "../../../interfaces/general.ts";
import { TodoStatus } from "../../../interfaces/enum.ts";

import TodoList from "../TodoList";
import { StyledTabPanel } from "./style";

const TodoTabs = () => {
  const dispatch = useAppDispatch();
  const { filteredTodos, todosLength, uncompletedLength, completedLength } =
    useFilterTodos();

  const filterStatus = useAppSelector((state) => state.todo.filterStatus);

  // @ts-ignore
  const handleChange = (event: SyntheticEvent, newValue: FilterStatus) => {
    dispatch(changeFilterStatus(newValue));
  };

  return (
    <TabContext value={filterStatus}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label={`All (${todosLength})`} value="ALL" />
          <Tab
            label={`Completed (${completedLength})`}
            value={TodoStatus.COMPLETED}
          />
          <Tab
            label={`Uncompleted (${uncompletedLength})`}
            value={TodoStatus.UNCOMPLETED}
          />
        </TabList>
      </Box>

      <StyledTabPanel value="ALL">
        <TodoList list={filteredTodos} />
      </StyledTabPanel>
      <StyledTabPanel value={TodoStatus.COMPLETED}>
        <TodoList list={filteredTodos} />
      </StyledTabPanel>
      <StyledTabPanel value={TodoStatus.UNCOMPLETED}>
        <TodoList list={filteredTodos} />
      </StyledTabPanel>
    </TabContext>
  );
};

export default TodoTabs;
