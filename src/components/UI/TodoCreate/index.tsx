import {FormEvent, useRef} from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { addTodo } from "../../../store/slices/todoSlice";

import { Box, Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { TodoStatus } from "../../../interfaces/enum";

const TodoCreate = () => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLFormElement>(null);

  const handleAdd = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    // @ts-expect-error
    const name = event?.target?.name?.value

    if (!name) return;

    const payload = {
      id: Date.now(),
      name,
      status: TodoStatus.UNCOMPLETED,
    };

    dispatch(addTodo(payload));
    ref.current?.reset();
  };

  return (
    <Box
      component={"form"}
      onSubmit={handleAdd}
      ref={ref}
      sx={{
        display: "flex",
        gap: "5px",
      }}
    >
      <TextField name={"name"} fullWidth sx={{}} />
      <Button
        type="submit"
        startIcon={<AddIcon />}
        variant="contained"
        sx={{
          minWidth: "100px",
        }}
      >
        Add
      </Button>
    </Box>
  );
};

export default TodoCreate;
