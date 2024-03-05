import { Box, Typography } from "@mui/material";
import {FC, ReactElement} from "react";

interface IProps {}

const TodoTitle: FC<IProps> = (): ReactElement => {
  return (
    <Box>
      <Typography variant="h4" my={1}>
        TODO list
      </Typography>
    </Box>
  );
};
export default TodoTitle;
