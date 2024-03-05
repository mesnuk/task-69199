import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { changeStatusTodo } from "../../../store/slices/todoSlice";

import { Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CheckIcon from "@mui/icons-material/Check";

import { TodoStatus } from "../../../interfaces/enum";
import { ITodo } from "../../../interfaces/general";

import { StyledItemWrapper, StyledWrapper } from "./style";

interface IProps {
  list: ITodo[];
}

const TodoList = ({ list }: IProps) => {
  const dispatch = useAppDispatch();

  const handleToggleTask = (id: number) => {
    dispatch(changeStatusTodo(id));
  };

  return (
    <StyledWrapper>
      {list?.length ? (
        list?.map((el) => (
          <StyledItemWrapper
            key={el.id}
            onClick={() => handleToggleTask(el.id)}
            sx={{
              background:
                el.status === TodoStatus.UNCOMPLETED
                  ? "rgba(255, 140, 0, 0.3)"
                  : "rgba(127,255,0, 0.3)",
            }}
          >
            <Typography>{el.name}</Typography>
            {el.status === TodoStatus.UNCOMPLETED ? (
              <MoreHorizIcon />
            ) : (
              <CheckIcon />
            )}
          </StyledItemWrapper>
        ))
      ) : (
        <Typography mt={10} variant={"h5"} textAlign={"center"}>
          No todos
        </Typography>
      )}
    </StyledWrapper>
  );
};
export default TodoList;
